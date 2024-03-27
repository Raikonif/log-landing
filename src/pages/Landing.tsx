import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import LogosSection from "./sections/LogosSection";
import NextSection from "./sections/NextSection";
import TrustedCenter from "./sections/TrustCenterSection";
import About from "./sections/About.";
import Contacts from "./sections/Contacts";
import Next2Section from "./sections/Next2Section";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <LogosSection /> */}
      <Services />
      {/* <Next2Section /> */}
      {/* <NextSection /> */}
      {/* <TrustedCenter /> */}
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Landing;
