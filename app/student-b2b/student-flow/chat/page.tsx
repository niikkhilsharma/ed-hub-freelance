// page.tsx (e.g. /app/chat/page.tsx)
"use client";

import React, { useState,  } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    TeacherListSidebar,
    ChatArea,
    TeacherContact, // Import type
    ChatMessageData // Import type
} from './components';

// --- Sample Data (Strictly from your original) ---
const teachersListData: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({ // Kept 10 distinct teacher entries
	id: `teacher${i + 1}`,
	name: 'Teacher Name', // All are "Teacher Name"
	subject: 'Subject',    // All are "Subject"
	avatarSrc: `/teacher-avatar-chat-${(i % 3) + 1}.jpg`,
	lastMessageTime: '7:00 pm',
	// isActive is handled by activeTeacherId state
}));

const initialChatMessagesData: ChatMessageData[] = [ // Exactly two messages
	{
		id: 'm1', sender: 'teacher', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		timestamp: '6:50 pm', imageUrl: '/images/earth.png', imageName: 'Moon_Surface.jpg',
	},
	{
		id: 'm2', sender: 'user', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		timestamp: '6:50 pm',
	},
];
// --- End Sample Data ---

export default function ChatPage() {
	const [activeTeacherId, setActiveTeacherId] = useState<string | null>(teachersListData[0]?.id || null);
	const [messages, setMessages] = useState<ChatMessageData[]>(initialChatMessagesData);
	const [newMessage, setNewMessage] = useState('');

	const headerUser = { name: 'Student Name', role: 'Student', avatarSrc: '/teacher-b2b/profile.png' };
	const selectedTeacher = teachersListData.find(t => t.id === activeTeacherId);

	const handleTeacherSelect = (teacherId: string) => {
		setActiveTeacherId(teacherId);
		setMessages(initialChatMessagesData); // Reset to initial 2 messages for demo as per original
	};

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (newMessage.trim() === '') return;
		const messageToSend: ChatMessageData = {
			id: `m${messages.length + 1}`, sender: 'user', text: newMessage,
			timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase(),
		};
		setMessages(prevMessages => [...prevMessages, messageToSend]);
		setNewMessage('');
	};

	return (
		<div className=" min-h-screen  bg-[#EEEEEE] flex flex-col"
		
		>
			
			<Header user={headerUser} />
            {/* Original main: flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex gap-5 items-start */}
			<main className=" z-20 relative flex-grow container mx-auto p-2 flex flex-col gap-3 
                           sm:p-4 md:p-6 lg:p-8 sm:gap-5 lg:flex-row lg:items-start"> {/* Responsive padding, gap, and flex direction */}
				<TeacherListSidebar
                    teachers={teachersListData} // Using the 10-item list for initial render
                    activeTeacherId={activeTeacherId}
                    onTeacherSelect={handleTeacherSelect}
                />
				<ChatArea
                    selectedTeacher={selectedTeacher}
                    messages={messages}
                    newMessage={newMessage}
                    onNewMessageChange={(e) => setNewMessage(e.target.value)}
                    onSendMessage={handleSendMessage}
                />
			</main>
				<Footer />
			
		</div>
	);
}