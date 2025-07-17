import React from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const RemoveStudentModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const handleRemove = () => {
    // Perform remove logic
    console.log("Student removed");
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="relative bg-white p-6 rounded-3xl space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900">Remove Student</h2>

        {/* Student Display */}
        <div className="w-full flex items-center gap-4 px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb]">
          <Image
            src="/avatar.png" // Replace with dynamic student image
            alt="Student"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <p className="text-sm font-medium text-gray-800">Student Name</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-1">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleRemove}
            className="px-6 py-2 rounded-full text-sm font-medium text-white bg-red-100 text-red-600 hover:bg-red-200"
          >
            Remove
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default RemoveStudentModal;
