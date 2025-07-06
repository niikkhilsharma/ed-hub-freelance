// app/components/CourseSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const courseSections = [
  {
    title: "Active Courses",
    courses: Array(4).fill({}),
  },
  {
    title: "Upcoming Courses",
    courses: Array(4).fill({}),
  },
  {
    title: "Previous Demos",
    courses: Array(4).fill({}),
  },
];

const CourseCard = () => (
  <div className="bg-white max-h-[291px]  rounded-3xl shadow-sm p-2 w-full max-w-[330px]">
    <div className="relative w-full h-44 rounded-2xl overflow-hidden">
      <Image
        src="/personality.png" // Place your image in public folder
        alt="Course"
        fill
        className="object-cover"
      />
      <div className="absolute top-2 right-2 bg-[#faf9fb] px-2 py-2 rounded-xl sm:text-sm text-xs font-semibold flex items-center gap-1 shadow">
        <span className="text-[#ffcc00]">4.2</span> <AiFillStar className="text-[#ffcc00]" />
      </div>
    </div>
    <p className="text-left font-semibold text-sm mt-2">Course Name</p>
  </div>
);

const CourseSection = () => {
  return (
    <div className=" max-w-[93rem] px-4 py-6 overflow-x-auto  mx-auto">
      {courseSections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-[#ff3366] text-lg font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto gap-4">
            {section.courses.map((_, idx) => (
              <CourseCard key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;
