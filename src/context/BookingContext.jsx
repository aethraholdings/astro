import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    service: null,
    date: "",
    time: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
    platform: "Google Meet",
  });

  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        updateBooking,
        step,
        setStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}