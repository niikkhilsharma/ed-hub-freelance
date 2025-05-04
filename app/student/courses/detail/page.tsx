"use client";

import { useEffect, useState } from "react";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Minus, Plus, Star } from "lucide-react";
import Footer from "@/components/footer";

export default function CourseDetail() {
  const [quantity, setQuantity] = useState(1);
  const [batch, setBatch] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const courses = [
    {
      id: 1,
      title: "STEM Diploma In Technology Programs",
      image: "/student/courses/detail/card1.png",
      rating: 4.0,
      teacher: "Dennis Barrett",
      teacherImage: "/student/courses/detail/teacher.png",
      price: "₹2,000.00 - ₹5,000.00",
      features: [
        "Customized Curriculums & Plans",
        "Individualized Classes",
        "Skill Development",
        "Mentoring",
      ],
    },
    {
      id: 2,
      title: "Scratch Programming And Animation",
      image: "/student/courses/detail/card2.png",
      rating: 4.0,
      teacher: "Dennis Barrett",
      teacherImage: "/student/courses/detail/teacher.png",
      price: "₹2,000.00 - ₹5,000.00",
      features: [
        "Customized Curriculums & Plans",
        "Individualized Classes",
        "Skill Development",
        "Mentoring",
      ],
    },
    {
      id: 3,
      title: "AR, VR, Scratch Programming, Coding In 5 Languages",
      image: "/student/courses/detail/card3.png",
      rating: 4.0,
      teacher: "Dennis Barrett",
      teacherImage: "/student/courses/detail/teacher.png",
      price: "₹2,000.00 - ₹5,000.00",
      features: [
        "Customized Curriculums & Plans",
        "Individualized Classes",
        "Skill Development",
        "Mentoring",
      ],
    },
    {
      id: 4,
      title: "Advance Coding In 7 Languages With Gamifications",
      image: "/student/courses/detail/card4.png",
      rating: 4.0,
      teacher: "Dennis Barrett",
      teacherImage: "/student/courses/detail/teacher.png",
      price: "₹2,000.00 - ₹5,000.00",
      features: [
        "Customized Curriculums & Plans",
        "Individualized Classes",
        "Skill Development",
        "Mentoring",
      ],
    },
    {
      id: 5,
      title: "Python Programming For Beginners",
      image: "/student/courses/detail/card1.png",
      rating: 4.0,
      teacher: "Dennis Barrett",
      teacherImage: "/student/courses/detail/teacher.png",
      price: "₹2,000.00 - ₹5,000.00",
      features: [
        "Customized Curriculums & Plans",
        "Individualized Classes",
        "Skill Development",
        "Mentoring",
      ],
    },
  ];

  const teacher = {
    id: "kristin-watson",
    name: "Kristin Watson",
    category: "Technology Programs",
    image: "/student/home/prof1.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  };

  const [cardsToShow, setCardsToShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(cardsToShow);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalCourses = courses.length;
  const duplicatedSlides = [
    ...courses.slice(-cardsToShow),
    ...courses,
    ...courses.slice(0, cardsToShow),
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Reset index to avoid out-of-bounds when screen size changes
    setCurrentIndex(cardsToShow);
  }, [cardsToShow]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= totalCourses + cardsToShow) {
      setCurrentIndex(cardsToShow);
    } else if (currentIndex === 0) {
      setCurrentIndex(totalCourses);
    }
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    quantity > 1 && setQuantity((prev) => prev - 1);

  const handleSubmit = () => {
    console.log({ batch, day, time, quantity });
    alert("Form submitted! Check console.");
  };

  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10">
        {/* headers */}
        <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">Course Details</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">
              STEM Diploma in Technology Programs
            </div>
          </div>
        </div>

        {/* page1 */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16 md:px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left side - Course Image */}
            <div className="lg:w-1/2">
              <Card className="overflow-hidden">
                <Image
                  priority
                  width={715}
                  height={649}
                  src="/student/courses/detail/hero.png"
                  alt="Child using VR headset"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>

            {/* Right side - Course Details */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <p className="text-gray-500">Technology Programs</p>
                <h1 className="text-3xl font-bold mb-6">
                  STEM Diploma in Technology Programs
                </h1>
              </div>

              <div className="space-y-4">
                {/* Select Batch */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Select Batch
                  </label>
                  <Select value={batch} onValueChange={setBatch}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8A">8A</SelectItem>
                      <SelectItem value="8B">8B</SelectItem>
                      <SelectItem value="9A">9A</SelectItem>
                      <SelectItem value="9B">9B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-pink-500 my-2">
                    Price : ₹5,000.00
                  </h3>
                </div>

                {/* Select Day */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Select Day
                  </label>
                  <Select value={day} onValueChange={setDay}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday-thursday">
                        Monday - Thursday
                      </SelectItem>
                      <SelectItem value="tuesday-friday">
                        Tuesday - Friday
                      </SelectItem>
                      <SelectItem value="wednesday-saturday">
                        Wednesday - Saturday
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Select Time */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Select Time
                  </label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity and Cart */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      className="h-10 w-10 rounded-l-md"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="h-10 w-10 flex items-center justify-center bg-blue-100">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseQuantity}
                      className="h-10 w-10 rounded-r-md"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="bg-[#3366ff] hover:bg-[#6087ff] text-white px-8 py-2 h-10"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page2 */}
        <div className="w-full max-w-7xl mx-auto px-4 pb-8 md:pb-16 md:px-6">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Course</h1>
            <p className="text-gray-700 text-sm">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do. <br />
              <br />
              We focus a great deal on the understanding of behavioral
              psychology and influence triggers which are crucial for becoming a
              well-rounded Digital Marketer. We understand that theory is
              important to build a solid foundation, we understand that theory
              alone isn’t going to get the job done so that’s why this course is
              packed with practical hands-on examples that you can follow step
              by step.
            </p>
          </div>
        </div>

        {/* teacher */}
        <div className="w-full max-w-7xl mx-auto px-4 pb-8 md:pb-16 md:px-6">
          <div>
            <h1 className="text-4xl font-bold mb-6">Teacher</h1>
            <div className="max-w-xl bg-white rounded-4xl overflow-hidden shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/3 bg-gray-100">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-1">
                    <span className="text-pink-500 font-medium text-sm">
                      {teacher.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {teacher.experience}
                  </p>

                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-green-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {teacher.rating}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">{teacher.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="w-full pt-16 pb-56 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Related Courses
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 text-blue-500 hover:bg-gray-200 transition-colors"
                  aria-label="Previous courses"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 text-blue-500 hover:bg-gray-200 transition-colors"
                  aria-label="Next courses"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(-${
                    (100 / duplicatedSlides.length) * currentIndex
                  }%)`,
                  width: `${(duplicatedSlides.length / cardsToShow) * 100}%`,
                }}
              >
                {duplicatedSlides.map((course, index) => (
                  <div
                    key={index}
                    className="px-2"
                    style={{ width: `${100 / duplicatedSlides.length}%` }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <div className="relative h-48">
                        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-sm font-medium px-2 py-1 rounded-md z-10 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {course.rating}
                        </div>
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          {course.title}
                        </h3>
                        <ul className="mb-4 space-y-1">
                          {course.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gray-200 p-4">
                        <div className="flex items-center mb-3">
                          <div className="relative w-8 h-8 mr-2 rounded-full overflow-hidden">
                            <Image
                              src={course.teacherImage}
                              alt={course.teacher}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Teacher</p>
                            <p className="text-sm font-medium">
                              {course.teacher}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-pink-500">
                            {course.price}
                          </span>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </StudentWrapper>
  );
}
