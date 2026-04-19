import { createClient } from "@/lib/supabase/client"

export type Work = {
  id: string
  image: string
  title: string
  category: string
  slug: string
}

export async function getWorks(locale: string = "en", count?: number): Promise<Work[]> {
  const supabase = createClient()

  let query = supabase
    .from("works")
    .select("id, image, title, title_ka, category, category_ka, slug")
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

  const isKa = locale === "ka"

  return (data ?? []).map((row) => ({
    id: row.id,
    image: row.image,
    title: (isKa && row.title_ka) ? row.title_ka : row.title,
    category: (isKa && row.category_ka) ? row.category_ka : row.category,
    slug: row.slug,
  }))
}