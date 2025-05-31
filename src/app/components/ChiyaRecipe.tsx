import Image from "next/image"

export default function ChiyaRecipeSection() {
    return (
        <div className="bg-[url('/special-section-bg.jpg')] w-full min-h-screen bg-cover bg-center py-10 relative overflow-hidden">
            <div className="container mx-auto px-4 h-full min-h-screen flex flex-col items-center relative">

                <div className="text-center mt-2 mb-12 lg:mb-16 z-10">
                    <h2 className="uppercase text-amber-800 text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sans">
                        Special chiya ko
                    </h2>
                    <h2 className="uppercase text-amber-800 text-4xl sm:text-3xl lg:text-4xl font-bold sans">
                        Special recipe
                    </h2>
                </div>

                <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center py-10">

                    <div className="relative z-20">
                        <Image
                            src="/special-center.png"
                            alt="Special Chiya Cup"
                            width={354}
                            height={387}
                            className="w-48 sm:w-60 lg:w-80 object-contain"
                        />
                    </div>

                    <div className="absolute left-4 sm:left-6 lg:left-30 lg:top-40 transform -translate-y-1/2">
                        <div className="flex items-center gap-2">
                            <div className="text-left">
                                <span className="text-amber-800 font-bold text-xl sm:text-2xl lg:text-3xl uppercase block">
                                    Chiya
                                </span>
                                <span className="text-amber-800 font-bold text-xl sm:text-2xl lg:text-3xl uppercase block">
                                    Patti
                                </span>
                            </div>
                            <div>
                                <Image
                                    src="/chiya-patti-arrow.png"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className="w-20 sm:w-24 lg:w-28 object-contain"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/special-ingri-cleft.png"
                                    alt="Chiya Patti"
                                    width={80}
                                    height={60}
                                    className="absolute  lg:-top-13 w-16 sm:w-20 lg:w-30 object-contain bounce"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-4 sm:top-6 lg:-top-15 lg:left-100">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-amber-800 font-bold text-lg sm:text-xl lg:text-2xl uppercase absolute lg:-left-10">
                                Chini
                            </span>
                            <div>
                                <Image
                                    src="/chini-arrow.png"
                                    alt=""
                                    width={120}
                                    height={60}
                                    className="w-24 sm:w-28 lg:w-32 object-contain rotate-[70deg] mt-14"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/chini.png"
                                    alt="Chini"
                                    width={60}
                                    height={60}
                                    className="absolute lg:top-22 lg:left-30 w-14 sm:w-16 lg:w-20 object-contain bounce"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-4 sm:right-6 lg:right-105 lg:top-15">
                        <div className="flex items-center gap-2 flex-row-reverse">
                            <div className="text-right absolute lg:-top-35 lg:left-32">
                                <span className="text-amber-800 font-bold text-xl sm:text-2xl lg:text-3xl uppercase block">
                                    Garam
                                </span>
                                <span className="text-amber-800 font-bold text-xl sm:text-2xl lg:text-3xl uppercase block">
                                    Masala
                                </span>
                            </div>
                            <div>
                                <Image
                                    src="/garam-masala-arrow.png"
                                    alt=""
                                    width={100}
                                    height={50}
                                    className="w-20 sm:w-24 lg:w-28 object-contain rotate-[150deg] absolute lg:-top-22 lg:left-10"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/garam-masala.png"
                                    alt="Garam Masala"
                                    width={70}
                                    height={50}
                                    className="bounce w-16 sm:w-20 lg:w-24 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-4 sm:right-6 lg:right-20 lg:top-25">
                        <div className="flex items-center gap-2 flex-row-reverse">
                            <span className="text-amber-800 font-bold text-xl sm:text-2xl lg:text-3xl uppercase w-fit  -translate-x-20 -translate-y-2">
                                Dhood
                            </span>
                            <div>
                                <Image
                                    src="/doodh-arrow.png"
                                    alt=""
                                    width={80}
                                    height={40}
                                    className="w-16 sm:w-20 lg:w-24 object-contain rotate-[150deg] absolute lg:-left-40"
                                />
                            </div>
                            <div>
                                <Image
                                    src="/special-ingri-right.png"
                                    alt="Dhood"
                                    width={50}
                                    height={70}
                                    className="w-12 sm:w-14 lg:w-25 object-contain absolute lg:-left-53 lg:top-15 bounce"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 sm:bottom-8 lg:bottom-0 left-0 lg:-left-20">
                        <Image
                            src="/special-left.png"
                            alt="Bottom Left Ingredient"
                            width={200}
                            height={130}
                            className="w-48 sm:w-56 lg:w-64 object-contain"
                        />
                    </div>

                    <div className="absolute bottom-0 sm:bottom-8 -right-40 lg:-right-150 lg:-bottom-10 ">
                        <Image
                            src="/special-right.png"
                            alt="Bottom Right Spices"
                            width={220}
                            height={150}
                            className="w-70 sm:w-60 lg:w-200 object-contain"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}
