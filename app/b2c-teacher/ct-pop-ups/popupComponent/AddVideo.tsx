import React from "react";
import { FiX, FiUpload } from "react-icons/fi";
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const AddVideoModal: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white p-6 rounded-3xl relative space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900">Add Videos</h2>

        {/* Class + Topic Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Class
            </label>
            <select className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topic Name
            </label>
            <input
              type="text"
              placeholder="Text"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter URL
          </label>
          <input
            type="text"
            placeholder="Text"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* OR text */}
        <div className="text-center text-gray-400 text-sm font-medium">Or</div>

        {/* Upload File */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload File
          </label>
          <div className="w-full flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-400">
            <FiUpload className="text-pink-500" />
            <span>File Name</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Text"
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-5 py-2 text-sm font-medium rounded-full bg-[#3366FF] text-white hover:bg-[#2455e0]">
            Add
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default AddVideoModal;
