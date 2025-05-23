"use client";

import { useState } from "react";
import { ArrowLeft, Search, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface VideoItem {
  id: string;
  class: string;
  subject: string;
  title: string;
  isSelected?: boolean;
}

export default function AddPedagogyVideosPage() {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState("Class 3");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideos, setSelectedVideos] = useState<VideoItem[]>([
    {
      id: "1",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system1",
    },
    {
      id: "3",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system3",
    },
  ]);

  const availableVideos: VideoItem[] = [
    {
      id: "1",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system1",
    },
    {
      id: "2",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system2",
    },
    {
      id: "3",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system3",
    },
    {
      id: "4",
      class: "Class 3",
      subject: "math",
      title: "Unitary Number system4",
    },
    {
      id: "5",
      class: "Class 4",
      subject: "math",
      title: "Unitary Number system Advanced1",
    },
    {
      id: "6",
      class: "Class 4",
      subject: "math",
      title: "Unitary Number system Advanced2",
    },
    {
      id: "7",
      class: "Class 4",
      subject: "math",
      title: "Unitary Number system Advanced 3",
    },
  ];

  const filteredVideos = availableVideos.filter(
    (video) =>
      (selectedClass === "All Classes" || video.class === selectedClass) &&
      (searchTerm === "" ||
        video.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddVideo = (video: VideoItem) => {
    if (!selectedVideos.some((v) => v.id === video.id)) {
      setSelectedVideos([...selectedVideos, video]);
    }
  };

  const handleSave = () => {
    // Save logic here
    router.push("/videos");
  };

  return (
    <div className="min-h-screen bg-[#eeeeee] py-6">
      <div className="container bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="border-b p-4">
          <div className="container mx-auto">
            <div className="flex items-center">
              <Link href="/videos" className="mr-2">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-xl font-medium">Add pedagogy Videos</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-6 px-4">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Select Class
            </label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full max-w-md">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Classes">All Classes</SelectItem>
                <SelectItem value="Class 1">Class 1</SelectItem>
                <SelectItem value="Class 2">Class 2</SelectItem>
                <SelectItem value="Class 3">Class 3</SelectItem>
                <SelectItem value="Class 4">Class 4</SelectItem>
                <SelectItem value="Class 5">Class 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Unitary"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="border rounded-md p-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm">
                        {video.class} {video.subject}
                      </p>
                      <p className="text-sm">{video.title}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8 text-pink-500 hover:text-pink-600"
                        onClick={() => handleAddVideo(video)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="space-y-3">
                {selectedVideos.map((video) => (
                  <div
                    key={video.id}
                    className="border rounded-md p-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm">
                        {video.class} {video.subject}
                      </p>
                      <p className="text-sm">{video.title}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8 space-x-4">
            <Button variant="outline" onClick={() => router.push("/videos")}>
              Cancel
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
