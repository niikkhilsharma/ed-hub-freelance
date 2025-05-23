"use client";

import { useState } from "react";
import { TestDetailsForm } from "@/components/page3/create-test/test-details-form";
import { TestQuestionnaireForm } from "@/components/page3/create-test/test-questionnaire-form";
import { TestReview } from "@/components/page3/create-test/test-review";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateTestPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleCancel = () => {
    router.push("/tests");
  };

  const handleSave = () => {
    // Save logic here
    router.push("/tests");
  };

  const handlePublish = () => {
    // Publish logic here
    router.push("/tests");
  };

  const testData = {
    title: "C# Language Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
    scheduledFor: "12/04/2025, 06:00 AM",
    batch: "Batch 1",
    time: "30 Minutes",
    totalPoints: 100,
    passPoints: 70,
    expiryDate: "15-may-2007",
  };

  const questions = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      options: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      ],
      correctAnswers: "Option 1, 2, 3",
      points: 4,
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      options: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      ],
      correctAnswers: "Option 1, 2, 3",
      points: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container shadow-xl bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="p-6">
          <div className="mb-6 flex justify-between border-b-2 border-gray-200 pb-4">
            <Button
              variant="ghost"
              className="flex text-lg text-black items-center font-medium"
              onClick={() => router.push("/tests")}
            >
              <ArrowLeft className="h-5 w-5 " />
              Create Test
            </Button>
            {step === 1 && (
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <Button
                    className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 px-6 py-5"
                    onClick={() => router.push("/tests/create/manual")}
                  >
                    Create Test Manually
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/tests/create/ai")}
                    className="text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 px-6 py-5"
                  >
                    AI- Generate Test
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mb-8 bg-white rounded-lg p-4">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${"border-2 border-black font-medium text-black"}`}
              >
                1
              </div>
              <div className="mx-2 text-sm font-medium">Test Details</div>
              {step >= 2 && (
                <div className="flex items-center">
                  <div
                    className={`w-12 h-[1px] mr-2 ${"bg-pink-500"}`}
                  ></div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${"border-pink-500 border-2 font-medium text-pink-500"}`}
                  >
                    2
                  </div>
                  <div className="ml-2 text-sm font-medium text-pink-500">
                    Test Questionnaire
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            {step === 1 && <TestDetailsForm onNext={handleNext} />}

            {step === 2 && (
              <TestQuestionnaireForm
                onPrevious={handlePrevious}
                onSave={handleSave}
                onReview={() => setStep(3)}
              />
            )}

            {step === 3 && (
              <TestReview
                testData={testData}
                questions={questions}
                onEdit={() => setStep(1)}
                onCancel={handleCancel}
                onSave={handleSave}
                onPublish={handlePublish}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
