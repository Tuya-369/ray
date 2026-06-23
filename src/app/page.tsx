import About from "../components/landing/About";
import FeaturedProducts from "../components/landing/FeaturedProducts";
import HomeSection from "../components/landing/HomeSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
      <FeaturedProducts />
    </div>
  );
}
