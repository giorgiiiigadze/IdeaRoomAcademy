"use client"

import { useScaleReveal } from "@/hooks/useScaleReveal"
import WorkCard from "./workCard"

export default function WorkInAction(){
    const divRef = useScaleReveal()

    return (
        <div className="w-full max-w-[1389px] flex flex-col items-center gap-4 px-4" ref={divRef}>
            <span className="text-lg sm:text-xl font-bold">
                    See our work in action.
            </span>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <WorkCard
                    image="/work-images/test-work-image.png"
                    title="Meridian"
                    category="Logo Design"
                    href="/work/meridian"
                />
                <WorkCard
                    image="/work-images/test-work-image.png"
                    title="Meridian"
                    category="Logo Design"
                    href="/work/meridian"
                />
                <WorkCard
                    image="/work-images/test-work-image.png"
                    title="Meridian"
                    category="Logo Design"
                    href="/work/meridian"
                />
                <WorkCard
                    image="/work-images/test-work-image.png"
                    title="Meridian"
                    category="Logo Design"
                    href="/work/meridian"
                />
            </div>

        </div>
    )
}