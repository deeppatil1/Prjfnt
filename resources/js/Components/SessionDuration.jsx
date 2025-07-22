import React from 'react';

function SessionDuration() {
  return (
    <div className="bg-white rounded-xl shadow w-full max-w-4xl mx-auto p-3 sm:p-4 md:p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
        <div className="flex items-center font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
          <span className="w-1 h-4 sm:h-5 bg-cyan-500 rounded-sm mr-1 sm:mr-2"></span>
          Sessions Duration By New Users
        </div>
        <a href="#" className="text-xs sm:text-sm text-gray-500">View All</a>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-2 sm:mb-3 px-1">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></span>
          <span>New Users</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500"></span>
          <span>Sessions</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></span>
          <span>Avg Session Duration</span>
        </div>
      </div>

      {/* Chart (Static SVG) */}
      <div className="overflow-x-auto rounded-md">
        <svg 
          viewBox="0 0 600 300" 
          className="w-full h-48 sm:h-56 md:h-72 lg:h-80 min-w-[350px] sm:min-w-[500px]" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Gridlines */}
          <g stroke="#eee" strokeWidth="1">
            <line x1="0" y1="60" x2="600" y2="60"/>
            <line x1="0" y1="120" x2="600" y2="120"/>
            <line x1="0" y1="180" x2="600" y2="180"/>
            <line x1="0" y1="240" x2="600" y2="240"/>
          </g>

          {/* Axes Labels */}
          <g fill="#999" fontSize="8" className="sm:text-[10px] md:text-[12px]" fontFamily="sans-serif">
            <text x="0" y="290">Jan</text>
            <text x="50" y="290">Feb</text>
            <text x="100" y="290">Mar</text>
            <text x="150" y="290">Apr</text>
            <text x="200" y="290">May</text>
            <text x="250" y="290">Jun</text>
            <text x="300" y="290">Jul</text>
            <text x="350" y="290">Aug</text>
            <text x="400" y="290">Sep</text>
            <text x="450" y="290">Oct</text>
            <text x="500" y="290">Nov</text>
            <text x="550" y="290">Dec</text>
          </g>

          {/* Purple Line: New Users */}
          <path d="M0,200 L50,220 L100,150 L150,180 L200,220 L250,190 L300,100 L350,180 L400,160 L450,160 L500,210 L550,50"
                fill="none" stroke="#8e44ec" strokeWidth="2" />

          {/* Cyan Line: Sessions */}
          <path d="M0,160 L50,160 L100,180 L150,170 L200,140 L250,160 L300,150 L350,180 L400,140 L450,160 L500,150 L550,20"
                fill="none" stroke="#06b6d4" strokeWidth="2" />

          {/* Yellow Line: Avg Session Duration */}
          <path d="M0,170 L50,190 L100,170 L150,140 L200,210 L250,160 L300,170 L350,220 L400,180 L450,200 L500,210 L550,80"
                fill="none" stroke="#facc15" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default SessionDuration;
