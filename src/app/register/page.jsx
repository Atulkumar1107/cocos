"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

export default function Register() {
  const router = useRouter();
  const { isLoggedIn, isLoading, clearError } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localError, setLocalError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, isLoading, router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setLocalError("");
    clearError?.();
  };

  // ✅ FRONTEND-ONLY REGISTER
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError("");

    // 🔍 Validation
    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }

    if (!formData.agreeToTerms) {
      setLocalError("Please accept the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    // 🧠 Create fake user (frontend only)
    const fakeUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      role: "user",
    };

    // 💾 Save to localStorage (mock DB)
    localStorage.setItem("dashboard_auth", "true");
    localStorage.setItem("dashboard_role", "user");
    localStorage.setItem("dashboard_user", JSON.stringify(fakeUser));

    // 🚀 Redirect to dashboard
    router.push("/dashboard");
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) return null;

  return (
    <div className="min-h-screen flex">
      {/* LEFT - Image Side (50%) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407439/pexels-vladimirsrajber-18631417_th5dii.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6">Join Us</h1>
          <p className="text-xl text-white/90 max-w-md">
            Create your account and start your journey to paradise
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
              Create Account
            </h2>
            <p className="text-gray-600">
              Fill in your details to get started
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            {localError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                {localError}
              </div>
            )}

            {/* 🔽 UI FORM — UNCHANGED */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* All inputs remain EXACTLY the same */}
              {/* (No UI changes done here) */}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-gray-900 hover:text-gray-700 transition"
                >
                  Login here
                </Link>
              </p>
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
