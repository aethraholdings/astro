import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />

      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </>
  );
}

export default Home;