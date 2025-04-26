'use client'

import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import Link from 'next/link'

export default function StudentLoginForm() {
	return (
		<MaxWidthWrapper className="md:flex md:flex-row-reverse gap-8 lg:gap-20 my-10 w-full">
			<div className="w-full hidden md:block md:w-[55%]">
				<Image
					src={'/student/auth/login/login.png'}
					width={3375}
					height={3375}
					className="rounded-xl w-full h-full object-cover"
					alt="Login"
				/>
			</div>
			<div className="w-full md:w-[45%] my-10">
				<h2 className="font-adlam text-3xl">Student Login</h2>
				<p className="mt-2 max-w-[50ch]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

				<div className="mt-8 space-y-4">
					<div>
						<Label htmlFor="email">Select School </Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Theme" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label htmlFor="email">Class</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Theme" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label htmlFor="email">Email Id</Label>
						<Input type="email" placeholder="Email Id" masked />
					</div>
					<div>
						<Label htmlFor="email">Parents/Guardian Name</Label>
						<Input type="text" placeholder="Enter Parent/Guardian Name" />
					</div>
					<div>
						<Label htmlFor="email">Password</Label>
						<Input type="text" placeholder="********" masked />
					</div>

					<Button className="w-full mt-2">Login</Button>
				</div>

				<div className="flex items-center justify-end mt-6">
					<Link href={'/student/auth/forgot-password'} className="text-sm text-gray-500/80 hover:underline">
						Forgot Password?
					</Link>
				</div>
				<div className="flex justify-center items-center mt-4">
					<Link href={'/student/auth/register'} className="ml-2 text-sm text-gray-500/80 hover:underline">
						Don&apos;t Have Aan Account? Register
					</Link>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
