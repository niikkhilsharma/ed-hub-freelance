'use client';

// import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Assuming no specific icons from react-icons are directly used in the cards for this design.

// --- Course Card Component ---
interface Course {
    id: number;
    status: 'ongoing' | 'upcoming' | 'completed';
    imageSrc: string;
    category?: string; // e.g., "PERSONALITY DEVELOPMENT"
    name: string;
    domain: string;
    levelGrade: string;
    pendingClasses?: string; // "2 out of 16"
    validity?: string; // "1/6/25"
    progress?: number; // 0-100 for ongoing/completed
    isKnowledgeBox?: boolean;
    description?: string;
}

const CourseCard = ({ course }: { course: Course }) => {
    const isOngoing = course.status === 'ongoing';
    const isUpcoming = course.status === 'upcoming';
    const isCompleted = course.status === 'completed';

    if (course.isKnowledgeBox) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-full h-40 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Image src={course.imageSrc} alt={course.name} width={80} height={80} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{course.description}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
            <div className="relative">
                <Image src={course.imageSrc} alt={course.name} width={400} height={200} className="w-full h-36 object-cover" />
                {course.category && (
                    <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        {course.category}
                    </div>
                )}
                 <div className="absolute top-2 right-2 bg-white/80 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                    EDUNIQUE
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-md font-semibold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-xs text-gray-500"><span className="font-medium text-gray-600">Domain:</span> {course.domain}</p>
                <p className="text-xs text-gray-500"><span className="font-medium text-gray-600">Level / Grade:</span> {course.levelGrade}</p>
                {isOngoing && course.pendingClasses && (
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-600">Pending Class:</span> {course.pendingClasses}</p>
                )}
                {isUpcoming && course.validity && (
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-600">Validity to start from:</span> {course.validity}</p>
                )}
                 {isCompleted && course.pendingClasses && ( // Assuming completed also shows this info
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-600">Pending Class:</span> {course.pendingClasses}</p>
                )}

                <div className="mt-auto pt-3">
                    {(isOngoing || isCompleted) && typeof course.progress === 'number' && (
                        <div className="mb-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 text-right mt-1">{course.progress}% {isCompleted ? 'Completed' : ''}</p>
                        </div>
                    )}
                    {isUpcoming && (
                        <button className="w-full bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                            Start
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Sample Data ---
const ongoingCourses: Course[] = [
    {
        id: 1, status: 'ongoing', isKnowledgeBox: true, imageSrc: '/knowledge-box-icon.png', name: 'My Knowledge Box', description: 'Explore subjects like Academics, Sports & more',
        domain: '',
        levelGrade: ''
    }, // UPDATE PATH
    { id: 2, status: 'ongoing', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 50 }, // UPDATE PATH
    { id: 3, status: 'ongoing', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 50 }, // UPDATE PATH
];

const upcomingCourses: Course[] = [
    { id: 4, status: 'upcoming', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', validity: '1/6/25' },
    { id: 5, status: 'upcoming', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', validity: '1/6/25' },
];

const completedCourses: Course[] = [
    { id: 6, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 100 },
    { id: 7, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 100 },
    { id: 8, status: 'completed', imageSrc: '/course-image-personality.jpg', category: 'PERSONALITY DEVELOPMENT', name: 'Course Name', domain: 'Self Dev.', levelGrade: 'Grade 4', pendingClasses: '2 out of 16', progress: 100 },
];

const aiSuggestsImages = [
    { id: 1, src: '/ai-suggests-vr.jpg', alt: 'VR Learning', title: 'AR + VR + 3D Animation Drone & Coding', subtitle: 'Get STEM Certified & Create Apps' }, // UPDATE PATHS
    { id: 2, src: '/ai-suggests-coding.jpg', alt: 'Coding Class', title: 'PROGRAMMING', subtitle: 'Live Concept Classes' },
    { id: 3, src: '/ai-suggests-app-dev.jpg', alt: 'App Development', title: 'CODING', subtitle: 'APP DEVELOPMENT - Learn 7 Coding Languages' },
];


export default function MyCoursePage() {
    // Sample user data for the Header
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };
    // const [newsletterEmail, setNewsletterEmail] = useState('');
    // const handleNewsletterSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Newsletter Subscription:", newsletterEmail);
    //     setNewsletterEmail('');
    // };


    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Ongoing Courses */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ongoing</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ongoingCourses.map(course => <CourseCard key={course.id} course={course} />)}
                    </div>
                </section>

                {/* Upcoming Courses */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingCourses.map(course => <CourseCard key={course.id} course={course} />)}
                    </div>
                </section>

                {/* Completed Courses */}
                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Completed</h2>
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                            COMPLETED
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {completedCourses.map(course => <CourseCard key={course.id} course={course} />)}
                    </div>
                </section>

                {/* AI Suggests Section */}
                <section
                    className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden bg-pink-600" // Main pink background
                    style={{
                        backgroundImage: 'url(/images/ai-suggests-bg-pattern.png)', // UPDATE PATH for pattern
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'auto',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                        {/* Text Content */}
                        <div className="text-center md:text-left">
                             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                <h2 className="text-3xl md:text-4xl font-bold">AI suggests</h2>
                                {/* Sparkle icon - using a simple SVG or you can find a react-icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-300">
                                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.468 1.682-6.552 4.288-8.496a.75.75 0 01.819.162zm1.22 4.506a.75.75 0 011.06 0l.955.954a.75.75 0 001.061-1.06L12.743 5.1a.75.75 0 010-1.061l.01-.01.01-.01a.75.75 0 011.06 0l.956.955a.75.75 0 001.06-1.061l-.954-.955a.75.75 0 010-1.06l.954-.955a.75.75 0 10-1.06-1.06l-.956.955a.75.75 0 00-1.06 0l-.955-.954a.75.75 0 00-1.06 1.06l.954.954a.75.75 0 010 1.06l-.954.954a.75.75 0 001.06 1.061z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M11.32 7.628a.75.75 0 010-1.06l.956-.955a.75.75 0 00-1.062-1.06l-.955.955a.75.75 0 01-1.06 0l-.955-.955a.75.75 0 10-1.061 1.06l.955.955a.75.75 0 001.06 0l.955.955a.75.75 0 010 1.06l-.955.955a.75.75 0 001.061 1.06zM15 15.75a.75.75 0 00.75-.75V12a.75.75 0 00-1.5 0v3a.75.75 0 00.75.75z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-sm opacity-90 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius.
                            </p>
                            <button className="px-8 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-pink-600 transition-colors">
                                Explore More
                            </button>
                        </div>
                        {/* Image Carousel/Grid */}
                        <div className="grid grid-cols-3 gap-2 md:gap-3">
                            {aiSuggestsImages.map(img => (
                                <div key={img.id} className="rounded-xl overflow-hidden shadow-lg aspect-w-3 aspect-h-4 relative group">
                                    <Image src={img.src} alt={img.alt} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 md:p-3 text-center">
                                        <h4 className="text-xs md:text-sm font-semibold text-yellow-400">{img.title}</h4>
                                        <p className="text-[10px] md:text-xs text-white/80">{img.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}