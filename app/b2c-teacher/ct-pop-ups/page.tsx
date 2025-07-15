
"use client";

import React, { useState} from "react";
import EditDemoVideo from "./popupComponent/EditVideoDemo";
import Popup from "./popupComponent/Popup";

// --- Main Page Component to trigger modals ---
export default function AllTeacherB2CPopups() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "editDemoVideo", label: "Edit Demo Video" },
        { id: "popup", label: "Popup" },
        // here you can add pop id and it's label to show it on the page 
    ];

    return (
        <div className="bg-gray-200 min-h-screen p-10 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#6B7280]">
                C&T Teacher B2C Popups
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

            {/* Edit Demo Video pop  */}
            <EditDemoVideo
                isOpen={openModal === "editDemoVideo"}
                onClose={() => setOpenModal(null)}
            />
            
            {/* Pop up  */}
            <Popup
                isOpen={openModal === "popup"}
                onClose={() => setOpenModal(null)}
            />
            
        </div>
    );
}
