import Image from "next/image"

type ClientResponseCardProps = {
  text: string
  name: string
  title: string
  image: string
}

export default function ClientResponseCard({ text, name, title, image }: ClientResponseCardProps) {
  return (
    <div className="w-[452px] h-[240px] bg-white rounded-[14px] shadow-md flex flex-col items-start justify-center p-10 gap-4">

      <span className="text-[#7B7D7E]">
        {text}
      </span>

      <div className="flex items-center gap-2">

        <Image
          src={image}
          alt={name}
          width={54}
          height={54}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col items-start">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-sm text-[#706A6A]">{title}</span>
        </div>

      </div>

    </div>
  )
}