// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FileShare from "./popupComponent/FileShare";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth: string;
}
export interface PopupPropB2CTeacher {  // this can be import as a prop
    isOpen: boolean;
    onClose: () => void;
}

// this can be import as a prop
export const TeacherB2CBaseModal: React.FC<BaseModalProps> = ({
    isOpen,
    onClose,
    children,
    maxWidth,
}) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-[#0000004a] flex items-start justify-center z-50 overflow-y-auto"
                >
                    <div className="min-h-screen w-full flex justify-center p-4">
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`bg-white rounded-3xl w-full ${maxWidth} overflow-hidden h-fit my-auto`}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>

    );
};

// --- Main Page Component to trigger modals ---
export default function AllTeacherB2CPopups() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "fileShare", label: "File Sharing" },
        // here you can add pop id and it's label to show it on the page 
    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                Teacher B2C Popups
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {modalButtons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setOpenModal(btn.id)}
                        className="bg-white text-[#6B7280] font-semibold py-3 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* the component needs to import  */}

            <FileShare
                isOpen={openModal === "fileShare"}
                onClose={() => setOpenModal(null)}
            />

        </div>
    );
}
