"use client";

import Image from "next/image";
import Link from "next/link";
import TSParticles from "@/components/particles";
import Button from "@/components/button";
import Footer from "@/components/footer";
import { LampContainer } from "@/components/lamp";

import { motion } from "framer-motion";
import { events } from "@/lib/events";

export default function Home() {
    return (
        <>
            <div className="text-white content">
                <section className="min-h-screen flex flex-col justify-center items-center container">
                    <TSParticles />

                    <Image
                        src="/taxila-logo.png"
                        alt="logo"
                        width={500}
                        height={100}
                        className="absolute opacity-[0.04] -mt-28 -z-10"
                    />

                    <div className="flex flex-col items-center gap-2 -mt-32">
                        <span className="font-batman text-[2.6rem] md:text-[5rem] leading-[5rem] font-bold gradient-text">
                            UNIVERSO&apos;25
                        </span>
                        <span className="font-bold text-center text-xl text-slate-400 -mt-2.5 md:mt-4">
                            by the Senior Science Society of
                        </span>
                        <span className="md:mt-4 font-bold text-center text-3xl md:text-5xl bg-gradient-to-r from-slate-300 to-slate-700 leading-[6rem] bg-clip-text text-transparent">
                            Taxila Central College
                        </span>

                        <div className="flex items-center gap-2 md:mt-4">
                            <Link href="/#about">
                                <Button>Learn more</Button>
                            </Link>
                            <Link href="/#events">
                                <Button>Explore</Button>
                            </Link>
                        </div>
                    </div>

                    <Image
                        src="/bg.svg"
                        alt="logo"
                        width={500}
                        height={100}
                        className="absolute opacity-[0.04] left-0 -top-52 -z-10"
                    />

                    <Image
                        src="/bg.svg"
                        alt="logo"
                        width={500}
                        height={100}
                        className="absolute opacity-[0.04] right-0 -bottom-52 -z-10"
                    />
                </section>

                <section
                    className="bg-slate-950 pb-28 overflow-hidden relative"
                    id="about"
                >
                    <LampContainer className="-mt-40 md:-mt-0">
                        <p></p>
                    </LampContainer>

                    <div className="container relative z-50 -mt-[620px] md:-mt-[500px]">
                        <motion.h2
                            transition={{ duration: 0.5 }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="pt-12 font-semibold text-center text-5xl text-slate-900"
                        >
                            About
                        </motion.h2>

                        <motion.p
                            transition={{ duration: 0.5 }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="mt-20 text-balance text-center text-slate-400"
                        >
                            Universo&apos;25, organized by the Senior Science
                            Society of Taxila Central College, is a celebration
                            of scientific exploration, innovation, and
                            discovery. This event brings together curious minds,
                            aspiring scientists, and enthusiasts to engage in
                            thought-provoking discussions, hands-on experiments,
                            and exciting competitions. Join us as we push the
                            boundaries of knowledge, spark creativity, and
                            inspire the next generation of innovators!
                        </motion.p>

                        <Image
                            src="/flask.png"
                            width={100}
                            height={100}
                            alt="logo"
                            className="absolute rotate-45 bottom-16 opacity-20"
                        />

                        <Image
                            src="/flask.png"
                            width={100}
                            height={100}
                            alt="logo"
                            className="absolute -rotate-45 right-10 -bottom-6 opacity-20"
                        />
                    </div>
                </section>

                <section className="container pb-10" id="events">
                    <motion.h2
                        transition={{ duration: 0.5 }}
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="flex gap-4 mb-20 items-center pt-28 font-semibold text-4xl text-slate-400"
                    >
                        Our Past Events
                        <div className="hidden md:block h-1 w-full bg-slate-400 rounded-[5px]"></div>
                    </motion.h2>

                    {events.map((event) => {
                        return (
                            <motion.div
                                transition={{ duration: 0.5 }}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                key={event.event}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-slate-500 rounded-full shadow-[0_0_10px_4px_#64748b]"></div>
                                    <h2 className="font-semibold text-2xl text-slate-400">
                                        {event.event}
                                    </h2>
                                </div>

                                <div className="flex flex-col justify-between gap-4 ml-[5px] p-8 border-l-2 border-slate-400/40 border-dashed text-slate-200">
                                    <p>{event.description}</p>
                                    {event.image === "no-image" ? null : (
                                        <Image
                                            src={event.image}
                                            alt="logo"
                                            className="object-cover border-2 border-slate-500 shadow-[0_0_10px_5px_#64748b]"
                                            width={400}
                                            height={200}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </section>
            </div>

            <Footer />
        </>
    );
}
