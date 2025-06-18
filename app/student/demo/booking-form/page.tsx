"use client";

import StudentWrapper from "@/components/student-wrapper";
import { ArrowLeft } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DemoBookingForm() {
  return (
    <StudentWrapper blue>
      <div className="relative z-10 bg-[#E3E3E3]">
        {/* headers */}
        <div className="bg-white border-b">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
              <h1 className="text-2xl font-medium text-[#FF3366]">
                Course Name
              </h1>
            </div>
          </div>
        </div>

        <section className="px-16 py-8">
          <div className="rounded-xl bg-white space-y-4 p-4">
            <h1 className="text-3xl font-semibold text-[#FF3366]">
              Registration
            </h1>
            <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
              <div className="space-y-8 pl-1">
                {[
                  "Student Name",
                  "Student Age",
                  "Student Grade",
                  "Parent Name",
                  "Parent Email ID",
                  "Parent Phone Number",
                ].map((label, index) => (
                  <div key={index} className="flex flex-col items-start gap-2">
                    <Label htmlFor={label} className="font-medium">
                      {label}
                    </Label>
                    <Input
                      id={label}
                      type="text"
                      className="w-full rounded-full bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5]"
                      placeholder="Text"
                    />
                  </div>
                ))}
                <div className="flex items-center justify-center">
                  <Button className="bg-[#3366ff] text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full ml-6">
                    Continue
                  </Button>
                </div>
              </div>
              <div className="space-y-2 mt-4 sm:mt-0">
                <img
                  alt="course pack image"
                  src="/student/courses/detail/hero.png"
                  className="block mx-auto rounded-3xl"
                />
                <div className="border border-zinc-200 rounded-3xl text-center gap-2 p-6">
                  Pellentesque ac sapien quis ipsum
                  <br /> faucibus ullamcorper sed eu enim.
                  <br /> Mauris id ornare metus.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
