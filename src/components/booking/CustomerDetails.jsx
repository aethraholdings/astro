import { useBooking } from "../../context/BookingContext";
import { useAuth } from "../../context/AuthContext";

function CustomerDetails() {
  const {
    booking,
    updateBooking,
    setStep,
  } = useBooking();

  const { user } = useAuth();

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Almost There
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Tell Us About Your Consultation
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Your account details will be automatically
          attached to this booking.
        </p>
      </div>


      {/* =====================================
          CUSTOMER INFORMATION
      ===================================== */}

      <div className="rounded-2xl bg-zinc-50 p-5">

        <h3 className="font-semibold">
          Your Information
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">

          {/* NAME */}

          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Name
            </p>

            <p className="mt-1 font-medium">
              {user?.name || "Not available"}
            </p>
          </div>


          {/* EMAIL */}

          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Email
            </p>

            <p className="mt-1 break-all font-medium">
              {user?.email || "Not available"}
            </p>
          </div>


          {/* PHONE */}

          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Phone
            </p>

            <p className="mt-1 font-medium">
              {user?.phone || "Not provided"}
            </p>
          </div>

        </div>

      </div>


      {/* =====================================
          QUERY
      ===================================== */}

      <div className="mt-8">

        <label
          htmlFor="booking-query"
          className="mb-2 block font-semibold"
        >
          What would you like guidance on?
        </label>

        <p className="mb-4 text-sm text-zinc-500">
          Tell our astrologer about your question,
          concern, or the area of life you'd like
          to explore.
        </p>

        <textarea
          id="booking-query"
          value={booking.query}
          onChange={(event) =>
            updateBooking(
              "query",
              event.target.value
            )
          }
          placeholder="For example: I would like guidance about my career, marriage and upcoming opportunities..."
          rows={7}
          maxLength={2000}
          className="w-full resize-none rounded-2xl border border-zinc-300 bg-white p-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-black"
        />

        <div className="mt-2 flex justify-between text-xs text-zinc-400">
          <span>
            Please provide as much detail as possible.
          </span>

          <span>
            {booking.query.length}/2000
          </span>
        </div>

      </div>


      {/* =====================================
          BOOKING SUMMARY
      ===================================== */}

      <div className="mt-8 rounded-2xl border border-zinc-200 p-5">

        <h3 className="font-semibold">
          Booking Summary
        </h3>

        <div className="mt-5 space-y-4 text-sm">

          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-500">
              Service
            </span>

            <span className="text-right font-medium">
              {booking.service || "Not selected"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-500">
              Date
            </span>

            <span className="font-medium">
              {booking.date || "Not selected"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-zinc-500">
              Time
            </span>

            <span className="font-medium">
              {booking.time || "Not selected"}
            </span>
          </div>

        </div>

      </div>


      {/* =====================================
          BUTTONS
      ===================================== */}

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

        <button
          type="button"
          onClick={() => setStep(2)}
          className="rounded-full border border-zinc-300 px-8 py-3 text-sm transition hover:bg-zinc-50"
        >
          Back
        </button>

        <button
          type="button"
          disabled={!booking.query.trim()}
          onClick={() => setStep(4)}
          className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
        >
          Review Booking
        </button>

      </div>

    </div>
  );
}

export default CustomerDetails;