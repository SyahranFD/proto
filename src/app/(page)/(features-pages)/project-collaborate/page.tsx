import {Input} from "@/app/components/ui/input";
import React from "react";
import { FaPlus } from "react-icons/fa6";



export default function ProjectCollaboration() {
    return (
        <div className="w-full h-[85vh] pt-[50px] flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center gap-4">
                <h1 className="font-semibold text-2xl text-primary">Project Collaboration</h1>
                <p className="font-light text-[#A9A9A9]">Turn your idea into reality and gain new connection</p>

                <div className="w-[45%] flex flex-col gap-[30px] items-center">
                    <div className='w-full flex flex-col gap-3'>
                        <label className='font-medium text-lg'>Title*</label>
                        <Input placeholder="Project Name" className='h-14 rounded-lg'/>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <label className='font-medium text-lg'>Description</label>
                        <Input placeholder="Describe your project" className='h-14 rounded-lg'/>
                    </div>

                    <div className="w-full flex gap-8">
                        <div className='w-full flex flex-col gap-3'>
                            <label className='font-medium text-lg'>Max Participant*</label>
                            <Input placeholder="Max Participant" className='h-14 rounded-lg'/>
                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <label className='font-medium text-lg'>Project Category</label>
                            <Input placeholder="Enter your full name" className='h-14 rounded-lg'/>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-3'>
                        <label className='font-medium text-lg'>Skills Requirement</label>
                        <div className="flex items-center gap-5">
                            <FaPlus/>

                            <h3 className="text-primary text-sm">Add Skills</h3>
                        </div>
                    </div>
                    <div className='w-full flex gap-3'>
                        <h1 className="font-medium text-lg">Project Paid</h1>
                        <input type="checkbox"/>
                    </div>

                </div>
            </div>

            <button className="w-[45%] bg-primary rounded-2xl h-[60px]">
                <h3 className="font-medium text-white text-lg">Create Project</h3>
            </button>
        </div>
    )
}