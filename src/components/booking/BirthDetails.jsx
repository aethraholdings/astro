import { useBooking } from "../../context/BookingContext";

function BirthDetails() {
  const { booking, updateBooking, setStep } = useBooking();

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">

      <h2 className="mb-8 text-3xl font-semibold">
        Birth Details
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="date"
          value={booking.birthDate}
          onChange={(e)=>updateBooking("birthDate",e.target.value)}
          className="rounded-xl border p-4"
        />

        <input
          type="time"
          value={booking.birthTime}
          onChange={(e)=>updateBooking("birthTime",e.target.value)}
          className="rounded-xl border p-4"
        />

      </div>

      <input
        type="text"
        placeholder="Birth Place"
        value={booking.birthPlace}
        onChange={(e)=>updateBooking("birthPlace",e.target.value)}
        className="mt-6 w-full rounded-xl border p-4"
      />

      <div className="mt-10 flex justify-between">

        <button
          onClick={()=>setStep(2)}
          className="rounded-full border px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={()=>setStep(4)}
          className="rounded-full bg-black px-8 py-3 text-white"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default BirthDetails;