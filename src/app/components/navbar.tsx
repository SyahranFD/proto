import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full bg-primary flex justify-between px-[120px] py-[20px]">
            <Image
                src="/assets/svg/logo-horizontal.svg"
                alt="Logo Horizontal"
                width={200}
                height={50} />


        </div>
    )
}