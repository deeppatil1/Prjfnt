import React from 'react';

const Upgrade = () => (
  <div
    id='upgrade'
    className="relative bg-[#9257E5] text-white rounded-xl shadow-lg w-65 p-5 overflow-hidden"
  >
    <div className="absolute top-4 right-4">
      <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
        <path d="M12 2 L20 2 L20 38 L16 34 L12 38 Z" fill="#ef4444" />
        <path d="M22 2 L30 2 L30 38 L26 34 L22 38 Z" fill="#3b82f6" />
        <path d="M32 2 L40 2 L40 38 L36 34 L32 38 Z" fill="#10b981" />
        <circle cx="26" cy="50" r="16" fill="#fbbf24" />
        <path d="M26 42 l2.5 5 h5.5 l-4.5 3.5 l1.5 5.5 L26 52 l-5 4 l1.5-5.5 L18 47 h5.5 z" fill="#ffffff" />
      </svg>
    </div>

    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="1.5" fill="#a78bfa" opacity="0.3" />
            <circle cx="18" cy="18" r="2" fill="#a78bfa" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="absolute top-6 left-6 text-white opacity-20 text-lg">+</div>
      <div className="absolute bottom-12 left-8 text-white opacity-20 text-lg">+</div>
      <div className="absolute top-12 left-16 text-white opacity-20 text-sm">×</div>
      <div className="absolute bottom-6 right-16 text-white opacity-20 text-lg">+</div>
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="mt-6">
        <p className="text-sm font-normal text-gray-200">Plan is expiring !</p>
        <h2 className="text-base font-bold mt-">Upgrade to premium</h2>
      </div>
      <div className="pb-2 mt-6">
        <button className="bg-white text-[#9257E5] font-semibold py-1 px-3 rounded text-xs hover:bg-gray-100 transition">
          Upgrade Now
        </button>
      </div>
    </div>
  </div>
);

export default Upgrade;
