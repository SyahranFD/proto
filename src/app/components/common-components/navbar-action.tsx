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
import {redirect} from "next/navigation";
import {deleteSession} from "@/app/lib/services/session/session";

const   NavbarAction:React.FC = () => {
 return (
     <DropdownMenu>
         <DropdownMenuTrigger className={"cursor-pointer"} asChild>
             <img  src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar"  className="rounded-full w-10 h-10" />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
             <DropdownMenuLabel>
                 <Link href="/profile">

                     Profile

                 </Link>
             </DropdownMenuLabel>

             <DropdownMenuLabel onClick={()=>{
                 deleteSession("user-token");
                 redirect('/login');
             }}>
                 <Link href="/login">
                 Logout
         </Link>
             </DropdownMenuLabel>

         </DropdownMenuContent>
     </DropdownMenu>
 );
};


export default NavbarAction;