"use client";

import Header from "@/components/layout/TeacherB2CHeader"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed
import Image from "next/image";

import AttendanceForm from '@/components/teacher-b2c/progress-form/components'
import BackButton from "@/components/common-components/BackButton";
import TeacherB2CWrapper from "../common-components/TeacherB2CPageWrapper";
import DailyLogSavedPopup from "@/app/b2c-teacher/ct-pop-ups/popupComponent/DailySaved";
import { useState } from "react";

// Main File Management Content Component

export default function StudentSubmittedPapersPage() {



  const students = new Array(4).fill({
    name: "Student Name",
    grade: "Level / Grade",
    image: "/student-avatar-1.png", // place an avatar image in public folder
  });

  const [dailyLog, setDailyLog] = useState(false);

  return (
    <>
      <Header activeState="Dashboard" />
      <BackButton Heading="Add Daily Progress" />
      <TeacherB2CWrapper>

        <main className="flex-grow   px-2 py-4 sm:p-6">
          <div className="space-y-4 mt-2 rounded-2xl p-4 bg-white">

            <div className="space-y-6">
              <AttendanceForm />

              {/* Section: Test Name */}
              <div className="  space-y-4">
                <h2 className="text-md  rounded-2xl font-semibold text-gray-800 border bg-[#E5E7EB] px-4 py-4">
                  Test Name
                </h2>

                {students.map((student, index) => (
                  <StudentCard key={`test-${index}`} student={student} />
                ))}
              </div>

              {/* Section: Quiz Name */}
              <div className="space-y-4 rounded-2xl">
                <h2 className="text-md  rounded-2xl font-semibold text-gray-800 border bg-[#E5E7EB] px-4 py-4">
                  Quiz Name
                </h2>

                {students.map((student, index) => (
                  <StudentCard key={`quiz-${index}`} student={student} />
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center">
              <button onClick={() => setDailyLog(true)} className="bg-[#3366ff] text-white px-6 py-2 rounded-full ">
                Save Log
              </button>
            </div>
          </div>
        </main>

      </TeacherB2CWrapper>

      <Footer />
      <DailyLogSavedPopup isOpen={dailyLog} onClose={() => setDailyLog(false)}/>
    </>
  );
}

function StudentCard({ student }: { student: any }) {
  return (
    <div className="flex items-center justify-between bg-[#F9FAFB] px-2 py-2 rounded-2xl shadow-sm border border-[#B0B0B0]">
      <div className="flex items-center space-x-2">
        <Image
          src={student.image}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-md w-20 h-20"
        />
        <div>
          <p className="font-medium text-xl text-black">{student.name}</p>
          <p className="text-md text-[#6B7280]">{student.grade}</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter Marks"
        className="border  w-40 border-[#D5D5D5] px-4 py-2 bg-[#F9F5FB] rounded-full  text-md "
      />
    </div>
  );
}
