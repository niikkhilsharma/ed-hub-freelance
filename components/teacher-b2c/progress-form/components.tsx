"use client";

import Image from "next/image";

const students = new Array(8).fill({
  name: "Student Name",
  course: "Course Name",
  grade: "Level / Grade",
  group: "Group",
  image: "/avatar.png",
});

export default function AttendanceForm() {
  return (<div className="flex flex-col sm:flex-row justify-between">
    
        {/* Left Section – Form */}
        <div className="w-[40%] space-y-6">
          {/* Details Section */}
          <div>
            <h3 className="text-sm font-semibold bg-gray-200 p-2 rounded">Details</h3>
            <div className="mt-2 space-y-4">
              {/* Date Picker */}
              <div>
                <label className="text-sm font-medium">Date</label>
                <input type="date" className="mt-1 w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label className="text-sm font-medium">Subject</label>
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2">
                  <option>Maths</option>
                  <option>Science</option>
                  <option>English</option>
                </select>
              </div>

              {/* Topics Covered */}
              <div>
                <label className="text-sm font-medium">Topics Covered</label>
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              {/* Subtopics Covered */}
              <div>
                <p className="text-sm font-medium">Sub-topics Covered</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input type="radio" name="covered" className="accent-blue-500" />
                      <span className="text-sm">Subtopic {i + 1}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Topics Uncovered */}
              <div>
                <p className="text-sm font-medium">Topics Uncovered</p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input type="radio" name="uncovered" className="accent-blue-500" />
                      <span className="text-sm">Subtopic {i}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-2">
                    <input type="radio" name="uncovered" className="accent-blue-500" />
                    <span className="text-sm">None</span>
                  </label>
                </div>
              </div>

              {/* Alert Box */}
              <div className="bg-red-100 text-red-600 p-2 rounded text-sm font-medium">
                An extra class will be required
              </div>

              {/* Note */}
              <div>
                <label className="text-sm font-medium">Note for Admin</label>
                <textarea
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Text"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div>
            <h3 className="text-sm font-semibold bg-gray-200 p-2 rounded">Activities Conducted</h3>
            <div className="mt-2 space-y-4">
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Math Test 1</option>
              </select>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Quiz Name</option>
              </select>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>None</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Section – Attendance */}
        <div className="w-[40%] bg-[#F9FAFB] p-4 rounded-3xl">
          <h3 className="text-sm font-semibold  rounded">Attendance</h3>
          {/* Search */}
          <input
            type="text"
            placeholder="Search"
            className="w-full mt-2 mb-3 border border-[#E5E7EB] rounded px-3 py-2"
          />

          {/* Student Cards */}
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {students.map((student, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={student.image}
                    alt="student"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{student.name}</p>
                    <p className="text-gray-500 text-xs">{student.course}</p>
                    <p className="text-gray-500 text-xs">{student.grade}</p>
                    <p className="text-gray-500 text-xs">{student.group}</p>
                  </div>
                </div>
                <span className="text-green-500 text-lg">✔</span>
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
}
