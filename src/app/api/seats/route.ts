import { NextRequest, NextResponse } from "next/server"
import { getSupabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
    const slug = request.nextUrl.searchParams.get("slug") || "the-shift-feb-26"

    const { data: event, error } = await getSupabase()
        .from("events")
        .select("name, total_seats, sold_seats, status, date")
        .eq("slug", slug)
        .single()

    if (error || !event) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 })
    }

    return NextResponse.json({
        name: event.name,
        totalSeats: event.total_seats,
        soldSeats: event.sold_seats,
        seatsLeft: event.total_seats - event.sold_seats,
        status: event.status,
        date: event.date,
    })
}
