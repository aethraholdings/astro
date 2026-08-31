import { Link } from "react-router-dom";
import {
  CheckCircle2,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { useBooking } from "../../context/BookingContext";

function BookingSuccess() {
  const {
    bookingResult,
    resetBooking,
  } = useBooking();

  if (!bookingResult) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
        <h2 className="text-2xl font-semibold">
          No booking found
        </h2>

        <Link
          to="/booking"
          className="mt-6 inline-block rounded-full bg-black px-7 py-3 text-sm text-white"
        >
          Book a Consultation
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 text-center shadow-lg md:p-10">

      {/* SUCCESS ICON */}

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2
          size={42}
          className="text-green-600"
        />
      </div>


      {/* HEADER */}

      <p className="mt-7 text-sm uppercase tracking-[0.25em] text-amber-700">
        Booking Confirmed
      </p>

      <h1 className="mt-3 text-4xl font-semibold">
        Thank You!
      </h1>

      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-zinc-500">
        Your consultation request has been
        successfully submitted. Please keep your
        reference number for future communication.
      </p>


      {/* REFERENCE NUMBER */}

      <div className="mt-8 rounded-2xl bg-amber-50 p-6">

        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
          Reference Number
        </p>

        <p className="mt-3 break-all text-2xl font-bold tracking-wider">
          {bookingResult.referenceNumber}
        </p>

        <p className="mt-2 text-xs text-zinc-500">
          Please save this number.
        </p>

      </div>


      {/* DATE + TIME */}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl border p-5">

          <CalendarDays
            size={20}
            className="mx-auto"
          />

          <p className="mt-3 text-xs text-zinc-400">
            Date
          </p>

          <p className="mt-1 font-semibold">
            {bookingResult.date}
          </p>

        </div>


        <div className="rounded-2xl border p-5">

          <Clock3
            size={20}
            className="mx-auto"
          />

          <p className="mt-3 text-xs text-zinc-400">
            Time
          </p>

          <p className="mt-1 font-semibold">
            {bookingResult.time}
          </p>

        </div>

      </div>


      {/* BOOKING DETAILS */}

      <div className="mt-6 rounded-2xl border p-6 text-left">

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Service
          </p>

          <p className="mt-1 font-semibold">
            {bookingResult.service}
          </p>
        </div>


        <div className="mt-6">

          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Your Question
          </p>

          <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-zinc-600">
            {bookingResult.query}
          </p>

        </div>

      </div>


      {/* STATUS */}

      <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-600">
        Booking Status:{" "}
        <span className="font-semibold capitalize text-black">
          {bookingResult.status}
        </span>
      </div>


      {/* ACTIONS */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

        <Link
          to="/"
          onClick={resetBooking}
          className="rounded-full border border-zinc-300 px-7 py-3 text-sm"
        >
          Back to Home
        </Link>

        <Link
          to="/booking"
          onClick={resetBooking}
          className="rounded-full bg-black px-7 py-3 text-sm text-white"
        >
          Book Another
        </Link>

      </div>

    </div>
  );
}

export default BookingSuccess;