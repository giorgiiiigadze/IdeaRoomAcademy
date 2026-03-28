import Image from "next/image"

type ClientResponseCardProps = {
  text: string
  name: string
  title: string
  image: string
}

export default function ClientResponseCard({ text, name, title, image }: ClientResponseCardProps) {
  return (
    <div className="flex-1 min-h-[240px] border border-border rounded-2xl flex flex-col items-start justify-between p-6 gap-4">

      <span className="text-brand-purple-5 text-2xl font-bold">&ldquo;</span>

      <span className="text-muted-foreground text-sm leading-relaxed flex-1">
        {text}
      </span>

      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-sm text-muted-foreground">{title}</span>
        </div>
      </div>

    </div>
  )
}