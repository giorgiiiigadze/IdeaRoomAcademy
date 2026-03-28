import BlogCard from "./blogCard"
import { getBlogs } from "@/lib/api"

interface Blog {
  id: number
  title: string
  description: string
  category: string
  slug: string
  image: string
}

interface BlogDisplayProps {
  count?: number
  showViewAll?: boolean
  mainText?: string
  secondaryText?: string
}

export default async function BlogDisplay({ count, mainText, secondaryText }: BlogDisplayProps) {
  const blogs: Blog[] = await getBlogs()

  const featuredBlogs = count ? blogs.slice(0, count) : blogs

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 mb-6 w-full px-4 sm:px-6 lg:px-8">

      {mainText && (
        <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-brand-orange-5 m-2 text-center leading-tight">
          {mainText}
        </h1>
      )}

      {secondaryText && (
        <span className="text-base sm:text-lg lg:text-[20px] font-bold text-brand-purple-3 text-center px-4">
          {secondaryText}
        </span>
      )}

      <div className="w-full max-w-[1389px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {featuredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            category={blog.category}
            slug={blog.slug}
            image={blog.image}
          />
        ))}
      </div>

    </div>
  )
}