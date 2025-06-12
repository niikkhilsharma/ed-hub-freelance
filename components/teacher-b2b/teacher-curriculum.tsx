// app/components/CategorySelector.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MaxWidthWrapper from '../max-width-wrapper';
import Header from '../layout/Header';
import Footer from '../footer2';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
const PALETTE = {
  GREEN_LIGHT: "#8DD9B3", // Basic Academic Skills BG
  GREEN_DARK: "#4BC4B6", // Not explicitly used but similar to progress bar
  PURPLE_LIGHT: "#EEDAFE", // Critical Academic Skills BG
  PURPLE_DARK: "#A866DD", // Critical Academic Skills Progress
  PINK_LIGHT: "#FBD2D9", // Life Skill / Personal Dev BG
  PINK_DARK: "#893544", // Life Skill Progress (this is quite dark, using a lighter shade for text if needed)

  ACCENT_PINK: "#FF3366", // Tags, highlights
  ACCENT_BLUE: "#0DC6FD", // Line chart, progress
  ACCENT_PURPLE: "#AC50F5", // Line chart, progress
  ACCENT_RED: "#FF4A69", // Failed status

  BG_PAGE: "#F3F4F6", // Main page background
  BORDER_GREY: "#B0B0B0", // General borders for cards
  TEXT_DARK: "#1F2937", // For primary text
  TEXT_MEDIUM: "#6B7280", // For secondary text
  TEXT_LIGHT: "#9CA3AF", // For tertiary text
  WHITE_CARD: "#FFFFFF",
};

