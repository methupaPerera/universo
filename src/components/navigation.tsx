"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className="flex justify-between items-center relative h-24 container">
            <h1 className="font-batman uppercase text-lg">
                <Link href="/">
                    <Image
                        src="/science-logo.png"
                        alt=""
                        width={80}
                        height={60}
                    />
                </Link>
            </h1>

            <svg viewBox="0 0 400 160" className="svg-transition ml-5">
                <text
                    x="50%"
                    y="50%"
                    dy=".32em"
                    textAnchor="middle"
                    className="uppercase text-lg font-batman"
                >
                    universo&apos;25
                </text>
            </svg>

            <ul className="list-none flex items-center gap-5">
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
        </nav>
    );
}
