'use client';

import { useState, useMemo } from 'react';
import RadarEvaluationChart from './RadarEvaluationChart';
import SurveyMockup from './SurveyMockup';

const TAB_TITLES: Record<string, string> = {
  overview: 'ภาพรวมการประเมิน',
  performance: 'ผลการทำงาน',
  competency: 'ความสามารถ',
  teamwork: 'การทำงานร่วมกับผู้อื่น',
  creative: 'ความคิดสร้างสรรค์',
  communication: 'การสื่อสาร',
};

const TAB_DESCRIPTIONS: Record<string, string> = {
  overview: 'สรุปผลการประเมินในมุมมองของพนักงานและองค์กร',
  performance: 'ติดตามผลการทำงานตามตัวชี้วัดหลักและเป้าหมายที่กำหนดไว้',
  competency: 'ประเมินสมรรถนะหลักและสมรรถนะเฉพาะด้านของพนักงาน',
  teamwork: 'ประเมินการทำงานเป็นทีมกับผู้อื่น',
  creative: 'ประเมินความคิดสร้างสรรค์และนวัตกรรม',
  communication: 'ประเมินทักษะการสื่อสาร',
};

const TAB_LABELS: Record<string, string> = {
  overview: 'ภาพรวม',
  performance: 'ผลการทำงาน',
  competency: 'ความสามารถ',
  teamwork: 'การทำงานร่วมกับผู้อื่น',
  creative: 'ความคิดสร้างสรรค์',
  communication: 'การสื่อสาร',
};

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSalaryExpanded, setIsSalaryExpanded] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [salary, setSalary] = useState<string>('50,000');
  const [bonus, setBonus] = useState<string>('');
  const isOverview = activeTab === 'overview';

  const formatNumber = (val: string) => {
    const numeric = val.replace(/,/g, '').replace(/[^0-9]/g, '');
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getNumericValue = (val: string) => {
    return parseFloat(val.replace(/,/g, '')) || 0;
  };

  const bonusTotal = useMemo(() => {
    const s = getNumericValue(salary);
    const b = parseFloat(bonus) || 0;
    return (s * b).toLocaleString('en-US');
  }, [salary, bonus]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-md"
      >
        Open Evaluation Popup
      </button>

      {isOpen && (
        <dialog
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent w-screen h-screen"
          aria-modal="true"
          open
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close evaluation popup"
          />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-pink-400 px-8 py-6 text-white flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 overflow-hidden flex items-center justify-center text-2xl font-semibold">
                P
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">
                    Piyapong Huayhongthong (Best)
                  </h2>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full border border-white/30">
                    #B0180
                  </span>
                </div>
                <p className="text-sm text-white/80">
                  Senior UX Designer (OZ) · Product Development &gt; Product
                  Team
                </p>
                <p className="text-xs text-white/80 mt-1">
                  22/02/2560 (4 ปี 3 เดือน 5 วัน)
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wide bg-white/15 px-3 py-1 rounded-full">
                    Overall Grade
                  </span>
                  <span className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full">
                    Excellence
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-lg leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-6 bg-slate-50">
              <div className="flex gap-6">
                {/* Sidebar navigation */}
                <aside className="w-56 shrink-0">
                  <div className="mb-4">
                    <div className="flex gap-2 text-xs mb-2">
                      <button className="px-3 py-1 rounded-full bg-slate-900 text-white">
                        2025
                      </button>
                      <button className="px-3 py-1 rounded-full bg-white text-slate-500 border border-slate-200">
                        2024
                      </button>
                    </div>
                    <div className="rounded-xl bg-white shadow-sm border border-slate-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setActiveTab('overview')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'overview'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ภาพรวม
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('performance')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'performance'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ผลการทำงาน
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('competency')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'competency'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ความสามารถ
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('teamwork')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'teamwork'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        การทำงานร่วมกับผู้อื่น
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('creative')}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                          activeTab === 'creative'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ความคิดสร้างสรรค์
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('communication')}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                          activeTab === 'communication'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        การสื่อสาร
                      </button>
                    </div>
                  </div>
                </aside>

                {/* Main content */}
                <main className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {TAB_TITLES[activeTab] ?? TAB_TITLES.overview}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {TAB_DESCRIPTIONS[activeTab] ?? TAB_DESCRIPTIONS.overview}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">ผลการประเมิน</p>
                      <div className="mt-1 flex items-center justify-end gap-2">
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          Excellence
                        </span>
                      </div>
                    </div>
                  </div>

                  {isOverview && (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,fr)] gap-6 items-center">
                        <div className="text-sm">
                          <div className="overflow-hidden rounded-xl border border-slate-200">
                            <table className="min-w-full divide-y divide-slate-200">
                              <thead className="bg-slate-50">
                                <tr className="text-xs text-slate-500">
                                  <th className="px-4 py-2 text-left font-medium">No</th>
                                  <th className="px-4 py-2 text-left font-medium">Topic</th>
                                  <th className="px-4 py-2 text-right font-medium">Weight</th>
                                  <th className="px-4 py-2 text-right font-medium">Self Score</th>
                                  <th className="px-4 py-2 text-right font-medium">Manager Score</th>
                                  <th className="px-4 py-2 text-right font-medium">Team Average</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                {[
                                  { no: 1, topic: 'ผลการทำงาน', weight: '20%', self: 90, manager: 85, team: 88 },
                                  { no: 2, topic: 'ความสามารถ', weight: '20%', self: 80, manager: 90, team: 85 },
                                  { no: 3, topic: 'การทำงานร่วมกับผู้อื่น', weight: '20%', self: 95, manager: 85, team: 90 },
                                  { no: 4, topic: 'ความคิดสร้างสรรค์', weight: '20%', self: 85, manager: 70, team: 78 },
                                  { no: 5, topic: 'การสื่อสาร', weight: '20%', self: 88, manager: 80, team: 84 },
                                ].map((row) => (
                                  <tr key={row.no}>
                                    <td className="px-4 py-3 align-top text-xs text-slate-600">{row.no}</td>
                                    <td className="px-4 py-3"><p className="font-medium text-slate-800">{row.topic}</p></td>
                                    <td className="px-4 py-3 text-right text-xs text-slate-600">{row.weight}</td>
                                    <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">{row.self}</td>
                                    <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">{row.manager}</td>
                                    <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">{row.team}</td>
                                  </tr>
                                ))}
                                <tr className="bg-slate-50/50">
                                  <td className="px-4 py-3 text-xs text-slate-500">Total</td>
                                  <td className="px-4 py-3"><p className="font-bold text-slate-900">Summary</p></td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-500">100%</td>
                                  <td className="px-4 py-3 text-right text-xs font-bold text-slate-900">87.6</td>
                                  <td className="px-4 py-3 text-right text-xs font-bold text-slate-900">82</td>
                                  <td className="px-4 py-3 text-right text-xs font-bold text-slate-900">84.2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="md:border-r md:border-slate-100 md:pr-6">
                          <RadarEvaluationChart />
                        </div>

                        <div className="flex flex-col gap-3">
                          <button 
                            className={`w-full flex items-center justify-between bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-sm font-medium ${isSalaryExpanded ? 'ring-2 ring-slate-200' : ''}`}
                            onClick={() => setIsSalaryExpanded(!isSalaryExpanded)}
                          >
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Adjustment Salary</span>
                            </div>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${isSalaryExpanded ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {isSalaryExpanded && (
                            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-300 p-4 bg-slate-100/50 rounded-2xl border border-slate-200/60">
                              <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-1.5">
                                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Current Salary (THB)</label>
                                  <div className="relative">
                                    <p className="w-full bg-slate-100 border border-slate-200 rounded-xl pl-4 pr-12 py-2.5 text-sm font-semibold text-slate-400 shadow-sm">50,000</p>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">THB</span>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-1.5">
                                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">New Salary (THB)</label>
                                  <div className="relative">
                                    <input
                                      type="text"
                                      value={salary}
                                      onChange={(e) => setSalary(formatNumber(e.target.value))}
                                      placeholder="0"
                                      className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-12 py-2.5 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all shadow-sm"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">THB</span>
                                  </div>
                                </div>
                                <div className="w-1/4 flex flex-col gap-1.5">
                                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Bonus (month)</label>
                                  <input
                                    type="number"
                                    step="0.1"
                                    value={bonus}
                                    onChange={(e) => setBonus(e.target.value)}
                                    placeholder="0"
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all shadow-sm"
                                  />
                                </div>
                              </div>

                              {parseFloat(bonus) > 0 && (
                                <div className="px-4 py-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
                                  <span className="text-xs text-emerald-700 font-medium">{bonus} months calculation</span>
                                  <span className="text-sm font-bold text-emerald-600">{bonusTotal} THB</span>
                                </div>
                              )}

                              <div className="flex flex-col gap-2">
                                <button 
                                  className="w-full bg-orange-500 text-white py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-sm flex items-center justify-center gap-2" 
                                  onClick={() => setIsConfirmModalOpen(true)}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                  Submit Adjustment
                                </button>
                                <button className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" onClick={() => setIsConfirmModalOpen(true)}>
                                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                  </svg>
                                  Promotion
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {!isOverview && (
                    <SurveyMockup />
                  )}
                </main>
              </div>
            </div>
          </div>
        </dialog>
      )}

      {isConfirmModalOpen && (
        <dialog
          className="fixed inset-0 z-[60] flex items-center justify-center bg-transparent w-screen h-screen"
          aria-modal="true"
          open
        >
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsConfirmModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Confirm Adjustment</h3>
              <p className="text-sm text-slate-500 mb-8">
                Are you sure you want to apply this salary adjustment? This action will be recorded in the system.
              </p>

              <div className="w-full bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">New Salary</span>
                  <span className="text-sm font-bold text-slate-700">{salary} THB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Calculated Bonus</span>
                  <span className="text-sm font-bold text-emerald-600">+{bonusTotal} THB</span>
                </div>
              </div>

              <div className="flex flex-col w-full gap-3">
                <button 
                  onClick={() => {
                    setIsConfirmModalOpen(false);
                    setIsSalaryExpanded(false);
                  }}
                  className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  Confirm Submission
                </button>
                <button 
                  onClick={() => setIsConfirmModalOpen(false)}
                  className="w-full bg-white text-slate-500 py-3 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
                >
                  Keep Editing
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
