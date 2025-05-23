"use client"

import { useState } from "react"
import { MainNav } from "@/components/page3/main-nav"
import { ClassRecordingsList } from "@/components/page3/videos/class-recordings-list"
import { ReferenceVideoCards } from "@/components/page3/videos/reference-video-cards"
import { PedagogyVideosList } from "@/components/page3/videos/pedagogy-videos-list"
import { VideoTabs } from "@/components/page3/videos/video-tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddVideoDialog } from "@/components/page3/videos/add-video-dialog"

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState("Class Recordings")
  const [isAddVideoOpen, setIsAddVideoOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState("May 2025")
  const [sortOrder, setSortOrder] = useState("Newest to oldest")
  const [selectedClass, setSelectedClass] = useState("Class 3")
  const [selectedSubject, setSelectedSubject] = useState("Maths")

  const handlePreviousMonth = () => {
    // This would normally calculate the previous month
    setCurrentMonth("April 2025")
  }

  const handleNextMonth = () => {
    // This would normally calculate the next month
    setCurrentMonth("June 2025")
  }

  return (
    <div className={`min-h-screen bg-[#eeeeee] py-6 ${isAddVideoOpen? "blur-sm" : ""}`}>

      <div className="container bg-white max-w-7xl rounded-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6">
          <div className="border-b">
            <VideoTabs activeTab={activeTab} onChange={setActiveTab} />
          </div>

          <div className="p-6">
            {activeTab === "Class Recordings" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={handlePreviousMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="font-medium">{currentMonth}</span>
                    <Button variant="ghost" size="icon" onClick={handleNextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <ArrowUpDown className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{sortOrder}</span>
                    </div>

                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Class 1">Class 1</SelectItem>
                        <SelectItem value="Class 2">Class 2</SelectItem>
                        <SelectItem value="Class 3">Class 3</SelectItem>
                        <SelectItem value="Class 4">Class 4</SelectItem>
                        <SelectItem value="Class 5">Class 5</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maths">Maths</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <ClassRecordingsList />
              </>
            )}

            {activeTab === "Reference Videos" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div></div>
                  <div className="flex items-center space-x-4">
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Class 1">Class 1</SelectItem>
                        <SelectItem value="Class 2">Class 2</SelectItem>
                        <SelectItem value="Class 3">Class 3</SelectItem>
                        <SelectItem value="Class 4">Class 4</SelectItem>
                        <SelectItem value="Class 5">Class 5</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maths">Maths</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => setIsAddVideoOpen(true)}
                    >
                      Add Videos
                    </Button>
                  </div>
                </div>

                <ReferenceVideoCards />
              </>
            )}

            {activeTab === "Pedagogy Videos" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <ArrowUpDown className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{sortOrder}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Class 1">Class 1</SelectItem>
                        <SelectItem value="Class 2">Class 2</SelectItem>
                        <SelectItem value="Class 3">Class 3</SelectItem>
                        <SelectItem value="Class 4">Class 4</SelectItem>
                        <SelectItem value="Class 5">Class 5</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maths">Maths</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => setIsAddVideoOpen(true)}
                    >
                      Add Videos
                    </Button>
                  </div>
                </div>

                <PedagogyVideosList />
              </>
            )}
          </div>
        </div>
      </div>

      <AddVideoDialog open={isAddVideoOpen} onOpenChange={setIsAddVideoOpen} />
    </div>
  )
}
