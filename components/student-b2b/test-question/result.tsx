import React from 'react';
import { FaStar, FaSmile } from 'react-icons/fa';

interface ScoreItem {
  name: string;
  score: number;
  color: string; // Tailwind background color class, e.g., 'bg-blue-500'
}

interface SummaryStat {
  label: string;
  value: number | string;
  colorClass?: string; // Tailwind text color class, e.g., 'text-blue-600'
}

const ResultsCard: React.FC = () => {
  const overallScore = 40;

  const individualScores: ScoreItem[] = [
    { name: 'Academic Skills', score: 40, color: 'bg-blue-500' },
    { name: 'Brain Development', score: 60, color: 'bg-yellow-400' },
    { name: 'Personality Development', score: 50, color: 'bg-pink-400' },
    { name: 'Emotional Intelligence', score: 20, color: 'bg-teal-400' }, // Using teal for a nice green
    { name: 'Pedagogy learning', score: 40, color: 'bg-orange-400' },
  ];

  const summaryStats: SummaryStat[] = [
    { label: 'Total Marks', value: 50 },
    { label: 'Total Questions', value: 50 },
    { label: 'Attempted', value: 40 },
    { label: 'Correct', value: 30, colorClass: 'text-blue-600' },
    { label: 'Incorrect', value: 10, colorClass: 'text-red-500' },
  ];

  const circumference = 2 * Math.PI * 15.9155; // Radius of the circle in SVG's viewBox

  return (
    <div className="bg-white rounded-4xl shadow-2xl p-6 md:p-8 w-full max-w-4xl font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FaStar className="text-yellow-400 text-3xl mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Results</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
        {/* Left Pane: Overall Score */}
        <div className="bg-slate-50 bg-grey rounded-4xl p-6 flex flex-col items-center justify-center md:w-1/3 space-y-3">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Background Circle */}
              <path
                className="text-gray-200"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5" 
              />
              {/* Progress Circle */}
              <path
                className="text-blue-500"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray={`${(overallScore / 100) * circumference}, ${circumference}`}
                strokeLinecap="round"
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <FaSmile className="text-blue-500 text-4xl" />
            </div>
          </div>
          <div className="text-4xl font-bold text-green-500 mt-2">{overallScore}%</div>
          <p className="text-sm text-gray-600 text-center max-w-xs">
            Great effort! A little more focus will take you to the top.
          </p>
        </div>

        {/* Right Pane: Individual Scores */}
        <div className="bg-slate-50 rounded-x2 rounded-4xl p-6 md:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-5">Individual Scores</h2>
          <div className="space-y-4">
            {individualScores.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <span className="text-xs font-medium text-gray-500">{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`${item.color} h-2.5 rounded-full`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Summary Stats */}
      <div className="bg-slate-50 rounded-4xl p-4 md:p-5 flex flex-wrap justify-around items-center text-center mb-8">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="p-2 min-w-[80px]">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.colorClass || 'text-gray-800'}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-full text-md transition duration-150 ease-in-out shadow-md hover:shadow-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;