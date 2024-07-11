import Image from "next/image";
import ChipExpertise from "@/app/components/common-components/chip-expertise";


export default function RecommendForYou() {
    return (
        <div className="flex flex-col gap-[20px]  w-full">
            <h1 className="text-primary font-semibold text-2xl">Recommend for you</h1>
            <div className="grid grid-cols-2 gap-10">
                <div className="bg-white p-[15px] shadow-md flex justify-between gap-[20px]">

                    <div className="flex flex-col justify-between items-start">
                        <div className="flex flex-col">
                            <h2 className="text-primary font-medium ">Proto - Project Collaboration Platform</h2>
                            <h3 className="text-[#A9A9A9] text-sm">Software Development</h3>
                        </div>

                        <div className="flex gap-5">
                            <ChipExpertise expertise="UI/UX"/>
                            <ChipExpertise expertise="Flutter"/>
                            <ChipExpertise expertise="Laravel"/>
                        </div>

                    </div>

                    <div className="flex flex-col justify-between items-end gap-[25px]">
                        <h3 className="text-[#A9A9A9] text-sm">1/3</h3>

                       <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full -ms-3" />

                        <button className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                            <h3 className="font-semibold text-white text-sm">Join</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}