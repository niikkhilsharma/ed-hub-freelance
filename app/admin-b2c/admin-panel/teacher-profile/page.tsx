import ChartsReport from '@/components/b2c-admin/charts'
import CourseSection from '@/components/b2c-admin/course-section'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import TeacherCard from '@/components/b2c-admin/teacher-card'
import TeacherControlPanel from '@/components/b2c-admin/teacher-control-panel'
import NamingBar from '@/components/admin/ui/naming-bar'

export default function page() {
	return (
		<div>
			<NamingBar name="Teacher Profile" />
			<MaxWidthWrapper>
				<main className="flex-grow w-full max-w-[90rem] mx-auto p-4 ">
					<div className="space-y-4 ">
						<TeacherCard />
						<TeacherControlPanel />
						<CourseSection />
						<ChartsReport />
					</div>
				</main>
			</MaxWidthWrapper>
		</div>
	)
}
