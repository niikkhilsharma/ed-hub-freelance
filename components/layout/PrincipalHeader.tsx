/* eslint-disable @typescript-eslint/no-unused-vars */
'use client' 

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' 
import { FiDatabase, FiShield, FiBell } from 'react-icons/fi'
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { PiSuitcaseBold } from "react-icons/pi";
const NavItem = ({
    icon: Icon,
    label,
    href,
    active = false,
}: {
    icon: React.ElementType
    label: string
    href: string
    active?: boolean
}) => (
    <Link
        href={href}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
            active ? 'text-[#FFCC00]' : 'text-white hover:bg-[#3366FF]/70'
        } `}>
        <Icon className="w-5 h-5" />
        {label}
    </Link>
)

export default function PrincipalHeader() {
    const pathname = usePathname()

    const navItems = [
        {
            icon: FaRegSmile,
            label: 'Dashboard',
            href: '/principal/dashboard',
        },
        {
            icon: PiSuitcaseBold,
            label: 'School MGMT',
            href: '/student-b2b/student-dashboard/my-course',
        },
        {
            icon: FiDatabase,
            label: 'Material',
            href: '/student-b2b/student-dashboard/chat',
        },
        {
            icon: FiShield,
            label: 'Security',
            href: '/student-b2b/student-dashboard/recording',
        },
        {
            icon: IoChatbubbleOutline,
            label: 'Chat',
            href: '/principal/chat',
        },
    ]

    return (
        <header className="bg-[#3366FF] text-white sticky top-0 z-50 shadow-md print:hidden ">
            <div className="mx-auto px-4 h-20 flex justify-between items-center max-w-screen-2xl">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image src="/page3/student_b2b/Clip path group.svg" alt="Edunique Logo" width={231} height={46} className="w-40" />
                </div>

                {/* Main Navigation */}
                <nav className="hidden lg:flex items-center bg-[#E3F2FD26] rounded-full px-4 py-2 space-x-2">
                    {navItems.map(({ icon, label, href }) => (
                        <NavItem key={label} icon={icon} label={label} href={href} active={pathname === href} />
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center space-x-2 lg:space-x-4">
                    <button className="p-2 rounded-full hover:bg-[#3366FF]/70 focus:outline-none">
                        <FiBell className="w-5 h-5" />
                    </button>
                    <Image
                        src={'/principal/profile-image.jpg'}
                        alt={'profileImage'}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
                    />
                </div>
            </div>
        </header>
    )
}
