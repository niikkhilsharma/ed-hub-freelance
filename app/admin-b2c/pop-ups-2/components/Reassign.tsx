import React from "react";
import { FiX } from "react-icons/fi";
import { BaseModal, PopupProp } from "../page";
import { IoCalendarOutline, IoSearchOutline } from "react-icons/io5";

const ReassignClassModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl">
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar-thin mr-1">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        {/* Title */}
        <h2 className="text-left font-semibold text-base mb-4">Reassign Class</h2>

        {/* Date & Time Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="DD / MM / YYYY"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none"
            />
            <IoCalendarOutline className="absolute top-2.5 right-3 text-gray-400" size={18} />
            <label className="block text-xs font-medium text-gray-500 mt-1">Reassign Date</label>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Time"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none"
            />
            <IoSearchOutline className="absolute top-2.5 right-3 text-gray-400" size={18} />
            <label className="block text-xs font-medium text-gray-500 mt-1">Reassign Time</label>
          </div>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Teacher List Panel */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-full">
                <IoSearchOutline className="absolute top-2.5 left-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search Teacher"
                  className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
                />
              </div>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none">
                <option>1st STD</option>
              </select>
            </div>

            {/* Teachers */}
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {[...Array(4)].map((_, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:shadow-sm"
                >
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Teacher"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">Name</p>
                    <p className="text-xs text-gray-500">Course</p>
                    <p className="text-xs text-gray-500">Detail 2</p>
                  </div>
                  <input type="radio" name="teacher" className="accent-blue-600" />
                </label>
              ))}
            </div>
          </div>

          {/* Timetable Panel */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Class Timetable</h3>
            <div className="overflow-auto">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="text-xs text-gray-500 text-center">
                    <th className="w-[60px] text-left"> </th>
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                      <th key={day} className="w-[80px] font-medium">
                        <div className="flex flex-col items-center">
                          <span className="text-black">{14 + i}</span>
                          <span>{day}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-xs text-center">
                  {Array.from({ length: 10 }, (_, i) => {
                    const hour = 9 + i;
                    return (
                      <tr key={hour}>
                        <td className="text-sm text-gray-600 font-medium text-left py-2">
                          {hour}:00
                        </td>
                        {Array.from({ length: 5 }, (_, j) => (
                          <td key={j} className="py-1">
                            {hour === 10 && j === 0 ? (
                              <div className="w-full bg-blue-600 text-white rounded-lg px-2 py-1 text-xs">
                                ✓
                              </div>
                            ) : (
                              <div className="border border-blue-400 rounded-lg px-1.5 py-1 text-xs text-blue-600">
                                <p className="leading-none">Title</p>
                                <p className="leading-none text-[10px]">8:00 AM</p>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="rounded-full px-6 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Reassign
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ReassignClassModal;
