"use client";
import { LuBook, LuFileText, LuMonitor } from "react-icons/lu";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
const actions = [
  {
    label: 'Assign Course',
    icon: <LuFileText className="text-[#6b7280] w-5 h-5" />,
    href: '#',
  },
  {
    label: 'Request Demo',
    icon: <LuMonitor className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Request Assessment',
    icon: <PiSquaresFour className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
  {
    label: 'Request Diagnostic Test',
    icon: <LuBook className="text-[#6b7280] w-5 h-6" />,
    href: '#',
  },
];
const MentorControl = () => {
  return (
    <div className="bg-[#faf9fb]  max-w-[90rem] mx-4  sm:mx-auto mt-4 p-4 rounded-2xl shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Mentor Control Panel</h2>
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

export default MentorControl;
