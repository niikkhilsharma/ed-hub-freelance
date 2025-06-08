'use client'

import { useState, useEffect, Fragment } from 'react' // Added Fragment
import Image from 'next/image'
import { FiBell, FiClock, FiX } from 'react-icons/fi' // Added FiX for close button
import DmittTestPage from './test-page-1'

// --- System Error Modal Component ---
const SystemErrorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; onRestart?: () => void }) => {
	if (!isOpen) return null

	// const handleRestart = () => {
	//     if (onRestart) {
	//         onRestart();
	//     }
	//     onClose(); // Close modal after restart action
	// };

	return (
		// Backdrop
		<div className="fixed inset-0 bg-[#00000045] bg-opacity-60 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
			{/* Modal Content */}
			<div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-300 ease-in-out scale-100 text-center p-6 md:p-8 relative">
				{/* Optional Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none"
					aria-label="Close error modal">
					<FiX className="w-5 h-5" />
				</button>

				{/* Error Icon Image */}
				<div className="mb-6 flex justify-center">
					<Image
						src="/images/nework_issue.png" // <-- UPDATE PATH to your error icon image
						alt="System Error"
						width={200} // Adjust size as needed
						height={200}
						className="object-contain"
					/>
				</div>

				{/* Error Message */}
				<p className="text-md font-semibold text-red-600">Network issues detected.</p>
				<p className="text-md font-semibold text-red-600">The &quot;module&quot; will now restart.</p>

				{/* Optional Action Button (if needed beyond just closing) */}
				{/*
                {onRestart && (
                    <button
                        onClick={handleRestart}
                        className="mt-8 w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Restart Module
                    </button>
                )}
                */}
			</div>
		</div>
	)
}

// --- Sample Question Data Structure (from previous) ---
interface QuestionOption {
	id: string
	text: string
}
interface Question {
	id: number
	text: string
	options: QuestionOption[]
	correctOptionId?: string
}

const sampleQuestions: Question[] = [
	/* ... your questions ... */
]
const TOTAL_QUESTIONS = 10
const TIME_LIMIT_MINUTES = 20
const tabCategories = ['Academic Skills', 'Brain Development', 'Personality Development', 'Emotional Intelligence']

// --- Main Test Page Component (from previous, with modal integration) ---
export default function DmittTestPageWithErrorModal() {
	const [activeCategory, setActiveCategory] = useState(tabCategories[0])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
	// const [answers, setAnswers] = useState<(string | null)[]>(Array(TOTAL_QUESTIONS).fill(null));
	const [timeLeft] = useState(TIME_LIMIT_MINUTES * 60)
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false) // State for error modal

	// Simulate an error for demonstration
	useEffect(() => {
		const showErrorTimer = setTimeout(() => {
			setIsErrorModalOpen(true)
		}, 5000) // Show error after 5 seconds
		return () => clearTimeout(showErrorTimer)
	}, [])

	// Timer useEffect (from previous)
	useEffect(() => {
		/* ... timer logic ... */
	}, [timeLeft])
	const formatTime = (seconds: number) => {
		/* ... formatTime logic ... */ return `${Math.floor(seconds / 60)
			.toString()
			.padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
	}
	const currentQuestion = sampleQuestions[currentQuestionIndex]
	const handleOptionSelect = (optionId: string) => {
		/* ... option select logic ... */ setSelectedOptionId(optionId)
	}
	const handleNextQuestion = () => {
		/* ... next question logic ... */
		if (currentQuestionIndex < TOTAL_QUESTIONS - 1 && currentQuestionIndex < sampleQuestions.length - 1) {
			setCurrentQuestionIndex(prev => prev + 1)
			setSelectedOptionId(null)
		} else {
			console.log('Test Finished/Submit')
		}
	}

	const closeErrorModal = () => {
		setIsErrorModalOpen(false)
		// Potentially trigger a restart action here if needed
		console.log("Error modal closed. Module 'restarted'.")
	}

	// const handleModuleRestart = () => {
	//     console.log("Simulating module restart...");
	//     // Add logic to reset test state, reload page, or specific module part
	//     // For now, just logs and closes modal (handled by closeErrorModal)
	// };

	return (
		<Fragment>
			{' '}
			{/* Needed for the modal to be a sibling */}
			<div className={`min-h-screen bg-gray-100 flex flex-col ${isErrorModalOpen ? 'filter blur-sm pointer-events-none' : ''}`}>
				
				<DmittTestPage/>
			</div>
			{/* Error Modal Invocation */}
			<SystemErrorModal
				isOpen={isErrorModalOpen}
				onClose={closeErrorModal}
				// onRestart={handleModuleRestart} // Uncomment if you want a restart button in the modal
			/>
		</Fragment>
	)
}
