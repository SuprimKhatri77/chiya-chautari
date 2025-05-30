import Image from "next/image"
export default function NachutauneSection() {
    return (
        <section className="bg-[url('/nachutaune-bg.jpg')] min-h-screen w-full object-center object-cover flex items-center flex-wrap justify-center py-10 px-3">
            <Image src="/nachutaune.png" alt="" width={650} height={434} />
            <div className="flex flex-col gap-10">
                <h1 className="capitalize text-amber-900 underline text-3xl font-bold sans text-center md:text-5xl">Khana na chutam haii.....</h1>
                <div className="flex flex-col gap-2 items-center text-center">
                    <p className="text-xl md:text-3xl font-bold text-white sans">Today's perfect combo: Special chiya + crispy aloo</p>
                    <p className="text-xl md:text-3xl font-bold text-white sans">samosa = Pure happiness</p>
                    <p className="text-xl md:text-3xl font-bold text-white sans">Come enjoy it fresh at Chiya Chautari!</p>
                </div>
            </div>
        </section>
    )
}