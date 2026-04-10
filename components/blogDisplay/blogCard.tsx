"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface BlogCardProps {
  title: string
  description: string
  slug: string
  image: string
}

export default function BlogCard({
  title,
  description,
  slug,
  image,
}: BlogCardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/blogs/${slug}`)}
      className="flex flex-col rounded-[20px] w-[448px] h-[556px] cursor-pointer overflow-hidden transition bg-white"
    >
      <div className="flex flex-col flex-1 gap-3 p-5">
        
        <div className="relative w-full h-[284px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <h3 className="text-[17px] font-bold text-[#515151] leading-snug">
          {title}
        </h3>

        <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        <div className="flex-1" />

        <Link
          href={`/blogs/${slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 ml-auto rounded-lg w-fit transition-colors duration-200 bg-[#FBA834] hover:opacity-90"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}