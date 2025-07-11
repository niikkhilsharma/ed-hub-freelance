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
    <div className="w-full bg-[#f7f8f9] rounded-2xl p-2 flex items-center gap-4">
      {/* Profile */}
      <div className={`relative rounded-2xl overflow-hidden border ${role === "Teacher"
          ? "w-20 h-20"
          : role === "Mentor"
            ? "w-20 h-20"
            : role === "Student"
              ? "w-18 h-14"
              : ""
        }`}>
        <Image
          src={image}
          alt={name}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-sm leading-tight">
        <p className={`${role === "Student" ? "font-medium" : "font-semibold"} text-base text-gray-900`}>{name}</p>
        {isPink && (
          <p className="font-medium text-[#ff3366]">
            {subtitle}
          </p>
        )}

        <p className="text-xs text-gray-500">{classInfo}</p>
        <p className="text-xs text-gray-500">{batchInfo}</p>
      </div>
    </div>
  );
};

export default UserCard;
