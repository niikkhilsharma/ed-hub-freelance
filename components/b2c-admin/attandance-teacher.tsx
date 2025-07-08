// components/PeopleGrid.jsx
"use client"
import React from 'react';
import Link from 'next/link';
export default function PeopleGrid ()  {
  const personImageUrl = '/admin/teacher.png'; 

  const people = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    name: 'Name', 
    image: personImageUrl, 
  }));

  return (
    <div className="overflow-y-auto max-h-[80vh]   no-scrollbar sm:custom-peach-scrollbar mx-auto py-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
        {people.map((person ,indx) => (
           <Link href="/admin-b2c/admin-panel/teacher-attendence " key={indx}>
         
          <div
            key={indx}
           
            className="flex items-center bg-[#f3f4f6] rounded-2xl p-3 space-x-4 shadow-sm" 
          >
            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-14 h-14 sm:w-24 sm:h-24 rounded-lg object-contain" 
            />
           
            <div className="flex-grow"> 
              <p className="text-lg font-medium text-black">{person.name}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

