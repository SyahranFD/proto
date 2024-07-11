import Image from "next/image";

export default function SuggestedForComponent() {
    return (
        <div className="bg-white p-[15px] rounded-xl shadow-md">
            <h2 className="font-medium text-primary mb-4">Suggested for you</h2>

            <div className="flex flex-col gap-7">
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
    )
}