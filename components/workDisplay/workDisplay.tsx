"use client"

import { useScaleReveal } from "@/hooks/useScaleReveal"
import WorkCard from "./workCard"

export default function WorkInAction(){
    const divRef = useScaleReveal()

    return (
        <div className="w-full max-w-[1389px] flex flex-col mt-14 px-6" ref={divRef}>
            <div className="mb-10">
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight max-w-4xl">
                    <div className="overflow-hidden">
                        <span className="block text-brand-orange-6">
                            See our work in action
                        </span>
                    </div>
                </h2>
            </div>

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