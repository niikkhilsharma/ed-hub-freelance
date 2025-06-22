// page.tsx (e.g., /app/courses/page.tsx or /pages/my-courses.tsx)
"use client";

// import React, { useState } from 'react'; // Only if page-level state is needed
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CourseSection, AiSuggestsSection, Course } from './components'; 
// --- Sample Data (moved to page.tsx for clarity) ---
const ongoingCoursesData: Course[] = [
    { id: 1, status: 'ongoing', isKnowledgeBox: true, imageSrc: '/C1.png', name: 'My Knowledge Box', description: 'Explore subjects like Academics, Sports & more', domain: '', levelGrade: '' },
    { id: 2, status: 'ongoing', imageSrc: '/C2.png', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Alpha', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 70 },
    { id: 3, status: 'ongoing', imageSrc: '/C2.png', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Beta', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 70 },
];
const upcomingCoursesData: Course[] = [
    { id: 4, status: 'upcoming', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Charlie', domain: 'Self Dev.', levelGrade: 'Grade 4', validity: '1/6/25' },
    { id: 5, status: 'upcoming', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Delta', domain: 'Self Dev.', levelGrade: 'Grade 4', validity: '1/6/25' },
];
const completedCoursesData: Course[] = [
    { id: 6, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Echo', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '0 out of 16', progress: 100 },
    { id: 7, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Foxtrot', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '0 out of 16', progress: 100 },
    { id: 8, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name Golf', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '0 out of 16', progress: 100 },
];
// --- End Sample Data ---


export default function MyCoursePage() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-t-2xl sm:rounded-2xl my-0 sm:my-6"> {/* Adjusted margin/rounding for mobile */}
                <CourseSection title="Ongoing" courses={ongoingCoursesData} />
                <CourseSection title="Upcoming" courses={upcomingCoursesData} />
                <CourseSection title="Completed" courses={completedCoursesData} titleColor="text-[#00B060]" />
                <AiSuggestsSection />
            </main>

            <Footer />
        </div>
    );
}