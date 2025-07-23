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
import Upgrade from '../Components/Upgrade';
import Impression from '../Components/Impression';
import Clicks from '../Components/Clicks';
import TotalUsers from '../Components/TotalUsers';
import LiveVisitor from '../Components/LiveVisitor';
import BounceRate from '../Components/BounceRate';

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

        <div id='firstsec' className='flex gap-6 justify-center w-[97%] mx-auto'>

          <div id='firstCol' className='w-[55%] flex flex-col gap-6 bg-purple-500'>

            <div className='grid  grid-cols-1 md:grid-cols-3 gap-6 bg-orange-500'>
              <TotalUsers />

              <LiveVisitor />

              <BounceRate />

             
            </div>

            <AudienceReportChart />

          </div>

          <div id='secondcol' className='flex flex-col gap-6 bg-red-500' >
            <Upgrade />
            <Impression
              impressionsPercentage={impressionsPercentage}
              circumference={circumference}
              impressionsStrokeDashoffset={impressionsStrokeDashoffset}
            />
            <Clicks
              clicksPercentage={clicksPercentage}
              circumference={circumference}
              clicksStrokeDashoffset={clicksStrokeDashoffset}
            />

          </div>

          <DeviceSession />

        </div>

        <div
          id="secondsec"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 pt-8 px-2 md:px-4"
        >
          <div className="w-full">
            <TopCountry />
          </div>
          <div className="w-full">
            <TrafficSource />
          </div>
          <div className="w-full md:col-span-2 lg:col-span-1">
            <SessionDuration />
          </div>
        </div>

        <div id='thirdsec' className='grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pt-8 px-4'>
          <div className="w-full lg:col-span-9">
            <ChannelReport />
          </div>
          <div className="w-full lg:col-span-3">
            <Visitor />
          </div>
        </div>

        <div id='footer' >
          <div className="text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-center bg-white mt-8 py-3 sm:py-4 w-full px-2 text-center gap-1">
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
 