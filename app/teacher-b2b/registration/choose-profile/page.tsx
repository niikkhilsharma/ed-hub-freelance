'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'
import AuthLayout from '@/components/auth-layout' // Adjust path if needed

const profiles = [
  { id: 'student', label: 'Student / Parents', iconSrc: '/images/profile-student-smiley.svg' },
  { id: 'teacher', label: 'Teacher', iconSrc: '/images/profile-teacher-pen.svg' },
  { id: 'principal', label: 'Principal', iconSrc: '/images/profile-principal-star.svg' },
]

export default function ChooseProfilePage() {
  const [selectedProfile, setSelectedProfile] = useState<string>(profiles[2].id)

  return (
    <AuthLayout
      leftPanelTitle="Become a Future School"
      leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
      <div className='flex gap-2'>
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y={24}
            width={24}
            height={24}
            rx={12}
            transform="rotate(-90 0 24)"
            fill="black"
            fillOpacity="0.1"
          />
          <path
            d="M19 12H5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Profile</h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {profiles.map(profile => (
          <div
            key={profile.id}
            onClick={() => setSelectedProfile(profile.id)}
            className="flex items-center justify-between p-2 pl-4 pr-2 cursor-pointer transition-all duration-200 bg-white hover:shadow-lg rounded-full border border-gray-200">
            <div className="flex items-center gap-4">
              <Image src={profile.iconSrc} alt={`${profile.label} icon`} width={32} height={32} />
              <span className="text-md font-semibold text-gray-700">{profile.label}</span>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${selectedProfile === profile.id ? 'bg-[#3366FF]' : 'bg-transparent'
                }`}>
              {selectedProfile === profile.id && <FiCheck className="w-5 h-5 text-white stroke-2" />}
            </div>
          </div>
        ))}
      </div>
    </AuthLayout>
  )
}