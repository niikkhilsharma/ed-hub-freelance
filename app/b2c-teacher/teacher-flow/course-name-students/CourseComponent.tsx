"use client"
import TabSwitch from "@/components/common-components/TabSwitch";
import { useState } from "react";

const CourseStudent = () => {
    const tabs = ["Branch Name ", "Branch Name", "Branch Name", "Branch Name", "Branch Name"];

    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <>
            <div className="bg-white rounded-3xl p-4">
                    <div className="flex gap-4 justify-between">
                        <div className="">
                            <TabSwitch tabs={tabs} selected={activeTab} onChange={setActiveTab} />
                        </div>
                        <div className="">
                            <button className="whitespace-nowrap card-bg-color py-3 px-4 rounded-full">Add New Branch</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CourseStudent;