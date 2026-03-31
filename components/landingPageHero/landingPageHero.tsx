"use client"

export default function HeroHeading() {

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center font-bold text-center leading-tight bg-[#D9D9D9]">
      <video
        src="/landing-page-files/hero-video-compressed.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      Aq ragaca iqneba

    </div>
  )
}