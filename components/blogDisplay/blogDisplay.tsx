import { getTranslations } from "next-intl/server"
import { getLocale } from "next-intl/server"
import BlogCard from "./blogCard"
import { getBlogs } from "@/lib/api"
import Link from "next/link"

interface BlogDisplayProps {
  count?: number
  text?: boolean
  viewAllLink?: boolean
}

export default async function BlogDisplay({ count, text = true, viewAllLink = false }: BlogDisplayProps) {
  const [t, locale] = await Promise.all([
    getTranslations("blog"),
    getLocale(),
  ])
  const blogs = await getBlogs(locale)

  const featuredBlogs = count ? blogs.slice(0, count) : blogs

  return (
    <div className="w-full py-8 flex flex-col items-center gap-10">
      {text && (
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 text-center">
            {t("title")}
          </h1>
          <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center max-w-[700px]">
            {t("subtitle")}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1389px] px-4">
        {featuredBlogs.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-10 col-span-3">
            No blogs yet.
          </p>
        ) : (
          featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </div>

      {viewAllLink && (
        <Link href={"/blogs"} className="px-5 py-2.5 text-medium rounded-xl bg-[#FBA834] hover:opacity-90 text-white">
          {t("view_all")}
        </Link>
      )}
    </div>
  )
}