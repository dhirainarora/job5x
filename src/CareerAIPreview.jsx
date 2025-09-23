import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Rocket,
  UserCheck,
  Zap,
  Database,
  Briefcase,
  LayoutGrid,
  FileText,
  GitBranch,
} from "lucide-react";

export default function CareerAIPreview() {
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [autopilotResults, setAutopilotResults] = useState([]);
  const [resumeSuggestions, setResumeSuggestions] = useState([]);

  const mockJobs = [
    { id: 1, title: "Junior Data Analyst", company: "Insight Labs", ats: 88, stage: "Applied", date: "Sep 16, 2025" },
    { id: 2, title: "Frontend Intern", company: "PixelWorks", ats: 72, stage: "Interview Scheduled", date: "Sep 25, 2025" },
    { id: 3, title: "Business Analyst Trainee", company: "MarketPulse", ats: 94, stage: "Offer", date: "Sep 10, 2025" },
  ];

  const features = [
    { title: "Career Path Navigator", desc: "Discover job paths from your degree + real market demand.", icon: Rocket },
    { title: "AI Skill Fixer", desc: "Micro-lessons that fill your exact skill gaps — learn in 10–30 min blocks.", icon: Zap },
    { title: "Resume + ATS Booster", desc: "Auto-tailor resumes for each job and hit 90+ ATS scores.", icon: FileText },
    { title: "Job Apply Autopilot", desc: "Set preferences and let AI apply to hundreds of matching roles.", icon: GitBranch },
    { title: "Interview Coach (Voice & Video)", desc: "Realistic mock interviews with instant feedback and improvement tips.", icon: UserCheck },
    { title: "Side-Hustle Finder", desc: "Freelance gigs to start earning while you land your full-time role.", icon: Briefcase },
  ];

  // === Backend calls ===
  const handleAutoOptimize = async () => {
    try {
      const resp = await fetch("/.netlify/functions/resume-optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: "We need a data analyst skilled in SQL, Python, and dashboards",
          resumeText: "Dhirain resume with Excel and PowerBI experience",
        }),
      });
      const data = await resp.json();
      setResumeSuggestions(data.suggestions || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAutopilot = async () => {
    try {
      const resp = await fetch("/.netlify/functions/autopilot-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobs: mockJobs, threshold: 75 }),
      });
      const data = await resp.json();
      setAutopilotResults(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  // === Filter jobs by search ===
  const filteredJobs = mockJobs.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg">
            <Rocket className="text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-xl">CareerAI</h1>
            <p className="text-xs text-slate-400">AI Job Accelerator — land jobs faster</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <button className="text-sm px-3 py-2 rounded-md hover:bg-slate-100">Features</button>
          <button className="text-sm px-3 py-2 rounded-md hover:bg-slate-100">Pricing</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">Sign in</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold leading-tight">
            Stuck after college or can’t land a job? <span className="text-indigo-600">CareerAI</span> gets you hired — fast.
          </motion.h2>
          <motion.p className="mt-4 text-slate-600 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
            From discovering career paths, fixing skill gaps with micro-lessons, auto-optimizing resumes for ATS, to mock interviews — CareerAI automates the entire job hunt.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:scale-[1.01]">Start Free</button>
            <button className="px-6 py-3 rounded-md border border-slate-200 text-slate-700">See Demo</button>
          </div>
        </div>

        {/* Hero Right */}
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold">Active Applications</h3>
          <div className="mt-4 space-y-3">
            {mockJobs.map((j) => (
              <div key={j.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                <div>
                  <p className="font-medium">{j.title}</p>
                  <p className="text-xs text-slate-400">{j.company} • {j.date}</p>
                </div>
                <p className={`font-semibold ${j.ats > 85 ? 'text-emerald-600' : j.ats > 75 ? 'text-amber-600' : 'text-rose-600'}`}>{j.ats}%</p>
              </div>
            ))}
          </div>
          <button onClick={handleAutopilot} className="mt-4 w-full py-2 rounded-md bg-indigo-600 text-white">Run Autopilot</button>

          {/* Show Autopilot results */}
          {autopilotResults.length > 0 && (
            <div className="mt-4 bg-slate-50 border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Autopilot Results</h4>
              {autopilotResults.map((r) => (
                <div key={r.id} className="flex justify-between py-1">
                  <span>{r.title} @ {r.company}</span>
                  <span className={r.applied ? "text-emerald-600" : "text-rose-600"}>
                    {r.applied ? "✅ Applied" : "❌ Skipped"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="bg-white border rounded-lg p-4 shadow-sm">
            <nav className="space-y-2">
              <button onClick={() => setTab("overview")} className={`w-full p-2 rounded-md ${tab === 'overview' ? 'bg-indigo-50' : ''}`}>Overview</button>
              <button onClick={() => setTab("resume")} className={`w-full p-2 rounded-md ${tab === 'resume' ? 'bg-indigo-50' : ''}`}>Resume</button>
              <button onClick={() => setTab("skills")} className={`w-full p-2 rounded-md ${tab === 'skills' ? 'bg-indigo-50' : ''}`}>Skills</button>
            </nav>
          </aside>

          <main className="lg:col-span-2 bg-white p-6 border rounded-lg">
            {tab === "overview" && (
              <div>
                <h4 className="font-semibold">Overview</h4>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search jobs..."
                  className="mt-2 w-full border p-2 rounded-md"
                />
                <div className="mt-4 space-y-3">
                  {filteredJobs.map((j) => (
                    <div key={j.id} className="flex justify-between p-3 bg-slate-50 rounded-lg">
                      <span>{j.title} @ {j.company}</span>
                      <span>{j.ats}% ATS</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "resume" && (
              <div>
                <h4 className="font-semibold mb-2">Resume + ATS Booster</h4>
                <button onClick={handleAutoOptimize} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Auto-Optimize</button>
                {resumeSuggestions.length > 0 && (
                  <ul className="mt-4 list-disc list-inside text-sm text-slate-700">
                    {resumeSuggestions.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                )}
              </div>
            )}

            {tab === "skills" && <p>Skill lessons will load here…</p>}
          </main>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Pricing</h3>
        <p className="text-slate-500 mt-2">Free, Pro and Premium plans (demo only)</p>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} CareerAI • Built for grads and job-seekers</p>
      </footer>
    </div>
  );
}
