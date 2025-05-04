"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

type ResetState = "profile" | "code";

export default function EntryProcess() {
  const [selected, setSelected] = useState("student");
  const [resetState, setResetState] = useState<ResetState>("profile");
  const [code, setCode] = useState("");

  const handleSelectProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setResetState("code");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted school code:", code);
    redirect("/page3/register")
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
          <div className="w-full max-w-6xl bg-[#feedf2] rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row min-h-[600px] h-full">
              {/* Left Column */}
              <div className="w-full md:w-1/2 bg-pink-500 text-white p-8 relative flex flex-col justify-between">
                <div className="mt-8 max-w-md">
                  <h2 className="text-3xl font-semibold mb-4">Become a Future School</h2>
                  <p className="text-sm text-white/90">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className="w-full mt-4">
                  <Image
                    src="/page3/entry/image.png"
                    alt="Teacher and Student"
                    width={500}
                    height={300}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 p-8 flex justify-center">
                {resetState === "profile" ? (
                  <SelectProfileForm
                    selected={selected}
                    setSelected={setSelected}
                    onSubmit={handleSelectProfile}
                  />
                ) : (
                  <SchoolCodeForm
                    code={code}
                    setCode={setCode}
                    onSubmit={handleSubmit}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
}

// Select Profile Form
function SelectProfileForm({
  selected,
  setSelected,
  onSubmit,
}: {
  selected: string;
  setSelected: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const profiles = [
    { label: "Student/Parent", value: "student", image: "/page3/entry/stu.png" },
    { label: "Teacher", value: "teacher", image: "/page3/entry/pri.png" },
    { label: "Principal", value: "principal", image: "/page3/entry/pri.png" },
  ];

  return (
    <Card className="w-full max-w-md bg-pink-50 border-none shadow-none">
      <CardContent className="p-0">
        <h3 className="text-xl font-bold mb-1">Choose Profile</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="space-y-4">
          {profiles.map((profile) => (
            <button
              key={profile.value}
              onClick={() => setSelected(profile.value)}
              className={cn(
                "flex items-center w-full p-4 border rounded-lg transition",
                selected === profile.value
                  ? "border-blue-600 bg-blue-50"
                  : "bg-white"
              )}
            >
              <Image
                src={profile.image}
                alt={profile.label}
                width={40}
                height={40}
                className="mr-4"
              />
              <span className="flex-1 text-left font-medium text-sm">
                {profile.label}
              </span>
              <div
                className={cn(
                  "w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center",
                  selected === profile.value ? "border-blue-600" : ""
                )}
              >
                {selected === profile.value && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                )}
              </div>
            </button>
          ))}
        </div>

        <Button className="mt-6 w-full" onClick={onSubmit}>
          Next
        </Button>
      </CardContent>
    </Card>
  );
}

// School Code Form
function SchoolCodeForm({
  code,
  setCode,
  onSubmit,
}: {
  code: string;
  setCode: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">School Code</h1>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="space-y-2 mt-12">
        <Label htmlFor="code">Enter Unique School Code</Label>
        <Input
          id="code"
          type="text"
          placeholder="Enter Unique School Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" onClick={onSubmit}>
        Next
      </Button>
    </form>
  );
}
