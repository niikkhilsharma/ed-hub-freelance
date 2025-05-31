'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { FiDownload, FiPaperclip, FiSend } from 'react-icons/fi';

// --- Teacher List Item ---
interface TeacherContact {
    id: string;
    name: string;
    subject: string;
    avatarSrc: string;
    lastMessageTime?: string; // e.g., "7:00 pm"
    isActive?: boolean;
}
const TeacherListItem = ({ teacher, onClick, isActive }: { teacher: TeacherContact, onClick: () => void, isActive: boolean }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center p-3 rounded-xl transition-colors ${
            isActive ? 'bg-yellow-100' : 'hover:bg-gray-100'
        }`}
    >
        <Image src={teacher.avatarSrc} alt={teacher.name} width={40} height={40} className="rounded-full object-cover mr-3 flex-shrink-0" />
        <div className="flex-1 text-left">
            <h4 className="text-sm font-semibold text-gray-800">{teacher.name}</h4>
            <p className="text-xs text-gray-500">{teacher.subject}</p>
        </div>
        {teacher.lastMessageTime && <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{teacher.lastMessageTime}</span>}
    </button>
);

// --- Chat Message Component ---
interface ChatMessageData {
    id: string;
    sender: 'user' | 'teacher'; // Or use sender's name/ID
    text?: string;
    imageUrl?: string;
    imageName?: string; // For download purposes
    timestamp: string; // e.g., "6:50 pm"
}
const ChatMessage = ({ message }: { message: ChatMessageData }) => {
    const isUser = message.sender === 'user'; // Assuming 'user' is the one sending messages from the input

    return (
        <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow ${
                isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'
            }`}>
                {message.text && <p className="text-sm leading-relaxed">{message.text}</p>}
                {message.imageUrl && (
                    <div className="mt-2">
                        <Image
                            src={message.imageUrl}
                            alt={message.imageName || "Chat image"}
                            width={300} // Adjust as needed
                            height={200} // Adjust as needed
                            className="rounded-lg object-cover"
                        />
                        <button className="mt-2 flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 bg-white p-2 rounded-lg shadow border border-gray-200 w-full justify-center">
                            <FiDownload className="w-3.5 h-3.5" />
                            <span>{message.imageName || 'Download Image'}</span>
                        </button>
                    </div>
                )}
                <p className={`text-xs mt-1.5 ${isUser ? 'text-blue-200 text-right' : 'text-gray-400 text-left'}`}>
                    {message.timestamp}
                </p>
            </div>
        </div>
    );
};


// --- Sample Data ---
const teachersList: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({
    id: `teacher${i + 1}`,
    name: 'Teacher Name',
    subject: 'Subject',
    avatarSrc: `/teacher-avatar-chat-${(i % 3) + 1}.jpg`, // Cycle through 3 avatar examples
    lastMessageTime: '7:00 pm',
    isActive: i === 0, // First teacher active by default
}));

const initialChatMessages: ChatMessageData[] = [
    { id: 'm1', sender: 'teacher', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", timestamp: "6:50 pm", imageUrl: '/moon-chat-image.jpg', imageName: 'Moon_Surface.jpg' }, // UPDATE PATH
    { id: 'm2', sender: 'user', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", timestamp: "6:50 pm" },
];


export default function ChatPage() {
    const [activeTeacherId, setActiveTeacherId] = useState<string | null>(teachersList[0]?.id || null);
    const [messages, setMessages] = useState<ChatMessageData[]>(initialChatMessages);
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null); // For scrolling to bottom

    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" }; // UPDATE PATH

    const selectedTeacher = teachersList.find(t => t.id === activeTeacherId);

    useEffect(() => {
        // Scroll to the bottom of the chat messages when new messages are added
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleTeacherSelect = (teacherId: string) => {
        setActiveTeacherId(teacherId);
        // Here you would typically fetch chat history for the selected teacher
        setMessages(initialChatMessages); // Reset to initial messages for demo
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const messageToSend: ChatMessageData = {
            id: `m${messages.length + 1}`,
            sender: 'user', // Assuming the current user is sending
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase(),
        };
        setMessages(prevMessages => [...prevMessages, messageToSend]);
        setNewMessage('');
    };


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex gap-6 items-start">
                {/* Left Column: Teacher List */}
                <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-xl p-4 self-stretch"> {/* self-stretch */}
                    <h2 className="text-lg font-semibold text-pink-600 mb-4 px-2">Teachers</h2>
                    <div className="space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar pr-1"> {/* Scrollable list */}
                        {teachersList.map(teacher => (
                            <TeacherListItem
                                key={teacher.id}
                                teacher={teacher}
                                isActive={activeTeacherId === teacher.id}
                                onClick={() => handleTeacherSelect(teacher.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Chat Interface */}
                <div className="w-full md:w-2/3 lg:w-3/4 bg-white rounded-2xl shadow-xl flex flex-col self-stretch"> {/* self-stretch */}
                    {selectedTeacher ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                                <Image src={selectedTeacher.avatarSrc} alt={selectedTeacher.name} width={40} height={40} className="rounded-full object-cover" />
                                <h3 className="text-md font-semibold text-gray-800">{selectedTeacher.name}</h3>
                            </div>

                            {/* Chat Messages Area */}
                            <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar min-h-[calc(100vh-20rem)] max-h-[calc(100vh-20rem)]">
                                {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                                <div ref={chatEndRef} /> {/* For scrolling to bottom */}
                            </div>

                            {/* Message Input Area */}
                            <div className="p-4 border-t border-gray-200">
                                <form onSubmit={handleSendMessage} className="flex items-center gap-3 bg-gray-100 rounded-xl p-1.5">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Message"
                                        className="flex-grow bg-transparent px-3 py-2.5 text-sm text-gray-700 focus:outline-none placeholder-gray-400"
                                    />
                                    <button type="button" className="p-2 text-gray-500 hover:text-blue-600 focus:outline-none">
                                        <FiPaperclip className="w-5 h-5" />
                                    </button>
                                    <button
                                        type="submit"
                                        className="p-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none disabled:opacity-50"
                                        disabled={!newMessage.trim()}
                                    >
                                        <FiSend className="w-5 h-5 transform -rotate-45" />
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div className="flex-grow flex items-center justify-center text-gray-400">
                            Select a teacher to start chatting.
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}