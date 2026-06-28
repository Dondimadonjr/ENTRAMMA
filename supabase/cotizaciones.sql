create extension if not exists pgcrypto;

create type cotizacion_origen as enum ('web', 'whatsapp', 'admin');
create type cotizacion_estado as enum ('nueva', 'contactada', 'agendada', 'cerrada', 'perdida');

create table if not exists public.cotizaciones (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  comuna text not null,
  lugar text not null,
  medidas text not null,
  mensaje text,
  telefono text,
  origen cotizacion_origen not null default 'web',
  estado cotizacion_estado not null default 'nueva',
  created_at timestamptz not null default now()
);

alter table public.cotizaciones enable row level security;

create policy "Allow public quote inserts"
on public.cotizaciones
for insert
to anon
with check (true);
