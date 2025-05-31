import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

const categories = [
  "Technology Programs",
  "Computer Science",
  "Science",
  "English",
  "Public speaking",
  "Chess",
  "AI Explorers",
  "Abacus",
];

const CourseSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Technology Programs"
  );
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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
      id: "copy1",
      title: "copy1h",
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
      id: "copy2",
      title: "copy2h",
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

  const filteredCourses = courses.filter(
    (course) => course.category === selectedCategory
  );

  // Check scroll position and update arrow visibility
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
  }, [filteredCourses]);

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
    <div className="">
      {/* Category Tabs */}
      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="w-full"
      >
        <TabsList className="flex flex-wrap justify-between gap-2 bg-transparent h-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-[#8DD9B3] data-[state=active]:text-black cursor-pointer text-gray-600 rounded-full px-4 py-2 text-md font-medium break-words max-w-full"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Course Slider */}
      <div className="relative">
        {/* Left Navigation Button */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Right Navigation Button */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl"
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
          {filteredCourses.map((course) => (
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

      {/* Scroll Progress Indicator */}
      {filteredCourses.length > 3 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(filteredCourses.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-400 transition-colors duration-300"
              ></div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CourseSlider;
