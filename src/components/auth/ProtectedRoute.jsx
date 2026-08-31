import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const {
    isAuthenticated,
    loading,
  } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F3EF]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-black" />

          <p className="mt-4 text-sm text-zinc-500">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;