import { createClient, SupabaseClient } from "@supabase/supabase-js"

let _publicClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
    if (!_publicClient) {
        _publicClient = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || "",
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
        )
    }
    return _publicClient
}

// SECURITY: service role bypasses RLS — server-side only, never expose to client
export function createServiceClient(): SupabaseClient {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.SUPABASE_SERVICE_ROLE_KEY || ""
    )
}
