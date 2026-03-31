"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"

interface VideoDialogProps {
  videoUrl: string
  thumbnail: string
}

export default function AboutVideoDialog({ videoUrl, thumbnail }: VideoDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg w-full aspect-video"
      >
        <Image
          src={thumbnail}
          alt="Video preview"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#FBA834] rounded-full p-4">
            <Play className="fill-[#552583] stroke-[#552583]" />
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-[900px] aspect-video">
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}