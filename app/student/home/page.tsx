"use client";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import CourseSlider from "@/components/student/home/course-slider";
interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  features: string[];
  teacher: {
    name: string;
    image: string;
  };
  priceRange: string;
}

const courses: Course[] = [
  {
    id: "academics",
    title: "Academics",
    category: "Science",
    image: "/student/home/acadmics.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "foundation",
    title: "Foundation",
    category: "Technology Programs",
    image: "/student/home/foundation.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "brain-development",
    title: "Brain Development",
    category: "Science",
    image: "/student/home/basic-dev.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "skill-development",
    title: "Skill Development",
    category: "Public speaking",
    image: "/student/home/learn-peace.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "stem-programs",
    title: "STEM Programs",
    category: "Technology Programs",
    image: "/student/home/learn-peace2.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "robotics",
    title: "Robotics",
    category: "Technology Programs",
    image: "/student/home/robotics.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "phonics",
    title: "Phonics",
    category: "English",
    image: "/student/home/phonics.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
  {
    id: "personality-development",
    title: "Personality Development",
    category: "Public speaking",
    image: "/student/home/pers-dev.png",
    features: [
      "Customized Curriculums & Plans",
      "Individualized Classes",
      "Skill Development",
      "Mentoring",
    ],
    teacher: {
      name: "Mrs. Sandeep Kaur",
      image: "/student/home/teacher.png",
    },
    priceRange: "₹2,000.00 - ₹5,000.00",
  },
];

export default function StudentHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const startingCourses = courses.slice(0, 3);
  return (
    <StudentWrapper>  
      <main className="min-h-[calc(100vh-80px)]">
        {/* Hero Section */}
        <section className="relative h-full overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-center bg-repeat z-0"
            style={{
              backgroundImage: "url('/Background2.png')",
              backgroundSize: "400px",
              filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
              opacity: 0.3,
            }}
          ></div>
          {/* Bluish Overlay */}
          <div
            className="absolute inset-0 bg-[#003ffd] z-0"
            style={{
              opacity: 0.78,
              mixBlendMode: "multiply",
            }}
          ></div>

          {/* Main content */}
          <div className="container mx-auto px-16 flex flex-col md:flex-row items-center justify-center h-full">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 space-y-8 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Limitless learning at <br />
                your fingertips
              </h1>

              <p className="text-white/90 text-md max-w-xl">
                Online learning and teaching marketplace with 5K+ courses & 10M
                students. Taught by experts to help you acquire new skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="relative h-4 w-4 rounded-full overflow-hidden">
                    <Image
                      src="/student/home/tick.png"
                      alt="tick"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white">Learn with experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-4 w-4 rounded-full overflow-hidden">
                    <Image
                      src="/student/home/tick.png"
                      alt="tick"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white">5 levels Skills Test</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-4 w-4 rounded-full overflow-hidden">
                    <Image
                      src="/student/home/tick.png"
                      alt="tick"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white">Recorded classes</span>
                </div>
              </div>

              <div>
                <button className="relative text-white font-bold rounded-full text-xl pl-4 py-3 flex items-center gap-2 transition-all">
                  <div className="relative h-10 w-10 overflow-hidden">
                    <Image
                      src="/student/home/play.png"
                      alt="play"
                      fill
                      className="object-cover"
                    />
                  </div>
                  How to Work
                  {/* <div className=" z-10 h-fit w-fit">
                    <Image
                      src="/student/home/arrow.png"
                      alt="arrow"
                      fill
                      className="object-cover"
                    />
                  </div> */}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center z-10 h-full">
              <div className="relative aspect-square max-w-[600px] w-full">
                <Image
                  src="/student/home/hero-image.png"
                  alt="Students learning with robot"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto w-full py-8 space-y-12 bg-[#EEEEEE] px-16 pb-70">
          {/* Explore Section */}
          <div className="space-y-6 ">
            <h1
              className="text-4xl md:text-7xl font-bold "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(37,99,235,0.6), rgba(37,99,235,0.6)), url('/Background2.png')",
                backgroundSize: "300px",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Explore EduNique Courses
            </h1>

            {/* Search Bar */}
            <div className="w-full  bg-[#FFCC00] rounded-2xl p-4 flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                <Input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-0 bg-white rounded-full h-12 text-lg"
                />
              </div>
              <Select defaultValue="popular">
                <SelectTrigger className="w-32 bg-yellow-500 border-0 rounded-full h-12 text-white font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Starting Cards Section */}
          <div className="space-y-2 bg-[#F9FAFB] rounded-2xl pt-8 p-6">
            <div className="space-y-4 max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-black">
                Start Your Learning <br /> Adventure!
              </h2>
              <p className="text-xl text-[#6B7280]">
                Discover skills, spark curiosity, and grow with every step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {startingCourses.map((course) => (
                <Card
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative p-4">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <CardContent className="p-6 pt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Course Name
                    </h3>

                    <div className="space-y-1">
                      {["Detail 1", "Detail 2", "Detail 3", "Detail 4"].map(
                        (detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="relative h-4 w-4 rounded-full overflow-hidden">
                              <Image
                                src="/student/home/tick2.png"
                                alt="tick2"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-gray-600">{detail}</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex items-center gap-2 my-2">
                      <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-2xl px-3 py-1">
                        <span className="font-bold text-lg">4.2</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <span className="text-gray-600 bg-[#F3F4F6] rounded-2xl px-3 py-1">
                        <span className="font-bold text-black mr-2">4.4K</span>
                        Ratings
                      </span>
                      <span className="text-gray-600 bg-[#F3F4F6] rounded-2xl px-3 py-1">
                        <span className="font-bold text-black mr-2">6</span>
                        Months
                      </span>
                    </div>

                    <Button className="w-full bg-[#FF3366] hover:bg-pink-600 text-white rounded-full h-10 text-lg my-2">
                      Explore More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses Slider with Tabs */}
          <CourseSlider />

          {/* Overlaying Cards Section */}
          <div className="relative h-fit bg-gray-100 overflow-hidden rounded-3xl p-8">
            {/* Background Layer */}
            <div
              className="absolute inset-0 bg-center bg-repeat z-0"
              style={{
                backgroundImage: 'url("/background5.png")',
                backgroundSize: "cover",
                filter:
                  "brightness(1.1) opacity(0.4) grayscale(5%) blur(0.1px)",
                opacity: 0.3,
              }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 flex items-center h-fit lg:px-16">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Content */}
                  <div className="space-y-8">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Title
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque placerat lectus et leo fermentum aliquet.
                      Curabitur sollicitudin tortor at lacus ultricies, quis
                      blandit sem varius.
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white max-w-md w-full py-2 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Explore More
                    </button>
                  </div>

                  {/* Right Side - Stacked Cards */}
                  <div className="relative flex justify-center lg:justify-end pr-36">
                    <div className="relative w-96 h-96">
                      {/* Third Card (Back) - Coding/Programming */}
                      <div
                        className="absolute w-72 h-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,1.3)] transform translate-x-70  "
                        style={{
                          zIndex: 1,
                        }}
                      >
                        <img
                          src="/student/home/card.png"
                          alt="card"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>

                      {/* Second Card (Middle) - App Design */}
                      <div
                        className="absolute w-72 h-full rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,1.25)] transform translate-x-35 "
                        style={{
                          zIndex: 2,
                        }}
                      >
                        <img
                          src="/student/home/card.png"
                          alt="card"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>

                      {/* First Card (Front) - AR/VR/3D */}
                      <div
                        className="absolute w-72 h-full rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,1.35)] transform -\"
                        style={{
                          zIndex: 3,
                        }}
                      >
                        <img
                          src="/student/home/card.png"
                          alt="card"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <FooterNew />
      </main>
    </StudentWrapper>
  );
}
