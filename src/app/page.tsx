"use client";

import Button from "@/components/button";
import CountdownTimer from "@/components/countdown";
import Footer from "@/components/footer";
import { LampContainer } from "@/components/lamp";
import { motion } from "framer-motion";
import TSParticles from "@/components/particles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white content">
        <section className="py-36 flex flex-col items-center container">
          <TSParticles />

          <Image
            src="/taxila-logo.png"
            alt="logo"
            width={500}
            height={100}
            className="absolute opacity-[0.04] -mt-28 -z-10"
          />

          <div className="flex flex-col items-center gap-2">
            <span className="font-batman text-[2.6rem] md:text-[5rem] leading-[5rem] font-bold gradient-text">
              UNIVERSO'25
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
              <Link href="/book/1">
                <Button>E-Book</Button>
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

        <section className="h-screen container" id="about">
          <h2 className="flex gap-4 items-center pt-28 font-semibold text-3xl text-slate-400">
            Snapshots from Our Past Events{" "}
            <div className="h-1 w-full bg-slate-400 rounded-[5px]"></div>
          </h2>
        </section>

        <section className="h-screen container" id="challenges">
          <h2 className="flex gap-4 items-center pt-28 font-semibold text-end text-3xl text-slate-400">
            <div className="h-1 w-full bg-slate-400 rounded-[5px]"></div>
            Challenges
          </h2>
        </section>

        <section>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <CountdownTimer />
            </motion.h1>
          </LampContainer>
        </section>
      </div>

      <Footer />
    </>
  );
}
