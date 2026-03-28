"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

interface VideoDialogProps {
  url: string
  thumbnail: string
  alt?: string
}

export default function VideoDialog({ url, thumbnail, alt = "Video thumbnail" }: VideoDialogProps) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className="relative w-full h-full cursor-pointer group rounded-2xl overflow-hidden"
      >
        <Image
          src={thumbnail}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>

            <video
              ref={videoRef}
              src={url}
              controls
              autoPlay
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}