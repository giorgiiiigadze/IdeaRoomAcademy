import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { getBrands } from "@/lib/brands"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

export default async function BrandsGrid() {
  const [t, brands] = await Promise.all([
    getTranslations("brands"),
    getBrands(),
  ])

  return (
    <div className="w-full max-w-[1390px] mx-auto px-4 flex flex-col items-center gap-6 mt-20">
      <h4>
        <span className="text-brand-purple-4 uppercase">
          {t("title")}
        </span>
      </h4>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((brand) => {
          const imageUrl = brand.image_url
            ?? `${SUPABASE_URL}/storage/v1/object/public/brands/${brand.image}`

          return (
            <div key={brand.id} className="relative w-[1000px] h-[400px]">
              <Image
                src={imageUrl}
                fill
                className="object-contain"
                alt={`Brand ${brand.id}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}