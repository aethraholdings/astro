function BookingSuccess() {

  return (

    <section className="py-28">

      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-14 text-center shadow-xl">

        <div className="text-7xl">
          🎉
        </div>

        <h2 className="mt-6 text-5xl font-light">
          Booking Confirmed
        </h2>

        <p className="mt-8 text-zinc-600 leading-8">

          Thank you for booking your consultation.

          We have received your request and
          confirmation details will be sent to your email shortly.

        </p>

        <div className="mt-10">

          <h3 className="text-xl font-semibold">
            Booking Reference
          </h3>

          <p className="mt-2 text-3xl font-bold text-amber-700">
            #CB20260001
          </p>

        </div>

        <button
          className="mt-12 rounded-full bg-black px-10 py-4 text-white"
        >
          Return Home
        </button>

      </div>

    </section>

  );

}

export default BookingSuccess;