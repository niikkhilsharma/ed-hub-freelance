// /app/class-recording/page.tsx (or your preferred file path)
"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiShare2,
  FiFilm,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUploadCloud,
  FiX
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

// --- Style Constants (from your original code) ---
const ACCENT_PINK = "#FF3366";
const PRIMARY_BLUE = "#3366FF";
const LIGHT_BLUE_BUTTON_BG = "bg-[#3366FF1A]";
const LIGHT_BLUE_BUTTON_TEXT = "text-[#3366FF]";
const LIGHT_GREEN_BUTTON_BG = "bg-[#8DD9B333]";
const LIGHT_GREEN_BUTTON_TEXT = "text-[#8DD9B3]";
const LIGHT_RED_BUTTON_BG = "bg-[#FF33661A]";
const LIGHT_RED_BUTTON_TEXT = "text-[#FF3366]";
const FILTER_BG = "bg-[#F9FAFB]";

// --- Data Interfaces ---
interface ClassRecording { id: string; title: string; subjectUnitName: string; periodNumber: string; date: string; isShared: boolean; }
interface FilterOption { value: string; label: string; }

// --- Sample Data ---
const sampleRecordings: ClassRecording[] = [ { id: "rec1", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec2", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec3", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: true, }, { id: "rec4", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: false, }, { id: "rec5", title: "Class 3", subjectUnitName: "Unit Name", periodNumber: "Number", date: "29/5/25", isShared: false, } ];
const sampleBatchOptions: FilterOption[] = [{ value: "batchA", label: "All Batches" }];
const sampleSubjectOptions: FilterOption[] = [{ value: "all", label: "Subject" }, { value: "science", label: "Science" }];


// --- MODAL & FORM COMPONENTS (Integrated from your popups file) ---

interface BaseModalProps { isOpen: boolean; onClose: () => void; children?: React.ReactNode; maxWidth?: string; }
const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children, maxWidth = "max-w-md" }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
        if (isOpen) { document.body.style.overflow = "hidden"; window.addEventListener("keydown", handleEsc); }
        else { document.body.style.overflow = "auto"; }
        return () => { window.removeEventListener("keydown", handleEsc); document.body.style.overflow = "auto"; };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
                    <motion.div onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }} className={`bg-white rounded-2xl shadow-xl w-full ${maxWidth} overflow-hidden`}>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const FormGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => ( <div><label className="block text-sm font-semibold text-black mb-2">{label}</label>{children}</div>);

const AddVideoModal: React.FC<BaseModalProps> = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose}>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Add Videos</h2>
        <button onClick={onClose} className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"><FiX /></button>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormGroup label="Select Class"><div className="relative"><select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none"><option>Option 1</option></select><FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none" /></div></FormGroup>
          <FormGroup label="Topic Name"><input type="text" placeholder="Text" className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none" /></FormGroup>
        </div>
        <FormGroup label="Enter URL"><input type="text" placeholder="Text" className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none" /></FormGroup>
        <div className="text-center text-black my-2">Or</div>
        <FormGroup label="Upload File"><div className="relative flex items-center w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5"><div className="p-1 rounded-full bg-[#FF33661A] mr-2"><FiUploadCloud className="text-[#FF3366] h-full" /></div><span className="text-[#6B7280]">File Name</span></div></FormGroup>
        <FormGroup label="Description"><textarea rows={4} placeholder="Text" className="w-full bg-[#F9FAFB] border-[#D5D5D5] border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea></FormGroup>
      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button onClick={onClose} className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200">Cancel</button>
        <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">Add</button>
      </div>
    </div>
  </BaseModal>
);

