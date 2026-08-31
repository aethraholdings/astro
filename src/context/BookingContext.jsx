import {
  createContext,
  useContext,
  useState,
} from "react";

import { useAuth } from "./AuthContext";
import { createBooking } from "../services/bookingService";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const { user, token } = useAuth();

  const [booking, setBooking] = useState({
    // ================================
    // SERVICE
    // ================================

    service: "",

    // ================================
    // DATE & TIME
    // ================================

    date: "",
    time: "",

    // ================================
    // BIRTH DETAILS
    // ================================

    birthDate: "",
    birthTime: "",
    birthPlace: "",

    // ================================
    // PERSONAL DETAILS
    // ================================

    name: "",
    email: "",
    phone: "",

    // ================================
    // USER QUERY
    // ================================

    query: "",
  });

  const [step, setStep] = useState(1);

  const [bookingResult, setBookingResult] =
    useState(null);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");


  // =====================================
  // UPDATE BOOKING
  // =====================================

  function updateBooking(field, value) {
    setBooking((previous) => ({
      ...previous,
      [field]: value,
    }));
  }


  // =====================================
  // RESET BOOKING
  // =====================================

  function resetBooking() {
    setBooking({
      service: "",
      date: "",
      time: "",

      birthDate: "",
      birthTime: "",
      birthPlace: "",

      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",

      query: "",
    });

    setStep(1);

    setBookingResult(null);

    setError("");
  }


  // =====================================
  // SUBMIT BOOKING
  // =====================================

  async function submitBooking() {

    // -------------------------------------
    // LOGIN CHECK
    // -------------------------------------

    if (!token) {
      setError(
        "Please login before booking a consultation."
      );

      return null;
    }


    // -------------------------------------
    // VALIDATION
    // -------------------------------------

    if (!booking.service) {
      setError(
        "Please select a service."
      );

      return null;
    }

    if (!booking.date) {
      setError(
        "Please select a date."
      );

      return null;
    }

    if (!booking.time) {
      setError(
        "Please select a time."
      );

      return null;
    }

    if (!booking.name) {
      setError(
        "Please enter your name."
      );

      return null;
    }

    if (!booking.email) {
      setError(
        "Please enter your email."
      );

      return null;
    }

    if (!booking.phone) {
      setError(
        "Please enter your phone number."
      );

      return null;
    }

    if (!booking.query.trim()) {
      setError(
        "Please tell us what you would like guidance on."
      );

      return null;
    }


    try {

      setSubmitting(true);

      setError("");


      // -------------------------------------
      // SEND TO SERVER
      // -------------------------------------

      const data = await createBooking(
        booking,
        token
      );


      // -------------------------------------
      // SAVE SERVER RESPONSE
      // -------------------------------------

      setBookingResult(
        data.booking
      );


      return data.booking;

    } catch (error) {

      console.error(
        "Booking error:",
        error
      );

      setError(
        error.message ||
        "Unable to create booking."
      );

      return null;

    } finally {

      setSubmitting(false);

    }
  }


  return (
    <BookingContext.Provider
      value={{
        booking,

        updateBooking,

        step,
        setStep,

        bookingResult,

        submitting,

        error,

        submitBooking,

        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}


export function useBooking() {

  const context =
    useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider"
    );
  }

  return context;
}