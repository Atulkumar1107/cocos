"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

export default function ForgotPassword() {
  const router = useRouter();
  const { forgotPassword, error, clearError, isLoggedIn, isLoading } = useAuth();
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, isLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setIsSubmitting(true);

    const result = await forgotPassword(email);
    setIsSubmitting(false);

    if (result.success) {
      router.push(`/verify-otp?email=${encodeURIComponent(email)}&type=reset`);
    }
  };

  // Show loading while checking auth
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

  // Don't render if logged in (will redirect)
  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      {/* LEFT - Image Side (50%) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407531/pexels-rachel-claire-5864291_o1i0nt.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6">Reset Password</h1>
          <p className="text-xl text-white/90 max-w-md">
            Don't worry! Enter your email and we'll send you an OTP to reset your password
          </p>
        </div>
      </div>

      {/* RIGHT - Form Side (50%) with Palm Tree Background */}
      <div 
        className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-12"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1762407603/palm-shadow-1_ire8qu.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f2edea"
        }}
      >
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
            <p className="text-gray-600">Enter your email to receive an OTP</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-blue-900">
                    We'll send a 6-digit OTP to your email address. Please check your inbox and spam folder.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <Link 
                href="/login"
                className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition"
              >
                ← Back to Login
              </Link>
            </div>
          </div>

          {/* Back to Home */}
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