// components/PeopleGrid.jsx
"use client"
import React from 'react';

export default function StudentGrid ()  {
  const personImageUrl = '/admin/student.png'; 

  const people = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    name: ' Student Name', 
    image: personImageUrl, 
  }));

  return (
    <div className="container  custom-scrollbar-thin mx-auto py-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {people.map((person) => (
         
          <div
            key={person.id}
            className="flex items-center bg-[#f3f4f6] rounded-2xl p-4 space-x-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-14 h- sm:w-16 sm:h-16 rounded-lg object-cover" 
            />
           
            <div className="flex-grow"> 
              <p className="text-lg font-semibold text-gray-800">{person.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

