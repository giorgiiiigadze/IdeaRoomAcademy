import Image from "next/image"

type ClientResponseCardProps = {
  text: string
  name: string
  title: string
  image: string
}

export default function ClientResponseCard({ text, name, title, image }: ClientResponseCardProps) {
  return (
    <div className="rounded-2xl flex flex-col items-start gap-6 p-6">

      <Image
        src="/client-files/client-tag.svg"
        width={30}
        height={30}
        alt="quote"
      />

      <span className="text-muted-foreground text-sm leading-relaxed">
        {text}
      </span>

      <div className="flex items-center gap-3">
        {/* 👇 wrapper enforces the circle crop */}
        <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-sm text-muted-foreground">{title}</span>
        </div>
      </div>

    </div>
  )
}