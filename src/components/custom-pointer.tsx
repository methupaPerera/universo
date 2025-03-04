"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveCursor = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    left: position.x,
                    top: position.y,
                    width: "500px",
                    height: "500px",
                    background:
                        "radial-gradient(circle, rgba(142, 156, 202, 0.2) 0%, rgba(142, 156, 202, 0.05) 50%, transparent 100%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.4s ease-out",
                    mixBlendMode: "screen",
                    filter: "blur(20px)",
                    zIndex: 9997,
                }}
            />
        </>
    );
};

export default CustomCursor;
