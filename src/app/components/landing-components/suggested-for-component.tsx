import Image from "next/image";

export default function SuggestedForComponent() {
    return (
        <div className="bg-white p-[15px] rounded-xl shadow-md">
            <h2 className="font-medium text-primary mb-4">Suggested for you</h2>

            <div className="flex flex-col gap-7">
                <div className="flex gap-3">
                    <img src="https://images.pexels.com/photos/1732370/pexels-photo-1732370.jpeg?auto=compress&cs=tinysrgb&w=800" alt="User Avatar"
                           className="rounded-full w-12 h-12"/>

                    <div className="flex flex-col">
                        <h2 className="font-medium text-primary">Alex Benjamin</h2>
                        <p className=" text-primary text-sm">Backend Developer</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <img
                        src="https://images.pexels.com/photos/427900/pexels-photo-427900.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="User Avatar"
                        className="rounded-full w-12 h-12"/>

                    <div className="flex flex-col">
                        <h2 className="font-medium text-primary">Mr. Cody Senger</h2>
                        <p className=" text-primary text-sm">UI/UX Designer</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <img
                        src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="User Avatar"
                        className="rounded-full w-12 h-12"/>

                    <div className="flex flex-col">
                        <h2 className="font-medium text-primary">Tim William</h2>
                        <p className=" text-primary text-sm">Mobile Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}