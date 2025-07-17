"use client"
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const ShiftStudentModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [selectedBatch, setSelectedBatch] = useState("");

  const handleContinue = () => {
    console.log("Selected Batch:", selectedBatch);
    // API logic or callback can go here
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-3xl space-y-5">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>

        {/* Header */}
        <h2 className="text-base font-semibold text-gray-900">Shift Student</h2>

        {/* Student Name Box */}
        <div className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] flex items-center gap-3 text-sm font-medium text-gray-800">
          <Image
            src="/avatar.png" // Replace with real image path
            alt="Student"
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          Student Name
        </div>

        {/* Batch Dropdown */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Shift to Batch</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] text-sm outline-none"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
          >
            <option value="">Batch Name</option>
            <option value="Batch A">Batch A</option>
            <option value="Batch B">Batch B</option>
            <option value="Batch C">Batch C</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-1">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default ShiftStudentModal;
