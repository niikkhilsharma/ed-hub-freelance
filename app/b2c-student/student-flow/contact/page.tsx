'use client'
import Header from '@/components/b2c-student/Header2';
import Footer from '@/components/layout/Footer'
import Image from 'next/image' // For the bell icon and user avatar
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function FAQPage() {
	const headerUser = {
		name: 'Shlok Agheda',
		role: 'Student',
		avatarSrc: '/images/person.jpg', // UPDATE PATH
		
	}

	return (
		<div>
			<Header user={headerUser} currPage='Contact'/>
			<div className="min-h-screen flex flex-col bg-[#eeeeee]">
				<main className="container mx-auto p-6 max-w-7xl rounded-2xl my-6 flex flex-col sm:flex-row gap-4 relative overflow-hidden">
					<Image
						src={'/pattern.png'}
						width={4096}
						height={2304}
						alt="pattern"
						className="w-full h-full brightness-150 absolute top-0 left-0 opacity-30"
					/>
					<div className="sm:w-[45%] z-10 bg-white rounded-2xl p-4">
						<h1 className="text-5xl text-[#FF3366] font-bold">Get in touch</h1>
						<p className="text-[#6B7280] mt-4 tracking-wider">We are here for you! How can we help</p>

						<div className="mt-10 px-4 space-y-4">
							<div>
								<Label htmlFor="email">Name</Label>
								<Input
									placeholder="Enter your name"
									id="email"
									type="text"
									className="placeholder:text-[#6B7280] mt-2 rounded-full border-[#D5D5D5] bg-[#F9FAFB]"
								/>
							</div>
							<div>
								<Label htmlFor="email">Email ID</Label>
								<Input
									placeholder="Enter your name"
									id="email"
									type="text"
									className="placeholder:text-[#6B7280] mt-2 rounded-full border-[#D5D5D5] bg-[#F9FAFB]"
								/>
							</div>
							<div>
								<Label htmlFor="email">Description</Label>
								<Textarea
									className="placeholder:text-[#6B7280] mt-2 rounded-2xl border-[#D5D5D5] bg-[#F9FAFB]"
									placeholder="Enter description"
									rows={4}
									cols={50}
								/>
							</div>
							<div className="flex justify-center items-center mt-10">
								<Button className="bg-[#3366FF] hover:bg-[#3366FF]/90 text-white rounded-full mx-auto">Submit</Button>
							</div>
						</div>
					</div>
					<div className="sm:w-[55%] z-10 flex flex-col gap-4">
						<div className="relative h-96 overflow-hidden rounded-2xl">
							<Image
								src={'/call-center.jpg'}
								width={867}
								height={1300}
								alt="student"
								className="rounded-2xl object-fill aspect-square absolute -top-15 left-0 h-[45rem] w-[48rem]"
							/>
						</div>
						<div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 w-full">
							<div className="text-[#6B7280] flex gap-1 items-center justify-start">
								<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M22.0014 16.9201V19.9201C22.0025 20.1986 21.9455 20.4743 21.8339 20.7294C21.7223 20.9846 21.5587 21.2137 21.3535 21.402C21.1483 21.5902 20.906 21.7336 20.6421 21.8228C20.3783 21.912 20.0988 21.9452 19.8214 21.9201C16.7442 21.5857 13.7884 20.5342 11.1914 18.8501C8.77523 17.3148 6.72673 15.2663 5.1914 12.8501C3.50138 10.2413 2.44964 7.27109 2.1214 4.1801C2.09641 3.90356 2.12927 3.62486 2.2179 3.36172C2.30652 3.09859 2.44897 2.85679 2.63616 2.65172C2.82336 2.44665 3.0512 2.28281 3.30519 2.17062C3.55917 2.05843 3.83374 2.00036 4.1114 2.0001H7.1114C7.5967 1.99532 8.06719 2.16718 8.43516 2.48363C8.80313 2.80008 9.04348 3.23954 9.1114 3.7201C9.23802 4.68016 9.47285 5.62282 9.8114 6.5301C9.94594 6.88802 9.97506 7.27701 9.8953 7.65098C9.81555 8.02494 9.63026 8.36821 9.3614 8.6401L8.0914 9.9101C9.51495 12.4136 11.5879 14.4865 14.0914 15.9101L15.3614 14.6401C15.6333 14.3712 15.9766 14.1859 16.3505 14.1062C16.7245 14.0264 17.1135 14.0556 17.4714 14.1901C18.3787 14.5286 19.3213 14.7635 20.2814 14.8901C20.7672 14.9586 21.2108 15.2033 21.5279 15.5776C21.8451 15.9519 22.0136 16.4297 22.0014 16.9201Z"
										stroke="#3366FF"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								0000000000
							</div>
							<div className="text-[#6B7280] flex gap-1 items-center justify-start mt-2">
								<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
										stroke="#3366FF"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path d="M22 6L12 13L2 6" stroke="#3366FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								example@gm.com
							</div>
							<div className="text-[#6B7280] flex gap-1 items-center justify-start mt-2">
								<svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
										stroke="#3366FF"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
										stroke="#3366FF"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								address
							</div>
						</div>
					</div>
				</main>

				<div className="flex self-stretch justify-center w-full mb-4">
					<div
						className="mt-4 max-w-7xl w-[80vw] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-pink-600 bg-repeat"
						style={{
							backgroundImage: 'url(/pattern-2.png)', // UPDATE PATH
							backgroundSize: '1500px',
						}}>
						<div className="relative z-10">
							<h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
							<p className="text-sm opacity-90 mb-8 max-w-lg mx-auto">Lorem Ipsum is simply dummy text of the printing.</p>
							<form className="max-w-md mx-auto flex items-center bg-white rounded-full p-1.5 shadow-lg">
								<input
									type="email"
									placeholder="Email Address"
									className="flex-grow px-5 py-2.5 text-gray-700 text-md bg-transparent border-none focus:outline-none placeholder-gray-400"
									required
								/>
								<button
									type="submit"
									className="px-10 py-2.5 bg-[#FFCC00] text-white font-semibold text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	)
}
