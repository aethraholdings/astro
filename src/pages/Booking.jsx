import BookingHero from "../components/booking/BookingHero";
import BookingStepper from "../components/booking/BookingStepper";
import ServiceSelection from "../components/booking/ServiceSelection";
import BookingSidebar from "../components/booking/BookingSidebar";
import DateTimePicker from "../components/booking/DateTimePicker";
import BirthDetails from "../components/booking/BirthDetails";
import PersonalDetails from "../components/booking/PersonalDetails";
import BookingSummary from "../components/booking/BookingSummary";
import BookingSuccess from "../components/booking/BookingSuccess";
import { useBooking } from "../context/BookingContext";

function Booking() {
  const { step } = useBooking();

  return (
    <>
      <BookingHero />

      <BookingStepper />

      <section className="py-20 bg-[#F8F6F2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3">

          <div className="lg:col-span-2">

            {step === 1 && <ServiceSelection />}
            {step === 2 && <DateTimePicker />}
            {step === 3 && <BirthDetails />}
            {step === 4 && <PersonalDetails />}
            {step === 5 && <BookingSummary />}
            {step === 6 && <BookingSuccess />}

          </div>

          <BookingSidebar />

        </div>
      </section>
    </>
  );
}

export default Booking;