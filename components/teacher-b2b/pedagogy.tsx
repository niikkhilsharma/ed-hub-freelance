'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
	FiArrowLeft,
	FiChevronDown,
	FiChevronUp,
	// Add other icons if they appear in dropdown content or expanded sections
} from 'react-icons/fi'
import Header from '@/components/layout/Header' // Adjust path as needed
import Footer from '@/components/layout/Footer' // Adjust path as needed
// import MaxWidthWrapper from '../max-width-wrapper'
import MaxWidthWrapper from '../admin/max-width-wrapper'

// --- Style Constants ---
const ACCENT_PINK = '#FF3366' // For active Category tabs
const PRIMARY_BLUE = '#3366FF' // For active Chapter tabs and Learning Objectives title
const CHAPTER_ACCORDION_BG = 'bg-[#F9FAFB]' // Background for chapter accordions
const SCROLLBAR_THUMB_ORANGE = 'scrollbar-thumb-[#FFC79A]'
const SCROLLBAR_TRACK_LIGHT = 'scrollbar-track-orange-100'

// --- Data Interfaces ---
interface TopCategoryTab {
	id: string
	name: string
}

interface ChapterSubTab {
	id: string
	name: string
	categoryId: string // Link to TopCategoryTab
}

interface ChapterAccordionItem {
	id: string
	name: string
	chapterId: string // Link to ChapterSubTab
	// Potentially content for when expanded, but image doesn't show it
}

interface LearningObjective {
	id: string
	level: string // e.g., "WHITE", "PINK", "PURPLE"
	points: string[]
}

interface MaterialItem {
	id: string
	text: string
}

interface PedagogyInfo {
	learningObjectives: LearningObjective[]
	materialsRequired: MaterialItem[]
	// This info should ideally change based on selected chapter/accordion
}

// --- Sample Data ---
const sampleTopCategories: TopCategoryTab[] = [
	{ id: 'cat1', name: 'Category 1' },
	{ id: 'cat2', name: 'Category 2' },
	{ id: 'cat3', name: 'Category 3' },
	{ id: 'cat4', name: 'Category 4' },
	{ id: 'cat5', name: 'Category 5' },
]

const sampleChapterSubTabs: ChapterSubTab[] = [
	{ id: 'ch1', name: 'Chapter 1', categoryId: 'cat1' },
	{ id: 'ch2', name: 'Chapter 2', categoryId: 'cat1' },
	{ id: 'ch3', name: 'Chapter 3', categoryId: 'cat1' },
	{ id: 'ch4', name: 'Chapter Alpha', categoryId: 'cat2' },
	{ id: 'ch5', name: 'Chapter Beta', categoryId: 'cat2' },
]

const sampleChapterAccordions: ChapterAccordionItem[] = Array.from({ length: 6 }, (_, i) => ({
	id: `acc${i + 1}`,
	name: 'Chapter Name', // This is repeated in the image, make dynamic if needed
	chapterId: sampleChapterSubTabs[0].id, // Default to first chapter for now
}))
// Add more accordion items linked to other chapters for testing

const samplePedagogyInfo: PedagogyInfo = {
	learningObjectives: [
		{
			id: 'lo1',
			level: 'WHITE:',
			points: [
				'Recall addition and subtraction of like proper and improper fractions.',
				'Recall expressing mixed numbers as improper fractions.',
				'Recall the addition and subtraction of mixed numbers.',
				'Interpret the meaning of words like ‘Sum total’, ‘in all’ or altogether, ‘how much left or remaining’, ‘which is more or less’, etc, and correlate them to symbols of addition and subtraction ie,+ and - signs, in order to solve the word problem.',
				'Attempt to solve 5 to 10 questions with or without support.',
			],
		},
		{
			id: 'lo2',
			level: 'PINK:',
			points: [
				/* ... similar points ... */
			],
		},
		{
			id: 'lo3',
			level: 'PURPLE:',
			points: [
				/* ... similar points ... */
			],
		},
	],
	materialsRequired: [
		{ id: 'mat1', text: 'Worksheets for each group' },
		{ id: 'mat2', text: 'A performance record/map for the students' },
		{ id: 'mat3', text: 'Prescribed textbook' },
	],
}
// Fill in PINK and PURPLE points if needed for full display
samplePedagogyInfo.learningObjectives[1].points = [...samplePedagogyInfo.learningObjectives[0].points]
samplePedagogyInfo.learningObjectives[2].points = [...samplePedagogyInfo.learningObjectives[0].points]

