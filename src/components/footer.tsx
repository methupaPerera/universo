import Image from "next/image";

export default function Footer() {
    return (
        <footer className="gradient-bg py-16 -mb-6">
            <div className="container">
                <div>
                    <h2 className="font-batman uppercase">universo&apos;25</h2>
                    <Image
                        src="/science-logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </footer>
    );
}
