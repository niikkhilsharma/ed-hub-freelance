import React, { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { BaseModal, PopupProp } from "@/app/admin-b2c/pop-ups-2/page";

const AddCourseModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState("Option 1");
  const [selectedClass, setSelectedClass] = useState("Option 1");

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-2xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        {/* Title */}
        <h2 className="text-center font-semibold text-base mb-6">Add Course</h2>

        {/* Available Courses */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-1 block">Available Courses</label>
          <div className="relative">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full appearance-none border rounded-full px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Class */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block">Class</label>
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full appearance-none border rounded-full px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-full px-4 py-3 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="rounded-full px-4 py-3 bg-[#3366ff] text-white text-sm font-medium hover:bg-blue-600"
          >
            Add
          </button>
          <Link  href="/admin-b2c/admin-panel/create-course" >
          <button
            className="rounded-full px-4 py-3 bg-yellow-400 text-white text-sm font-medium hover:bg-yellow-500"
          >
            Create New Course
          </button>
          </Link>
        </div>
      </div>
    </BaseModal>
  );
};

export default AddCourseModal;
