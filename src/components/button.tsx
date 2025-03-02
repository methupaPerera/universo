import { cn } from "@/lib/utils";

export default function Button({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "gradient-bg px-4 py-2 rounded-[5px] hover:bg-slate-800 duration-300",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
