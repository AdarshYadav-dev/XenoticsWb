

"use client";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function CashbackHero() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-500 to-blue-400 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0A77C9] backdrop-blur text-sm">
                <span className="h-2 w-2 rounded-full font-bold bg-white text-[#0A77C9]" />
                Cashback
              </div>

              <h2 className="mt-4 text-[28px] font-[Geist,'Geist Placeholder',sans-serif]
                     md:text-5xl font-bold leading-tight">
                Get rewards
                <br /> while you spend
              </h2>

              <p className="mt-4 text-[17px] font-[Inter,sans-serif] text-white/90">
                Transform your spending into earning with our intelligent cashback system. Get instant
                rewards on qualifying purchases while enjoying the flexibility of our buy-now–pay-later
                solution.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  
                  <span>
                    <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 bg-white text-blue-500"/>
                                          
                                          
                                          
                                            
                                        
                  </span>
                                        
                                      
                                        
                  
                  <span>Instant Cashback</span>
                </div>

                <div className="flex items-center gap-3">
                  
                  <span>
                    <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 bg-white text-blue-500"/>
                                          
                                          
                                          
                                            
                                        
                  </span>
                  
                  <span>20+ Partner Brands</span>
                </div>

                <div className="flex items-center gap-3">
                  
                  <span>
                    <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all border-blue-50 bg-white text-blue-500"/>
                                          
                                          
                                          
                                            
                                        
                  </span>
                  
                  <span>No Annual Fees</span>
                </div>
              </div>

              {/* <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium group">
                Start trading
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button> */}
            </div>

            {/* RIGHT SIDE (optional image or illustration) */}
            <div>
              {/* Add your image here if needed */}
              <Image src="/Cap1.JPG" className="translate-y-16 animate-slideUp" width={500} height={500} alt="cashback" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
