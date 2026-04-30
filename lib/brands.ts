import { createClient } from "./supabase/server"

export type Brand = {
  id: number
  image: string
  image_url: string
}

export async function getBrands(): Promise<Brand[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.error("Supabase error fetching brands:", error.message)
    return []
  }

  if (!Array.isArray(data)) return []

  return data.filter(Boolean).map((row) => {
    const { data: urlData } = supabase.storage
      .from("brands-images")
      .getPublicUrl(row.image)

    return {
      id: row.id,
      image: row.image,
      image_url: urlData.publicUrl,
    }
  })
}