"use client"

import { Button } from "../ui/button"
import Link from "next/link"
import VideoDialog from "../VideoDialog"

type Project = {
  id: number
  title: string
  description: string
  video: string
  slug: string
}

export default function ProjectPageInformation({
  projectsInfo,
  category,
}: {
  projectsInfo: Project[]
  category: string
}) {
  return (
    <div className="w-full max-w-[1392px] min-w-[1392px] flex flex-col gap-6 mt-6 mb-6">
      {projectsInfo.map((project, index) => {
        const isEven = index % 2 === 0

        return (
          <div
            key={project.id}
            className={`h-full w-full rounded-[24px] bg-white p-8 flex flex-wrap gap-20 ${
              isEven ? "" : "flex-row-reverse"
            }`}
          >
            <div className="flex flex-col items-start justify-between gap-6 flex-1 min-w-[280px]">
              <h1 className="text-[24px] font-semibold">
                {project.title}
              </h1>

              <span className="break-all line-clamp-4 text-sm text-muted-foreground">
                {project.description}
              </span>

              <Button
                asChild
                className="w-60 h-12 rounded-full cursor-pointer border-0"
                style={{
                  background: "linear-gradient(to right, #7B2FBE, #F5A623)",
                }}
              >
                <Link href={`/projects/${category}/${project.slug}`}>
                  Read the Case Study
                </Link>
              </Button>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[300px] min-w-[280px]">
              <VideoDialog url={project.video} />
            </div>
          </div>
        )
      })}
    </div>
  )
}