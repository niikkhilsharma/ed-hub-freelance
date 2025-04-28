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
      <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <div className="relative z-10 flex items-center justify-center w-full min-h-screen p-4">
          <div className="w-full max-w-6xl bg-[#feedf2] rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row-reverse min-h-[400px] md:min-h-[600px] h-full">
              {/* Right Column - Image */}
              <div className="w-full hidden md:block md:w-[55%]">
                <Image
                  src={'/student/auth/login/login.png'}
                  width={3375}
                  height={3375}
                  className="w-full h-full object-cover"
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

                <div className="mt-8 space-y-4">
                  <div>
                    <Label htmlFor="school">Select School</Label>
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
                    <Label htmlFor="class">Class</Label>
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
                    <Label htmlFor="guardian">Parents/Guardian Name</Label>
                    <Input type="text" placeholder="Enter Parent/Guardian Name" />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="text" placeholder="********" masked />
                  </div>

                  <Button className="w-full mt-2">Login</Button>
                </div>

                <div className="flex items-center justify-end mt-6">
                  <Link
                    href={'/student/auth/forgot-password'}
                    className="text-sm text-gray-500/80 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <Link
                    href={'/student/auth/register'}
                    className="ml-2 text-sm text-gray-500/80 hover:underline"
                  >
                    Don&apos;t Have An Account? Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
