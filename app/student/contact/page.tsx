"use client";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CourseDetail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Form submitted successfully!");
  };
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10 pb-40">
        {/* headers */}
        <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">Contact</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">Contact</div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center min-h-screen">
          <Card className="w-full max-w-6xl shadow-lg overflow-hidden rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Form Section */}
              <div className="p-6">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We are here for you! How can we help?
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Go ahead. We are listening..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-32"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </div>

              {/* Info Section with Illustration */}
              <div className="p-6 flex flex-col items-center relative">
                <div className="flex-grow flex items-center justify-center mb-16">
                  <div className="relative w-full max-w-xs">
                    <Image
                      src={"/api/placeholder/400/320"}
                      alt={"Contact illustration"}
                      className="w-full"
                      width={400}
                      height={320}
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">
                      838 Cantt Sialkot, Pakistan
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">979-988-89787</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">abcd123@gmail.com</span>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 bg-pink-500 p-2">
                  <a href="#" className="text-white hover:text-gray-200">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
