// components/Modal.tsx
"use client"
import React from "react";



interface RescheduleProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const Reschedule: React.FC<RescheduleProps> = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 sm:p-8 w-[90%] max-w-md text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum
          pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam
          sagittis, tellus laoreet semper vehicula, orci eros facilisis purus,
          at viverra ex lectus nec orci.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-100 text-gray-500 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reschedule;
