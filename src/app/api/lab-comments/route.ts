import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase"

export async function GET(req: NextRequest) {
    const page = req.nextUrl.searchParams.get("page")
    if (!page) return NextResponse.json({ error: "Missing page param" }, { status: 400 })

    const supabase = createServiceClient()
    const { data, error } = await supabase
        .from("lab_comments")
        .select("id, author_name, content, created_at")
        .eq("page_slug", page)
        .order("created_at", { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { page_slug, author_name, content } = body

    if (!page_slug || !author_name?.trim() || !content?.trim()) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { data, error } = await supabase
        .from("lab_comments")
        .insert({ page_slug, author_name: author_name.trim(), content: content.trim() })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, { status: 201 })
}
