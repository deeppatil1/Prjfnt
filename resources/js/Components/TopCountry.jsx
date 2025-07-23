import React from 'react';

const TopCountry = () => (
  <div id='tcs' className="bg-white rounded-xl shadow p-4 w-full">

    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center text-sm font-semibold text-gray-800">
        <span className="w-1 h-5 bg-cyan-500 rounded-sm mr-2"></span>
        Top Countries Sessions Vs Bounce Rate
      </div>
      <a href="#" className="text-xs text-gray-500">View All</a>
    </div>

    <div className="flex space-x-4 items-center justify-center mt-10 mb-2 pl-1">
      <div className="flex items-center text-sm text-gray-600">
        <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
        Session
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <span className="w-3 h-3 rounded-full bg-gray-300 mr-2"></span>
        Bounce Rate
      </div>
    </div>

    {/* Exact SVG Chart Replica */}
    <div className="relative h-64 mt-16 flex items-center justify-center min-w-0">
      <svg className="w-full h-full" viewBox="0 0 320 220" preserveAspectRatio="none">
      
        <g fontSize="10" fill="#a3a3a3">
          <text x="10" y="30" >30</text>
          <line x1="40" y1="30" x2="310" y2="30" stroke="#e5e7eb" strokeDasharray="4 2"/>
          <text x="10" y="70" >26</text>
          <line x1="40" y1="70" x2="310" y2="70" stroke="#e5e7eb" strokeDasharray="4 2"/>
          <text x="10" y="110" >22</text>
          <line x1="40" y1="110" x2="310" y2="110" stroke="#e5e7eb" strokeDasharray="4 2"/>
          <text x="10" y="150" >18</text>
          <line x1="40" y1="150" x2="310" y2="150" stroke="#e5e7eb" strokeDasharray="4 2"/>
        </g>
        {/* X-axis labels */}
        <g fontSize="10" fill="#6b7280">
          <text x="45" y="170">Jan</text>
          <text x="70" y="170">Feb</text>
          <text x="95" y="170">Mar</text>
          <text x="120" y="170">Apr</text>
          <text x="145" y="170">May</text>
          <text x="170" y="170">Jun</text>
          <text x="195" y="170">Jul</text>
          <text x="220" y="170">Aug</text>
          <text x="245" y="170">Sep</text>
          <text x="270" y="170">Oct</text>
          <text x="295" y="170">Nov</text>
          <text x="320" y="170">Dec</text>
        </g>
        {/* Gray bars for Bounce Rate */}
        <g>
          <rect x="45"  y="110" width="10" height="40" rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="70"  y="70"  width="10" height="80" rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="95"  y="150" width="10" height="0"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="120" y="50"  width="10" height="100" rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="145" y="30"  width="10" height="120" rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="170" y="70"  width="10" height="80"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="195" y="110" width="10" height="40"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="220" y="70"  width="10" height="80"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="245" y="110" width="10" height="40"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="270" y="150" width="10" height="0"   rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="295" y="110" width="10" height="40"  rx="4" fill="#e5e7eb" opacity="0.7"/>
          <rect x="320" y="110" width="10" height="40"  rx="4" fill="#e5e7eb" opacity="0.7"/>
        </g>
        {/* Purple session line */}
        <polyline
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="3"
          points="
            50,120
            75,130
            100,150
            125,70
            150,40
            175,80
            200,110
            225,120
            250,90
            275,120
            300,120
            325,120
          "
        />
        {/* Dots on session line */}
        <g>
          <circle cx="50"  cy="120" r="3" fill="#8b5cf6"/>
          <circle cx="75"  cy="130" r="3" fill="#8b5cf6"/>
          <circle cx="100" cy="150" r="3" fill="#8b5cf6"/>
          <circle cx="125" cy="70"  r="3" fill="#8b5cf6"/>
          <circle cx="150" cy="40"  r="3" fill="#8b5cf6"/>
          <circle cx="175" cy="80"  r="3" fill="#8b5cf6"/>
          <circle cx="200" cy="110" r="3" fill="#8b5cf6"/>
          <circle cx="225" cy="120" r="3" fill="#8b5cf6"/>
          <circle cx="250" cy="90"  r="3" fill="#8b5cf6"/>
          <circle cx="275" cy="120" r="3" fill="#8b5cf6"/>
          <circle cx="300" cy="120" r="3" fill="#8b5cf6"/>
          <circle cx="325" cy="120" r="3" fill="#8b5cf6"/>
        </g>
      </svg>
    </div>
  </div>
);

export default TopCountry;
