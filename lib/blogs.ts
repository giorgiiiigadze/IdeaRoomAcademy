import { createClient } from "./supabase/server"

export type Blog = {
  id: string
  title: string
  slug: string
  author: string
  cover_image_url: string | null
  content: string
  is_published: boolean
  published_at: string
  created_at: string
}

export async function getBlogs(locale: string = "en"): Promise<Blog[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Supabase error:", error.message)
    return []
  }

  if (!Array.isArray(data)) return []

  const isKa = locale === "ka"

  return data.filter(Boolean).map((row) => ({
    id: row.id,
    title: (isKa && row.title_ka) ? row.title_ka : row.title,
    content: (isKa && row.content_ka) ? row.content_ka : row.content,
    slug: row.slug,
    author: row.author,
    cover_image_url: row.cover_image_url,
    is_published: row.is_published,
    published_at: row.published_at,
    created_at: row.created_at,
  })) as Blog[]
}