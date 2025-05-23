"use client";

import { useState } from "react";
import { TestList } from "@/components/page3/test-list";
import { TestAnalytics } from "@/components/page3/test-analytics";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const scheduledTests = [
  {
    id: "1",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "2",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "3",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "4",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "5",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
    status: "Ongoing",
  },
  {
    id: "6",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "7",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "8",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
];

const completedTests = [
  {
    id: "1",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "2",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "3",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
  {
    id: "4",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
    studentsEnrolled: 40,
    studentsAttended: 40,
    averageScores: 40,
  },
];

const savedTests = [
  {
    id: "1",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "2",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "3",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "4",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "5",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "6",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "7",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
  {
    id: "8",
    title: "C# Language Test 1",
    batch: "Batch 1",
    date: "12/04/2025",
  },
];
const CustomTestTabs = ({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}) => {
  return (
    <div className="flex w-full border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 font-medium ${
            activeTab === tab
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState("Scheduled Tests");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              <div className="flex-grow border-b-0 mb-4">
                <CustomTestTabs
                  tabs={["Scheduled Tests", "Completed Tests", "Drafts"]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
              <div className="flex justify-end mb-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Batches" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Batches</SelectItem>
                    <SelectItem value="batch1">Batch 1</SelectItem>
                    <SelectItem value="batch2">Batch 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {activeTab === "Scheduled Tests" && (
                <TestList tests={scheduledTests} type="scheduled" />
              )}
              {activeTab === "Completed Tests" && (
                <TestList tests={completedTests} type="completed" />
              )}
              {activeTab === "Drafts" && (
                <TestList tests={savedTests} type="saved" />
              )}
            </div>

            <div className="md:col-span-1">
              <div className="flex justify-end items-center mb-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg py-6 px-6" onClick={() => router.push("/page3/teacher/test/create")}>
                  Create Test
                </Button>
              </div>
              <TestAnalytics
                month="May"
                year={2025}
                complete={2}
                incomplete={1}
                totalTests={20}
                averageScore="15%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
