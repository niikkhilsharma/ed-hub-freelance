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

export default function ManageCardPage() {
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
      batches: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batches: 2,
      students: 25,
    },
    {
      image: "/personality.png",
      name: "Course Name",
      batches: 2,
      students: 25,
    },


  ];
  return (
    <>
      <Header user={headerUser} />
      <div className="bg-[#eeeeee]  min-h-screen flex flex-col">
        <div className=" px-22  bg-white py-4 flex justify-between">
          <div className="flex items-center gap-2 ">
            <button
              className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            {/* You can make this title dynamic based on context */}
            <h1 className="text-lg sm:text-xl font-bold text-[#FF3366]">
              Manage Reviews
            </h1>
          </div>
        </div>

        <main className="p-4  bg-white my-4 lg:my-6 mx-2 lg:mx-8  sm:mx-4 rounded-2xl min-h-screen">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-items-center">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl "
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={course.image}
                    width={260}
                    height={200}
                    alt={course.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 text-black">
                  <h2 className="font-bold text-lg">{course.name}</h2>
                  <h3 className="text-sm font-medium text-blacl">
                    No. of Batch:{" "}
                    <span className="text-[#6B7280]">{course.batches}</span>
                  </h3>
                  <h3 className="text-sm font-medium text-black">
                    No. of Students: <span className="text-[#6B7280]">{course.students}</span>
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
