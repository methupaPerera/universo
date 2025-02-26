"use client";

import Image from "next/image";
import Link from "next/link";
import IntroAnimation from "./intro-animation";
import "./styles/navigation.css";
import { useEffect, useState } from "react";

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

            <nav className="flex justify-between items-center relative h-24 container">
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
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/book">Book</Link>
                    </li>
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

                    <div className="mobile-nav flex flex-col gap-5 text-xl">
                        <p>
                            <Link href="/">Home</Link>
                        </p>
                        <p>
                            <Link href="/about">About</Link>
                        </p>
                        <p>
                            <Link href="/book">Book</Link>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}
