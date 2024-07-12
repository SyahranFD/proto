import Image from "next/image";
import ChipExpertise from "@/app/components/common-components/chip-expertise";
import {getCurrentProject} from "@/app/lib/services/api/project";
import Link from "next/link";

export default async function YourProjectComponent() {

    const dataCurrentProject = await getCurrentProject();

    return (
     dataCurrentProject.length > 0 && (
         <div className="flex flex-col gap-[20px]  w-full">
             <h1 className="text-primary font-semibold text-2xl">Your Project</h1>
             {dataCurrentProject.map((project, index) => (
                 <div key={index} className="bg-white p-[15px] shadow-md flex flex-col gap-[20px]">

                     <div className="flex justify-between items-center">
                         <div className="flex flex-col">
                             <h2 className="text-primary font-medium ">{project.title}</h2>
                             <h3 className="text-[#A9A9A9] text-sm">{project.category}</h3>
                         </div>

                         <div className="flex">
                             {project.participant.map((participant, index) => (
                                 <img key={index} src={participant.profile_picture} alt="User Avatar" width={40}
                                      height={40}
                                      className="rounded-full -ms-3 w-[40px] h-[40px]"/>
                             ))}
                         </div>


                     </div>

                     <div className="flex justify-between items-center">
                         <div className="flex gap-5">
                             {project.skill.map((skill, index) => (
                                 <div key={index}>
                                     <ChipExpertise expertise={skill.name}/>
                                 </div>
                             ))}
                         </div>

                         <Link href={`project/${project.id}`}>
                             <button className="bg-primary px-[18px] py-[5px] rounded-[16px]">
                                 <h3 className="font-semibold text-white text-sm">Continue</h3>
                             </button>
                         </Link>
                     </div>
                 </div>
             ))}
         </div>
     )
    )
}