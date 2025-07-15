'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PopupPropB2CTeacher, TeacherB2CBaseModal } from "@/app/b2c-teacher/new-pop-ups/page";

const students = [...Array(5)].map((_, i) => ({
  id: i,
  name: 'Student Name',
  course: 'Course Name',
  level: 'Level / Grade',
  group: 'Group',
  avatar: '/common-images/full-student.jpg', // Replace this with actual path
}));

const CreateGroupPopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="bg-white p-4 rounded-3xl space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">Create New Group</h2>

        {/* Group Name Input */}
        <div>
          <label className="text-sm text-gray-600">Enter Group Name</label>
          <input
            type="text"
            placeholder="Text"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none text-sm"
          />
        </div>

        {/* Search & Dropdown */}
        <div className="flex items-center gap-2">
          <div className="flex items-center flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Student"
              className="flex-1 focus:outline-none"
            />
          </div>
          <select className="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none">
            <option>1st STD</option>
            <option>2nd STD</option>
          </select>
        </div>

        {/* Student List */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar-thin pr-1">
          {students.map((student) => {
            const isSelected = selected.includes(student.id);
            return (
              <div
                key={student.id}
                onClick={() => toggleSelect(student.id)}
                className="flex items-center gap-4 p-2 border border-gray-200 rounded-2xl cursor-pointer hover:shadow-sm transition"
              >
                <img
                  src={student.avatar}
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.course}</p>
                  <p className="text-xs text-gray-500">{student.level}</p>
                  <p className="text-xs text-gray-500">{student.group}</p>
                </div>

                {/* Custom Styled Checkbox */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#3366ff] border-[#3366ff]'
                      : 'border-gray-400'
                  }`}
                >
                  {isSelected && (
                    <span className="text-white text-xs font-bold">✔</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Create Button */}
        <div className="pt-2">
          <button className="w-full bg-[#3366ff] text-white py-2 rounded-full text-sm font-medium hover:bg-[#275cf1] transition">
            Create
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default CreateGroupPopup;
