-- ============================================
-- Run this in Supabase SQL Editor (supabase.com → your project → SQL Editor)
-- Copy-paste the entire file and click "Run"
-- ============================================

-- EVENTS TABLE
-- Each row = one workshop session (e.g., "THE SHIFT — Feb 26")
create table if not exists events (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    slug text unique not null,
    date timestamptz not null,
    total_seats integer not null default 40,
    sold_seats integer not null default 0,
    price_cents integer not null default 9900,  -- €99.00
    currency text not null default 'EUR',
    status text not null default 'active' check (status in ('active', 'sold_out', 'completed', 'cancelled')),
    cal_event_type_id text,  -- Cal.com event type ID (for linking)
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- BOOKINGS TABLE
-- Each row = one person who paid for a seat
create table if not exists bookings (
    id uuid default gen_random_uuid() primary key,
    event_id uuid references events(id) not null,
    email text not null,
    name text,
    attendance_type text not null default 'in_person' check (attendance_type in ('in_person', 'online')),  -- in_person or online (livestream)
    cal_booking_uid text unique,  -- Cal.com booking UID (for deduplication)
    status text not null default 'confirmed' check (status in ('confirmed', 'cancelled', 'refunded')),
    amount_cents integer not null,
    currency text not null default 'EUR',
    paid_at timestamptz default now(),
    created_at timestamptz default now()
);

-- MIGRATION: Add attendance type tracking (run this if table already exists)
-- ALTER TABLE bookings ADD COLUMN attendance_type text NOT NULL DEFAULT 'in_person' CHECK (attendance_type IN ('in_person', 'online'));

-- WEBHOOK LOG (for debugging + idempotency)
create table if not exists webhook_log (
    id uuid default gen_random_uuid() primary key,
    source text not null,  -- 'calcom' or 'stripe'
    event_type text not null,
    payload jsonb not null,
    processed boolean default false,
    created_at timestamptz default now()
);

-- INDEX for fast seat lookups
create index if not exists idx_events_slug on events(slug);
create index if not exists idx_bookings_event_id on bookings(event_id);
create index if not exists idx_bookings_cal_uid on bookings(cal_booking_uid);

-- ROW LEVEL SECURITY
-- Public can READ events (for seat count), but only service role can WRITE
alter table events enable row level security;
alter table bookings enable row level security;
alter table webhook_log enable row level security;

-- Anyone can read events (seat count is public info)
create policy "Events are publicly readable"
    on events for select
    using (true);

-- Only service role (webhook handler) can insert/update
create policy "Service role can manage events"
    on events for all
    using (auth.role() = 'service_role');

-- Only service role can manage bookings
create policy "Service role can manage bookings"
    on bookings for all
    using (auth.role() = 'service_role');

-- Only service role can manage webhook log
create policy "Service role can manage webhook_log"
    on webhook_log for all
    using (auth.role() = 'service_role');

-- ============================================
-- SEED: Insert the first event
-- ============================================
insert into events (name, slug, date, total_seats, sold_seats, price_cents, currency)
values (
    'THE SHIFT — February 26',
    'the-shift-feb-26',
    '2026-02-26T17:00:00+01:00',
    40,
    0,
    9900,
    'EUR'
);

-- ============================================
-- DONE! Your database is ready.
-- Next: Go to Settings → API to get your keys.
-- ============================================
