import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";


// =====================================
// ENVIRONMENT
// =====================================

dotenv.config();


// =====================================
// APP
// =====================================

const app = express();


// =====================================
// DATABASE
// =====================================

connectDB();


// =====================================
// MIDDLEWARE
// =====================================

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);


// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {
  res.json({
    message:
      "CrysBlissed API is running",
  });
});


// =====================================
// AUTH ROUTES
// =====================================

app.use(
  "/api/auth",
  authRoutes,
);

app.use(
  "/api/bookings",
  bookingRoutes,
);


// =====================================
// SERVER
// =====================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`,
  );
});