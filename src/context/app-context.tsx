"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

interface AnimationContextType {
    isAnimated: boolean;
    setAnimated: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
    undefined
);

export function AnimationProvider({ children }: { children: ReactNode }) {
    const [isAnimated, setAnimated] = useState<boolean>(false);

    return (
        <AnimationContext.Provider value={{ isAnimated, setAnimated }}>
            {children}
        </AnimationContext.Provider>
    );
}

export function useAnimation() {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error(
            "useAnimation must be used within an AnimationProvider"
        );
    }
    return context;
}
