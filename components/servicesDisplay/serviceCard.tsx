"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

interface ServiceItemProps {
  title: string
  description: string
  icon: string | null
  slug: string
  is_active: boolean
}

export default function ServiceCard({
  service,
}: {
  service?: ServiceItemProps
}) {
  const router = useRouter()

  if (!service) return null

  const safeIcon =
    service.icon && service.icon.trim() !== ""
      ? service.icon
      : "/service-icons/service-icon-test.svg"

  const safeHref = service.slug && `/projects/${service.slug}`

  return (
    <div className="rounded-2xl p-8 flex flex-col gap-6 bg-white">
      <Image
        src={safeIcon}
        alt={service.title}
        width={48}
        height={48}
        style={{ width: "48px", height: "auto" }}
        className="object-contain"
      />

      <div className="flex flex-col gap-3">
        <h4 className="text-[17px] font-bold text-gray-900">
          {service.title}
        </h4>

        <p className="text-sm text-gray-500 leading-relaxed break-words">
          {service.description}
        </p>
      </div>

      <button
        onClick={() => router.push(safeHref)}
        className="mt-auto w-fit flex items-center gap-2 bg-brand-orange-5 cursor-pointer text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
      >
        Learn More
      </button>
    </div>
  )
}