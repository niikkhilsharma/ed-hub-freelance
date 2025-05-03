"use client";

import { User, Clock, Monitor, DollarSign } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import Footer from "@/components/footer";

const features = [
  {
    icon: <User className="text-white w-5 h-5" />,
    bgColor: "bg-blue-500",
    title: "One on One Monitor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <Clock className="text-white w-5 h-5" />,
    bgColor: "bg-lime-500",
    title: "24/7 Mentor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <Monitor className="text-white w-5 h-5" />,
    bgColor: "bg-pink-500",
    title: "Whiteboard",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <DollarSign className="text-white w-5 h-5" />,
    bgColor: "bg-orange-500",
    title: "Affordable Price",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];
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
        <div className="bg-[#f9326f] text-white min-h-40 px-6 py-8 md:px-16 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-7xl relative">
            {/* Text Content */}
            <div className="space-y-6 z-10">
              <h2 className="text-3xl lg:text-4xl font-bold leading-snug max-w-xl">
                Eduport education theme, built specifically for the education
                centers which is dedicated to teaching and involve learners.
              </h2>
            </div>

            {/* Image Layout */}
            <div className="relative w-full h-full flex justify-around items-center">
              {/* Main Image */}
              <Image
                src="/student/about/image1.png"
                alt="Classroom"
                width={70}
                height={70}
                priority
                className=" right-[200px] left-0 rounded-2xl shadow-xl w-[150px] h-[200px] object-cover"
              />

              {/* Top Right Image */}
              <Image
                src="/student/about/image2.png"
                alt="Student"
                width={150}
                height={150}
                priority
                className=" top-0 right-0 rounded-2xl shadow-xl w-[150px] h-[200px] object-cover"
              />

              {/* Bottom Right Image */}
              <Image
                src="/student/about/image3.png"
                alt="Teacher"
                width={160}
                height={160}
                priority
                className=" bottom-0 right-2 rounded-2xl shadow-xl w-[150px] h-[200px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container min-h-7xl max-w-7xl mx-auto py-12 px-6 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                About Us
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
              <div className="space-y-4">
                {[
                  "Setup and installation takes less time",
                  "Professional and easy to use software",
                  "Perfect for any device with pixel-perfect design",
                  "Setup and installation too fast",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle
                      className="text-teal-500 mt-1 flex-shrink-0 animate-pulse"
                      size={22}
                    />
                    <p className="text-gray-700 text-left">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/student/about/image.png" // Replace with your actual image
                alt="About illustration"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>

        <section className="pb-20 px-4 lg:px-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
            Benefits of online Education
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>

<div className="flex items-center justify-center">

          <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#f5f5f5] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
</div>
</div>
        </section>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
