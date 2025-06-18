// src/app/your-route-path/CourseDetail.tsx (or wherever you need this page)
"use client";

import { useState } from "react";
import StudentWrapper from "@/components/student-wrapper"; // Assuming this path is correct
import Image from "next/image";
import FooterNew from "@/components/footer3"; // Assuming this path is correct
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming shadcn/ui tabs path
import { TbBrandLinkedinFilled } from "react-icons/tb";

// -------- EducatorPanel Component and related declarations START --------
interface Educator {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  rating: number;
  description: string;
  linkedinUrl?: string;
  category: string;
}

// Dummy data for educators.
// Replace imageUrls with paths to your actual images in the /public directory.
// Example: /educators/sarah.jpg, /educators/john.jpg
// Ensure Background2.png is also in /public for the main title.
const educatorsData: Educator[] = [
  {
    id: 1,
    name: "Olivia Davis",
    title: "Lead Tech Educator",
    imageUrl: "/student/educator/educator_female.png", // Placeholder image
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor.",
    linkedinUrl: "https://linkedin.com/in/oliviadavis",
    category: "Academic",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "AI & Robotics Lead",
    imageUrl: "/student/educator/educator_male.png", // Placeholder image
    rating: 4.4,
    description:
      "Consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor ac lacus ultricies.",
    linkedinUrl: "https://linkedin.com/in/marcuschen",
    category: "Academic",
  },
  {
    id: 3,
    name: "Sophia Miller",
    title: "Head of Sciences",
    imageUrl: "/student/educator/educator_female.png", // Placeholder image
    rating: 4.4,
    description:
      "Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin tortor ac lacus ultricies, quis blandit sem varius.",
    linkedinUrl: "https://linkedin.com/in/sophiamiller",
    category: "Foundation",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Computer Science Pro",
    imageUrl: "/student/educator/educator_male.png", // Placeholder image
    rating: 4.4,
    description:
      "Curabitur sollicitudin tortor ac lacus ultricies, quis blandit sem varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkedinUrl: "https://linkedin.com/in/davidwilson",
    category: "Notsoextra - Curricular",
  },
  {
    id: 5,
    name: "Isabelle Garcia",
    title: "English & Literature",
    imageUrl: "/student/educator/educator_female.png", // Placeholder image (reused)
    rating: 4.4,
    description:
      "Quis blandit sem varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet.",
    linkedinUrl: "https://linkedin.com/in/isabellegarcia",
    category: "Skill Development",
  },
  {
    id: 6,
    name: "James Brown",
    title: "Public Speaking Coach",
    imageUrl: "/student/educator/educator_male.png", // Placeholder image (reused)
    rating: 4.4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus et leo fermentum aliquet. Curabitur sollicitudin.",
    linkedinUrl: "https://linkedin.com/in/jamesbrown",
    category: "Brain Development",
  },
];

const categories = [
  "Academic",
  "Notsoextra - Curricular",
  "Foundation",
  "Skill Development",
  "Brain Development",
  "Door Step Tutoring",
  "Skill Club",
];

const EducatorCard = ({ educator }: { educator: Educator }) => {
  return (
    <div className="bg-[#F9FAFB] p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch relative min-h-[200px] sm:min-h-[190px]">
      <div className="relative w-full h-48 sm:w-32 sm:h-auto rounded-lg overflow-hidden flex-shrink-0">
        {/* On mobile (flex-col), image takes full width and fixed height. */}
        {/* On sm+ (flex-row), image takes fixed width and its container stretches to card height. */}
        <Image
          src={educator.imageUrl}
          alt={educator.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex-grow flex flex-col pt-3 sm:pt-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-800 mr-2">
            {educator.name}
          </h3>
          <div className="flex items-center bg-[#F3F4F6] rounded-2xl px-2 py-2 text-[#FFCC00] flex-shrink-0 whitespace-nowrap">
            <span className="text-lg font-semibold mr-1">
              {educator.rating.toFixed(1)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#FFCC00]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="text-sm text-[#FF3366] mb-2 font-medium">
          {educator.title}
        </p>
        <p className="text-sm text-[#6B7280] mb-4 leading-relaxed flex-grow">
          {educator.description}
        </p>
        {/* LinkedIn icon is positioned absolutely relative to the card */}
      </div>
      {educator.linkedinUrl && (
        <a
          href={educator.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${educator.name}'s LinkedIn Profile`}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-[#0077B5] hover:opacity-80 transition-opacity"
        >
          <TbBrandLinkedinFilled className="w-8 h-8 fill-[#3366FF]" />
        </a>
      )}
    </div>
  );
};

// This is the new component based on the image
function EducatorPanel() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredEducators = educatorsData.filter(
    (educator) => educator.category === selectedCategory
  );

  return (
    <div className="w-full mb-62">
      <div className="w-full p-6 bg-white rounded-3xl">
        {/* Heading Section */}
        <div className="text-left mb-10 md:mb-12">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{
              backgroundImage:
                "linear-gradient(rgba(250, 204, 21, 0.7), rgba(250, 204, 21, 0.7)), url('/Background2.png')", // Yellow overlay
              backgroundSize: "300px", // As per user request
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              color: "transparent", // Fallback
              MozBackgroundClip: "text", // For Firefox
              WebkitTextFillColor: "transparent", // For Safari/Chrome
            }}
          >
            Our Educator Panel
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-6">
            Meet Our Educators
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] max-w-3xl">
            Explore profiles of our dedicated teachers guiding every
            learner&#39;s journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 md:mb-12 px-1 sm:px-0">
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="flex flex-wrap justify-between gap-x-2 gap-y-3 sm:gap-x-3 bg-transparent h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-[#FF3366] data-[state=active]:text-white cursor-pointer text-[#6B7280] rounded-full px-4 py-2 text-sm md:text-md font-medium break-words max-w-full data-[state=active]:hover:bg-[#FF3366] transition-colors duration-150"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Educator Cards Grid */}
        {filteredEducators.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredEducators.map((educator) => (
              <EducatorCard key={educator.id} educator={educator} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg py-10">
            No educators currently listed for &#34;{selectedCategory}&#34;.
            Please check back later or select another category.
          </p>
        )}
      </div>
    </div>
  );
}
// -------- EducatorPanel Component and related declarations END --------

export default function CourseDetail() {
  // const [activeTab, setActiveTab] = useState("about"); // This was from your original snippet, might be used for other page tabs.

  return (
    <StudentWrapper blue>
      <div className="bg-[#EEEEEE] mx-auto w-full py-8 sm:py-12 space-y-6 px-4 sm:px-6 md:px-10 lg:px-16">
        <EducatorPanel />
      </div>
      <FooterNew />
    </StudentWrapper>
  );
}
