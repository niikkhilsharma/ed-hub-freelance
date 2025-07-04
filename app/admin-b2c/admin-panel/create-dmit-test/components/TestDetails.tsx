'use client';

import { FC, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const CustomNumberInput: FC<{
  value: number;
  onChange: (val: number) => void;
}> = ({ value, onChange }) => {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(Math.max(0, value - 1));

  return (
    <div className="relative w-16">
      <input
        type="number"
        value={value.toString().padStart(2, '0')}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full text-center py-2 rounded-full border border-gray-300 text-sm no-spinner"
      />
      <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-gray-500">
        <button type="button" onClick={increase}>
          <FiChevronUp size={14} />
        </button>
        <button type="button" onClick={decrease}>
          <FiChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

const TeatDetails: FC = () => {
  const [points, setPoints] = useState(0);
  const [optionCount, setOptionCount] = useState(4);
  const [correctOption, setCorrectOption] = useState('Option 1');

  const options = Array.from({ length: optionCount }, (_, i) => `Option ${i + 1}`);

  return (
    <form className="max-w-2xl w-full p-6 bg-white space-y-6">
      {/* Question Row */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Question</label>
        <input
          type="text"
          placeholder="1. Question"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm"
        />
        <span className="text-sm font-medium">Points</span>
        <CustomNumberInput value={points} onChange={setPoints} />
      </div>

      {/* Category */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Question Category</label>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-1">
            <input type="radio" name="category" />
            Brain Development
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="category" />
            Academic Skills
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="category" />
            Personality Development
          </label>
        </div>
      </div>

      {/* Answer Type */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Answer Type</label>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-1">
            <input type="radio" name="type" />
            MCQ
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="type" />
            Subjective
          </label>
        </div>
      </div>

      {/* Option Count */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Options</label>
        <CustomNumberInput value={optionCount} onChange={setOptionCount} />
      </div>

      {/* Option Inputs */}
      {options.map((opt, idx) => (
        <div key={idx}>
          <label className="text-sm">Option {idx + 1}:</label>
          <input
            type="text"
            placeholder="Question"
            className="w-full mt-1 px-4 py-2 rounded-full border border-gray-300 text-sm"
          />
        </div>
      ))}

      {/* Add Tips */}
      <div>
        <label className="text-sm">Add Tips:</label>
        <input
          type="text"
          placeholder="Tip"
          className="w-full mt-1 px-4 py-2 rounded-full border border-gray-300 text-sm"
        />
      </div>

      {/* Correct Option Selector */}
      <div className="flex items-center gap-4 flex-wrap">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="correct"
              checked={correctOption === opt}
              onChange={() => setCorrectOption(opt)}
            />
            {opt}
          </label>
        ))}
      </div>

      {/* File Upload */}
      <div>
        <label className="block w-max px-4 py-2 bg-yellow-400 rounded-full text-white font-medium text-sm cursor-pointer shadow hover:opacity-90">
          Upload Image / File
          <input type="file" hidden />
        </label>
        <p className="text-xs text-gray-500 mt-1">Image/file name.extension</p>
      </div>
    </form>
  );
};

export default TeatDetails;
