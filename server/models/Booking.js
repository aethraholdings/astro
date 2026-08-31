import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    // =====================================
    // REFERENCE NUMBER
    // =====================================

    referenceNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    // =====================================
    // LOGGED-IN USER
    // =====================================

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // =====================================
    // CUSTOMER DETAILS
    // =====================================

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    customerEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    customerPhone: {
      type: String,
      trim: true,
    },

    // =====================================
    // SERVICE
    // =====================================

    service: {
      type: String,
      required: true,
      trim: true,
    },

    servicePrice: {
      type: Number,
      default: 0,
    },

    // =====================================
    // APPOINTMENT
    // =====================================

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    // =====================================
    // BIRTH DETAILS
    // =====================================

    birthDate: {
      type: String,
      required: true,
    },

    birthTime: {
      type: String,
      required: true,
    },

    birthPlace: {
      type: String,
      required: true,
      trim: true,
    },

    // =====================================
    // CUSTOMER QUERY
    // =====================================

    query: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    // =====================================
    // BOOKING STATUS
    // =====================================

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    // =====================================
    // ADMIN NOTES
    // =====================================

    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

export default Booking;