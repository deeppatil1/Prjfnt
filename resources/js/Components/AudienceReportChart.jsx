import React, { useEffect, useRef, useState } from 'react';

const barData = [20, 8, 21, 25, 9, 20, 28, 19, 26, 18, 32, 21];
const lineData = [45, 55, 43, 65, 20, 38, 40, 28, 41, 55, 40, 32];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getLinePoints(data, width, height, yMax) {
  const step = width / (data.length - 1);
  return data.map((v, i) => {
    const x = i * step;
    const y = height - (v / yMax) * height;
    return [x, y];
  });
}

function getLinePath(points) {
  return points.reduce(
    (acc, [x, y], i) => acc + (i === 0 ? `M${x},${y}` : ` L${x},${y}`),
    ''
  );
}

const Y_MAX = 80;
const Y_LABELS = [0, 20, 40, 60, 80];

const AudienceReportChart = () => {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ w: 600, h: 200, axis: 36 });

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      setDims({
        w: Math.max(clientWidth, 300),
        h: Math.max(clientHeight - 40, 150),
        axis: Math.max(clientWidth * 0.06, 36)
      });
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const barW = Math.max(dims.w * 0.035, 16);
  const barStep = (dims.w - barW) / (barData.length - 1);
  const linePoints = getLinePoints(lineData, dims.w, dims.h, Y_MAX);

  return (
    <div id='sar' className="bg-white shadow-md rounded-xl p-4 md:p-6">
      <div className="flex justify-between items-center pb-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
          Audience Report
        </h3>
        <button className="bg-violet-100 text-violet-600 text-sm px-3 py-1 rounded-md font-medium hover:bg-violet-500 hover:text-white transition flex items-center gap-1">
          Export
        </button>
      </div>

      <div className="flex justify-center gap-8 mb-2">
        <span className="flex items-center gap-1 text-purple-600 text-sm">
          <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span>Views
        </span>
        <span className="flex items-center gap-1 text-cyan-400 text-sm">
          <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span>Followers
        </span>
      </div>

      <div ref={containerRef} className="w-full h-[200px] md:h-[260px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${dims.w} ${dims.h + 40}`} preserveAspectRatio="xMidYMin meet">
          {/* Y axis line */}
          <line x1={dims.axis} y1={0} x2={dims.axis} y2={dims.h} stroke="#d1d5db" strokeWidth="2" />
          {/* Y labels & grid */}
          {Y_LABELS.map((y, i) => {
            const yPos = dims.h - (y / Y_MAX) * dims.h;
            return (
              <g key={i}>
                <text x={dims.axis - 8} y={yPos + 5} textAnchor="end" fontSize="12" fill="#888">{y}</text>
                <line x1={dims.axis} x2={dims.w} y1={yPos} y2={yPos} stroke="#e5e7eb" strokeDasharray="4 4" />
              </g>
            );
          })}
          {/* Bars */}
          {barData.map((v, i) => (
            <rect
              key={i}
              x={dims.axis + i * barStep}
              y={dims.h - (v / Y_MAX) * dims.h}
              width={barW}
              height={(v / Y_MAX) * dims.h}
              fill="#8b5cf6"
              rx="4"
            />
          ))}
          {/* Line */}
          <path
            d={getLinePath(linePoints.map(([x, y]) => [x + dims.axis, y]))}
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            style={{ filter: 'drop-shadow(0 1px 2px #06b6d455)' }}
          />
          {/* Dots */}
          {linePoints.map(([x, y], i) => (
            <circle key={i} cx={x + dims.axis} cy={y} r="3" fill="#06b6d4" />
          ))}
          {/* X labels */}
          {months.map((m, i) => (
            <text
              key={m}
              x={dims.axis + i * barStep + barW / 2}
              y={dims.h + 18}
              textAnchor="middle"
              fontSize="12"
              fill="#888"
            >
              {m}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AudienceReportChart;
          
