// page.tsx (e.g. /app/notifications/page.tsx)
"use client";

import React, { useState } from 'react'; // Removed useEffect as it wasn't used for page logic
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Removed unused icons like FiArrowLeft, FiChevronDown for this page
import { NotificationItemCard, NotificationItemData } from './components'; // Import from components.tsx

// --- Sample Data (kept in page.tsx for this example) ---
const loremIpsumShort = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

const initialNotificationsData: NotificationItemData[] = Array.from({ length: 6 }, (_, i) => ({
	id: i + 1,
	title: 'Notification Title',
	message: loremIpsumShort,
	iconSrc: '/svg/notification.svg', // Your original path
}));
// --- End Sample Data ---


export default function NotificationsPage({ imageSrc }: { imageSrc?: string }) { // Kept your imageSrc prop
	const [notifications] = useState<NotificationItemData[]>(initialNotificationsData);
	// Add state for pagination, filtering, marking as read, etc. if needed in the future

	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: imageSrc || '/placeholder-avatar-student.jpg', // Uses prop or fallback
	};

	return (
		<div className="min-h-screen flex flex-col bg-white"> {/* Added bg-gray-100 to match your page layout */}
			<Header user={headerUser} />

            {/* Original main: flex-grow container mx-auto p-4 sm:p-6 lg:p-10 */}
			<main className="flex-grow container mx-auto p-3 sm:p-6 lg:p-8 xl:p-10"> {/* Responsive padding */}
				{/* Original content wrapper: max-w-5xl mx-auto */}
                <div className="max-w-3xl mx-auto md:max-w-4xl lg:max-w-5xl"> {/* Responsive max-width */}
                    {/* Original list wrapper: space-y-4 */}
					<div className="space-y-3 sm:space-y-4">
						{notifications.map(notification => (
							<NotificationItemCard 
                                key={notification.id} 
                                notification={notification} 
                                // onClick={() => console.log("Notification clicked:", notification.id)} // Example click handler
                            />
						))}
					</div>
					
                    {/* Optional: Load More Button or Pagination - Preserved your commented out section */}
					{/* <div className="mt-6 sm:mt-8 text-center">
                        <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
                            Load More
                        </button>
                     </div> */}
				</div>
			</main>

			<Footer />
		</div>
	);
}