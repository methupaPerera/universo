import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center h-20 container">
            <h1 className="font-batman uppercase text-lg">universo&apos;25</h1>

            <ul className="list-none flex items-center gap-5">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/book">Book</Link>
                </li>
            </ul>
        </nav>
    );
}
