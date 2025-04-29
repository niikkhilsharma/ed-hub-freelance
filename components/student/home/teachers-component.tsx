"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Category =
  | "Technology Programs"
  | "Computer Science"
  | "Science"
  | "English"
  | "Public speaking"
  | "Chess"
  | "AI Explorers"
  | "Abacus";

interface Teacher {
  id: string;
  name: string;
  category: Category;
  image: string;
  role: string;
  experience: string;
  rating: number;
  description: string;
}

const teachers: Teacher[] = [
  {
    id: "kristin-watson",
    name: "Kristin Watson",
    category: "Technology Programs",
    image: "/student/home/prof1.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "bessie-cooper",
    name: "Bessie Cooper",
    category: "Technology Programs",
    image: "/student/home/prof2.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "jenny-wilson",
    name: "Jenny Wilson",
    category: "Technology Programs",
    image: "/student/home/prof3.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "cameron-williamson",
    name: "Cameron Williamson",
    category: "Technology Programs",
    image: "/student/home/prof4.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "savannah-nguyen",
    name: "Savannah Nguyen",
    category: "Technology Programs",
    image: "/student/home/prof5.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "theresa-webb",
    name: "Theresa Webb",
    category: "Technology Programs",
    image: "/student/home/prof6.png",
    role: "Programmer",
    experience: "Experience: 6 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "john-doe",
    name: "John Doe",
    category: "Computer Science",
    image: "/student/home/prof1.png",
    role: "Professor",
    experience: "Experience: 8 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    category: "Science",
    image: "/student/home/prof1.png",
    role: "Researcher",
    experience: "Experience: 7 Year",
    rating: 4.7,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    category: "English",
    image: "/student/home/prof1.png",
    role: "Linguist",
    experience: "Experience: 5 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "emily-clark",
    name: "Emily Clark",
    category: "Public speaking",
    image: "/student/home/prof1.png",
    role: "Communication Expert",
    experience: "Experience: 9 Year",
    rating: 5.0,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "david-miller",
    name: "David Miller",
    category: "Chess",
    image: "/student/home/prof1.png",
    role: "Chess Master",
    experience: "Experience: 10 Year",
    rating: 4.9,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
  {
    id: "alice-zhang",
    name: "Alice Zhang",
    category: "AI Explorers",
    image: "/student/home/prof1.png",
    role: "AI Researcher",
    experience: "Experience: 7 Year",
    rating: 4.8,
    description:
      "Perceived and knowledge certainly day sweetness why cordiality. Ask a quick six seven offer see among.",
  },
];

const categories: Category[] = Array.from(
  new Set(teachers.map((teacher) => teacher.category))
) as Category[];

export default function TeachersList({
  masked,
  className = "",
}: {
  masked?: boolean;
  className?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "Technology Programs"
  );
  const [hoveredTeacher, setHoveredTeacher] = useState<string | null>(null);

  const filteredTeachers = teachers.filter(
    (teacher) => teacher.category === selectedCategory
  );

  const visibleTeachers =
    masked ? filteredTeachers.slice(0, 6) : filteredTeachers;

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-white",
        className
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
            Teacher List
          </h1>

          {/* Category Tabs */}
          {/* Top Tabs Bar */}
          <div className="mb-8 overflow-x-auto pb-2">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="flex flex-nowrap mb-2 bg-transparent h-auto p-1 border-b border-pink-300">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-pink-100 data-[state=active]:text-pink-600 rounded-t-lg"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {visibleTeachers.map((teacher) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredTeacher(teacher.id)}
                onMouseLeave={() => setHoveredTeacher(null)}
                className="bg-white rounded-4xl overflow-hidden shadow-md border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-64 md:h-auto md:w-1/3 bg-gray-100">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                      style={{
                        transform:
                          hoveredTeacher === teacher.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
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

                    <p className="text-gray-600 text-sm">
                      {teacher.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show All Button */}
          {masked && (
            <div className="flex justify-center mt-10">
              <Link href="/courses" passHref>
                <div className="flex justify-center mt-8">
                  <Button
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
                    size="lg"
                  >
                    View All
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
