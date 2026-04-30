import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  AppWindow, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Layers,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

const cloudReadinessData = [
  { category: 'Infra', score: 45 },
  { category: 'Data', score: 62 },
  { category: 'App', score: 35 },
  { category: 'Security', score: 78 },
  { category: 'Ops', score: 55 },
];

const modernizationStrategyBreakdown = [
  { name: 'Refactor', value: 35, color: '#2563eb' },
  { name: 'Replatform', value: 25, color: '#3b82f6' },
  { name: 'Rehost', value: 20, color: '#60a5fa' },
  { name: 'Retire', value: 10, color: '#93c5fd' },
  { name: 'Retain', value: 10, color: '#bfdbfe' },
];

const KPI_CARDS = [
  { title: 'Total Portfolio Apps', value: '452', trend: 'Discovered', color: 'blue', icon: AppWindow },
  { title: 'Readiness Index', value: '54.2%', trend: '+8.4% MoM', color: 'blue', icon: Zap },
  { title: 'Modernization Risk', value: 'High', trend: '32 Systems Critical', color: 'blue', icon: ShieldCheck },
  { title: 'Est. Migration Savings', value: '$4.2M', trend: 'Annual ROI', color: 'blue', icon: TrendingUp },
];

const AssessmentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Modernization Intelligence Hub</h1>
          <p className="text-slate-400">Institutional assessment and strategic planning for legacy enterprise systems.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Wave Plan
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Portfolio Scan
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-blue-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readiness Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cloud Readiness Vectors</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cloudReadinessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="score" fill="#2563eb" radius={[4, 4, 0, 0]} name="Readiness Score %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategy Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Strategic Classification (6Rs)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={modernizationStrategyBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {modernizationStrategyBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {modernizationStrategyBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Application Transformation Ledger</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Dependency Graph</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Application</th>
                <th className="px-6 py-4 font-semibold">Tech Debt</th>
                <th className="px-6 py-4 font-semibold">Readiness</th>
                <th className="px-6 py-4 font-semibold">Recommended 6R</th>
                <th className="px-6 py-4 font-semibold">Target Wave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Core Banking ERP', debt: '88/100', readiness: 'Low', strategy: 'Refactor', wave: 'Wave 1' },
                { name: 'Inventory Management', debt: '45/100', readiness: 'Medium', strategy: 'Replatform', wave: 'Wave 2' },
                { name: 'Legacy CMS', debt: '95/100', readiness: 'Critical', strategy: 'Retire', wave: 'Immediate' },
              ].map((app) => (
                <tr key={app.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{app.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: APP-4592-X</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      parseInt(app.debt) > 80 ? 'bg-red-500/10 text-red-500' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {app.debt}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.readiness === 'Low' || app.readiness === 'Critical' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      {app.readiness}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium italic">{app.strategy}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{app.wave}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDashboard;
