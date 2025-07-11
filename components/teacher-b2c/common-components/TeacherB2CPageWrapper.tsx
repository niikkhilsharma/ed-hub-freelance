'use client'


export default function TeacherB2CWrapper({ children }: { children: React.ReactNode; }) {
    return (
        <div className="relative min-h-screen w-full p-2 md:p-4 lg:px-10 lg:py-6 overflow-hidden bg-gray-100">
            {children}
        </div>
    )
}
