"use client"

import { useState, useRef } from "react"
import { Play, X } from "lucide-react"

interface VideoDialogProps {
  url: string
  caption?: string
}

export default function VideoDialog({ url, caption }: VideoDialogProps) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClose = () => {
    setOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full h-full">
        <div
          onClick={() => setOpen(true)}
          className="relative bg-black rounded-2xl overflow-hidden group cursor-pointer aspect-video"
        >
          <video
            src={url}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
            onMouseLeave={(e) => {
              const v = e.currentTarget as HTMLVideoElement
              v.pause()
              v.currentTime = 0
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-[#FBA834] rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="fill-[#552583] stroke-[#552583]" />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>

        {caption && (
          <span className="text-[16px] font-bold text-gray-700 dark:text-gray-300">
            {caption}
          </span>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="relative w-[90%] max-w-[900px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={url}
              controls
              autoPlay
              className="w-full h-full rounded-lg object-cover"
            />
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}