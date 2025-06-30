"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

// --- Recording Card Component ---
// interface Course {
//     id: string;
//     imageSrc: string;
//     courseName: string;
//     noofbatch: string;
//     noofBtudents: string; 
// }

export default function StudentCard() {
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/teacher-b2b/profile.png",
    };

    const courses = [
        {
            image: "/personality.png",
            name: "Course Name",
            batches: 5,
            students: 6,
        },
        {
            image: "/personality.png",
            name: "Course Name",
            batches: 5,
            students: 6,
        },
        {
            image: "/personality.png",
            name: "Course Name",
            batches: 5,
            students: 6,
        },


    ];
    return (
        <>
            <Header user={headerUser} />
            <div className="bg-[#eeeeee]  min-h-screen flex flex-col">

                <main className="p-4  bg-white my-4 lg:my-6 mx-2 lg:mx-8  sm:mx-4 rounded-2xl min-h-screen">
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-items-center">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 p-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-2xl "
                            >
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src={course.image}
                                        width={260}
                                        height={200}
                                        alt={course.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 px-2 text-black">
                                    <h2 className="font-bold text-lg">{course.name}</h2>
                                    <h3 className="text-sm font-medium text-blacl">
                                        No. of Batch:{" "}
                                        <span className="text-[#6B7280]">{course.batches}</span>
                                    </h3>
                                    <h3 className="text-sm font-medium text-black">
                                        No. of Students: <span className="text-[#6B7280]">{course.students}</span>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
