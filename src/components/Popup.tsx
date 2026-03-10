'use client';

import { useState } from 'react';
import RadarEvaluationChart from './RadarEvaluationChart';

const TAB_TITLES: Record<string, string> = {
  overview: 'ภาพรวมการประเมิน',
  performance: 'ผลการทำงาน',
  workshop: 'เวิร์กช็อป',
  competency: 'ความสามารถ',
  documents: 'เอกสาร',
  org: 'ประเมินองค์กร',
};

const TAB_DESCRIPTIONS: Record<string, string> = {
  overview: 'สรุปผลการประเมินในมุมมองของพนักงานและองค์กร',
  performance: 'ติดตามผลการทำงานตามตัวชี้วัดหลักและเป้าหมายที่กำหนดไว้',
  workshop: 'บันทึกการเข้าร่วมเวิร์กช็อปและกิจกรรมพัฒนาศักยภาพ',
  competency: 'ประเมินสมรรถนะหลักและสมรรถนะเฉพาะด้านของพนักงาน',
  documents: 'จัดเก็บเอกสารสำคัญที่เกี่ยวข้องกับการประเมินผล',
  org: 'สะท้อนมุมมองต่อองค์กร วัฒนธรรม และความผูกพัน',
};

const TAB_LABELS: Record<string, string> = {
  overview: 'ภาพรวม',
  performance: 'ผลการทำงาน',
  workshop: 'เวิร์กช็อป',
  competency: 'ความสามารถ',
  documents: 'เอกสาร',
  org: 'ประเมินองค์กร',
};

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const isOverview = activeTab === 'overview';

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
                        onClick={() => setActiveTab('workshop')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'workshop'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        เวิร์กช็อป
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
                        onClick={() => setActiveTab('documents')}
                        className={`w-full px-4 py-3 text-left text-sm border-b border-slate-100 transition-colors ${
                          activeTab === 'documents'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        เอกสาร
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('org')}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                          activeTab === 'org'
                            ? 'bg-slate-100 text-slate-900 font-medium border-l-2 border-slate-900'
                            : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ประเมินองค์กร
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
                        <p className="text-lg font-semibold text-slate-900">
                          90 / 100
                        </p>
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
                                  <th className="px-4 py-2 text-left font-medium">
                                    No
                                  </th>
                                  <th className="px-4 py-2 text-left font-medium">
                                    Topic
                                  </th>
                                  <th className="px-4 py-2 text-right font-medium">
                                    Weight
                                  </th>
                                  <th className="px-4 py-2 text-right font-medium">
                                    Self Score
                                  </th>
                                  <th className="px-4 py-2 text-right font-medium">
                                    Manager Score
                                  </th>
                                  <th className="px-4 py-2 text-right font-medium">
                                    Average
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                <tr>
                                  <td className="px-4 py-3 align-top text-xs text-slate-600">
                                    1
                                  </td>
                                  <td className="px-4 py-3">
                                    <p className="font-medium text-slate-800">
                                      Overall
                                    </p>
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-600">
                                    20%
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    90
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    85
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    88
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 align-top text-xs text-slate-600">
                                    2
                                  </td>
                                  <td className="px-4 py-3">
                                    <p className="font-medium text-slate-800">
                                      Teamwork
                                    </p>
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-600">
                                    20%
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    80
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    90
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    85
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 align-top text-xs text-slate-600">
                                    3
                                  </td>
                                  <td className="px-4 py-3">
                                    <p className="font-medium text-slate-800">
                                      Ownership
                                    </p>
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-600">
                                    20%
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    95
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    85
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    90
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 align-top text-xs text-slate-600">
                                    4
                                  </td>
                                  <td className="px-4 py-3">
                                    <p className="font-medium text-slate-800">
                                      Innovation
                                    </p>
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-600">
                                    20%
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    85
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    70
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    78
                                  </td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3 align-top text-xs text-slate-600">
                                    5
                                  </td>
                                  <td className="px-4 py-3">
                                    <p className="font-medium text-slate-800">
                                      Communication
                                    </p>
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs text-slate-600">
                                    20%
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    88
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    80
                                  </td>
                                  <td className="px-4 py-3 text-right text-xs font-semibold text-slate-900">
                                    84
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="md:border-r md:border-slate-100 md:pr-6">
                          <RadarEvaluationChart />
                        </div>
                      </div>
                    </div>
                  )}

                  {!isOverview && (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-4">
                      <p className="text-sm text-slate-700">
                        หน้านี้เป็นตัวอย่างโครงร่างสำหรับแท็บ{' '}
                        <span className="font-medium">
                          {TAB_LABELS[activeTab] ?? TAB_LABELS.overview}
                        </span>{' '}
                        คุณสามารถเชื่อมต่อข้อมูลจริงหรือฟอร์มได้ในภายหลัง
                      </p>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-3">
                          <p className="text-xs font-medium text-slate-700">
                            ข้อมูลสรุป
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            แสดงตัวเลขสำคัญหรือสเตตัสของแท็บนี้ เช่น เป้าหมาย ความคืบหน้า
                            หรือจำนวนเอกสาร
                          </p>
                        </div>
                        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-3">
                          <p className="text-xs font-medium text-slate-700">
                            รายการรายละเอียด
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            ใช้เป็นพื้นที่สำหรับตาราง รายการ หรือไทม์ไลน์ ที่เกี่ยวข้องกับแท็บนี้
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-3">
                        <p className="text-xs font-medium text-slate-700">
                          บันทึก / หมายเหตุ
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          โซนสำหรับบันทึกข้อความ คอมเมนต์จากหัวหน้า หรือสรุปสั้น ๆ
                        </p>
                      </div>
                    </div>
                  )}
                </main>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
