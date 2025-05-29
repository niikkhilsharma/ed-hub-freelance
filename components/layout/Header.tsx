import Image from 'next/image';
import { FiGrid, FiBookOpen, FiMessageSquare, FiVideo, FiBell } from 'react-icons/fi';

// --- Header Navigation Item Component (can be local to Header or imported if used elsewhere) ---
const NavItem = ({ icon: Icon, label, href = "#" }: { icon: React.ElementType, label: string, href?: string }) => (
    <a
        href={href}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-blue-700/70 transition-colors"
    >
        <Icon className="w-5 h-5" />
        {label}
    </a>
);

// Define a type for the user prop if you pass dynamic user data
interface UserProfile {
    name: string;
    role: string;
    avatarSrc: string;
}

interface HeaderProps {
    user: UserProfile; // Make user data a prop
}

export default function Header({ user }: HeaderProps) {
    return (
        <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md print:hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                     {/* UPDATE PATH to your logo */}
                    <Image src="/logo-white.png" alt="Edunique Logo" width={160} height={45} />
                </div>

                {/* Main Navigation */}
                <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
                    <NavItem icon={FiGrid} label="Dashboard" />
                    <NavItem icon={FiBookOpen} label="My course" />
                    <NavItem icon={FiMessageSquare} label="Chat" />
                    <NavItem icon={FiVideo} label="Recordings" />
                </nav>

                {/* Right Side: Ask Me, Notifications, User Profile */}
                <div className="flex items-center space-x-3 lg:space-x-5">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white/20 text-white text-sm font-medium rounded-full hover:bg-white/30 transition-colors">
                         {/* UPDATE PATH to your bot icon */}
                        <Image src="/ask-me-bot.png" alt="Ask me bot" width={24} height={24} />
                        Ask me!
                    </button>
                    <button className="p-2 rounded-full hover:bg-blue-700/70 focus:outline-none">
                        <FiBell className="w-5 h-5" />
                    </button>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Image
                            src={user.avatarSrc} // Use prop for avatar
                            alt={user.name}
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-white"
                        />
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold">{user.name}</p>
                            <p className="text-xs opacity-80">{user.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}