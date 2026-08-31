import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import BlogDetails from "../pages/BlogDetails";

import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* =========================================
          MAIN WEBSITE
      ========================================= */}

      <Route path="/" element={<MainLayout />}>

        <Route
          index
          element={<Home />}
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />

        <Route
          path="blog"
          element={<Blog />}
        />

        <Route
          path="blog/:slug"
          element={<BlogDetails />}
        />

        {/* =========================================
            PROTECTED BOOKING
        ========================================= */}

        <Route
          path="booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

      </Route>


      {/* =========================================
          AUTHENTICATION
      ========================================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* =========================================
          404
      ========================================= */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;