"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import IntroAnimation from "./intro-animation";
import "./styles/navigation.css";

const navLinks: { label: string; href: string; delay: number }[] = [
    { label: "Home", href: "/", delay: 0.06 },
    { label: "About", href: "/#about", delay: 0.14 },
    { label: "Events", href: "/#events", delay: 0.1 },
    // { label: "Book", href: "/book", delay: 0.14 },
];

export default function Navigation() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.documentElement.setAttribute("menu-open", "");
        } else {
            document.documentElement.removeAttribute("menu-open");
        }
    }, [open]);

    return (
        <>
            <IntroAnimation />

            <nav className="w-full fixed top-0 h-24 flex items-center backdrop-blur-sm z-[1000]">
                <div className="w-full h-[1.5px] bg-slate-500/25 absolute bottom-0"></div>

                <div className="container flex justify-between items-center">
                    <h1 className="font-batman uppercase text-xl">
                        universo&apos;25
                    </h1>

                    <Link href="/" className="hidden md:block">
                        <Image
                            src="/science-logo.png"
                            alt=""
                            width={60}
                            height={50}
                        />
                    </Link>

                    <ul className="hidden md:flex list-none items-center gap-5">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="md:hidden relative"
                        onClick={() => setOpen(!open)}
                    >
                        <button className="button" id="menu-button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ rotate: -30, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ originX: "right", originY: "top" }}
                                    exit={{ rotate: -20, opacity: 0 }}
                                    className="flex flex-col gap-1 text-center cursor-pointer select-none absolute right-8 top-8"
                                >
                                    {navLinks.map((link) => (
                                        <motion.div
                                            key={link.label}
                                            style={{
                                                originX: "right",
                                                originY: "top",
                                            }}
                                            initial={{ rotate: -40 }}
                                            animate={{ rotate: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.06,
                                            }}
                                            className="bg-slate-900 duration-400 hover:bg-slate-800/90 shadow px-10 py-3 rounded-[8px]"
                                        >
                                            <Link href={link.href}>
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </>
    );
}
