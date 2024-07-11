import ChipExpertise from "@/app/components/common-components/chip-expertise";
import Image from "next/image";

export default function FeedComponent() {
    return (
        <div className="flex flex-col gap-[20px]  w-full">
            <h1 className="text-primary font-semibold text-2xl">Feed</h1>
            <div className="grid grid-cols-3 gap-10">
                <div className="bg-white  shadow-md flex flex-col justify-between gap-[20px]">
                    <Image src="/assets/image/neosantara-mockup.png" alt="Project Mockup" width={300} height={200} className="rounded-[8px] w-full"/>
                    <div className="flex flex-col justify-between items-start p-[15px] gap-[20px]">
                        <div className="flex flex-col">
                            <h2 className="text-primary font-medium ">Proto - Project Collaboration Platform</h2>
                            <h3 className="text-[#A9A9A9] text-sm">Software Development</h3>
                        </div>

                        <div className="flex gap-5">
                            <ChipExpertise expertise="UI/UX"/>
                            <ChipExpertise expertise="Flutter"/>
                            <ChipExpertise expertise="Laravel"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                       className="rounded-full -ms-3"/>
                                <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                       className="rounded-full -ms-3"/>
                                <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                       className="rounded-full -ms-3"/>
                            </div>

                            <h3 className="text-[#A9A9A9] text-sm font-light">4 Collaborators in this project</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}