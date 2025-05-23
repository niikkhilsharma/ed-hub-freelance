"use client";

import { useState } from "react";
import { QuizDetailsForm } from "@/components/page3/create-quiz/quiz-details-form";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateTestPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    router.push("/worksheets");
  };

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container shadow-xl bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="p-6">
          <div className="mb-6 flex justify-start border-b-2 border-gray-200 pb-4">
            <Button
              variant="ghost"
              className="flex text-lg text-black items-center font-medium"
              onClick={() => router.push("/create")}
            >
              <ArrowLeft className="h-5 w-5 " />
              Add Quiz
            </Button>
          </div>
          <div className="mt-8">
            <QuizDetailsForm onNext={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
