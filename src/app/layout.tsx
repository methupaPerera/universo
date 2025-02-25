import type { Metadata } from "next";
import type { Chidlren } from "../types";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
