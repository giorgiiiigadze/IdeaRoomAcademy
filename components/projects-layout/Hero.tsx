import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowBigRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  buttonText: string
  buttonUrl: string
  image: string
}

export default function HeroSection({ title, description, buttonText, buttonUrl, image }: HeroSectionProps) {
  return (
    <div
      className="relative w-full h-[756px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/55c4d981b39c3019f00330a0931ca7a12d746830.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="relative z-10 flex items-center justify-between w-[1389px] h-auto">

        <div className="flex items-start flex-col flex-1 gap-5">
          <span className="text-[32px] text-brand-orange-6 font-bold">{title}</span>

          <span className="text-white font-extralight">
            {description}
          </span>

          <Button asChild className="w-[240px] h-[48px] rounded-full bg-amber-800 cursor-pointer">
            <Link href={buttonUrl}>
              {buttonText}
              <ArrowBigRight />
            </Link>
          </Button>
        </div>

        <div className="relative flex-1 h-[500px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

      </main>
    </div>
  )
}