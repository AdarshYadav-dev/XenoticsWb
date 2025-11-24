import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

import RewardsSection from "./components/RewardSection";
import StocksSection from "./components/StockSection";
import ImageBatchGallery from "./components/ImageBatchGallery";
import { Navbar } from "./components/Navbar";
import TiersSection from "./components/TiersSection";



function HomePage() {

  // ... existing code continues ...
  return (
    <><Navbar /><HeroSection /><FeaturesSection /><TiersSection />


      <div className="relative z-0 space-y-0">

        <section className="relative z-10">
          <RewardsSection />
        </section>

        <section className="-mt-28 relative z-20">
          
          <StocksSection />
        </section>

        <section className="-mt-28 relative z-50">
          <ImageBatchGallery imageSrc="/Cap5.JPG" />
        </section>

      </div>

      
      
    </>
  );
}
export default HomePage;
// ... existing code ...