"use client";

import Footer from "@/components/footer";
import TSParticles from "@/components/particles";

export default function Home() {
    return (
        <>
            <div className="text-white content">
                <section className="mt-12 flex flex-col items-center">
                    <TSParticles />

                    <div className="flex flex-col items-center gap-2">
                        <span className="font-batman text-[2.6rem] md:text-[5rem] leading-[5rem] font-bold bg-gradient-to-r from-slate-700 to-slate-300 bg-clip-text text-transparent">
                            UNIVERSO'25
                        </span>
                        <span className="mt-4 font-bold text-center text-5xl bg-gradient-to-r from-slate-300 to-slate-700 leading-[4rem] bg-clip-text text-transparent">
                            Taxila Central College
                        </span>
                        <span className="font-bold text-center text-2xl mt-4">
                            by the Senior Science Society of
                        </span>
                    </div>
                </section>

                <section>aaa</section>
            </div>
            <Footer />
        </>
    );
}
