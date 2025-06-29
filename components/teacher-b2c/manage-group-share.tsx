"use client"

import { FiArrowLeft } from "react-icons/fi"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import B2CTeacherWrapper from "./b2c-teacher-wrapper"

const ManageGroup = () => {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE THIS PATH
    }
    const handleBackClick = () => {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    }
    return (
        <>
            <Header user={headerUser} />
            <div className="flex items-center justify-between gap-3 bg-white px-4 sm:px-6 py-3.5 sticky top-0 z-40">
                <div className="flex gap-3 items-center w-full">
                    <button
                        onClick={handleBackClick}
                        className="p-1.5 text-black hover:text-[#FF3366] focus:outline-none rounded-md" // Using ACCENT_PINK for hover
                        aria-label="Go back"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-lg sm:text-xl font-semibold text-[#FF3366]">
                        Manage Group Share
                    </h1>
                </div>
                <button className="rounded-full bg-[#ff3366] p-2 text-white whitespace-nowrap font-medium">Create new group</button>
            </div>
            <B2CTeacherWrapper>
                <div className="h-full">Hola</div>
            </ B2CTeacherWrapper>
            <Footer />
        </>
    )
}

export default ManageGroup;