import {Input} from "@/app/components/ui/input";
import React from "react";


export default function ProjectCollaboration() {
    return (
        <div className="w-full h-[90vh] pt-[50px] flex flex-col">
            <div className='w-full flex flex-col gap-3'>
                <label className='font-medium text-lg'>Email</label>
                <Input placeholder="Enter your full name" className='h-14 rounded-lg'/>
            </div>
        </div>
    )
}