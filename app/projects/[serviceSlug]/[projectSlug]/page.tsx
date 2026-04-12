import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ProjectNavigation"
import InnerProjectVideosDisplay from "@/components/projectLayout/InnerProjectVideoDisplay"
import { getProjectBySlug, getServices } from "@/lib/services"

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>
}) {
  const { projectSlug } = await params

  const [service, innerProjectData] = await Promise.all([
    getServices(),
    getProjectBySlug(projectSlug),
  ])

  return (
    <div className="flex flex-col items-center justify-between gap-8 bg-[#EFF2F5]">
      <HeroSection />
      
      <ProjectNavigation services={service}/>

      {innerProjectData && (
        <div className="w-full h-auto max-w-[1389px] flex flex-col gap-4 items-start justify-center">
          <p className="text-[20px] font-bold">{innerProjectData.title}</p>
        </div>
      )}

      <InnerProjectVideosDisplay />
    </div>
  )
}