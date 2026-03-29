import WorkInAction from "@/components/workDisplay/workDisplay"

export default function WorkPage() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2a0a4a 0%, #4a1a7a 30%, #8B3a9a 60%, #c4621a 85%, #F5A623 100%)" }}>

            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(123,47,190,0.4) 0%, transparent 60%)" }}
            />
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(245,166,35,0.5) 0%, transparent 50%)" }}
            />

            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }}
            />

            <main className="relative z-10 w-full max-w-[1389px] mx-auto pt-32 pb-24">
                <div className="mb-10 px-6">
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-tight mt-2">
                        Our Work
                    </h1>
                    <p className="text-white/60 mt-3 text-base max-w-xl">
                        A curated selection of projects across branding, motion, web, and social.
                    </p>
                </div>

                <WorkInAction showSearch />
            </main>

        </div>
    )
}