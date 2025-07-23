import React from 'react';

const BounceRate = () => (
  <div id='bounce' className="bg-white shadow-md rounded-lg p-4 w-72 flex items-center ">
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-lg text-purple-600 font-semibold mb-0">Bounce Rate</h3>
        <div id='pr' className="text-3xl font-bold text-gray-900 mt-1 mb-0">77.3%</div>
      </div>
      <svg viewBox="0 0 120 32" width="60" height="32" fill="none" className="ml-2">
        <path
          d="M0 28 Q15 18 30 24 T60 24 T90 20 T120 28"
          stroke="#c4b5fd"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
    <div id='pl' className="text-orange-400 text-xs font-medium flex items-center gap-1 mt-2">
      +0.59
      <svg width="16" height="16" className="inline" fill="none" viewBox="0 0 16 16">
        <path d="M8 4l4 6H4l4-6z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export default BounceRate;
