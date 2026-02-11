"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

// 🔐 FRONTEND OTP
const FRONTEND_OTP = "123456";

export default function VerifyOTP() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const { isLoggedIn, isLoading } = useAuth();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputRefs = useRef([]);

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, isLoading, router]);

  // Redirect if no email
  useEffect(() => {
    if (!email) {
      router.push("/register");
    }
  }, [email, router]);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);

    const nextIndex = Math.min(pasted.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // ✅ FRONTEND VERIFY OTP
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const otpValue = otp.join("");

    if (otpValue.length !== 6) return;

    setIsSubmitting(true);

    setTimeout(() => {
      if (otpValue === FRONTEND_OTP) {
        // Mark user verified
        const storedUser = localStorage.getItem("dashboard_user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          user.isVerified = true;
          localStorage.setItem("dashboard_user", JSON.stringify(user));
        }

        localStorage.setItem("dashboard_auth", "true");
        setSuccess("OTP verified successfully!");
        router.push("/dashboard");
      } else {
        setError("Invalid OTP. Please try again.");
      }

      setIsSubmitting(false);
    }, 800);
  };

  // ✅ FRONTEND RESEND OTP
  const handleResendOTP = () => {
    if (!canResend) return;

    setOtp(["", "", "", "", "", ""]);
    setCountdown(60);
    setCanResend(false);
    setSuccess("New OTP sent (123456)");
    inputRefs.current[0]?.focus();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (isLoggedIn || !email) return null;

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014661/pexels-valeriya-kobzar-42371713-11790418_qg4q8s.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6">Verify OTP</h1>
          <p className="text-xl text-white/90 max-w-md">
            Enter the 6-digit code sent to your email
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
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
              Enter OTP
            </h2>
            <p className="text-gray-600">
              Code sent to <span className="font-semibold">{email}</span>
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div onPaste={handlePaste} className="flex gap-3 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleChange(index, e.target.value)
                    }
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl"
                  />
                ))}
              </div>

              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-sm font-semibold text-gray-900"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-600">
                    Resend OTP in{" "}
                    <span className="font-semibold">{countdown}s</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={otp.join("").length !== 6 || isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg"
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm font-semibold text-gray-900"
              >
                ← Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
