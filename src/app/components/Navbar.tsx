"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [showSticky, setShowSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className="relative w-full h-screen overflow-hidden">
            <video
                src="/Current-Product-Showcase_all-products.mp4"
                autoPlay
                muted
                playsInline
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <nav className="relative z-20 flex items-center justify-between px-7 md:px-12 py-4">
                <div>
                    <Image
                        src="/logo-1.png"
                        alt="logo"
                        height={82}
                        width={220}
                        className="object-cover object-center"
                    />
                </div>

                <div className="flex items-center gap-4 text-white">
                    <FaFacebook className="hidden md:flex cursor-pointer text-2xl hover:text-red-500 transition-colors" />
                    <FaInstagram className="hidden md:flex cursor-pointer text-2xl hover:text-red-500 transition-colors" />

                    <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                        <Menu size={24} />
                        <p className="text-lg font-semibold">Menu</p>
                    </div>
                </div>
            </nav>
            <div className={`fixed w-full z-30 top-0 ${showSticky ? "-translate-y-0" : "-translate-y-full"} transition-all duration-400 ease-in-out`}>

                <nav className="relative z-20 flex items-center justify-between px-7 md:px-12 py-4 bg-black/40">
                    <div>
                        <Image
                            src="/logo-1.png"
                            alt="logo"
                            height={82}
                            width={220}
                            className="object-cover object-center"
                        />
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <FaFacebook className="hidden cursor-pointer text-2xl hover:text-red-500 transition-colors md:flex" />
                        <FaInstagram className="hidden cursor-pointer text-2xl hover:text-red-500 transition-colors md:flex" />

                        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            <Menu size={24} />
                            <p className="text-lg font-semibold">Menu</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
