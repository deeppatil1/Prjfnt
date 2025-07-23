import React from 'react';

const TotalUsers = () => (
  <div id='total' className="bg-white shadow-md rounded-lg p-4  flex items-center justify-between w-72 ">
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-lg text-gray-800 font-semibold mb-0">Total Users</h3>
        <div className="text-3xl font-bold text-gray-900 mt-1 mb-0">9,789</div>
      </div>
      <div className="text-green-500 text-xs font-medium flex items-center gap-1 mt-2">
        +0.892
        <svg width="16" height="16" className="inline" fill="none" viewBox="0 0 14 14">
          <path d="M2 8l5-5 5 5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <svg viewBox="0 0 100 40" width="90" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 35 L25 25 L45 30 L65 20 L85 30"
        stroke="#38BDF8"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default TotalUsers;
