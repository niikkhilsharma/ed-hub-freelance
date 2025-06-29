import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import BiWeekly from '@/components/teacher-b2b/bi-weekly-test'
import NamingBar from '@/components/admin/ui/naming-bar'

export default function Assesment() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
	}
	return (
		<div className="min-h-screen bg-[#eeeeee] flex flex-col">
			<Header user={headerUser} />
			<NamingBar name="" />
			<MaxWidthWrapper>
				<BiWeekly />
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}
