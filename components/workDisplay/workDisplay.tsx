"use client"

import WorkCard from "./workCard"
import { getWorks } from "@/lib/works"

interface WorkInActionProps {
  count?: number
  text?: string
}

export default function WorkInAction({ count, text }: WorkInActionProps) {
  const works = getWorks(count)

  return (
    <div className="flex flex-col items-center w-full">

      {text && (
        <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#8471D9] mb-10">
          {text}
        </h2>
      )}

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
          <p className="text-muted-foreground col-span-2 text-center py-12">No works found.</p>
        )}
      </div>

    </div>
  )
}