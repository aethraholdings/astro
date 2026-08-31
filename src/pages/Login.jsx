import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import Container from "../components/common/Container";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const redirectTo =
    location.state?.from || "/booking";

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    try {
      await login(email, password);

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
        <div className="mx-auto max-w-md">

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
                Welcome Back
              </p>

              <h1 className="mt-4 text-4xl font-light">
                Sign In
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Sign in to manage your consultations
                and bookings.
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

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    required
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 pr-12 outline-none transition focus:border-black"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
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
                  ? "Signing In..."
                  : "Sign In"}
              </button>

            </form>

            <div className="mt-7 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-black underline underline-offset-4"
              >
                Create one
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}

export default Login;