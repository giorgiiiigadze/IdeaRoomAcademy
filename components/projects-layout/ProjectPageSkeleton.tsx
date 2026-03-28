export default function ProjectPageSkeleton() {
  return (
    <div className="w-full max-w-[1392px] flex flex-col gap-6 mt-6 mb-6 px-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-[300px] w-full rounded-[24px] bg-muted animate-pulse" />
      ))}
    </div>
  )
}