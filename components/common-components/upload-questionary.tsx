'use client';

import { useState } from 'react';
import {  X } from 'lucide-react';
import Image  from 'next/image';

export default function UploadPopup({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white mx-auto rounded-2xl p-6 space-y-4  max-w-xl relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 p-1 text-black bg-black/5 rounded-full hover:text-black">
        <X size={20} />
      </button>

        <h2 className="text-lg font-semibold mb-4">Upload Questionary File</h2>

        {/* URL Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Enter URL</label>
          <input
            type="text"
            placeholder="Text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-full px-4 py-2 bg-[#F9FAFB] border border-[#D5D5D5] text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <p className="text-center my-2 text-gray-500 font-medium">Or</p>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block font-medium  font-Poppins mb-2">Upload Document</label>
          <div className="flex items-center gap-2 bg-[#F9FAFB] border  border-[#D5D5D5] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <Image src={"/teacher/b2c/upload.png"}
            alt="upload"
            height={40}
            width={40}
            />
            <input
              type="text"
              placeholder="Document Name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-transparent outline-none w-full text-md font-Poppins  text-[#6B7280] "
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2 border border-[#E5E7EB] text-[#6B7280] font-semibold"
          >
            Cancel
          </button>
          <button className="rounded-full px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
