import { createClient } from "./supabase/server"

export type Service = {
  title: string
  description: string
  icon: string
  slug: string
  image: string
  status: string
  is_active: boolean
}

export async function getServices(): Promise<Service[]> {
  const supabase = await createClient()
  const { data } = await supabase.from("services").select("*")
  return data ?? []
}

export async function getServiceBySlug(slug: string) {
  const supabase = await createClient()
  const { data } = await supabase
    .from("services")
    .select(`
      *,
      projects(*)
    `)
    .eq("slug", slug)
    .single()
  return data ?? null
}

export async function getProjectBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      videos(*)
    `)
    .eq("slug", slug)
    .single()

  console.log(error)
  return data ?? null
}