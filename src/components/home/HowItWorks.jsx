import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StepCard from "./StepCard";
import steps from "../../data/steps";

function HowItWorks() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <SectionTitle
          subtitle="How It Works"
          title="Your Journey Begins in Three Simple Steps"
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              number={`0${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;