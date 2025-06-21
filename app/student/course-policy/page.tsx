"use client";

import FooterNew from "@/components/footer3";
import StudentWrapper from "@/components/student-wrapper";
import LectureReschedulePopup from "@/components/student/popups/LectureReschedulingPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export default function CoursePolicy() {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const handleAcceptAndProceed = () => {
    if (isAgreed) {
      console.log("Policies accepted, proceeding...");
      // Handle navigation or form submission here
    }
  };

  const toggleAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 p-10">
        <div className="min-h-fit mx-auto w-full bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
              Course Policy
            </h1>

            {/* Policy Content Card */}
            <Card className="mb-8 border border-[#E5E7EB] p-2 rounded-xl">
              <CardContent className="p-6 sm:p-3 bg-[#E5E7EB] rounded-xl scroll-container">
                {/* Greeting */}
                <p className="text-lg mb-6">Dear Parents,</p>

                {/* Welcome Message */}
                <p className="text-base sm:text-lg leading-relaxed mb-8">
                  Welcome to EduNique! We are delighted to have you on board as
                  we embark on your child&#39;s holistic learning journey. To
                  get started, please submit the form on our website along with
                  your preferred payment method to receive a GST receipt. Then,
                  log in to www.learningspace.edunique.in to select class
                  timings and access the content.
                </p>

                {/* Course Policies Section */}
                <div>
                  <h2 className="text-base md:text-lg font-bold mb-6">
                    Course Policies:
                  </h2>

                  <ul className="space-y-6 text-base md:text-lg">
                    {/* Punctuality Policy */}
                    <li>
                      <strong className="font-bold">
                        • Punctuality Matters:&nbsp;
                      </strong>
                      If a class is joined late, a compensatory session will not
                      be provided.
                    </li>

                    {/* Holiday Policy */}
                    <li>
                      <strong className="font-bold">
                        • Holiday Policy:&nbsp;
                      </strong>
                      National holidays will not be compensated, but the total
                      number of monthly classes will be covered.
                    </li>

                    {/* Fee Payment Policy */}
                    <li>
                      <strong className="font-bold">
                        • Timely Fee Payment:&nbsp;
                      </strong>
                      Fees should be paid one week before the current course
                      period ends to ensure a smooth learning experience.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Agreement Section */}
            <div className="space-y-6">
              {/* Checkbox Agreement */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAgreement}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isAgreed
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300 hover:border-blue-400 bg-white"
                  }`}
                >
                  {isAgreed && <Check className="h-4 w-4" />}
                </button>
                <p className="text-base sm:text-lg">
                  I have read and agree to the above policies.
                </p>
              </div>

              {/* Accept Button */}
              <div>
                <Button
                  onClick={handleAcceptAndProceed}
                  disabled={!isAgreed}
                  className={`px-6 py-4 text-base font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isAgreed
                      ? "bg-[#3366FF] hover:bg-blue-600 text-white hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Accept and Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LectureReschedulePopup
        isOpen={true}
        onClose={() => {}}
        onContinue={() => {}}
      />

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
