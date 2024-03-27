import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About.";
import Contacts from "./sections/Contacts";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Landing;
