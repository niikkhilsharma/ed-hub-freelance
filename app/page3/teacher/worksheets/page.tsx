"use client";

import { useState } from "react";
import { QuizList } from "@/components/page3/quiz-list";
import { QuizAnalytics } from "@/components/page3/quiz-analytics";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Quizes = [
  {
    id: "1",
    title: "Quiz 1",
    batch: "Unitary Number system",
    date: "12/04/2025",
  },
  {
    id: "2",
    title: "Quiz 2",
    batch: "Unitary Number system",
    date: "12/04/2025",
  },
  {
    id: "3",
    title: "Quiz 3",
    batch: "Unitary Number system",
    date: "12/04/2025",
  },
  {
    id: "4",
    title: "Quiz 4",
    batch: "Unitary Number system",
    date: "12/04/2025",
  },
  {
    id: "5",
    title: "Quiz 5",
    batch: "Unitary Number system",
    date: "12/04/2025",
    status: "Ongoing",
  },
  {
    id: "6",
    title: "Quiz 6",
    batch: "Unitary Number system",
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
  const [activeTab, setActiveTab] = useState("Quizes");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              <div className="flex-grow border-b-0 mb-4">
                <CustomTestTabs
                  tabs={["Quizes", "Worksheets", "Classwork", "Home Tasks"]}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
              <div className="flex justify-between mb-2 text-md font-medium text-gray-500">
                <div>
                  <button className="px-3 py-3 ">
                    Scheduled
                  </button>
                  <button className="px-6 py-3 ">
                    Completed
                  </button>
                  <button className="px-6 py-3 ">
                    Draft
                  </button>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Classes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="batch1">Class 1</SelectItem>
                      <SelectItem value="batch2">Class 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="batch1">Subject 1</SelectItem>
                      <SelectItem value="batch2">Subject 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {activeTab === "Quizes" && (
                <QuizList tests={Quizes} type="scheduled" />
              )}
            </div>

            <div className="md:col-span-1">
              <div className="flex justify-end items-center mb-6">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg py-6 px-6"
                  onClick={() => router.push("/page3/teacher/worksheets/create")}
                >
                  Create Quiz
                </Button>
              </div>
              <QuizAnalytics
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
