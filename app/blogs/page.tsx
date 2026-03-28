import BlogCard from "@/components/blogDisplay/blogCard"
import { getBlogs } from "@/lib/api"

import HeroSection from "@/components/projects-layout/Hero"

interface Blog {
  id: number
  title: string
  description: string
  category: string
  slug: string
  image: string
}

export default async function BlogsPage(){
    const blogs: Blog[] = await getBlogs()

    return (
        <div className="flex flex-col items-center gap-6 mb-6">

            <HeroSection />

            <div className="w-full max-w-[1389px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
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