// --- Helper Components ---

const TopTabButton: React.FC<{
	tab: TopCategoryTab
	isActive: boolean
	onClick: () => void
}> = ({ tab, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 whitespace-nowrap
      ${isActive ? `bg-[${ACCENT_PINK}] text-white shadow-md` : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}>
		{tab.name}
	</button>
)

const ChapterSubTabButton: React.FC<{
	tab: ChapterSubTab
	isActive: boolean
	onClick: () => void
}> = ({ tab, isActive, onClick }) => (
	<button
		onClick={onClick}
		className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-150 whitespace-nowrap focus:outline-none
      ${
							isActive
								? `text-[${PRIMARY_BLUE}] border-b-2 border-[${PRIMARY_BLUE}]`
								: 'text-[#6B7280] hover:text-black border-b-2 border-transparent hover:border-gray-300'
						}`}>
		{tab.name}
	</button>
)

const ChapterAccordion: React.FC<{
	item: ChapterAccordionItem
	isOpen: boolean
	onToggle: () => void
}> = ({ item, isOpen, onToggle }) => (
	<button
		onClick={onToggle}
		className={`w-full flex justify-between items-center p-3.5 ${CHAPTER_ACCORDION_BG} hover:bg-gray-100 rounded-2xl border border-[#E5E7EB] shadow-sm transition-colors`}>
		<span className="text-sm font-medium text-black">{item.name}</span>
		{isOpen ? <FiChevronUp className="w-4 h-4 text-black" /> : <FiChevronDown className="w-4 h-4 text-black" />}
	</button>
	// If accordion expands to show content, add it here conditionally based on `isOpen`
)

const InfoPanel: React.FC<{ info: PedagogyInfo }> = ({ info }) => (
	<div
		className={`space-y-6 h-full overflow-y-auto custom-scrollbar-thin ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT}`}>
		<div className="bg-white rounded-2xl p-4 sm:p-5">
			<h3 className={`text-lg font-semibold text-[${PRIMARY_BLUE}] mb-3.5`}>Learning Objectives</h3>
			<div className="space-y-3 text-[13px] text-black">
				{info.learningObjectives.map(obj => (
					<div key={obj.id}>
						<p className="font-medium text-black mb-3">{obj.level}</p>
						<ul className="list-disc list-outside pl-4 space-y-1.5">
							{obj.points.map((point, idx) => (
								<li key={idx}>{point}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className="bg-white rounded-2xl p-4 sm:p-5">
			<h3 className={`text-lg font-semibold text-[${PRIMARY_BLUE}] mb-2.5`}>Material required:</h3>
			<ul className="list-disc list-outside pl-4 space-y-1.5 text-[16px] text-black">
				{info.materialsRequired.map(mat => (
					<li key={mat.id}>{mat.text}</li>
				))}
			</ul>
		</div>
	</div>
)

// --- PedagogyContent Component ---
const PedagogyContent: React.FC = () => {
	const [activeCategoryId, setActiveCategoryId] = useState<string>(sampleTopCategories[0]?.id || '')
	const [activeChapterId, setActiveChapterId] = useState<string>('') // Will be set based on category
	const [openAccordionId, setOpenAccordionId] = useState<string | null>(null)
	const [pedagogyData] = useState<PedagogyInfo>(samplePedagogyInfo) // This should be dynamic

	const chapterTabsForActiveCategory = useMemo(() => {
		return sampleChapterSubTabs.filter(ch => ch.categoryId === activeCategoryId)
	}, [activeCategoryId])

	// Set first chapter as active when category changes
	useEffect(() => {
		if (chapterTabsForActiveCategory.length > 0) {
			setActiveChapterId(chapterTabsForActiveCategory[0].id)
		} else {
			setActiveChapterId('')
		}
		setOpenAccordionId(null) // Reset open accordion
		// TODO: Fetch/update pedagogyData based on new activeCategoryId/activeChapterId
	}, [activeCategoryId, chapterTabsForActiveCategory])

	const accordionsForActiveChapter = useMemo(() => {
		return sampleChapterAccordions.filter(acc => acc.chapterId === activeChapterId)
	}, [activeChapterId])

	// Effect to update pedagogy info when accordion or chapter changes
	useEffect(() => {
		// Placeholder: In a real app, fetch data based on openAccordionId or activeChapterId
		// For now, it just uses the sample data.
		// If openAccordionId changes, you might fetch specific data for that accordion item.
		console.log('Current active chapter:', activeChapterId, 'Open accordion:', openAccordionId)
		// setPedagogyData(fetchDataFor(activeChapterId, openAccordionId));
	}, [activeChapterId, openAccordionId])

	const handleAccordionToggle = (accordionId: string) => {
		setOpenAccordionId(prevId => (prevId === accordionId ? null : accordionId))
		// Fetch/update pedagogyData for the selected accordion item
	}

	return (
		<>
			{/* Top Categories */}
			<div className="bg-white p-1 mb-6 rounded-2xl flex items-center justify-center">
				<nav className="flex space-x-1 sm:space-x-4 overflow-x-auto custom-scrollbar-thin justify-center sm:justify-start">
					{sampleTopCategories.map(cat => (
						<TopTabButton
							key={cat.id}
							tab={cat}
							isActive={activeCategoryId === cat.id}
							onClick={() => setActiveCategoryId(cat.id)}
						/>
					))}
				</nav>
			</div>

			<div className=" sm:p-0 lg:p-0 overflow-hidden">
				{' '}
				{/* Full width container for layout */}
				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
					{' '}
					{/* No gap, info panel is distinct */}
					{/* Left Column: Chapters and Accordions */}
					<div className="bg-white rounded-2xl lg:col-span-2 p-4 h-full space-y-6 border-r-0 lg:border-r border-gray-200 min-h-[calc(100vh-250px)]">
						{' '}
						{/* Adjust min-h */}
						{/* Chapter Sub-Tabs */}
						{chapterTabsForActiveCategory.length > 0 && (
							<div>
								<nav className="flex space-x-1 sm:space-x-2 overflow-x-auto custom-scrollbar-thin pb-0">
									{chapterTabsForActiveCategory.map(chTab => (
										<ChapterSubTabButton
											key={chTab.id}
											tab={chTab}
											isActive={activeChapterId === chTab.id}
											onClick={() => {
												setActiveChapterId(chTab.id)
												setOpenAccordionId(null)
											}}
										/>
									))}
								</nav>
							</div>
						)}
						{/* Chapter Accordions */}
						{accordionsForActiveChapter.length > 0 ? (
							<div
								className={`space-y-3 h-full overflow-y-auto pr-2 ${SCROLLBAR_THUMB_ORANGE} ${SCROLLBAR_TRACK_LIGHT} scrollbar-thin`}>
								{' '}
								{/* Adjust max-h */}
								{accordionsForActiveChapter.map(acc => (
									<ChapterAccordion
										key={acc.id}
										item={acc}
										isOpen={openAccordionId === acc.id}
										onToggle={() => handleAccordionToggle(acc.id)}
									/>
								))}
							</div>
						) : (
							<div className="text-center py-10 text-gray-400">No chapters or content available for this selection.</div>
						)}
					</div>
					{/* Right Column: Info Panel */}
					<div className="lg:col-span-1 ">
						{' '}
						{/* Consistent padding */}
						<InfoPanel info={pedagogyData} />
					</div>
				</div>
			</div>
		</>
	)
}

// --- Main Page Export ---
export default function PedagogyPage() {
	const headerUser = {
		name: 'Educator Name',
		role: 'Teacher',
		avatarSrc: '/teacher-avatar-1.jpg',
	}
	const handleBackClick = () => {
		if (typeof window !== 'undefined') window.history.back()
	}

	return (
		<div className="bg-[#eeeeee] min-h-screen flex flex-col">
			<Header user={headerUser} />

			<div className="bg-white px-4 sm:px-6 py-3 shadow-sm sticky top-0 z-40">
				<div className="container mx-auto flex items-center gap-3">
					<button
						onClick={handleBackClick}
						className="p-1.5 text-gray-700 hover:text-gray-900 focus:outline-none rounded-md"
						aria-label="Go back">
						<FiArrowLeft className="w-5 h-5" />
					</button>
					<h1 className="text-lg sm:text-xl font-semibold" style={{ color: ACCENT_PINK }}>
						Pedagogy
					</h1>
				</div>
			</div>
			<MaxWidthWrapper className="my-4 bg-none">
				<main className="flex-grow bg-none container mx-auto p-4 sm:p-6">
					<PedagogyContent />
				</main>
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}
