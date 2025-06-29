"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StudentWrapper from "@/components/student-wrapper";
import { ArrowLeft } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormData {
  studentName: string;
  studentAge: string;
  studentGrade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
}

export default function DemoBookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    studentAge: "",
    studentGrade: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  const formFields = [
    { key: "studentName", label: "Student Name", type: "text" },
    { key: "studentAge", label: "Student Age", type: "number" },
    { key: "studentGrade", label: "Student Grade", type: "text" },
    { key: "parentName", label: "Parent Name", type: "text" },
    { key: "parentEmail", label: "Parent Email ID", type: "email" },
    { key: "parentPhone", label: "Parent Phone Number", type: "tel" },
  ];

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/student/demo/teacher-selection");
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <StudentWrapper>
      <div className="relative z-10 bg-[#E3E3E3]">
        {/* headers */}
        <div className="bg-white border-b">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <ArrowLeft
                className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800"
                onClick={handleBackClick}
              />
              <h1 className="text-2xl font-medium text-[#FF3366]">
                Course Name
              </h1>
            </div>
          </div>
        </div>

        <section className="px-4 sm:px-8 lg:px-16 py-8">
          <div className="rounded-3xl max-w-7xl mx-auto bg-white space-y-4 p-4">
            <h1 className="text-3xl font-semibold text-[#FF3366]">
              Registration
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
                <div className="space-y-8 pl-1">
                  {formFields.map((field, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-2"
                    >
                      <Label htmlFor={field.key} className="font-medium">
                        {field.label}
                      </Label>
                      <Input
                        id={field.key}
                        type={field.type}
                        value={formData[field.key as keyof FormData]}
                        onChange={(e) =>
                          handleInputChange(
                            field.key as keyof FormData,
                            e.target.value
                          )
                        }
                        className="w-full rounded-full bg-[#F9FAFB] placeholder:text-[#6B7280] border transition-colors border-[#D5D5D5]"
                        placeholder={
                          field.type === "email"
                            ? "example@email.com"
                            : field.type === "tel"
                            ? "+1 (555) 123-4567"
                            : field.type === "number"
                            ? "Enter age"
                            : "Enter " + field.label.toLowerCase()
                        }
                        required
                      />
                    </div>
                  ))}

                  {/* Continue button - only visible when form is complete and valid */}
                  <div className="flex items-center justify-center animate-in fade-in duration-300">
                    <Button
                      type="submit"
                      className="bg-[#3366ff] text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full ml-6 transition-all duration-200 transform cursor-pointer disabled:opacity-50"
                    >
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
                  <div className="border border-zinc-200 bg-[#F9FAFB] rounded-3xl text-center gap-2 p-6">
                    Pellentesque ac sapien quis ipsum
                    <br /> faucibus ullamcorper sed eu enim.
                    <br /> Mauris id ornare metus.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
