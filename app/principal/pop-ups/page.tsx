"use client"; // For useState and event handlers

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Assuming Next.js for Image component
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

// SVG Icons (can be replaced with react-icons if preferred and installed)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// const SearchIcon = () => (
//   <svg
//     className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="2"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//     />
//   </svg>
// );

const ChevronDownIcon = () => (
  <svg
    className="w-4 h-4 text-[#F9FAFB]0 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

// --- Base Modal Props ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- 1. Deactivate School Modal ---
const DeactivateSchoolModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-5 w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black text-center w-full">
            Want to Deactivate ?
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-2a00 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2">School Name</h3>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis magna vitae odio ullamcorper vestibulum. Maecenas semper leo
            ac tellus lobortis, vel vehicula urna posuere.
          </p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-8 py-3 text-sm font-semibold text-[#6B7280] bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </button>
          <button className="px-8 py-3 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors">
            Deactivate / Activate
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 2. Manage Class / Add New Class - Details + Teacher Modal ---
const ManageClassModal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  // Dummy state for this modal's internal selections if any
  // const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { id: "t1", name: "Teacher One", detail1: "Maths", detail2: "Grade 10" },
    { id: "t2", name: "Teacher Two", detail1: "Science", detail2: "Grade 9" },
    {
      id: "t3",
      name: "Teacher Three",
      detail1: "English",
      detail2: "Grade 10",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="space-y-5 mb-8">
          <div>
            <label
              htmlFor="mc_className"
              className="block text-sm font-medium text-black mb-1"
            >
              Class Name
            </label>
            <input
              type="text"
              id="mc_className"
              placeholder="Branch Name"
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="mc_gradeLevel"
              className="block text-sm font-medium text-black mb-1"
            >
              Grade / Level
            </label>
            <div className="relative">
              <select
                id="mc_gradeLevel"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
          <div>
            <label
              htmlFor="mc_group"
              className="block text-sm font-medium text-black mb-1"
            >
              Group
            </label>
            <div className="relative">
              <select
                id="mc_group"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
          <label className="block text-sm font-medium text-black mb-1">
            Assign Class Teacher
          </label>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-2 rounded-2xl">
            <div className="flex items-center gap-2 mb-2 ">
              <div className="relative flex-grow text-black">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Student"
                  className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">filter 1</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">filter 2</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
                <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
              </div>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1 relative">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="flex items-center p-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer hover:border-blue-500"
                >
                  <Image
                    src={`/principal/manage.jpg`}
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm text-black">
                      {teacher.name}
                    </p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail1}</p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail2}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors">
            Delete Class
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. Add Students Modal ---
const AddStudentsModal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  const students = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `s${i}`,
      name: `Student Name ${i + 1}`,
      course: "Course Name",
      grade: "Level / Grade",
      group: "Group",
    }));
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-3xl transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-sm font-medium text-black mb-3"
        >
          Add Students
        </label>
        <div className="flex items-center gap-2 mb-2 ">
          <div className="relative flex-grow text-black">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-80 overflow-y-auto custom-scrollbar pr-2 mb-8 relative  p-3 rounded-xl">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center p-1.5 rounded-xl border border-[#E5E7EB] bg-white cursor-pointer hover:border-blue-500"
            >
              <Image
                src={`/teacher-b2b/list-profile.png`}
                alt="User Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover mr-2"
              />
              <div className="flex-grow text-[10px]">
                <p className="font-semibold text-xs text-black">
                  {student.name}
                </p>
                <p className="text-[#F9FAFB]0">{student.course}</p>
                <p className="text-[#F9FAFB]0">{student.grade}</p>
                <p className="text-[#F9FAFB]0">{student.group}</p>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 ml-2"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          <button className="px-6 w-45 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors">
            Delete Class
          </button>
          <button className="px-6 w-45 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Save
          </button>{" "}
          {/* Or Create Class */}
        </div>
      </div>
    </div>
  );
};

// --- 4. Select Class to Edit Modal ---
const SelectClassToEditModal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-sm font-medium text-black mb-3"
        >
          Select Class to manage
        </label>
        <div className="flex items-center gap-2 mb-2 bg-[#F9FAFB] border border-[#E5E7EB] p-2 rounded-xl">
          <div className="relative flex-grow text-black">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border-2 border-[#6B7280] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
        </div>
        <div className="space-y-1 max-h-80 overflow-y-auto custom-scrollbar pr-1 relative">
          {classes.map((cls) => (
            <div
              key={cls}
              className="p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer hover:border-blue-500 text-sm font-medium text-[#6B7280]"
            >
              {cls}
            </div>
          ))}
        </div>
        {/* No action buttons in this specific design screenshot */}
      </div>
    </div>
  );
};

