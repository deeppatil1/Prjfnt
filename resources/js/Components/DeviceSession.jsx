import React from 'react';

const DeviceSession = () => (
  <div id='last' className="bg-white rounded-xl shadow-sm w-full mx-auto p-3 sm:p-4 md:p-6 flex flex-col justify-between">
    {/* Header */}
    <div className="flex justify-between items-center mb-3 sm:mb-4">
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">Sessions By Device</h3>
      <button className="bg-violet-100 text-violet-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md font-medium hover:bg-violet-500 hover:text-white transition flex items-center gap-1">
        View All
      </button>
    </div>

    <div className="border-t border-gray-200 mb-3 sm:mb-4"></div>

    {/* Chart */}
    <div className="flex justify-center mb-3 sm:mb-4">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="url(#mobileBlueCyan)"
            strokeWidth="25"
            strokeDasharray="320 150"
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
          />
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="25"
            strokeDasharray="83 387"
            strokeDashoffset="-320"
            transform="rotate(-90 100 100)"
          />
          {/* Desktop - 10.5% - Green */}
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="#10b981"
            strokeWidth="25"
            strokeDasharray="49 421"
            strokeDashoffset="-403"
            transform="rotate(-90 100 100)"
          />
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="#f97316"
            strokeWidth="25"
            strokeDasharray="24 446"
            strokeDashoffset="-452"
            transform="rotate(-90 100 100)"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="mobileBlueCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm font-medium text-gray-500">Total</p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">4136</p>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-200 mb-3 sm:mb-4"></div>

    {/* Legend – Mobile, Tablet, Desktop on one line; Others centered below */}
    <div className="space-y-2 sm:space-y-3">
      <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
        <div>
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">68.3%</span>
          <span className="block text-xs sm:text-sm text-gray-500">Mobile</span>
        </div>
        <div>
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">17.68%</span>
          <span className="block text-xs sm:text-sm text-gray-500">Tablet</span>
        </div>
        <div>
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">10.5%</span>
          <span className="block text-xs sm:text-sm text-gray-500">Desktop</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center">
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-800">5.16%</span>
          <span className="block text-xs sm:text-sm text-gray-500">Others</span>
        </div>
      </div>
    </div>
  </div>
);

export default DeviceSession;
