import AboutVideoDialog from "./aboutVideoDialog"

interface AboutDisplayProps {
  count?: number
  showViewAll?: boolean
  mainText: string
  secondaryText: string
}

export default function AboutDisplay({ mainText, secondaryText }: AboutDisplayProps) {
  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center gap-4 mt-8 mb-20">
      
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        {mainText}
      </h1>

      <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center max-w-[700px] mb-6">
        {secondaryText}
      </span>

      <div className="w-full h-[718px] flex items-center justify-center mt-6">
        <AboutVideoDialog
          videoUrl="/videos/test-video.mp4"
          thumbnail="/about-images/about-us-test-image.png"
        />
      </div>

    </div>
  )
}