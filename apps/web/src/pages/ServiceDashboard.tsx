import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Boxes, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Layers,
  ShieldCheck,
  Workflow,
  Server,
  Share2
} from 'lucide-react';

const throughputData = [
  { time: '00:00', gateway: 450, orders: 120, payments: 115 },
  { time: '04:00', gateway: 320, orders: 85, payments: 80 },
  { time: '08:00', gateway: 850, orders: 245, payments: 240 },
  { time: '12:00', gateway: 1200, orders: 410, payments: 405 },
  { time: '16:00', gateway: 1100, orders: 380, payments: 375 },
  { time: '20:00', gateway: 950, orders: 310, payments: 305 },
];

const serviceHealthBreakdown = [
  { name: 'Healthy', value: 92, color: '#6366f1' },
  { name: 'Degraded', value: 5, color: '#f59e0b' },
  { name: 'Down', value: 3, color: '#ef4444' },
];

const KPI_CARDS = [
  { title: 'Registered Services', value: '12', trend: 'Service Discovery OK', color: 'indigo', icon: Server },
  { title: 'Avg. Latency (P99)', value: '145ms', trend: 'Gateway to Sink', color: 'indigo', icon: Clock },
  { title: 'Saga Success Rate', value: '99.4%', trend: 'Order Flow', color: 'indigo', icon: Workflow },
  { title: 'System Throughput', value: '24k', trend: 'Req / Minute', color: 'indigo', icon: Zap },
];

const ServiceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Microservices Mesh Topology</h1>
          <p className="text-slate-400">Institutional microservices reference architecture, distributed orchestration, and observability.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            View Trace Graph
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Deploy New Service
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
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
        {/* Throughput Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Service Throughput & Cross-Sync Traffic</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={throughputData}>
                <defs>
                  <linearGradient id="colorGateway" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="gateway" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorGateway)" name="Gateway Ingress" />
                <Area type="monotone" dataKey="orders" stroke="#818cf8" strokeWidth={2} fill="transparent" name="Order Service" />
                <Area type="monotone" dataKey="payments" stroke="#a5b4fc" strokeWidth={2} fill="transparent" name="Payment Service" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Health Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cluster Node Health Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceHealthBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {serviceHealthBreakdown.map((entry, index) => (
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
            {serviceHealthBreakdown.map((item) => (
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

      {/* Service Registry Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Distributed Service Registry</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">Re-sync Discovery</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Service Identity</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Protocol</th>
                <th className="px-6 py-4 font-semibold">Database Sink</th>
                <th className="px-6 py-4 font-semibold">Uptime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Gateway Service', status: 'Healthy', protocol: 'REST / gRPC', db: 'Redis (Cache)', uptime: '99.99%' },
                { name: 'Order Service', status: 'Healthy', protocol: 'REST / Kafka', db: 'Postgres (SQL)', uptime: '99.95%' },
                { name: 'Payment Service', status: 'Healthy', protocol: 'Kafka (Async)', db: 'Postgres (SQL)', uptime: '100.00%' },
                { name: 'Inventory Service', status: 'Degraded', protocol: 'REST / Kafka', db: 'Postgres (SQL)', uptime: '98.40%' },
              ].map((service, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Share2 className="w-5 h-5 text-indigo-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{service.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: SVC-2026-X8</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      service.status === 'Healthy' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{service.protocol}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-medium">{service.db}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{service.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
