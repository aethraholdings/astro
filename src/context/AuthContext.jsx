import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("crysblissed_token")
  );

  const [loading, setLoading] = useState(true);

  // =====================================
  // Restore logged-in user after refresh
  // =====================================

  useEffect(() => {
    async function restoreUser() {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCurrentUser(token);

        setUser(data.user);
      } catch (error) {
        console.error("Session expired:", error);

        localStorage.removeItem("crysblissed_token");

        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    restoreUser();
  }, [token]);

  // =====================================
  // REGISTER
  // =====================================

  async function register(formData) {
    const data = await registerUser(formData);

    localStorage.setItem(
      "crysblissed_token",
      data.token
    );

    setToken(data.token);
    setUser(data.user);

    return data;
  }

  // =====================================
  // LOGIN
  // =====================================

  async function login(email, password) {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "crysblissed_token",
      data.token
    );

    setToken(data.token);
    setUser(data.user);

    return data;
  }

  // =====================================
  // LOGOUT
  // =====================================

  function logout() {
    localStorage.removeItem("crysblissed_token");

    setToken(null);
    setUser(null);
  }

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}