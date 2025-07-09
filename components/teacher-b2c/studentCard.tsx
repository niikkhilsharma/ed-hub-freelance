"use client";

import Header from "@/components/layout/header1";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import MaxWidthWrapper from "../admin/max-width-wrapper";

import Link from "next/link";
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
            
           
<MaxWidthWrapper>
     <div className="bg-[#eeeeee]  min-h-screen  px-4 flex flex-col">
                <main className="p-4  bg-white my-4 lg:my-6 mx-2 lg:mx-8  sm:mx-4 rounded-2xl min-h-screen">
                    <div className="flex flex-col sm:flex-row flex-wrap overflow-y-scroll no-scrollbar gap-8 sm:gap-4  justify-items-center">
                        {courses.map((course, index) => (
                            <Link href="/b2c-teacher/teacher-flow/">
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
                                    <h2 className="font-semibold text-lg">{course.name}</h2>
                                    <p className="text-md font-normal text-black">
                                        No. of Batches:{" "}
                                        <span className="text-[#6B7280]">{course.batches}</span>
                                    </p>
                                    <p className="text-sm font-normal text-black">
                                        No. of Students: <span className="text-[#6B7280]">{course.students}</span>
                                    </p>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </main>
                </div>
</MaxWidthWrapper>
                <Footer />
            
              
        </>
    );
}
