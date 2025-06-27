import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";

export default function Component() {
  return (
    <StudentWrapper student>
      <section className="bg-[#EEEEEE] p-10">
        <div className="w-full max-w-7xl mx-auto space-y-6 p-6 bg-white rounded-3xl">
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-12 pr-4 py-3 w-full rounded-full focus:border-gray-300 text-lg border border-[#6B7280]"
              />
            </div>

            {/* Filter Section */}
            <div className="flex items-center gap-3">
              <Filter className="text-[#FF3366] w-5 h-5" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
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
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
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
                    className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] hover:bg-gray-50"
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
            <div className="bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] overflow-hidden p-2">
              <div className="h-48 bg-gradient-to-br from-purple-200 via-purple-300 to-blue-200 flex items-center justify-center rounded-3xl">
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
              <div className="p-2">
                <h3 className="text-xl font-bold">My Knowledge Box</h3>
              </div>
            </div>

            {/* Course Cards */}
            {new Array(2).fill(0).map((_, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] overflow-hidden p-2"
              >
                <div className="relative h-48 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl overflow-hidden">
                  <img
                    src="/student/home/pers-dev.png"
                    alt="course image"
                    className="object-fit"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-bold">Course Name</h3>
                  <p className="font">
                    Domain:
                    <span className="text-[#6B7280]">&nbsp;Self Dev.</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterNew showSuscriptionBlock={false} />
    </StudentWrapper>
  );
}
