'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image'; // For the bell icon and user avatar

// --- Sample Notification Data ---
interface NotificationItemData {
    id: number;
    title: string;
    message: string;
    iconSrc: string; // Path to the icon image (yellow bell)
    // Add other relevant fields like timestamp, read status, link, etc.
}

const loremIpsumShort = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const initialNotifications: NotificationItemData[] = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: 'Notification Title',
    message: loremIpsumShort,
    iconSrc: '/yellow-bell-icon.png', // <-- UPDATE PATH to your yellow bell icon
}));


export default function NotificationsPage() {
    const [notifications] = useState<NotificationItemData[]>(initialNotifications);
    // Add state for pagination, filtering, marking as read, etc. if needed

    // Dummy user for Header
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-10"> {/* Increased lg padding */}
                <div className="max-w-3xl mx-auto"> {/* Centered content with max-width */}
                    {/* No explicit page title in the image, straight to notifications */}
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer" // Added cursor-pointer and hover effect
                            >
                                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-yellow-400 rounded-full">
                                     <Image
                                        src={notification.iconSrc}
                                        alt="Notification Bell"
                                        width={28} // Adjust size as needed for icon within circle
                                        height={28}
                                        className="filter brightness-0 invert" // Makes a yellow icon white if needed, or remove if icon is already white/contrasting
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-gray-800 mb-1">{notification.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3"> {/* line-clamp-3 to limit message length */}
                                        {notification.message}
                                    </p>
                                    {/* Optional: Add timestamp or action buttons here */}
                                    {/* <span className="text-xs text-gray-400 mt-1.5 block">2 hours ago</span> */}
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Optional: Add Load More button or pagination */}
                     {/* <div className="mt-8 text-center">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Load More</button>
                     </div> */}
                </div>
            </main>

            <Footer />
        </div>
    );
}