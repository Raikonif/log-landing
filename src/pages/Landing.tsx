import DescriptionSection from "./sections/DescriptionSection";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import LogosSection from "./sections/LogosSection";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LogosSection />
      <DescriptionSection />
    </div>
  );
}

export default Landing;
