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

  const mockJobs = [
    { id: 1, title: "Junior Data Analyst", company: "Insight Labs", ats: 88, stage: "Applied", date: "Sep 16, 2025" },
    { id: 2, title: "Frontend Intern", company: "PixelWorks", ats: 72, stage: "Interview Scheduled", date: "Sep 25, 2025" },
    { id: 3, title: "Business Analyst Trainee", company: "MarketPulse", ats: 94, stage: "Offer", date: "Sep 10, 2025" },
  ];

  const features = [
    { title: "Career Path Navigator", desc: "Discover job paths from your degree + market demand.", icon: Rocket },
    { title: "AI Skill Fixer", desc: "Micro-lessons that fix skill gaps in 10–30 min.", icon: Zap },
    { title: "Resume + ATS Booster", desc: "Auto-tailor resumes for each job & hit 90+ ATS scores.", icon: FileText },
    { title: "Job Apply Autopilot", desc: "AI applies to hundreds of roles automatically.", icon: GitBranch },
    { title: "Interview Coach", desc: "Realistic mock interviews with instant feedback.", icon: UserCheck },
    { title: "Side-Hustle Finder", desc: "Freelance gigs while landing your full-time role.", icon: Briefcase },
  ];

  // Call Netlify function (resume optimize)
  async function handleAutoOptimize() {
    try {
      const res = await fetch("/.netlify/functions/resume-optimize", {
        method: "POST",
        body: JSON.stringify({
          jobDescription: "Looking for SQL and data analysis skills",
          resumeText: "I have experience in Excel and reporting"
        })
      });
      const data = await res.json();
      alert("Suggestions: " + (data.suggestions || []).join(", "));
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  // Call Netlify function (autopilot apply)
  async function handleAutopilot() {
    try {
      const res = await fetch("/.netlify/functions/autopilot-apply", {
        method: "POST",
        body: JSON.stringify({ jobs: mockJobs, threshold: 80 })
      });
      const data = await res.json();
      alert("Autopilot results:\n" + JSON.stringify(data.results, null, 2));
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

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
            <p className="text-xs text-slate-400">AI Job Accelerator</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <button className="text-sm px-3 py-2 rounded-md hover:bg-slate-100">Features</button>
          <button className="text-sm px-3 py-2 rounded-md hover:bg-slate-100">Pricing</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Sign in</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Struggling to land a job? <span className="text-indigo-600">CareerAI</span> gets you hired — fast.
          </motion.h2>
          <p className="mt-4 text-slate-600 max-w-xl">
            Discover paths, fix skill gaps, auto-optimize resumes, and practice interviews. AI automates the job hunt.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium">Start Free</button>
            <button className="px-6 py-3 rounded-md border border-slate-200 text-slate-700">See Demo</button>
          </div>
        </div>

        {/* Hero right */}
        <motion.div className="bg-white border rounded-2xl p-5 shadow-lg">
          <h3 className="font-semibold">Active Applications</h3>
          <div className="mt-4 space-y-3">
            {mockJobs.map(j => (
              <div key={j.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                <div>
                  <p className="font-medium">{j.title}</p>
                  <p className="text-xs text-slate-400">{j.company} • {j.date}</p>
                </div>
                <p className={`font-semibold ${j.ats > 85 ? "text-emerald-600" : j.ats > 75 ? "text-amber-600" : "text-rose-600"}`}>{j.ats}%</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={handleAutopilot} className="flex-1 py-2 rounded-md bg-indigo-600 text-white">Open Dashboard</button>
            <button className="py-2 px-3 rounded-md border">Export</button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-bold">What CareerAI offers</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50"><Icon className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* RESUME */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Resume + ATS Booster</h3>
        <div className="mt-4 bg-white border rounded-lg p-6 shadow-sm">
          <p className="text-sm text-slate-500">Uploaded Resume: resume_dhirain.pdf</p>
          <p className="mt-2">ATS Score: <span className="font-bold">72%</span></p>
          <button onClick={handleAutoOptimize} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md">
            Auto-Optimize
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} CareerAI</p>
          <div className="flex gap-4">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
