import express from "express";

import {
  createBooking,
  getMyBookings,
  getBookingById,
} from "../controllers/bookingController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// =====================================
// CREATE BOOKING
// =====================================

router.post(
  "/",
  protect,
  createBooking
);


// =====================================
// GET LOGGED-IN USER BOOKINGS
// =====================================

router.get(
  "/my",
  protect,
  getMyBookings
);


// =====================================
// GET SINGLE BOOKING
// =====================================

router.get(
  "/:id",
  protect,
  getBookingById
);


export default router;