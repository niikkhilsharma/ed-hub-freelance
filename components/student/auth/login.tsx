'use client'

import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import Link from 'next/link'

export default function StudentLoginForm() {
  return (
    <MaxWidthWrapper>
      <div className="relative w-full min-h-screen flex flex-col overflow-hidden items-center justify-center">
        <div className="relative z-10 flex items-center justify-center w-full">
            <div className="flex flex-col md:flex-row-reverse min-h-[400px] md:min-h-[600px] w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-lg">
              {/* Right Column - Image */}
              <div className="w-full hidden md:block md:w-[55%] p-6 ">
                <Image
                  src={'/student/auth/login/login.png'}
                  width={3375}
                  height={3375}
                  className="w-full h-full object-cover rounded-3xl"
                  alt="Login"
                />
              </div>

              {/* Left Column - Login Form */}
              <div className="w-full md:w-[45%] p-8 flex flex-col justify-center">
                <h2 className="font-adlam text-3xl">Student Login</h2>
                <p className="mt-2 max-w-[50ch] text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-8 space-y-4 flex flex-col">
                  <div>
                    <Label htmlFor="school">Select School</Label>
                    <Select>
                      <SelectTrigger className="w-full rounded-full bg-[#F9FAFB]">
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
                    <Label htmlFor="class">Class</Label>
                    <Select>
                      <SelectTrigger className="w-full rounded-full bg-[#F9FAFB]">
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
                    <Input type="email" placeholder="Email Id" masked className=" rounded-full bg-[#F9FAFB]"/>
                  </div>

                  <div>
                    <Label htmlFor="guardian">Parents/Guardian Name</Label>
                    <Input type="text" placeholder="Enter Parent/Guardian Name" className=" rounded-full bg-[#F9FAFB]"/>
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="text" placeholder="********" masked className=" rounded-full bg-[#F9FAFB]"/>
                  </div>

                  <Button className="self-center rounded-full w-40 mt-2">Login</Button>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="ml-2 text-sm flex gap-1 text-gray-500/80">
                    <p>Don&apos;t Have An Account?</p>
                  <Link
                    href={'/student/auth/register'}
                    className="text-[#F9326F] hover:underline"
                    >
                    Register
                  </Link>
                    </div>
                  <Link
                    href={'/student/auth/forgot-password'}
                    className="text-sm text-[#F9326F] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </MaxWidthWrapper>
  )
}
