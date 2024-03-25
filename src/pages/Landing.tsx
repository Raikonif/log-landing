import DescriptionSection from "./sections/DescriptionSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import LogosSection from "./sections/LogosSection";
import NextSection from "./sections/NextSection";
import TrustedCenter from "./sections/TrustCenterSection";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LogosSection />
      <DescriptionSection />
      <NextSection />
      <TrustedCenter />
      <Footer />
    </div>
  );
}

export default Landing;
