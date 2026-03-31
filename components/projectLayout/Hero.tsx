"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowBigRight } from "lucide-react"
import { useCallback, useState } from "react"

interface HeroSectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  image?: string
  badge?: string
  showReadFull?: boolean
}

export default function HeroSection({
  title,
  description,
  buttonText,
  buttonUrl,
  image,
  badge,
  showReadFull,
}: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleScroll = useCallback(() => {
    document.getElementById("full-blog")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const hasContent = title || description || (buttonText && buttonUrl)

  return (
    <div
      className="relative w-full h-auto flex items-center justify-center overflow-hidden pt-[14px] bg-neutral-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/project-images/main-bg-image.jpg')" }}
    >
      <main className="relative z-10 flex flex-col lg:flex-row px-14 items-center justify-between w-full max-w-[1389px] py-16 lg:py-0 lg:h-[656px] gap-10 mt-16 lg:mt-0">

        {hasContent && (
          <div className="flex items-center lg:items-start flex-col w-full lg:w-[480px] gap-6">

            {badge && (
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-5 border border-brand-orange-5/40 bg-brand-orange-5/10 px-3 py-1 rounded-full">
                {badge}
              </span>
            )}

            {title && (
              <h1 className="text-3xl lg:text-[40px] font-bold leading-tight text-brand-orange-6 text-center lg:text-left">
                {title}
              </h1>
            )}

            {description && (
              <div className="flex flex-col items-start gap-3">
                <p className={`text-white/80 text-sm leading-7 text-center lg:text-left ${showReadFull ? "line-clamp-3" : ""}`}>
                  {description}
                </p>
                {showReadFull && (
                  <button
                    onClick={handleScroll}
                    aria-label="Scroll to full blog post"
                    className="flex items-center gap-1 text-brand-orange-5 text-sm font-bold hover:gap-2 transition-all duration-200 cursor-pointer"
                  >
                    Read Full
                  </button>
                )}
              </div>
            )}

            {buttonText && buttonUrl && (
              <Button
                asChild
                className="group w-[240px] h-[48px] rounded-full cursor-pointer border-0 text-amber-50 bg-[linear-gradient(to_right,#7B2FBE,#F5A623)]"
              >
                <Link href={buttonUrl}>
                  {buttonText}
                  <ArrowBigRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        )}

        {image && (
          <div className="relative w-full lg:w-[700px] h-[300px] lg:h-[600px] shrink-0 flex items-center justify-center">
            {!imageLoaded && (
              <div
                aria-label="Loading image"
                role="status"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={image}
              alt={title ?? "Hero image"}
              fill
              priority
              onLoadingComplete={() => setImageLoaded(true)}
              className={`object-contain object-center transition-opacity mt-4 duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

      </main>
    </div>
  )
}