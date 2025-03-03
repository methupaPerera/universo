import { cn } from "@/lib/utils";

export default function Button({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-[5px] border border-slate-500/25 hover:bg-slate-800 duration-300",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
