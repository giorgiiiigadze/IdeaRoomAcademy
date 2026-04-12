import BlogCard from "@/components/blogDisplay/blogCard"
import { getBlogs } from "@/lib/api"

import HeroSection from "@/components/projectLayout/Hero"

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

export default async function BlogsPage() {
  const blogs: Blog[] = await getBlogs()

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#EFF2F5]">

      <HeroSection />

      <div className="w-full max-w-[1389px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </div>
  )
}