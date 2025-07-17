"use client"
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const RequestRaiseModal: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    experience: "",
    duration: "",
    currentRate: "",
    expectedRate: "",
    reason: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted", form);
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 rounded-3xl space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-lg font-semibold text-center text-gray-900">
          Request a Pay Raise
        </h2>

        <div className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Name"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Experience */}
          <input
            type="text"
            placeholder="6 years"
            value={form.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Time at Edunique */}
          <input
            type="text"
            placeholder="18 Months"
            value={form.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Current Rate */}
          <input
            type="number"
            placeholder="20000"
            value={form.currentRate}
            onChange={(e) => handleChange("currentRate", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Expected Rate */}
          <input
            type="number"
            placeholder="40000"
            value={form.expectedRate}
            onChange={(e) => handleChange("expectedRate", e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 bg-[#f9fafb] text-sm outline-none"
          />

          {/* Reason */}
          <textarea
            placeholder="Why are you requesting a raise?"
            value={form.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] text-sm outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default RequestRaiseModal;
