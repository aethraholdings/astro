import { useBooking } from "../../context/BookingContext";

function BookingSuccess() {
  const {
    booking,
    bookingResult,
    resetBooking,
  } = useBooking();

  // Use the booking returned from the backend.
  // Fallback to the current booking if needed.
  const confirmedBooking = bookingResult || booking;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

      {/* =====================================
          SUCCESS ICON
      ===================================== */}

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-10 w-10 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12l4 4L19 6"
          />
        </svg>
      </div>


      {/* =====================================
          TITLE
      ===================================== */}

      <div className="mt-6 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Booking Confirmed
        </p>

        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500">
          Your astrology consultation has been successfully
          booked. Please keep your reference number safe.
        </p>

      </div>


      {/* =====================================
          REFERENCE NUMBER
      ===================================== */}

      <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center">

        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
          Your Booking Reference
        </p>

        <p className="mt-3 break-all text-2xl font-bold tracking-wider text-zinc-900 md:text-3xl">
          {confirmedBooking?.referenceNumber ||
            "Generating..."}
        </p>

        <p className="mt-3 text-xs text-zinc-500">
          Use this reference number when contacting us
          about your consultation.
        </p>

      </div>


      {/* =====================================
          BOOKING DETAILS
      ===================================== */}

      <div className="mt-8">

        <h2 className="mb-4 text-xl font-semibold">
          Booking Details
        </h2>

        <div className="space-y-4 rounded-2xl border border-zinc-200 p-5">

          {/* SERVICE */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Service
            </span>

            <span className="font-semibold">
              {confirmedBooking?.service?.name ||
                confirmedBooking?.service ||
                "—"}
            </span>

          </div>


          {/* DATE */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Consultation Date
            </span>

            <span className="font-medium">
              {confirmedBooking?.date || "—"}
            </span>

          </div>


          {/* TIME */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Consultation Time
            </span>

            <span className="font-medium">
              {confirmedBooking?.time || "—"}
            </span>

          </div>


          {/* STATUS */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Status
            </span>

            <span className="inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold capitalize text-amber-700">
              {confirmedBooking?.status || "Pending"}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================
          CUSTOMER DETAILS
      ===================================== */}

      <div className="mt-8">

        <h2 className="mb-4 text-xl font-semibold">
          Customer Details
        </h2>

        <div className="space-y-4 rounded-2xl border border-zinc-200 p-5">

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Name
            </span>

            <span className="font-medium">
              {confirmedBooking?.customerName ||
                `${confirmedBooking?.firstName || ""} ${
                  confirmedBooking?.lastName || ""
                }`.trim() ||
                "—"}
            </span>

          </div>


          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Email
            </span>

            <span className="break-all font-medium">
              {confirmedBooking?.customerEmail ||
                confirmedBooking?.email ||
                "—"}
            </span>

          </div>


          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Phone
            </span>

            <span className="font-medium">
              {confirmedBooking?.customerPhone ||
                confirmedBooking?.phone ||
                "—"}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================
          BIRTH DETAILS
      ===================================== */}

      <div className="mt-8">

        <h2 className="mb-4 text-xl font-semibold">
          Birth Details
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Date
            </p>

            <p className="mt-2 font-medium">
              {confirmedBooking?.birthDate || "—"}
            </p>

          </div>


          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Time
            </p>

            <p className="mt-2 font-medium">
              {confirmedBooking?.birthTime || "—"}
            </p>

          </div>


          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Place
            </p>

            <p className="mt-2 font-medium">
              {confirmedBooking?.birthPlace || "—"}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          CUSTOMER QUERY
      ===================================== */}

      {confirmedBooking?.query && (
        <div className="mt-8">

          <h2 className="mb-4 text-xl font-semibold">
            Your Question
          </h2>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">

            <p className="whitespace-pre-wrap text-sm leading-7 text-zinc-700">
              {confirmedBooking.query}
            </p>

          </div>

        </div>
      )}


      {/* =====================================
          IMPORTANT MESSAGE
      ===================================== */}

      <div className="mt-8 rounded-2xl bg-zinc-50 p-5">

        <h3 className="font-semibold">
          What happens next?
        </h3>

        <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">

          <li>
            ✓ Your booking has been recorded.
          </li>

          <li>
            ✓ Our astrologer will review your booking
            details.
          </li>

          <li>
            ✓ We will contact you regarding your
            consultation.
          </li>

          <li>
            ✓ Please keep your reference number for
            future communication.
          </li>

        </ul>

      </div>


      {/* =====================================
          ACTIONS
      ===================================== */}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

        <button
          type="button"
          onClick={() => {
            resetBooking();
          }}
          className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Book Another Consultation
        </button>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
          className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-medium transition hover:bg-zinc-50"
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default BookingSuccess;