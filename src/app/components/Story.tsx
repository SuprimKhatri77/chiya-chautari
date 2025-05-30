import Image from "next/image";

export default function StorySection() {
    return (
        <section className="w-full bg-[url('/below-nav-bg.png')] bg-cover bg-center min-h-full lg:min-h-screen z-70 flex flex-col justify-center py-10">
            <div className="w-full px-5 md:px-10 lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center  justify-between gap-10">

                <Image
                    src="/below-nav-image.png"
                    alt="Chiya Chautari"
                    width={412}
                    height={618}
                    className="w-[130px] h-[200px] lg:w-[412px] lg:h-[618px] object-contain"
                />

                <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-xl lg:max-w-md">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-amber-800 text-center lg:text-left">
                        Hamro Katha
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-green-800 text-center lg:text-left font-medium">
                        Chiya Chautari is more than just a tea shop. It's a space where emotions brew along with tea. Inspired by the traditional Nepali chautari, where people gather to chat, rest, and connect, we've created a cozy spot that brings that same warmth to the modern day.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-green-800 text-center lg:text-left font-medium">
                        We serve freshly prepared milk tea, masala tea, lemon tea, and more, paired with delicious local snacks that make every visit memorable. Whether you're starting your morning or unwinding in the evening, Chiya Chautari is your perfect destination.
                    </p>
                </div>

            </div>
        </section>
    );
}
