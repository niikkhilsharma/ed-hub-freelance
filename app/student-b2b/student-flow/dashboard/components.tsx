// components.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FiMessageSquare as FiChatIcon, FiVideo as FiVideoActivity, FiFileText as FiFileActivity } from 'react-icons/fi';
import { FocusPill, DateNavigator, FilterTabButton, DualToggleButton, OutlineButton } from './ui-components';

// --- Data Interfaces ---
interface StudentProfileData {
	name: string; class: string; group: string; avatar: string; gender: string; dob: string; email: string;
	contact: string; city: string; state: string; dmitScore: number; assessmentReportDate: string;
	objective: string; focusAreas: string[];
}
interface ClassStatsData {
	month: string; complete: number; total: number; incomplete: number;
	attendance: string; grade: string; leaderBoardRank: string;
}
export interface Activity { // Export if used by page.tsx for state typing
	id: number; type: 'video' | 'document'; category: string; topic: string;
	dateRange: string; status: 'join' | 'not_started' | 'completed';
}
interface Teacher { id: number; name: string; subject: string; avatarSrc: string; }
interface Notification { id: number; title: string; message: string; date: string; }

// --- Profile Info Card ---
interface StudentProfileCardProps { studentData: StudentProfileData; }
export const StudentProfileCard: React.FC<StudentProfileCardProps> = ({ studentData }) => (
    <div className="bg-white rounded-2xl p-4 md:p-6"> {/* Base padding for mobile, md:p-6 for desktop */}
        <div className="flex flex-col sm:flex-row items-start sm:gap-6">
            <Image
                src={studentData.avatar} alt={studentData.name} width={112} height={112}
                className="rounded-full object-cover flex-shrink-0 w-20 h-20 md:w-28 md:h-28 mb-4 md:mb-0" // Mobile size, md:+ for desktop
            />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 items-start gap-x-4 pt-1 md:pt-2 w-full">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">{studentData.name}</h2>
                    <div className="flex items-center space-x-1">
                        <span className="px-3 py-1 md:px-4 md:py-1.5 bg-[#FF3366] text-white text-sm md:text-base font-semibold rounded-full rounded-r-none">{studentData.class}</span>
                        <span className="px-3 py-1 md:px-4 md:py-1.5 bg-[#FF3366] text-white text-sm md:text-base font-semibold rounded-full rounded-l-none">{studentData.group}</span>
                    </div>
                </div>
                <div className="text-xs space-y-1 mt-3 sm:mt-0 md:justify-self-end text-left sm:text-left"> {/* text-left consistent */}
                    <p><span className="font-medium text-black">Gender:</span> <span className="text-gray-600">{studentData.gender}</span></p>
                    <p><span className="font-medium text-black">DOB:</span> <span className="text-gray-600">{studentData.dob}</span></p>
                    <p><span className="font-medium text-black">Email:</span> <span className="text-gray-600">{studentData.email}</span></p>
                    <p><span className="font-medium text-black">Contact:</span> <span className="text-gray-600">{studentData.contact}</span></p>
                    <p><span className="font-medium text-black">City:</span> <span className="text-gray-600">{studentData.city}</span></p>
                    <p><span className="font-medium text-black">State:</span> <span className="text-gray-600">{studentData.state}</span></p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-x-4 mt-6 md:mt-8">
            <div className="bg-[#F3F4F6] p-3 md:p-4 rounded-xl text-center">
                <p className="text-sm font-semibold text-black">DMT & Skill Test</p>
                <p className="text-sm text-gray-600 mt-1">Score: {studentData.dmitScore}</p>
            </div>
            <div className="bg-[#F3F4F6] p-3 md:p-4 rounded-xl text-center">
                <p className="text-sm font-semibold text-black">Assessment Report</p>
                <p className="text-sm text-gray-600 mt-1">{studentData.assessmentReportDate}</p>
            </div>
        </div>
        <div className="mt-6 bg-[#FEF9C3] border-l-4 border-yellow-400 p-3 md:p-4 rounded-l-xl"> {/* Adjusted: rounded-l-xl not rounded-r-xl */}
            <h3 className="text-sm font-semibold text-yellow-800 mb-1">Objective of the Year</h3>
            <p className="text-xs text-yellow-700 leading-relaxed">{studentData.objective}</p>
        </div>
        <div className="mt-6">
            <h3 className="text-md font-semibold text-black mb-3">Key Focus Area</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">{studentData.focusAreas.map(area => (<FocusPill key={area} label={area} />))}</div>
        </div>
    </div>
);

