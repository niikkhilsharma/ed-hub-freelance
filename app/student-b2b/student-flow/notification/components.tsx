// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';

// --- Data Interface (for NotificationItemCard) ---
export interface NotificationItemData { // Export if page.tsx needs to type its state/data
	id: number;
	title: string;
	message: string;
	iconSrc: string;
}

// --- Component 1: NotificationItemCard (Major Component) ---
interface NotificationItemCardProps {
    notification: NotificationItemData;
    onClick?: () => void; // Optional click handler for the card
}
export const NotificationItemCard: React.FC<NotificationItemCardProps> = ({ notification, onClick }) => (
    // Original desktop classes: flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-2xl hover:shadow-sm cursor-pointer border border-[#E5E7EB]
    <div
        key={notification.id} // Key is good practice if this component is mapped directly
        onClick={onClick}
        className={`flex items-start gap-3 p-3 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]
                   sm:gap-4 sm:p-4 sm:rounded-2xl 
                   ${onClick ? 'cursor-pointer hover:shadow-sm' : ''} transition-shadow duration-150`}
                   // Desktop shadow on hover only if clickable
    >
        {/* Original Image: src={'/svg/notification.svg'} alt="Notification Bell" width={85} height={85} className="w-16 h-16" */}
        <Image 
            src={notification.iconSrc} // Use prop for icon source
            alt="Notification Icon" 
            width={64} // Original was w-16 which is 64px if base font is 16px. Using direct px for consistency.
            height={64}
            className="w-12 h-12 flex-shrink-0 sm:w-16 sm:h-16 object-contain" // Mobile size, sm+ for desktop. object-contain to ensure bell fits.
        />
        <div className="flex-1 min-w-0"> {/* min-w-0 for proper truncation */}
            {/* Original h3: text-md font-semibold text-[#000000] mb-1 */}
            <h3 className="text-sm font-semibold text-[#000000] mb-0.5 sm:text-md sm:mb-1">{notification.title}</h3>
            {/* Original p: text-[0.80rem] text-[#777777] line-clamp-2 */}
            <p className="text-xs text-[#777777] line-clamp-2 sm:text-[0.80rem]">{notification.message}</p>
        </div>
    </div>
);