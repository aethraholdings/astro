import Container from "../common/Container";

const plans = [
  {
    name: "Basic Reading",
    price: "₹999",
    duration: "45 Minutes",
    features: [
      "Birth Chart Overview",
      "Career Guidance",
      "Email Summary",
    ],
  },
  {
    name: "Premium Reading",
    price: "₹1,999",
    duration: "90 Minutes",
    popular: true,
    features: [
      "Complete Birth Chart",
      "Career + Love + Finance",
      "Personal Remedies",
      "PDF Report",
    ],
  },
  {
    name: "Annual Guidance",
    price: "₹4,999",
    duration: "2 Hours",
    features: [
      "Yearly Forecast",
      "Unlimited Questions",
      "Priority Support",
      "PDF Report",
    ],
  },
];

function PricingOverview() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-amber-600">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Choose Your
            <br />
            Consultation
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] p-10 shadow-lg ${
                plan.popular
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-amber-500 px-4 py-2 text-sm">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-3xl font-semibold">
                {plan.name}
              </h3>

              <div className="mt-6 text-5xl font-bold text-amber-600">
                {plan.price}
              </div>

              <p className="mt-2">{plan.duration}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-full bg-amber-600 py-4 text-white transition hover:bg-amber-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PricingOverview;