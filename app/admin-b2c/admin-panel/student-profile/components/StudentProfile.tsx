import PrincipalChatrsReport from '@/components/principal/principal-charts-report';
import { IoMdSettings } from "react-icons/io";
import React from 'react'
import Image from 'next/image';
import { PiBookOpenTextLight } from 'react-icons/pi';

import { FaStar } from 'react-icons/fa';
import StudentPanel from './StudentControlPanel';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

interface CourseCardProps {
  image: string;
  rating: number;
  courseName: string;
  teacherName: string;
  teacherRole: string;
  teacherImage: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  rating,
  courseName,
  teacherName,
  teacherRole,
  teacherImage,
}) => {
  return (
    <div className="w-full rounded-2xl bg-white border border-gray-200">
      <div className="relative w-full h-56 p-2 rounded-2xl">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="Course Image"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute top-2 right-2 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            {rating} <FaStar className="text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-base font-semibold text-black">{courseName}</h2>
        <div className="flex items-center gap-3 mt-2">
          <Image
            src={teacherImage}
            alt="Teacher"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-black">{teacherName}</h3>
            <p className="text-xs text-pink-500">{teacherRole}</p>
          </div>
          <div className="ml-auto flex items-center gap-0.5 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="w-3.5 h-3.5" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentProfile = () => {
  const PALETTE = {
    GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
    GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
    PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
    PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
    PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
    PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

    ACCENT_PINK: "#FF3366", // Tags, highlights
    ACCENT_BLUE: "#0DC6FD", // Line chart, progress
    ACCENT_PURPLE: "#AC50F5", // Line chart, progress
    ACCENT_RED: "#FF4A69", // Failed status

    BG_PAGE: "#F3F4F6", // Main page background
    BORDER_GREY: "#B0B0B0", // General borders for cards
    TEXT_DARK: "#1F2937", // For primary text
    TEXT_MEDIUM: "#6B7280", // For secondary text
    TEXT_LIGHT: "#9CA3AF", // For tertiary text
    WHITE_CARD: "#FFFFFF",
  };
  const keyFocusAreas = [
    "Academics",
    "Personality Development",
    "Brain Development",
  ];
  type Person = {
    name: string;
    subject: string;
    image: string;
  };
  const Teachers: Person[] = Array.from({ length: 4 }, () => ({
    name: "Name",
    subject: "Subject",
    image: "/principal/manage.jpg",
  }));

  const courses = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: '/principal/principal-student-progress.png', // update path
    rating: 4.2,
    courseName: 'Course Name',
    teacherName: 'Mr. Ranvir Ahuja',
    teacherRole: 'Teacher',
    teacherImage: '/teacher-avatar-3.jpg', // update path
  }));
  return (
    <>
      <div className='w-full'>

        <div className="p-2 md:p-4 mt-4 rounded-2xl mx-2 md:mx-5 gap-6 bg-[url('/principal/dashboard-pattern.png')] bg-repeat bg-[length:650px_650px]">

          <div
            className="rounded-2xl"
            style={{
              borderColor: PALETTE.BORDER_GREY,
            }}
          >
            <div className="flex flex-wrap border gap-4 w-full justify-between bg-white rounded-2xl items-center px-4 py-3">
                <Image
                  src="/teacher-b2b/profile2.png"
                  alt="Shlok Agheda"
                  width={72}
                  height={72}
                  className="rounded-full h-24 w-24 flex-shrink-0"
                />
                <div className="flex-grow relative">
                  <div className="relative  inline-block">
                    <div className="rounded-full top-0 -sm:top-[100%] border border-gray-200 p-1 bg-gray-100 absolute -right-12"><IoSettingsOutline size={20} /></div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: PALETTE.TEXT_DARK }}
                    >
                      Student Name
                    </h2>

                    <div className="flex flex-wrap items-center gap-1 mt-2">
                      <span
                        className="text-xs font-medium px-2.5 py-1.5 rounded-l-full"
                        style={{
                          backgroundColor: PALETTE.ACCENT_PINK,
                          color: PALETTE.WHITE_CARD,
                        }}
                      >
                        Course Name
                      </span>
                      <span
                        className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full"
                        style={{
                          backgroundColor: PALETTE.ACCENT_PINK,
                          color: PALETTE.WHITE_CARD,
                        }}
                      >
                        Course Name
                      </span>

                    </div>
                  </div>
                </div>
              <div className="flex whitespace-nowrap gap-4 md:gap-6 ">
                <div className="text-base  text-left space-y-0.5 text-black">
                  <p><strong className='font-medium'>City:</strong>{" "}Mumbai</p>
                  <p><strong className='font-medium'>State:</strong>{" "}Maharashtra</p>
                </div>
                <div className="text-base text-left space-y-0.5 text-black">
                  <p><strong className='font-medium'>Gender:</strong>{" "}Male</p>
                  <p><strong className='font-medium'>DOB:</strong>{" "}15 June 2015</p>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-2 px-4 border bg-white mt-2 rounded-2xl">
              <p
                className="text-sm font-bold mb-3"
                style={{ color: PALETTE.TEXT_DARK }}
              >
                Key Focus Area
              </p>
              <div className="flex flex-wrap gap-4">
                {keyFocusAreas.map((area) => (
                  <button
                    key={area}
                    className="text-xs px-2 py-2.5 text-black rounded-full border"
                    style={{
                      backgroundColor: "#F3F4F6",
                      borderColor: PALETTE.BORDER_GREY,
                    }}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full my-4 rounded-2xl border border-gray-200 p-4 md:px-6 bg-white">
              {/* Heading */}
              <p className="text-sm font-semibold mb-4">Parent / Guardian Details</p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Left: Details */}
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-500 bg-gray-50">
                    Name
                  </div>
                  <div className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-500 bg-gray-50">
                    +91 0000000000
                  </div>
                  <div className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-500 bg-gray-50">
                    example@gm.com
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50">
                    <AiOutlineStar className="text-yellow-500 text-lg" />
                    Give Suggestion
                  </button>
                  <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50">
                    <HiOutlineMail className="text-red-500 text-lg" />
                    Mail to Parents
                  </button>
                  <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50">
                    <PiBookOpenTextLight className="text-blue-500 text-lg" />
                    Allot a Course
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white px-2 sm:px-4 pt-2 pb-1 mt-4 rounded-2xl">
              <h2 className='my-2 text-sm font-bold'>Assigned Teachers</h2>
              <div className="flex flex-wrap gap-4 items-stretch">
                {Teachers.map((card, index) => (
                  <div className="py-2 md:pr-8 pr-2 pl-2 bg-gray-100 flex items-center gap-4 rounded-2xl border-gray-200" key={index}>
                    <div className="relative w-16 h-16 md:w-18 md:h-18">
                      <Image className='rounded-2xl object-cover' src={card.image} fill alt={card.name} />
                    </div>
                    <div className="">
                      <h2 className='font-semibold'>{card.name}</h2>
                      <p className={`text-[#ff3366] text-sm`}>{card.subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <StudentPanel />
          </div>
        </div>
      </div>
      <div className="my-2 mx-4 rounded-2xl bg-[#f1f1f2] border px-3 py-2">
        <h2 className={`text-[${PALETTE.ACCENT_PINK}] font-bold text-m`}>Active Courses</h2>
        <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 ">
          {courses.map((course, index) => (
            <div key={index} className="min-w-[325px]">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
      <PrincipalChatrsReport />
    </>
  )
}

export default StudentProfile;