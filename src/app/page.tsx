import Popup from '@/components/Popup';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Client Demo</h1>
        <p className="text-gray-600 mb-8">Click the button to open the popup</p>
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden min-w-[800px]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Employee</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Position</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Grade</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: '#B0180', name: 'Piyapong Huayhongthong', position: 'Senior UX Designer', grade: 'Excellence', activeYear: '2017' },
                { id: '#B0181', name: 'Sarayut Singha', position: 'UX Designer', grade: 'Very Good', activeYear: '2020' },
              ].map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-400">{emp.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{emp.name}</p>
                    <p className="text-xs text-slate-500">Active since {emp.activeYear}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{emp.position}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      emp.grade === 'Excellence' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {emp.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Popup />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
