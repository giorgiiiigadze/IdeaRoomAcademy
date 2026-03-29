"use client"

import { useScaleReveal } from "@/hooks/useScaleReveal"
import WorkCard from "./workCard"
import { useState } from "react"
import { getWorks } from "@/lib/works"

interface WorkInActionProps {
  count?: number
  text?: string
  showSearch?: boolean
}

export default function WorkInAction({ count, text, showSearch }: WorkInActionProps) {
  const divRef = useScaleReveal()
  const [query, setQuery] = useState("")

  const featuredWorks = getWorks(count)
  const filteredWorks = showSearch && query
    ? featuredWorks.filter((w) =>
        w.title.toLowerCase().includes(query.toLowerCase()) ||
        w.category.toLowerCase().includes(query.toLowerCase())
      )
    : featuredWorks

  return (
    <div className="w-full max-w-[1389px] flex flex-col mt-14 px-6" ref={divRef}>

      {text && (
        <div className="mb-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight max-w-4xl">
            <div className="overflow-hidden">
              <span className="block text-brand-orange-6">{text}</span>
            </div>
          </h2>
        </div>
      )}

      {showSearch && (
        <div className="relative w-full max-w-md mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or category..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
          />
        </div>
      )}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <WorkCard
              key={work.href}
              image={work.image}
              title={work.title}
              category={work.category}
              href={work.href}
            />
          ))
        ) : (
          <p className="text-white/60 col-span-2 text-center py-12">No results found.</p>
        )}
      </div>

    </div>
  )
}