
"use client";

import React, { useState} from "react";
import EditDemoVideo from "./popupComponent/EditVideoDemo";
import Popup from "./popupComponent/Popup";
import CreateGroupPopup from "./popupComponent/CreateGroup";
import ManageGroupPopup from "./popupComponent/ManageGroup";
import DeleteRecordingModal from "./popupComponent/DeleteRecording";
import DeleteRecordingModal3 from "./popupComponent/DeleteRecording3";
import AddVideoModal from "./popupComponent/AddVideo";

// --- Main Page Component to trigger modals ---
export default function AllTeacherB2CPopups() {
    const [openModal, setOpenModal] = useState<string | null>(null);
    // const [showActionsPopup, setShowActionsPopup] = useState(false);

    const modalButtons = [
        { id: "editDemoVideo", label: "Edit Demo Video" },
        { id: "popup", label: "Popup" },
        { id: "createGroup", label: "Create Group" },
        { id: "manageGroup", label: "Manage Group" },
        { id: "deleteRecording", label: "Delete Recording" },
        { id: "deleteRecording3", label: "Delete Recording 3" },
        { id: "addVideo", label: "Add Video" },
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
            
            <CreateGroupPopup
                isOpen={openModal === "createGroup"}
                onClose={() => setOpenModal(null)}
            />
            <ManageGroupPopup
                isOpen={openModal === "manageGroup"}
                onClose={() => setOpenModal(null)}
            />
            <DeleteRecordingModal
                isOpen={openModal === "deleteRecording"}
                onClose={() => setOpenModal(null)}
            />
            <DeleteRecordingModal3
                isOpen={openModal === "deleteRecording3"}
                onClose={() => setOpenModal(null)}
            />
            <AddVideoModal
                isOpen={openModal === "addVideo"}
                onClose={() => setOpenModal(null)}
            />
            
        </div>
    );
}
