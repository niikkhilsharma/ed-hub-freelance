'use client';

import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';
import BackButton from '@/components/common-components/BackButton';
import TabSwitch from '@/components/common-components/TabSwitch';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import WorkingHours from './components/WorkingHours';
import TeacherSettingsForm from './components/TeacherForm';

const filters = ['Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1', 'Filter 1'];

function FilterBar() {
    return (
        <div className="flex border-b-1 border-gray-300 py-4 items-center gap-2 md:gap-6 flex-wrap">
            <span className="text-sm font-semibold text-gray-800 w-full md:w-fit">Filters</span>
            {filters.map((filter, index) => (
                <div key={index} className="relative">
                    <select className="appearance-none rounded-lg bg-[#f9fafb] border border-gray-200 text-sm text-black px-4 py-2 pr-10 focus:outline-none">
                        <option>{filter}</option>
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                </div>
            ))}
        </div>
    );
}


const PayloadManagemnet = () => {
    const tabs = ["Working Hours", "Other Details"]
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    return (
        <>
            <BackButton Heading='Payload Management' />
            <AdminB2CWrapper>
                <div className="bg-white p-4 rounded-2xl">
                    <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />
                    <h2 className="bg-gray-100 text-[#ff3366] rounded-3xl py-3.5 text-center px-2 border border-gray-200">Payload Management Form</h2>
                    <FilterBar />
                    {selectedTab === "Working Hours" && (
                        <WorkingHours />
                    )}
                    {selectedTab === "Other Details" && (
                        <TeacherSettingsForm />
                    )}
                </div>
            </AdminB2CWrapper>
        </>
    )
}

export default PayloadManagemnet;