import { getBlogs } from "@/lib/api"
import { getLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import HeroSection from "@/components/projectLayout/Hero"
import BlogDisplay from "@/components/blogDisplay/blogDisplay"

export default async function BlogSlugPage({ params }: { params: { blogSlug: string } }) {
  const { blogSlug } = await params
  const locale = await getLocale()

  const blogs = await getBlogs(locale)
  const blog = blogs.find((b: { slug: string }) => b.slug === blogSlug)

  if (!blog) notFound()

  return (
    <div className="flex flex-col flex-1 min-h-screen items-center justify-start font-sans bg-[#EFF2F5]">

      <main className="w-full flex items-center justify-around flex-col gap-6 mb-20">

        <HeroSection
          title={blog.title}
          description={blog.content}
          image={blog.cover_image_url ?? undefined}
        />

        <div className="w-full max-w-[1389px] px-4 py-10 flex flex-col gap-6" id="full-blog">
          აქ იქნება ბლოგების ინფორმაცია

          <p>
            {blog.content}
          </p>

        </div>

        <BlogDisplay text={false} />

      </main>

    </div>
  )
}