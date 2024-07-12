import ChipExpertise from "@/app/components/common-components/chip-expertise";
import {getFeedProject} from "@/app/lib/services/api/project";

export default async function FeedComponent() {
    const dataFeed = await getFeedProject();

    return (
        <div className="flex flex-col gap-[20px]  w-full">
            <h1 className="text-primary font-semibold text-2xl">Feed</h1>
            <div className="grid grid-cols-3 my-5 gap-10">
                {dataFeed.map((project, index) => (
                    <div key={index} className="bg-white  shadow-md flex flex-col justify-between gap-[20px]">
                        <img src={project.image} alt="Project Mockup" width={300} height={200}
                               className="rounded-[8px] w-full h-[200px] object-cover"/>
                        <div className="flex flex-col justify-between items-start p-[15px] gap-[20px]">
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

                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {project.participant.map((participant, index) => (
                                        <img key={index} src={participant.profile_picture} alt="User Avatar" width={40} height={40}
                                             className="rounded-full -ms-3 w-[40px] h-[40px]"/>
                                    ))}
                                </div>

                                <h3 className="text-[#A9A9A9] text-sm font-light">{`${project.participant.length} Collaborators in this project`}</h3>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}