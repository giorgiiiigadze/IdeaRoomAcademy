import { getProjectInformation } from "@/lib/api"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowBigRight } from "lucide-react"
import VideoDialog from "../VideoPlayer"

export default async function ProjectPageInformation({ category }: { category: string }) {
  const projectsInfo = await getProjectInformation(category)

  return (
    <div className="w-full max-w-[1392px] flex flex-col gap-6 mt-6 mb-6 px-4">
      {projectsInfo.map((project, index) => {
        const isEven = index % 2 === 0

        return (
          <div key={project.id} className={`h-full w-full rounded-[24px] p-4 flex gap-6 ${isEven ? "flex-row" : "flex-row-reverse"}`}>

            <div className="flex flex-col items-start justify-between flex-1 gap-4">
              <h1 className="text-[24px] font-semibold">{project.title}</h1>
              <span>{project.description}</span>
              <Button asChild className="w-60 h-12 rounded-full cursor-pointer border-0" style={{
                background: "linear-gradient(to right, #7B2FBE, #F5A623)"
              }}>
                <Link href={`/project/${category}/${project.slug}`}>
                  Read the Case Studio
                  <ArrowBigRight />
                </Link>
              </Button>
            </div>

            <div className="flex-1 relative">
              <VideoDialog url={"video"} thumbnail={project.image} />
            </div>

          </div>
        )
      })}
    </div>
  )
}