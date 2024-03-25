import DescriptionSection from "./sections/DescriptionSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import LogosSection from "./sections/LogosSection";
import NextSection from "./sections/NextSection";
import TrustedCenter from "./sections/TrustCenterSection";
import About from "./sections/About.";
import Contacts from "./sections/Contacts";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <LogosSection />
      <DescriptionSection />
      <NextSection />
      <TrustedCenter />
      <About />
      <Contacts/>
      <Footer />
    </div>
  );
}

export default Landing;
