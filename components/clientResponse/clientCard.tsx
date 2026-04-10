import Image from "next/image"
import type { Testimonial } from "@/lib/api"

type ClientResponseCardProps = {
  data: Testimonial
}

export default function ClientResponseCard({ data }: ClientResponseCardProps) {
  return (
    <div className="rounded-2xl flex flex-col items-start gap-6 p-6 min-h-[240px]">
      
      <Image
        src="/client-files/client-tag.svg"
        width={30}
        height={30}
        alt="quote"
      />

      <span className="text-muted-foreground text-sm leading-relaxed">
        {data.quote}
      </span>

      <div className="flex items-center gap-3">
        <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shrink-0">
          
          <Image
            src={data.avatar_url}
            alt={data.name}
            fill
            className="object-cover"
          />

        </div>

        <div className="flex flex-col">
          <span className="text-base font-semibold">{data.name}</span>
          <span className="text-sm text-muted-foreground">{data.role}</span>
        </div>
      </div>
    </div>
  )
}