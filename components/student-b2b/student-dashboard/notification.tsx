"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
import Image from "next/image"; // For the bell icon and user avatar

// --- Sample Notification Data ---
interface NotificationItemData {
  id: number;
  title: string;
  message: string;
  iconSrc: string; // Path to the icon image (yellow bell)
  // Add other relevant fields like timestamp, read status, link, etc.
}

const loremIpsumShort =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

const initialNotifications: NotificationItemData[] = Array.from(
  { length: 6 },
  (_, i) => ({
    id: i + 1,
    title: "Notification Title",
    message: loremIpsumShort,
    iconSrc: "/svg/notification.svg", // <-- UPDATE PATH to your yellow bell icon
  })
);

export default function NotificationsPage({ imageSrc }: { imageSrc?: string }) {
  const [notifications] =
    useState<NotificationItemData[]>(initialNotifications);
  // Add state for pagination, filtering, marking as read, etc. if needed

  // Dummy user for Header
  const headerUser = {
    name: "Shlok Agheda",
    role: "Student",
    avatarSrc: imageSrc || "/placeholder-avatar-student.jpg", // UPDATE PATH
  };

  return (
    <div className="min-h-screen relative flex flex-col">
     
        <div
          className="min-h-screen absolute  h-full inset-0 z-10"
          style={{
            backgroundImage: "url('/images/brandpatternnoti.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="bg-black/40 z-20 inset-0 min-h-screen h-full  absolute "></div>
     
      <Header user={headerUser} />

      <main className=" relative flex-grow z-20 container mx-auto p-4 sm:p-6 lg:p-10">
        {" "}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start  space-y-4 gap-4 p-4 bg-[#F9FAFB] rounded-3xl hover:shadow-sm cursor-pointer border border-[#E5E7EB]"
              >
                <Image
                  src={"/svg/notification.svg"}
                  alt="Notification Bell"
                  width={85}
                  height={85}
                  className="w-16 h-16"
                />
                <div className="flex-1">
                  <h3 className="text-md font-semibold text-[#000000] mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-[0.80rem] text-[#777777] line-clamp-2">
                    {notification.message}
                  </p>
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
    </div>
  );
}
