// components/ShareVideoPopup.tsx
import { ChevronDown, X } from 'lucide-react';

export default function ShareVideoPopup() {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl mx-auto my-20 shadow-xl p-6 w-[400px] max-w-full relative">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Share Videos</h2>

      {/* Select Class */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">Select Class</label>
        <div className="relative">
          <select className="w-full appearance-none bg-[#F9FAFB] border border-[#D5D5D5] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
        </div>
      </div>

      {/* Select Group */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium text-gray-700">Select Group</label>
        <div className="relative">
          <select className="w-full appearance-none border bg-[#F9FAFB] border border-[#D5D5D5] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          Share
        </button>
      </div>
    </div>
  );
}