interface ShareModalProps extends BaseModalProps { title: string; }
const ShareVideoModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title }) => (
  <BaseModal isOpen={isOpen} onClose={onClose}>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <button onClick={onClose} className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"><FiX /></button>
      </div>
      <div className="space-y-4">
        <FormGroup label="Select Class"><div className="relative"><select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none"><option>Option 1</option></select><FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" /></div></FormGroup>
        <FormGroup label="Select Group"><div className="relative"><select className="w-full appearance-none bg-[#F9FAFB] border-[#D5D5D5] border rounded-full px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 outline-none"><option>Option 1</option></select><FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" /></div></FormGroup>
      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button onClick={onClose} className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200">Cancel</button>
        <button className="px-8 py-2.5 bg-[#3366FF] text-white font-semibold rounded-full hover:bg-blue-700">Share</button>
      </div>
    </div>
  </BaseModal>
);

interface DeleteRecordingModalProps extends BaseModalProps { recording: ClassRecording | null; }
const DeleteRecordingModal: React.FC<DeleteRecordingModalProps> = ({ isOpen, onClose, recording }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-center w-full pt-1.5">Delete Recording</h2>
        <button onClick={onClose} className="p-1.5 bg-[#F9FAFB] rounded-full hover:bg-gray-200"><FiX /></button>
      </div>
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">{recording?.title || "Recording Name"}</h3>
        <p className="text-[#6B7280] text-sm">Are you sure you want to delete this recording? This action cannot be undone.</p>
      </div>
      <div className="flex justify-end gap-3 mt-8">
        <button onClick={onClose} className="px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] font-semibold rounded-full hover:bg-gray-200">Cancel</button>
        <button className="px-8 py-2.5 bg-[#FF33661A] text-[#FF3366] font-semibold rounded-full hover:bg-pink-200">Delete</button>
      </div>
    </div>
  </BaseModal>
);

// --- MAIN PAGE UI COMPONENTS ---

