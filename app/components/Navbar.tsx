

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-gray-50 xl:pl-15 xl:pr-15 2xl:p-[15px] xl:p-[15px] 2xl:bg-[#F8F7F7] xl:bg-[#F8F7F7] lg:bg-[#F8F7F7] md:bg-white sm:bg-white xl:text-[#000000] px-3 py-3">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2 text-[20px] font-bold font-[Inter Display,'Inter Display Placeholder'] 2xl:pl-14">
            <Image
              src="/glow.jpg"
              alt="icon"
              width={40}
              height={40}
              className="object-contain"
            />
            Glow
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-[#000000] font-medium lg:text-[15px]">
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:flex bg-[#0085EE] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Get started <span className="ml-2 text-lg">›</span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-black  text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-[50vh] bg-white z-50 px-6 py-6 flex flex-col">

          {/* Header row */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2 text-lg font-bold">
              <Image src="/glow.jpg" alt="icon" width={40} height={40} />
              Glow
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Center Menu */}
          <div className="flex flex-col items-center gap-4 text-lg font-medium text-black sm:text-[15px] sm:mb-4">
            <Link href="#" onClick={() => setOpen(false)}>Features</Link>
            <Link href="#" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="#" onClick={() => setOpen(false)}>FAQs</Link>
            <Link href="#" onClick={() => setOpen(false)}>Contact</Link>
          </div>

          {/* CTA Button (bottom fixed) */}
          <div className="mt-auto ">
            <button className="w-full flex-item-center bg-[#0085EE] text-white py-3  rounded-lg font-medium text-md hover:bg-blue-700 transition">
              Get started <span className="ml-1 text-lg">›</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

