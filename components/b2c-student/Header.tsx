/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // needed for client components using hooks

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router hook for current path
import { FiBookOpen, FiMessageSquare, FiVideo, FiBell } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FiDatabase ,FiGrid} from "react-icons/fi";
const NavItem = ({
  icon: Icon,
  label,
  href,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}) => {
  const isMyCourse = label === "My course"; // 👈 Check if it's "My course"

  const textColor = isMyCourse
    ? "text-[#FFCC00]" // always yellow
    : active
    ? "text-[#FFCC00]" // active non-"My course" also yellow
    : "text-white";

  const hoverClass = isMyCourse ? "" : "hover:bg-[#3366FF]/70";

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 sm:px-2 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors ${textColor} ${hoverClass}`}
    >
      <Icon className={`w-5 h-3 sm:w-5 sm:h-5 ${isMyCourse ? "text-[#FFCC00]" : ""}`} />
      {label}
    </Link>
  );
};

interface UserProfile {
  name: string;
  role: string;
  avatarSrc?: string;
}

interface HeaderProps {
  user: UserProfile;
  isAskme?: boolean;
}

export default function Header({ user, isAskme = true }: HeaderProps) {
  const pathname = usePathname();
  const currpage = "Mycourse"

  const navItems = [
    {
      icon: FaRegSmile,
      label: "My Learnings",
      href: "/student-b2b/student-dashboard/dashboard",
    },
    {
      icon: FiGrid,
      label: "My course",
      href: "/student-b2b/student-dashboard/my-course",
      active:true,
    },
    {
      icon: FiDatabase,
      label: "Material",
      href: "/student-b2b/student-dashboard/chat",
    },
     {
      icon: FiMessageSquare,
      label: "Chat",
      href: "/student-b2b/student-dashboard/chat",
    },
    {
      icon: FiVideo,
      label: "Recordings",
      href: "/student-b2b/student-dashboard/recording",
    },
  ];

  return (
    <header className="bg-[#3366FF] px-6 text-white sticky top-0 z-50 shadow-md print:hidden ">
      <div className="mx-auto gap-1  h-20 flex justify-between items-center max-w-screen-2xl">
        {/* Logo */}
        <div className=" flex-shrink-0">
          <Image
            src="/page3/student_b2b/Clip path group.svg"
            alt="Edunique Logo"
            width={231}
            height={46}
            className="w-40"
          />
         
        </div>
        <div>
             <button className="  bg-[#E3F2FD26]  rounded-full px-4 py-3.5 text-black-500 ">
          <FaArrowLeft  className="w-6 h-6"/>
        </button>
        </div>
        {/* Main Navigation */}
        <nav className="hidden lg:flex sm:gap-2 items-center bg-[#E3F2FD26] rounded-full sm:px-4 sm:py-3 ">
          {navItems.map(({ icon, label, href ,active}) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              active={currpage === label}
            />
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {isAskme && (
            <button className="flex items-center gap-2 px-2 py-2 bg-[#E3F2FD26] text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
              <Image
                src="/page3/student_b2b/AI Button.svg"
                alt="Ask me bot"
                width={231}
                height={46}
                className="w-10"
              />
              Ask me!
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-[#3366FF]/70 focus:outline-none">
            <FiBell className="w-5 h-5" />
          </button>
          <Image
            src={user?.avatarSrc ?? "/page3/entry/pri.png"}
            alt={user?.name ?? "User"}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
