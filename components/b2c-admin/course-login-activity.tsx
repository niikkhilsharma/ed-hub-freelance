"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import PeopleGrid from "@/components/b2c-admin/course-login-teachers";
import StudentGrid from "./course-login-student";

// Dummy user
const headerUser = {
  name: "Shlok Agheda",
  role: "Student",
  avatarSrc: "/teacher-b2b/profile.png",
};

interface GeneralFilterOption {
  id: string;
  label: string;
}

const sampleGeneralFilters: GeneralFilterOption[] = [
  { id: "filter1", label: "Filter 1" },
  { id: "filter2", label: "Filter 2" },
  { id: "filter3", label: "Filter 3" },
  { id: "filter4", label: "Filter 4" },
];

const topTabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];

export default function CourseLoginPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"teachers" | "students">(
    "teachers"
  );
  const [selectedTopTab, setSelectedTopTab] = useState("Batch 1");

  const GeneralFilterButton: React.FC<{
    filter: GeneralFilterOption;
    onClick: () => void;
  }> = ({ filter, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 border border-gray-300 bg-gray-50 text-black rounded-xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors"
    >
      <span>{filter.label}</span>
      <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
    </button>
  );

  return (
    <>
      <Header user={headerUser} />

      <div className="bg-[#eeeeee] py-6 sm:py-8 lg:py-10 min-h-screen">
        <main className="p-2 max-w-[90rem] sm:p-6 mb-32 sm:mb-[320px] mx-auto bg-white my-6 rounded-3xl">
          {/* Search & Filter Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm bg-white border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[#3366FF] focus:border-[#3366FF] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => alert("Main filter icon clicked.")}
                className="p-2.5 sm:p-3 rounded-2xl hover:bg-gray-100 text-[#FF3366] flex-shrink-0 transition-colors"
                aria-label="Open main filters"
              >
                <FiFilter className="w-5 h-5" strokeWidth={2} />
              </button>

              {sampleGeneralFilters.map((filter) => (
                <GeneralFilterButton
                  key={filter.id}
                  filter={filter}
                  onClick={() => alert(`${filter.label} clicked.`)}
                />
              ))}
            </div>
          </div>

          {/* Top Tabs */}
          <div className="flex mt-2 gap-6 justify-start p-2">
            <button
              onClick={() => setActiveTab("teachers")}
              className={`font-semibold text-sm sm:text-lg transition-colors pb-1 border-b-2 ${
                activeTab === "teachers"
                  ? "text-[#3366ff] border-[#3366ff]"
                  : "text-[#6b7280] border-transparent"
              }`}
            >
              Teachers
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`font-semibold text-sm sm:text-lg transition-colors border-b-2 ${
                activeTab === "students"
                  ? "text-[#3366ff] border-[#3366ff]"
                  : "text-[#6b7280] border-transparent"
              }`}
            >
              Students
            </button>
          </div>
          <div className="w-full my-2 bg-white  border border-[#e5e7eb] rounded-2xl p-2 shadow space-y-6">
            <div className="flex justify-center space-x-4">
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTopTab(tab)}
                  className={`px-3 py-2 rounded-2xl text-xl font-medium transition-colors ${
                    selectedTopTab === tab
                      ? "bg-[#FF3366] text-white"
                      : "text-[#6B7280] hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Between Teachers and Students */}

          {/* Conditional Grid */}
          <div className="w-full  my-2 ">
            {activeTab === "teachers" ? <PeopleGrid /> : <StudentGrid />}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
