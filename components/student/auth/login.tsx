"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEyeOff, FiEye } from "react-icons/fi";

export default function StudentLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <MaxWidthWrapper>
      {/* FIXED: This container now centers the card vertically and horizontally. */}
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        {/* The card itself. Its height is now flexible and determined by its content. */}
        <div className="flex flex-col md:flex-row-reverse w-full max-w-6xl relative bg-white rounded-3xl overflow-hidden shadow-lg">
          {/* Right Column - Image (Unchanged) */}
          <div className="absolute  top-2  -translate-x-12 left-1/2">
            <Image src={"/images/loginimg2.png"} width={70} height={76} alt="img"/>
          </div>
          <div className="absolute bottom-20 right-2">
            <Image src={"/images/loginimg1.png"} width={140} height={64} alt="img"/>
          </div>
          <div className="w-full hidden md:block md:w-[55%] p-6">
            <Image
              src={"/student/auth/login/login.png"}
              width={3375}
              height={3375}
              className="w-full h-full object-cover rounded-3xl"
              alt="Login"
            />
          </div>

          {/* Left Column - Login Form */}
          <div className="w-full md:w-[45%]  space-y-4 font-bold flex flex-col  mt-16">
            <div className="w-full max-w-sm  mx-auto">
              <h2 className="font-Poppins text-3xl"> Login</h2>
              <p className="mt-2 max-w-[50ch] font-medium text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-8 space-y-6 flex flex-col">
                <div>
                  <Label className="font-semibold" htmlFor="email">Email Id</Label>
                  <Input
                    type="email"
                    placeholder=" Enter Email ID"
                    className="rounded-full font-light bg-[#F9FAFB]"
                  />
                </div>

                <div>
                  <Label  className ="font-semibold"htmlFor="password">Password</Label>
                  <div className="flex items-center justify-between border bg-[#F9FAFB] rounded-full px-4">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="rounded-full  font-light bg-transparent border-none focus:ring-0 flex-1"
                      id="password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 focus:outline-none"
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>

                <Button className="self-center rounded-full w-40 mt-2">
                  Login
                </Button>
              </div>

              <div className="flex items-center font-Raleway font-medium justify-between mt-6">
                <div className="ml-2 text-sm flex gap-1 text-gray-500/80">
                  <p>Don&apos;t Have An Account?</p>
                  <Link
                    href={"/student/auth/register"}
                    className="text-[#F9326F] hover:underline"
                  >
                    Register
                  </Link>
                </div>
                <Link
                  href={"/student/auth/forgot-password"}
                  className="text-sm text-[#F9326F] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
