"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ArrowLeft,
  Target,
  Grid3X3,
  FileText,
  MessageCircle,
  Video,
  Bot,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function StudentNavbarNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "/student/my-learnings",
      label: "My Learnings",
      icon: Target,
      isActive: true,
    },
    {
      href: "/student/courses",
      label: "My course",
      icon: Grid3X3,
      isActive: false,
    },
    {
      href: "/student/material",
      label: "Material",
      icon: FileText,
      isActive: false,
    },
    {
      href: "/student/chat",
      label: "Chat",
      icon: MessageCircle,
      isActive: false,
    },
    {
      href: "/student/recordings",
      label: "Recordings",
      icon: Video,
      isActive: false,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white pt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo and Back Arrow */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <div className="relative h-10 w-32">
                  <Image
                    src="/mianLogo2.png"
                    alt="EduHub Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>

            {/* Center - Navigation Items */}
            <div className="hidden md:flex items-center space-x-8 bg-[#E3F2FD26] rounded-full p-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      item.isActive || pathname === item.href
                        ? "text-[#FFCC00]"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium text-md">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center space-x-3">
              {/* Ask me button */}
              <button className="hidden sm:flex items-center space-x-2 bg-[#E3F2FD26] text-black px-4 py-2 rounded-full font-medium">
                <Bot className="h-4 w-4" />
                <span className="text-md text-white">Ask me!</span>
              </button>

              {/* Notification Bell */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                <Bell className="h-5 w-5" />
              </button>

              {/* Profile Picture */}
              <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User profile"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.isActive || pathname === item.href
                        ? "bg-orange-400 text-white"
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}

              {/* Mobile Ask me button */}
              <button className="flex items-center space-x-3 bg-yellow-400 text-black px-4 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-medium w-full">
                <Bot className="h-5 w-5" />
                <span>Ask me!</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
