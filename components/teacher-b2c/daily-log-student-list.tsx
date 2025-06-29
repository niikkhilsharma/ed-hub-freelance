"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { FiArrowLeft,FiFilter } from "react-icons/fi";

import {  FaSearch } from 'react-icons/fa';


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
     const [activeBatch, setActiveBatch] = useState(1);
  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };
 const batches = [1, 2, 3, 4, 5];
  const dates = [
    '16 / 6 / 25', '17 / 6 / 25', '18 / 6 / 25', '19 / 6 / 25', '20 / 6 / 25',
    '21 / 6 / 25', '22 / 6 / 25', '23 / 6 / 25', '24 / 6 / 25'
  ];
  
  return (
    <>
      <Header user={headerUser} />
      <div className="bg-[#eeeeee]  min-h-screen flex flex-col">
        <div className="   bg-white">
          <div className="flex items-center py-4 max-w-[96rem] mx-auto gap-2 ">
            <button
              className="p-1.5 text-blacl hover:text-[#3366FF] focus:outline-none rounded-md"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            {/* You can make this title dynamic based on context */}
            <h1 className="text-lg sm:text-2xl font-bold text-[#FF3366]">
               Batch Daily Log 
            </h1>
          </div>
        </div>

        <main className="p-2  w-full sm:p-4 flex flex-col  max-w-[96rem]  mx-auto bg-white my-6  rounded-2xl">
         

        <div className="flex justify-center gap-6 mb-4 px-4 border border-[#E5E7EB] p-4 rounded-3xl w-full ">
          {batches.map((batch) => (
            <button
              key={batch}
              className={`px-2 py-1 rounded-2xl font-semibold  text-sm sm:text-lg ${
                activeBatch === batch
                  ? 'bg-[#FF3366] text-white'
                  : 'text-[#6B7280] hover:text-black'
              }`}
              onClick={() => setActiveBatch(batch)}
            >
              Batch {batch}
            </button>
          ))}
        </div>

        {/* Filter/Search Row */}
        <div className="flex py-6 flex-wrap gap-3 items-center px-4 pb-4">
          <div className="flex  w-1/2 items-center gap-2 border-[2px] border-[#6B7280] rounded-full px-3 py-2 bg-white">
            <FaSearch className="text-black " />
            <input
              type="text"
              placeholder="Search"
              className=" text-[#6B7280] text-lg bg-transparent"
            />
          </div>

          <FiFilter className="text-[#FF3366] w-6 h-6 text-lg" />

          <select className="border border-[#E5E7EB] text-lg rounded-xl px-1 py-1 bg-[#F9FAFB]">
            <option>Filter 1</option>
          </select>
          <select className="border border-[#E5E7EB] text-lg rounded-xl px-1 py-1 bg-[#F9FAFB]">
            <option>Filter 2</option>
          </select>
          <select className="border border-[#E5E7EB] text-lg rounded-xl px-1 py-1 bg-[#F9FAFB]">
            <option>Filter 3</option>
          </select>

          <button className=" border border-[#E5E7EB] text-lg  px-2 py-1 bg-[#F9FAFB] rounded-full ">
            Edit Batch Name 
          </button>
          <button className="px-3 py-2 rounded-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700">
            Add Daily Progress
          </button>
        </div>

        {/* Date Rows */}
        <div className="flex flex-col gap-4 mt-4 px-4 pb-6">
          {dates.map((date, idx) => (
            <div
              key={idx}
              className="bg-[#F9FAFB] rounded-full px-4 py-2 text-black text-xl border border-[#D0D0D0] font-medium "
            >
              {date}
            </div>
          ))}
        </div>
      
         
        </main>

        <Footer />
      </div>
    </>
  );
}
