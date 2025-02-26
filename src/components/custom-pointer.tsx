import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

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
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#8e9cca",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.1s linear",
                    boxShadow:
                        "0 0 10px hsla(226, 80%, 70%, 1), 0 0 20px hsla(226, 80%, 60%, 0.8)",
                    mixBlendMode: "difference",
                }}
            />
            <div
                style={{
                    position: "fixed",
                    left: position.x,
                    top: position.y,
                    width: "50px",
                    height: "50px",
                    backgroundColor: "hsla(240, 100%, 80%, 0.3)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition:
                        "transform 0.2s ease-out, opacity 0.3s ease-out",
                    opacity: 0.6,
                    boxShadow:
                        "0 0 20px hsla(240, 100%, 80%, 0.5), 0 0 40px hsla(240, 100%, 70%, 0.4)",
                }}
            />
        </>
    );
};

export default CustomCursor;
