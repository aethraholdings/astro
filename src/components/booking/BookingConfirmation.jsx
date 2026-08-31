import { useBooking } from "../../context/BookingContext";

function BookingConfirmation() {
  const {
    booking,
    setStep,
    submitBooking,
    submitting,
    error,
  } = useBooking();

  async function handleConfirm() {
    const result = await submitBooking();

    if (result) {
      setStep(5);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Final Review
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Review Your Booking
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Please check your consultation details
          before confirming your booking.
        </p>
      </div>


      {/* =====================================
          DETAILS
      ===================================== */}

      <div className="space-y-4">

        {/* SERVICE */}

        <div className="rounded-2xl bg-zinc-50 p-5">
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Service
          </p>

          <p className="mt-2 text-lg font-semibold">
            {booking.service}
          </p>
        </div>


        {/* DATE */}

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Date
            </p>

            <p className="mt-2 font-semibold">
              {booking.date}
            </p>
          </div>


          {/* TIME */}

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Time
            </p>

            <p className="mt-2 font-semibold">
              {booking.time}
            </p>
          </div>

        </div>


        {/* QUERY */}

        <div className="rounded-2xl bg-zinc-50 p-5">

          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Your Question
          </p>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-zinc-700">
            {booking.query}
          </p>

        </div>

      </div>


      {/* =====================================
          WARNING / ERROR
      ===================================== */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}


      {/* =====================================
          BUTTONS
      ===================================== */}

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

        <button
          type="button"
          disabled={submitting}
          onClick={() => setStep(3)}
          className="rounded-full border border-zinc-300 px-8 py-3 text-sm transition hover:bg-zinc-50 disabled:opacity-50"
        >
          Go Back
        </button>


        <button
          type="button"
          disabled={submitting}
          onClick={handleConfirm}
          className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
        >
          {submitting
            ? "Confirming Booking..."
            : "Confirm Booking"}
        </button>

      </div>

    </div>
  );
}

export default BookingConfirmation;