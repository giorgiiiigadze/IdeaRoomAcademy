import { ArrowRightCircleIcon } from "lucide-react"

export default function LandingImageDisplay() {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="w-full max-w-[1389px] flex items-center justify-between py-16">

        <div className="flex flex-col flex-1 items-start gap-20">
          <h1 style={{ color: "#FBA834" }} className="text-[32px]">
            Academy of Idearoom
          </h1>

          <p className="text-[16px] text-gray-700">
            loren ipsum loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsum
          </p>

          <button style={{ color: "#FBA834" }} className="flex gap-2">
            <ArrowRightCircleIcon />
            Explore Our Academy
          </button>
        </div>

        <div className="flex-1">
          <h1>Aq image iqneba</h1>
        </div>

      </main>
    </div>
  )
}