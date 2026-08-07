import { useBooking } from "../../context/BookingContext";

function PersonalDetails() {

  const { booking, updateBooking, setStep } = useBooking();

  return (

    <div className="rounded-3xl bg-white p-10 shadow-lg">

      <h2 className="mb-8 text-3xl font-semibold">
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <input
          placeholder="First Name"
          className="rounded-xl border p-4"
          value={booking.firstName}
          onChange={(e)=>updateBooking("firstName",e.target.value)}
        />

        <input
          placeholder="Last Name"
          className="rounded-xl border p-4"
          value={booking.lastName}
          onChange={(e)=>updateBooking("lastName",e.target.value)}
        />

      </div>

      <input
        className="mt-6 w-full rounded-xl border p-4"
        placeholder="Email"
        value={booking.email}
        onChange={(e)=>updateBooking("email",e.target.value)}
      />

      <input
        className="mt-6 w-full rounded-xl border p-4"
        placeholder="Phone"
        value={booking.phone}
        onChange={(e)=>updateBooking("phone",e.target.value)}
      />

      <textarea
        rows="5"
        className="mt-6 w-full rounded-xl border p-4"
        placeholder="Questions"
        value={booking.question}
        onChange={(e)=>updateBooking("question",e.target.value)}
      />

      <div className="mt-10 flex justify-between">

        <button
          onClick={()=>setStep(3)}
          className="rounded-full border px-8 py-3"
        >
          Back
        </button>

        <button
          onClick={()=>setStep(5)}
          className="rounded-full bg-black px-8 py-3 text-white"
        >
          Continue
        </button>

      </div>

    </div>

  );

}

export default PersonalDetails;