import { Mail, MapPin, Phone } from "lucide-react";


export default function ContactsPage(){
    return (
        <div className="flex flex-col items-center gap-6 mb-6" >
            <section className="h-[826px] w-full" style={{
                backgroundImage: "url('/contact-page-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

            </section>

            <div className="flex items-center justify-between gap-6 w-full max-w-[1389px] h-[428px] rounded-2xl">

                <div className="flex flex-col gap-4 h-full flex-[0.7]">

                    <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
                        <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
                            <Phone width={36} height={36} stroke="#fff" fill="#552583"/>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-[20px] text-[#552583]">Phone Number</span>
                            <span className="text-[16px] text-[#552583]">+995 555 25 14 36</span>

                        </div>

                    </div>

                    <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
                        <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
                            <Mail width={36} height={36} stroke="#552583"/>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-[20px] text-[#552583]">Email Adress</span>
                            <span className="text-[16px] text-[#552583]">Idearoom@gmail.com</span>

                        </div>

                    </div>

                    <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
                        <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
                            <MapPin width={36} height={36} stroke="#fff" fill="#552583"/>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-[20px] text-[#552583]">Location</span>
                            <span className="text-[16px] text-[#552583]">Kutaisi, Georgia Kostava st #38</span>

                        </div>

                    </div>
                </div>

                <div className="flex bg-[#F3EFF8F3] rounded-2xl h-full flex-1 p-4">
                    <span>Hello</span>
                </div>

            </div>
        </div>
    )
}