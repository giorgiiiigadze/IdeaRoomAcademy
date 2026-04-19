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
          showReadFull
        />

        <div className="w-full max-w-[1389px] px-4 py-10 flex flex-col gap-6" id="full-blog">

          <h2 className="text-xl sm:text-2xl font-bold">
            {blog.title}
          </h2>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>·</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString(
                locale === "ka" ? "ka-GE" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </span>
            <span>·</span>
            <span>By {blog.author}</span>
          </div>

          <p className="leading-relaxed text-base">
            {blog.content}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-400 mr-2">Share:</span>

            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogSlug)}`} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-purple-3 hover:border-brand-purple-3 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogSlug)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-purple-3 hover:border-brand-purple-3 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(blogSlug)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-purple-3 hover:border-brand-purple-3 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

        </div>

        <BlogDisplay text={false} />

      </main>

    </div>
  )
}