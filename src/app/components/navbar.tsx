import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import NavbarAction from "@/app/components/common-components/navbar-action";

interface NavbarProps {
    href: string;
    title: string;
}

const dataNavbar: NavbarProps[] = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/project",
        title: "Project"
    },
    {
        href: "/messages",
        title: "Messages"
    }
]



export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center px-[120px] py-[20px] border border-b-[#C1C1C1]">
            <Image
                src="/assets/svg/logo-horizontal.svg"
                alt="Logo Horizontal"
                width={135}
                height={60} />

            <ul className="flex gap-[80px]">
                {dataNavbar.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <li className="font-medium text-lg text-primary">
                            {item.title}
                        </li>
                    </Link>
                ))}

            </ul>

            <div className="flex items-center gap-[35px]">
                <IoIosNotificationsOutline className="text-primary" size={32}/>

                {/*<Link href="/profile">*/}

                 <NavbarAction/>

                {/*</Link>*/}

                <Link href="/project-collaborate">
                    <button className="bg-primary flex items-center gap-3 px-[20px] py-[10px] rounded-[8px]">
                        <FaPlus className="text-white" size={24}/>

                        <h3 className="text-white text-xl">Collaborate</h3>

                    </button>
                </Link>
            </div>


        </div>
    )
}