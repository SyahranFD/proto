import ChipExpertise from "@/app/components/common-components/chip-expertise";

import {getProjectById, getRecommendationProject} from "@/app/lib/services/api/project";
import ClientAction from "@/app/(page)/(features-pages)/project/[id]/components/client-action";

export default async function DetailProject(
    {params, searchParams} : {
        params: {id: string},
        searchParams?: {
            query?: string
            page?: string
        }
    }
) {

    const query = searchParams?.query || '';

    const dataProject = await getProjectById(params.id)

    const similarProject = await getRecommendationProject(dataProject.category.toLowerCase())

    console.log(dataProject)


    return (
        <div className="flex flex-col h-[90vh] justify-between px-[130px] py-[65px]">
            <div className="flex justify-between">
                <div className="flex flex-col gap-[25px] w-[50%]">
                    <div>
                        <h2 className="font-semibold text-[#7D7D7D] text-xl">{dataProject.category.toUpperCase()}</h2>
                        <h1 className="font-semibold text-2xl text-primary">{dataProject.title}</h1>
                        <p className="font-light text-[#7A7A7A]">{dataProject.description}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl text-primary">Tools Used</h2>
                        <ul className="list-disc pl-5">
                            {dataProject.tool.map((tool, index) => (
                                <li key={index}>{tool.name}</li>
                                )
                            )
                            }
                        </ul>
                    </div>

                    <ClientAction title={dataProject.title} room={dataProject.room_id} skills={dataProject.skill} projectId={dataProject.id} query={query} isJoined={dataProject.is_joined} isOwner={dataProject.is_owner} />


                </div>

                <div>
                    <div className="mb-7">
                        <h2 className="font-medium text-xl text-primary mb-5">Requested By</h2>

                        <div className="flex gap-3">
                            <img src={dataProject.owner_profile_picture} alt="User Avatar" width={40} height={40}
                                   className="rounded-full w-[40px] h-[40px]"/>

                            <div className="flex flex-col">
                                <h2 className="font-medium text-primary">{dataProject.owner}</h2>
                                <p className=" text-primary text-sm">{dataProject.owner_job}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-5">
                            <h2 className="font-medium text-xl text-primary mb-5">Participants</h2>

                            <h3 className="text-[#989898]">{`${dataProject.participant.length}/${dataProject.max_participant}`}</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            {dataProject.participant.map((participant, index) => (
                                <div key={index} className="flex gap-3">
                                <img src={participant.profile_picture} alt="User Avatar" width={40} height={40}
                                       className="rounded-full w-[40px] h-[40px]"/>

                                <div className="flex flex-col">
                                    <h2 className="font-medium text-primary">{participant.full_name}</h2>
                                    <p className=" text-primary text-sm">{participant.expertise}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            {!dataProject.is_joined && (
                <div>
                    <h2 className="font-semibold text-xl text-primary mb-4">Find Similar Project</h2>

                    <div className="grid grid-cols-3 gap-8">
                        {similarProject.map((project, index) => (
                            <div key={index} className="bg-white p-[15px] shadow-md flex justify-between gap-[20px]">

                                <div className="flex flex-col justify-between items-start">
                                    <div className="flex flex-col">
                                        <h2 className="text-primary font-medium ">{project.title}</h2>
                                        <h3 className="text-[#A9A9A9] text-sm">{project.category}</h3>
                                    </div>

                                    <div className="flex gap-5">
                                        {project.skill.map((skill, index) => (
                                            <div key={index}>
                                                <ChipExpertise expertise={skill.name}/>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="flex flex-col justify-between items-end gap-[25px]">
                                    <h3 className="text-[#A9A9A9] text-sm">{`${project.participant.length}/${project.max_participant}`}</h3>

                                    <img src={project.owner_profile_picture} alt="User Avatar" width={40} height={40}
                                         className="rounded-full -ms-3"/>

                                    <button className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                                        <h3 className="font-semibold text-white text-sm">Join</h3>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}