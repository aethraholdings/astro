import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";

import Container from "../components/common/Container";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const redirectTo =
    location.state?.from || "/booking";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    setSubmitting(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      navigate(redirectTo, {
        replace: true,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F3EF] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-lg">

          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="rounded-[30px] bg-white p-7 shadow-sm md:p-10">

            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
                Begin Your Journey
              </p>

              <h1 className="mt-4 text-4xl font-light">
                Create Account
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Create your account to book and manage
                your consultations.
              </p>
            </div>

            {error && (
              <div className="mt-7 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              {/* NAME */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none focus:border-black"
                />
              </div>

              {/* EMAIL */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none focus:border-black"
                />
              </div>

              {/* PHONE */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 outline-none focus:border-black"
                />
              </div>

              {/* PASSWORD */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Password *
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 pr-12 outline-none focus:border-black"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password *
                </label>

                <div className="relative">
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    required
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3.5 pr-12 outline-none focus:border-black"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 w-full rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
              >
                {submitting
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            <div className="mt-7 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-black underline underline-offset-4"
              >
                Sign in
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}

export default Register;