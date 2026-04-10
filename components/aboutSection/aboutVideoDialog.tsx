"use client"

import { Play } from "lucide-react"
import { useRef, useState } from "react"

interface VideoDialogProps {
  videoUrl: string
}

export default function AboutVideoDialog({ videoUrl }: VideoDialogProps) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    videoRef.current?.play()
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg w-full aspect-video">
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="w-full h-full object-cover"
      />

      {!playing && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <div className="bg-[#FBA834] rounded-full p-4">
            <Play className="fill-[#552583] stroke-[#552583]" />
          </div>
        </div>
      )}
    </div>
  )
}