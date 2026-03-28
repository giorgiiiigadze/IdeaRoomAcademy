"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowBigRight } from "lucide-react"
import { useState } from "react"

interface HeroSectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  image?: string
}

export default function HeroSection({ title, description, buttonText, buttonUrl, image }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1389px] px-6 lg:px-0 py-16 lg:py-0 lg:h-[656px] gap-10">

        {(title || description || (buttonText && buttonUrl)) && (
          <div className="flex items-center lg:items-start flex-col w-full lg:w-[420px] gap-6">
            {title && (
              <span className="text-2xl lg:text-[32px] mt-5 text-brand-orange-6 font-bold leading-tight text-center lg:text-left ml-auto mr-auto">
                {title}
              </span>
            )}

            {description && (
              <span className="text-white font-light text-sm leading-[26px] text-center lg:text-left">
                {description}
              </span>
            )}

            {buttonText && buttonUrl && (
              <Button asChild className="group w-[240px] h-[48px] rounded-full cursor-pointer border-0 text-amber-50" style={{
                background: "linear-gradient(to right, #7B2FBE, #F5A623)"
              }}>
                <Link href={buttonUrl}>
                  {buttonText}
                  <ArrowBigRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        )}

        {image && (
          <div className="relative w-full lg:w-[700px] h-[300px] lg:h-[600px] shrink-0">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={image}
              alt={title ?? "Hero image"}
              fill
              priority
              onLoad={() => setImageLoaded(true)}
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