// --- Learning Activity Item (Internal to LearningActivitiesSection) ---
const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => {
	const Icon = activity.type === 'video' ? FiVideoActivity : FiFileActivity;
	const iconBgColor = activity.type === 'video' ? 'bg-[#FF3366]' : 'bg-[#3366FF]';
	const categoryTextColor = 'text-[#FF3366]';
	return (
		<div className="flex flex-col items-start gap-2 p-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:shadow-md transition-shadow sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:gap-0">
			<div className="flex items-center gap-3 sm:gap-4"> {/* Desktop: gap-4 */}
				<div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${iconBgColor} text-white flex items-center justify-center flex-shrink-0`}> {/* Desktop: w-14 h-14 */}
					<Icon className="w-6 sm:w-7 h-6 sm:h-7" /> {/* Desktop: w-7 h-7 */}
				</div>
				<div>
					<p className={`text-[11px] sm:text-xs font-medium ${categoryTextColor}`}>{activity.category}</p>
					<h4 className="text-sm sm:text-base font-semibold text-black mt-0.5">{activity.topic}</h4>
					<p className="text-[8px] sm:text-[9px] text-[#6B7280] mt-0.5">{activity.dateRange}</p>
				</div>
			</div>
			<div className="self-end sm:self-center sm:pr-2"> {/* Align right on mobile, center on sm+ */}
                {activity.status === 'join' && <button className="text-blue-600 text-md sm:text-lg font-semibold hover:text-blue-700 transition-colors">Join</button>}
                {activity.status === 'not_started' && <span className="text-md sm:text-lg font-semibold text-gray-400">Not Started</span>}
                {activity.status === 'completed' && <span className="text-md sm:text-lg font-semibold text-green-500">Completed</span>}
            </div>
		</div>
	);
};

// --- Learning Activities Section ---
interface LearningActivitiesSectionProps {
    activities: Activity[]; currentFilter: 'Active' | 'Completed';
    onFilterChange: (filter: 'Active' | 'Completed') => void;
    currentDate: string; onDatePrev?: () => void; onDateNext?: () => void;
}
export const LearningActivitiesSection: React.FC<LearningActivitiesSectionProps> = ({ activities, currentFilter, onFilterChange, currentDate, onDatePrev, onDateNext }) => {
    const filteredActivities = activities.filter(activity => currentFilter === 'Active' ? (activity.status === 'join' || activity.status === 'not_started') : activity.status === 'completed');
    return (
        <div className="bg-white rounded-2xl p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-black">Learning Activities</h2>
                <div className="flex items-center gap-1 bg-[#F9FAFB] p-1.5 md:p-2 rounded-full">{['Active', 'Completed'].map(filter => (<FilterTabButton key={filter} label={filter} isActive={currentFilter === filter} onClick={() => onFilterChange(filter as 'Active' | 'Completed')} />))}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 flex-wrap">
                <DateNavigator currentDate={currentDate} onPrevious={onDatePrev} onNext={onDateNext} />
                <DualToggleButton leftLabel="Weekly ( 10 )" rightLabel="Monthly ( 50 )" activeSide="left"/>
                <OutlineButton label="Yearly Plan Overview" />
            </div>
            <div className="space-y-3 md:space-y-4">{filteredActivities.length > 0 ? filteredActivities.map(activity => (<ActivityItem key={activity.id} activity={activity} />)) : <p className="text-center text-sm text-gray-500 py-4">No activities.</p>}</div>
        </div>
    );
};

// --- Classes Card ---
interface ClassesSummaryCardProps { classStats: ClassStatsData; onDatePrev?: () => void; onDateNext?: () => void; }
export const ClassesSummaryCard: React.FC<ClassesSummaryCardProps> = ({ classStats, onDatePrev, onDateNext }) => (
    <div className="bg-white rounded-2xl p-4 md:p-6">
        <div className="flex  justify-between items-start xs:items-center mb-4 gap-2">
            <h2 className="text-md md:text-lg font-semibold text-black">Classes</h2>
            <DateNavigator currentDate={classStats.month} onPrevious={onDatePrev} onNext={onDateNext} />
        </div>
        <div className="flex justify-between items-baseline mb-4">
            <div><p className="text-xs text-gray-500">Complete</p><p className="text-xl md:text-2xl font-bold text-black">{classStats.complete}<span className="text-sm font-normal text-gray-500"> / {classStats.total}</span></p></div>
            <div className="text-right"><p className="text-xs text-[#6B7280]">Incomplete</p><p className="text-sm md:text-base text-center font-bold mt-2 text-[#FF3366]">{classStats.incomplete}</p></div>
        </div>
        <div className="space-y-1 text-sm">
            {[{label: 'Attendance', value: classStats.attendance}, {label: 'Grade', value: classStats.grade}, {label: 'Leader Board', value: classStats.leaderBoardRank}].map((item, index, array) => (<React.Fragment key={item.label}><div className="flex justify-between items-center pt-1"><span className="text-[#6B7280]">{item.label}</span><span className="text-[#3366FF] font-medium">{item.value}</span></div>{index < array.length - 1 && <div className="w-full border-b border-[#B0B0B0] h-[1px] my-0.5" />}</React.Fragment>))}
        </div>
    </div>
);

// --- Teacher Item (Internal to YourTeachersCard) ---
const TeacherItem: React.FC<Teacher> = ({ avatarSrc, name, subject }) => (
	<div className="flex items-center justify-between p-1.5 md:p-2 bg-gray-100 rounded-full hover:shadow-sm transition-shadow">
		<div className="flex items-center gap-2 md:gap-3">
			<Image src={avatarSrc} alt={name} width={40} height={40} className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10" />
			<div><p className="text-sm font-medium text-black">{name}</p><p className="text-xs text-[#FF3366]">{subject}</p></div>
		</div>
		<button className="p-1.5 md:p-2 text-gray-400 hover:text-blue-600 transition-colors"><FiChatIcon className="w-4 h-4 md:w-5 md:h-5" /></button>
	</div>
);

// --- Your Teachers Card ---
interface YourTeachersCardProps { teachers: Teacher[]; }
export const YourTeachersCard: React.FC<YourTeachersCardProps> = ({ teachers }) => (
    <div className="bg-white rounded-2xl p-4 md:p-6">
        <h2 className="text-md md:text-lg font-semibold text-black mb-4">Your teachers</h2>
        <div className="space-y-2 md:space-y-3">{teachers.map(teacher => (<TeacherItem key={teacher.id} {...teacher} />))}</div>
    </div>
);

// --- Notification Item (Internal to NotificationsCard) ---
const NotificationItem: React.FC<Notification> = ({ title, message, date }) => (
	<div className="border-[#FFCC00] border bg-[#FEF9C3] rounded-lg p-2 md:p-2.5">
		<h5 className="text-sm font-semibold text-black mb-1">{title}</h5>
		<p className="text-xs text-[#6B7280] leading-relaxed mb-1.5 line-clamp-2">{message}</p>
		<p className="text-[10px] text-gray-500 text-right">{date}</p>
	</div>
);

// --- Notifications Card ---
interface NotificationsCardProps { notifications: Notification[]; }
export const NotificationsCard: React.FC<NotificationsCardProps> = ({ notifications }) => (
    <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col h-full">
        <h2 className="text-md md:text-lg font-semibold text-black mb-4">Notification</h2>
        <div className="space-y-2 md:space-y-3 flex-grow overflow-y-auto custom-scrollbar pr-1">{notifications.map(notif => (<NotificationItem key={notif.id} {...notif} />))}</div>
    </div>
);