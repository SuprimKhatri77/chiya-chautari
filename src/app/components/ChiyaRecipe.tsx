import Image from "next/image"

export default function ChiyaRecipeSection() {
    return (
        <div className="bg-[url('/special-section-bg.jpg')] w-full min-h-screen bg-cover bg-center py-10">
            <div className="flex flex-col items-center justify-between min-h-screen ">
                <div className="flex flex-col gap-2">
                    <p className="uppercase text-amber-800 text-4xl font-bold cursive">Special chiya ko</p>
                    <p className="uppercase text-amber-800 text-4xl font-bold text-center cursive">Special recipe</p>
                </div>
                <Image src="/special-center.png" alt="" width={354} height={387} />
            </div>

        </div>
    )
}