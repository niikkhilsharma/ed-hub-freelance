'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image' // For the bell icon and user avatar
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQPage() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
	}

	const questions = [
		{ question: 'Question 1', answer: 'lorem ipsum' },
		{ question: 'Question 2', answer: 'lorem ipsum' },
		{ question: 'Question 3', answer: 'lorem ipsum' },
		{ question: 'Question 4', answer: 'lorem ipsum' },
		{ question: 'Question 5', answer: 'lorem ipsum' },
	]

	return (
		<div>
			<div className="min-h-screen flex flex-col bg-gray-100">
				<Header user={headerUser} />

				{/* The upper navigation bar */}
				<div className="bg-white w-full">
					<div className="container py-4 sm:px-6 lg:px-8 w-full-bg-white px-4 text-[#FF3366] flex justify-start items-center text-xl gap-2 mx-auto">
						<svg width={20} height={21} viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.75 15.5H6.25" stroke="black" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
							<path d="M15 6.75L6.25 15.5L15 24.25" stroke="black" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						FAQs
					</div>
				</div>

				{/*  */}
				<main className="container mx-auto p-4  bg-white rounded-2xl my-20 flex flex-col sm:flex-row gap-4">
					<div className="sm:w-2/5">
						<Accordion type="single" collapsible className="space-y-4">
							{questions.map((question, indx) => (
								<AccordionItem
									value={question.question}
									key={indx}
									className="px-4 py-2 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
									<AccordionTrigger className="text-[#1A1A1A]">{question.question}</AccordionTrigger>
									<AccordionContent>{question.answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className="sm:w-3/5">
						<Image src={'/student.png'} width={200} height={200} alt="student" className="w-full h-full" />
					</div>
				</main>

				<Footer />
			</div>
		</div>
	)
}
