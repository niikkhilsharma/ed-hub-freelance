'use client';

import StudentWrapper from "@/components/student-wrapper";
import { ChevronDown } from 'lucide-react';
import Footer from "@/components/footer";
import { useState } from "react";
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What is Eduport?',
    answer: 'Eduport is a modern education platform designed to empower learning centers and individual learners.',
  },
  {
    question: 'Is Eduport free to use?',
    answer: 'Yes, Eduport offers a free plan with essential features. Premium features are available with subscription plans.',
  },
  {
    question: 'Can I use Eduport as a tutor?',
    answer: 'Absolutely! Eduport allows tutors to register, create courses, and manage students with ease.',
  },
  {
    question: 'Is there customer support?',
    answer: 'Yes, we offer 24/7 customer support via live chat and email to assist you at any time.',
  },
];

export default function CourseDetail() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10 pb-40">
        {/* Header */}
        <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">Frequently Asked Questions</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">Frequently Asked Questions</div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-lg border shadow transition duration-300",
                    isOpen ? "bg-white border-[#cfd9ff]" : "bg-[#f1f5ff] border-[#e0e7ff]"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-3 text-left cursor-pointer group"
                  >
                    <span className="text-base font-semibold text-gray-800 group-hover:text-[#3b5bdb] transition">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-gray-500 transform transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'overflow-hidden transition-all border border-[#e0e7ff] duration-300 ease-in-out px-5 pt-0 text-sm text-gray-600',
                      isOpen ? 'max-h-96 pb-5' : 'max-h-0'

                    )}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
