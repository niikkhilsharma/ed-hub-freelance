"use client";

import { User, Clock, Monitor, DollarSign } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import Footer from "@/components/footer";
import FooterNew from "@/components/footer3";

const features = [
  {
    icon: <User className="text-[#FF892A] w-16 h-16" />,
    bgColor: "bg-[#FFC79A]",
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <Clock className="text-[#3366FF] w-16 h-16" />,
    bgColor: "bg-[#99DEFF]",
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <Monitor className="text-[#FF3366] w-16 h-16" />,
    bgColor: "bg-[#FF99B7]",
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <DollarSign className="text-[#07733D] w-16 h-16" />,
    bgColor: "bg-[#8DD9B3]",
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];
export default function CourseDetail() {
  return (
    <StudentWrapper blue>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "500px",
          filter: "brightness(1.1) blur(0.1px)",
          opacity: 0.8,
        }}
      ></div>

      <div className="bg-[#FF3366]/75 text-white min-h-[calc(100vh-68px)] px-16 py-8 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 w-full items-center">
  {/* Left Content */}
  <div className="space-y-6 text-center lg:text-left">
    <h1 className="font-bold text-3xl lg:text-4xl leading-tight">
      Eduport education theme, built specifically for the education
      centers which is dedicated to teaching and involve learners.
    </h1>
    <p className="font-medium text-md opacity-90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
      Ut eget egestas risus. Mauris sed justo quam. Sed eget porttitor
      metus. Nam purus arcu, congue sed mi sit amet, bibendum imperdiet
      mauris. Nunc luctus quis sem volutpat lobortis. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Donec non augue
      lectus.
    </p>
  </div>

  {/* Right Images */}
  <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
    {/* Main Image */}
    <div className="w-full">
      <Image
        src="/student/about/image1-top.png"
        alt="Main Visual"
        width={500}
        height={300}
        className="w-full h-auto object-cover rounded-2xl shadow-md"
        priority
      />
    </div>

    {/* Two Side-by-Side Images */}
    <div className="flex flex-col sm:flex-row gap-4">
      <Image
        src="/student/about/image2-top.png"
        alt="Secondary 1"
        width={240}
        height={160}
        className="w-full sm:w-1/2 h-auto object-cover rounded-2xl shadow-md"
        priority
      />
      <Image
        src="/student/about/image3-top.png"
        alt="Secondary 2"
        width={240}
        height={160}
        className="w-full sm:w-1/2 h-auto object-cover rounded-2xl shadow-md"
        priority
      />
    </div>
  </div>
</div>

      </div>

      <div className="relative z-10 pb-55 bg-white">
        {/* headers */}
        <div className="container mx-auto py-16 flex flex-col gap-16 px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start rounded-2xl bg-[#F9FAFB] p-6 border shadow">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#3366FF]">
                About Us
              </h1>
              <p className="text-black text-md max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="space-y-4">
                {[
                  "Setup and installation takes less time",
                  "Professional and easy to use software",
                  "Perfect for any device with pixel-perfect design",
                  "Setup and installation too fast",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Image
                      src="/student/home/tick2.png"
                      alt="tick2"
                      height={22}
                      width={22}
                      priority
                      className="object-cover"
                    />
                    <p className="text-gray-700 text-left">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/student/about/image.png"
                alt="About illustration"
                width={500}
                height={500}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>
          </div>

          <section className="px-4 mx-auto lg:px-20 text-center">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#FF3366] mb-4">
              Benefits of online Education
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto mb-10 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              magna ac nisl dignissim condimentum eu ac ante. Ut nec dui
              volutpat, tristique nulla quis, luctus justo. Sed vel ipsum magna.
            </p>

            <div className="flex items-center justify-center">
              <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-[#f5f5f5] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
                  >
                    <CardContent className="p-2 rounded-2xl space-y-2">
                      <div
                        className={`w-20 h-20 mb-6 rounded-xl flex items-center justify-center ${feature.bgColor}`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-md">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <FooterNew />
    </StudentWrapper>
  );
}
