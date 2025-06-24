"use client";

import { Search, Filter, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { useState } from "react";

// Type definitions
type TopicsTableRow = {
  date: string;
  subject: string;
  topics: string;
  subtopics: string;
};

type TestTableRow = {
  date: string;
  test: string;
  quiz: string;
  assessment: string;
};

interface TableData {
  headers: [string, string, string, string];
  rows: (TopicsTableRow | TestTableRow)[];
  bgColor: string;
}

export default function AdvancePlan() {
  const [activeTab, setActiveTab] = useState<"Topics" | "Test">("Topics");

  const topicsTableData: TopicsTableRow[] = [
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
  ];

  const testTableData: TestTableRow[] = [
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      test: "Lorem ipsum",
      quiz: "Lorem ipsum",
      assessment: "Lorem ipsum",
    },
  ];

  const secondSectionTopicsData: TopicsTableRow[] = [
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
    {
      date: "17/6/25",
      subject: "Lorem ipsum",
      topics: "Lorem ipsum",
      subtopics: "Lorem ipsum",
    },
  ];

  const secondSectionTestData: TestTableRow[] = [
    {
      date: "18/7/25",
      test: "Test 1",
      quiz: "Quiz 1",
      assessment: "Assessment 1",
    },
    {
      date: "19/7/25",
      test: "Test 2",
      quiz: "Quiz 2",
      assessment: "Assessment 2",
    },
    {
      date: "20/7/25",
      test: "Test 3",
      quiz: "Quiz 3",
      assessment: "Assessment 3",
    },
    {
      date: "21/7/25",
      test: "Test 4",
      quiz: "Quiz 4",
      assessment: "Assessment 4",
    },
    {
      date: "22/7/25",
      test: "Test 5",
      quiz: "Quiz 5",
      assessment: "Assessment 5",
    },
    {
      date: "23/7/25",
      test: "Test 6",
      quiz: "Quiz 6",
      assessment: "Assessment 6",
    },
    {
      date: "24/7/25",
      test: "Test 7",
      quiz: "Quiz 7",
      assessment: "Assessment 7",
    },
    {
      date: "25/7/25",
      test: "Test 8",
      quiz: "Quiz 8",
      assessment: "Assessment 8",
    },
    {
      date: "26/7/25",
      test: "Test 9",
      quiz: "Quiz 9",
      assessment: "Assessment 9",
    },
  ];

  const renderTable = (data: TableData) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className="p-1 text-left font-semibold">
                <div
                  className={`${data.bgColor} py-2 px-3 rounded-2xl w-full h-full`}
                >
                  {header}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{row.date}</td>
              <td className="px-6 py-4">
                {"subject" in row ? row.subject : row.test}
              </td>
              <td className="px-6 py-4">
                {"topics" in row ? row.topics : row.quiz}
              </td>
              <td className="px-6 py-4">
                {"subtopics" in row ? row.subtopics : row.assessment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <StudentWrapper student>
      {/* headers */}
      <div className="bg-white border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
            <h1 className="text-2xl font-semibold text-[#FF3366]">
              Course Name
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] p-10">
        <div className="w-full max-w-7xl mx-auto p-4 space-y-6 bg-white min-h-screen rounded-3xl">
          {/* Header Section - Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center p-4 rounded-lg">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-12 pr-4 py-3 w-full rounded-full border-2 border-gray-200 focus:border-gray-300 text-lg"
              />
            </div>

            {/* Filter Section */}
            <div className="flex items-center gap-3">
              <Filter className="text-[#FF3366] w-5 h-5" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
                  >
                    Filter 1
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
                  >
                    Filter 2
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
                  >
                    Filter 3
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="flex gap-2 justify-center items-center border border-[#E5E7EB] rounded-3xl p-2">
            <button
              onClick={() => setActiveTab("Topics")}
              className={`px-6 py-2 rounded-2xl font-medium transition-colors cursor-pointer ${
                activeTab === "Topics"
                  ? "bg-[#FF3366] text-white"
                  : "text-[#6B7280] hover:bg-gray-300"
              }`}
            >
              Topics
            </button>
            <button
              onClick={() => setActiveTab("Test")}
              className={`px-6 py-2 rounded-2xl font-medium transition-colors cursor-pointer ${
                activeTab === "Test"
                  ? "bg-[#FF3366] text-white"
                  : "text-[#6B7280] hover:bg-gray-300"
              }`}
            >
              Test
            </button>
          </div>

          {/* First Date Range Section */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">From</span>
                <span className="bg-[#E5E7EB] p-2 rounded-xl font-medium">
                  17/6/25
                </span>
                <span className="font-medium">to</span>
                <span className="bg-[#E5E7EB] p-2 rounded-xl font-medium">
                  17/7/25
                </span>
              </div>
            </div>

            {/* Conditional Table Rendering */}
            {activeTab === "Topics"
              ? renderTable({
                  headers: [
                    "Date",
                    "Subject",
                    "Topics to be Covered",
                    "Subtopics to be Covered",
                  ],
                  rows: topicsTableData,
                  bgColor: "bg-[#99DEFF]",
                })
              : renderTable({
                  headers: ["Date", "Test", "Quiz", "Assessment"],
                  rows: testTableData,
                  bgColor: "bg-[#FFC79A]",
                })}
          </div>

          {/* Second Date Range Section */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">From</span>
                <span className="bg-[#E5E7EB] p-2 rounded-xl font-medium">
                  18/7/25
                </span>
                <span className="font-medium">to</span>
                <span className="bg-[#E5E7EB] p-2 rounded-xl font-medium">
                  18/8/25
                </span>
              </div>
            </div>

            {/* Conditional Table Rendering */}
            {activeTab === "Topics"
              ? renderTable({
                  headers: [
                    "Date",
                    "Subject",
                    "Topics to be Covered",
                    "Subtopics to be Covered",
                  ],
                  rows: secondSectionTopicsData,
                  bgColor: "bg-[#99DEFF]",
                })
              : renderTable({
                  headers: ["Date", "Test", "Quiz", "Assessment"],
                  rows: secondSectionTestData,
                  bgColor: "bg-[#FFC79A]",
                })}
          </div>
        </div>
      </div>
      <FooterNew showSuscriptionBlock={false} />
    </StudentWrapper>
  );
}
