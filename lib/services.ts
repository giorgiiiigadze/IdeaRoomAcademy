import { createClient } from "./supabase/server"

export type Service = {
  id: string
  title: string
  description: string
  icon: string | null
  slug: string
  image: string
  status: string | null
  is_active: boolean
}

type RawProject = {
  id: string
  title: string
  title_ka: string | null
  description: string | null
  description_ka: string | null
  slug: string
  status: string | null
  service_id: string | null
  main_video: string | null
  created_at: string
  updated_at: string
}

export async function getServices(locale: string = "en"): Promise<Service[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)

  const isKa = locale === "ka"

  return (data ?? []).map((row) => ({
    id: row.id,
    title: (isKa && row.title_ka) ? row.title_ka : row.title,
    description: (isKa && row.description_ka) ? row.description_ka : row.description,
    icon: row.icon,
    slug: row.slug,
    image: row.image,
    status: row.status ?? null,
    is_active: row.is_active,
  }))
}

export async function getServiceBySlug(slug: string, locale: string = "en") {
  const supabase = await createClient()
  const { data } = await supabase
    .from("services")
    .select(`*, projects(*)`)
    .eq("slug", slug)
    .single()

  if (!data) return null

  const isKa = locale === "ka"
  return {
    ...data,
    title: (isKa && data.title_ka) ? data.title_ka : data.title,
    description: (isKa && data.description_ka) ? data.description_ka : data.description,
    projects: (data.projects ?? []).map((p: RawProject) => ({
      ...p,
      title: (isKa && p.title_ka) ? p.title_ka : p.title,
      description: (isKa && p.description_ka) ? p.description_ka : p.description,
      video: p.main_video
        ? supabase.storage
            .from("projects-videos")
            .getPublicUrl(p.main_video).data.publicUrl
        : null,
    })),
  }
}

export async function getProjectBySlug(slug: string, locale: string = "en") {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("projects")
    .select(`*, videos(*)`)
    .eq("slug", slug)
    .single()

  if (error) console.log(error)
  if (!data) return null

  const isKa = locale === "ka"
  return {
    ...data,
    title: (isKa && data.title_ka) ? data.title_ka : data.title,
    description: (isKa && data.description_ka) ? data.description_ka : data.description,
  }
}