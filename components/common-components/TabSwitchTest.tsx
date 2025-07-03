"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface TabSwitchProps {
  tabs: readonly string[]; // Accept any array of strings (even readonly)
  selected: string;
  onChange: (tab: string) => void;
}


const TabSwitchTest: React.FC<TabSwitchProps> = ({ tabs, selected, onChange }) => {
  return (
    <div className="pb-4">
      <div className="w-full flex justify-center bg-white rounded-2xl py-2">
        <div className="flex overflow-x-auto custom-scrollbar-thin justify-center px-2 gap-4">
          {tabs.map((tab, index) => {
            const isSelected = selected === tab;
            return (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                className="relative px-3.5 py-2 flex items-center gap-2 rounded-xl cursor-pointer transition-colors duration-300"
              >
                {/* Number Circle */}
                <motion.div
                  className={`w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs border-2 ${
                    isSelected ? 'border-[#FF3366] text-[#FF3366]' : 'border-gray-400 text-gray-500'
                  }`}
                  animate={{ color: isSelected ? '#FF3366' : '#6B7280', borderColor: isSelected ? '#FF3366' : '#D1D5DB' }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>

                {/* Tab Text */}
                <motion.span
                  className={`text-xs sm:text-sm md:text-md font-medium`}
                  animate={{ color: isSelected ? '#FF3366' : '#4B5563' }} // Tailwind: pink-500 or gray-700
                  transition={{ duration: 0.3 }}
                >
                  {tab}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabSwitchTest;
