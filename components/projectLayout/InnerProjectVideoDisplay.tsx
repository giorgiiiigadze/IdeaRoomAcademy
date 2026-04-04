"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

interface VideoItem {
  id: number
  url: string
  caption: string
  type: "landscape" | "portrait" | "square"
}

interface InnerProjectVideosDisplayProps {
  title?: string
  videos?: VideoItem[]
}

const mockVideos: VideoItem[] = [
  { id: 1, url: "/videos/test-video.mp4", caption: 'Cafe "Papavero" Comercial video', type: "landscape" },
  { id: 2, url: "/videos/test-video.mp4", caption: '"Burger King"', type: "landscape" },
  { id: 3, url: "/videos/test-video.mp4", caption: '"Burger King"', type: "landscape" },
  { id: 4, url: "/videos/test-video.mp4", caption: 'Cafe "Papavero" Comercial video', type: "landscape" },
  { id: 5, url: "/videos/test-video.mp4", caption: "Gym Day", type: "landscape" },
  { id: 6, url: "/videos/test-video.mp4", caption: "Breacfest day", type: "landscape" },
]

function VideoCard({ video, onClick }: { video: VideoItem; onClick: () => void }) {
  const isPortrait = video.type === "portrait"

  return (
    <div className={`flex flex-col gap-2 ${isPortrait ? "row-span-2" : ""}`}>
      <div
        onClick={onClick}
        className={`relative bg-black rounded-lg overflow-hidden group cursor-pointer ${
          isPortrait ? "h-full min-h-[400px]" : "aspect-video"
        }`}
      >
        <video
          src={video.url}
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

      <span className="text-[16px] font-bold text-gray-700 dark:text-gray-300">{video.caption}</span>
    </div>
  )
}

export default function InnerProjectVideosDisplay({
  title = "Youtube Projects",
  videos = mockVideos,
}: InnerProjectVideosDisplayProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)
  const isPortrait = activeVideo?.type === "portrait"

  const landscape = videos.filter((v) => v.type !== "portrait")
  const portrait = videos.filter((v) => v.type === "portrait")

  return (
    <div className="w-full py-8 max-w-[1389px] mx-auto">
      {title && (
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
      )}

      {portrait.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => setActiveVideo(video)} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {landscape.map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => setActiveVideo(video)} />
          ))}
        </div>
      )}

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className={`relative ${isPortrait ? "w-[min(90vw,420px)] aspect-[9/16]" : "w-[90%] max-w-[900px] aspect-video"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.url}
              className="w-full h-full rounded-lg object-cover"
              controls
              autoPlay
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}