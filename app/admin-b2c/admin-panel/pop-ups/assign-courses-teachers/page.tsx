"use client";

import { useState } from "react";
import GoBack from "@/components/principal/goback"; // Adjust this path if needed
import TeacherForm from "@/components/b2c-admin/assign-courses-teacher2";

export default function AssignCourses() {
  

 

  return (
    <div className="bg-white max-w-screen-2xl mx-auto my-2 p-6 rounded-2xl shadow">
      {/* Header Section */}
      <div className="flex mb-8 flex-col sm:flex-row justify-between items-start sm:items-center">
        <GoBack GoBackHeading=" Schedule Demo" />

        {/* Tab Switcher */}
        <div className=" p-1 border border-[#E5E7EB]  rounded-2xl">
          <button className="p-2 bg-[#8DD9B3] text-white rounded-2xl"
          >
            For Teachers
          </button>
        </div>
      </div>

       <TeacherForm />
    </div>
  );
}
