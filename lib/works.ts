import { createClient } from "@/lib/supabase/client"

export type Work = {
  id: string
  image: string
  title: string
  category: string
  slug: string
}

export async function getWorks(count?: number): Promise<Work[]> {
  const supabase = createClient()

  let query = supabase
    .from("works")
    .select("id, image, title, category, slug")
    .eq("published", true)
    .order("created_at", { ascending: false })

  if (count) {
    query = query.limit(count)
  }

  const { data, error } = await query

  if (error) {
    console.error("Failed to fetch works:", error.message)
    return []
  }

  return data ?? []
}