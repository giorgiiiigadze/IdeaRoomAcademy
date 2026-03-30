import Link from "next/link"
import Image from "next/image"
import { ArrowBigRight } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  category: string
  slug: string
  image: string
}

export default function BlogCard({ title, description, category, slug, image }: BlogCardProps) {
  return (
    <div className="flex flex-col rounded-[20px] overflow-hidden shadow-md bg-background border border-border">

      <div className="relative w-full h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <span className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{
                background: "linear-gradient(to right, #7B2FBE, #F5A623)"
              }}>
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-[17px] font-bold text-brand-purple-5 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {description}
        </p>

        <Link
          href={`/blogs/${slug}`}
          className="mt-2 inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-fit transition-colors duration-200"style={{
                background: "linear-gradient(to right, #7B2FBE, #F5A623)"
              }}
        >
          Read More
          <ArrowBigRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  )
}