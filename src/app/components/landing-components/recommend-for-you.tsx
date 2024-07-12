import ChipExpertise from "@/app/components/common-components/chip-expertise";
import {getRecommendationProject} from "@/app/lib/services/api/project";
import Link from "next/link";


export default async function RecommendForYou() {

    const dataRecommendation = await getRecommendationProject("software development");

    return (
        <div className="flex flex-col gap-[20px]  w-full">
            <h1 className="text-primary font-semibold text-2xl">Recommend for you</h1>
            <div className="grid grid-cols-2 gap-10">
                {dataRecommendation.map((project, index) => (
                    <div key={index} className="bg-white p-[15px] shadow-md flex justify-between gap-[20px]">

                        <div className="flex flex-col justify-between items-start">
                            <div className="flex flex-col">
                                <h2 className="text-primary font-medium ">{project.title}</h2>
                                <h3 className="text-[#A9A9A9] mt-2 text-sm">{project.category}</h3>
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
                                   className="rounded-full -ms-3 w-[40px] h-[40px]"/>

                            <Link href={`project/${project.id}`}>
                                <button className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                                    <h3 className="font-semibold text-white text-sm">Join</h3>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}