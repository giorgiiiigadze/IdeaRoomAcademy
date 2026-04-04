import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { lang } = await req.json()
  const cookieStore = await cookies()
  cookieStore.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 })
  return NextResponse.json({ ok: true })
}