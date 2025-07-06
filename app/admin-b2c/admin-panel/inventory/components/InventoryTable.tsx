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
    <div className="w-full bg-white p-4 overflow-x-auto custom-scrollbar-thin rounded-2xl shadow-sm">

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-[#8DD9B3] text-black font-semibold text-sm rounded-2xl p-4 md:pl-12 md:pr-20 md:py-6">
        <div className="text-left">Image</div>
        <div className="text-center">Item Name</div>
        <div className="text-center">Description</div>
        <div className="text-end">Stock</div>
      </div>

      {/* Table Body */}
      <div className="flex relative  flex-col gap-4 mt-2">
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative border grid grid-cols-4 items-center bg-[#F9F9F9] px-4 py-4 rounded-2xl md:pl-12 md:pr-20`}
          >
            {/* Image */}
            <div className="flex items-center">
              <div className="w-24 h-16 rounded-xl relative overflow-hidden">
                <Image
                  src={item.image}
                  alt="item"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-sm text-center">{item.name}</div>

            {/* Description */}
            <div className="text-sm text-center">{item.description}</div>

            {/* Stock */}
            <div className="text-sm text-end">{item.stock}</div>


          </div>
        ))}
        <div className="fixed right-2 sm:right-10 top-1/2 -translate-y-1/2 flex gap-2 z-10">
          <button className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-2.5 rounded-full text-xs font-medium shadow hover:opacity-90">
            <FiPlus size={14} />
            Assign Task
          </button>
          <button className="flex items-center gap-1 bg-yellow-400 text-white px-3 py-2.5 rounded-full text-xs font-medium shadow hover:opacity-90">
            <FiPlus size={14} />
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
