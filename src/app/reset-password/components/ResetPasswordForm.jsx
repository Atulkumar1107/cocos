"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

export default function ResetPasswordForm() {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, isLoading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLocalError("");
  };

  // ✅ FRONTEND-ONLY RESET PASSWORD
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");

    // Validation
    if (formData.newPassword.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setLocalError("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);

    // 🧠 Mock reset password (store locally)
    const storedUser = localStorage.getItem("dashboard_user");

    if (!storedUser) {
      setLocalError("No account found. Please register again.");
      setIsSubmitting(false);
      return;
    }

    const user = JSON.parse(storedUser);

    // Save new password (mock)
    const updatedUser = {
      ...user,
      password: formData.newPassword,
    };

    localStorage.setItem("dashboard_user", JSON.stringify(updatedUser));

    setIsSubmitting(false);

    // 🚀 Redirect to login
    router.push("/login");
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (isLoggedIn) return null;

  return (
    <div className="min-h-screen flex">
      {/* LEFT - Image Side */}
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
          <h1 className="text-5xl font-bold mb-6">Create New Password</h1>
          <p className="text-xl text-white/90 max-w-md">
            Choose a strong password to secure your account
          </p>
        </div>
      </div>

      {/* RIGHT - Form Side */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600">
              Enter your new password below
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            {localError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                {localError}
              </div>
            )}

            {/* 🔽 UI FORM — UNCHANGED */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  New Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm New Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg"
              >
                {isSubmitting ? "Resetting password..." : "Reset Password"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition"
              >
                ← Back to Login
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
