"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Using shadcn Button
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import CourseSlider from "./course-slider";
// Course type
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

// Sample courses array
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

// Accept masked prop
export default function CoursesComponent({
  className = "",
}: {
  className?: string;
}) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const startingCourses = courses.slice(0, 3);
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };
  const handlePathClick = (path: LearningPath) => {
    console.log("Selected learning path:", path);
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

  const [searchQuery, setSearchQuery] = useState("");
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
    <div
      className={cn(
        "relative z-10 mx-auto w-full py-8 space-y-6 px-16 ",
        className
      )}
    >
      {/* Search Bar */}
      <div className="w-full bg-[#FFCC00] rounded-2xl p-4 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-0 bg-white rounded-full h-10 text-lg"
          />
        </div>
        <Select defaultValue="popular">
          <SelectTrigger className="w-32 bg-yellow-500 border-0 rounded-full h-10 text-white font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CourseSlider />
      <h1 className="text-2xl text-[#f9326f] my-4 font-bold">
        Based on your Interest
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

      {/* Heat Up Section */}
      <div className="space-y-4 bg-[#F9FAFB] rounded-2xl pt-8 p-10 ">
        <div className="space-y-4 mx-auto">
          <h2 className="text-4xl font-bold text-black">
            Heat Up Your Skills This <br /> Summer!
          </h2>
          <p className="text-xl text-[#6B7280]">
            Discover skills, spark curiosity, and grow with every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mx-auto">
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

      <section
        className={cn("w-full mx-auto px-4 py-8 bg-[#FFFFFF] rounded-2xl")}
      >
        {/* Main Title */}
        <h1
          className={cn(
            "text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900",
            "mb-8 md:mb-12 tracking-tight"
          )}
        >
          Pick from Popular Learning Path
        </h1>

        {/* Learning Path Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            "gap-4 md:gap-6 lg:gap-8",
            "auto-rows-fr"
          )}
        >
          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              path={path}
              onClick={handlePathClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface LearningPath {
  id: number;
  title: string;
  imageIndex: number;
}

const learningPaths: LearningPath[] = [
  { id: 1, title: "Technology Program", imageIndex: 1 },
  { id: 2, title: "Computer Science", imageIndex: 2 },
  { id: 3, title: "Science", imageIndex: 3 },
  { id: 4, title: "English", imageIndex: 4 },
  { id: 5, title: "Public Speaking", imageIndex: 5 },
  { id: 6, title: "Chess", imageIndex: 6 },
  { id: 7, title: "AI Explorers", imageIndex: 7 },
  { id: 8, title: "Abacus", imageIndex: 8 },
];

interface LearningPathCardProps {
  path: LearningPath;
  onClick?: (path: LearningPath) => void;
}

const LearningPathCard: React.FC<LearningPathCardProps> = ({
  path,
  onClick,
}) => {
  return (
    <Card
      className={cn(
        "relative h-48 md:h-52 lg:h-56 overflow-hidden cursor-pointer group",
        "transition-all duration-300 ease-in-out",
        "hover:scale-[1.02] hover:shadow-xl",
        "border-0 bg-transparent"
      )}
      onClick={() => onClick?.(path)}
    >
      <CardContent className="p-0 relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={`/student/courses/bottomImage${path.imageIndex}.png`}
            alt={path.title}
            fill
            className={cn(
              "object-cover transition-transform duration-300",
              "group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={path.id <= 4}
          />
        </div>

        {/* Black Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            "from-black/60 via-black/40 to-black/60",
            "transition-opacity duration-300",
            "group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70"
          )}
        />

        {/* Title */}
        <div className="absolute inset-0 flex items-end p-4 md:p-6">
          <h3
            className={cn(
              "text-white font-semibold text-lg md:text-xl lg:text-2xl",
              "leading-tight tracking-wide",
              "drop-shadow-lg transition-transform duration-300",
              "group-hover:translate-y-[-2px]"
            )}
          >
            {path.title}
          </h3>
        </div>

        {/* Subtle border radius */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
      </CardContent>
    </Card>
  );
};
