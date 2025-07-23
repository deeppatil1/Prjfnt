import React from 'react';

const Clicks = ({
  clicksPercentage,
  circumference,
  clicksStrokeDashoffset
}) => (
  <div id='clicks' className="bg-white rounded-xl shadow p-4 w-60 flex items-center gap-3">
    <div className="w-16 h-16 flex-shrink-0">
      <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#fef3cd"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={clicksStrokeDashoffset}
          transform="rotate(-90 20 20)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill="#f59e0b"
        >
          {clicksPercentage}%
        </text>
      </svg>
    </div>
    <div>
      <p className="text-gray-500 text-sm">Clicks</p>
      <p className="text-xl font-semibold text-gray-800">16,789</p>
    </div>
  </div>
);

export default Clicks;
