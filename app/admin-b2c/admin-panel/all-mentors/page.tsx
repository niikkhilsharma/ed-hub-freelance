"use client"
import UserCard from "@/components/admin/AllUserCard"
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import BackButton from "@/components/common-components/BackButton";
import TabSwitch from "@/components/common-components/TabSwitch";
import { useState } from "react";

const users = Array.from({ length: 16 }, (_, i) => ({
  name: `Mentor Name`,
  image: '/common-images/mentor.png',
  role: 'Mentor' as 'Mentor',
  subtitle: 'Institution Name',
  classInfo: 'Class Assigned',
  batchInfo: 'Batch Assigned',
}));

const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 1' },
    { id: 'f3', label: 'Filter 1' },
    { id: 'f4', label: 'Filter 2' },
    { id: 'f5', label: 'Filter 3' },
];

const AllMentors = () => {
   const tabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"]
      const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <>
      <BackButton Heading="All Mentors"/>
      <AdminB2CWrapper>
        <div className="bg-white rounded-3xl p-4">
           <SearchFilter filters={filters} />
          <TabSwitch tabs={tabs} selected={selectedTab} onChange={setSelectedTab} />
          <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen overflow-y-auto custom-peach-scrollbar gap-4 pr-2">
            {users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>

        </div>
      </AdminB2CWrapper>
    </>
  )
}

export default AllMentors;