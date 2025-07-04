'use client';

import Image from 'next/image';
import { FC } from 'react';
import { FiPlus } from 'react-icons/fi';

interface Item {
  id: number;
  name: string;
  description: string;
  stock: number;
  image: string;
}

interface InventoryTableProps {
  data: Item[];
}

const InventoryTable: FC<InventoryTableProps> = ({ data }) => {
  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-4 bg-green-200 text-black font-semibold text-sm rounded-t-2xl px-4 py-3">
        <div className="text-left">Image</div>
        <div className="text-left">Item Name</div>
        <div className="text-left">Description</div>
        <div className="text-left">Stock</div>
      </div>

      {/* Table Body */}
      <div className="flex flex-col gap-4 mt-2">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative grid grid-cols-4 items-center bg-[#F9F9F9] px-4 py-4 rounded-2xl`}
          >
            {/* Image */}
            <div className="flex items-center">
              <div className="w-20 h-14 rounded-xl relative overflow-hidden">
                <Image
                  src={item.image}
                  alt="item"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-sm">{item.name}</div>

            {/* Description */}
            <div className="text-sm">{item.description}</div>

            {/* Stock */}
            <div className="text-sm text-right">{item.stock}</div>

            {/* Floating Buttons */}
            {index === 3 && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 z-10">
                <button className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow hover:opacity-90">
                  <FiPlus size={14} />
                  Assign Task
                </button>
                <button className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow hover:opacity-90">
                  <FiPlus size={14} />
                  Add Item
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryTable;
