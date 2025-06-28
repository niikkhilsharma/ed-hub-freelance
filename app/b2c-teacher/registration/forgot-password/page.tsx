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

// Define the different states of the password reset flow
type ResetState = "forgot" | "reset" | "success";


// --- Sub-Components for Each Form State ---

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
    <form onSubmit={onSubmit} className="space-y-8 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Forgot password</h1>
        <p className="text-black">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      <div className="space-y-1">
        <Label htmlFor="email" className="font-medium">Email ID</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-full bg-[#F9FAFB] h-12"
        />
      </div>

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer self-center rounded-full w-40 h-12 text-base"
      >
        Proceed
      </Button>
    </form>
  );
}

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
    <form onSubmit={onSubmit} className="space-y-6 flex flex-col">
        <div className="space-y-2">
            <h1 className="text-3xl font-adlam font-medium">Set Password</h1>
            <p className="text-black">Create a new password for your account.</p>
        </div>

        <div className="space-y-1">
            <Label htmlFor="password" className="font-medium">New Password</Label>
            <Input
                id="password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-full bg-[#F9FAFB] h-10"
            />
        </div>

        <div className="space-y-1">
            <Label htmlFor="confirmPassword" className="font-medium">Confirm Password</Label>
            <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="rounded-full bg-[#F9FAFB] h-10"
            />
            {password && confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm pl-2">Passwords do not match</p>
            )}
        </div>

        <Button
            type="submit"
            className="bg-[#3366FF] hover:bg-blue-700 self-center rounded-full px-8 h-12 text-base"
            disabled={!password || !confirmPassword || password !== confirmPassword}
        >
            Confirm
        </Button>
    </form>
  );
}


// --- MAIN PAGE COMPONENT ---
export default function ForgotPassword() {
  const [resetState, setResetState] = useState<ResetState>("forgot");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setResetState("reset");
    }
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      setResetState("success");
    }
  };

  return (
    <MaxWidthWrapper>
      <motion.div
        className="w-full min-h-screen flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {resetState === "success" ? (
          <SuccessCard successUrl="/student/auth/login" />
        ) : (
          <div className="relative flex flex-col md:flex-row-reverse w-full max-w-5xl bg-white rounded-3xl overflow-hidden">
            
            {/* Decorative Images */}
            <div className="absolute top-2 -translate-x-12 left-1/2 hidden md:block z-10">
              <Image src={"/images/loginimg2.png"} width={70} height={76} alt="decoration" />
            </div>
            <div className="absolute bottom-20 right-2 hidden md:block z-10">
              <Image src={"/images/loginimg1.png"} width={140} height={64} alt="decoration" />
            </div>

            {/* Right Column - Image */}
            <div className="w-full hidden md:block md:w-[55%] p-6">
              <Image
                src={
                    resetState === "forgot" 
                        ? "/student/auth/forgot-password/forgot.png" 
                        : "/student/auth/forgot-password/reset.png"
                }
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-3xl"
                alt="Forgot Password Illustration"
              />
            </div>

            {/* Left Column - Form */}
            <div className="w-full md:w-[45%] p-8 sm:p-12 flex flex-col justify-start">
              <div className="w-full max-w-sm mx-auto">
                {resetState === "forgot" && (
                  <ForgotPasswordForm
                    email={email}
                    setEmail={setEmail}
                    onSubmit={handleEmailSubmit}
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
            </div>
          </div>
        )}
      </motion.div>
    </MaxWidthWrapper>
  );
}