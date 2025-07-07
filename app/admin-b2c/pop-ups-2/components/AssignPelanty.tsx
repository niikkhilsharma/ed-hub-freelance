"use client"
import React, { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { BaseModal, PopupProp } from '../page';

const AssignPenaltyModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
    const [reason, setReason] = useState('Late Login');

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
            <div className="relative bg-white rounded-2xl p-6 w-full">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
                >
                    <FiX size={18} />
                </button>

                {/* Title */}
                <h2 className="text-base font-semibold mb-6">Assign Penalty</h2>

                {/* Info */}
                <p className="text-sm text-gray-500 mb-1">Teacher Name</p>
                <p className="text-sm text-gray-500 mb-4">Date</p>

                {/* Select Reason */}

                <label className="text-sm font-medium mb-1 block">Select Reason</label>
                <div className="relative mb-6">
                    <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full border rounded-full px-4 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-gray-300"
                    >
                        <option>Late Login</option>
                        <option>Missed Session</option>
                        <option>Improper Conduct</option>
                    </select>
                    <FiChevronDown
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                        size={16}
                    />
                </div>

                {/* Confirm Button */}
                <div className="flex justify-center">
                    <button className="px-6 bg-[#90E1B6] mx-auto text-black py-2.5 rounded-full font-medium">
                        Confirm
                    </button>
                </div>
            </div>
        </BaseModal>
    );
};

export default AssignPenaltyModal;
