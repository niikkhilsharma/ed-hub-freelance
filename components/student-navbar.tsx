"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, ShoppingCart } from "lucide-react";

export default function Navbar({blue}:{blue?:boolean}) {
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
      <nav className={`${blue? "bg-[#3366FF]" : "bg-[#f9326f]"} text-white`}>
        <div className="container mx-auto px-12">
          <div className="flex items-center justify-between h-17">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-32">
                {/* Replace src below with your logo path */}
                <Image
                  src={blue? "/mianLogo2.png" : "/mianLogo.png"}
                  alt="EduHub Logo"
                  fill
                  className={`object-contain ${blue? "" :"invert brightness-0"}`}
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
                    className={`text-base font-medium ${blue? "hover:text-[#f9326f]" :"hover:text-blue-600"}`}
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
              <button className="relative p-1.5 rounded-full hover:bg-pink-600 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
              </button>

              <button className="relative p-1.5 rounded-full hover:bg-pink-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                  2
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/student/home/student-profile.jpg"
                    alt="User profile"
                    fill
                    className="object-cover"
                  />
                </div>
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
          </div>
        </div>
      </nav>
    </header>
  );
}
