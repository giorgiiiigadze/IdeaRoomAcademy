import { notFound } from "next/navigation"
import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ServiceNavigation"
import ProjectVideosDisplay from "@/components/projectLayout/ProjectVideoDisplay"
import { getServices } from "@/lib/api"
import { createClient } from "@/lib/supabase/server"
import { getLocale } from "next-intl/server"
import { getProjectBySlug } from "@/lib/services"

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ projectSlug: string }>
}) {
  const { projectSlug } = await params
  const locale = await getLocale()

  const [services, innerProjectData] = await Promise.all([
    getServices(locale),
    getProjectBySlug(projectSlug, locale),
  ])

  if (!innerProjectData) notFound()

  const supabase = await createClient()

  const videos = (innerProjectData?.videos ?? []).map((v: { id: string; file_path: string; title: string }) => {
    const { data } = supabase.storage
      .from("projects-videos")
      .getPublicUrl(v.file_path)

    return {
      id: v.id,
      url: data.publicUrl,
      caption: v.title,
      type: "landscape" as const,
    }
  })

  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-[#EFF2F5]">
      <HeroSection />

      <ProjectNavigation services={services} />

      {innerProjectData && (
        <div className="w-full h-auto max-w-[1389px] flex flex-col gap-4 items-start justify-center">
          <p className="text-[20px] font-bold">{innerProjectData.title}</p>
        </div>
      )}

      <ProjectVideosDisplay videos={videos} />
    </div>
  )
}