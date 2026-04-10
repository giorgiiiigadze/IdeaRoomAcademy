import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ProjectNavigation"
import InnerProjectVideosDisplay from "@/components/projectLayout/InnerProjectVideoDisplay"

import { getProjectInformation } from "@/lib/api"

export default async function InnerProjectSlugPage({
  params,
}: {
  params: { innerProjectSlug: string; projectSlug: string }
}) {
  const { projectSlug, innerProjectSlug } = await params

  const projectInfo = await getProjectInformation(projectSlug)

  const innerProjectData = projectInfo.find(
    (project) => project.slug === innerProjectSlug
  )
  
  return (
    <div className="flex flex-col items-center justify-between gap-8 bg-[#EFF2F5]">
        <HeroSection />

        <ProjectNavigation />

        {innerProjectData && (
            <div className="w-full h-auto max-w-[1389px] flex flex-col gap-4 items-start justify-center">
                <p className="text-[20px] font-bold">{innerProjectData.title}</p>
            </div>
        )}

        <InnerProjectVideosDisplay />
    </div>
  )
}