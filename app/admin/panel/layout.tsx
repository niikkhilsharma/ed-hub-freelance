import Footer from '@/components/layout/Footer'
import Navbar from '@/components/admin/ui/navbar'
import { Poppins } from 'next/font/google'

const poppinsFont = Poppins({
	style: 'normal',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className={(poppinsFont.className, poppinsFont.variable, 'bg-[#EEEEEE]')}>
			<Navbar user={{ name: 'Nikhil', role: 'Student', avatarSrc: '/images/person.jpg' }} isAskme={false} />
			{children}
			<Footer />
		</div>
	)
}
