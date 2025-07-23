import React, { useState } from 'react';

function Sidebar({ sidebarWidth, isSidebarExpanded, sidebarOpen, setSidebarHover, sidebarHover }) {
  // Dropdown state for Dashboards and Task
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-screen shadow-lg z-[1000] flex flex-col  pt-16 transition-all duration-300 overflow-y-auto`}
      style={{
        width: sidebarWidth,
        background: '#111c43'
      }}
      onMouseEnter={() => { if (!sidebarOpen) setSidebarHover(true); }}
      onMouseLeave={() => { if (!sidebarOpen) setSidebarHover(false); }}
    >
      {/* MAIN Section */}
      {isSidebarExpanded ? (
        <div className="px-4 py-2 text-xs font-extrabold text-gray-400 tracking-widest select-none">MAIN</div>
      ) : (
        <div className="flex justify-center py-2">
          <span className="w-2 h-2 rounded-full bg-gray-500 inline-block"></span>
        </div>
      )}
      {/* Dashboards with badge and dropdown submenu */}
      <div className={`px-2 ${!isSidebarExpanded ? "mb-6" : ""}`}>
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
          onClick={() => setDashboardOpen((prev) => !prev)}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Dashboard SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 9.75L12 3l9 6.75v9.75A1.5 1.5 0 0119.5 21h-3.75a.75.75 0 01-.75-.75V15a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v5.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5V9.75z" />
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Dashboards</span>
              <span className="ml-auto bg-yellow-500 text-xs px-2 py-0.5 rounded-full font-bold">12</span>
              <span className="ml-2">
                <i className={`fas fa-chevron-${dashboardOpen ? 'down' : 'right'} text-xs`} />
              </span>
            </>
          )}
        </div>
        {/* Dashboards submenu as dropdown */}
        {isSidebarExpanded && dashboardOpen && (
          <div className="ml-6 mt-1 space-y-2">
            <div className="flex items-center text-white text-[12px] py-1 font-bold cursor-pointer">
              <span className="mr-2 text-xs">●</span>CRM
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Ecommerce
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Crypto
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Jobs
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>NFT
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Sales
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Analytics
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Projects
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>HRM
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Stocks
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Courses
            </div>
            <div className="flex items-center text-gray-300 text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs">●</span>Personal
            </div>
          </div>
        )}
      </div>

      {/* PAGES Section */}
      {isSidebarExpanded ? (
        <div className="px-4 py-2 mt-4 text-xs font-extrabold text-gray-400 tracking-widest select-none">PAGES</div>
      ) : (
        <div className="flex justify-center py-2">
          <span className="w-2 h-2 rounded-full bg-gray-500 inline-block"></span>
        </div>
      )}
      <div className={`px-2 ${!isSidebarExpanded ? "mb-6" : ""} space-y-4`}>
        {/* Pages link (no dropdown) */}
        <div className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}>
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Pages SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 3v5h5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Pages</span>
            </>
          )}
        </div>
        {/* Task link (dropdown) */}
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
          onClick={() => setTaskOpen((prev) => !prev)}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Task SVG icon (clipboard with check) */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="9" y="2" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M9.5 13.5l2 2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Task</span>
              <span className="ml-2">
                <i className={`fas fa-chevron-${taskOpen ? 'down' : 'right'} text-xs`} />
              </span>
            </>
          )}
        </div>
        {/* Task submenu as dropdown */}
        {isSidebarExpanded && taskOpen && (
          <div className="ml-6 mt-1 space-y-2">
            <div className="flex items-center text-white text-[12px] py-1 font-bold cursor-pointer">
              <span className="mr-2 text-xs text-white">●</span>All Tasks
            </div>
            <div className="flex items-center text-white text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs text-white">●</span>My Tasks
            </div>
            <div className="flex items-center text-white text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs text-white">●</span>Completed
            </div>
            <div className="flex items-center text-white text-[12px] py-1 cursor-pointer">
              <span className="mr-2 text-xs text-white">●</span>Archived
            </div>
          </div>
        )}
        {/* Authentication link (no dropdown) */}
        <div className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}>
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Authentication SVG icon (fingerprint) */}
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 11.5v2.5" />
                <path d="M12 17v.01" />
                <path d="M8.5 17c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5" />
                <path d="M7 13.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" />
                <path d="M5.5 10.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
                <path d="M8.5 13.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5" />
                <path d="M12 21c-4.418 0-8-3.582-8-8" />
              </g>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Authentication</span>
            </>
          )}
        </div>
        {/* Error link dropdown */}
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Error SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Error</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
        {/* General heading */}
        {isSidebarExpanded && (
          <div className="px-4 py-2 mt-4 text-xs font-extrabold text-gray-400 tracking-widest select-none">GENERAL</div>
        )}
        {/* General links dropdowns */}
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* UI Elements SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>UI Elements</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Utilities SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Utilities</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Forms SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Forms</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Advanced UI SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Advanced UI</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
        <div
          className={`flex items-center px-2 py-2 rounded-lg text-white text-[13px] font-medium hover:bg-[#1a2956] cursor-pointer ${isSidebarExpanded ? '' : 'justify-center gap-8'}`}
        >
          <span className={isSidebarExpanded ? "mr-2" : ""}>
            {/* Widget SVG icon */}
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          {isSidebarExpanded && (
            <>
              <span>Widget</span>
              <span className="ml-2">
                <i className="fas fa-chevron-right text-xs" />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;



