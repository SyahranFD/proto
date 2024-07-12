"use client";
interface ChipExpertiseProps {
    expertise: string;
    onClick: (value: string) => void;
    isSelected: boolean;
}
export default function ChipExpertiseClick({expertise, onClick, isSelected}: ChipExpertiseProps) {
    return (
        isSelected ? <div className="bg-[#E7F0FD] px-[16px] py-[5px] rounded-2xl" onClick={() => onClick(expertise)}>
                <h1 className="text-[#4F7EC4] text-[12px]">{expertise}</h1>
            </div> :
            <div className="bg-white px-[16px] py-[5px] rounded-2xl border border-[#D5D5D5]" onClick={() => onClick(expertise)}>
                <h1 className="text-[#8C8C8C] text-[12px]">{expertise}</h1>
            </div>
)

}