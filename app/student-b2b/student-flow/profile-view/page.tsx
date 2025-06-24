
"use client";

import React, { useState } from 'react';
import Header from "@/components/layout/Header";     
import Footer from "@/components/layout/Footer";    
import { 
    ProfileFormSection, 
    NewsletterSection 
} from './components'; 

export default function EditStudentProfilePage() {
  const [formData, setFormData] = useState({
    name: "Shlok Agheda",
    emailAddress: "example@gm.com",
    contactNumber: "1234567890",
    classNum: "8th",
    gender: "Male",
    dob: "00 JAN 0000",
    group: "A",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: "000000",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleProfileFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Data Saved:", formData);
    alert("Profile Saved (check console)!");
  };

  const handleNewsletterEmailChange = (value: string) => {
    setNewsletterEmail(value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter Subscription:", newsletterEmail);
    alert(`Subscribed with ${newsletterEmail} (check console)!`);
    setNewsletterEmail("");
  };

  const headerUser = {
    name: formData.name,
    role: "Student",
    avatarSrc: "/images/person.jpg",
  };



  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header user={headerUser} />

      <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">

        <ProfileFormSection
          formData={formData}
          onFormChange={handleProfileFormChange}
          onProfileSave={handleProfileSave}
          profileAvatarSrc="/images/person.jpg" 
        />
        
        <NewsletterSection
          newsletterEmail={newsletterEmail}
          onNewsletterEmailChange={handleNewsletterEmailChange}
          onNewsletterSubmit={handleNewsletterSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}
