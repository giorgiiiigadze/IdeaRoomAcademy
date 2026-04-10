import { createClient } from "./supabase/server"

export type Testimonial = {
  id: number
  name: string
  role: string
  quote: string
  avatar_url: string 
  is_active: boolean
}

export async function getClientResponses(): Promise<Testimonial[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }

  return data as Testimonial[]
}