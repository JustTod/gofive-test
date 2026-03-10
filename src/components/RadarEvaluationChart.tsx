'use client';

import { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const data = [
  { criterion: 'Overall', self: 90, manager: 85 },
  { criterion: 'Teamwork', self: 80, manager: 78 },
  { criterion: 'Ownership', self: 95, manager: 92 },
  { criterion: 'Innovation', self: 85, manager: 88 },
  { criterion: 'Communication', self: 88, manager: 90 },
].map((item) => ({
  ...item,
  average: Math.round((item.self + item.manager) / 2),
}));

export default function RadarEvaluationChart() {
  const [showSelf, setShowSelf] = useState(true);
  const [showManager, setShowManager] = useState(true);
  const [showAverage, setShowAverage] = useState(false);

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <span className="font-medium text-slate-700">Display</span>
        <label className="inline-flex items-center gap-1">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
            checked={showSelf}
            onChange={(e) => setShowSelf(e.target.checked)}
          />
          <span>Self</span>
        </label>
        <label className="inline-flex items-center gap-1">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded border-slate-300 text-blue-500 focus:ring-blue-400"
            checked={showManager}
            onChange={(e) => setShowManager(e.target.checked)}
          />
          <span>Manager</span>
        </label>
        <label className="inline-flex items-center gap-1">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
            checked={showAverage}
            onChange={(e) => setShowAverage(e.target.checked)}
          />
          <span>Average</span>
        </label>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis
              dataKey="criterion"
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              tickCount={6}
            />
            {showSelf && (
              <Radar
                name="Self"
                dataKey="self"
                stroke="#FB923C"
                fill="#FDBA74"
                fillOpacity={0.45}
              />
            )}
            {showManager && (
              <Radar
                name="Manager"
                dataKey="manager"
                stroke="#3B82F6"
                fill="#93C5FD"
                fillOpacity={0.35}
              />
            )}
            {showAverage && (
              <Radar
                name="Average"
                dataKey="average"
                stroke="#10B981"
                fill="#6EE7B7"
                fillOpacity={0.25}
              />
            )}
            <Legend />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                borderColor: '#E5E7EB',
                boxShadow:
                  '0 10px 15px -3px rgba(15,23,42,0.1), 0 4px 6px -4px rgba(15,23,42,0.1)',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
