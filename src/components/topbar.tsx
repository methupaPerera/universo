"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Topbar({
    page,
    pageCount,
}: {
    page: number;
    pageCount: number;
}) {
    const router = useRouter();

    return (
        <div className="mb-4 flex justify-between">
            <Button
                className="flex items-center justify-center"
                onClick={() => router.push(`/book/${page - 1}`)}
            >
                <ChevronLeft size={20} />
                Prev
            </Button>

            <p className="text-slate-400 text-sm mt-3">
                {page} of {pageCount}
            </p>

            <Button
                className="flex items-center justify-center"
                onClick={() => router.push(`/book/${page + 1}`)}
            >
                Next <ChevronRight size={20} />
            </Button>
        </div>
    );
}
