

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [count, setCount] = useState(1500);

  // Optional smooth counter animation
  useEffect(() => {
    let start = 0;
    const end = 1500;
    const speed = 10;

    const timer = setInterval(() => {
      start += 10;
      if (start >= end) clearInterval(timer);
      setCount(start);
    }, speed);
  }, []);

  return (
    <section className="w-full bg-[#F8F7F7] pt-11 xl:pl-5">
      <div
        className="
          max-w-[1280px] mx-auto
          grid grid-cols-12 gap-12 items-center
          px-4 sm:px-6 lg:px-12
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            col-span-12 md:col-span-12 lg:col-span-6
            flex flex-col
            sm:text-center md:text-center lg:text-left
            items-center lg:items-start
          "
        >
          {/* RATINGS — hidden on sm & md */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black ">
            <span className="flex items-center gap-2 text-[#102329] text-[14px] rounded-lg  py-1.5 lg:text-[13px] lg:font-[Inter,'Inter Placeholder',sans-serif] 2xl:text-[#102329] 2xl:text-[14px] 2xl:font-[Inter,'Inter Placeholder',sans-serif] xl:text-[#102329] xl:text-[14px] xl:font-[Inter,'Inter Placeholder',sans-serif]">
              <Image src="/app.jpg" alt="App Store" width={20} height={20} />
              <span>4.8 ★ on App Store</span>
            </span>

            <span className="flex items-center gap-2 text-[#102329] text-[14px] rounded-lg px-3 py-1.5 lg:text-[13px] lg:font-[Inter,'Inter Placeholder',sans-serif] 2xl:text-[#102329] 2xl:text-[14px] 2xl:font-[Inter,'Inter Placeholder',sans-serif] xl:text-[#102329] xl:text-[14px] xl:font-[Inter,'Inter Placeholder',sans-serif]">
              <Image src="/app1.jpg" alt="Google Play" width={20} height={20} />
              <span>4.8 ★ on Google Play</span>
            </span>
          </div>

          {/* HEADING */}
          <h1
            className=" 
              font-bold leading-[1.15] mb-4 text-[#102329]
                sm:font-[Geist,'Geist Placeholder',sans-serif]
                md:font-[Geist,'Geist Placeholder',sans-serif]
               sm:text-[36px] 
               md:text-[36px]
              2xl:text-[#102329] 2xl:text-[58px] lg:text-[44px] lg:font-[Geist,'Geist Placeholder',sans-serif] 2xl:font-[Geist,'Geist Placeholder',sans-serif] xl:text-[58px] xl:font-[Geist,'Geist Placeholder',sans-serif] 
            "
          >
            Send, spend, and<br />save smarter
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#212121] max-w-xl mb-4 leading-relaxed
              text-[15px] sm:text-[17px] md:text-[17px] lg:text-[20px]
              sm:text-center md:text-center lg:text-left sm:max-w-xs md:max-w-xs lg:max-w-2xl
              2xl:text-[#212121]  lg:font-[Inter,sans-serif] 2xl:text-[20px] 2xl:font-[Inter,sans-serif] xl:text-[#212121] xl:text-[20px] xl:font-[Inter,sans-serif]
            "
          >
            Experience a new way to shop online with innovative payment solutions.
            Explore our services and enjoy flexible payments tailored to your needs.
          </p>

          {/* BUTTONS */}
          <div
            className="w-full sm:max-w-sm md:max-w-sm

              flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row sm:gap-4 gap-3
              sm:justify-center md:justify-center lg:justify-start
            "
          >
           
            <a
              href="#get-started"
              className="
                inline-flex items-center justify-center lg:px-6 lg:py-2 xl:px-6 xl:py-2 2xl:px-6 2xl:py-2
                px-6 py-2 rounded-lg bg-[#0085EE] text-white 
                font-semibold text-sm hover:bg-blue-700 transition
              "
            >
              Get started <span className="ml-2 text-lg">{`›`}</span>
            </a>

            <a
              href="#pricing"
              className="
                inline-flex items-center justify-center lg:px-6 lg:py-2 xl:px-6 xl:py-2 2xl:px-6 2xl:py-2
                px-4 py-3 rounded-lg border border-gray-300
                text-black font-semibold text-sm hover:bg-gray-100 transition
              "
            >
              Pricing
            </a>
          </div>

          {/* TRUSTED SECTION */}
          <div
            className="sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
              flex items-center gap-4 mt-10 text-sm font-medium
              sm:justify-center md:justify-center md:item-center lg:justify-start
            "
          >
            <div className="flex -space-x-3">
              <Image
                src="/avtar1.jpg"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
                alt="User avatar"
              />
              <Image
                src="/avtar2.jpg"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
                alt="User avatar"
              />
              <Image
                src="/avtar3.jpg"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
                alt="User avatar"
              />
            </div>

            <span  className="sm:justify-center md:justify-center md:item-center">
              Trusted by <strong>{count}+</strong> individuals worldwide
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            col-span-12 md:col-span-12 lg:col-span-6
            flex justify-center lg:justify-end 
             
          "
        >
          <Image
            src="/Cap.JPG"
            alt="App screenshot on phone"
            width={380}
            height={720}
            /*className="sm:translate-y-3 md:translate-y-6"*/
            className=" 2xl:translate-y-1 sm:-translate-y-8 xl:-translate-x-20"
            priority
          />
        </div>
      </div>
    </section>
  );
}
