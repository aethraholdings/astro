import services from "../../data/booking";
import { useBooking } from "../../context/BookingContext";

function ServiceSelection() {
  const {
    booking,
    updateBooking,
    setStep,
  } = useBooking();

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">
      <h2 className="mb-8 text-3xl font-semibold">
        Select a Service
      </h2>

      <div className="space-y-5">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() =>
              updateBooking("service", service)
            }
            className={`w-full rounded-2xl border p-6 text-left transition ${
              booking.service?.id === service.id
                ? "border-amber-600 bg-amber-50"
                : "border-stone-200"
            }`}
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {service.name}
                </h3>

                <p className="mt-2 text-zinc-500">
                  {service.duration}
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-amber-700">
                  ₹{service.price}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          disabled={!booking.service}
          onClick={() => setStep(2)}
          className="rounded-full bg-black px-10 py-4 text-white disabled:opacity-40"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default ServiceSelection;