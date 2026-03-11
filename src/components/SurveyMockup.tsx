'use client';

import { useMemo } from 'react';
import ScatterEvaluationChart from './ScatterEvaluationChart';

interface SurveyTopic {
  id: string;
  label: string;
  description: string;
  self: number;
  manager: number;
  teamAverage: number;
}

const SURVEY_DATA: SurveyTopic[] = [
  { id: 'quality', label: 'คุณภาพงาน', description: 'ความถูกต้อง ครบถ้วน และเรียบร้อยของงาน', self: 92, manager: 88, teamAverage: 85 },
  { id: 'speed', label: 'ความรวดเร็ว', description: 'ความสามารถในการทำงานให้เสร็จตามกำหนดเวลา', self: 85, manager: 90, teamAverage: 82 },
  { id: 'responsibility', label: 'ความรับผิดชอบ', description: 'ความมุ่งมั่นทุ่มเทในการทำงาน', self: 95, manager: 95, teamAverage: 88 },
  { id: 'problem_solving', label: 'การแก้ปัญหา', description: 'ความสามารถในการวิเคราะห์และจัดการกับอุปสรรค', self: 88, manager: 85, teamAverage: 80 },
  { id: 'collaboration', label: 'การทำงานเป็นทีม', description: 'การให้ความร่วมมือและสนับสนุนเพื่อนร่วมงาน', self: 90, manager: 92, teamAverage: 86 },
  { id: 'communication', label: 'การสื่อสาร', description: 'ความชัดเจนในการถ่ายทอดข้อมูล', self: 82, manager: 85, teamAverage: 78 },
  { id: 'creativity', label: 'ความคิดสร้างสรรค์', description: 'การนำเสนอไอเดียใหม่ๆ', self: 85, manager: 80, teamAverage: 75 },
  { id: 'learning', label: 'การเรียนรู้', description: 'ความสนใจในการพัฒนาทักษะใหม่ๆ', self: 94, manager: 88, teamAverage: 82 },
  { id: 'leadership', label: 'ความเป็นผู้นำ', description: 'การตัดสินใจและการจูงใจผู้อื่น', self: 78, manager: 82, teamAverage: 70 },
  { id: 'discipline', label: 'ระเบียบวินัย', description: 'การปฏิบัติตามกฎระเบียบองค์กร', self: 98, manager: 95, teamAverage: 90 },
];

export default function SurveyMockup() {
  const chartData = useMemo(() => {
    return SURVEY_DATA.map((item, index) => ({
      category: item.label,
      self: item.self,
      manager: item.manager,
      teamAverage: item.teamAverage,
      index: index + 1,
    }));
  }, []);

  const overallSelfAverage = useMemo(() => {
    const total = SURVEY_DATA.reduce((acc, curr) => acc + curr.self, 0);
    return (total / SURVEY_DATA.length).toFixed(1);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-slate-800">รายงานผลการประเมินรายหัวข้อ</h4>
            <p className="text-xs text-slate-500 mt-0.5">เปรียบเทียบคะแนนประเมินตนเอง หัวหน้า และค่าเฉลี่ยทีม</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Your Average</p>
              <p className="text-xl font-bold text-orange-500 leading-none mt-1">
                {overallSelfAverage}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <ScatterEvaluationChart data={chartData} />
          </div>

          <div className="grid gap-3">
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50/50">
                  <tr className="text-[10px] uppercase tracking-wider text-slate-500">
                    <th className="px-4 py-3 text-left font-semibold">หัวข้อการประเมิน</th>
                    <th className="px-4 py-3 text-center font-semibold text-orange-500">Self</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-500">Manager</th>
                    <th className="px-4 py-3 text-center font-semibold text-emerald-500">Team Avg.</th>
                    <th className="px-4 py-3 text-right font-semibold text-slate-700">Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 bg-white">
                  {SURVEY_DATA.map((topic) => {
                    const gap = topic.manager - topic.self;
                    return (
                      <tr key={topic.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-3">
                          <p className="text-xs font-medium text-slate-700">{topic.label}</p>
                          <p className="text-[10px] text-slate-400">{topic.description}</p>
                        </td>
                        <td className="px-4 py-3 text-center text-xs font-semibold text-slate-600">{topic.self}</td>
                        <td className="px-4 py-3 text-center text-xs font-semibold text-slate-600">{topic.manager}</td>
                        <td className="px-4 py-3 text-center text-xs font-semibold text-slate-600">{topic.teamAverage}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            gap > 0 ? 'bg-emerald-50 text-emerald-600' : gap < 0 ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-500'
                          }`}>
                            {gap > 0 ? `+${gap}` : gap}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50/50 border-t border-slate-100 px-6 py-4 flex items-center justify-between">
            <p className="text-[10px] text-slate-400 font-medium italic">
              * ข้อมูลนี้ถูกดึงมาจากระบบประเมินผลกลาง ประจำไตรมาสที่ 1/2025
            </p>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              ส่งออกเป็น PDF
            </button>
        </div>
      </div>
    </div>
  );
}
