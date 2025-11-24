


"use client";
import Image from "next/image";

export default function GlowCardsShowcase() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid items-center gap-12 md:grid-cols-2">
        <div className="relative h-[240px] sm:h-[280px] md:h-[320px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute -left-6 top-6 rotate-[-18deg]">
              <div className="relative w-[340px] h-[210px] sm:w-[380px] sm:h-[235px] rounded-2xl bg-neutral-900 shadow-[0_0.6px_2.3px_-0.58px_rgba(14,52,69,.11),0_2.29px_8.7px_-1.17px_rgba(14,52,69,.13),0_10px_38px_-1.75px_rgba(14,52,69,.20)] overflow-hidden animate-black">
                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                  </svg>
                  <span className="text-white font-semibold">Glow</span>
                  <span className="text-gray-400">Black</span>
                </div>
                <div className="absolute right-4 bottom-4 text-white font-semibold">VISA</div>
                <Image
                  src="/Capture3.JPG"
                  alt="card bg"
                  fill
                  sizes="380px"
                  className="object-contain opacity-50"
                  style={{
                    maskImage:
                      "linear-gradient(7deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(7deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                  }}
                />
              </div>
            </div>

            <div className="absolute -left-3 top-3 rotate-[-9deg]">
              <div className="relative w-[340px] h-[210px] sm:w-[380px] sm:h-[235px] rounded-2xl bg-gradient-to-br from-[#b08c3c] to-[#997e43] shadow-[0_0.6px_2.3px_-0.58px_rgba(14,52,69,.11),0_2.29px_8.7px_-1.17px_rgba(14,52,69,.13),0_10px_38px_-1.75px_rgba(14,52,69,.20)] overflow-hidden animate-gold">
                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  {/* <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                  </svg> */}
                  <Image
                    src="/Capture1.JPG"   // <-- apni image yaha daalo
                    alt="Glow card icon"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <span className="text-white font-semibold">Glow</span>
                  <span className="text-[#FADB84]">Gold</span>
                </div>
                <div className="absolute right-4 bottom-4 text-white font-semibold">VISA</div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative w-[360px] h-[220px] sm:w-[410px] sm:h-[250px] rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0.6px_2.3px_-0.58px_rgba(14,52,69,.11),0_2.29px_8.7px_-1.17px_rgba(14,52,69,.13),0_10px_38px_-1.75px_rgba(14,52,69,.20)] overflow-hidden animate-blue">
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-medium bg-white/20 backdrop-blur">
                  One-time card
                </div>
                <div className="absolute left-4 bottom-4 flex items-center gap-2">
                  {/* <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                  </svg> */}
                  <Image
                    src="/Capture2.JPG"   // <-- apni image yaha daalo
                    alt="Glow card icon"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <span className="text-white font-semibold">Glow</span>
                </div>
                <div className="absolute right-4 bottom-4 text-[20px] text-white font-extrabold">VISA</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#000000] md:text-4xl xl:text-[48px]  font-bold font-[Geist,'Geist Placeholder',sans-serif] tracking-tight">
            There is a Glow for every need
          </h2>
          <p className="text-[#212121] mt-3 font-[Inter,sans-serif]">
            Glow offers consumers unparalleled convenience with flexible payment options
            that fit any budget.
          </p>

          <div className="mt-6 space-y-4">
            {/* 1. Glow Card */}
            <div className="flex items-start gap-3">
              <Image
                src="/C1.JPG"   // <-- apni image yaha daalo
                alt="Glow card icon"
                width={20}
                height={20}
                className="mt-1"
              />
              <div>
                <div className="font-bold">Glow Card</div>
                <div className="text-sm text-[#212121]">
                  Simple, reliable, everyday spending solution.
                </div>
              </div>
            </div>

            {/* 2. Glow Gold */}
            <div className="flex items-start gap-3">
              <Image
                src="/C2.JPG"   // <-- second image
                alt="Glow Gold icon"
                width={20}
                height={20}
                className="mt-1"
              />
              <div>
                <div className="font-bold">Glow Gold</div>
                <div className="text-sm text-[#212121]">
                  Premium perks, enhanced rewards, exclusive.
                </div>
              </div>
            </div>

            {/* 3. Glow Black */}
            <div className="flex items-start gap-3">
              <Image
                src="/C3.JPG"   // <-- third image
                alt="Glow Black icon"
                width={20}
                height={20}
                className="mt-1"
              />
              <div>
                <div className="font-bold">Glow Black</div>
                <div className="text-sm text-[#212121]">
                  Business-focused, premium features, professional.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes floatBlue {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes floatGold {
          0% { transform: translateY(0) rotate(-9deg); }
          50% { transform: translateY(-4px) rotate(-8deg); }
          100% { transform: translateY(0) rotate(-9deg); }
        }
        @keyframes floatBlack {
          0% { transform: translateY(0) rotate(-18deg); }
          50% { transform: translateY(-3px) rotate(-17deg); }
          100% { transform: translateY(0) rotate(-18deg); }
        }
        .animate-blue { animation: floatBlue 6s ease-in-out infinite; }
        .animate-gold { animation: floatGold 7s ease-in-out infinite; }
        .animate-black { animation: floatBlack 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}