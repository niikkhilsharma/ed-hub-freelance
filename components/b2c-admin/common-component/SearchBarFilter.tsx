'use client';

import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

// Type for individual filter
interface FilterOption {
  id: string;
  label: string;
}

// Filters component
interface FiltersProps {
  filters: FilterOption[];
}

const Filters: FC<FiltersProps> = ({ filters }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter, index) => (
        <button
          key={filter.id}
          className={`text-sm px-4 py-2 rounded-md border ${
            index === 0
              ? 'bg-white shadow-sm border-gray-400'
              : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
          }`}
        >
          {filter.label} <span className="ml-1">▼</span>
        </button>
      ))}
    </div>
  );
};

// Main SearchFilter component
interface SearchFilterProps {
  filters: FilterOption[];
}

const SearchFilter: FC<SearchFilterProps> = ({ filters }) => {
  return (
    <div className="w-full bg-white text-black flex flex-col sm:flex-row gap-4 items-center px-4 py-2 rounded-xl">
      {/* Search Input */}
      <div className="flex items-center w-full sm:w-auto flex-grow border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-gray-400">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Filters */}
      <Filters filters={filters} />
    </div>
  );
};

export default SearchFilter;
