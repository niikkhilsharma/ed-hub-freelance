"use client";
import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmationPage: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-3xl p-6 max-w-xl mx-4 text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
        <p className="text-black mb-6 font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium.
          Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis,
          tellus laoreet semper vehicula, orci eros facilisis purus, at viverra
          ex lectus nec orci.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-3 rounded-full bg-[#6b7280]/10 text-[#6b7280] font-medium hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-3 rounded-full bg-[#3366ff] text-white font-medium hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
