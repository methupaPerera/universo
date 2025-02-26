"use client";

import CustomCursor from "@/components/custom-pointer";
import TSParticles from "@/components/particles";

export default function Home() {
    return (
        <div className="text-white">
            <TSParticles />
            <CustomCursor />

            <div className="mt-12 flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                    <span className="font-batman text-4xl md:text-[5rem] leading-[5rem] font-bold bg-gradient-to-r from-slate-700 to-slate-300 bg-clip-text text-transparent">
                        UNIVERSO&apos;25
                    </span>
                    <span className="font-bold text-3xl mt-4">
                        by the Senior Science Society of
                    </span>
                    <span className="mt-4 font-bold text-5xl bg-gradient-to-r from-slate-300 to-slate-700 leading-[4rem] bg-clip-text text-transparent">
                        Taxila Central College
                    </span>
                </div>
            </div>
        </div>
    );
}
