"use client";
import { CiPower } from "react-icons/ci";
import { LuMonitor } from "react-icons/lu";
const TeacherControlPanel = () => {
  return (
    <div className="bg-[#faf9fb]  max-w-[93rem] mx-auto mt-4 p-4 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Teacher Control Panel</h2>
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 border border-[#e5e7eb] px-4 py-2 rounded-xl text-sm  bg-[#faf9fb]">
          <LuMonitor className="text-[#6b7280] w-5 h-5" />
          Payload Management/Edit Working Hours
        </button>
        <button className="flex items-center gap-2 border  border-[#e5e7eb] px-4 py-2 rounded-xl text-sm  bg-[#faf9fb]">
          <CiPower className="text-[#6b7280] w-5 h-6" />
          Profile Management
        </button>
      </div>
    </div>
  );
};

export default TeacherControlPanel;