// --- 5. Add New Branch Modal ---
const AddNewBranchModal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  const formFields = ["Country", "State / Province", "City"];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-md font-medium text-black mb-4"
        >
          Add New Branch
        </label>
        <div className="space-y-3 mb-8">
          <div>
            <label
              htmlFor="anb_branchName"
              className="block text-sm font-medium text-black mb-1"
            >
              Branch Name
            </label>
            <input
              type="text"
              id="anb_branchName"
              placeholder="Branch Name"
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="anb_branchAddress"
              className="block text-sm font-medium text-black mb-1"
            >
              Branch Address
            </label>
            <textarea
              id="anb_branchAddress"
              rows={3}
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
            ></textarea>
          </div>
          {formFields.map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium text-black mb-1">
                {label}
              </label>
              <div className="relative">
                <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                  <option>Option 1</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 6. Remove Student Modal ---
const RemoveStudentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Remove Student</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/teacher-b2b/list-profile.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Student Name</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 7. Shift Student Modal (Simple) ---
const ShiftStudentModalSimple: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Student</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/teacher-b2b/list-profile.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-lg object-cover mr-3"
          />
          <div className="text-[10px]">
            <p className="font-semibold text-xs text-black">Student Name</p>
            <p className="text-[#F9FAFB]0">Level / Grade</p>
            <p className="text-[#F9FAFB]0">Group</p>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Shift
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 8. Shift Teacher Modal (Simple) ---
const ShiftTeacherModalSimple: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-md text-black">Name</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Shift
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 9. Remove Teacher Modal ---
const RemoveTeacherModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Remove Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-1.5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={48}
            height={48}
            className="w-13 h-13 rounded-lg object-cover mr-3"
          />
          <div className="text-xs">
            <p className="font-semibold text-sm text-black">Name</p>
            <p className="text-[#FF3366] text-sm font-medium">Subject</p>
            <p className="text-[#F9FAFB]0">Class Assigned</p>
            <p className="text-[#F9FAFB]0">Batch Assigned</p>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 10. Shift Student Modal (With Options) ---
const ShiftStudentModalWithOptions: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Student</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-5">
          <Image
            src="/teacher-b2b/list-profile.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Student Name</p>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Section
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Group
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 11. Shift Teacher Modal (With Options) ---
const ShiftTeacherModalWithOptions: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-5">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-sm text-black">Name</p>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Section
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Shift to Group
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8">
                <option>Option 1</option>
              </select>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function PopupShowcasePage() {
  // State to manage which modal is open
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const handleOpenModal = (modalId: string) => {
    setOpenModalId(modalId);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
    document.body.style.overflow = "auto";
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const modalButtons = [
    {
      id: "deactivateSchoolModal",
      label: "Deactivate School",
      color: "bg-red-500 hover:bg-[#FF3366]",
    },
    {
      id: "manageClassModal",
      label: "Manage Class",
      color: "bg-blue-500 hover:bg-[#3366FF]",
    },
    {
      id: "addStudentsModal",
      label: "Add Students",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "selectClassToEditModal",
      label: "Select Class to Edit",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: "addNewBranchModal",
      label: "Add New Branch",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      id: "removeStudentModal",
      label: "Remove Student",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      id: "shiftStudentModalSimple",
      label: "Shift Student (Simple)",
      color: "bg-teal-500 hover:bg-teal-600",
    },
    {
      id: "shiftTeacherModalSimple",
      label: "Shift Teacher (Simple)",
      color: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      id: "removeTeacherModal",
      label: "Remove Teacher",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: "shiftStudentModalWithOptions",
      label: "Shift Student (Options)",
      color: "bg-lime-500 hover:bg-lime-600",
    },
    {
      id: "shiftTeacherModalWithOptions",
      label: "Shift Teacher (Options)",
      color: "bg-amber-500 hover:bg-amber-600",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10 text-black">
        Popup / Modal Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modalButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleOpenModal(btn.id)}
            className={`${btn.color} text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Render Modals Conditionally */}
      <DeactivateSchoolModal
        isOpen={openModalId === "deactivateSchoolModal"}
        onClose={handleCloseModal}
      />
      <ManageClassModal
        isOpen={openModalId === "manageClassModal"}
        onClose={handleCloseModal}
      />
      <AddStudentsModal
        isOpen={openModalId === "addStudentsModal"}
        onClose={handleCloseModal}
      />
      <SelectClassToEditModal
        isOpen={openModalId === "selectClassToEditModal"}
        onClose={handleCloseModal}
      />
      <AddNewBranchModal
        isOpen={openModalId === "addNewBranchModal"}
        onClose={handleCloseModal}
      />
      <RemoveStudentModal
        isOpen={openModalId === "removeStudentModal"}
        onClose={handleCloseModal}
      />
      <ShiftStudentModalSimple
        isOpen={openModalId === "shiftStudentModalSimple"}
        onClose={handleCloseModal}
      />
      <ShiftTeacherModalSimple
        isOpen={openModalId === "shiftTeacherModalSimple"}
        onClose={handleCloseModal}
      />
      <RemoveTeacherModal
        isOpen={openModalId === "removeTeacherModal"}
        onClose={handleCloseModal}
      />
      <ShiftStudentModalWithOptions
        isOpen={openModalId === "shiftStudentModalWithOptions"}
        onClose={handleCloseModal}
      />
      <ShiftTeacherModalWithOptions
        isOpen={openModalId === "shiftTeacherModalWithOptions"}
        onClose={handleCloseModal}
      />
    </div>
  );
}
