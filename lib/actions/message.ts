"use server"

import { createClient } from "@/lib/supabase/server"

export async function sendMessage(_prevState: unknown, formData: FormData) {
  const supabase = await createClient()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { error: "Missing fields" }
  }

  const { error } = await supabase.from("messages").insert({ name, email, message })

  if (error) {
    console.error(error)
    return { error: "Failed to send message" }
  }

  return { success: true }
}