// page.tsx (e.g. /app/faq/page.tsx)
"use client";

import React, { useState } from 'react'; // Removed useState as activeMainCategory is not used in this page's content
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Accordion components are imported directly from shadcn/ui path in components.tsx
import {
    FAQSection,
    NewsletterSection,
    FAQItemData // Type
} from './components';
import { PageTitleBar } from './ui-components'; // Import PageTitleBar

// --- Sample Data (from your original) ---
const faqQuestionsData: FAQItemData[] = [ // Renamed for clarity
    { question: 'Question 1: What is Lorem Ipsum?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Question 2: Why do we use it?', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { question: 'Question 3: Where does it come from?', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Question 4: Is it readable?', answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { question: 'Question 5: Can I use it for my project?', answer: 'Yes, Lorem Ipsum is widely used as placeholder text in design and development.' },
];
// --- End Sample Data ---

export default function FAQPage() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg',
	};

    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };
	 const [newsletterEmail, setNewsletterEmail] = useState("");
	  const handleNewsletterEmailChange = (value: string) => {
		 setNewsletterEmail(value);
	   };
	 
	   const handleNewsletterSubmit = (e: React.FormEvent) => {
		 e.preventDefault();
		 console.log("Newsletter Subscription:", newsletterEmail);
		 alert(`Subscribed with ${newsletterEmail} (check console)!`);
		 setNewsletterEmail("");
	   };
	 

	return (
		// Original wrapper: div and inner div with bg-gray-100
        // Simplified to single wrapper
		<div className="min-h-screen flex flex-col bg-gray-100">
			<Header user={headerUser} />

            <PageTitleBar title="FAQs" onBackClick={handleBackClick} />

            {/* Original main: container mx-auto p-2 max-w-[90vw] bg-white rounded-2xl my-6 flex flex-col sm:flex-row gap-4 */}
			<main className="flex-grow container mx-auto mt-4 p-3 bg-white rounded-xl 
                           sm:my-6 sm:p-4 md:p-6 lg:p-8 sm:rounded-2xl 
                           max-w-[95vw] md:max-w-[90vw] ">
                <FAQSection 
                    questions={faqQuestionsData}
                    imageSrc="/student.png" // Your original image path
                    imageAlt="Student illustration for FAQ"
                />
			</main>
            <div className='flex-grow container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8'>

            <NewsletterSection 
			newsletterEmail={newsletterEmail}
			onNewsletterEmailChange={handleNewsletterEmailChange}
			onNewsletterSubmit={handleNewsletterSubmit}
			/> {/* Newsletter is outside the main white card as per your layout */}	
			</div>

			<Footer />
		</div>
	);
}