import Container from "../common/Container";

const steps = [
  {
    number: "01",
    title: "Choose Service",
    text: "Select the consultation that best matches your needs.",
  },
  {
    number: "02",
    title: "Book Date & Time",
    text: "Pick an available slot that works for you.",
  },
  {
    number: "03",
    title: "Complete Details",
    text: "Provide your birth details and consultation questions.",
  },
  {
    number: "04",
    title: "Receive Guidance",
    text: "Meet online and receive your personalized consultation.",
  },
];

function BookingSteps() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-amber-600">
            Booking Process
          </p>

          <h2 className="mt-4 text-5xl font-light">
            How It Works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[30px] border border-stone-200 p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl font-bold text-amber-700">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="leading-7 text-zinc-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default BookingSteps;