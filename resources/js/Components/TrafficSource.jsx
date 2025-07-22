import React from 'react';

const trafficData = [
  {
    name: 'Google',
    iconBg: 'bg-blue-500',
    iconLetter: 'G',
    sessions: 23379,
    sessionsUp: true,
    traffic: 'w-full',
    trafficColor: 'bg-purple-500',
  },
  {
    name: 'Safari',
    iconBg: 'bg-cyan-500',
    iconLetter: 'S',
    sessions: 78973,
    sessionsUp: true,
    traffic: 'w-3/5',
    trafficColor: 'bg-purple-400',
  },
  {
    name: 'Opera',
    iconBg: 'bg-green-500',
    iconLetter: 'O',
    sessions: 12457,
    sessionsUp: false,
    traffic: 'w-2/5',
    trafficColor: 'bg-purple-300',
  },
  {
    name: 'Edge',
    iconBg: 'bg-blue-400',
    iconLetter: 'E',
    sessions: 8570,
    sessionsUp: true,
    traffic: 'w-2/5',
    trafficColor: 'bg-purple-400',
  },
  {
    name: 'Firefox',
    iconBg: 'bg-orange-500',
    iconLetter: 'F',
    sessions: 6135,
    sessionsUp: false,
    traffic: 'w-1/2',
    trafficColor: 'bg-purple-400',
  },
  {
    name: 'Ubuntu',
    iconBg: 'bg-red-500',
    iconLetter: 'U',
    sessions: 4789,
    sessionsUp: true,
    traffic: 'w-1/4',
    trafficColor: 'bg-purple-300',
  },
];

function TrafficSource() {
  return (
    <div className="bg-white rounded-xl shadow p-2 sm:p-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center font-semibold text-gray-800 text-xs sm:text-sm">
          <span className="w-1 h-4 sm:h-5 bg-orange-500 rounded-sm mr-2 sm:mr-3"></span>
          Traffic Sources
        </div>
        <a href="#" className="text-xs sm:text-sm text-gray-500">View All </a>
      </div>

      <hr className="border-gray-200" />

      <div className="grid grid-cols-3 text-xs sm:text-sm text-black font-bold px-2 sm:px-4 py-2 sm:py-3">
        <div>Browser</div>
        <div className="text-right pr-2 sm:pr-4">Sessions</div>
        <div className="text-right">Traffic</div>
      </div>

      <hr className="border-gray-200 pb-2 sm:pb-4" />

      <div className="space-y-3 sm:space-y-5">
        {trafficData.map((row, idx) => (
          <div key={row.name} className="grid grid-cols-3 items-center gap-4 sm:gap-8">
            {/* Browser */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${row.iconBg} flex items-center justify-center text-white text-xs sm:text-sm font-semibold`}>
                {row.iconLetter}
              </div>
              <span className="font-medium text-xs sm:text-sm text-gray-800">{row.name}</span>
            </div>
            {/* Sessions */}
            <div className="flex items-center justify-end space-x-1 pr-2 sm:pr-4">
              {row.sessionsUp ? (
                <svg width="12" height="12" className="text-green-500" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M6 2l3 5H3l3-5z" />
                </svg>
              ) : (
                <svg width="12" height="12" className="text-red-500" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M6 10L3 5h6l-3 5z" />
                </svg>
              )}
              <span className={`font-medium ${row.sessionsUp ? 'text-green-500' : 'text-red-500'}`}>
                {row.sessions.toLocaleString()}
              </span>
            </div>
            {/* Traffic */}
            <div className="flex justify-end">
              <div className="w-16 sm:w-20 md:w-24 h-2 bg-gray-200 rounded-full">
                <div className={`h-2 rounded-full ${row.traffic} ${row.trafficColor}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficSource;
  