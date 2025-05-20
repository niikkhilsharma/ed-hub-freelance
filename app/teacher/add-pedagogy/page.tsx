/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/teacher/add-pedagogy.tsx
'use client'

import { useState } from 'react'
import Sidebar from '@/components/teacher/layout'
import UserHeader           from '@/components/teacher/addpedagogy/UserHeader'
import TabNavigation from '@/components/teacher/addpedagogy/TabNavigation'
import CourseDetailsForm from '@/components/teacher/addpedagogy/CourseDetailsForm'
import CurriculumSection from '@/components/teacher/addpedagogy/CurriculumSection'
import AddSectionModal from '@/components/teacher/addpedagogy/AddSectionModal'
import VideoAddForm from '@/components/teacher/addpedagogy/VideoAddForm'

type Section = {
	id: string
	number: string
	title: string
	videos: Array<{ id: string; title: string; videoLink: string; aboutLecture: string; status: boolean }>
}
interface CourseData {
	// Define the structure of course data here
	// Example:
	title: string
	description: string
	duration: number
	// Add other fields as needed
}
export default function AddPedagogyPage() {
	const tabs = [
		{ id: 'course', label: 'Course Details' },
		{ id: 'curriculum', label: 'Curriculum' },
	]
	const [activeTab, setActiveTab] = useState<'course' | 'curriculum'>('course')

	// --- course details state
	const [courseData, setCourseData] = useState<CourseData | null>(null)

	// --- curriculum state
	const [sections, setSections] = useState<Section[]>([])
	const [isModalOpen, setModalOpen] = useState(false)
	const [videoSectionId, setVideoSectionId] = useState<string | null>(null)

	// handlers for course form
	const handleCourseSubmit = (data: CourseData) => {
		setCourseData(data)
		setActiveTab('curriculum')
		console.log(courseData)
	}

	

	// handlers for sections
	const handleAddSection = (title: string) => {
		const next = {
			id: Date.now().toString(),
			number: `Section ${sections.length + 1}`,
			title,
			videos: [],
		}
		setSections([...sections, next])
		setModalOpen(false)
	}

	// handlers for videos
	const handleAddVideo = (sectionId: string, video: any) => {
		setSections(secs =>
			secs.map(s => (s.id === sectionId ? { ...s, videos: [...s.videos, { ...video, id: Date.now().toString() }] } : s))
		)
		setVideoSectionId(null)
	}

	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<main className="flex-1 p-8">
				<UserHeader title="Add Pedagogy" subtitle="Create a new course" className="mb-6" />

				<TabNavigation tabs={tabs} activeTabId={activeTab} onChange={(id: string) => setActiveTab(id as 'course' | 'curriculum')} className="mb-6" />

				{activeTab === 'course' && (
					<CourseDetailsForm className="max-w-2xl mx-auto" onSubmit={handleCourseSubmit} onCancel={() => window.history.back()} />
				)}

				{activeTab === 'curriculum' && (
					<>
						<button
							onClick={() => setModalOpen(true)}
							className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
							+ Add Section
						</button>

						{sections.map(section => (
							<CurriculumSection
								key={section.id}
								section={section}
								onAddVideo={secId => setVideoSectionId(secId)}
								onEditSection={() => {}}
								onDeleteSection={secId => setSections(secs => secs.filter(s => s.id !== secId))}
								onEditVideo={() => {}}
								onDeleteVideo={() => {}}
								className="mb-4"
							/>
						))}

						<AddSectionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddSection} />

						{videoSectionId && (
							<VideoAddForm
								className="mt-6"
								onBack={() => setVideoSectionId(null)}
								onSubmit={videoData => handleAddVideo(videoSectionId, videoData)}
							/>
						)}
					</>
				)}
			</main>
		</div>
	)
}
