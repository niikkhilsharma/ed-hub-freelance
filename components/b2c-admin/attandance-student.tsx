// components/PeopleGrid.jsx
"use client"
import React from 'react';
import Link from 'next/link';
export default function StudentGrid ()  {
  const personImageUrl = '/admin/student.png'; 

  const people = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    name: ' Student Name', 
    image: personImageUrl, 
  }));

  return (
    <div className="overflow-y-auto max-h-[80vh]  custom-peach-scrollbar mx-auto py-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 mx-2 gap-4">
        {people.map((person) => (
           <Link href="/admin-b2c/admin-panel/student-attendence">
         
          <div
            key={person.id}
            className="flex items-center bg-[#f3f4f6] rounded-2xl p-2 space-x-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-14 h-14 sm:w-24 sm:h-20 rounded-2xl object-cover" 
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

