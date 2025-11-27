


"use client";
import Image from "next/image";

export default function GlowCardsShowcase() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* ---------------------- LEFT: CARD STACK ---------------------- */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[500px] h-[260px] sm:h-[300px] md:h-[340px] flex justify-center">

            {/* BLACK CARD */}
            <div className="absolute top-12 -left-6 rotate-[-12deg] 
                            scale-[0.82] sm:scale-[0.92] md:scale-100">
              <div className="w-[280px] sm:w-[320px] md:w-[340px] 
                              h-[160px] sm:h-[190px] md:h-[210px]
                              rounded-3xl bg-black shadow-xl relative overflow-hidden">

                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  <Image src="/Capture3.JPG" width={22} height={22} alt="icon" />
                  <span className="text-white font-semibold">Glow</span>
                  <span className="text-gray-400">Black</span>
                </div>

                <div className="absolute right-4 bottom-4 text-white font-bold text-lg">
                  VISA
                </div>
              </div>
            </div>

            {/* GOLD CARD */}
            <div className="absolute top-8 -left-3 rotate-[-6deg] 
                            scale-[0.88] sm:scale-[0.96] md:scale-100">
              <div className="w-[290px] sm:w-[330px] md:w-[340px] 
                              h-[170px] sm:h-[200px] md:h-[210px]
                              rounded-3xl bg-gradient-to-br 
                              from-[#c79b3b] to-[#b28937] shadow-xl relative overflow-hidden">

                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  <Image src="/Capture1.JPG" width={22} height={22} alt="icon" />
                  <span className="text-white font-semibold">Glow</span>
                  <span className="text-[#F7E6A0]">Gold</span>
                </div>

                <div className="absolute right-4 bottom-4 text-white font-bold text-lg">
                  VISA
                </div>
              </div>
            </div>

            {/* BLUE CARD (FRONT) */}
            <div className="relative z-10 scale-[0.90] sm:scale-[0.98] md:scale-100">
              <div className="w-[300px] sm:w-[360px] md:w-[390px] 
                              h-[180px] sm:h-[220px] md:h-[250px]
                              rounded-3xl bg-[#0D6EFD] shadow-xl relative overflow-hidden">

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full 
                                text-white text-xs font-medium 
                                bg-white/20 backdrop-blur-sm">
                  One-time card
                </div>

                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  <Image src="/Capture2.JPG" width={24} height={24} alt="icon" />
                  <span className="text-white font-semibold">Glow</span>
                </div>

                <div className="absolute right-4 bottom-4 text-white font-extrabold text-xl">
                  VISA
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ---------------------- RIGHT: TEXT CONTENT ---------------------- */}
        <div>
          <h2 className="text-[#000000] text-[28px] font-[Geist,'Geist Placeholder',sans-serif]
                 md:text-4xl xl:text-[48px] font-bold tracking-tight font-[Geist,'Geist Placeholder',sans-serif]">
            There is a Glow for every need
          </h2>

          <p className="text-[#212121] text-[17px] mt-3 font-[Inter,sans-serif]">
            Glow offers consumers unparalleled convenience with flexible payment options
            that fit any budget.
          </p>

          <div className="mt-6 space-y-4">

            {/* Glow Card */}
            <div className="flex items-start gap-3">
              <Image src="/C1.JPG" alt="Glow card icon" width={20} height={20} className="mt-1" />
              <div>
                <div className="font-bold text-[15px]">Glow Card</div>
                <div className="text-[15px] text-[#212121]">
                  Simple, reliable, everyday spending solution.
                </div>
              </div>
            </div>

            {/* Glow Gold */}
            <div className="flex items-start gap-3">
              <Image src="/C2.JPG" alt="Glow Gold icon" width={20} height={20} className="mt-1" />
              <div>
                <div className="font-bold text-[15px]">Glow Gold</div>
                <div className="text-[15px] text-[#212121]">
                  Premium perks, enhanced rewards, exclusive.
                </div>
              </div>
            </div>

            {/* Glow Black */}
            <div className="flex items-start gap-3">
              <Image src="/C3.JPG" alt="Glow Black icon" width={20} height={20} className="mt-1" />
              <div>
                <div className="font-bold text-[15px]">Glow Black</div>
                <div className="text-[15px] text-[#212121]">
                  Business-focused, prium features, professional.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
