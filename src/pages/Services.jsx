import ServiceHero from "../components/services/ServiceHero";
import Categories from "../components/services/Categories";
import ServiceGrid from "../components/services/ServiceGrid";
import WhyServices from "../components/services/WhyServices";
import PricingOverview from "../components/services/PricingOverview";
import BookingSteps from "../components/services/BookingSteps";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <>
      <ServiceHero />
      <Categories />
      <ServiceGrid />
      <WhyServices />
      <PricingOverview />
      <BookingSteps />
      <ServicesCTA />
    </>
  );
}

export default Services;