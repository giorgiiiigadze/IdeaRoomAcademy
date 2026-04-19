"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

interface Blog {
  id: string
  title: string
  slug: string
  cover_image_url: string | null
  content: string
}

export default function BlogCard({ blog }: { blog?: Blog }) {
  const router = useRouter()
  const t = useTranslations("blog")

  if (!blog) return null

  const safeImage =
    blog.cover_image_url && blog.cover_image_url.trim() !== ""
      ? blog.cover_image_url
      : "/test-image.png"

  return (
    <div
      onClick={() => router.push(`/blogs/${blog.slug}`)}
      className="flex flex-col rounded-[20px] w-[448px] h-[556px] cursor-pointer overflow-hidden bg-white"
    >
      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="relative w-full h-[284px]">
          <Image
            src={safeImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover rounded-2xl"
          />
        </div>

        <h3 className="text-[17px] font-bold text-[#515151] leading-snug">
          {blog.title}
        </h3>

        <p className="text-[14px] text-muted-foreground line-clamp-4">
          {blog.content}
        </p>

        <div className="flex-1" />

        <Link
          href={`/blogs/${blog.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 ml-auto rounded-lg bg-[#FBA834] hover:opacity-90"
        >
          {t("read_more")}
        </Link>
      </div>
    </div>
  )
}