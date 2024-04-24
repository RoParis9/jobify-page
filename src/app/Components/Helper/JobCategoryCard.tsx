import Image from "next/image";

interface Props {
    image: string;
    category: string;
    openPositions: string;
}
export const JobCategoryCard = ({ image, category, openPositions }: Props) => {
    return (
        <div className="p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-grey-500 rounded-lg border-opacity-10">
            <div className="flex items-center space-x-4">
                <Image src={image} alt={category} width={60} height={60} />
                <div>
                    <h2 className="text-[17px] font-semibold mb-[0.4rem]">{category}</h2>
                    <p className="text-[14px] text-black font-semibold text-opacity-50k">({openPositions} open positions)</p>
                </div>
            </div>
        </div>
    )
}
