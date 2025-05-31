"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ArrowBigRight, ArrowLeft, ChevronRight, CrossIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navbar() {
    const [showSticky, setShowSticky] = useState(false);
    const [navShown, setIsNavShown] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (navShown) {
            document.body.style.minHeight = "100vh"
            document.body.style.overflow = "hidden"
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            document.body.style.minHeight = ""
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.minHeight = ""
            document.body.style.overflow = ""
        }
    }, [navShown])
    return (
        <header className="relative w-full min-h-screen overflow-hidden flex flex-col">
            {/* <video
                src="/Current-Product-Showcase_all-products.mp4"
                autoPlay
                muted
                playsInline
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            /> */}

            {/* <div className="absolute inset-0 bg-black/20 z-10"></div> */}

            <nav className="relative z-[80] flex items-center justify-between px-7 md:px-12 py-4">
                <Link href="/" onClick={() => setIsNavShown(false)}>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        height={82}
                        width={220}
                        className="w-[110px] h-[40px] object-cover object-center md:w-[220px] md:h-[82px]"
                    />
                </Link>

                <div className="flex items-center gap-4 text-white">
                    {
                        !navShown && (
                            <>

                                <FaFacebook className="hidden md:flex cursor-pointer text-3xl hover:text-yellow-500 transition-colors" />
                                <FaInstagram className="hidden md:flex cursor-pointer text-3xl hover:text-yellow-500 transition-colors" />
                            </>
                        )
                    }

                    <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                        {navShown ? (

                            <X size={24} className="curosor-pointer text-black" onClick={() => setIsNavShown(prev => !prev)} />
                        ) : (

                            <Menu size={24} className="curosor-pointer hover:text-yellow-500" onClick={() => setIsNavShown(prev => !prev)} />
                        )}
                        <p className="hidden sm:block text-lg font-semibold">
                            <span className="text-yellow-500">Me</span>
                            <span className="text-green-500">nu</span>
                        </p>
                    </div>
                </div>

            </nav>

            <div className={` fixed w-full z-[70] top-0 ${showSticky ? "-translate-y-0" : "-translate-y-full"} transition-all duration-400 ease-in-out`}>

                <nav className="relative z-30 flex items-center justify-between px-1 md:px-12 py-4 bg-black/40">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            height={82}
                            width={220}
                            className="w-[110px] h-[40px] object-cover object-center md:w-[220px] md:h-[82px]"
                        />
                    </Link>

                    <div className="flex items-center gap-4 text-white">
                        {
                            !navShown && (
                                <>

                                    <FaFacebook className="hidden md:flex cursor-pointer text-3xl hover:text-yellow-500 transition-colors" />
                                    <FaInstagram className="hidden md:flex cursor-pointer text-3xl hover:text-yellow-500 transition-colors" />
                                </>
                            )
                        }

                        <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                            {navShown ? (

                                <X size={24} className="curosor-pointer text-black" onClick={() => setIsNavShown(prev => !prev)} />
                            ) : (

                                <Menu size={24} className="curosor-pointer hover:text-yellow-500" onClick={() => setIsNavShown(prev => !prev)} />
                            )}
                            <p className="hidden sm:block text-lg font-semibold">
                                <span className="text-yellow-500">Me</span>
                                <span className="text-green-500">nu</span>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>


            {
                navShown && (

                    <div className="absolute z-[70] min-h-screen w-full bg-white pt-[150px]">
                        <div className="max-w-[600px] mx-auto flex flex-col gap-2 items-center justify-center">
                            <Separator />
                            <Link href="/" className="py-3 text-4xl text-red-700 sans" onClick={() => setIsNavShown(false)}>Home</Link>
                            <Separator />

                            <Accordion type="single" collapsible className="w-full flex flex-col items-center">
                                <AccordionItem value="about">
                                    <AccordionTrigger>About Us</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            Our Presence
                                        </div>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            FAQs
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <Separator />

                                <AccordionItem value="products">
                                    <AccordionTrigger>Our Products</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center text-red-700 text-3xl">
                                                <ChevronRight />
                                                Noodles
                                            </div>
                                            <div className="flex items-center text-red-700 text-3xl">
                                                <ChevronRight />
                                                Snacks
                                            </div>

                                            <div className="flex items-center text-red-700 text-3xl">
                                                <ChevronRight />
                                                Cup Noodles
                                            </div>
                                            <div className="flex items-center text-red-700 text-3xl">
                                                <ChevronRight />
                                                Pack of Five
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <Separator />

                                <AccordionItem value="affairs">
                                    <AccordionTrigger>Current Affairs</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            Recipe
                                        </div>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            Latest Promotion
                                        </div>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            Event
                                        </div>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            CSR
                                        </div>
                                        <div className="flex items-center text-red-700 text-3xl">
                                            <ChevronRight />
                                            Blog
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Separator />
                        </div>
                    </div>
                )
            }

        </header>
    );
}
