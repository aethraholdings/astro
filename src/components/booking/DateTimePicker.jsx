import { useBooking } from "../../context/BookingContext";

const dates = [
  "12 Aug",
  "13 Aug",
  "14 Aug",
  "15 Aug",
  "16 Aug",
  "17 Aug",
  "18 Aug",
];

const times = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
];

function DateTimePicker() {
  const { booking, updateBooking, setStep } = useBooking();

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">

      <h2 className="mb-8 text-3xl font-semibold">
        Select Date & Time
      </h2>

      <h3 className="mb-4 font-semibold">
        Available Dates
      </h3>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => updateBooking("date", date)}
            className={`rounded-xl border p-4 transition ${
              booking.date === date
                ? "border-amber-600 bg-amber-50"
                : ""
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      <h3 className="mt-10 mb-4 font-semibold">
        Available Time
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => updateBooking("time", time)}
            className={`rounded-xl border p-4 transition ${
              booking.time === time
                ? "border-amber-600 bg-amber-50"
                : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          onClick={() => setStep(1)}
          className="rounded-full border px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={() => setStep(3)}
          className="rounded-full bg-black px-8 py-3 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DateTimePicker;