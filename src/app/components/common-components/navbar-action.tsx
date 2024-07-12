"use client"

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const NavbarAction:React.FC = () => {
 return (
     <DropdownMenu>
         <DropdownMenuTrigger className={"cursor-pointer"} asChild>
             <Image  src="/assets/image/user-avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full" />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
             <DropdownMenuLabel>
                 <Link href="/profile">

                     Profile

                 </Link>
             </DropdownMenuLabel>
             <DropdownMenuLabel onClick={()=>{

                 redirect('/login');
             }}>
                 Logout

             </DropdownMenuLabel>
         </DropdownMenuContent>
     </DropdownMenu>
 );
};


export default NavbarAction;