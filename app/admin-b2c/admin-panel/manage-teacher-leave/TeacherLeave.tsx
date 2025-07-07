'use client';
import Image from 'next/image';

import { MdOutlineDateRange } from "react-icons/md";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";

type leavecards = {
    id: number,
    image: string,
    name: string,
    course: string,
    level: string,
    group: string,
    reason: string,
    email: string
};

const teachers = Array.from({ length: 6 }, (_, i) => ({
    id: i + 5,
    name: 'Name',
    course: 'Subject',
    level: 'Class Assigned',
    group: 'Batch Assigned',
    image: "/teacher-avatar-4.png", // Use same image or add logic to vary if needed,
    reason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum illum, itaque et perferendis ea hic alias modi ex reiciendis animi eum quam minus, autem deserunt voluptatibus ducimus, officiis corporis?',
    email: "Email ID"
}));

export const sampleData: leavecards[] = [...teachers];

const TeacherLeave = () => {
    // const [activeTab, setActiveTab] = useState<'teacher'>('teacher');


    const filters = [
        { id: 'f1', label: 'Filter 1' },
        { id: 'f2', label: 'Filter 2' },
        { id: 'f3', label: 'Filter 3' },
    ];
    return (
        <>


            <div className="">
                {/* Tabs */}
                <div className="bg-white rounded-2xl p-4">

                    <SearchFilter filters={filters} />

                    <div className="max-h-screen grid-cols-1 md:grid grid-cols-2 overflow-y-auto custom-peach-scrollbar">
                        {teachers.map((item) => (
                            <div key={item.id} className="flex flex-wrap items-center border border-gray-300 gap-4 bg-gray-50 rounded-2xl p-2 inline-block mr-4 mb-4  relative">
                                <div className="flex">
                                    <div className="rounded-xl relative overflow-hidden">
                                        <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <div className="font-semibold text-m ">{item.name}</div>
                                        <div className="text-sm font-semibold text-[#FF3366]">{item.course}</div>
                                        <div className="text-xs text-gray-500">{item.level}</div>
                                        <div className="text-xs text-gray-500"> {item.group} </div>
                                        <div className="text-xs text-gray-500"> {item.email} </div>
                                        <div className="text-xs  lg:absolute text-gray-500 top-5 right-5 flex items-center"><MdOutlineDateRange />From 6/8/25 to 6/6/25</div>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-2xl max-w-xl m-3  ">
                                    <p className="text-center text-black font-bold text-lg">Reason</p>
                                    <p className="text-center text-black-600 text-base">
                                        {item.reason}</p>
                                </div>
                                <div className="flex justify-center gap-4 mt-4">
                                    <button className="px-6 py-2 bg-red-100 text-red-500 rounded-3xl">
                                        Reject
                                    </button>
                                    <button className="px-6 py-2 bg-[#3366FF] text-white rounded-3xl">
                                        Approve
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeacherLeave;