import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";

export default function Component() {
  return (
    <StudentWrapper student>
      <div className="w-full max-w-7xl mx-auto space-y-6 p-10">
        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-3 w-full rounded-full border-2 border-gray-200 focus:border-gray-300 text-lg"
            />
          </div>

          {/* Filter Section */}
          <div className="flex items-center gap-3">
            <Filter className="text-red-500 w-5 h-5" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-700 hover:bg-gray-50"
                >
                  Filter 1
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-700 hover:bg-gray-50"
                >
                  Filter 2
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-700 hover:bg-gray-50"
                >
                  Filter 3
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Knowledge Box Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-200 via-purple-300 to-blue-200 flex items-center justify-center">
              <div className="text-black text-6xl font-bold">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="w-16 h-8 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">
                My Knowledge Box
              </h3>
            </div>
          </div>

          {/* Course Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-orange-200 to-orange-300">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3">
                <span className="text-sm font-semibold text-gray-700 bg-blue-200 px-3 py-1 rounded-full">
                  PERSONALITY DEVELOPMENT
                </span>
                <span className="text-lg font-bold text-blue-600 italic">
                  edunique
                </span>
              </div>

              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/course-image.png"
                  alt="Course thumbnail"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-16 left-4">
                <div className="bg-green-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  Learning Tricks
                </div>
              </div>
              <div className="absolute top-20 right-4">
                <div className="bg-pink-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  SWOT Analysis
                </div>
              </div>
              <div className="absolute bottom-16 left-4">
                <div className="bg-orange-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  Image Building
                </div>
              </div>
              <div className="absolute bottom-20 right-4">
                <div className="bg-green-300 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  SMART Goal Setting
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Course Name</h3>
              <p className="text-gray-600">
                Domain: <span className="text-gray-500">Self Dev.</span>
              </p>
            </div>
          </div>

          {/* Course Card 2 (Duplicate) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-orange-200 to-orange-300">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3">
                <span className="text-sm font-semibold text-gray-700 bg-blue-200 px-3 py-1 rounded-full">
                  PERSONALITY DEVELOPMENT
                </span>
                <span className="text-lg font-bold text-blue-600 italic">
                  edunique
                </span>
              </div>

              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/course-image.png"
                  alt="Course thumbnail"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-16 left-4">
                <div className="bg-green-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  Learning Tricks
                </div>
              </div>
              <div className="absolute top-20 right-4">
                <div className="bg-pink-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  SWOT Analysis
                </div>
              </div>
              <div className="absolute bottom-16 left-4">
                <div className="bg-orange-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  Image Building
                </div>
              </div>
              <div className="absolute bottom-20 right-4">
                <div className="bg-green-300 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full">
                  SMART Goal Setting
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Course Name</h3>
              <p className="text-gray-600">
                Domain: <span className="text-gray-500">Self Dev.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterNew showSuscriptionBlock={false} />
    </StudentWrapper>
  );
}
