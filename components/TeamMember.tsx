import Image from "next/image"

type TeamMemberProps = {
  name: string
  role: string
  image: string
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="w-[270px] flex flex-col items-center gap-4 bg-[#F3EFF8] rounded-3xl p-6 pb-8">
      
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-[#E8E0F0]">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[16px] font-semibold text-gray-800">{name}</span>
        <span className="text-[14px] font-medium text-[#FFB800]">{role}</span>
      </div>

    </div>
  )
}