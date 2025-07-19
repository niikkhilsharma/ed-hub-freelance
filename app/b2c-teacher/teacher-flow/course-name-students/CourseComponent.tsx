"use client"
import TabSwitch from "@/components/common-components/TabSwitch";
import { useState } from "react";
import StudentBatchPage from "./BatchName";
import AddNewBatch from "../../ct-pop-ups/popupComponent/AddNewBatch";

const CourseStudent = () => {
    const tabs = ["Branch Name ", "Branch Name", "Branch Name", "Branch Name", "Branch Name"];

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [addBatch, setAddBatch] = useState(false);
    return (
        <>
            <div className="bg-white rounded-3xl p-4">
                    <div className="flex gap-4 justify-between">
                        <div className="w-full">
                            <TabSwitch tabs={tabs} selected={activeTab} onChange={setActiveTab} />
                        </div>
                        <div className="">
                            <button
                            onClick={() => setAddBatch(true)}
                            className="whitespace-nowrap border bg-[#f9fafb] py-3 px-4 rounded-full">Add New Branch</button>
                        </div>
                    </div>
                    <StudentBatchPage />
                </div>
                <AddNewBatch isOpen={addBatch} onClose={() => setAddBatch(false)} />
        </>
    )
}

export default CourseStudent;