import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-50 gradient-bg pt-16 -mb-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center flex-col items-center gap-4">
          <h2 className="font-batman uppercase text-xl">universo&apos;25</h2>

          <div className="flex items-center gap-3">
            <Image src="/science-logo.png" alt="logo" width={80} height={100} />
            <Image src="/taxila-logo.png" alt="logo" width={84} height={100} />
          </div>

          <p className="text-sm text-center">
            Universo&apos;25 – Organized by the Senior Science Society of Taxila
            Central College, this event celebrates scientific exploration,
            innovation, and discovery. Join us in pushing the boundaries of
            knowledge!
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <h2 className="font-semibold text-xl">Permalinks</h2>

          <div className="flex flex-col gap-1 footer-links">
            <Link className="hover:text-slate-500 duration-300" href="/">
              Home
            </Link>
            <Link className="hover:text-slate-500 duration-300" href="/book">
              Book
            </Link>
            <Link className="hover:text-slate-500 duration-300" href="/about">
              About
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <h2 className="font-semibold text-xl">Contact Us</h2>

          <div className="flex flex-col gap-1 items-center">
            <p className="flex items-center gap-2">
              <MapPin size={20} />
              Taxila Central College
            </p>
            <p className="flex items-center gap-2">
              <Mail size={20} />
              your-email@example.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={20} />
              +94 76 123 4567
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="https://facebook.com"
              className="text-slate-400 hover:text-white duration-300"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://whatsapp.com"
              className="text-slate-400 hover:text-white duration-300"
              target="_blank"
            >
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 container border-t border-slate-500/25 py-4">
        <div className="flex justify-center">
          <p className="text-sm text-center">All Rights Reserved &copy; 2025</p>
        </div>
      </div>
    </footer>
  );
}
