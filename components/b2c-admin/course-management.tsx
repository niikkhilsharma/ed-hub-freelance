"use client";

import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import MaxWidthWrapper from "../../components/admin/max-width-wrapper"
import ScrollableButton from "./common-component/scrollable-button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import AddCourseModal from "@/components/b2c-admin/add-course";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
type Checked = DropdownMenuCheckboxItemProps["checked"];
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
  id: string;
  label: string;
}
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiMinusCircle,
} from "react-icons/fi";

export default function CourseManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: "/teacher-b2b/profile.png", // UPDATE PATH
  };
  const router = useRouter();

  const GeneralFilterButton: React.FC<{
    filter: GeneralFilterOption;
    onClick: () => void;
  }> = ({ filter, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-gray-300 ${INPUT_BG_FILTERS} text-black rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}
    >
      <span>{filter.label}</span>
      <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
    </button>
  );

  const sampleGeneralFilters: GeneralFilterOption[] = [
    { id: "filter1", label: "Filter 1" },
    { id: "filter2", label: "Filter 2" },
    { id: "filter3", label: "Filter 3" },
  ];
  const courses = [
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
    {
      image: "/personality.png",
      name: "Course Name",
      domain: "Self Dev",
    },
  ];
  const ACCENT_PINK = "#FF3366"; // For active Class/Batch/Group tabs and remove icon
  const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
  const INPUT_BG_SEARCH = "bg-white";
  const INPUT_BG_FILTERS = "bg-gray-50"; // Background for filter dropdowns
  const STUDENT_ITEM_BG = "bg-[#F9FAFB]";
  const ICON_BUTTON_BG_LIGHT_PINK = "bg-[#F3F4F6]";
  const ICON_BUTTON_TEXT_PINK = `text-[${ACCENT_PINK}]`;
  const ICON_BUTTON_BG_LIGHT_GRAY = "bg-gray-100";
  return (
    <MaxWidthWrapper>
      <div className="bg-[#eeeeee]   py-4 px-1 sm:px-16  min-h-screen ">
        <main className="p-2 max-w-[90rem] sm:p-6    mx-auto bg-white my-6  rounded-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2  h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar ">
              <Link href="/admin-b2c/admin-panel/remove-courses" passHref>
                <button className="flex items-center cursor-pointer justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-2xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors">
                  Remove Course
                </button>
              </Link>
              <Link
                href="/admin-b2c/admin-panel/admin-course-management"
                passHref
              >
                <button
                  className={`flex items-center  cursor-pointer justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-2xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors`}
                >
                  Edit Membership Plans
                </button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex font-medium items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 1
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 2nd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex  font-medium items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 2
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 3rd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex font-medium items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-0  hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 3
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-14">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 4th */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 py-4">
            {courses.map((course, index) => (
              <Link
                href="/admin-b2c/admin-panel/course-management-teacher"
                key={index}
              >
                <div className="flex flex-col w-full max-h-[330px] px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full aspect-auto rounded-2xl overflow-hidden">
                    <Image
                      src={course.image}
                      width={300}
                      height={200}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

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
          <ScrollableButton
            onClick={() => setIsModalOpen(true)}
            ButtonHeading="Add Courses"
          />

          <AddCourseModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
