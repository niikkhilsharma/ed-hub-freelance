'use client';

import { useState } from 'react';
// import Image from 'next/image'; // Only if needed within this page, Header/Footer handle their own
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiArrowLeft, FiChevronDown, FiChevronUp, FiChevronLeft as FiMonthLeft, FiChevronRight as FiMonthRight } from 'react-icons/fi';

// --- Subject Tab Component ---
const SubjectTab = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
            isActive
                ? 'bg-pink-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-200'
        }`}
    >
        {label}
    </button>
);

// --- Accordion Item Component for Modules ---
interface UnitDetail {
    point: string;
}
interface Unit {
    id: number;
    name: string;
    periods: number;
    marks: number;
    details: UnitDetail[];
    patternSrc?: string; // Optional pattern for the expanded view
}
const AccordionItem = ({ unit, isOpen, onToggle }: { unit: Unit, isOpen: boolean, onToggle: () => void }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 focus:outline-none transition-colors"
        >
            <span className="text-md font-semibold text-gray-700">{unit.name}</span>
            {isOpen ? <FiChevronUp className="w-5 h-5 text-gray-500" /> : <FiChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {isOpen && (
            <div
                className="p-5 border-t border-gray-200 bg-gray-50 relative overflow-hidden"
                style={unit.patternSrc ? {
                    backgroundImage: `url(${unit.patternSrc})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto 100px', // Adjust size for pattern density
                    backgroundPosition: 'top center'
                } : {}}
            >
                 {/* Overlay to ensure text readability over pattern */}
                <div className="absolute inset-0 bg-gray-50 opacity-80 z-0"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>Periods : {unit.periods}</span>
                        <span>Marks: {unit.marks}</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-600 leading-relaxed">
                        {unit.details.map((detail, index) => (
                            <li key={index}>{detail.point}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )}
    </div>
);


// --- Sample Data ---
const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];
const modulesData: Unit[] = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: `Unit Name ${i + 1}`,
    periods: 18,
    marks: 20,
    patternSrc: i === 0 ? '/unit-description-pattern.png' : undefined, // Only first one has pattern for demo
    details: [
        { point: 'REAL NUMBERS' },
        { point: 'Review of representation of natural numbers, integers, and rational numbers on the number line. Rational numbers as recurring/terminating decimals. Operations on real numbers.' },
        { point: 'Examples of non-recurring/non-terminating decimals. Existence of non-rational numbers (irrational numbers) such as, √2, √3 and their representation on the number line. Explaining that every real number is represented by a unique point on the number line and conversely, viz. every point on the number line represents a unique real number.' },
        { point: 'Definition of nth root of a real number.' },
        { point: 'Rationalization (with precise meaning) of real numbers of the type' },
    ].slice(0, i === 0 ? 5 : 1) // Show more details for the first expanded item
}));

const courseStructureData = [
    { unit: 'I', name: 'Number Systems', marks: '10' },
    { unit: 'II', name: 'Algebra', marks: '20' },
    { unit: 'III', name: 'Coordinate Geometry', marks: '04' },
    { unit: 'IV', name: 'Geometry', marks: '27' },
    { unit: 'V', name: 'Mensuration', marks: '13' },
    { unit: 'VI', name: 'Statistics', marks: '06' },
];
const totalCourseMarks = courseStructureData.reduce((sum, item) => sum + parseInt(item.marks), 0);

const questionPaperDesignData = [
    { sno: '1.', typology: "Remembering: Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers. Understanding: Demonstrate understanding of facts and ideas by organizing, comparing, translating, interpreting, giving descriptions, and stating main ideas", totalMarks: '43', weightage: '54' },
    { sno: '2.', typology: "Applying: Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.", totalMarks: '19', weightage: '24' },
    { sno: '3.', typology: "Analysing: Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations. Evaluating: Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria. Creating: Compile information together in a different way by combining elements in a new pattern or proposing alternative solutions", totalMarks: '18', weightage: '22' },
];
const totalDesignMarks = questionPaperDesignData.reduce((sum, item) => sum + parseInt(item.totalMarks), 0);
const totalDesignWeightage = questionPaperDesignData.reduce((sum, item) => sum + parseInt(item.weightage), 0);

const internalAssessmentData = [
    { item: 'Pen Paper Test and Multiple Assessment (5+5)', marks: '10 Marks' },
    { item: 'Portfolio', marks: '05 Marks' },
    { item: 'Lab Practical (Lab activities to be done from the prescribed books)', marks: '05 Marks' },
];
const totalInternalMarks = internalAssessmentData.reduce((sum, item) => sum + parseInt(item.marks.split(' ')[0]), 0) + " Marks";


