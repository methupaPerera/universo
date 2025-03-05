"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pageCount = 20;

  const switchToPage = () => {
    const page = Number.parseInt(searchValue);

    if (Number.isNaN(page) || page < 1 || page > pageCount) {
      console.log("Invalid page number");
      return;
    }

    router.push(`/book/${searchValue}`);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-[100000] top-0 md:top-24 left-0 h-screen md:h-[calc(100vh-6rem)] gradient-bg border-r-[1.5px] border-slate-500/25 transition-all duration-300",
        { "w-0": isCollapsed, "w-60": !isCollapsed }
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <h4
          className={cn(
            "w-56 font-semibold text-xl transition-opacity duration-300",
            { "opacity-0": isCollapsed, "opacity-100": !isCollapsed }
          )}
        >
          Chapters
        </h4>

        <div
          className="md:hidden p-2 absolute top-16 md:top-3 -right-10"
          onClick={() => setIsCollapsed(false)}
        >
          {isCollapsed && <Menu size={25} />}
        </div>

        <div
          className="md:hidden p-2 absolute top-3 right-0 md:-right-10"
          onClick={() => setIsCollapsed(true)}
        >
          {!isCollapsed && <X size={25} />}
        </div>
      </div>

      {!isCollapsed && (
        <div className="flex items-center gap-2 mx-4 mb-4">
          <input
            type="text"
            placeholder="Enter page..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full text-slate-400 rounded-[8px] px-2 py-1.5 duration-300 focus:outline-none focus:ring-4 focus:ring-slate-600 bg-slate-800"
          />
          <Button className="!p-2" onClick={switchToPage}>
            <Search size={20} />
          </Button>
        </div>
      )}

      <div className="px-4 flex flex-col gap-1">
        <Link
          href="/book/1"
          className={`hover:underline transition-opacity duration-300 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          1. Introduction
        </Link>
        <Link
          href="/book/2"
          className={`hover:underline transition-opacity duration-300 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          2. Chapter 2
        </Link>
        <Link
          href="/book/3"
          className={`hover:underline transition-opacity duration-300 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          3. Chapter 3
        </Link>
      </div>
    </div>
  );
}
