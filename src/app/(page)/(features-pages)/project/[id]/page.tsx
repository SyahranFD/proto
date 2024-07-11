import ChipExpertise from "@/app/components/common-components/chip-expertise";
import Image from "next/image";

export default function DetailProject() {
    return (
        <div className="flex flex-col h-[90vh] justify-between px-[130px] py-[65px]">
            <div className="flex justify-between">
                <div className="flex flex-col gap-[25px] w-[50%]">
                    <div>
                        <h2 className="font-semibold text-[#7D7D7D] text-xl">SOFTWARE DEVELOPMENT</h2>
                        <h1 className="font-semibold text-2xl text-primary">Proto - Project Collaboration Platform</h1>
                        <p className="font-light text-[#7A7A7A]">Corem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            Etiam
                            eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                            accumsan,
                            risus
                            sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                            sit
                            amet
                            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos
                            himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
                            rhoncus
                            ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
                            convallis
                            convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl text-primary">Tools Used</h2>
                        <ul className="list-disc pl-5">
                            <li>React.js</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl text-primary mb-4">Expertise</h2>
                        <ul className="flex gap-5">
                            <ChipExpertise expertise="Frontend Developer"/>
                            <ChipExpertise expertise="Backend Developer"/>

                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl text-primary mb-4">Upload Project Screenshot / Video</h2>
                        <div>

                        </div>
                    </div>

                    <button className="bg-primary rounded-[8px] px-[20px] py-[10px]">
                        <h3 className="text-white text-xl">Send Request</h3>
                    </button>
                </div>

                <div>
                    <div className="mb-7">
                        <h2 className="font-medium text-xl text-primary mb-5">Requested By</h2>

                        <div className="flex gap-3">
                            <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                   className="rounded-full"/>

                            <div className="flex flex-col">
                                <h2 className="font-medium text-primary">Alex Benjamin</h2>
                                <p className=" text-primary text-sm">Backend Developer</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-5">
                            <h2 className="font-medium text-xl text-primary mb-5">Participants</h2>

                            <h3 className="text-[#989898]">2/3</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                        <div className="flex gap-3">
                                <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                       className="rounded-full"/>

                                <div className="flex flex-col">
                                    <h2 className="font-medium text-primary">Alex Benjamin</h2>
                                    <p className=" text-primary text-sm">Backend Developer</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                       className="rounded-full"/>

                                <div className="flex flex-col">
                                    <h2 className="font-medium text-primary">Alex Benjamin</h2>
                                    <p className=" text-primary text-sm">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-xl text-primary mb-4">Find Similar Project</h2>

                <div className="grid grid-cols-4">
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

                            <Image src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40}
                                   className="rounded-full -ms-3"/>

                            <button className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                                <h3 className="font-semibold text-white text-sm">Join</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}