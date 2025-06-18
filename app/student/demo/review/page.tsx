"use client";

import StudentWrapper from "@/components/student-wrapper";
import { ArrowLeft } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CourseDetail() {
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
            <h1 className="text-3xl font-semibold text-[#FF3366]">Review</h1>
            <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
              <div className="space-y-5 pl-1">
                {[
                  "Student Name",
                  "Student Age",
                  "Student Grade",
                  "Parent Name",
                  "Parent Email ID",
                  "Parent Phone Number",
                ].map((label, index) => (
                  <div key={index} className="space-y-8">
                    <Input
                      id="hours"
                      type="text"
                      className="w-full rounded-xl bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5]"
                      placeholder={label}
                    />
                  </div>
                ))}
                <div className="w-full rounded-2xl bg-[#F9FAFB] placeholder:text-[#6B7280] border border-[#D5D5D5] flex items-center p-2 gap-4">
                  <img
                    alt="profile image"
                    src="/student/educator/educator_female.png"
                    className="w-20 h-20 rounded-2xl"
                  />
                  <span className="font-semibold">Name</span>
                </div>
                <div className="w-full rounded-2xl bg-[#3366FF1A] placeholder:text-[#6B7280] border border-[#3366FF] flex items-center p-3 gap-4">
                  <strong>Slot:</strong>12th June 2025, 6:30 PM
                </div>
                <Button className="bg-[#F9FAFB] border border-[#E5E7EB] px-6 py-4 rounded-full text-black hover:bg-[#F9FAFB] cursor-pointer">
                  Edit
                </Button>
                <div className="flex items-center justify-center">
                  <Button className="bg-[#3366ff] text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full">
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
