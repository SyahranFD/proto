interface ChipExpertiseProps {
    expertise: string;
}
export default function ChipExpertise({expertise, onClick}: ChipExpertiseProps) {
    return (
        <div className="bg-[#E7F0FD] px-[16px] py-[5px] rounded-2xl">
            <h1 className="text-[#4F7EC4] text-[12px]">{expertise}</h1>
        </div>
)

}