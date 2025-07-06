"use client";
import { useState } from "react";

export default function SuggestionPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [suggestion, setSuggestion] = useState("");

  const handleSend = () => {
    console.log("Suggestion submitted:", suggestion);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-lg">
        {/* Title */}
        <h2 className="sm:text-lg text-md font-semibold text-black mb-4">Send Suggestion to Student</h2>

        {/* Label */}
        <label className="block text-sm  text-black mb-2">Add Suggestion</label>

        {/* Textarea */}
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Enter your suggestion to the student..."
          className="w-full rounded-2xl border border-[#E5E7EB] p-3 text-sm text-[#6b7280] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-28"
        />

        {/* Send Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSend}
            className="bg-[#3366ff] text-white px-6 sm:px-8 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
