"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-blue-300 text-sm mb-4">
        Submission Pop Up – Journey Report
      </h1>

      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        {/* Modal Dialog */}
        <div
          role="dialog"
          aria-modal="true"
          className="bg-white rounded-2xl w-[300px] sm:w-[593px] p-6 sm:p-8 text-center shadow-lg space-y-6"
        >
          <h2 className="text-black font-bold text-2xl">Report Published</h2>

          <p className="text-black text-xl leading-tight">
            The report for Shlok has been successfully published.
          </p>

          <button
            className="bg-[#3366FF] text-white px-10 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
