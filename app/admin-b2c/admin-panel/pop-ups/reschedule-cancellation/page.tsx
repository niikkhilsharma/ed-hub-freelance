'use client';

import React, { useState } from 'react';
import Reschedule from '@/components/Reschedule'; // Make sure this path is correct

export default function RescheduleExamplePage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = () => {
    console.log("User cancelled the action");
    setShowPopup(false);
  };

  const handleConfirm = () => {
    console.log("User confirmed the action");
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Reschedule Popup Demo</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
        >
          Open Reschedule Popup
        </button>
      </div>

      {showPopup && (
        <Reschedule onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
