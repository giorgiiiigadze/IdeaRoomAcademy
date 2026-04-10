import { createClient } from "@/lib/supabase/server"

export async function getContactData() {
  const supabase = await createClient()
  const { data } = await supabase.from("contact").select("*").single()
  return data
}