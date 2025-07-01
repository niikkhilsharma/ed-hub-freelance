"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

// Define a placeholder for the color palette as used in your example
const PALETTE = {
  ACCENT_PINK: "#FF3366",
};

interface MainCategoryTabsBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export const OptimizedCategoryTabsBar: React.FC<MainCategoryTabsBarProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  return (
    // FIXED: Removed py-2 from the main wrapper for proper vertical padding.
    <div>
      <div className=" max-w-[96rem] flex-wrap bg-white mx-auto rounded-2xl py-2">
        <div className="relative  flex-grow flex items-center">
          <button
            onClick={handleScroll}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full  hover:bg-gray-100 transition-colors  md:flex flex items-center justify-center"
            aria-label="Scroll left"
          >
            <FiArrowLeft className="w-5 h-5 hidden md:block text-black"  />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto custom-scrollbar-thin"
          >
            <div className="flex flex-nowrap md:justify-center justify-start px-2 md:pl-12 md:gap-6 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryClick(category)}
                  className={`
                                    relative md:px-5 px-2 py-2 rounded-xl cursor-pointer font-medium transition-colors duration-200 text-xs md:text-sm
                                    ${
                                      activeCategory === category
                                        ? `text-white`
                                        : // FIXED: Using the exact text color you requested.
                                          "text-[#6B7280] hover:bg-gray-200"
                                    }
                                `}
                >
                  <AnimatePresence>
                    {activeCategory === category && (
                      <motion.div
                        layoutId="highlight"
                        className={`absolute px-3 py-2 inset-0 bg-[${PALETTE.ACCENT_PINK}] rounded-2xl z-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  {/* FIXED: Added whitespace-nowrap to prevent titles from breaking. */}
                  <span className="relative z-10 whitespace-nowrap">
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
