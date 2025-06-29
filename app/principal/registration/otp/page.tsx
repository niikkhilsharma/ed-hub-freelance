"use client";

import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import AuthLayout from "@/components/auth-layout"; // Adjust path if needed

const OTP_LENGTH = 6;

export default function OtpPage() {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill("1"));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout
      leftPanelTitle="Title"
      leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    >
      <h2 className="text-2xl font-bold text-black mb-2">Pls Enter OTP</h2>
      <p className="text-sm text-black font-medium mb-8 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="space-y-8 text-center">
        <label className="block text-sm font-semibold text-black mb-1">
          Enter OTP
        </label>
        <div className="flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-9.5 h-9.5 sm:w-12 sm:h-12 text-center text-2xl font-bold bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
            />
          ))}
        </div>

        <button
          type="submit"
          className="px-10 bg-[#3366FF] text-white font-semibold py-2.5 rounded-full hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3366FF]"
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
}
