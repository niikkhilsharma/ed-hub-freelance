/* eslint-disable @typescript-eslint/no-unused-vars */
'use client' // needed for client components using hooks

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // App Router hook for current path
import { FiBookOpen,   FiGrid,FiBriefcase, FiBell,FiShield } from 'react-icons/fi'
import { FaRegSmile } from 'react-icons/fa'

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

interface UserProfile {
    name: string
    role: string
    avatarSrc?: string
}

interface HeaderProps {
    user: UserProfile
    isAskme?: boolean
}

export default function Navbar({ user, isAskme = true }: HeaderProps) {
    const pathname = usePathname()

    const navItems = [
        {
            icon: FaRegSmile,
            label: 'Dashboard',
            href: '/student-b2b/student-dashboard/dashboard',
        },
        {
            icon: FiGrid,
            label: 'DMIT Test',
            href: '/student-b2b/student-dashboard/my-course',
        },
        {
            icon:  FiBriefcase,
            label: 'School MGMT',
            href: '/student-b2b/student-dashboard/chat',
        },
        {
            icon: FiBookOpen,
            label: 'Course MGMT',
            href: '/student-b2b/student-dashboard/recording',
        },
          {
            icon: FiShield,
            label: 'Security',
            href: '/student-b2b/student-dashboard/recording',
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
                    {isAskme && (
                        <button className="flex items-center gap-2 px-2 py-2 bg-[#E3F2FD26] text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
                            <Image src="/page3/student_b2b/AI Button.svg" alt="Ask me bot" width={231} height={46} className="w-10" />
                            Ask me!
                        </button>
                    )}
                    <button className="p-2 rounded-full hover:bg-[#3366FF]/70 focus:outline-none">
                        <FiBell className="w-5 h-5" />
                    </button>
                    <Image
                        src={user.avatarSrc ?? '/page3/entry/pri.png'}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
                    />
                </div>
            </div>
        </header>
    )
}
