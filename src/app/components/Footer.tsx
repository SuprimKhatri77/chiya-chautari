import Image from "next/image"
export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 items-center justify-center bg-white w-full py-10 px-3 ">
            <div className="max-w-[1400px]  mx-auto w-full flex flex-col items-center gap-5 lg:gap-0 justify-center lg:flex-row lg:justify-evenly flex-wrap lg:items-start">
                <div>
                    <Image src="/logo.png" alt="logo" width={220} height={82} className="object-cover object-center w-[220px] h-[82px]" />
                </div>
                <div className="flex flex-col gap-2" >
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="text-lg text-red-700 cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Our Presence</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Our Products</h2>
                    <ul className="flex flex-col gap-1 items-center lg:items-start text-red-700 text-lg">
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Noodles</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Snakcs</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Cup Noodels</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Pack of Five</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Current Affairs</h2>
                    <ul className="flex lg:items-start items-center flex-col gap-1 text-lg text-red-700">
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Recipe</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Latest Promotion</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">Event</li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">CSR</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 text">
                    <h2 className="text-2xl font-bold lg:text-left text-center">Contact Us</h2>
                    <ul className="flex gap-3 items-center  ">
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                            <Image src="/facebook.png" alt="" width={40} height={40} className="" />
                        </li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                            <Image src="/insta.png" alt="" width={40} height={40} />
                        </li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                            <Image src="/youtube.png" alt="" width={40} height={40} />
                        </li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                            <Image src="/phone.png" alt="" width={40} height={40} />
                        </li>
                        <li className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">
                            <Image src="/mail.png" alt="" width={40} height={40} />
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-lg text-center">Chiya Chautari ©2024. All Rights Reserved.</p>
        </footer>
    )
}