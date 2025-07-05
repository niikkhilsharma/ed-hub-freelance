'use client';

import Image from 'next/image';
import { FC } from 'react';

export type UserRole = 'Student' | 'Teacher' | 'Mentor';

export interface UserCardProps {
  name: string;
  image: string;
  role: UserRole;
  subtitle: string; // Subject / Institution / Level
  classInfo: string;
  batchInfo: string;
}

const UserCard: FC<UserCardProps> = ({
  name,
  image,
  role,
  subtitle,
  classInfo,
  batchInfo,
}) => {
  const isPink = role === 'Teacher' || role === 'Mentor';

  return (
    <div className="w-full bg-[#f7f8f9] rounded-2xl px-4 py-3 flex items-center gap-4 shadow-sm hover:shadow transition">
      {/* Profile */}
      <div className="w-14 h-14 rounded-2xl overflow-hidden border">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-sm leading-tight">
        <p className="font-semibold text-gray-900">{name}</p>
        <p
          className={`font-medium ${
            isPink ? 'text-[#ff3366]' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
        <p className="text-xs text-gray-500">{classInfo}</p>
        <p className="text-xs text-gray-500">{batchInfo}</p>
      </div>
    </div>
  );
};

export default UserCard;
