import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
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
		<div className={(poppinsFont.className, 'bg-gray-200')}>
			<Header user={{ name: 'Nikhil', role: 'Student', avatarSrc: '/page3/entry/pri.png' }} isAskme={false} />
			{children}
			<Footer />
		</div>
	)
}
