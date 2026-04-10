import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ProjectNavigation"
import ProjectPageInformation from "@/components/projectLayout/ProjectPageInfo"
import { getServiceBySlug } from "@/lib/services"
import { getProjectInformation } from "@/lib/projects"

export default async function ProjectSlugPage({ params }: { params: Promise<{ projectSlug: string }> }) {
  const { projectSlug } = await params

  const [service, projectInfo] = await Promise.all([
    getServiceBySlug(projectSlug),
    getProjectInformation(projectSlug),
  ])

  return (
    <div className="flex flex-col items-center justify-between gap-8 bg-[#EFF2F5]">
      <HeroSection
        title={service?.title}
        description={service?.description}
        image={service?.image}
        buttonText="Read the Case Studio"
      />

      <ProjectNavigation />

      <ProjectPageInformation
        projectsInfo={projectInfo}
        category={projectSlug}
      />
    </div>
  )
}