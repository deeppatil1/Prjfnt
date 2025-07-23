import React from 'react';

const Impression = ({
  impressionsPercentage,
  circumference,
  impressionsStrokeDashoffset
}) => (
  <div id='imp' className="bg-white rounded-xl shadow p-4 w-60 flex items-center gap-3">
    <div className="w-16 h-16 flex-shrink-0">
      <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#e5f7fd"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#00c0f1"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={impressionsStrokeDashoffset}
          transform="rotate(-90 20 20)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill="#00c0f1"
        >
          {impressionsPercentage}%
        </text>
      </svg>
    </div>
    <div>
      <p className="text-gray-500 text-sm">Impressions</p>
      <p className="text-xl font-semibold text-gray-800">9,903</p>
    </div>
  </div>
);

export default Impression;
