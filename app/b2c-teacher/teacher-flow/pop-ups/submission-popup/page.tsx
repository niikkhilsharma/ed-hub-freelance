
"use client"
import { useState } from "react";

export default function Home() {
 

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-blue-300 text-sm mb-4">Submition Pop Up - Journey Report</h1>

      
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[300px] h-fit sm:w-[593px] sm:h-[214px] py-4  space-y-6 text-center shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-2">Report Published</h2>
            <p className="text-black text-xl ">
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
