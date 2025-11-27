"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

type Props = {
  phoneSrc?: string;
};

export default function StocksHeroScroll({ phoneSrc }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.35 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="px-6 md:px-10 lg:px-16 -mt-20 relative z-10 ">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="relative rounded-[40px] bg-white ring-1 ring-black/5 overflow-hidden">


          <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 p-6 md:p-10">
            <div
              className={[
                "relative flex items-end justify-center md:justify-start",
                inView ? "animate-phone-enter" : "opacity-0 translate-y-10",
              ].join(" ")}
            >

              <div >
              <Image
                src="/Cap2.JPG"
                alt="Stocks phone"
                width={500} height={500}

                priority
              />
            </div>
            </div>
            



            <div
              className={[
                "text-black",
                inView ? "animate-content-enter" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0085EE] text-white text-">
                <span className="h-2 w-2 rounded-full bg-[#0085EE]" />
                Stocks
              </div>
              <h2 className="mt-4 text-[28px] font-[Geist,'Geist Placeholder',sans-serif]
                 md:text-5xl font-semibold leading-tight">
                Trade stocks, easier than ever
              </h2>
              <p className="mt-3 text-[17px] font-[Inter,sans-serif]">
                Get real-time access to global markets, commission-free trades, advanced charting,
                and AI-driven insights—on an intuitive, secure platform designed for speed and simplicity.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  
                  <span>
                                      <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 text-white bg-blue-500"/>
                                                            
                                                            
                                                            
                                                              
                                                          
                                    </span>
                                    
                  <span>Real-Time</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                                      <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 text-white bg-blue-500"/>
                                                            
                                                            
                                                            
                                                              
                                                          
                                    </span>
                                    
                  <span>Commission-Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                                      <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 text-white bg-blue-500"/>
                                                            
                                                            
                                                            
                                                              
                                                          
                                    </span>
                                    
                  <span>Price Alerts</span>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                Start trading
                <span className="inline-block translate-x-0 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes phoneEnter {
          0% { transform: translateY(40px); opacity: 0; }
          60% { transform: translateY(-6px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes contentEnter {
          0% { transform: translateY(24px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-phone-enter { animation: phoneEnter 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-content-enter { animation: contentEnter 500ms ease-out 150ms both; }
      `}</style>
    </section>
  );
}





