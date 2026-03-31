import HeroSection from "@/components/projectLayout/Hero"
import ProjectPageInformation from "@/components/projectLayout/ProjectPageInfo"
import { getServiceBySlug } from "@/lib/services"

export default async function ProjectSlugPage({ params }: { params: { projectSlug: string } }) {
    const { projectSlug } = await params
    
    const service = await getServiceBySlug(projectSlug)

    return (
        <div className="flex flex-col items-center justify-between gap-8 bg-[#EFF2F5]">
            <HeroSection 
                title={service?.title}
                description={service?.description}
                image={service?.image}
                buttonText="Read the Case Studio"
                buttonUrl="#"
                badge="Project"
            />

            <ProjectPageInformation category={projectSlug}/>
        </div>
    )
}