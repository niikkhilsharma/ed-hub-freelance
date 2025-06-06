"use client";

import { useState } from "react";
import { Info, Eye, Edit, Trash } from "lucide-react";

interface Test {
  id: string;
  title: string;
  batch: string;
  date: string;
  status?: string;
  studentsEnrolled?: number;
  studentsAttended?: number;
  averageScores?: number;
}

interface TestListProps {
  tests: Test[];
  type: "scheduled" | "completed" | "saved";
}

export function TestList({ tests, type }: TestListProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const togglePopup = (id: string) => {
    setActivePopup(activePopup === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {tests.map((test) => (
        <div key={test.id} className="border rounded-3xl p-4  bg-[#F9FAFB]">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="w-full space-y-2">
              <h4 className="font-medium text-lg">{test.title}</h4>
              <p className="text-sm text-[#6B7280] pb-3 flex gap-3">
                <span>{test.batch}</span>
                <span>{test.date}</span>
              </p>

              {type === "completed" && (
                <div>
                  <div className="grid grid-cols-3 gap-4 max-w-xl">
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Students Enrolled</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.studentsEnrolled ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Students Attended</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.studentsAttended ?? "-"}
                      </p>
                    </div>
                    <div className="text-center bg-[#F3F4F6] p-2 rounded-2xl">
                      <p className="text-sm text-[#6B7280]">Average Score</p>
                      <p className="text-lg font-semibold text-[#3366FF]">
                        {test.averageScores ?? "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section: Status + Popup Menu */}
            <div className="flex flex-col items-end gap-2 self-center relative">

              <button
                onClick={() => togglePopup(test.id)}
                className="p-1 hover:bg-gray-100 rounded"
                >
                <Info className="h-5 w-5 text-[#6B7280]" />
              </button>
                {test.status && (
                  <span className="px-3 py-1 text-sm bg-[#8DD9B31A] text-[#8DD9B3] rounded-2xl mr-2">
                    {test.status}
                  </span>
                )}

              {activePopup === test.id && (
                <div className="absolute right-0 mt-8 z-10 bg-white border shadow-md flex flex-col gap-1 rounded-xl w-50 text-sm p-2">
                  {type === "completed" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>View Students</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Re-use Test</span>
                      </div>
                    </>
                  )}

                  {type === "scheduled" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>View Details</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Reschedule</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Trash className="h-4 w-4 mr-2 text-red-500" />
                        <span>Cancel</span>
                      </div>
                    </>
                  )}

                  {type === "saved" && (
                    <>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>Preview</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Edit className="h-4 w-4 mr-2" />
                        <span>Edit Draft</span>
                      </div>
                      <div className="info-popup-item bg-[#ebf0ff] rounded-xl text-[#3366FF] font-medium">
                        <Trash className="h-4 w-4 mr-2 text-red-500" />
                        <span>Delete Draft</span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
