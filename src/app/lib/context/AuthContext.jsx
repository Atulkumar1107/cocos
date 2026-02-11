"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

// 🔑 Passwords
const ADMIN_PASSWORD = "admin@123";
const USER_PASSWORD = "user@123";

// localStorage keys
const AUTH_KEY = "dashboard_auth";
const ROLE_KEY = "dashboard_role";
const USER_KEY = "dashboard_user";

export function AuthProvider({ children }) {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Load auth on refresh
  useEffect(() => {
    const loggedIn = localStorage.getItem(AUTH_KEY) === "true";
    const storedRole = localStorage.getItem(ROLE_KEY);
    const storedUser = localStorage.getItem(USER_KEY);

    if (loggedIn && storedRole && storedUser) {
      setIsLoggedIn(true);
      setRole(storedRole);
      setUser(JSON.parse(storedUser));
    }

    setIsLoading(false);
  }, []);

  // ✅ LOGIN
  const login = useCallback((password) => {
    setError(null);

    if (password === ADMIN_PASSWORD) {
      const adminUser = {
        firstName: "Admin",
        lastName: "User",
        email: "admin@demo.com",
        role: "admin",
      };

      localStorage.setItem(AUTH_KEY, "true");
      localStorage.setItem(ROLE_KEY, "admin");
      localStorage.setItem(USER_KEY, JSON.stringify(adminUser));

      setIsLoggedIn(true);
      setRole("admin");
      setUser(adminUser);

      router.push("/admin/dashboard");
      return;
    }

    if (password === USER_PASSWORD) {
      const normalUser = {
        firstName: "Demo",
        lastName: "User",
        email: "user@demo.com",
        role: "user",
      };

      localStorage.setItem(AUTH_KEY, "true");
      localStorage.setItem(ROLE_KEY, "user");
      localStorage.setItem(USER_KEY, JSON.stringify(normalUser));

      setIsLoggedIn(true);
      setRole("user");
      setUser(normalUser);

      router.push("/dashboard");
      return;
    }

    setError("Invalid password");
  }, [router]);

  // ✅ LOGOUT
  const logout = useCallback(() => {
    localStorage.clear();
    setIsLoggedIn(false);
    setRole(null);
    setUser(null);
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        role,
        user,
        login,
        logout,
        error,
        clearError: () => setError(null),
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
