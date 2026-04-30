import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ServiceDashboard from './pages/ServiceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Microservices Reference Platform is currently orchestrating distributed saga workflows and optimizing inter-service communication patterns. Real-time observability traces and event-driven data consistency models will be fully operational once the mesh synchronization is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ServiceDashboard />} />
          <Route path="/users" element={<Placeholder name="Identity & User Service" />} />
          <Route path="/orders" element={<Placeholder name="Distributed Order Service" />} />
          <Route path="/payments" element={<Placeholder name="Asynchronous Payment Service" />} />
          <Route path="/inventory" element={<Placeholder name="Inventory & Stock Service" />} />
          <Route path="/notifications" element={<Placeholder name="Event-Driven Notification Service" />} />
          <Route path="/sagas" element={<Placeholder name="Distributed Saga Orchestration" />} />
          <Route path="/gateway" element={<Placeholder name="API Gateway Metrics & Routing" />} />
          <Route path="/observability" element={<Placeholder name="Distributed Tracing & Logs" />} />
          <Route path="/security" element={<Placeholder name="RBAC & Service Identity" />} />
          <Route path="/metrics" element={<Placeholder name="System & Cluster Metrics" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Mesh Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
