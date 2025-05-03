"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function SelfAssesIntro() {

  const handleStartTest = () => {
    redirect("/page3/test");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-300 p-4">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-6">
          5-level DMIT (Dermatoglyphics Multiple Intelligence Test) and skill
          assessment
        </h1>

        <p className="text-gray-800 mb-10 max-w-2xl mx-auto">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-green-200 text-black px-4 py-2 rounded-md">
            Total Questions : 100
          </div>
          <div className="bg-blue-200 text-black px-4 py-2 rounded-md">
            Total Mark : 100
          </div>
          <div className="bg-yellow-200 text-black px-4 py-2 rounded-md">
            Time : 0h:30m :10s
          </div>
        </div>

        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-xl rounded-md w-64"
          onClick={handleStartTest}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
