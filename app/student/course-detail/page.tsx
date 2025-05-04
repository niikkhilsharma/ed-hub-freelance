"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Info,
  Megaphone,
  MessageSquare,
  Star,
  Trash2,
  Lock,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // Course progress data
  const progress = 20;

  // Course content data
  const courseContent = [
    {
      id: 1,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: false,
      isCompleted: false,
      date: null,
    },
    {
      id: 2,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 3,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 4,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 5,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 6,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 7,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 8,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
    {
      id: 9,
      title: "Programs Basic Class",
      duration: "1h 10m",
      isLocked: true,
      isCompleted: false,
      date: "20 Jun 2025 2:30PM To 3:30PM",
    },
  ];

  // Announcements data
  const announcements = [
    {
      id: 1,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 2,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 3,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 4,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 5,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 6,
      date: "20 Jun, 2025 10:10 PM",
      title: "Class 21 June 2025 Sorry for not uploading",
      content:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
  ];

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Wade Warren",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image1.png",
    },
    {
      id: 2,
      name: "Jacob Jones",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image2.png",
    },
    {
      id: 3,
      name: "Theresa Webb",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image3.png",
    },
    {
      id: 4,
      name: "Kathryn Murphy",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image4.png",
    },
    {
      id: 5,
      name: "Eleanor Pena",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image5.png",
    },
    {
      id: 6,
      name: "Ronald Richards",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image6.png",
    },
    {
      id: 7,
      name: "Savannah Nguyen",
      date: "20 jun 2025",
      rating: 4,
      comment: "Good course loved it a lot",
      avatar: "/student/course-detail/image7.png",
    },
  ];

  const handleDeleteAnnouncement = (id: number) => {
    console.log(`Deleting announcement with id: ${id}`);
    // Implement delete functionality here
  };

  const handleSubmitReview = () => {
    console.log("Submitting review:", { rating, reviewText });
    // Implement submit review functionality here
    setIsReviewModalOpen(false);
    setRating(0);
    setReviewText("");
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Header */}
      <header className="bg-pink-500 text-white py-4 px-24">
        <div className="flex justify-between items-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-4 font-bold text-xl"
          >
            <ArrowLeft size={24} />
            Go Back Dashboard
          </Link>
          <div className="flex flex-col items-end">
            <h1 className="text-xl font-medium">
              STEM Diploma In Technology Programs
            </h1>
            <div className="w-full mt-1">
              <div className="flex justify-between text-xs mb-1">
                <span>20%</span>
                <span>100%</span>
              </div>
              <Progress value={progress} className="h-3 bg-white">
                <div className="h-2" style={{ width: `${progress}%` }} />
              </Progress>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-gray-200 rounded-md overflow-hidden mb-6">
              <video
                className="w-full h-full "
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
              />
            </div>

            {/* Tabs */}
            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={handleTabChange}
            >
              <TabsList className="w-full border-b">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:text-pink-500 data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none pb-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="announcement"
                  className="data-[state=active]:text-pink-500 data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none pb-2"
                >
                  Announcement
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:text-pink-500 data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none pb-2"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Info className="text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium mb-4">
                      About this Lecture
                    </h2>
                    <p className="text-gray-700">
                      Unlock the full potential of Python in the realms of data
                      science and machine learning with this comprehensive
                      course. Designed for aspiring data scientists, machine
                      learning engineers, and anyone eager to dive into the
                      world of data, this course takes you from foundational
                      concepts to advanced techniques, ensuring a thorough
                      understanding and hands-on experience with the latest
                      tools and methodologies
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="announcement" className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Megaphone className="text-blue-500 h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-medium">Announcement</h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-pink-100 text-pink-500">
                      <tr>
                        <th className="py-3 px-4 text-left">S.N.</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Announcement</th>
                        <th className="py-3 px-4 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement, index) => (
                        <tr
                          key={announcement.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-pink-50"
                          }
                        >
                          <td className="py-4 px-4">
                            {String(announcement.id).padStart(2, "0")}
                          </td>
                          <td className="py-4 px-4">{announcement.date}</td>
                          <td className="py-4 px-4">
                            <div className="font-medium">
                              {announcement.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {announcement.content}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <button
                              onClick={() =>
                                handleDeleteAnnouncement(announcement.id)
                              }
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <MessageSquare className="text-blue-500 h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-medium">Reviews</h2>
                  </div>
                  <Button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Add Review
                  </Button>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-blue-50 rounded-md p-4">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{review.name}</h3>
                              <span className="text-gray-500 text-sm">•</span>
                              <span className="text-gray-500 text-sm">
                                {review.date}
                              </span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={
                                star <= review.rating
                                  ? "text-orange-500 fill-orange-500"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Content Sidebar */}
          <div className="bg-pink-50 rounded-lg p-4">
            <h2 className="text-xl font-medium mb-4">Course Content</h2>

            <div className="space-y-2">
              {courseContent.map((item) => (
                <div
                  key={item.id}
                  className={`bg-blue-50 rounded-md p-3 ${
                    item.isLocked ? "" : "border-l-4 border-blue-500"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id={`course-${item.id}`}
                      disabled={item.isLocked}
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`course-${item.id}`}
                        className="font-medium block mb-1"
                      >
                        {item.title}
                      </label>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock size={14} />
                          <span>{item.duration}</span>
                        </div>
                        {item.date && (
                          <div className="flex items-center gap-1 text-gray-600">
                            <Calendar size={14} />
                            <span>{item.date}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {item.isLocked && (
                      <div className="text-red-500">
                        <Lock size={18} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Write a review</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          <div className="py-4">
            <div className="mb-6">
              <h3 className="mb-3">Rating</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={32}
                      className={
                        star <= rating
                          ? "text-orange-500 fill-orange-500"
                          : "text-orange-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Your Review</h3>
              <Textarea
                placeholder="Add your thoughts and experiences with this course"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={6}
              />
            </div>

            <Button
              onClick={handleSubmitReview}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
