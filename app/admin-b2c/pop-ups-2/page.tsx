// /app/showcase/popups/page.tsx (or your preferred path)
"use client";

import React, { useState, useEffect } from "react";
import {
    FiX,
    FiEye,
    FiEyeOff,
    FiUploadCloud,
    FiChevronDown,
    FiEdit,
    FiTrash2,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import TabSwitcher from "./components/FolderDetails";

// --- Base Modal Component (for reuse and professional structure) ---
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth: string;
}
interface PopupProp {
    isOpen: boolean;
    onClose: () => void;
}
const BaseModal: React.FC<BaseModalProps> = ({
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
                    className="fixed inset-0 bg-[#0000004a] flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white rounded-3xl w-full ${maxWidth} overflow-hidden`}
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


const CreateFolder: React.FC<PopupProp> = ({
    isOpen,
    onClose,
}) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
            <div className="rounded-3xl px-4 pt-6 pb-4 ">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">Create Folder</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"
                    >
                        <FiX />
                    </button>
                </div>
                <TabSwitcher />
            </div>
        </BaseModal>
    );
};

// --- Main Page Component to trigger modals ---
export default function AllPopupsPage() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "createFolder", label: "Create Folder" },

    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                Admin B2C Popups
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

            <CreateFolder
                isOpen={openModal === "createFolder"}
                onClose={() => setOpenModal(null)}
            />
        </div>
    );
}
