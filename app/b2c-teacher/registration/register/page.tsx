'use client';

import { useState } from 'react';
import Image from 'next/image';
// import StepIndicator from '@/components/step-indicator'; // Adjust path if needed
import { FiChevronDown, FiEye, FiEyeOff, FiUploadCloud } from 'react-icons/fi';

// --- Form Step Components (defined in the same file for simplicity) ---

const Step1 = ({ onContinue }: { onContinue: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-6">Create Account</h1>
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Email ID</label>
          <input type="email" placeholder="Enter Email ID" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Password</label>
          <input type="password" placeholder="Enter Password" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Password</label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500">
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <button type="submit" className="w-full bg-[#3366FF] text-white font-bold py-3.5 mt-4 rounded-full hover:bg-blue-700 transition-all">Continue</button>
      </form>
    </>
  );
};

// ... other step components will be defined similarly ...

// --- Main Page Component ---
export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  };
  
  // const prevStep = () => {
  //   setStep((prev) => (prev > 1 ? prev - 1 : prev));
  // };

  const renderStep = () => {
    switch (step) {
      // NOTE: Replace these with the full components below
      case 1: return <Step1 onContinue={nextStep} />;
      case 2: return <Step2 onContinue={nextStep} />;
      case 3: return <Step3 onContinue={nextStep} />;
      case 4: return <Step4 onContinue={nextStep} />;
      case 5: return <Step5 />;
      default: return <Step1 onContinue={nextStep} />;
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: '#3366FF',
        backgroundImage: 'url(/images/background.jpg)',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* Left Column: Form Area */}
        <div className="md:col-span-6 lg:col-span-5 w-full">
          <div className="flex flex-col items-center w-full max-w-md mx-auto">
            {/* <StepIndicator currentStep={step} totalSteps={totalSteps} /> */}
            <div className="bg-white p-8 rounded-4xl shadow-xl w-full">
              {renderStep()}
            </div>
          </div>
        </div>

        {/* Right Column: Image Panel */}
        <div className="hidden md:flex md:col-span-6 lg:col-span-7 h-full w-full relative rounded-4xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/registar_pattern.svg)',
              backgroundSize: 'auto',
              opacity: 0.9,
            }}
          ></div>
          <Image
            src="/images/Girl_writing.png"
            alt="Student writing"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-10 max-h-[500px] self-end"
            priority
          />
        </div>
      </div>
    </div>
  );
}


// --- FULL DEFINITIONS FOR STEP COMPONENTS ---

const Step2 = ({ onContinue }: { onContinue: () => void }) => (
    <>
      <h1 className="text-2xl font-bold text-black mb-6">Personal Information</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Profile Image</label>
          <div className="flex items-center justify-start w-full px-5 py-2 rounded-full bg-[#F9FAFB] border-2 border-[#D5D5D5] text-[#6B7280] cursor-pointer hover:bg-gray-200">
            <FiUploadCloud className="mr-2 rounded-full text-[#FF3366] h-6 w-6 p-1 bg-[#FF33661A]"/> Upload Image
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Full Name</label>
          <input type="text" placeholder="Full Name" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Phone Number</label>
          <div className="flex items-center">
              <input type="tel" placeholder='+91' className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
         <div>
          <label className="block text-sm font-semibold text-black mb-2">Date of Birth</label>
          <input type="text" placeholder="DD/MM/YY" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Address</label>
          <input type="text" placeholder="Address" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {['Country', 'State / Province', 'City'].map(label => (
          <div key={label} className='relative flex flex-col'>
            <label className="block text-sm font-semibold text-black mb-2">{label}</label>
            <select required className="w-full appearance-none rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Option 1</option> <option>Option 2</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-[50%] transform -translate-y-1/2 text-black w-4 h-4 z-20 " />
          </div>
        ))}
         <div>
          <label className="block text-sm font-semibold text-black mb-2">Bio</label>
          <textarea placeholder="Bio" className="w-full rounded-3xl bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={2}></textarea>
        </div>
        <button type="submit" className="w-full bg-[#3366FF] text-white font-bold py-3.5 mt-4 rounded-full hover:bg-blue-700 transition-all">Continue</button>
      </form>
    </>
);

const Step3 = ({ onContinue }: { onContinue: () => void }) => (
    <>
      <h1 className="text-2xl font-bold text-black mb-6">Education</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">School / University Name</label>
          <input type="text" placeholder="Name" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">Degree</label>
          <input type="text" placeholder="Degree" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
              <label className="block text-sm font-semibold text-black mb-2">Start Year</label>
              <input type="text" placeholder="DD/MM/YY" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-1/2">
              <label className="block text-sm font-semibold text-black mb-2">End Year</label>
              <input type="text" placeholder="DD/MM/YY" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="pt-2 space-y-4">
            <button type="button" className="w-full bg-[#F9FAFB] text-black font-bold py-3.5 rounded-full border border-[#D5D5D5] hover:bg-blue-50 transition-all">Add Qualification</button>
            <button type="submit" className="w-full bg-[#3366FF] text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition-all">Continue</button>
        </div>
      </form>
    </>
);
  
const Step4 = ({ onContinue }: { onContinue: () => void }) => (
      <>
        <h1 className="text-2xl font-bold text-black mb-6">Achievement / Experience</h1>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Title</label>
            <input type="text" placeholder="Title" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Description</label>
            <textarea placeholder="Description" required className="w-full rounded-3xl bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5}></textarea>
          </div>
          <div className="pt-2 space-y-4">
            <button type="button" className="w-full bg-[#F9FAFB] text-black font-bold py-3.5 rounded-full border border-[#D5D5D5] hover:bg-blue-50 transition-all">Add Achievement / Experience</button>
            <button type="submit" className="w-full bg-[#3366FF] text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition-all">Continue</button>
          </div>
        </form>
      </>
);
  
const Step5 = () => (
      <>
        <h1 className="text-2xl font-bold text-black mb-6">School Information</h1>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registration Complete!"); }}>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">School Name</label>
            <input type="text" placeholder="School Name" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">School Address</label>
            <input type="text" placeholder="School Address" required className="w-full rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black placeholder:text-[#6B7280] px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          {['Country', 'State / Province', 'City'].map(label => (
            <div key={label}>
              <label className="block text-sm font-semibold text-black mb-2">{label}</label>
              <select required className="w-full appearance-none rounded-full bg-[#F9FAFB] border border-[#D5D5D5] text-black px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Option 1</option> <option>Option 2</option>
              </select>
            </div>
          ))}
          <div className="pt-2">
            <button type="submit" className="w-full bg-[#3366FF] text-white font-bold py-3.5 rounded-full hover:bg-blue-700 transition-all">Complete Registration</button>
          </div>
        </form>
      </>
);