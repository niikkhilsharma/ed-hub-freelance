"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import SuccessCard from "@/components/student/auth/success-card";

// export default function StudentForgetPassword() {
// 	return <MaxWidthWrapper>StudentForgetPassword</MaxWidthWrapper>
// }

// Define the different states of the password reset flow
type ResetState = "forgot" | "verify" | "reset" | "success";

export default function ForgotPassword() {
  const [resetState, setResetState] = useState<ResetState>("forgot");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setResetState("verify");
    }
  };

  // Handle OTP verification
  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp) {
      setResetState("reset");
    }
  };

  // Handle password reset
  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      setResetState("success");
    }
  };

  return (
    <MaxWidthWrapper>
      <motion.div
        className="relative w-full min-h-screen flex flex-col overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen p-4">
          {resetState === "success" ? (
            <SuccessCard successUrl="/student/auth/login" />
          ) : (
            <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[600px] h-full">
                {/* Left Column - Form */}
                <div className="w-full md:w-1/2 p-8 pt-28">
                  {resetState === "forgot" && (
                    <ForgotPasswordForm
                      email={email}
                      setEmail={setEmail}
                      onSubmit={handleEmailSubmit}
                    />
                  )}
                  {resetState === "verify" && (
                    <VerifyEmailForm
                      otp={otp}
                      setOtp={setOtp}
                      onSubmit={handleVerifySubmit}
                    />
                  )}
                  {resetState === "reset" && (
                    <ResetPasswordForm
                      password={password}
                      setPassword={setPassword}
                      confirmPassword={confirmPassword}
                      setConfirmPassword={setConfirmPassword}
                      onSubmit={handleResetSubmit}
                    />
                  )}
                </div>

                {/* Right Column - Image */}
                <div className="w-full md:w-1/2 relative">
                  <div className="h-full p-6">
                    {resetState === "forgot" && <ForgotPasswordImage />}
                    {resetState === "verify" && <VerifyEmailImage />}
                    {resetState === "reset" && <ResetImage />}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
}

// Forgot Password Form Component
function ForgotPasswordForm({
  email,
  setEmail,
  onSubmit,
}: {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Forgot password</h1>
        <p className="text-gray-500">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className=" mb-3 font-bold">Email ID</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            masked
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pr-10 rounded-full bg-[#F9FAFB]"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer self-center rounded-full w-40"
      >
        Proceed
      </Button>
    </form>
  );
}

// Verify Email Form Component
function VerifyEmailForm({
  otp,
  setOtp,
  onSubmit,
}: {
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Verify Email Address</h1>
        <p className="text-gray-500">
          We&apos;ve sent a verification code to your email. Please enter it below.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otp" className="font-bold mb-3">OTP</Label>
        <Input
          id="otp"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className=" rounded-full bg-[#F9FAFB]"
        />
      </div>

      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 cursor-pointer self-center rounded-full w-40">
        Proceed
      </Button>
    </form>
  );
}

// Reset Password Form Component
function ResetPasswordForm({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}: {
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Set New Password</h1>
        <p className="text-gray-500">Create a new password for your account.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="font-bold mb-3">New Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter new password"
          masked
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className=" rounded-full bg-[#F9FAFB]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          masked
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="rounded-full bg-[#F9FAFB]"
        />
        {password && confirmPassword && password !== confirmPassword && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={!password || !confirmPassword || password !== confirmPassword}
      >
        Reset Password
      </Button>
    </form>
  );
}

// Forgot Password Image Component
function ForgotPasswordImage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 relative ">
          <Image
            src={"/student/auth/forgot-password/forgot.png"}
            width={3375}
            height={3375}
            className="w-full h-full rounded-3xl object-cover"
            alt="forgot"
          />
        </div>
      </div>
    </div>
  );
}

// Verify Email Image Component
function VerifyEmailImage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 relative">
          <Image
            src={"/student/auth/forgot-password/verify-email.png"}
            width={3375}
            height={3375}
            className="w-full h-full rounded-3xl object-cover"
            alt="forgot"
          />
        </div>
      </div>
    </div>
  );
}

//reset image
function ResetImage() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 relative">
          <Image
            src={"/student/auth/forgot-password/reset.png"}
            width={3375}
            height={3375}
            className="w-full h-full rounded-3xl object-cover"
            alt="forgot"
          />
        </div>
      </div>
    </div>
  );
}
