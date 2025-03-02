import type { Metadata } from "next";
import type { Chidlren } from "../types";

import { Poppins } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-pointer";
import { AnimationProvider } from "@/context/app-context";
import "./globals.css";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "UNIVERSO'25 - Taxila Central College",
    description:
        "An official website of Taxila Central College, where the students \
        can view the events, notices, and much more.",
};

export default function RootLayout({ children }: Readonly<Chidlren>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <AnimationProvider>
                    <Navigation />
                    <CustomCursor />
                    <main className="py-6 mt-16 text-slate-200">
                        {children}
                    </main>
                </AnimationProvider>
            </body>
        </html>
    );
}
