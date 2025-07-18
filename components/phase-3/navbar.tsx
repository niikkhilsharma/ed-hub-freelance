"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaRegSmile,
  FaBell,
  FaBars,
  FaTimes
} from "react-icons/fa";




interface NavbarProps {
  user: {
    avatarSrc: string;
    name: string;
    role: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="bg-[#3366ff]">
      <nav className="text-white px-4 py-2 sm:px-4 max-w-[96rem] mx-auto sm:py-6 relative">
        <div className="flex items-center gap-4 justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={231}
              height={46}
              className="w-32 sm:w-40"
            />
          </div>

        
          {/* Right Side + Mobile Menu Toggle */}
         <div className="flex items-center gap-3  px-4 py-2 rounded-full text-white">
      <FaBell className="text-white text-xl cursor-pointer" />

      <div className="flex items-center gap-3">
        <Image
          src={user.avatarSrc || "/admin/usernav.jpg"}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="leading-tight">
          <div className="font-semibold text-sm">{user.name}</div>
          <div className="text-yellow-400 text-xs">Student</div>
        </div>
      </div>
    </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Slide-In */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-64 bg-[#3366FF] z-40 transition-transform duration-300 ease-in-out sm:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-white/20 flex justify-between items-center">
            <Image
              src="/page3/student_b2b/Clip path group.svg"
              alt="Edunique Logo"
              width={150}
              height={30}
              className="w-32"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-white/20 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="w-6 h-6 text-white" />
            </button>
          </div>

          

          {/* Optional: User Info at bottom */}
          <div className="p-4 border-t border-white/20 mt-auto flex items-center gap-2">
            <Image
              src={user.avatarSrc || "/admin/usernav.jpg"}
              alt={user.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="space-y-2">
              <div className="text-sm md:text-md font-semibold text-white">{user.name}</div>
              <div className="text-xs text-white/80">{user.role}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
