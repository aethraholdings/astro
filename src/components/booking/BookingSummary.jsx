import { useBooking } from "../../context/BookingContext";

function BookingSummary() {
  const {
    booking,
    setStep,
    submitBooking,
    submitting,
    error,
  } = useBooking();

  // =====================================
  // CONFIRM BOOKING
  // =====================================

  async function handleConfirmBooking() {
    const result = await submitBooking();

    // Only move to success page if
    // booking was successfully created
    if (result) {
      setStep(6);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Final Step
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Review Booking
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Please check all your details carefully
          before confirming your consultation.
        </p>

      </div>


      {/* =====================================
          SERVICE
      ===================================== */}

      <div className="rounded-2xl bg-amber-50 p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
          Selected Service
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          {booking.service?.name || "Not selected"}
        </h3>

        {booking.service?.description && (
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            {booking.service.description}
          </p>
        )}

        {booking.service?.price !== undefined && (
          <p className="mt-5 text-3xl font-bold text-amber-700">
            ₹{booking.service.price}
          </p>
        )}

      </div>


      {/* =====================================
          APPOINTMENT DETAILS
      ===================================== */}

      <div className="mt-6">

        <h3 className="mb-4 text-lg font-semibold">
          Appointment Details
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">

          {/* DATE */}

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Date
            </p>

            <p className="mt-2 font-semibold">
              {booking.date || "Not selected"}
            </p>

          </div>


          {/* TIME */}

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Time
            </p>

            <p className="mt-2 font-semibold">
              {booking.time || "Not selected"}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          PERSONAL DETAILS
      ===================================== */}

      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold">
          Personal Details
        </h3>

        <div className="space-y-4 rounded-2xl border border-zinc-200 p-5">

          {/* NAME */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Name
            </span>

            <span className="font-medium">
              {booking.firstName || ""}{" "}
              {booking.lastName || ""}
            </span>

          </div>


          {/* EMAIL */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Email
            </span>

            <span className="break-all font-medium">
              {booking.email || "Not provided"}
            </span>

          </div>


          {/* PHONE */}

          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">

            <span className="text-sm text-zinc-500">
              Phone
            </span>

            <span className="font-medium">
              {booking.phone || "Not provided"}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================
          BIRTH DETAILS
      ===================================== */}

      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold">
          Birth Details
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">

          {/* BIRTH DATE */}

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Date
            </p>

            <p className="mt-2 font-medium">
              {booking.birthDate || "Not provided"}
            </p>

          </div>


          {/* BIRTH TIME */}

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Time
            </p>

            <p className="mt-2 font-medium">
              {booking.birthTime || "Not provided"}
            </p>

          </div>


          {/* BIRTH PLACE */}

          <div className="rounded-2xl border border-zinc-200 p-5">

            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Birth Place
            </p>

            <p className="mt-2 font-medium">
              {booking.birthPlace || "Not provided"}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          QUERY
      ===================================== */}

      {booking.query && (
        <div className="mt-8">

          <h3 className="mb-4 text-lg font-semibold">
            Your Question
          </h3>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">

            <p className="whitespace-pre-wrap text-sm leading-7 text-zinc-700">
              {booking.query}
            </p>

          </div>

        </div>
      )}


      {/* =====================================
          ERROR
      ===================================== */}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">

          <p className="text-sm font-medium text-red-700">
            {error}
          </p>

        </div>
      )}


      {/* =====================================
          TOTAL
      ===================================== */}

      <div className="mt-8 border-t pt-6">

        <div className="flex items-center justify-between">

          <span className="text-lg font-medium">
            Consultation Fee
          </span>

          <span className="text-3xl font-bold text-amber-700">
            ₹{booking.service?.price || 0}
          </span>

        </div>

      </div>


      {/* =====================================
          BUTTONS
      ===================================== */}

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

        {/* BACK */}

        <button
          type="button"
          disabled={submitting}
          onClick={() => setStep(4)}
          className="rounded-full border border-zinc-300 px-8 py-3 text-sm transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Back
        </button>


        {/* CONFIRM */}

        <button
          type="button"
          disabled={submitting}
          onClick={handleConfirmBooking}
          className="rounded-full bg-amber-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
        >
          {submitting
            ? "Creating Booking..."
            : "Confirm Booking"}
        </button>

      </div>


      {/* =====================================
          SECURITY MESSAGE
      ===================================== */}

      <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
        By confirming this booking, your consultation
        details will be securely submitted to
        CrysBlissed.
      </p>

    </div>
  );
}

export default BookingSummary;