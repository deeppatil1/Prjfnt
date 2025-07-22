import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import AudienceReportChart from '../Components/AudienceReportChart';
import TrafficSource from '../Components/TrafficSource';
import SessionDuration from '../Components/SessionDuration';
import ChannelReport from '@/Components/ChannelReport';
import Visitor from '@/Components/Visitor';
import TopCountry from '../Components/TopCountry';
import DeviceSession from '../Components/DeviceSession';

function Frontend() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHover, setSidebarHover] = useState(false);
  const [themeIcon, setThemeIcon] = useState(false);

  const sidebarLinks = [
    { icon: '🏠', text: 'Home', href: '#' },
    { icon: '📊', text: 'Dashboard', href: '#' },
    { icon: '👤', text: 'Profile', href: '#' },
  ];

  const isSidebarExpanded = sidebarOpen || sidebarHover;
  const sidebarWidth = isSidebarExpanded ? 220 : 60;

  const impressionsPercentage = 48;
  const clicksPercentage = 65;

  const circumference = 100.53;
  const impressionsStrokeDashoffset = circumference - (impressionsPercentage / 100) * circumference;
  const clicksStrokeDashoffset = circumference - (clicksPercentage / 100) * circumference;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar
        sidebarWidth={sidebarWidth}
        sidebarOpen={sidebarOpen}
        sidebarHover={sidebarHover}
        setSidebarOpen={setSidebarOpen}
        themeIcon={themeIcon}
        setThemeIcon={setThemeIcon}
      />

      <div
        className="transition-all duration-300 bg-[#f0f1f7] min-h-[calc(100vh-64px)] overflow-x-auto"
        style={{
          marginLeft: `${sidebarWidth}px`
        }}
      >

        <div className='flex px-6 pb-8 items-center justify-between pt-20'>
          <span className='text-xl font-bold'>Analytics</span>
          <div id='ss1'>
            <span className='text-l text-violet-500 font-thin'>Dashboard</span>
            <svg
              className="inline mx-2"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M6 4l4 4-4 4" stroke="#5A6983" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 4l4 4-4 4" stroke="#5A6983" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className='text-sm font-extrabold'>Analytics</span>
          </div>
        </div>

        <div id='firstsec' className='flex gap-8 justify-center px-4'>

          <div id='firstCol' className='w-[55%] flex flex-col gap-6'>

            <div  className='flex gap-6'>

              <div className="bg-white shadow-md rounded-lg p-5 w-72 flex items-center justify-between">
                <div>
                  <h3 className="text-m text-gray-500 mb-1 font-bold">Total Users</h3>
                  <div className="text-2xl font-semibold text-gray-800">9,789</div>
                  <div className="text-green-500 text-sm font-medium mt-1">+0.892 ↑</div>
                </div>
                <svg viewBox="0 0 90 40" width="60" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 32 L15 24 L30 28 L45 22 L60 26 L75 20 L90 28"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="bg-white shadow-md rounded-lg p-5 w-72 flex items-center justify-between">
                <div>
                  <h3 className="text-m text-gray-500 mb-1 font-bold">Live Visitors</h3>
                  <div className="text-2xl font-semibold text-gray-800">12,240</div>
                  <div className="text-red-500 text-sm font-medium mt-1">+0.59 ↓</div>
                </div>
                <div className="bg-sky-400 p-3 rounded-md">
                  <svg
                    width="20"
                    height="20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-5 w-72 flex items-center justify-between">
                <div>
                  <h3 className="text-m text-purple-600 mb-1 font-bold">Bounce Rate</h3>
                  <div className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    77.3%
                    <span className="text-orange-400 text-sm font-medium">+0.59 ↑</span>
                  </div>
                </div>
                <svg viewBox="0 0 90 40" width="60" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 30 Q10 25 20 30 T40 30 T60 28 T80 32 T100 30"
                    stroke="#c4b5fd"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>

            <AudienceReportChart />

          </div>

          <div id='secondcol' className='flex flex-col gap-5' >

            <div
              id='upgrade'
              className="relative bg-[#9257E5] text-white rounded-xl shadow-lg w-65 p-5 overflow-hidden"
              style={{ minHeight: 180 }}
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
                <div className="mt-12">
                  <p className="text-sm font-normal text-gray-200">Plan is expiring !</p>
                  <h2 className="text-lg font-bold mt-1">Upgrade to premium</h2>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-px bg-white opacity-30"></div>
                </div>

                <div className="pb-2">
                  <button className="bg-white text-[#9257E5] font-semibold py-2 px-4 rounded text-sm hover:bg-gray-100 transition">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>

            <div id='imp' className="bg-white rounded-xl shadow p-4 w-60 flex items-center gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#e5f7fd"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#00c0f1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={impressionsStrokeDashoffset}
                    transform="rotate(-90 20 20)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="bold"
                    fill="#00c0f1"
                  >
                    {impressionsPercentage}%
                  </text>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Impressions</p>
                <p className="text-xl font-semibold text-gray-800">9,903</p>
              </div>
            </div>

            <div id='clicks' className="bg-white rounded-xl shadow p-4 w-60 flex items-center gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full" viewBox="0 0 40 40">

                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#fef3cd"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={clicksStrokeDashoffset}
                    transform="rotate(-90 20 20)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="bold"
                    fill="#f59e0b"
                  >
                    {clicksPercentage}%
                  </text>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Clicks</p>
                <p className="text-xl font-semibold text-gray-800">16,789</p>
              </div>
            </div>

          </div>

          <DeviceSession />

        </div>

        <div className='flex gap-7 pt-8 justify-between px-4'>

          <TopCountry />

          <TrafficSource />

          <SessionDuration />
        </div>

        <div className='flex gap-8 pt-8 px-4'>

          <ChannelReport />

          <Visitor />

        </div>

        <div className="  ">
          <div className="text-gray-500 text-base flex items-center justify-center bg-white mt-8 py-4 w-full">
            Copyright © 2025 <span className="font-bold text-gray-800">Ynex</span>. Designed with <span className="text-red-500">❤️</span> by <a href="#" className="text-purple-600 underline">Spruko</a> All rights reserved
          </div>
        </div>

      </div>
      <Sidebar
        sidebarLinks={sidebarLinks}
        sidebarWidth={sidebarWidth}
        isSidebarExpanded={isSidebarExpanded}
        sidebarOpen={sidebarOpen}
        setSidebarHover={setSidebarHover}
        sidebarHover={sidebarHover}
      />
    </div>
  );
}

export default Frontend;

          