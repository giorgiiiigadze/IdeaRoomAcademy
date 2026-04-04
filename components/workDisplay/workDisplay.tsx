"use client"

import { useTranslations } from "next-intl"
import WorkCard from "./workCard"
import { getWorks } from "@/lib/works"

interface WorkInActionProps {
  count?: number
}

export default function WorkInAction({ count }: WorkInActionProps) {
  const t = useTranslations("work")
  const works = getWorks(count)

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-[16px] font-bold tracking-[0.2em] uppercase text-[#8471D9] mb-10">
        {t("title")}
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {works.length > 0 ? (
          works.map((work) => (
            <WorkCard
              key={work.href}
              image={work.image}
              title={work.title}
              category={work.category}
              href={work.href}
            />
          ))
        ) : (
          <p className="text-muted-foreground col-span-2 text-center py-12">
            {t("empty")}
          </p>
        )}
      </div>
    </div>
  )
}