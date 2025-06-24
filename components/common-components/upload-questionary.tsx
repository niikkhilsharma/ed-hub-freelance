'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaUpload } from 'react-icons/fa';

export default function UploadPopup({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          <IoClose />
        </button>

        <h2 className="text-lg font-semibold mb-4">Upload Questionary File</h2>

        {/* URL Input */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Enter URL</label>
          <input
            type="text"
            placeholder="Text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-full px-4 py-2 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <p className="text-center my-2 text-gray-500 font-medium">Or</p>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Upload Document</label>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
            <FaUpload className="text-pink-500" />
            <input
              type="text"
              placeholder="Document Name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2 bg-gray-100 text-gray-600 font-semibold"
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
