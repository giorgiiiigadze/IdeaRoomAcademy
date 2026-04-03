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
  mainText: string
  secondaryText: string
}

export default async function BlogDisplay({ count, mainText, secondaryText }: BlogDisplayProps) {
  const blogs: Blog[] = await getBlogs()

  const featuredBlogs = count ? blogs.slice(0, count) : blogs

  return (
    <div className="w-full py-8 flex flex-col items-center gap-10">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 text-center">
          {mainText}
        </h1>

        <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center max-w-[700px]">
          {secondaryText}
        </span>
      </div>

      <div className="flex items-start max-w-[1389px] gap-2">
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