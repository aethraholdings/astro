import Booking from "../models/Booking.js";
import User from "../models/User.js";
import generateReference from "../utils/generateReference.js";

// =====================================
// CREATE BOOKING
// =====================================

export async function createBooking(req, res) {
  try {
    const {
      service,
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      birthTime,
      birthPlace,
      query,
    } = req.body;

    // =================================
    // CHECK LOGIN USER
    // =================================

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "Logged-in user was not found.",
      });
    }

    // =================================
    // VALIDATION
    // =================================

    if (!service?.name) {
      return res.status(400).json({
        message: "Please select a service.",
      });
    }

    if (!date) {
      return res.status(400).json({
        message: "Please select a consultation date.",
      });
    }

    if (!time) {
      return res.status(400).json({
        message: "Please select a consultation time.",
      });
    }

    if (!firstName || !lastName) {
      return res.status(400).json({
        message: "Please provide your full name.",
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }

    if (!phone) {
      return res.status(400).json({
        message: "Phone number is required.",
      });
    }

    if (!birthDate) {
      return res.status(400).json({
        message: "Birth date is required.",
      });
    }

    if (!birthTime) {
      return res.status(400).json({
        message: "Birth time is required.",
      });
    }

    if (!birthPlace) {
      return res.status(400).json({
        message: "Birth place is required.",
      });
    }

    if (!query || !query.trim()) {
      return res.status(400).json({
        message: "Please enter your consultation query.",
      });
    }

    // =================================
    // GENERATE UNIQUE REFERENCE
    // =================================

    let referenceNumber;
    let existingBooking;

    do {
      referenceNumber = generateReference();

      existingBooking = await Booking.findOne({
        referenceNumber,
      });
    } while (existingBooking);

    // =================================
    // CREATE BOOKING
    // =================================

    const booking = await Booking.create({
      referenceNumber,

      // Logged-in user
      user: user._id,

      // Customer details
      customerName: `${firstName} ${lastName}`.trim(),
      customerEmail: email,
      customerPhone: phone,

      // Service
      service: service.name,
      servicePrice: Number(service.price) || 0,

      // Appointment
      date,
      time,

      // Birth details
      birthDate,
      birthTime,
      birthPlace,

      // Customer question
      query: query.trim(),

      // Initial status
      status: "pending",
    });

    // =================================
    // RESPONSE
    // =================================

    return res.status(201).json({
      message: "Booking created successfully.",

      booking: {
        id: booking._id,

        referenceNumber: booking.referenceNumber,

        customerName: booking.customerName,

        customerEmail: booking.customerEmail,

        customerPhone: booking.customerPhone,

        service: booking.service,

        servicePrice: booking.servicePrice,

        date: booking.date,

        time: booking.time,

        birthDate: booking.birthDate,

        birthTime: booking.birthTime,

        birthPlace: booking.birthPlace,

        query: booking.query,

        status: booking.status,

        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    console.error("Create booking error:", error);

    return res.status(500).json({
      message: "Something went wrong while creating the booking.",
    });
  }
}


// =====================================
// GET MY BOOKINGS
// =====================================

export async function getMyBookings(req, res) {
  try {
    const bookings = await Booking.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      bookings,
    });
  } catch (error) {
    console.error("Get bookings error:", error);

    return res.status(500).json({
      message: "Unable to get your bookings.",
    });
  }
}


// =====================================
// GET SINGLE BOOKING
// =====================================

export async function getBookingById(req, res) {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found.",
      });
    }

    return res.status(200).json({
      booking,
    });
  } catch (error) {
    console.error("Get booking error:", error);

    return res.status(500).json({
      message: "Unable to get booking.",
    });
  }
}