const FilterDropdown: React.FC<{ options: FilterOption[]; value: string; onChange: (value: string) => void; }> = ({ options, value, onChange }) => (
    <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className={`pl-3 pr-7 py-2 text-xs ${FILTER_BG} border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none appearance-none`}>
            {options.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none" />
    </div>
);

const RecordingCard: React.FC<{ recording: ClassRecording; onPlay: () => void; onShared: () => void; onShare: () => void; onDelete: () => void; }> = ({ recording, onShared, onPlay, onShare, onDelete }) => (
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-2 hover:shadow-md transition-shadow duration-200 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-grow min-w-0">
            <div className="bg-[#FFCC001A] w-14 h-14 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiFilm className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFCC00]" />
            </div>
            <div className="min-w-0">
                <h3 className="text-lg  font-semibold text-gray-900 truncate">{recording.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5 truncate">Subject: {recording.subjectUnitName}</p>
                <p className="text-sm text-gray-500 mt-0.5 truncate">Period: {recording.periodNumber}</p>
                <p className="text-sm text-gray-500 mt-0.5 truncate">Date: {recording.date}</p>
            </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {recording.isShared ? (
                <button onClick={onShare} className={`px-3 py-1.5 text-sm ${LIGHT_BLUE_BUTTON_BG} ${LIGHT_BLUE_BUTTON_TEXT} font-medium rounded-full`}>Shared</button>
            ) : (
                <button onClick={onShared} className={`p-2 rounded-full ${LIGHT_BLUE_BUTTON_BG} hover:bg-blue-200`} aria-label="Share recording"><FiShare2 className={`w-4 h-4 ${LIGHT_BLUE_BUTTON_TEXT}`} /></button>
            )}
            <button onClick={onPlay} className={`p-2 rounded-full ${LIGHT_GREEN_BUTTON_BG} hover:bg-green-200`} aria-label="Play recording"><CiPlay1 className={`w-4 h-4 ${LIGHT_GREEN_BUTTON_TEXT}`} strokeWidth={2} /></button>
            <button onClick={onDelete} className={`p-2 rounded-full ${LIGHT_RED_BUTTON_BG} hover:bg-red-200`} aria-label="Delete recording"><AiOutlineDelete className={`w-4 h-4 ${LIGHT_RED_BUTTON_TEXT}`} /></button>
        </div>
    </div>
);

// --- ClassRecordingContent Component with State Management ---
const ClassRecordingContent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [batchFilter, setBatchFilter] = useState(sampleBatchOptions[0].value);
    const [subjectFilter, setSubjectFilter] = useState(sampleSubjectOptions[0].value);

    // Modal state management
    const [openModal, setOpenModal] = useState<string | null>(null);
    const [selectedRecording, setSelectedRecording] = useState<ClassRecording | null>(null);

    const handleOpenModal = (modalName: string, recording?: ClassRecording) => {
        if (recording) setSelectedRecording(recording);
        setOpenModal(modalName);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
        setSelectedRecording(null);
    };

    const recordings = useMemo(() => sampleRecordings.filter(rec => rec.title.toLowerCase().includes(searchTerm.toLowerCase()) || rec.subjectUnitName.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);
    const recordingsByDate = useMemo(() => {
        const grouped: { [date: string]: ClassRecording[] } = {};
        recordings.forEach((rec) => { (grouped[rec.date] = grouped[rec.date] || []).push(rec); });
        return grouped;
    }, [recordings]);

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4 flex-grow w-full lg:w-auto">
                    <button className={`px-4 py-2 text-sm font-medium whitespace-nowrap text-[${ACCENT_PINK}] border-b-2 border-[${ACCENT_PINK}]`}>Class Recording</button>
                    <div className="relative flex-grow"><FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-black pointer-events-none" /><input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`w-full pl-10 pr-4 py-2.5 border border-[#6B7280] bg-white rounded-full focus:ring-2 focus:ring-[#3366FF] focus:border-transparent outline-none text-sm`} /></div>
                </div>
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end lg:justify-start flex-shrink-0">
                    <div className="flex items-center gap-2 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl"><FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" /><span>June 2025</span><FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" /></div>
                    <FilterDropdown options={sampleBatchOptions} value={batchFilter} onChange={setBatchFilter} />
                    <FilterDropdown options={sampleSubjectOptions} value={subjectFilter} onChange={setSubjectFilter} />
                </div>
            </div>

            {Object.keys(recordingsByDate).length > 0 ? (
                <div className="space-y-6">
                    {Object.entries(recordingsByDate).map(([date, recs]) => (
                        <div key={date}>
                            <h2 className="text-lg font-semibold text-black mb-2 ml-1">Date</h2>
                            <div className="space-y-3">
                                {recs.map((rec) => ( <RecordingCard key={rec.id} recording={rec} onPlay={() => alert(`Playing ${rec.title}`)} onShared={() => handleOpenModal('share', rec)} onShare={() => handleOpenModal('manageAccess', rec)} onDelete={() => handleOpenModal('delete', rec)} /> ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : ( <div className="text-center py-12 text-gray-500"><FiFilm className="w-16 h-16 mx-auto mb-4 text-gray-400" /><h3 className="text-xl font-semibold mb-2">No Recordings Found</h3><p className="text-sm">Try adjusting your search or filter criteria.</p></div> )}

            {/* Render Modals */}
            <AddVideoModal isOpen={openModal === 'addVideo'} onClose={handleCloseModal} />
            <ShareVideoModal isOpen={openModal === 'share'} onClose={handleCloseModal} title="Share Video" />
            <ShareVideoModal isOpen={openModal === 'manageAccess'} onClose={handleCloseModal} title="Shared With - Manage Access" />
            <DeleteRecordingModal isOpen={openModal === 'delete'} onClose={handleCloseModal} recording={selectedRecording} />
        </div>
    );
};


// --- Main Page Export ---
export default function ClassRecordingPage() {
    const headerUser = { name: "Educator Name", role: "Teacher", avatarSrc: "/teacher-b2b/profile.png" };
    return (
        <div className="bg-[#eeeeee] min-h-screen flex flex-col">
            <Header user={headerUser} />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <ClassRecordingContent />
            </main>
            <Footer />
        </div>
    );
}