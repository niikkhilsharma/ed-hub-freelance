'use client';

import { FC } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const CustomNumberInput: FC<{
  label: string;
  value: number;
  onChange: (value: number) => void;
}> = ({ label, value, onChange }) => {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(Math.max(0, value - 1));

  return (
    <div className="flex flex-col items-center gap-1 text-sm">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="number"
          value={value.toString().padStart(2, '0')}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 text-center py-2 rounded-full border border-gray-300 appearance-none no-spinner text-sm"
        />
        {/* Custom Arrows */}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 text-gray-500">
          <button type="button" onClick={increase}>
            <FiChevronUp size={14} />
          </button>
          <button type="button" onClick={decrease}>
            <FiChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CreateTest: FC = () => {
  return (
    <form className="max-w-lg mx-auto w-full space-y-6 py-2 md:py-4 px-2">
      {/* Test Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Test Name
        </label>
        <input
          type="text"
          placeholder="Text"
          className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Text"
          rows={8}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm resize-none"
        />
      </div>

      {/* Duration & Points */}
      <div>
        <p className="text-sm font-medium text-gray-800 mb-2">
          Duration & Point
        </p>
        <div className="grid grid-cols-4 gap-2">
          <CustomNumberInput label="Hours" value={0} onChange={() => {}} />
          <CustomNumberInput label="Minutes" value={0} onChange={() => {}} />
          <CustomNumberInput label="Total Points" value={0} onChange={() => {}} />
          <CustomNumberInput label="Pass Points" value={0} onChange={() => {}} />
        </div>
      </div>
    </form>
  );
};

export default CreateTest;
