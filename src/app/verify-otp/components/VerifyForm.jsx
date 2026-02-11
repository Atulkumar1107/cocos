"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyOTPForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  
  const inputRefs = useRef([]);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('');
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);
    
    // Focus last filled input or first empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    setIsSubmitting(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("OTP verified successfully!", {
        duration: 3000,
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    }, 1500);
  };

  const handleResendOTP = () => {
    if (!canResend) return;
    
    setCanResend(false);
    setCountdown(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
    
    toast.success("OTP resent successfully!", {
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT - Image Side (50%) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbjcqykzz/image/upload/v1763014661/pexels-valeriya-kobzar-42371713-11790418_qg4q8s.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-6">Verify OTP</h1>
          <p className="text-xl text-white/90 max-w-md">
            We've sent a 6-digit code to your email. Enter it below to continue
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter OTP</h2>
            <p className="text-gray-600">
              Code sent to <span className="font-semibold">{email}</span>
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4 text-center">
                  Enter 6-Digit OTP
                </label>
                <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                  ))}
                </div>
              </div>

              {/* Resend OTP */}
              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-600">
                    Resend OTP in <span className="font-semibold">{countdown}s</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || otp.join('').length !== 6}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
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