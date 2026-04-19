import { createClient } from "./supabase/server"

export type Testimonial = {
  id: number
  name: string
  role: string
  quote: string
  avatar_url: string 
  is_active: boolean
}

export async function getClientResponses(locale: string = "en"): Promise<Testimonial[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .order("id", { ascending: true })

  if (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }

  return (data ?? []).map((row) => {
    const isKa = locale === "ka"
    return {
      id: row.id,
      name: (isKa && row.name_ka) ? row.name_ka : row.name,
      role: (isKa && row.role_ka) ? row.role_ka : row.role,
      quote: (isKa && row.quote_ka) ? row.quote_ka : row.quote,
      avatar_url: row.avatar_url,
      is_active: row.is_active,
    }
  })
}