'use client';

import { FC } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

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
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`text-xs sm:text-sm px-2 py-2 flex items-center gap-3 rounded-xl border bg-[#f9fafb] hover:bg-gray-200`}
        >
          {filter.label} <FiChevronDown />
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
    <div className="w-full bg-white text-black flex flex-col sm:flex-row gap-4 items-center py-2 rounded-xl">
      {/* Search Input */}
      <div className="flex items-center w-full sm:w-auto flex-grow border-2 border-[#6B7280] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-gray-400">
        <FiSearch size={20} className="text-black mr-2" />
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
