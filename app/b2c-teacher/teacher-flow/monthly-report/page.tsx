import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";


export default function FeedbackDashboardPage() {
    const headerUser = {
        name: "Educator Name",
        role: "Teacher",
        avatarSrc: "/teacher-b2b/profile.png",
    };
    return (
        <>
            <Header user={headerUser} />
            <div className="bg-[#eeeeee] min-h-screen">
                <div className="flex bg-white py-3 px-8 items-center gap-4 mb-2">
                    <button className="h-8 rounded-full  hover:bg-gray-100"><FiArrowLeft className="w-5 h-5" strokeWidth={2} /></button>
                    <h1 className="text-2xl font-semibold text-[#FF3366]">Student Name</h1>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                    {/* Main Content */}
                    <div className="bg-white p-4 sm:p-6 rounded-3xl max-w-screen-xl mx-auto space-y-6">
                        
                        {/* profile */}
                        <div className="flex items-start justify-between sm:items-center gap-4">
                            <div className="flex flex-col sm:items-center sm:flex-row gap-4">
                                <Image
                                    src="/teacher-b2b/profile2.png"
                                    alt="Shlok Agheda"
                                    width={72}
                                    height={72}
                                    className="rounded-full h-24 w-24 flex-shrink-0"
                                />
                                <div className="flex-grow">
                                    <h2
                                        className="text-xl font-semibold text-black"
                                    >
                                        Shlok Agheda
                                    </h2>
                                    <div className="flex items-center gap-1 mt-2">
                                        <span className="text-xs font-medium px-2.5 py-1.5 rounded-l-full bg-[#FF3366] text-white"                                                >
                                            Class 8A
                                        </span>
                                        <span className="text-xs font-meduim px-2.5 py-1.5 rounded-r-full bg-[#FF3366] text-white">
                                            Group A
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-right sm:text-left space-y-2 text-black">
                                <div className="flex justify-between gap-2 items-center">
                                    <p>From</p>
                                    <div className="bg-[#e5e7eb] px-3 py-1 rounded-xl">17/6/25</div>
                                </div>
                                <div className="flex justify-between gap-2 items-center">
                                    <p>To</p>
                                    <div className="bg-[#e5e7eb] px-3 py-1 rounded-xl">17/7/25</div>
                                </div>
                            </div>
                        </div>

                        <ClassesConductedTable />
                        <Quizzes />
                        <Tests/>
                        <Asses/>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}




















// --- Data Interfaces & Sample Data ---
interface ClassRecord {
    id: string;
    date: string;
    subject: string;
    topic: string;
    subtopic: string;
    attendance: 'Present' | 'Absent';
}
// --- Data Interfaces & Sample Data ---
interface MarksRecord {
    id: string;
    date: string;
    title: string;
    marks: string;
    attendance: 'Present' | 'Absent';
}

const tableDataClass: ClassRecord[] = [
    { id: '1', date: '16 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '2', date: '17 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '3', date: '18 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '4', date: '19 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: '-', attendance: 'Absent' },
    { id: '5', date: '20 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '6', date: '21 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '7', date: '22 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
    { id: '8', date: '23 / 6 / 25', subject: 'Lorem ipsum', topic: 'Lorem ipsum', subtopic: 'Lorem ipsum', attendance: 'Present' },
];

const tableDataMarks: MarksRecord[] = [
    { id: '1', date: '16 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '2', date: '17 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '3', date: '18 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '4', date: '19 / 6 / 25', title: 'Lorem ipsum', marks: '-', attendance: 'Absent' },
    { id: '5', date: '20 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '6', date: '21 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '7', date: '22 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
    { id: '8', date: '23 / 6 / 25', title: 'Lorem ipsum', marks: 'Lorem ipsum', attendance: 'Present' },
];

const headers = ['Date', 'Subject', 'Topic', 'Subtopic', 'Attendance'];
const headersQuiz = ['Date', 'Quiz Title', 'Marks', 'Attendance'];
const headersTests = ['Date', 'Tests Title', 'Marks', 'Attendance'];
const headersAsses = ['Date', 'Assessments Title', 'Marks', 'Attendance'];


// --- Reusable Sub-Components for Clarity ---

const TableHeaderQuiz: React.FC = () => (
    <>
        {headersQuiz.map(header => (
            <div key={header} className="bg-[#FFC79A] text-black text-center font-semibold text-base sm:text-lg p-3 rounded-xl">
                {header}
            </div>
        ))}
    </>
);

const TableHeaderClass: React.FC = () => (
    <>
        {headers.map(header => (
            <div key={header} className="bg-[#99DEFF] text-black text-center font-semibold text-base sm:text-lg p-3 rounded-xl">
                {header}
            </div>
        ))}
    </>
);

const TableHeaderTest: React.FC = () => (
    <>
        {headersTests.map(header => (
            <div key={header} className="bg-[#8DD9B3] text-black text-center font-semibold text-base sm:text-lg p-3 rounded-xl">
                {header}
            </div>
        ))}
    </>
);

const TableHeaderAsses: React.FC = () => (
    <>
        {headersAsses.map(header => (
            <div key={header} className="bg-[#FF99B7] text-black text-center font-semibold text-base sm:text-lg p-3 rounded-xl">
                {header}
            </div>
        ))}
    </>
);

const TableRow: React.FC<{ record: ClassRecord }> = ({ record }) => {
    const isAbsent = record.attendance === 'Absent';
    const cellBaseStyle = "p-3 rounded-xl text-center text-sm sm:text-base";
    const absentStyle = isAbsent ? "bg-[#FF33661A] border border-[#FF3366] text-black" : "bg-gray-50 text-black";

    return (
        <>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.date}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.subject}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.topic}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.subtopic}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.attendance}
            </div>
        </>
    );
};

