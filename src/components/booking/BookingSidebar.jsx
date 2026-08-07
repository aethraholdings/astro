import { useBooking } from "../../context/BookingContext";

function BookingSidebar() {
  const { booking } = useBooking();

  return (
    <div className="sticky top-28 rounded-3xl bg-white p-8 shadow-lg h-fit">
      <h2 className="mb-6 text-2xl font-semibold">
        Booking Summary
      </h2>

      <div className="space-y-4 text-zinc-600">
        <div>
          <strong>Service:</strong>
          <br />
          {booking.service?.name || "-"}
        </div>

        <div>
          <strong>Duration:</strong>
          <br />
          {booking.service?.duration || "-"}
        </div>

        <div>
          <strong>Date:</strong>
          <br />
          {booking.date || "-"}
        </div>

        <div>
          <strong>Time:</strong>
          <br />
          {booking.time || "-"}
        </div>

        <hr />

        <div className="text-3xl font-bold text-amber-700">
          ₹{booking.service?.price || 0}
        </div>
      </div>
    </div>
  );
}

export default BookingSidebar;