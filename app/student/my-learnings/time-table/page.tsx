"use client";

import FooterNew from "@/components/footer3";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ScheduleSlot {
  time: string;
  courses: {
    [key: string]: string; // day -> course code
  };
}

interface Course {
  code: string;
  name: string;
}

const scheduleData: ScheduleSlot[] = [
  {
    time: "9:00",
    courses: {
      Mon: "Olyp M G2",
    },
  },
  {
    time: "10:00",
    courses: {},
  },
  {
    time: "11:00",
    courses: {
      Tue: "Olyp M G3",
    },
  },
  {
    time: "12:00",
    courses: {},
  },
  {
    time: "13:00",
    courses: {},
  },
  {
    time: "14:00",
    courses: {
      Wed: "Olyp M G6",
      Fri: "Math F",
    },
  },
  {
    time: "15:00",
    courses: {},
  },
  {
    time: "16:00",
    courses: {
      Thu: "Math F",
    },
  },
  {
    time: "17:00",
    courses: {},
  },
  {
    time: "18:00",
    courses: {},
  },
];

const courses: Course[] = [
  { code: "Olyp M G1", name: "Course Name" },
  { code: "Olyp M G2", name: "Course Name" },
  { code: "Olyp M G3", name: "Course Name" },
  { code: "Olyp M G5", name: "Course Name" },
  { code: "Olyp M G6", name: "Course Name" },
  { code: "Math F", name: "Course Name" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function LearningSchedule() {
  const handleContinue = () => {
    console.log("Continue clicked");
    // Handle continue action
  };

  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 p-10">
        <div className="min-h-fit w-full max-w-7xl mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFCC00] mb-4">
                Your Learning Schedule
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#6B7280] max-w-3xl mx-auto">
                Here&#39;s your confirmed schedule based on your selections.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* Schedule Grid */}
              <div className="xl:col-span-9">
                <div className="bg-white overflow-hidden">
                  {/* Days Header */}
                  <div className="grid grid-cols-6 border-b border-[#B0B0B0]">
                    <div className="p-4"></div>{" "}
                    {/* Empty cell for time column */}
                    {days.map((day) => (
                      <div
                        key={day}
                        className="p-4 text-center text-sm font-medium text-[#6B7280]"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Schedule Rows */}
                  {scheduleData.map((slot, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-6 border-b border-[#B0B0B0] last:border-b-0"
                    >
                      {/* Time Column */}
                      <div className="p-4 text-center font-medium text-[#6B7280]">
                        {slot.time}
                      </div>

                      {/* Day Columns */}
                      {days.map((day) => (
                        <div key={day} className="p-2">
                          <div
                            className={`h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                              slot.courses[day]
                                ? "bg-[#3366FF] text-white shadow-sm hover:bg-blue-600"
                                : "border bg-[#B0B0B01A] border-[#6B7280] hover:border-gray-300"
                            }`}
                          >
                            {slot.courses[day] && (
                              <span className="px-2 text-center">
                                {slot.courses[day]}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Legend */}
              <div className="xl:col-span-3">
                <Card className="sticky top-8 border-0">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-[#3366FF] text-white px-4 py-2 rounded-t-3xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="font-medium text-left">Code Name</div>
                        <div className="font-medium text-right">Course</div>
                      </div>
                    </div>

                    {/* Course List */}
                    <div className="bg-[#3366FF1A]">
                      {courses.map((course, index) => (
                        <div key={index} className="px-4 py-2">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="font-medium text-gray-900">
                              {course.code}
                            </div>
                            <div className="text-gray-600 text-right">
                              {course.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Continue Button */}
                    <div className="pt-3">
                      <Button
                        onClick={handleContinue}
                        className="w-full bg-[#FF3366] hover:bg-[#FF3366] text-white py-3 rounded-full cursor-pointer font-medium transition-colors duration-200"
                      >
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
