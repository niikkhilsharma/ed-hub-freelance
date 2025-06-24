// components/ShareVideoPopup.tsx
import { ChevronDown, X } from 'lucide-react';
import { Poppins } from 'next/font/google';
export default function ShareVideoPopup() {
  return (
    <div className="bg-[#FFFFFF] font-Poppins rounded-2xl border mx-auto my-20 shadow-xl p-3 w-[400px] max-w-full relative">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-black bg-[#6B7280]/20 rounded-full hover:text-black">
        <X size={20} />
      </button>

      {/* Title */}
      <h2 className="text-lg flex justify-center text-black font-bold mb-6">Delete Video</h2>

      {/* Select Class */}
      <div className="mb-4">
        <label className="block  px-3 mb-1 text-sm font-medium text-black text-start">Video Name</label>
        <div className="relative">
          <p className="w-full appearance-none text-[#6B7280] rounded-full px-4 py-1  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis magna vitae odio ullamcorper vestibulum. Maecenas semper leo ac tellus lobortis, vel vehicula urna posuere. 
          </p>
         
        </div>
      </div>

      {/* Select Group */}
      

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 rounded-full text-[#6B7280]  border border-[#E5E7EB] hover:bg-gray-200">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-full bg-[#FF3366]/10 hover:bg-[#FF3366]/30 text-[#FF3366] ">
          Share
        </button>
      </div>
    </div>
  );
}
