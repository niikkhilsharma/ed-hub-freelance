
"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import { IoVideocamOutline } from "react-icons/io5";
import { LuInfo, LuBrain } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import ReviewCard from './review-card';
interface CourseCardProps {
    image: string;
    rating: number;
    courseName: string;
    teacherName: string;
    teacherRole: string;
    teacherImage: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    image,
    rating,
    courseName,
    teacherName,
    teacherRole,
    teacherImage,
}) => {
    const details = ['Detail 1', 'Detail 2', 'Detail 3', 'Detail 4'];
    return (
        <div className="w-full rounded-2xl bg-white border border-gray-200">
            <div className="relative w-full h-56 p-2 rounded-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt="Course Image"
                        fill
                        className="object-cover rounded-2xl"
                    />
                    <div className="absolute top-2 right-2 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        {rating} <FaStar className="text-yellow-400" />
                    </div>
                </div>
            </div>

            <div className="px-4 pb-4 space-y-2">
                <div className="flex justify-between items-baseline">
                    <h2 className="text-base font-semibold text-black">{courseName}</h2>
                    <button className='text-[#FF3366] text-xs underline underline-offset-4'>Know more</button>
                </div>
                <div className="space-y-3">
                    {details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-300 text-white text-xs">
                                <FaCheck />
                            </div>
                            <span className="text-gray-500 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <div className="w-8 h-8 rounded-full relative">
                        <Image
                            src={teacherImage}
                            alt="Teacher"
                            fill
                            className=" object-cover rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-black">{teacherName}</h3>
                        <p className="text-xs text-pink-500">{teacherRole}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5 text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} className="w-3.5 h-3.5" />
                        ))}
                    </div>
                </div>
                <div className="bg-gray-100 px-2 py-1 rounded-full flex justify-between items-center gap-2">
                    <p className="font-semibold text-lg text-[#4BC4B6]">₹2,000-₹5,000</p>
                    <button className='px-3 py-2 text-white font-medium bg-blue-600 rounded-full'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};
const images = [
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
    '/b2c-student/card-banner-3.png',
    '/b2c-student/card-banner-4.png',
    '/b2c-student/card-banner-1.png',
    '/b2c-student/card-banner-2.png',
];
const courses = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: images[i], // update path
    rating: 4.2,
    courseName: 'Course Name',
    teacherName: 'Mr. Ranvir Ahuja',
    teacherRole: 'Teacher',
    teacherImage: '/b2c-student/card-profile.jpg', // update path
}));

type batches = {
Day:string,
Time:string,
Batch:string
};

const batch : batches[]=[
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
  {
   Day:"Monday",
   Time:"12:00 to 13:00",
   Batch:"A"
  },
]
const Profile = () => {
    return (
        <>
        <div className="py-2 px-4">

            <div className="bg-white rounded-2xl px-4 py-2">
                <h3 className='text-blue-500'>My core teaching philosophy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
            olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

            </div>
             <div className="bg-white rounded-2xl px-4 py-2 mt-4">
                <h3 className='text-black-500'>Pedology</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto saepe reprehenderit exercitationem labore aliquam nobis itaque deserunt quo necessitatibus possimus dolor a aut, quas accusamus, magni obcaecati repellat voluptas!
                Quaerat consequatur, veniam unde hic maxime odit, illo nulla sapiente, ratione doloremque voluptas dicta magnam nesciunt autem sunt! Optio iure beatae quo dolorem quaerat debitis illo quia quam necessitatibus molestiae!
            olores fugiat eaque velit cumque sint porro quibusdam hic dolor laboriosam, facilis expedita cum? Deserunt, sunt voluptate neque rerum officiis porro saepe nobis vitae est.
                Minus itaque numquam rem accusamus praesentium beatae ipsum doloribus impedit molestiae mollitia. Laborum dolore ducimus officiis? Velit exercitationem assumenda impedit suscipit maiores, quasi similique dignissimos nemo reprehenderit ea magnam consequatur.
                soluta nulla tenetur consectetur adipisci cumque incidunt, sapiente molestias alias temporibus maxime neque dolores magni perspiciatis. Nemo, quis obcaecati.</p>

            </div>
            <div className="bg-white rounded-2xl px-4 py-4 mt-4">
                <h3>Browse and Enroll in available sessions</h3>
                {batch.map((batches,index)=>(
               <div  className="bg-gray-100 py-5 px-5 rounded-xl mt-4 inline-block mx-4" key={index}>
                <h3 className='text-black-600 mb-2'>Btach: {batches.Batch}</h3>
                <h4 className="px-4">Day: {batches.Day}</h4>
                <h4 className='px-4'>Time: {batches.Time}</h4>
              
              </div>
              ))}  
              </div>


              <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                <h2 className={`text-[#FF3366] font-bold text-m`}>Ongoing Courses</h2>
                <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                    {courses.map((course, index) => (
                        <div key={index} className="min-w-[325px]">
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div> 
            </div>

            <div className="my-4 rounded-2xl overflow-x-auto custom-scrollbar bg-[#f1f1f2] border px-3 py-2">
                <h2 className={`text-[#FF3366] font-bold text-m`}>Upcoming Batches</h2>
                <div className="flex gap-4 px-2 overflow-x-auto custom-scrollbar pb-4 pt-2 whitespace-nowrap">
                    {courses.map((course, index) => (
                        <div key={index} className="min-w-[325px]">
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div> 
            </div>
               



        </div>
        </>
       
    )
}

export default Profile;