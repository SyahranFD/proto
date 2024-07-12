"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import ChipExpertise from "@/app/components/common-components/chip-expertise";
import {sendRequestProject} from "@/app/lib/services/api/project";



function SkillList({ skills, projectId, query  }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();



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


    return (
        <div>
            <ul className="flex gap-5">
                {skills.map((skill, index) => (
                        <div key={index}>
                            <ChipExpertise expertise={skill.name} onClick={handleClick}/>
                        </div>
                    )
                )
                }
            </ul>

            <button className="bg-primary px-[18px] py-[5px] rounded-[16px]" onClick={sendRequest}>
                <h3 className="font-semibold text-white text-sm">Send Request</h3>
            </button>
        </div>

    );
}

export default SkillList;