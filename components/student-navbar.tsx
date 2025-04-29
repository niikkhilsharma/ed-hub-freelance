"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ShoppingCart,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-[#f9326f] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-32">
                {/* Replace src below with your logo path */}
                <Image
                  src="/mianLogo.png"
                  alt="EduHub Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["/", "/about", "/instructors", "/courses", "/contact"].map(
                (href, idx) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-base font-medium hover:text-blue-600"
                  >
                    {
                      [
                        "Home",
                        "About Us",
                        "Courses",
                        "Become a Future School",
                        "Subscription Plan",
                        "Contact Us",
                      ][idx]
                    }
                  </Link>
                )
              )}
            </div>

            {/* Right Side - User Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>

              <button className="relative p-1.5 rounded-full hover:bg-pink-600 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-blue-600 rounded-full"></span>
              </button>

              <button className="relative p-1.5 rounded-full hover:bg-pink-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                  2
                </span>
              </button>
              

              <div className="hidden sm:flex items-center gap-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/student/home/student-profile.jpg"
                    alt="User profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-pink-200">Student</span>
                  <span className="font-medium">Jane Cooper</span>
                </div>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:bg-[#ff749e]"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#2d000d] p-2 rounded-lg w-48 flex flex-col gap-0.5">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="w-full">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <Link href="/dashboard" className="w-full">
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="w-full">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-pink-600 transition-colors"
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1 bg-[#f9326f]">
            <Link
              href="/"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              About
            </Link>
            <Link
              href="/instructors"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Instructor list
            </Link>
            <Link
              href="/courses"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Courses List
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:bg-[#ff749e] px-3 rounded-md"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
