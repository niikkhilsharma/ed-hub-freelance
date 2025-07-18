'use client';

import React, { useState } from 'react';

interface Plan {
  name: string;
  price: string;
  sessions: string;
  description?: string;
  courses: string;
  image: string;
  features?: string[];
}

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div className="w-full   md:w-1/2 lg:w-1/3 px-4 ">
    <div className="bg-white rounded-xl max-h-[700px] h-full max-w-[480px] w-full  space-y-2 shadow-md overflow-hidden">
      <img
        src={plan.image}
        alt={plan.name}
        className="w-full h-84 object-cover"
      />
      <div className=" p-2 text-center">
        <h3 className="text-xl md:font-3xl font-bold text-black mb-2">{plan.name}</h3>
        <p className="text-lg md:text-3xl font-regular text-black mb-2">{plan.price}</p>
        <p className="text-black font-normal text-sm mb-2">No. of Sessions: {plan.sessions}</p>
        {plan.description && (
          <p className="text-black max-w-[35ch] text-center text-sm mb-2">{plan.description}</p>
        )}
        <p className="text-gray-700 text-sm mb-4">{plan.courses}</p>
        <button className="bg-[#3366ff] hover:bg-blue-700 text-white font-medium py-2 px-4  my-2 rounded-full w-full">
          Select Membership
        </button>
      </div>
    </div>
  </div>
);

const MembershipPlan = () => {
  const [activeTab, setActiveTab] = useState<'recommended' | 'otherPlans'>('recommended');

  const plans = {
    recommended: [
      {
        name: 'Ramp Up Scores',
        price: '₹000,00',
        sessions: '250 Sessions',
        description: 'All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        courses: 'Pick any X Courses out of Y Courses',
        image: '/phase-3/rampup.png',
      },
      {
        name: 'Alphaers',
        price: '₹000,00',
        sessions: '400 Sessions',
        description: 'All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        courses: 'Pick any X Courses out of Y Courses',
        image: '/phase-3/alphaers.png',
       
      },
    ],
    otherPlans: [
         {
        name: 'Ramp Up Scores',
        price: '₹000,00',
        sessions: '250 Sessions',
        description: 'All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        courses: 'Pick any X Courses out of Y Courses',
        image: '/phase-3/rampup.png',
      },
      {
        name: 'Alphaers',
        price: '₹000,00',
        sessions: '400 Sessions',
        description: 'All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        courses: 'Pick any X Courses out of Y Courses',
        image: '/phase-3/alphaers.png',
       
      },
      {
        name: 'Alphaers',
        price: '₹000,00',
        sessions: '400 Sessions',
        description: 'All subject tuitions are included in the pack. Lorem ipsum is simply dummy text of the printing and typesetting industry.',
        courses: 'Pick any X Courses out of Y Courses',
        image: '/phase-3/alphaers.png',
        
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl  text-black font-semibold text-center mb-8">
        Choose the Membership Plan
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {(['recommended', 'otherPlans'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? 'bg-[#ff3366] text-white'
                : ' text-[#6b7280]'
            }`}
          >
            {tab === 'recommended' ? 'Recommended' : 'Other Plans'}
          </button>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="flex flex-col sm:flex-row  gap-6 justify-center">
        {plans[activeTab].map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default MembershipPlan;
