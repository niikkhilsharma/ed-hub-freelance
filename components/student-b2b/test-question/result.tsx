import React from 'react';

interface ScoreItem {
  name: string;
  score: number;
  color: string;
}

interface SummaryStat {
  label: string;
  value: number | string;
  colorClass?: string;
}

const ResultsCard: React.FC = () => {
  const overallScore = 40;

  const individualScores: ScoreItem[] = [
    { name: 'Academic Skills', score: 40, color: 'bg-blue-500' },
    { name: 'Brain Development', score: 60, color: 'bg-yellow-400' },
    { name: 'Personality Development', score: 50, color: 'bg-pink-400' },
    { name: 'Emotional Intelligence', score: 20, color: 'bg-teal-400' },
    { name: 'Pedagogy learning', score: 40, color: 'bg-orange-400' },
  ];

  const summaryStats: SummaryStat[] = [
    { label: 'Total Marks', value: 50 },
    { label: 'Total Questions', value: 50 },
    { label: 'Attempted', value: 40 },
    { label: 'Correct', value: 30, colorClass: 'text-blue-600' },
    { label: 'Incorrect', value: 10, colorClass: 'text-red-500' },
  ];

  return (
    <div className="bg-white rounded-4xl shadow-2xl p-6 md:p-8 w-full max-w-4xl font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#FACC15" strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 ml-3">Results</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
        {/* Left: Overall Score */}
        <div className="bg-slate-50 rounded-4xl p-6 flex flex-col items-center justify-center md:w-1/3 space-y-4">
          {/* Half-circle arc + smile */}
          <div className="relative w-36 h-24 flex items-end justify-center">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 44 22" preserveAspectRatio="xMidYMid meet">
              <path
                d="M2 22 A20 20 0 0 1 42 22"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
              />
              <path
                d="M2 22 A20 20 0 0 1 42 22"
                fill="none"
                stroke="#3366FF"
                strokeWidth="4"
                strokeDasharray={`${(overallScore / 100) * 63}, 63`}
                strokeLinecap="round"
              />
            </svg>

            {/* Smile SVG */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="22" fill="#E9EDF0" />
              <g clipPath="url(#clip0)">
                <path d="M22.0002 33.6668C28.4435 33.6668 33.6668 28.4435 33.6668 22.0002C33.6668 15.5568 28.4435 10.3335 22.0002 10.3335C15.5568 10.3335 10.3335 15.5568 10.3335 22.0002C10.3335 28.4435 15.5568 33.6668 22.0002 33.6668Z" stroke="#3366FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3335 24.3335C17.3335 24.3335 19.0835 26.6668 22.0002 26.6668C24.9168 26.6668 26.6668 24.3335 26.6668 24.3335" stroke="#3366FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 18.5H18.5117" stroke="#3366FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25.5 18.5H25.5117" stroke="#3366FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="28" height="28" fill="white" transform="translate(8 8)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="text-4xl font-bold text-green-500">{overallScore}%</div>
          <p className="text-sm text-gray-600 text-center max-w-xs">
            Great effort! A little more focus will take you to the top.
          </p>
        </div>

        {/* Right: Individual Scores */}
<div className="bg-slate-50 rounded-4xl p-6 md:w-2/3">
  <h2 className="text-xl font-semibold text-gray-800 mb-5">Individual Scores</h2>
  <div className="space-y-4">
    {individualScores.map((item) => (
      <div key={item.name} className="flex items-center gap-4">
        {/* Title aligned right */}
        <div className="w-2/5 text-sm font-bold text-gray-700 text-right">
          {item.name}
        </div>

        {/* Progress Bar */}
        <div className="flex-1 flex items-center gap-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${item.color} h-2 rounded-full`}
              style={{ width: `${item.score}%` }}
            ></div>
          </div>

          {/* Percentage */}
          <div className="text-xs font-medium text-gray-500 min-w-[30px] text-right">
            {item.score}%
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Summary Stats */}
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