const sessionData = Array.from({ length: 14 }, (_, i) => ({
  title: `Session Name / Number ${i + 1}`,
  content: `This is detailed content for session ${i + 1}. It includes explanation of the topic, practical examples, and extended learning objectives. The content is structured to help students understand core principles and apply them in real scenarios. 

  This is detailed content for session ${i + 1}. It includes explanation of the topic, practical examples, and extended learning objectives. The content is structured to help students understand core principles and apply them in real scenarios. 

  This is detailed content for session ${i + 1}. It includes explanation of the topic, practical examples, and extended learning objectives. The content is structured to help students understand core principles and apply them in real scenarios. 

  This is detailed content for session ${i + 1}. It includes explanation of the topic, practical examples, and extended learning objectives. The content is structured to help students understand core principles and apply them in real scenarios. 

  Additional notes or references can be included here to support in-depth learning for session ${i + 1}.`,
}));
const Curriculum = () => {
  const [selected, setSelected] = useState<string>('Category 1');

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const headerUser = {
    name: "Educator Name",
    role: "Teacher",
    avatarSrc: "/teacher-b2b/profile.png",
  };
  return (
    <>
      <Header user={headerUser} />
      <MaxWidthWrapper>
        <section className="bg-gray-100">
          <div className="px-4 pt-4">
            <div className="w-full flex justify-center bg-white  rounded-2xl py-2">
              <div className="flex flex-wrap justify-center px-2 gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`
              relative px-5 py-2 rounded-2xl cursor-pointer font-medium transition-colors duration-200
              ${selected === category
                        ? `text-white bg-[${PALETTE.ACCENT_PINK}]`
                        : 'text-gray-700 hover:bg-gray-200'
                      }
            `}
                  >
                    {/* Animated background highlight */}
                    <AnimatePresence>
                      {selected === category && (
                        <motion.div
                          layoutId="highlight"
                          className={`absolute inset-0 bg-[${PALETTE.ACCENT_PINK}] rounded-2xl z-0`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Button text above animation layer */}
                    <span className="relative z-10">{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 p-4">
            {/* Left column */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Unit Name</h2>

              <div className="space-y-2">
                {sessionData.map((item, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div
                      key={index}
                      className="bg-gray-100 p-2 rounded-2xl shadow-md overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="w-full bg-white rounded-2xl flex justify-between items-center px-4 py-3 font-medium focus:outline-none"
                      >
                        <span>{item.title}</span>
                        {isOpen ? (
                          <IoIosArrowUp className="text-xl text-gray-600" />
                        ) : (
                          <IoIosArrowDown className="text-xl text-gray-600" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-4 py-4 rounded-2xl mt-2 bg-white text-sm text-gray-700 whitespace-pre-line">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right column with two rows */}
            <div className="grid  gap-4">
              <div className="bg-white p-6 rounded-xl overflow-auto">
                <h3 className="text-m text-blue-600 text-center font-semibold mb-4">COURSE STRUCTURE CLASS - IX</h3>

                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-blue-400 text-left">
                      <th className="border border-black px-4 py-2">Units</th>
                      <th className="border border-black px-4 py-2">Unit Name</th>
                      <th className="border border-black px-4 py-2 text-right">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['I', 'Number Systems', '10'],
                      ['II', 'Algebra', '20'],
                      ['III', 'Coordinate Geometry', '04'],
                      ['IV', 'Geometry', '27'],
                      ['V', 'Mensuration', '13'],
                      ['VI', 'Statistics', '06'],
                      ['', 'Total', '80'],
                    ].map(([unit, name, marks], idx) => (
                      <tr key={idx} className={name === 'Total' ? 'font-bold bg-blue-400' : 'bg-white'}>
                        <td className="border border-black  px-4 py-2">{unit}</td>
                        <td className="border border-black  px-4 py-2">{name}</td>
                        <td className="border border-black px-4 py-2 text-right">{marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-md space-y-6">
                {/* Title */}
                <div className="text-center space-y-1">
                  <h2 className="text-lg font-semibold uppercase">Mathematics</h2>
                  <p className="font-medium">Question Paper Design</p>
                  <p>Class - IX</p>
                  <div className="flex justify-between mt-2 text-sm font-medium px-2">
                    <span>Time: 3 Hrs.</span>
                    <span>Max. Marks: 80</span>
                  </div>
                </div>

                {/* Main Table */}
                <div className="overflow-auto">
                  <table className="w-full table-auto border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-400">
                        <th className="border border-black px-2 py-2 w-12">S. No</th>
                        <th className="border border-black px-2 py-2">Typology of Questions</th>
                        <th className="border border-black px-2 py-2">Total Marks</th>
                        <th className="border border-black px-2 py-2">% Weightage <br /> (approx.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [1, "Remembering: Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers. Understanding: Demonstrate understanding of facts and ideas by organizing, comparing, interpreting, giving descriptions, and stating main ideas.", 43, 54],
                        [2, "Applying: Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.", 19, 24],
                        [3, "Analysing: Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations. Evaluating: Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria. Creating: Compile information together in a different way by combining elements in a new pattern or proposing alternative solutions.", 18, 22],
                      ].map(([sn, question, marks, weight], i) => (
                        <tr key={i} className="bg-white even:bg-blue-50">
                          <td className="border border-black px-2 py-2 text-center align-top">{sn}</td>
                          <td className="border border-black px-2 py-2">{question}</td>
                          <td className="border border-black px-2 py-2 text-center">{marks}</td>
                          <td className="border border-black px-2 py-2 text-center">{weight}</td>
                        </tr>
                      ))}
                      <tr className="font-bold bg-blue-400">
                        <td className="border border-black px-2 py-2 text-center" colSpan={2}>Total</td>
                        <td className="border border-black px-2 py-2 text-center">80</td>
                        <td className="border border-black px-2 py-2 text-center">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Internal Assessment Section */}
                <div className=" text-sm">

                  <div className="overflow-auto">
                    <table className="w-full table-auto border-collapse text-sm">
                      <thead>
                        <tr className="bg-blue-200">
                          <th className="border border-black px-3 py-2 text-left" colSpan={2}>INTERNAL ASSESSMENT</th>
                          <th className="border border-black px-3 py-2 w-24 text-right">20 Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { component: "Pen Paper Test and Multiple Assessment (5+5)", marks: "10 Marks" },
                          { component: "Portfolio", marks: "05 Marks" },
                          { component: "Lab Practical (Lab activities to be done from the prescribed books)", marks: "05 Marks" },
                        ].map((item, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                            <td className="border border-black px-3 py-2" colSpan={2}>{item.component}</td>
                            <td className="border border-black px-3 py-2 text-right" >{item.marks}</td>
                          </tr>
                        ))}


                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default Curriculum;
