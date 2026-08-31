import { useMemo } from "react";

import { useBooking } from "../../context/BookingContext";

function DateTimePicker() {
  const {
    booking,
    updateBooking,
    setStep,
  } = useBooking();

  // =====================================
  // GENERATE UPCOMING DATES
  // =====================================

  const dates = useMemo(() => {
    const result = [];

    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);

      date.setDate(
        today.getDate() + i
      );

      result.push({
        value: date
          .toISOString()
          .split("T")[0],

        label: date.toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "short",
          }
        ),
      });
    }

    return result;
  }, []);


  // =====================================
  // AVAILABLE TIMES
  // =====================================

  const times = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];


  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

      {/* HEADER */}

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Consultation Schedule
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Select Date & Time
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Choose a convenient date and time
          for your consultation.
        </p>
      </div>


      {/* DATE */}

      <h3 className="mb-4 font-semibold">
        Available Dates
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

        {dates.map((date) => (
          <button
            key={date.value}
            type="button"
            onClick={() =>
              updateBooking(
                "date",
                date.value
              )
            }
            className={`rounded-xl border p-4 text-sm transition ${
              booking.date === date.value
                ? "border-amber-600 bg-amber-50 text-amber-900"
                : "border-zinc-200 hover:border-zinc-400"
            }`}
          >
            {date.label}
          </button>
        ))}

      </div>


      {/* TIME */}

      <h3 className="mb-4 mt-10 font-semibold">
        Available Time
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

        {times.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() =>
              updateBooking(
                "time",
                time
              )
            }
            className={`rounded-xl border p-4 text-sm transition ${
              booking.time === time
                ? "border-amber-600 bg-amber-50 text-amber-900"
                : "border-zinc-200 hover:border-zinc-400"
            }`}
          >
            {time}
          </button>
        ))}

      </div>


      {/* BUTTONS */}

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

        <button
          type="button"
          onClick={() => setStep(1)}
          className="rounded-full border border-zinc-300 px-8 py-3 text-sm transition hover:bg-zinc-50"
        >
          Back
        </button>

        <button
          type="button"
          disabled={
            !booking.date ||
            !booking.time
          }
          onClick={() => setStep(3)}
          className="rounded-full bg-black px-8 py-3 text-sm text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default DateTimePicker;