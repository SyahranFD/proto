"use client";

import {useSearchParams, usePathname, useRouter} from 'next/navigation';
import ChipExpertiseClick from "@/app/components/common-components/chip-expertise-click";
import {sendRequestProject, sendRequestProjecta, uploadImageProject} from "@/app/lib/services/api/project";
import ChipExpertise from "@/app/components/common-components/chip-expertise";
import {FaUserGroup} from "react-icons/fa6";
import {AiOutlinePicture} from "react-icons/ai";
import React, {useState} from 'react';
import {useFetch} from "@/app/lib/services/api/actions";
import {ResponseModelProjectDetail} from "@/app/lib/services/model/model-response-project-detail";
import {addDoc, collection} from "@firebase/firestore";
import {firestore} from "../../../../../../../firebase";
import {verifySessionName, verifySessionUserID} from "@/app/lib/services/session/session";
import Loading from "@/app/components/ui/loading";
import Image from "next/image"
import {useToast} from "@/app/components/ui/use-toast";

function ClientAction({skills, projectId, query, isJoined, isOwner, room, title}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace,push} = useRouter();

    const [selectedImage, setSelectedImage] = useState<string>("");
    const [loadinga, setLoadinga] = useState<boolean>(false);
    const [loading2, setLoading2] = useState<boolean>(false);
    const handleImageUpload = event => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };


    const {toast} = useToast()




    const handleClick = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('query', value);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const sendRequest = async () => {
        if (query) {

            setLoadinga(true)
            await sendRequestProjecta(projectId, query)
            setLoadinga(false)


        } else {
            toast({
                title: "Message",
                description: "Anda Harus Memilih Bidang Yang Anda Minati",
            })
        }
    }

    const handlePut = async (value: string) => {


        if(value){
            setLoading2(true)
            await uploadImageProject(projectId, value)
            setLoading2(false)
            push("/")
            toast({
                title: "Message",
                description: "Anda Telah Berhasil Menyelesaikan Project",
            })
        }else {
            toast({
                title: "Message",
                description: "Anda Harus Memilih Gambar Terlebih Dahulu",
            })
        }

    }


    const [loading, setLoading] = useState(false);


    const mesageRefChat = collection(firestore, "chats");


    const handleSubmit = async (evt: any, room_id: string | undefined) => {
        evt.preventDefault();
        setLoading(true);
        try {

            const {token: user_id} = await verifySessionUserID()

            await addDoc(mesageRefChat, {
                name: title,
                avatarUrl: "https://lh3.googleusercontent.com/ABlX4ekWIQimPjZ1HlsMLYXibPo2xiWnZ2iny1clXQm2IQTcU2RG0-4S1srWsBQmGAo",
                room_id: room_id,
                user_session_id: user_id
            })


        } catch (error) {

        }
        setLoading(false);

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
                    {!selectedImage &&
                        <div
                            className="relative border border-[#B6B6B6] border-dashed rounded-xl h-[200px] flex items-center justify-center gap-5 overflow-hidden">
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <span className="text-center flex items-center gap-3">

                                <Image alt={"asefsef"} width={"40"} height={"40"}
                                       src={"/assets/image/select-image.png"}/>
                                <p className={'text-slate-500'}>Upload Here</p>
                            </span>
                        </div>

                    }

                    {selectedImage && <img src={selectedImage} alt="Selected Image"
                                           className="w-full h-[200px] object-cover rounded-xl"/>
                    }

                </div>

                <div className="flex gap-8">
                    <button className="text-white disabled:bg-primary/10 bg-primary px-[50px] h-[50px] rounded-[8px]"
                            onClick={() => {
                                handlePut(selectedImage)
                            }}>


                        {
                            loading2 ?<Loading/>:"Finish Project"
                        }

                    </button>

                    <button
                        className="bg-white border border-primary flex items-center justify-center px-[50px] h-[50px] rounded-[8px] gap-4"
                        onClick={(event) => {
                            handleSubmit(event, room)
                        }}>


                        {
                            loading ? <Loading/> : <>
                                <FaUserGroup className="text-primary" size={24}/>
                                <h3 className="font-medium text-primary text-[18px]">Group Chat</h3>
                            </>
                        }
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
                <h3 className="font-medium text-white text-[18px]">   {

                    loadinga ?<Loading/>:"Request Project"
                }</h3>
            </button>
        </div>

    );
}

export default ClientAction;