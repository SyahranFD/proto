"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import ChipExpertiseClick from "@/app/components/common-components/chip-expertise-click";
import {sendRequestProject} from "@/app/lib/services/api/project";
import ChipExpertise from "@/app/components/common-components/chip-expertise";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import React, { useState } from 'react';


function ClientAction({ skills, projectId, query, isJoined, isOwner  }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = event => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };


    const handleClick = (value:string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('query', value);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const sendRequest = async () => {
        await sendRequestProject(projectId, query)

        console.log(sendRequestProject(projectId, query))
    }

    if (isJoined || isOwner) {
        return (
            <div>
                <div>
                    <h2 className="font-semibold text-xl text-primary mb-4">Expertise</h2>
                    <ul className="flex gap-5 mb-10">
                        {skills.map((skill, index) => (
                                <div key={index}>
                                    <ChipExpertise expertise={skill.name}/>
                                </div>
                            )
                        )}
                    </ul>
                </div>

                <div className="mb-10">
                    <h2 className="font-semibold text-xl text-primary mb-4">Upload Project Screenshot</h2>
                    {!selectedImage && <input type="file" onChange={handleImageUpload} className="w-full border border-[#B6B6B6] border-dashed rounded-xl h-[200px] flex items-center justify-center gap-5"/>}
                    {selectedImage && <img src={selectedImage} alt="Selected Image"
                                                               className="w-full h-[200px] object-cover rounded-xl"/>
                }

                </div>

                <div className="flex gap-8">
                    <button className="bg-primary px-[50px] h-[50px] rounded-[8px]" onClick={sendRequest}>
                        <h3 className="font-medium text-white text-[18px]">Finish Project</h3>
                    </button>

                    <button
                        className="bg-white border border-primary flex items-center justify-center px-[50px] h-[50px] rounded-[8px] gap-4"
                        onClick={sendRequest}>
                        <FaUserGroup className="text-primary" size={24}/>
                        <h3 className="font-medium text-primary text-[18px]">Group Chat</h3>
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div>
            <ul className="flex gap-5 mb-10">
                {skills.map((skill, index) => (
                    <div key={index}>
                    <ChipExpertiseClick expertise={skill.name} onClick={handleClick}
                                                isSelected={skill.name === query}/>
                        </div>
                    )
                )}
            </ul>

            <button className="bg-primary px-[50px] h-[50px] rounded-[8px]" onClick={sendRequest}>
                <h3 className="font-medium text-white text-[18px]">Send Request</h3>
            </button>
        </div>

    );
}

export default ClientAction;