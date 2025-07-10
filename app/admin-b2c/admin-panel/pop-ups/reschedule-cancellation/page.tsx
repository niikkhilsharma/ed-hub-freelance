"use client";
import React, { useState } from "react";
import ConfirmationPage from "@/components/b2c-admin/reschedule-cancellation";

export default function TestPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    setModalOpen(false);
    alert("Confirmed!");
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <button
        onClick={() => setModalOpen(true)}
        className="px-6 py-3 rounded-full bg-[#3366ff] text-white font-semibold hover:bg-blue-700 transition"
      >
        Show Confirmation
      </button>

      <ConfirmationPage
        isOpen={modalOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
