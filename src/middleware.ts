import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    
    if (pathname === "/book") {
        return NextResponse.redirect(new URL("/book/1", request.url));
    }
}

export const config = {
    matcher: "/book",
};
