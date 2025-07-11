"use client";
import {  LuCalendarCheck, LuClipboardList,  LuHash,  LuPackage, LuUserCheck, LuUsers } from "react-icons/lu";
import Link from "next/link";
import { FiBell, FiSun } from "react-icons/fi";
import { useState } from "react";
import RescheduleMeetingStudent from "../../pop-ups-2/components/RescheduleMeetingStudent";
const actions = [
  {
    label: 'Schedule Meeting',
    icon: <LuUsers className="text-[#6b7280] w-5 h-5" />,
    modalId: 'ScheduleMeeting',
  },
  {
    label: 'Manage Staff Leave',
    icon: <FiSun className="text-[#6b7280] w-5 h-6" />,
    href: `manage-teacher-leave`,
  },
  {
    label: 'Attendance Management',
    icon: <LuUserCheck className="text-[#6b7280] w-5 h-6" />,
    href: 'attendance-course',
  },
  {
    label: 'Review Teach/Drop Requests',
    icon: <LuClipboardList className="text-[#6b7280] w-5 h-6" />,
    href: 'review-list',
  },
  {
    label: 'Lecture Adjustment Request',
    icon: <LuCalendarCheck className="text-[#6b7280] w-5 h-6" />,
    href: 'lecture-adjustment-requests',
  },
  {
    label: 'Extra Lecture Manager',
    icon: <LuHash className="text-[#6b7280] w-5 h-6" />,
    href: 'extraa-lecture-manager',
  },
  {
    label: 'Inventory',
    icon: <LuPackage className="text-[#6b7280] w-5 h-6" />,
    href: 'inventory',
  },
  {
    label: 'Add Reminder',
    icon: <FiBell className="text-[#6b7280] w-5 h-6" />,
    modalId: 'AddReminder',
  },
];
const AdminToolkit = () => {
   const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <div className="bg-white my-4 p-4 rounded-2xl">
      <h2 className="font-semibold text-lg mb-4">Admin Toolkit</h2>
      <div className="flex flex-wrap gap-4">
        {actions.map((action, index) => {
          const button = (
            <button
              type="button"
              key={index}
              onClick={
                action.modalId ? () => setOpenModal(action.modalId) : undefined
              }
              className="flex items-center gap-2 cursor-pointer border border-[#e5e7eb] px-4 py-3.5 rounded-xl text-sm bg-[#faf9fb] hover:bg-[#f0f0f0] transition"
            >
              {action.icon}
              {action.label}
            </button>
          );

          if (action.modalId) {
            return <div key={index}>{button}</div>;
          }

          return (
            <Link
              href={`/admin-b2c/admin-panel/${action.href}`}
              passHref
              key={index}
            >
              {button}
            </Link>
          );
        })}
      </div>
      {/* PopUps */}
       {/* <RescheduleMeetingStudent
        isOpen={openModal === 'ScheduleMeeting'}
        onClose={() => setOpenModal(null)}
      /> */}
    </div>
  );
};

export default AdminToolkit;
