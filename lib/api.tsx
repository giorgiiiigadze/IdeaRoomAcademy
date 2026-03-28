export type Testimonial = {
  id: number
  text: string
  name: string
  title: string
  image: string
}

export type Project = {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

export async function getClientResponses(baseUrl = process.env.NEXT_PUBLIC_APP_URL): Promise<Testimonial[]> {
  const res = await fetch(`${baseUrl}/api/client-responses`, {
    next: { revalidate: 3600 }
  })
  if (!res.ok) throw new Error("Failed to fetch client responses")
  return res.json()
}

export async function getProjectInformation(category: string, baseUrl = process.env.NEXT_PUBLIC_APP_URL): Promise<Project[]> {
  const res = await fetch(`${baseUrl}/api/project-information?category=${category}`)
  if (!res.ok) throw new Error("Failed to fetch project information")
  return res.json()
}

export async function getBlogs(baseUrl = process.env.NEXT_PUBLIC_APP_URL) {
  const res = await fetch(`${baseUrl}/api/blog-information`, {
    next: { revalidate: 3600 }
  })
  return res.json()
}