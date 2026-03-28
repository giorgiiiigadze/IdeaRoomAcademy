import ProjectPageInformation from "@/components/projects-layout/ProjectPageInfo"
import ProjectPageSkeleton from "@/components/projects-layout/ProjectPageSkeleton"
import { Suspense } from "react"

export default function VideoEditingPage() {
  return (
        <div>
            <Suspense fallback={<ProjectPageSkeleton />}>
                <ProjectPageInformation category={"video-editing"} />
            </Suspense>
        </div>
    )
}