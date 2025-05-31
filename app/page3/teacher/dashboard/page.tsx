"use client";

import { UpcomingClass } from "@/components/page3/upcoming-classes";
import { ClassCompletionProgress } from "@/components/page3/class-completion-progress";
import { StudentsEnrolledTable } from "@/components/page3/students-enrolled-table";
import { Pedagogy } from "@/components/page3/pedagogy";
import { Curriculum } from "@/components/page3/curriculum";
import { Timetable } from "@/components/page3/timetable";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const students = [
  {
    id: "1",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "2",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "3",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "4",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "5",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "6",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
  {
    id: "7",
    name: "Nguyen, Shane",
    avatar: "/placeholder-user.png",
    date: "10 March 2025",
    exam1: 50,
    exam2: 50,
    total: "30/50",
  },
];

const pedagogyItems = [
  {
    type: "video" as const,
    title: "What's is Webflow?",
    duration: "07:31",
  },
  {
    type: "video" as const,
    title: "Sign up in Webflow",
    duration: "07:31",
  },
  {
    type: "document" as const,
    title: "Webflow Terms & Conditions",
    size: "5.3 MB",
  },
  {
    type: "video" as const,
    title: "Teaser of Webflow",
    duration: "07:31",
  },
  {
    type: "document" as const,
    title: "Practice Project",
    size: "5.3 MB",
  },
  {
    type: "video" as const,
    title: "Teaser of Webflow",
    duration: "07:31",
  },
  {
    type: "document" as const,
    title: "Practice Project",
    size: "5.3 MB",
  },
  {
    type: "video" as const,
    title: "Teaser of Webflow",
    duration: "07:31",
  },
  {
    type: "document" as const,
    title: "Practice Project",
    size: "5.3 MB",
  },
  {
    type: "video" as const,
    title: "Teaser of Webflow",
    duration: "07:31",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-7xl py-6 px-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          <div className="md:col-span-5">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="relative">
                    <Image
                      src="/page3/dashboard/profile.png"
                      alt="Rajesh Joshi"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold">Rajesh Joshi</h2>
                    <p className="text-sm text-gray-600">
                      Designation: Sr.Teacher
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < 4 ? "#FFD700" : "none"}
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">
                        4 Star Rating
                      </span>
                    </div>
                    <div className="mt-2">
                      <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-4 py-1 text-sm">
                        Group A
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 ml-8">
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <p className="whitespace-nowrap">
                      <span className="font-medium">DOB:</span> 15-Jun-2015
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium">Experience:</span> 8 Years
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium">Qualification:</span>{" "}
                      janecooper@gmail.com
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium">Qualification:</span>{" "}
                      janecooper@gmail.com
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium">School Name:</span> Little
                      Flowers
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium">Unavailable On:</span>{" "}
                      Saturdays
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/page3/dashboard/video.png"
                    alt="Teacher Video"
                    width={240}
                    height={100}
                    className="rounded-lg mb-2 object-cover"
                  />
                  <p className="text-sm font-medium">Demo Video</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex space-x-1 border-2 border-blue-500 rounded-lg w-fit">
                <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md">
                  Classes Allocated
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md">
                  Class A
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md">
                  Class B
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md">
                  Class C
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <UpcomingClass time="10:30" title="Basics of C#" classNumber="1" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-pink-500"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h2 className="text-lg font-medium text-black">
            My Classes{" "}
            <span className="text-pink-500 text-lg rounded-full px-2 py-0.5 ml-1">
              (8)
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="border-b mb-4">
            <div className="flex">
              <button className="px-6 py-3 text-sm font-medium border-b-2 border-pink-500 text-pink-500">
                Class A
              </button>
              <button className="px-6 py-3 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-900">
                Class B
              </button>
              <button className="px-6 py-3 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-900">
                Class 3
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <ClassCompletionProgress
                  percentage={60}
                  studentsEnrolled={20}
                  averageScores="75/100"
                />
              </div>
              <div className="mt-6">
                <StudentsEnrolledTable students={students} />
              </div>
            </div>
            <div>
              <Pedagogy items={pedagogyItems} onAddClick={() => {}} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Curriculum/>

          <Timetable/>
        </div>
      </div>
    </div>
  );
}
