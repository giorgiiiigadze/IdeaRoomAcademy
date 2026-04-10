import Image from "next/image"

type Member = {
  name: string
  role: string
  image_url: string
}

type TeamMemberProps = {
  data: Member
}

export default function TeamMember({ data }: TeamMemberProps) {
  return (
    <div className="w-[270px] flex flex-col items-center gap-4 bg-[#F3EFF8] rounded-3xl p-6 pb-8">

      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-[#E8E0F0]">
        <Image
          src={data.image_url}
          alt={data.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[16px] font-semibold text-gray-800">
          {data.name}
        </span>
        <span className="text-[14px] font-medium text-[#FFB800]">
          {data.role}
        </span>
      </div>

    </div>
  )
}