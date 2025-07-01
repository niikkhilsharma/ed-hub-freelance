// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { FaRegSmile ,FaBell} from "react-icons/fa";
import Image from 'next/image';
import { BiCoinStack } from "react-icons/bi";
import { FiBookOpen ,FiGrid , FiShield, FiMessageCircle  } from "react-icons/fi";

const navItems = [
  { label: 'Dashboard', icon: <FaRegSmile className="text-lg md:text-2xl" />, key: 'dashboard' },
{ label: 'DMIT Test', icon: <FiGrid className="text-lg md:text-2xl" />, key: 'dmit' },
{ label: 'Material', icon: <BiCoinStack className="text-lg md:text-2xl" />, key: 'material' },
{ label: 'Course MGMT', icon: <FiBookOpen className="text-lg sm:text-2xl" />, key: 'course' },
{ label: 'Security', icon: <FiShield className="text-lg md:text-2xl" />, key: 'security' },
{ label: 'Chat', icon: <FiMessageCircle className="text-lg md:text-2xl" />, key: 'chat' },

];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('security');

  return (
   <div className='bg-[#3366ff]'>
     <nav className=" text-white px-2 py-2  sm:px-4 max-w-[96rem] mx-auto sm:py-6 ">
      <div className=" flex items-center  gap-4 justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
                            <Image src="/page3/student_b2b/Clip path group.svg" alt="Edunique Logo" width={231} height={46} className="w-40" />
                        </div>

        {/* Menu */}
        <div className="bg-[#e3f2fd]/15 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 
   hidden sm:flex items-center justify-center gap-4 sm:gap-5 md:gap-6 
  overflow-x-auto max-w-full">
  
  {navItems.map((item) => (
    <button
      key={item.key}
      onClick={() => setActiveTab(item.key)}
      className={`flex items-center gap-2 
        text-sm sm:text-md  transition-all whitespace-nowrap ${
          activeTab === item.key ? 'text-[#ffcc00] font-semibold' : 'text-white'
        }`}
    >
      {item.icon}
      <span>{item.label}</span>
    </button>
  ))}
</div>

        {/* Notification + Profile */}
        <div className="flex items-center gap-4">
          <FaBell className="text-xl sm:text-2xl" />
          <Image
            src="/page3/entry/pri.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
