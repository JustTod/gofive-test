'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ScatterData {
  category: string;
  self: number;
  manager: number;
  teamAverage: number;
  index: number;
}

interface ScatterEvaluationChartProps {
  data: ScatterData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg text-xs">
        <p className="font-bold text-slate-800 mb-2">{data.category}</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Self:</span>
            <span className="font-semibold text-orange-500">{data.self}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Manager:</span>
            <span className="font-semibold text-blue-500">{data.manager}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Team Average:</span>
            <span className="font-semibold text-emerald-500">{data.teamAverage}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function ScatterEvaluationChart({ data }: ScatterEvaluationChartProps) {
  // We need to format data for Scatter - each series needs its own data array or we use multiple Scatters
  const selfData = data.map(d => ({ x: d.index, y: d.self, category: d.category, value: d.self, type: 'Self' }));
  const managerData = data.map(d => ({ x: d.index, y: d.manager, category: d.category, value: d.manager, type: 'Manager' }));
  const teamAverageData = data.map(d => ({ x: d.index, y: d.teamAverage, category: d.category, value: d.teamAverage, type: 'Team Average' }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 30,
            bottom: 60,
            left: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="Topic" 
            ticks={data.map(d => d.index)}
            tickFormatter={(value) => data.find(d => d.index === value)?.category || ''}
            stroke="#94a3b8"
            fontSize={10}
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="Score" 
            domain={[0, 100]} 
            stroke="#94a3b8"
            fontSize={10}
            tickCount={6}
          />
          <ZAxis type="number" range={[100, 100]} />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ fontSize: '11px', fontWeight: 500, paddingBottom: '10px' }}
          />
          <Scatter 
            name="Self" 
            data={selfData} 
            fill="#FB923C" 
            line={{ stroke: '#FB923C', strokeWidth: 1, strokeDasharray: '5 5' }}
            lineType="joint"
          />
          <Scatter 
            name="Manager" 
            data={managerData} 
            fill="#3B82F6" 
            line={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
            lineType="joint"
          />
          <Scatter 
            name="Team Average" 
            data={teamAverageData} 
            fill="#10B981" 
            line={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '5 5' }}
            lineType="joint"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
