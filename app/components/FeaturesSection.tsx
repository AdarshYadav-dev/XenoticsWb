

"use client";

import { useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function GlowPlansSection() {
  const [selected, setSelected] = useState("9 months");
  const plans = [
    { label: "4 months", price: "$25/m" },
    { label: "6 months", price: "$18/m" },
    { label: "9 months", price: "$13/m" },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto">


        <div className="flex justify-between items-start mb-12">
          {/* LEFT SIDE TEXT */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl  xl:text-[48px] font-bold font-[Geist,'Geist Placeholder',sans-serif] tracking-tight">
              Tired of high bank fees?
            </h2>

            <p className="text-2xl md:text-3xl xl:text-[48px] font-bold font-[Geist,'Geist Placeholder',sans-serif] mt-2">
              <span className="text-[#0085EE]">We’re not a bank.</span>
            </p>
          </div>

          {/* RIGHT SIDE PARAGRAPH */}
          <div className="max-w-xl text-left md:text-left">
            <p className="text-[#212121]  font-[Inter,sans-serif] xl:text-[17px] mt-4 md:mt-0">
              Glow’s flexible payment plans that let you buy now and pay later in
              manageable installments, while our secure checkout technology protects
              your information every step of the way.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-gray-50 p-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-blue-500" />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between border-gray-300 px-4 py-2 border-dotted bg-[#F8F7F7] pt">
                    <div className="text-sm font-bold text-[#303030]">Due today</div>
                    <div className="text-sm px-2 py-0.5 rounded bg-[#ffffff] text-[#636363]">Pending</div>
                    <div className="text-sm font-bold text-[#1AOE12]">$25</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#585959]">In 1 month</div>
                    <div className="text-sm font-semibold text-[#585959]">$25</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#585959]">In 2 months</div>
                    <div className="text-sm font-semibold text-[#585959]">$25</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold font-[Inter Display,'Inter Display Placeholder']">Buy now, pay later</h3>
              <p className="text-sm text-[#212121] font-[Inter Display,'Inter Display Placeholder'] xl:text-[16px] font-mt-2">
                Enjoy instant access to the products you want, with the
                flexibility to pay later.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelected("9 months")}
            className="rounded-2xl bg-gray-50 p-6 text-left"
          >

            <div className="space-y-3">
              {plans.map((p) => (
                <div
                  key={p.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(p.label);
                  }}
                  className={[
                    "flex items-center justify-between rounded-lg border py-3 cursor-pointer transition-all duration-300",
                    selected === p.label
                      ? "bg-blue-100 border-blue-400 ring-2 ring-blue-300 translate-x-[12px] w-[95%]"
                      : "bg-white border-gray-200 w-[80%]",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3 pl-4">
                    <span
                      className={[
                        "flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all",
                        selected === p.label
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-300 bg-white text-transparent",
                      ].join(" ")}
                    >
                      <TiTick />
                    </span>

                    <span className="text-sm">{p.label}</span>
                  </div>

                  <span className="text-sm font-semibold pr-4">{p.price}</span>
                </div>
              ))}
            </div>



            <div className="mt-6">
              <h3 className="text-lg font-semibold">Flexible installment plans</h3>
              <p className="text-sm text-gray-600 mt-2">
                Break up your purchase into smaller, manageable payments over time.
              </p>
            </div>
          </button>

          <div className="rounded-2xl bg-gray-50 p-6">
          
            

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="relative rounded-xl bg-gray-50 p-6 ">
                <div className="absolute inset-0 rounded-xl pointer-events-none [background:radial-gradient(circle,rgba(16,24,40,.08)_1px,transparent_1px)] [background-size:16px_16px] [background-position:center]" />

                <div className="relative flex items-center justify-center gap-6">

                  {/* ICON 1 IMAGE */}
                  <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/dollar.JPG"   // ← your first image
                      alt="icon1"
                      width={49}
                      height={49}
                      className="object-contain"
                    />
                  </div>

                  {/* ICON 2 IMAGE */}
                  <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/smile.JPG"   // ← your second image
                      alt="icon2"
                      width={89}
                      height={89}
                      className="object-contain"
                    />
                  </div>

                  {/* ICON 3 IMAGE */}
                  <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/bmg.JPG"   // ← your third image
                      alt="icon3"
                      width={49}
                      height={49}
                      className="object-contain"
                    />
                  </div>

                </div>
              </div>
            </div>


            <div className="mt-6">
              <h3 className="text-lg font-semibold">Secure online payments</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your financial information is safeguarded by advanced, secure technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




