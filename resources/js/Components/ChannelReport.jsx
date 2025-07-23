import React from 'react';

const channels = [
	{
		icon: (
			<span className="bg-purple-100 text-purple-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<circle cx="11" cy="11" r="8" stroke="currentColor" />
					<line
						x1="21"
						y1="21"
						x2="16.65"
						y2="16.65"
						stroke="currentColor"
					/>
				</svg>
			</span>
		),
		name: 'Organic Search',
		sessions: 782,
		bounce: '32.09%',
		duration: '0 hrs : 0 mins : 32 secs',
		goal: { value: 278, color: 'bg-purple-100 text-purple-500' },
		pages: 2.9,
	},
	{
		icon: (
			<span className="bg-cyan-100 text-cyan-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<circle cx="12" cy="12" r="10" stroke="currentColor" />
					<circle cx="12" cy="12" r="4" stroke="currentColor" />
				</svg>
			</span>
		),
		name: 'Direct',
		sessions: 882,
		bounce: '39.38%',
		duration: '0 hrs : 2 mins : 45 secs',
		goal: { value: 782, color: 'bg-cyan-100 text-cyan-500' },
		pages: 1.5,
	},
	{
		icon: (
			<span className="bg-green-100 text-green-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" />
				</svg>
			</span>
		),
		name: 'Referral',
		sessions: 322,
		bounce: '22.67%',
		duration: '0 hrs : 38 mins : 28 secs',
		goal: { value: 622, color: 'bg-green-100 text-green-500' },
		pages: 3.2,
	},
	{
		icon: (
			<span className="bg-blue-100 text-blue-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<circle cx="12" cy="12" r="10" stroke="currentColor" />
					<path d="M8 12h8M12 8v8" stroke="currentColor" />
				</svg>
			</span>
		),
		name: 'Social',
		sessions: 389,
		bounce: '25.11%',
		duration: '0 hrs : 12 mins : 89 secs',
		goal: { value: 142, color: 'bg-blue-100 text-blue-500' },
		pages: 1.4,
	},
	{
		icon: (
			<span className="bg-yellow-100 text-yellow-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<rect
						x="3"
						y="7"
						width="18"
						height="10"
						rx="2"
						stroke="currentColor"
					/>
					<path d="M3 7l9 6 9-6" stroke="currentColor" />
				</svg>
			</span>
		),
		name: 'Email',
		sessions: 378,
		bounce: '23.79%',
		duration: '0 hrs : 14 mins : 27 secs',
		goal: { value: 178, color: 'bg-yellow-100 text-yellow-500' },
		pages: 1.6,
	},
	{
		icon: (
			<span className="bg-red-100 text-red-500 rounded-full p-2">
				<svg
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<rect
						x="3"
						y="7"
						width="18"
						height="10"
						rx="2"
						stroke="currentColor"
					/>
					<path d="M3 7l9 6 9-6" stroke="currentColor" />
				</svg>
			</span>
		),
		name: 'Paid Search',
		sessions: 488,
		bounce: '28.77%',
		duration: '0 hrs : 16 mins : 28 secs',
		goal: { value: 578, color: 'bg-red-100 text-red-500' },
		pages: 2.5,
	},
];

function ChannelReport() {
	return (
		<div className="bg-white rounded-xl w-full p-2 sm:p-4 min-h-[500px] flex flex-col">
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2">
				<span className="font-semibold text-base sm:text-lg text-gray-800">
					Visitors By Channel Report
				</span>
				<div className="flex flex-col sm:flex-row gap-2">
					<input
						type="text"
						placeholder="Search Here"
						className="border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm bg-white focus:outline-none w-full sm:w-[180px]"
					/>
					<button className="bg-purple-500 text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold">
						Sort By ▼
					</button>
				</div>
			</div>
			<div className="bg-white rounded-lg shadow-sm overflow-x-auto">
				<table className="min-w-[600px] w-full text-xs sm:text-sm">
					<thead>
						<tr className="text-gray-800 font-semibold border-b">
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">S.No</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Channel
							</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Sessions
							</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Bounce Rate
							</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Avg Session Duration
							</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Goal Completed
							</th>
							<th className="py-2 sm:py-3 px-1 sm:px-2 text-left">
								Pages Per Session
							</th>
						</tr>
					</thead>
					<tbody>
						{channels.map((ch, idx) => (
							<tr key={ch.name} className="border-b last:border-b-0">
								<td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-800">
									{idx + 1}
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2 flex items-center gap-1 sm:gap-2 font-medium text-gray-800">
									{ch.icon}
									{ch.name}
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-800">
									{ch.sessions}
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-800">
									{ch.bounce}
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-800">
									{ch.duration}
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2">
									<span
										className={`px-2 py-1 rounded text-xs font-semibold ${ch.goal.color}`}
									>
										{ch.goal.value}
									</span>
								</td>
								<td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-700">
									{ch.pages}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex flex-col sm:flex-row items-center justify-between px-1 sm:px-2 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 gap-2">
					<span>Showing 6 Entries &rarr;</span>
					<div className="flex items-center gap-1 sm:gap-2">
						<span>Prev</span>
						<span className="bg-purple-500 text-white px-2 sm:px-3 py-1 rounded font-semibold">
							1
						</span>
						<span>2</span>
						<span className="text-purple-500 cursor-pointer">next</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChannelReport;
