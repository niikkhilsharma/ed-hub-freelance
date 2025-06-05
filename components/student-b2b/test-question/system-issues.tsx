'use client'

import { useState, useEffect, Fragment } from 'react' // Added Fragment
import Image from 'next/image'
import { FiBell, FiClock, FiX } from 'react-icons/fi' // Added FiX for close button

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
						src="/images/system_issue.png" // <-- UPDATE PATH to your error icon image
						alt="System Error"
						width={200} // Adjust size as needed
						height={200}
						className="object-contain"
					/>
				</div>

				{/* Error Message */}
				<p className="text-md font-semibold text-red-600">A system error has occurred.</p>
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
export default function DmittTestPageWithSystemErrorModal() {
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
				{' '}
				{/* Blur background when modal is open */}
				{/* Header (from previous) */}
				<header className="bg-blue-600 text-white shadow-md sticky top-0 z-40">
					{' '}
					{/* Lower z-index than modal */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
						<span className="text-2xl font-bold italic">EDUNIQUE</span>
						<div className="flex items-center space-x-4">
							<button className="p-1.5 rounded-full hover:bg-blue-700 focus:outline-none">
								<FiBell className="w-5 h-5" />
							</button>
							<div className="flex items-center space-x-2">
								<Image src="/placeholder-avatar.jpg" alt="Shlok Agheda" width={32} height={32} className="rounded-full" />
								<div>
									<p className="text-sm font-medium">Shlok Agheda</p>
									<p className="text-xs opacity-80">Student</p>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* Main Content (from previous, simplified for brevity) */}
				<main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
						<h1 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-6">DMIT Test</h1>
						<div className="flex space-x-3 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
							{tabCategories.map(category => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2.5 text-sm font-medium rounded-t-lg whitespace-nowrap focus:outline-none transition-colors duration-150 ${
										activeCategory === category ? 'bg-pink-500 text-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
									}`}>
									{category}
								</button>
							))}
						</div>
						<div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
							<div>
								<p className="text-md font-semibold text-gray-700">Questions : {TOTAL_QUESTIONS}</p>
								<p className="text-xs text-gray-500">Time Limit: {TIME_LIMIT_MINUTES} Minutes</p>
								<div className="mt-2 inline-flex items-center justify-center px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
									{currentQuestionIndex + 1} / {TOTAL_QUESTIONS}
								</div>
							</div>
							<div className="text-right">
								<div className="flex items-center gap-1.5 text-pink-500">
									<FiClock className="w-5 h-5" />
									<span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
								</div>
								<p className="text-xs text-pink-500">Min Left</p>
							</div>
						</div>
						{currentQuestion && (
							<div className="bg-gray-50 p-6 rounded-xl shadow-inner">
								<p className="text-xs text-gray-500 mb-1">Question {currentQuestionIndex + 1}</p>
								<h2 className="text-md font-semibold text-gray-800 mb-6">{currentQuestion.text}</h2>
								<div className="space-y-3">
									{currentQuestion.options.map(option => (
										<button
											key={option.id}
											onClick={() => handleOptionSelect(option.id)}
											className={`w-full text-left flex items-center p-3.5 border-2 rounded-xl transition-all duration-150 focus:outline-none ${
												selectedOptionId === option.id
													? 'bg-blue-100 border-blue-500 ring-1 ring-blue-500'
													: 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
											}`}>
											<span className="text-sm text-gray-700">{option.text}</span>
										</button>
									))}
								</div>
							</div>
						)}
						<div className="mt-10 flex justify-end">
							<button
								onClick={handleNextQuestion}
								disabled={!selectedOptionId && currentQuestionIndex < TOTAL_QUESTIONS - 1}
								className="px-10 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
								{currentQuestionIndex === TOTAL_QUESTIONS - 1 || currentQuestionIndex === sampleQuestions.length - 1
									? 'Submit'
									: 'Next'}
							</button>
						</div>
					</div>
				</main>
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
