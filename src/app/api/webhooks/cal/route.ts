import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { createServiceClient } from "@/lib/supabase"

const EVENT_SLUG = "the-shift-feb-26"

function verifySignature(payload: string, signature: string | null, secret: string): boolean {
    if (!signature || !secret) return !secret
    const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex")
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export async function POST(request: NextRequest) {
    const body = await request.text()
    const signature = request.headers.get("x-cal-signature-256")
    const webhookSecret = process.env.CAL_WEBHOOK_SECRET || ""

    if (webhookSecret && !verifySignature(body, signature, webhookSecret)) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    const data = JSON.parse(body)
    const { triggerEvent, payload } = data
    const supabase = createServiceClient()

    await supabase.from("webhook_log").insert({
        source: "calcom",
        event_type: triggerEvent,
        payload: data,
        processed: false,
    })

    if (triggerEvent === "BOOKING_PAID" || triggerEvent === "BOOKING_CREATED") {
        const bookingUid = payload?.uid || payload?.bookingId?.toString()
        const attendeeEmail = payload?.attendees?.[0]?.email || payload?.responses?.email?.value || ""
        const attendeeName = payload?.attendees?.[0]?.name || payload?.responses?.name?.value || ""
        const amountCents = payload?.price ? Math.round(payload.price * 100) : 9900

        const { data: existing } = await supabase
            .from("bookings")
            .select("id")
            .eq("cal_booking_uid", bookingUid)
            .single()

        if (existing) {
            return NextResponse.json({ status: "duplicate", bookingUid })
        }

        const { data: event } = await supabase
            .from("events")
            .select("id, sold_seats, total_seats")
            .eq("slug", EVENT_SLUG)
            .single()

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 })
        }

        if (event.sold_seats >= event.total_seats) {
            return NextResponse.json({ error: "Sold out" }, { status: 409 })
        }

        await supabase.from("bookings").insert({
            event_id: event.id,
            email: attendeeEmail,
            name: attendeeName,
            cal_booking_uid: bookingUid,
            status: "confirmed",
            amount_cents: amountCents,
            currency: "EUR",
        })

        await supabase
            .from("events")
            .update({ sold_seats: event.sold_seats + 1 })
            .eq("id", event.id)

        await supabase
            .from("webhook_log")
            .update({ processed: true })
            .eq("payload->>uid", bookingUid)
    }

    if (triggerEvent === "BOOKING_CANCELLED") {
        const bookingUid = payload?.uid || payload?.bookingId?.toString()

        const { data: booking } = await supabase
            .from("bookings")
            .select("id, event_id, status")
            .eq("cal_booking_uid", bookingUid)
            .single()

        if (booking && booking.status === "confirmed") {
            await supabase
                .from("bookings")
                .update({ status: "cancelled" })
                .eq("id", booking.id)

            const { data: event } = await supabase
                .from("events")
                .select("id, sold_seats")
                .eq("id", booking.event_id)
                .single()

            if (event && event.sold_seats > 0) {
                await supabase
                    .from("events")
                    .update({ sold_seats: event.sold_seats - 1 })
                    .eq("id", event.id)
            }
        }
    }

    return NextResponse.json({ status: "ok" })
}
