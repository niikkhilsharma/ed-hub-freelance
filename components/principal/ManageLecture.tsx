import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/app/principal/manage-lecture/AvatarImagePrincipal";
import { Check } from "lucide-react";

const teachers = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: "Name",
  subject: "Subject",
  details: "Detail1",
  avatar: "/teacher-avatar-4.png",
}));

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function LectureForm() {
  return (
    <div className="p-4 bg-white rounded-2xl my-4 shadow max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium text-zinc-700 mb-1 block">
            Lecture Date
          </label>
          <Input placeholder="DD / MM / YYYY" className="rounded-full" />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 mb-1 block">
            Lecture Time
          </label>
          <Input placeholder="Time" className="rounded-full" />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 mb-1 block">
            Select Subject
          </label>
          <Select>
            <SelectTrigger className="rounded-full">Option1</SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 mb-1 block">
            Select Group
          </label>
          <Select>
            <SelectTrigger className="rounded-full">Option1</SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-700 mb-1 block">
            Select Class
          </label>
          <Select>
            <SelectTrigger className="rounded-full">Option1</SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
        {/* Teachers List */}
        <div className="bg-[#F7F7F7] rounded-[20px] p-4">
          <div className="flex items-center justify-between mb-3 gap-2">
            <Input
              placeholder="Search Teacher"
              className="rounded-full w-full"
            />
            <Select>
              <SelectTrigger className="rounded-full w-28 text-sm px-2 py-1 h-9">
                1st STD
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1st">1st STD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ScrollArea className="h-[400px] pr-1">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between mb-3 p-2 rounded-full hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={teacher.avatar} />
                  </Avatar>
                  <div className="text-xs">
                    <p className="text-[#333] font-bold">{teacher.name}</p>
                    <p className="text-[#FF3366] font-semibold">
                      {teacher.subject}
                    </p>
                    <p className="text-gray-500">{teacher.details}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Time Table */}
        <div className="overflow-x-auto rounded-[20px]">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[auto_repeat(5,_1fr)] text-sm font-medium text-zinc-700 border-b mb-2">
              <div className="text-left py-2"></div>
              {days.map((day) => (
                <div key={day} className="text-center py-2">
                  {day}
                </div>
              ))}
            </div>
            {times.map((time, rowIdx) => (
              <div
                key={time}
                className="grid grid-cols-[auto_repeat(5,_1fr)] text-sm gap-1 mb-2"
              >
                <div className="text-left pr-2 text-gray-600 text-xs">{time}</div>
                {days.map((_, colIdx) => (
                  <div
                    key={colIdx}
                    className={`h-8 rounded-xl border border-gray-300 flex items-center justify-center ${
                      (rowIdx + colIdx) % 4 === 0 ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {(rowIdx + colIdx) % 4 === 0 && <Check size={14} />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button className="bg-[#FFEEF2] rounded-full text-[#FF3366] px-6">Cancel</Button>
        <Button className="bg-[#0049FF] rounded-full text-white px-8">Add</Button>
      </div>
    </div>
  );
}
