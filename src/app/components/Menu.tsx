import Image from "next/image"
export default function MenuSection() {
    return (
        <section className="bg-[url('/menu-bg.jpg')] min-h-screen w-full bg-cover bg-center flex flex-col gap-5 items-center py-10 px-2">

            <div className="flex flex-col items-center gap-20">
                <h1 className="text-5xl underline font-bold text-amber-900 sans">Piuni Haina Ta?</h1>
                <div className="flex gap-10 flex-wrap items-center justify-center">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/special-chiya.jpg" alt="special-chiya" width={180} height={201} className="rounded-2xl" />
                        <p className="text-2xl sans font-semibold uppercase">Special chiya!!!</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/rato-chiya.jpg" alt="rato-chiya" width={180} height={201} className="rounded-2xl min-h-[225px] object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">rato chiya!!!</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/doodh-chiya.jpg" alt="doodh-chiya" width={180} height={201} className="rounded-2xl min-h-[225px] object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">doodh chiya!!!</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/hariyo.jpg" alt="hariyo-chiya" width={180} height={201} className="rounded-2xl min-h-[225px] object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">hariyo chiya!!!</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/amilo-chiya.jpg" alt="amilo-chiya" width={180} height={201} className="rounded-2xl min-h-[225px] object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">amilo chiya!!!</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center gap-20 mt-10">
                <h1 className="text-5xl text-center underline font-bold text-amber-900 sans">Kati Pinu Matra!! Khaidim</h1>
                <div className="flex gap-10 flex-wrap items-center justify-center">
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/veg-pakauda.jpg" alt="veg-pakauda" width={160} height={190} className="rounded-2xl min-h-[200px] object-cover object-center min-w-[160px]" />
                        <p className="text-2xl sans font-semibold uppercase">veg pakauda</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/aalo-samosa.jpg" alt="aaloo-samosa" width={150} height={160} className="rounded-2xl min-h-[200px] object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">aloo samosa</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src="/batuk.jpg" alt="batuk" width={130} height={160} className="rounded-2xl  object-cover" />
                        <p className="text-2xl sans font-semibold uppercase">batuk</p>
                    </div>

                </div>
            </div>


        </section>
    )
}