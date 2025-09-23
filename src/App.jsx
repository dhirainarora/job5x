
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  UserCheck,
  Zap,
  Database,
  FileText,
  Briefcase,
  LayoutGrid,
  GitBranch,
} from "lucide-react";

import {
  auth,
  signInWithGooglePopup,
  logout,
  onAuthStateChanged,
  db,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("overview");
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [resumeText, setResumeText] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      if (u) fetchData(u.uid);
    });
    return () => unsub();
  }, []);

  // fetch from Firestore
  async function fetchData(uid) {
    const jobsSnap = await getDocs(collection(db, "jobs"));
    setJobs(jobsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

    const skillsSnap = await getDocs(collection(db, "skills"));
    setSkills(skillsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

    const resumesCol = collection(db, "resumes");
    const q = query(resumesCol, where("uid", "==", uid));
    const resSnap = await getDocs(q);
    setResumes(resSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  }

  const handleLogin = async () => {
    const u = await signInWithGooglePopup();
    setUser(u);
    fetchData(u.uid);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  const saveResume = async () => {
    if (!user) return alert("Login first");
    if (!resumeText.trim()) return alert("Enter resume text");
    await addDoc(collection(db, "resumes"), {
      uid: user.uid,
      text: resumeText,
      createdAt: Date.now(),
    });
    alert("Resume saved");
    fetchData(user.uid);
  };

  const optimizeResume = async () => {
    if (!resumeText.trim()) return alert("Paste resume first");
    setLoading(true);
    try {
      const resp = await fetch("/.netlify/functions/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });
      const data = await resp.json();
      setAiResult(data.data || data);
    } catch (err) {
      console.error(err);
      alert("Error optimizing resume");
    }
    setLoading(false);
  };

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
        {!user ? (
          <button onClick={handleLogin} className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">
            Sign in
          </button>
        ) : (
          <div className="flex gap-3 items-center">
            <p className="text-sm">Hi, {user.displayName}</p>
            <button onClick={handleLogout} className="px-3 py-2 border rounded-md">Logout</button>
          </div>
        )}
      </header>

      {/* DASHBOARD TABS */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-3">
          {["overview", "resume", "skills"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-md ${tab === t ? "bg-indigo-600 text-white" : "border"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {tab === "overview" && (
          <div>
            <h2 className="font-bold text-lg">Applications</h2>
            {jobs.length === 0 ? (
              <p className="text-slate-500">No jobs in Firestore yet</p>
            ) : (
              jobs.map((j) => (
                <div key={j.id} className="p-3 bg-slate-50 rounded-md my-2">
                  <p className="font-medium">{j.title}</p>
                  <p className="text-sm text-slate-500">{j.company}</p>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "resume" && (
          <div>
            <h2 className="font-bold text-lg">Resume Optimizer</h2>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full p-2 border rounded-md my-2"
              rows={6}
              placeholder="Paste your resume text here..."
            />
            <div className="flex gap-2">
              <button onClick={saveResume} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Save</button>
              <button onClick={optimizeResume} className="px-4 py-2 border rounded-md">Optimize (AI)</button>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-md min-h-[120px]">
              {loading ? "Running AI..." : aiResult ? (
                <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(aiResult, null, 2)}</pre>
              ) : "AI output will appear here"}
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Saved Resumes</h3>
              {resumes.length === 0 ? (
                <p className="text-slate-500">No saved resumes yet</p>
              ) : (
                resumes.map((r) => (
                  <div key={r.id} className="p-2 border rounded my-2 text-sm">
                    {r.text.slice(0, 120)}...
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {tab === "skills" && (
          <div>
            <h2 className="font-bold text-lg">Skills</h2>
            {skills.length === 0 ? (
              <p className="text-slate-500">No skills in Firestore yet</p>
            ) : (
              skills.map((s) => (
                <div key={s.id} className="p-3 bg-slate-50 rounded-md my-2">
                  {s.name} — {s.progress || 0}%
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
