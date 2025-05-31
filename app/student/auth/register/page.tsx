"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SuccessCard from "@/components/student/auth/success-card";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export default function RegisterPage() {
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = React.useState<Date>();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      setSuccess(true);
    }
  };
  return (
    <MaxWidthWrapper>
      <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen p-4">
          {success ? (
            <SuccessCard successUrl="/student/auth/login" />
          ) : (
            <div className="w-2/3 m-auto max-w-2xl bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="flex flex-col px-12 md:flex-row min-h-[400px] md:min-h-[600px] h-full">
                <div className="w-full p-8 flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/student/auth/register.png"
                      alt="teacher and student"
                      width={60}
                      height={60}
                      className="object-contain h-full w-fit"
                      priority
                    />
                    <div>
                      <h2 className="font-adlam text-3xl">
                        Student/Parent Registration
                      </h2>
                      <p className="mt-2 max-w-[50ch] text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div>
                      <Label htmlFor="guardian">Student Name</Label>
                      <Input
                        type="text"
                        placeholder="Student Name"
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="school">Class</Label>
                      <Select>
                        <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full">
                      <Label htmlFor="school">Student DOB</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full rounded-full bg-[#F9FAFB] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>DD/MM/YY</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Id</Label>
                      <Input
                        type="email"
                        placeholder="Email Id"
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Mobile Number</Label>
                      <Input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="guardian">Parents/Guardian Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter Parent/Guardian Name"
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text"
                        placeholder="Enter Address"
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select>
                        <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Select>
                        <SelectTrigger className="w-full  rounded-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">New Password</Label>
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
                        className=" rounded-full bg-[#F9FAFB]"
                      />
                      {password &&
                        confirmPassword &&
                        password !== confirmPassword && (
                          <p className="text-red-500 text-sm">
                            Passwords do not match
                          </p>
                        )}
                    </div>

                    <Button
                      className="w-full mt-2 rounded-full"
                      onClick={handleSubmit}
                      disabled={
                        !password ||
                        !confirmPassword ||
                        password !== confirmPassword
                      }
                    >
                      Submit
                    </Button>
                  </div>

                  <div className="flex justify-center items-center mt-4 text-sm">
                    <div className="flex">
                      <p>Already Have Aan Account?</p>
                      <Link
                        href={"/student/auth/register"}
                        className="ml-2 text-[#F9326F] hover:underline"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
