import React from 'react';

const countries = [
  { name: 'United States', flag: 'https://flagcdn.com/us.svg', visitors: '32,190' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg', visitors: '8,798' },
  { name: 'Mexico', flag: 'https://flagcdn.com/mx.svg', visitors: '16,885' },
  { name: 'Uae', flag: 'https://flagcdn.com/ae.svg', visitors: '14,885' },
  { name: 'Argentina', flag: 'https://flagcdn.com/ar.svg', visitors: '17,578' },
  { name: 'Russia', flag: 'https://flagcdn.com/ru.svg', visitors: '10,118' },
  { name: 'China', flag: 'https://flagcdn.com/cn.svg', visitors: '6,578' },
  { name: 'France', flag: 'https://flagcdn.com/fr.svg', visitors: '2,345' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg', visitors: '1,678' },
];

function Visitor() {
  return (
    <div className="bg-white rounded-xl w-full p-2 sm:p-4 shadow-sm flex flex-col min-h-[500px]">
      <div className="flex justify-between items-center mb-3 sm:mb-5">
        <div className="flex items-center gap-1 sm:gap-2 font-semibold text-gray-800 text-sm sm:text-base">
          <span className="w-1 h-4 sm:h-5 bg-purple-400 rounded-sm"></span>
          Visitors By Countries
        </div>
        <button className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-1">
          View All 
        </button>
      </div>
      <hr className='pb-2 sm:pb-4'/>
      <ul className="space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
        {countries.map((c, i) => (
          <li key={c.name} className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={c.flag} alt={c.name} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-200 bg-white" />
              <span className="text-xs sm:text-[15px] font-thin text-gray-500">{c.name}</span>
            </div>
            <span className="bg-[#f0f1f7] text-gray-500 text-xs font-thin px-2 sm:px-3 py-1 rounded-md">
              {c.visitors}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Visitor;
