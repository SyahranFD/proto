"use client";

import { useRouter } from 'next/navigation'



function SkillList({ skills }) {

    const router = useRouter();


    // const handleClick = () => {
    //     router.push({
    //         pathname: '/some/path',
    //         query: { key: 'value' }, // Here you can pass your data
    //     })
    // }

    return (
        <ul className="flex gap-5">
            {skills.map((skill, index) => (
                    <div key={index}>
                    {/*<ChipExpertise expertise={skill.name} onClick={addSkill}/>*/}
                        <button onClick={handleClick}></button>
                    </div>
                )
            )
            }
        </ul>
);
}

export default SkillList;