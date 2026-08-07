import { useBooking } from "../../context/BookingContext";

function BookingSummary() {

  const { booking, setStep } = useBooking();

  return (

    <div className="rounded-3xl bg-white p-10 shadow-lg">

      <h2 className="mb-8 text-3xl font-semibold">
        Review Booking
      </h2>

      <div className="space-y-5">

        <p><strong>Service:</strong> {booking.service?.name}</p>

        <p><strong>Date:</strong> {booking.date}</p>

        <p><strong>Time:</strong> {booking.time}</p>

        <p><strong>Name:</strong> {booking.firstName} {booking.lastName}</p>

        <p><strong>Email:</strong> {booking.email}</p>

        <p><strong>Phone:</strong> {booking.phone}</p>

        <p><strong>Birth Date:</strong> {booking.birthDate}</p>

        <p><strong>Birth Time:</strong> {booking.birthTime}</p>

        <p><strong>Birth Place:</strong> {booking.birthPlace}</p>

        <div className="border-t pt-6">

          <h3 className="text-3xl font-bold text-amber-700">

            ₹{booking.service?.price}

          </h3>

        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={()=>setStep(4)}
          className="rounded-full border px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={()=>setStep(6)}
          className="rounded-full bg-amber-600 px-10 py-3 text-white"
        >
          Confirm Booking
        </button>

      </div>

    </div>

  );

}

export default BookingSummary;