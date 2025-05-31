"use client";

import { useEffect, useRef, useState } from "react";
import StudentWrapper from "@/components/student-wrapper";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Star,
  User,
} from "lucide-react";
import FooterNew from "@/components/footer3";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: number;
  customerName: string;
  type: "Student" | "Parent";
  rating: number;
  description: string;
  profileImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    customerName: "Customer Name",
    type: "Student",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.",
    profileImage: "/student/courses/detail/profile.png",
  },
  {
    id: 2,
    customerName: "Customer Name",
    type: "Parent",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor at lacus ultricies, quis blandit sem varius. Fusce turpis enim, hendrerit facilisis nisl nec, dictum faucibus nisl. Aliquam erat volutpat. Duis non molestie augue.",
    profileImage: "/student/courses/detail/profile.png",
  }
];
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
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-3 mb-3">
      <div className="flex items-start gap-3 mb-2">
        <Avatar className="w-14 h-14 self-center flex-shrink-0">
          <AvatarImage src={review.profileImage || "/placeholder.svg"} alt={review.customerName} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-semibold text-sm text-gray-900 truncate">{review.customerName}</h3>
          <p className="text-gray-600 text-xs">{review.type} / Parent</p>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{review.description}</p>
    </div>
  )
}

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("about");

  const menuItems = [
    { id: "about", label: "About Course", icon: User },
    { id: "benefits", label: "Benefits", icon: Star },
    { id: "pedagogy", label: "Pedagogy", icon: User },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "levels", label: "Levels", icon: BarChart3 },
  ];

  const contentMap = {
    about: {
      title: "About Course",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean suscipit, tortor sed tempor ornare, purus enim aliquet sapien, vitae fringilla ipsum massa in justo. Maecenas venenatis mauris vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce ornare, nulla ut malesuada sagittis, libero sem aliquam tortor, vel aliquet nisl mauris a nisl. Nam vestibulum egestas nibh sit amet malesuada. Proin erat risus, mollis in metus vestibulum, auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquam nisl quis nisl tincidunt, nec aliquam lectus gravida. Pellentesque varius purus vel dignissim pulvinar. Proin viverra elit eget leo dictum aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel dignissim dolor.

Etiam ornare arcu in lorem mollis eleifend. Curabitur blandit tortor vitae augue cursus, eu efficitur tellus rhoncus. Aenean vestibulum enim ac lobortis pharetra. Vestibulum aliquet nisl a odio lacinia, a porttitor mi bibendum. Maecenas non auctor ante. In pulvinar erat nulla, ac vehicula mauris semper a. Nullam posuere tortor vitae odio venenatis, quis imperdiet neque placerat.`,
    },
    benefits: {
      title: "Benefits",
      content: `Discover the numerous advantages this course offers. From skill development to career advancement, you'll gain valuable insights and practical knowledge that will benefit you professionally and personally. Our comprehensive approach ensures you get the most out of your learning experience.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    pedagogy: {
      title: "Pedagogy",
      content: `Our teaching methodology is designed to maximize learning outcomes through interactive sessions, hands-on practice, and real-world applications. We employ modern educational techniques that cater to different learning styles and preferences.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    curriculum: {
      title: "Curriculum",
      content: `The curriculum is carefully structured to provide a progressive learning path. Starting with fundamentals and gradually building up to advanced concepts, each module is designed to reinforce previous learning while introducing new challenges.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    levels: {
      title: "Levels",
      content: `This course is designed for multiple proficiency levels, from beginners to advanced learners. Each level has specific objectives and outcomes, ensuring that every participant can progress at their own pace while meeting established benchmarks.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    },
  };

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  // Update arrow visibility on category change
  useEffect(() => {
    checkScrollPosition();
  }, [courses]);

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);
  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <StudentWrapper blue>
      <div className="bg-white border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
            <h1 className="text-2xl font-semibold text-[#FF3366]">
              Course Name
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] mx-auto w-full py-8 space-y-6 px-16 pb-70">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-11 gap-4">
            {/* Left Section */}
            <div className="bg-[#FFFFFF] rounded-2xl p-2 col-span-8">
              <div className="flex gap-6">
                {/* Course Image */}
                <div className="flex-2">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/student/courses/detail/hero.png"
                      alt="Technology Course"
                      width={500}
                      height={700}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                </div>

                {/* Course Details */}
                <div className="flex-1 flex flex-col justify-start px-4 py-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Course Name
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">Category</p>
                  <div className="text-5xl font-bold text-blue-600 mb-8">
                    ₹2,000
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-full w-full"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Section - Reviews */}
            <div className="bg-[#FFFFFF] rounded-2xl p-4 col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div
                className="h-[550px] overflow-y-auto pr-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#FFA500 transparent",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: #ffa500;
                    border-radius: 4px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: #ff8c00;
                  }
                `}</style>
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-[#FFFFFF] rounded-2xl mx-auto overflow-hidden">
          {/* Fixed Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all duration-200
                    ${
                      isActive
                        ? "bg-pink-500 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {contentMap[activeTab as keyof typeof contentMap].title}
              </h1>

              <div className="max-w-none">
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {contentMap[activeTab as keyof typeof contentMap].content}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E5E7EB] p-4 rounded-2xl">
          <h1 className="text-2xl text-[#f9326f] my-4 font-bold">
            Related Courses
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${
                showLeftArrow ? "pl-16" : "pl-0"
              } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

                  <div className="p-4 pt-0">
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

                    <div className="flex items-center gap-2 mt-3">
                      <Image
                        src={course.teacher.image || "/placeholder.svg"}
                        alt={course.teacher.name}
                        width={24}
                        height={24}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-md font-bold">Mr. Ranvir Ahuja</p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl px-4 py-2 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#E5E7EB] p-4 rounded-2xl">
          <h1 className="text-2xl text-[#f9326f] my-4 font-bold">
            Recommended Courses
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${
                showLeftArrow ? "pl-16" : "pl-0"
              } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

                  <div className="p-4 pt-0">
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

                    <div className="flex items-center gap-2 mt-3">
                      <Image
                        src={course.teacher.image || "/placeholder.svg"}
                        alt={course.teacher.name}
                        width={24}
                        height={24}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-md font-bold">Mr. Ranvir Ahuja</p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl px-4 py-2 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#E5E7EB] p-4 rounded-2xl">
          <h1 className="text-2xl text-[#f9326f] my-4 font-bold">
            Our Best Sellers
          </h1>
          {/* Course Slider */}
          <div className="relative">
            {/* Left Navigation Button */}
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Right Navigation Button */}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto scrollbar-hide py-4 transition-all duration-300 ${
                showLeftArrow ? "pl-16" : "pl-0"
              } ${showRightArrow ? "pr-16" : "pr-0"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

                  <div className="p-4 pt-0">
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

                    <div className="flex items-center gap-2 mt-3">
                      <Image
                        src={course.teacher.image || "/placeholder.svg"}
                        alt={course.teacher.name}
                        width={24}
                        height={24}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-md font-bold">Mr. Ranvir Ahuja</p>
                        <p className="text-xs text-[#FF3366]">Teacher</p>
                      </div>
                      <div className="ml-auto flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl px-4 py-2 w-full mt-2">
                      <span className="text-[#50C878] font-bold">
                        ₹2,000 - ₹5,000
                      </span>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm">
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </StudentWrapper>
  );
}
