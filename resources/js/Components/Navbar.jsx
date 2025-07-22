import React from 'react';

function Navbar({ sidebarWidth, sidebarOpen, sidebarHover, setSidebarOpen, themeIcon, setThemeIcon }) {
  const isSidebarExpanded = sidebarOpen || sidebarHover;

  return (
    <>
      <style>
        {`
          @keyframes rotateSettings {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .rotating-settings {
            animation: rotateSettings 4s linear infinite;
            display: inline-block;
          }
        `}
      </style>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow flex justify-between items-center h-[55px] px-4 md:px-8">
        <div
          className="relative transition-transform duration-300"
          style={{
            transform: `translateX(${sidebarWidth}px)`
          }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-transparent border-none w-8 h-8 flex items-center justify-center cursor-pointer mr-2 p-0"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <span className="block w-5 h-5 relative">
              {/* Top bar */}
              <span
                className="absolute left-0 top-[3px] w-5 h-0.5 rounded bg-gray-800 transition-transform duration-300"
                style={{
                  transform: sidebarOpen ? 'rotate(45deg) translateY(7px)' : 'none'
                }}
              />
              {/* Middle bar */}
              <span
                className={`absolute left-0 top-[9px] w-5 h-0.5 rounded bg-gray-800 transition-opacity duration-300 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Bottom bar */}
              <span
                className="absolute left-0 top-[15px] w-5 h-0.5 rounded bg-gray-800 transition-transform duration-300"
                style={{
                  transform: sidebarOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
                }}
              />
            </span>
          </button>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2">
              <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="15.24" y1="15.24" x2="21" y2="21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          
         
          <a href="#" title="Language" className="flex items-center gap-1 text-[#5A6983] font-medium">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{
                borderRadius: '50%',
                border: '1px solid #e5e7eb',
                background: '#fff',
                boxSizing: 'border-box',
                minWidth: 20,
                minHeight: 20,
              }}
            >
             
              <rect y="0" width="24" height="2.4" fill="#b22234" />
              <rect y="4.8" width="24" height="2.4" fill="#b22234" />
              <rect y="9.6" width="24" height="2.4" fill="#b22234" />
              <rect y="14.4" width="24" height="2.4" fill="#b22234" />
              <rect y="19.2" width="24" height="2.4" fill="#b22234" />
              
              <rect x="0" y="0" width="10" height="10" fill="#3c3b6e" />
              
              <circle cx="2" cy="2" r="0.7" fill="#fff" />
              <circle cx="5" cy="2" r="0.7" fill="#fff" />
              <circle cx="8" cy="2" r="0.7" fill="#fff" />
              <circle cx="2" cy="5" r="0.7" fill="#fff" />
              <circle cx="5" cy="5" r="0.7" fill="#fff" />
              <circle cx="8" cy="5" r="0.7" fill="#fff" />
              <circle cx="2" cy="8" r="0.7" fill="#fff" />
              <circle cx="5" cy="8" r="0.7" fill="#fff" />
              <circle cx="8" cy="8" r="0.7" fill="#fff" />
            </svg>
            <span className="ml-1 text-[#5A6983] font-semibold text-xs">EN</span>
          </a>
         
          <a
            href="#"
            title="Theme"
            onClick={e => {
              e.preventDefault();
              setThemeIcon((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            {!themeIcon ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3
                  7 7 0 0 0 21 12.79Z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </a>

          <a href="#" title="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 6h14l-1.5 9h-11L5 4H2" />
              <circle cx="10" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
          </a>

          <a href="#" title="Notifications" className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>

            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">4</span>
            </span>
          </a>

          <a href="#" title="Apps">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="6" height="6" />
              <rect x="15" y="3" width="6" height="6" />
              <rect x="3" y="15" width="6" height="6" />
              <rect x="15" y="15" width="6" height="6" />
            </svg>
          </a>

          <a href="#" title="Fullscreen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" stroke="#536485" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 9 4 4 9 4" />
              <polyline points="20 9 20 4 15 4" />
              <polyline points="4 15 4 20 9 20" />
              <polyline points="20 15 20 20 15 20" />
            </svg>
          </a>

          <div className="flex items-center gap-5">
           
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover border border-gray-300"
            />

            <div className="flex flex-col items-start leading-none">
              <span className="font-bold text-sm">Deep Patil</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>

            <a href="#" title="Settings" className="ml-2">
              <span className="rotating-settings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5A6983"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 
             2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 
             1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 
             1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 
             2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 
             1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 
             1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 
             2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 
             1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 
             1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 
             1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 
             1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </span>
            </a>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
