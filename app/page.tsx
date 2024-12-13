import BannerSection from "./components/section/BannerSection";
import CategorySection from "./components/section/CategorySection";
import FeaturedSection from "./components/section/FeaturedSection";
import HealthAndTaste from "./components/section/HealthAndTaste";
import HeroSection from "./components/section/HeroSection";
import PopularSection from "./components/section/PopularSection";
import Testimonial from "./components/section/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <HealthAndTaste />
      <CategorySection />
      <PopularSection />
      <BannerSection />
      <Testimonial />
    </main>
  );
}
