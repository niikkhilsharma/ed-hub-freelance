'use client';

import { FC } from 'react';
import { FiCheck } from 'react-icons/fi';

const Review: FC = () => {
  const question = {
    number: 1,
    question: 'Which part of the plant makes food ?',
    category: 'Academic Skills',
    points: 4,
    options: ['Option', 'Option', 'Option'],
    correctIndex: 0,
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10 space-y-8 bg-white">
      {/* Test Info */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Test Title</h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
        </p>

        <div className="bg-gray-100 text-sm text-gray-700 px-4 py-2 rounded-xl w-max space-y-1">
          <p>Duration : 30 Minutes</p>
          <p>Total Point: 100</p>
        </div>

        <button className="px-4 py-2 bg-gray-100 rounded-full text-sm shadow-sm hover:opacity-90">
          Edit
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-[#F9F9F9] rounded-3xl p-6 space-y-4 max-w-3xl">
        <p className="text-sm font-medium text-gray-500">Question {question.number}</p>

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {question.question}
          </h2>
          <span className="text-sm font-semibold text-gray-400">{question.points} Points</span>
        </div>

        <p className="text-sm text-gray-700">
          Question Category: <span className="font-medium">{question.category}</span>
        </p>

        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <div
              key={i}
              className={`w-full px-4 py-2 rounded-full flex items-center gap-3 text-sm border 
                ${i === question.correctIndex ? 'bg-green-100 border-green-400 text-green-600 font-medium' : 'bg-white border-gray-300 text-gray-700'}`}
            >
              {i === question.correctIndex && (
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-400 text-white">
                  <FiCheck size={12} />
                </div>
              )}
              {opt}
            </div>
          ))}
        </div>

        <button className="mt-2 px-4 py-2 bg-gray-100 rounded-full text-sm shadow-sm hover:opacity-90">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Review;
