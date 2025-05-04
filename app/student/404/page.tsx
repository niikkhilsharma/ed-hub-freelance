"use client";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/footer";
export default function CourseDetail() {
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10 pb-40">
        {/* headers */}
        <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">404 Page</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">404 Page</div>
          </div>
        </div>

        <div className="container min-h-[60vh] max-w-7xl mx-auto py-6 px-6 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold">
                SORRY, PAGE NOT FOUND!
              </h1>
              <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white">
                Back to Home
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/student/404/404.png" // Replace with your actual image path
                alt="404"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
