"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from '@/components/b2c-admin/Navbar'
import Link from "next/link";
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
interface GeneralFilterOption {
	id: string
	label: string
}
import {
	FiSearch,
	FiFilter,
	FiChevronDown,
	FiMinusCircle, 
} from 'react-icons/fi'

export default function SecurityCoursePage() {
  const [searchTerm, setSearchTerm] = useState('')
  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };



const GeneralFilterButton: React.FC<{
  filter: GeneralFilterOption
  onClick: () => void
}> = ({ filter, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-gray-300 ${INPUT_BG_FILTERS} text-black rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}>
    <span>{filter.label}</span>
    <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
  </button>
)

const sampleGeneralFilters: GeneralFilterOption[] = [
	{ id: 'filter1', label: 'Filter 1' },
	{ id: 'filter2', label: 'Filter 2' },
	{ id: 'filter3', label: 'Filter 3' },
]
  const courses = [
    {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
   {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
   {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
  {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
     {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
     {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
     {
      image: "/personality.png",
      name: "Course Name",
      domain: 'Self Dev',
     
    },
  ];
const ACCENT_PINK = '#FF3366' // For active Class/Batch/Group tabs and remove icon
const PRIMARY_BLUE = '#3366FF' // Placeholder if needed for other active states
const INPUT_BG_SEARCH = 'bg-white'
const INPUT_BG_FILTERS = 'bg-gray-50' // Background for filter dropdowns
const STUDENT_ITEM_BG = 'bg-[#F9FAFB]'
const ICON_BUTTON_BG_LIGHT_PINK = 'bg-[#F3F4F6]'
const ICON_BUTTON_TEXT_PINK = `text-[${ACCENT_PINK}]`
const ICON_BUTTON_BG_LIGHT_GRAY = 'bg-gray-100'
  return (
    <>
      <Navbar/>
      <div className="bg-[#eeeeee]   py-6 sm:py-8 lg:py-10 min-h-screen ">
       

        <main className="p-2 max-w-[90rem] sm:p-6  mb-32 sm:mb-[320px]  mx-auto bg-white my-6  rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="relative flex-grow">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2  h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
                    />
                  </div>
          
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <button
                      onClick={() => alert('Main filter icon clicked.')}
                      className={`p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 text-[${ACCENT_PINK}] flex-shrink-0 transition-colors`}
                      aria-label="Open main filters">
                      <FiFilter className="w-5 h-5 " strokeWidth={2} />
                    </button>
                    {sampleGeneralFilters.map(filter => (
                      <GeneralFilterButton key={filter.id} filter={filter} onClick={() => alert(`${filter.label} clicked.`)} />
                    ))}
                  </div>
                </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 py-4">
  {courses.map((course, index) => (
     <Link href="./course-login-activity">
    <div
      key={index}
      className="flex flex-col w-full max-h-[330px] gap-3 px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl shadow-sm"
    >
      {/* Image section */}
      {/* Removed fixed height classes h-48 and sm:h-52 */}
      {/* Added aspect-[3/2] to maintain a consistent 3:2 aspect ratio for the image container */}
      <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden">
        <Image
          src={course.image}
          // These width/height are hints for optimization/layout aspect ratio calculation,
          // but the CSS aspect-[3/2] on the parent overrides the container's height.
          width={300}
          height={200}
          alt={course.name}
          // w-full h-full object-cover ensures the image fills the container
          // while maintaining its own aspect ratio and cropping if needed.
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col gap-1 px-1 text-black">
        <h2 className="font-bold text-lg">{course.name}</h2>
        <h3 className="text-sm font-medium">
          Domain:{" "}
          <span className="text-[#6B7280]">{course.domain}</span>
        </h3>
      </div>
    </div>
    </Link>
  ))}
</div>


        </main>

        <Footer />
      </div>
    </>
  );
}
