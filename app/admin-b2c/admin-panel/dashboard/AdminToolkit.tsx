"use client";
import {  LuCalendarCheck, LuClipboardList,  LuHash,  LuPackage, LuUserCheck, LuUsers } from "react-icons/lu";
import Link from "next/link";
import { FiBell, FiSun } from "react-icons/fi";
const actions = [
  {
    label: 'Schedule Meeting',
    icon: <LuUsers className="text-[#6b7280] w-5 h-5" />,
    href: '#',
  },
  {
    label: 'Manage Staff Leave',
    icon: <FiSun className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Attendance Management',
    icon: <LuUserCheck className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Review Teach/Drop Requests',
    icon: <LuClipboardList className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Lecture Adjustment Request',
    icon: <LuCalendarCheck className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Extra Lecture Manager',
    icon: <LuHash className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Inventory',
    icon: <LuPackage className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Add Reminder',
    icon: <FiBell className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
];
const AdminToolkit = () => {
  return (
    <div className="bg-white my-4 p-4 rounded-2xl">
      <h2 className="font-semibold text-lg mb-4">Admin Toolkit</h2>
      <div className="flex flex-wrap gap-4">
      {actions.map((action, index) => (
        <Link href={action.href} passHref key={index}>
          <button className="flex items-center gap-2 cursor-pointer border border-[#e5e7eb] px-2 py-3.5 rounded-xl text-sm bg-[#faf9fb] hover:bg-[#f0f0f0] transition">
            {action.icon}
            {action.label}
          </button>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default AdminToolkit;
