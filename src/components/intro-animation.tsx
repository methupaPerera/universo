import { Candal } from "next/font/google";
import { cn } from "@/lib/utils";
import "./styles/intro-animations.css";

const candal = Candal({ weight: "400", subsets: ["latin"] });

export default function IntroAnimation() {
    return (
        <div className="svg-bg relative overflow-hidden">
            <svg id="intro" viewBox="0 0 400 160">
                <text
                    x="50%"
                    y="50%"
                    dy=".32em"
                    textAnchor="middle"
                    className={cn(candal.className, "uppercase text-lg")}
                >
                    universo&apos;25
                </text>
            </svg>
        </div>
    );
}
