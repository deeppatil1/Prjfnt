import React from 'react';

const LiveVisitor = () => (
  <div id='live' className="bg-white shadow-md rounded-lg p-4 w-72 flex items-center justify-between">
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-lg text-gray-700 font-semibold mb-0">Live Visitors</h3>
        <div className="text-3xl font-bold text-gray-900 mt-1 mb-0">12,240</div>
      </div>
      <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2">
        +0.59
        <svg width="14" height="14" className="inline" fill="none" viewBox="0 0 14 14">
          <path d="M2 6l5 5 5-5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <div className="bg-sky-400 rounded-lg flex items-center justify-center w-12 h-12">
      <svg
        width="28"
        height="28"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  </div>
);

export default LiveVisitor;
