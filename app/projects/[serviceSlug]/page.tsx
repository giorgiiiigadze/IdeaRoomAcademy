import { notFound } from "next/navigation"
import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ServiceNavigation"
import ProjectPageInformation from "@/components/projectLayout/ProjectPageInfo"
import { getServices } from "@/lib/api"
import { getLocale } from "next-intl/server"
import { getServiceBySlug } from "@/lib/services"

export default async function ProjectSlugPage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params
  const locale = await getLocale()

  const [service, services] = await Promise.all([
    getServiceBySlug(serviceSlug, locale),
    getServices(locale),
  ])

  if (!service) notFound()

  const projects = service.projects ?? []

  return (
    <div className="flex flex-col items-center justify-start gap-8 bg-[#EFF2F5] min-h-screen">
      <HeroSection
        title={service.title}
        description={service.description}
        image={service.image}
        buttonText="Read the Case Studio"
      />

      <ProjectNavigation services={services} />

      {projects.length === 0 ? (
        <div>No projects yet.</div>
      ) : (
        <ProjectPageInformation
          projectsInfo={projects}
          category={serviceSlug}
        />
      )}
    </div>
  )
}