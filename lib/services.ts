import { createClient } from "./supabase/server"

export type Service = {
  title: string
  description: string
  icon: string
  slug: string
  image: string
  status: string
}

export async function getServices(): Promise<Service[]> {
  const supabase = await createClient()
  const { data } = await supabase.from("services").select("*")
  return data ?? []
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single()
  return data ?? null
}