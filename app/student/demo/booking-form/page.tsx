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

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone: string) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const isFormValid = () => {
    return (
      isFormComplete() &&
      isEmailValid(formData.parentEmail) &&
      isPhoneValid(formData.parentPhone) &&
      Number.parseInt(formData.studentAge) > 0 &&
      Number.parseInt(formData.studentAge) < 100
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate to home page
      router.push("/student/demo/teacher-selection");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="rounded-xl bg-white space-y-4 p-4">
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
                        <span className="text-red-500 ml-1">*</span>
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
                        className={`w-full rounded-full bg-[#F9FAFB] placeholder:text-[#6B7280] border transition-colors ${
                          formData[field.key as keyof FormData].trim() === ""
                            ? "border-[#D5D5D5]"
                            : field.key === "parentEmail" &&
                              !isEmailValid(formData.parentEmail) &&
                              formData.parentEmail.trim() !== ""
                            ? "border-red-300 focus:border-red-500"
                            : field.key === "parentPhone" &&
                              !isPhoneValid(formData.parentPhone) &&
                              formData.parentPhone.trim() !== ""
                            ? "border-red-300 focus:border-red-500"
                            : "border-green-300 focus:border-green-500"
                        }`}
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
                      {/* Validation messages */}
                      {field.key === "parentEmail" &&
                        formData.parentEmail.trim() !== "" &&
                        !isEmailValid(formData.parentEmail) && (
                          <span className="text-red-500 text-sm">
                            Please enter a valid email address
                          </span>
                        )}
                      {field.key === "parentPhone" &&
                        formData.parentPhone.trim() !== "" &&
                        !isPhoneValid(formData.parentPhone) && (
                          <span className="text-red-500 text-sm">
                            Please enter a valid phone number
                          </span>
                        )}
                      {field.key === "studentAge" &&
                        formData.studentAge.trim() !== "" &&
                        (Number.parseInt(formData.studentAge) <= 0 ||
                          Number.parseInt(formData.studentAge) >= 100) && (
                          <span className="text-red-500 text-sm">
                            Please enter a valid age (1-99)
                          </span>
                        )}
                    </div>
                  ))}

                  {/* Form completion indicator */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Form Progress
                      </span>
                      <span className="text-sm text-gray-500">
                        {
                          Object.values(formData).filter(
                            (value) => value.trim() !== ""
                          ).length
                        }{" "}
                        / {Object.keys(formData).length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            (Object.values(formData).filter(
                              (value) => value.trim() !== ""
                            ).length /
                              Object.keys(formData).length) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Continue button - only visible when form is complete and valid */}
                  {
                    <div className="flex items-center justify-center animate-in fade-in duration-300">
                      <Button
                        type="submit"
                        disabled={!isFormValid()}
                        className="bg-[#3366ff] text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full ml-6 transition-all duration-200 transform cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </div>
                        ) : (
                          "Continue"
                        )}
                      </Button>
                    </div>
                  }

                  {/* Helper text when form is incomplete */}
                  {!isFormComplete() && (
                    <div className="text-center text-gray-500 text-sm">
                      Please fill in all required fields to continue
                    </div>
                  )}
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
