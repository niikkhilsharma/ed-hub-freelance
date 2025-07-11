"use client"
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ExistingDmitModal from "../../pop-ups-2/components/existing-dmit-test";
import Link from "next/link";

const DmitTestForm = () => {
    const [isViewTestModalOpen, setIsViewTestModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white pt-6 px-4 pb-3 rounded-3xl">
                <div className="flex justify-between w-full flex-col-reverse gap-4 md:flex-row">
                    <div className="flex flex-col items-start gap-4 md:gap-5">
                        <button className="text-[#3366ff] border-b-3 pb-1 text-[22px] font-semibold px-2 border-[#3366ff] inline-block">DMIT</button>
                        <h2 className="font-semibold text-[#ff3366] pl-1 text-xl md:text-2xl">Edit DMIT Test</h2>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8">

                        <h2 className="font-semibold text-[#ff3366] text-xl md:text-2xl">Create New DMIT Test</h2>
                        <Link href={'/admin-b2c/admin-panel/create-dmit-test'} className="text-white bg-[#3366ff] font-medium rounded-full py-2 text-base px-4 w-full text-center">Create</Link>
                    </div>
                </div>

                {/* Form strating */}
                <div className="w-full md:max-w-lg pt-6 pl-1 space-y-6">
                    {/* Dropdown */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-xl font-medium text-black">
                            Choose Existing Test (to Edit)
                        </label>
                        <div className="relative">
                            <select className="appearance-none w-full bg-[#f9fafb] text-black text-base md:text-xl p-2.5 pr-10 rounded-full border border-gray-300 focus:outline-none">
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
                        </div>
                    </div>

                    {/* Test Name */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-xl font-medium text-black">Test Name</label>
                        <input
                            type="text"
                            placeholder="Text"
                            className="w-full bg-[#f9fafb] text-black text-base md:text-lg py-2.5 px-4 rounded-full border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                        <label className="block text-base md:text-xl font-medium text-black">Duration (Minutes)</label>
                        <input
                            type="text"
                            placeholder="Text"
                            className="w-full bg-[#f9fafb] text-black text-base md:text-lg py-2.5 px-4 rounded-full border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Button */}
                    <div className="text-right">
                        <Link href={'/admin-b2c/admin-panel/edit-dmit-test'} className="bg-[#ff3366] text-white inline-block text-sm py-3 rounded-full hover:opacity-90 w-32 text-center cursor-pointer">
                            Edit Questions
                        </Link>
                        <div className="flex flex-wrap gap-2 md:gap-4 pt-4 justify-end">
                            <button className="bg-pink-100 w-1/2 sm:w-auto text-[#ff3366] text-base font-medium py-3 px-8 rounded-full hover:opacity-90 cursor-pointer">
                                Discard
                            </button>
                            <button
                                className="bg-blue-100 w-1/2 sm:w-auto text-[#3366ff] text-base font-medium py-3 px-2 rounded-full hover:opacity-90 cursor-pointer"
                                onClick={() => setIsViewTestModalOpen(true)}
                            >
                                View Existing Test
                            </button>
                           
                            <button className="bg-[#3366ff] text-white text-base font-medium py-3  rounded-full hover:opacity-90 w-full sm:w-32 cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
             <ExistingDmitModal
                                isOpen={isViewTestModalOpen}
                                onClose={() => setIsViewTestModalOpen(false)}
                            />

        </>
    )
}

const DmitTest = () => {
    return (

        <AdminB2CWrapper>
            <DmitTestForm />
        </AdminB2CWrapper>

    )
}

export default DmitTest;