const TableRowMarks: React.FC<{ record: MarksRecord }> = ({ record }) => {
    const isAbsent = record.attendance === 'Absent';
    const cellBaseStyle = "p-3 rounded-xl text-center text-sm sm:text-base";
    const absentStyle = isAbsent ? "bg-[#FF33661A] border border-[#FF3366] text-black" : "bg-gray-50 text-black";

    return (
        <>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.date}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.title}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.marks}
            </div>
            <div className={`${cellBaseStyle} ${absentStyle}`}>
                {record.attendance}
            </div>
        </>
    );
};

// --- Main Table Component ---
const ClassesConductedTable: React.FC = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] mb-6">
                Classes Conducted
            </h2>
            
            <div className="p-4 border border-[#E5E7EB] rounded-2xl overflow-x-auto custom-scrollbar-thin pb-2">
                <div className="grid grid-cols-5 gap-3 min-w-[700px]">
                    <TableHeaderClass />
                    {tableDataClass.map(record => (
                        <TableRow key={record.id} record={record} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Quizzes: React.FC = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] mb-6">
                Quizzes
            </h2>
            
            <div className="p-4 border border-[#E5E7EB] rounded-2xl overflow-x-auto custom-scrollbar-thin pb-2">
                <div className="grid grid-cols-4 gap-3 min-w-[700px]">
                    <TableHeaderQuiz />
                    {tableDataMarks.map(record => (
                        <TableRowMarks key={record.id} record={record} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Tests: React.FC = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] mb-6">
                Tests
            </h2>
            
            <div className="p-4 border border-[#E5E7EB] rounded-2xl overflow-x-auto custom-scrollbar-thin pb-2">
                <div className="grid grid-cols-4 gap-3 min-w-[700px]">
                    <TableHeaderTest />
                    {tableDataMarks.map(record => (
                        <TableRowMarks key={record.id} record={record} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Asses: React.FC = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-black px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] mb-6">
                Assessments
            </h2>
            
            <div className="p-4 border border-[#E5E7EB] rounded-2xl overflow-x-auto custom-scrollbar-thin pb-2">
                <div className="grid grid-cols-4 gap-3 min-w-[700px]">
                    <TableHeaderAsses />
                    {tableDataMarks.map(record => (
                        <TableRowMarks key={record.id} record={record} />
                    ))}
                </div>
            </div>
        </div>
    );
};