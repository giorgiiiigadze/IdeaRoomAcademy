import Image from "next/image"

type ClientResponseCardProps = {
  text: string
  name: string
  title: string
  image: string
}

export default function ClientResponseCard({ text, name, title, image }: ClientResponseCardProps) {
  return (
    <div className="flex-1 min-h-[240px] rounded-2xl shadow-xl flex flex-col items-start justify-between">

        <Image
          src="/client-files/client-tag.svg"
          width={30}
          height={30}
          alt="Picture of the author"
          className="ml-6 mb-6 absolute"
        />

      <main className="flex flex-col gap-8 rounded-xl p-6 mt-6">
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
      </main>

    </div>
  )
}