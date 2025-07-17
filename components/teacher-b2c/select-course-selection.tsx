"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

// --- Recording Card Component ---
interface Course {
  id: string;
  imageSrc: string;
  // e.g., "PERSONALITY DEVELOPMENT"
  courseName: string;
  noofbatch: string;
  noofBtudents: string; // e.g., "Class"
  // e.g., "00 hrs : 00 mins"
}

export default function CourseCardPage() {
  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };

  const courses = [
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batch: 2,
      students: 25,
    },
  ];
  return (
    <>
      <Header user={headerUser} />
      <div className="bg-[#eeeeee]  min-h-screen flex flex-col">
        <div className="   bg-white ">
          <div className="flex items-center  py-4 max-w-[96rem] mx-auto gap-2 ">
            <button
              className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            {/* You can make this title dynamic based on context */}
            <h1 className="text-lg sm:text-xl font-bold text-[#FF3366]">
              Daily Log Manager
            </h1>
          </div>
        </div>

        <main className="p-2 max-w-[93rem] sm:p-6 lg:p-8  mx-auto bg-white m-6  rounded-2xl">
         <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
  {courses.map((course, index) => (
    <div
      key={index}
      className="flex flex-col  sm:w-[320px] md:w-[360px] lg:w-[400px] min-h-[340px] gap-3 px-3 py-3 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl shadow-sm"
    >
      {/* Image section */}
      <div className="h-48 rounded-xl overflow-hidden">
        <Image
          src={course.image}
          width={300}
          height={200}
          alt={course.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col gap-1 px-1 text-black">
        <h2 className="font-bold text-lg">{course.name}</h2>
        <h3 className="text-sm text-black">
          No. of Batch:{" "}
          <span className="text-[#6B7280]">{course.batch}</span>
        </h3>
        <h3 className="text-sm font-medium">
          No. of Students:{" "}
          <span className="text-[#6B7280]">{course.students}</span>
        </h3>
      </div>
    </div>
  ))}
</div>

        </main>

        <Footer />
      </div>
    </>
  );
}