export default function YearlyPlanOverviewPage() {
    const [activeSubject, setActiveSubject] = useState(subjects[0]);
    const [openAccordionId, setOpenAccordionId] = useState<number | null>(modulesData[0].id); // Open first by default
    const [currentMonth] = useState('June 2025'); // Example month
    const [viewType, setViewType] = useState<'Weekly' | 'Monthly'>('Weekly');

    const handleAccordionToggle = (unitId: number) => {
        setOpenAccordionId(prevId => (prevId === unitId ? null : unitId));
    };

    // Dummy user for Header
    const headerUser = {
        name: "Shlok Agheda",
        role: "Student",
        avatarSrc: "/placeholder-avatar-student.jpg" // UPDATE PATH
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {/* Page Title and Back Button */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="p-1.5 text-gray-600 hover:text-blue-600 focus:outline-none">
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <h1 className="text-xl font-semibold text-pink-600">Yearly Plan Overview</h1>
                </div>

                {/* Subject Tabs */}
                <div className="mb-8 bg-white p-3 rounded-xl shadow-sm overflow-x-auto">
                    <div className="flex space-x-2">
                        {subjects.map(subject => (
                            <SubjectTab
                                key={subject}
                                label={subject}
                                isActive={activeSubject === subject}
                                onClick={() => setActiveSubject(subject)}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Modules */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                            <h2 className="text-lg font-semibold text-blue-600">Modules</h2>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <select
                                        value={viewType}
                                        onChange={(e) => setViewType(e.target.value as 'Weekly' | 'Monthly')}
                                        className="appearance-none text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                    <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                                    <FiMonthLeft className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                    <span>{currentMonth}</span>
                                    <FiMonthRight className="w-4 h-4 cursor-pointer hover:text-gray-800" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {modulesData.map(unit => (
                                <AccordionItem
                                    key={unit.id}
                                    unit={unit}
                                    isOpen={openAccordionId === unit.id}
                                    onToggle={() => handleAccordionToggle(unit.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Course Structure & Question Paper Design */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Course Structure Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-md font-semibold text-blue-600 text-center mb-4">COURSE STRUCTURE CLASS - IX</h3>
                            <table className="w-full text-sm border border-gray-300">
                                <thead className="bg-blue-500/20">
                                    <tr>
                                        <th className="px-3 py-2 border border-gray-300 text-left font-medium text-gray-700">Units</th>
                                        <th className="px-3 py-2 border border-gray-300 text-left font-medium text-gray-700">Unit Name</th>
                                        <th className="px-3 py-2 border border-gray-300 text-left font-medium text-gray-700">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseStructureData.map(item => (
                                        <tr key={item.unit}>
                                            <td className="px-3 py-2 border border-gray-300 text-gray-600">{item.unit}</td>
                                            <td className="px-3 py-2 border border-gray-300 text-gray-600">{item.name}</td>
                                            <td className="px-3 py-2 border border-gray-300 text-gray-600 font-medium">{item.marks}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-blue-500/20 font-semibold">
                                        <td colSpan={2} className="px-3 py-2 border border-gray-300 text-gray-700">Total</td>
                                        <td className="px-3 py-2 border border-gray-300 text-gray-700">{totalCourseMarks}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Question Paper Design Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-md font-semibold text-blue-600 text-center mb-1">MATHEMATICS</h3>
                            <h4 className="text-sm font-medium text-gray-700 text-center mb-1">QUESTION PAPER DESIGN</h4>
                            <h4 className="text-sm font-medium text-gray-700 text-center mb-4">CLASS - IX</h4>
                            <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                                <span>Time: 3 Hrs.</span>
                                <span>Max. Marks: 80</span>
                            </div>
                            <table className="w-full text-xs border border-gray-300">
                                <thead className="bg-blue-500/20">
                                    <tr>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700">S. No.</th>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700">Typology of Questions</th>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700">Total Marks</th>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700">% Weightage (approx.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questionPaperDesignData.map(item => (
                                        <tr key={item.sno}>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600 align-top">{item.sno}</td>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600 leading-normal">{item.typology}</td>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600 font-medium align-top">{item.totalMarks}</td>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600 font-medium align-top">{item.weightage}</td>
                                        </tr>
                                    ))}
                                     <tr className="bg-blue-500/20 font-semibold">
                                        <td colSpan={2} className="px-2 py-2 border border-gray-300 text-gray-700">Total</td>
                                        <td className="px-2 py-2 border border-gray-300 text-gray-700">{totalDesignMarks}</td>
                                        <td className="px-2 py-2 border border-gray-300 text-gray-700">{totalDesignWeightage}</td>
                                    </tr>
                                </tbody>
                            </table>
                             <h3 className="text-sm font-semibold text-blue-600 text-center my-4">INTERNAL ASSESSMENT</h3>
                             <table className="w-full text-xs border border-gray-300">
                                <thead className="bg-blue-500/20">
                                    <tr>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700"></th>
                                        <th className="px-2 py-2 border border-gray-300 text-left font-medium text-gray-700">Marks</th>
                                    </tr>
                                </thead>
                                 <tbody>
                                    {internalAssessmentData.map(item => (
                                        <tr key={item.item}>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600">{item.item}</td>
                                            <td className="px-2 py-2 border border-gray-300 text-gray-600 font-medium">{item.marks}</td>
                                        </tr>
                                    ))}
                                     <tr className="bg-blue-500/20 font-semibold">
                                        <td className="px-2 py-2 border border-gray-300 text-gray-700">Total</td>
                                        <td className="px-2 py-2 border border-gray-300 text-gray-700">{totalInternalMarks}</td>
                                    </tr>
                                </tbody>
                             </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}