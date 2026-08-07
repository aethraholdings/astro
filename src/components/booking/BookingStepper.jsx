import { useBooking } from "../../context/BookingContext";

const steps = [
  "Service",
  "Date",
  "Birth",
  "Personal",
  "Review",
];

function BookingStepper() {
  const { step } = useBooking();

  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-5xl justify-between px-5">
        {steps.map((title, index) => (
          <div
            key={title}
            className="flex flex-col items-center"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${
                step >= index + 1
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>

            <span className="mt-3 text-sm">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookingStepper;