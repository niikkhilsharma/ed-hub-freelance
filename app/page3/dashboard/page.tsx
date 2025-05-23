"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  PanelTopClose,
  Users,
  Megaphone,
  UserSquare2,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Edit,
  FileText,
  Link,
  MessageSquare,
  Video,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import MyClassesComponent from "@/components/page3/my-classes";

export default function Page3Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <TabsList className="flex w-full justify-start gap-2 pl-16 overflow-x-auto overflow-y-hidden">
            <TabsTrigger
              value="dashboard"
              className="flex items-center gap-1 text-sm"
            >
              <PanelTopClose className="h-4 w-4" /> Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="classes"
              className="flex items-center gap-1 text-sm"
            >
              <Users className="h-4 w-4" /> My Classes
            </TabsTrigger>
            <TabsTrigger
              value="announcements"
              className="flex items-center gap-1 text-sm"
            >
              <Megaphone className="h-4 w-4" /> Announcements
            </TabsTrigger>
            <TabsTrigger
              value="batch"
              className="flex items-center gap-1 text-sm"
            >
              <UserSquare2 className="h-4 w-4" /> My Batch
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex items-center gap-1 text-sm"
            >
              <Settings2 className="h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <div>
          <TabsContent value="dashboard">
            <div className="text-sm">
              <Dashboard />
            </div>
          </TabsContent>
          <TabsContent value="classes">
            <div className="text-sm  bg-[#eeeeee]">
              <MyClasses />
            </div>
          </TabsContent>
          <TabsContent value="announcements">
            <div className="text-sm">Announcements Content</div>
          </TabsContent>
          <TabsContent value="batch">
            <div className="text-sm">My Batch Content</div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="text-sm">Settings Content</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

const Dashboard = () => {

  const Router = useRouter();

  return (
    <div className="min-h-screen bg-[#eeeeee] p-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <Card className="col-span-full">
          <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/page3/dashboard/profile.png"
                  width={120}
                  height={120}
                  alt="Sujith Kumar"
                  className="rounded-full object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm"
                  onClick={() => {
                    Router.push("/page3/dashboard/edit-profile");
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Sujith Kumar</h1>
                <p className="text-pink-500">8-A Class</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 flex-1 text-sm">
              <div className="flex gap-2">
                <span className="font-medium">Gender :</span>
                <span>Male</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">City:</span>
                <span>Jaipur</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">DOB :</span>
                <span>15-Jun-2015</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">State:</span>
                <span>Rajasthan</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Email:</span>
                <span>janecooper@gmail.com</span>
              </div>
              <div className="flex gap-2 md:justify-end">
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-800 hover:bg-green-50 px-3"
                >
                  DMIT & Skill Test Results :50
                </Badge>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Contact :</span>
                <span>+91-9876543210</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Group and Your Teachers Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Group */}
            <Card>
              <CardContent className="p-0">
                <h2 className="text-xl font-bold p-6 pb-2">My Group</h2>
                <div className="p-6 pt-0 flex gap-4">
                  <div className="flex-shrink-0 w-24 h-24 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold">A</div>
                      <div className="text-sm">Group</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Overview</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry&apos;s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant="outline"
                      className="rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      Academics
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      Sports
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      Upcoming
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      TBD
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      TBD
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Teachers */}
            <Card>
              <CardContent className="p-0">
                <h2 className="text-xl font-bold p-6 pb-4">Your Teachers</h2>
                <div className="space-y-4 px-6 pb-6">
                  {/* Teacher 1 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src="/page3/dashboard/profile1.png"
                          width={60}
                          height={60}
                          alt="Sunita Sen"
                          className="rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Sunita Sen</h3>
                        <p className="text-pink-500 text-sm">Maths</p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Teacher 2 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src="/page3/dashboard/profile2.png"
                          width={60}
                          height={60}
                          alt="Ishaan"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Ishaan</h3>
                        <p className="text-pink-500 text-sm">Science</p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Teacher 3 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src="/page3/dashboard/profile3.png"
                          width={60}
                          height={60}
                          alt="Reshma Kumari"
                          className="rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">Reshma Kumari</h3>
                        <p className="text-pink-500 text-sm">English</p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Activities */}
          <Card>
            <CardContent className="p-0">
              <h2 className="text-xl font-bold p-6 pb-4">
                Learning Activities
              </h2>
              <div className="px-6">
                <Tabs defaultValue="active" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-transparent p-0 h-auto border-b">
                    <TabsTrigger
                      value="active"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none pb-2 font-medium"
                    >
                      Active
                    </TabsTrigger>
                    <TabsTrigger
                      value="completed"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 rounded-none pb-2 font-medium"
                    >
                      Completed
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="active" className="mt-0">
                    <h3 className="font-bold mb-4">MAY 2025</h3>
                    <div className="space-y-4 pb-4">
                      {/* Activity 1 - Highlighted */}
                      <div className="border rounded-lg p-4 flex justify-between items-center border-blue-200 bg-blue-50">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                            <Video className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-pink-500 text-sm">
                              Online Class: Science Topic
                            </p>
                            <h4 className="font-medium">
                              Climate change and food security
                            </h4>
                            <p className="text-sm text-gray-500">
                              28-4-2025 - 04-5-2025
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="text-blue-500 border-blue-200"
                        >
                          Join
                        </Button>
                      </div>

                      {/* Activity 2 */}
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-pink-500 text-sm">
                              Assignment: Science_Lesson 1
                            </p>
                            <h4 className="font-medium">
                              Climate change and food security
                            </h4>
                            <p className="text-sm text-gray-500">5-4-2025</p>
                          </div>
                        </div>
                        <span className="text-gray-500">Not Started</span>
                      </div>

                      {/* Activity 3 */}
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                            <Video className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-pink-500 text-sm">
                              Online Class: Science Topic
                            </p>
                            <h4 className="font-medium">
                              Climate change and food security
                            </h4>
                            <p className="text-sm text-gray-500">
                              28-4-2025 - 04-5-2025
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="text-blue-500">
                          Join
                        </Button>
                      </div>

                      {/* Activity 4 */}
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-pink-500 text-sm">
                              Assignment: Science_Lesson 1
                            </p>
                            <h4 className="font-medium">
                              Climate change and food security
                            </h4>
                            <p className="text-sm text-gray-500">5-4-2025</p>
                          </div>
                        </div>
                        <span className="text-gray-500">Not Started</span>
                      </div>
                    </div>

                    <div className="text-center pb-4">
                      <Link href="#" className="text-blue-500 hover:underline">
                        View all Activities
                      </Link>
                    </div>
                  </TabsContent>

                  <TabsContent value="completed" className="mt-0">
                    <h3 className="font-bold mb-4">MAY 2025</h3>
                    <div className="text-center py-8 text-gray-500">
                      No completed activities yet
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <Card className="col-span-full">
            <CardContent className="p-6">
              {/* Classes */}
              <Card className="bg-gray-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Classes</h2>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="h-6 w-6">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm">May 2025</span>
                      <Button size="icon" variant="ghost" className="h-6 w-6">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <p className="text-sm mb-1">Complete</p>
                      <p className="font-bold">2/20</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">Incomplete</p>
                      <p className="font-bold text-pink-500">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Attendance */}
              <Card className="bg-gray-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Attendance</h2>
                    <span className="text-blue-500 font-bold">15%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Grade */}
              <Card className="bg-gray-50 mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Grade</h2>
                    <span className="text-blue-500 font-bold">3.5</span>
                  </div>
                </CardContent>
              </Card>

              {/* Leader Board */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Leader Board</h2>
                    <span className="text-blue-500 font-bold">Rank 5</span>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          {/* Notifications */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-amber-50 p-4 rounded-md">
                    <h3 className="font-medium mb-1">Teacher add comment</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem
                    </p>
                    <p className="text-xs text-gray-500">28-4-2025</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const MyClasses = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <MyClassesComponent />
    </div>
  );
};
