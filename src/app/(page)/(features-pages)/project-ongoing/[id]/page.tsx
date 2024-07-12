"use client"
import {useFetch} from "@/app/lib/services/api/actions";
import {ResponseModelProjectDetail} from "@/app/lib/services/model/model-response-project-detail";
import {addDoc, collection, doc, serverTimestamp, setDoc} from "@firebase/firestore";
import {firestore} from "../../../../../../firebase";
import {verifySessionName, verifySessionUserID} from "@/app/lib/services/session/session";
import {useState} from "react";
import Loading from "@/app/components/ui/loading";

export default function DetailProject({params}: { params: { id: string } }) {

    const [loading, setLoading] = useState(false);
    const {data:dataProject,isLoading} = useFetch<ResponseModelProjectDetail>(
        {
            endpoint: `/project/show/${params.id}`,
        }
    )

    const mesageRefChat = collection(firestore, "chats");


const handleSubmit = async (evt:any,room_id:string | undefined) => {
    evt.preventDefault();
    setLoading(true);
    try {

        const {token:user_id} = await verifySessionUserID()
        const {token:nama} = await verifySessionName()


        await addDoc(mesageRefChat, {
            name:nama,
            avatarUrl:"https://ui-avatars.com/api/?name=daffa+&color=FFFFF&background=73326a&size=128",
            room_id:room_id,
            user_session_id:user_id
        })



    } catch (error) {

    }
    setLoading(false);

}
    return (
        <div className="flex flex-col h-[90vh] justify-between px-[130px] py-[65px]">
            <div className="flex justify-between">
                <div className="flex flex-col gap-[25px] w-[50%]">
                    <div>
                        <h2 className="font-semibold text-[#7D7D7D] text-xl">{dataProject?.data.category.toUpperCase()}</h2>
                        <h1 className="font-semibold text-2xl text-primary">{dataProject?.data.title}</h1>
                        <p className="font-light text-[#7A7A7A]">{dataProject?.data.description}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl text-primary">Tools Used</h2>
                        <ul className="list-disc pl-5">
                            {dataProject?.data.tool.map((tool, index) => (
                                    <li key={index}>{tool.name}</li>
                                )
                            )
                            }
                        </ul>
                    </div>


                    <button disabled={loading} onClick={(event) => {
                        handleSubmit(event,dataProject?.data.room_id)
                    }} className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                        {
                            loading ? <Loading/> : <h3 className="font-semibold text-white text-sm">Group Chat</h3>
                        }

                    </button>
                </div>

                <div>
                    <div className="mb-7">
                        <h2 className="font-medium text-xl text-primary mb-5">Requested By</h2>

                        <div className="flex gap-3">
                            <img src={dataProject?.data.owner_profile_picture} alt="User Avatar" width={40} height={40}
                                 className="rounded-full w-[40px] h-[40px]"/>

                            <div className="flex flex-col">
                                <h2 className="font-medium text-primary">{dataProject?.data.owner}</h2>
                                <p className=" text-primary text-sm">{dataProject?.data.owner_job}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-5">
                            <h2 className="font-medium text-xl text-primary mb-5">Participants</h2>

                            <h3 className="text-[#989898]">{`${dataProject?.data.participant.length}/${dataProject?.data.max_participant}`}</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            {dataProject?.data.participant.map((participant, index) => (
                                <div key={index} className="flex gap-3">
                                    <img src={participant.profile_picture} alt="User Avatar" width={40} height={40}
                                         className="rounded-full w-[40px] h-[40px]"/>

                                    <div className="flex flex-col">
                                        <h2 className="font-medium text-primary">{participant.full_name}</h2>
                                        <p className=" text-primary text-sm">${participant.expertise}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}