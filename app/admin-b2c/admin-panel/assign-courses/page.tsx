"use client";

import { useState } from "react";
import GoBack from "@/components/principal/goback";// Adjust this path if needed

export default function AssignCourses() {
  const [activeTab, setActiveTab] = useState("students");

  const tabClasses = (tab: string) =>
    `px-3 py-1 rounded-xl text-sm sm:text-base font-medium transition ${
      activeTab === tab
        ? "bg-[#8DD9B3] text-white"
        : "bg-white text-gray-800 hover:bg-blue-100"
    }`;

  return (
    <div className="bg-white max-w-screen-2xl mx-auto my-2 p-6 rounded-2xl shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <GoBack GoBackHeading="Assign Courses" />
        
        <div className="flex gap-4 sm:gap-6 p-2 border border-[#E5E7EB] rounded-2xl">
          <button
            className={tabClasses("students")}
            onClick={() => setActiveTab("students")}
          >
            For Students
          </button>
          <button
            className={tabClasses("teachers")}
            onClick={() => setActiveTab("teachers")}
          >
            For Teachers
          </button>
        </div>
      </div>
    </div>
  );
}
