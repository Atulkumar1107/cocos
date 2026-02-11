"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";

  const { login, error, clearError, isLoggedIn, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push(redirectUrl);
    }
  }, [isLoggedIn, isLoading, router, redirectUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError();
  };

  // ✅ FRONTEND-ONLY LOGIN
const handleSubmit = (e) => {
  e.preventDefault();
  clearError();
  login(formData.password);
};


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) return null;

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407578/pexels-izzy-poilly-2345996-4004522_tlik2c.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
          <p className="text-xl text-white/90 max-w-md">
            Sign in to access your dashboard
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-12"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea",
        }}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-600">
              Enter dashboard password to continue
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* EMAIL (UI ONLY) */}
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-xl"
              />

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                required
                placeholder="Dashboard password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-xl"
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
