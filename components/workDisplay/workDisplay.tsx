"use client"

import { useEffect, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import WorkCard from "./workCard"
import { getWorks, type Work } from "@/lib/works"
import Link from "next/link"

interface WorkInActionProps {
  count?: number
  viewAllLink?: boolean
}

export default function WorkInAction({ count, viewAllLink=false }: WorkInActionProps) {
  const t = useTranslations("work")
  const locale = useLocale()
  const [works, setWorks] = useState<Work[]>([])

  useEffect(() => {
    getWorks(locale, count).then(setWorks)
  }, [locale, count])

  return (
    <div className="flex flex-col items-center w-full gap-10">
      <h2 className="text-[16px] font-bold tracking-[0.2em] uppercase text-[#8471D9] mb-10">
        {t("title")}
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {works.length > 0 ? (
          works.map((work) => (
            <WorkCard
              key={work.slug}
              image={work.image}
              title={work.title}
              category={work.category}
              href={`/works/${work.slug}`}
            />
          ))
        ) : (
          <p className="text-muted-foreground col-span-2 text-center py-12">
            {t("empty")}
          </p>
        )}
      </div>

      {viewAllLink && (
        <Link href={"/works"} className="px-5 py-2.5 text-medium rounded-xl bg-[#FBA834] hover:opacity-90 text-white">{t("view_all")}</Link>
      )}
    </div>
  )
}