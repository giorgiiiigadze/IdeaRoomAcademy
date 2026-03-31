"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowBigRight } from "lucide-react"
import { usePageTransition } from "@/hooks/usePageTransition"

interface BlogCardProps {
  title: string
  description: string
  category: string
  slug: string
  image: string
}

export default function BlogCard({
  title,
  description,
  category,
  slug,
  image,
}: BlogCardProps) {
  const { navigate } = usePageTransition()

  return (
    <div
      onClick={() => navigate(`/blogs/${slug}`)}
      className="flex flex-col rounded-[20px] w-[448px] h-min-[400px] cursor-pointer overflow-hidden transition bg-white"
    >
      <div className="flex flex-col flex-1 gap-3 p-5">
        
        <div className="relative w-full h-[220px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />

          <span
            className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: "linear-gradient(to right, #7B2FBE, #F5A623)",
            }}
          >
            {category}
          </span>
        </div>

        <h3 className="text-[17px] font-bold text-brand-purple-5 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        <div className="flex-1" />

        <Link
          href={`/blogs/${slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 ml-auto rounded-lg w-fit transition-colors duration-200 bg-[#FBA834] hover:opacity-90"
        >
          Read More
          <ArrowBigRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}