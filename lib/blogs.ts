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

export async function getBlogs(): Promise<Blog[]> {
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

  return data.filter(Boolean) as Blog[]
}