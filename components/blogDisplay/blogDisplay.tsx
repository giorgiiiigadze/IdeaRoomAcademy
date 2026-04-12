import { getTranslations } from "next-intl/server"
import BlogCard from "./blogCard"
import { getBlogs } from "@/lib/api"

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

interface BlogDisplayProps {
  count?: number
}

export default async function BlogDisplay({ count }: BlogDisplayProps) {
  const t = await getTranslations("blog")
  const blogs: Blog[] = await getBlogs()

  const featuredBlogs = count ? blogs.slice(0, count) : blogs

  return (
    <div className="w-full py-8 flex flex-col items-center gap-10">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 text-center">
          {t("title")}
        </h1>

        <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center max-w-[700px]">
          {t("subtitle")}
        </span>
      </div>

      <div className="flex items-start gap-2">
        {featuredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}