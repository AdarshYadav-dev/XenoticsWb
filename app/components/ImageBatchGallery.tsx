





import Image from "next/image";

import { TiTick } from "react-icons/ti";

type Props = {
  imageSrc?: string;
};

export default function CryptoHero({ imageSrc = "/Cap5.JPG" }: Props) {
  return (
    <section className="px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* SAME WHITE CONTAINER LIKE StocksHeroScroll */}
        <div className="relative rounded-[40px] bg-[#F8F7F7] ring-1 ring-black/5 overflow-hidden">
          
          <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 p-6 md:p-10">

            {/* LEFT TEXT */}
            <div className="text-black">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0085EE] px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-blue-200">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0085EE] ring-1 ring-blue-200">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8h.01M11 11h2v5h-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>

                </span>
                Cryptos
              </div>

              <h1 className="mt-6 text-[28px] font-[Geist,'Geist Placeholder',sans-serif]
                    font-semibold tracking-tight md:text-6xl">
                Your crypto journey starts right here
              </h1>

              <p className="mt-4 max-w-xl text-[17px] font-[Inter,sans-serif] text-gray-600">
                Enter the world of cryptocurrency trading with confidence through our integrated crypto platform. Buy, sell, and trade popular digital assets like Bitcoin, Ethereum, and more directly from your account.
              </p>

              <ul className="mt-8 space-y-4">
                {["50+ cryptocurrencies", "Low Trading Fees", "Price Alerts"].map((item) => (
                  <li key={item} className="flex items-center text-gray-900">
                    
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 ">
                                        <TiTick className="flex items-center justify-center h-5 w-5 rounded-full border text-[10px] font-bold transition-all text-white bg-blue-500"/>
                                                              
                                                              
                                                              
                                                                
                                                            
                                      </span>
                                      
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center font-medium text-gray-900">
                Start trading <span className="ml-2">→</span>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src={imageSrc}
                alt="App preview"
                width={500}
                height={500}
                className="rounded-[40px] object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
