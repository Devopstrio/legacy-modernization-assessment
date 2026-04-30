import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AssessmentDashboard from './pages/AssessmentDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Modernization Assessment engine is currently processing multi-cloud dependency graphs and calculating technical debt scores. Strategic transformation roadmaps and 6R classifications will be fully operational once the portfolio scan is synchronized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<AssessmentDashboard />} />
          <Route path="/applications" element={<Placeholder name="Application Portfolio Discovery" />} />
          <Route path="/scoring" element={<Placeholder name="Modernization Scoring Model" />} />
          <Route path="/readiness" element={<Placeholder name="Cloud Readiness Vectors" />} />
          <Route path="/risks" element={<Placeholder name="Risk Assessment & Mitigation" />} />
          <Route path="/dependencies" element={<Placeholder name="App Dependency & Infrastructure Mapping" />} />
          <Route path="/costs" element={<Placeholder name="Modernization Cost & ROI Analysis" />} />
          <Route path="/waves" element={<Placeholder name="Migration Wave & Roadmap Planning" />} />
          <Route path="/reports" element={<Placeholder name="Executive Transformation Reporting" />} />
          <Route path="/settings" element={<Placeholder name="System & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
