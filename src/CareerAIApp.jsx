import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  FileText,
  Brain,
  Map,
  Mic,
  Briefcase,
  LineChart,
  BookOpen,
  Users,
  CheckCircle,
  Star,
  User,
  Clock,
  CheckSquare,
} from "lucide-react";

function CareerDashboard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Sidebar */}
        <aside className="col-span-1 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User />
            </div>
            <div>
              <h4 className="font-bold">Aman Singh</h4>
              <p className="text-sm text-gray-500">Aspiring Data Scientist</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Resume Optimization</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: "65%" }} />
            </div>
            <p className="mt-2 text-sm">Score: <span className="font-semibold">65/100</span></p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Roadmap Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "40%" }} />
            </div>
            <p className="mt-2 text-sm">Step 2 of 5</p>
          </div>

          <Button className="w-full bg-blue-600 text-white">Upgrade for Full Feedback</Button>

          <div className="mt-6 text-sm text-gray-500">
            <p className="mb-2"><strong>Next action:</strong> Add a quantified achievement to Work Experience.</p>
            <p className="mb-1">Deadline: <span className="font-medium">2 days</span></p>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-1 md:col-span-3 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-md rounded-2xl">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Resume Score</p>
                    <h3 className="text-2xl font-bold">65</h3>
                    <p className="text-sm text-gray-500">ATS friendly but missing keywords</p>
                  </div>
                  <div className="text-blue-600">
                    <Star />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-md rounded-2xl">
              <CardContent>
                <div>
                  <p className="text-sm text-gray-500">Active Applications</p>
                  <h3 className="text-2xl font-bold">4</h3>
                  <p className="text-sm text-gray-500">2 interviews scheduled</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-md rounded-2xl">
              <CardContent>
                <div>
                  <p className="text-sm text-gray-500">Roadmap Progress</p>
                  <h3 className="text-2xl font-bold">40%</h3>
                  <p className="text-sm text-gray-500">SQL → Python → Projects</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-md rounded-2xl">
              <CardContent>
                <h4 className="font-bold mb-2">AI Mentor Snapshot</h4>
                <p className="text-sm text-gray-600 mb-4">
                  "To improve your chances for Data Scientist roles, add 2 projects with SQL+Pandas and quantify results."
                </p>
                <div className="flex gap-3">
                  <Button className="bg-blue-600 text-white">Chat with Mentor</Button>
                  <Button className="bg-gray-200">View Suggested Resources</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-md rounded-2xl">
              <CardContent>
                <h4 className="font-bold mb-2">Interview Practice</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Next mock: Behavioral + SQL questions. Duration: 25 mins
                </p>
                <div className="flex items-center gap-4">
                  <Button className="bg-blue-600 text-white">Start Mock</Button>
                  <Button className="bg-gray-200">Schedule</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="font-bold mb-4">Job Tracker</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Data Analyst — Acme Corp</p>
                  <p className="text-sm text-gray-500">Applied 5 days ago</p>
                </div>
                <div className="text-sm font-semibold text-yellow-600">Interview</div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Business Analyst — Fintech Ltd</p>
                  <p className="text-sm text-gray-500">Applied 12 days ago</p>
                </div>
                <div className="text-sm font-semibold text-gray-500">Applied</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="font-bold mb-4">Portfolio Showcase</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">Project: Sales Forecasting</div>
              <div className="p-3 border rounded-lg">Project: Dashboard – Tableau</div>
              <div className="p-3 border rounded-lg">Project: Kaggle Notebook</div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default function CareerAIApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-blue-700">CareerAI</h1>
        <nav className="space-x-6 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Login</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-28 bg-gradient-to-r from-blue-100 to-blue-200">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold mb-6 text-gray-900"
        >
          🚀 Land Your Dream Job with AI
        </motion.h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your all-in-one AI-powered career co-pilot: resumes, interviews, skill growth, job tracking, and more.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button size="lg" className="px-12 py-6 text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg rounded-xl">
            Start Free Today
          </Button>
        </motion.div>
        <p className="mt-4 text-sm text-gray-600 font-medium">
          ⚡ Early Bird Offer: 70% Off First 100 Users
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="grid md:grid-cols-3 gap-8 p-12 max-w-7xl mx-auto">
        {[
          { icon: FileText, title: "AI Resume & Cover Letter", desc: "Generate ATS-friendly resumes & tailored cover letters instantly." },
          { icon: Brain, title: "AI Mentor Mode", desc: "Your personal AI career coach guiding every step." },
          { icon: Map, title: "Job Roadmaps", desc: "Step-by-step skill plans to reach your dream role." },
          { icon: Mic, title: "Interview Practice", desc: "Interactive AI mock interviews with instant scoring." },
          { icon: Briefcase, title: "Job Tracker", desc: "Track applied jobs with statuses: Applied → Interview → Offer → Hired." },
          { icon: LineChart, title: "Career Insights", desc: "Salary trends, demand graphs, and top companies hiring." },
          { icon: BookOpen, title: "Skill Quizzes", desc: "Test your skills with AI quizzes and unlock badges." },
          { icon: Users, title: "Community Hub", desc: "Connect with peers, share experiences, and grow together." },
          { icon: CheckCircle, title: "Portfolio Showcase", desc: "Upload projects & stand out to recruiters." },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="flex flex-col items-center text-center p-8">
                <f.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Dashboard Preview (Logged-in view) */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6">Preview: Logged-in Dashboard</h2>
          <CareerDashboard />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <h2 className="text-center text-4xl font-extrabold mb-12">🌟 Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { quote: "CareerAI helped me land my first job at Deloitte with an optimized resume and AI mock interviews.", name: "Ananya Sharma", role: "Business Analyst" },
            { quote: "The AI mentor guided my learning roadmap. Within 6 months, I transitioned into Data Science.", name: "Rahul Verma", role: "Data Scientist" },
            { quote: "I loved the job tracker & insights. It kept me focused and I finally cracked Amazon interviews.", name: "Sneha Kapoor", role: "Software Engineer" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="p-8 shadow-lg text-center rounded-2xl hover:shadow-xl transition">
                <p className="mb-4 text-gray-700 italic">“{t.quote}”</p>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
        <h2 className="text-4xl font-extrabold mb-6">💰 Pricing</h2>
        <p className="mb-8 text-gray-700 text-lg">Invest in your career growth today.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <Card className="p-8 shadow-lg rounded-2xl">
            <h3 className="font-bold text-xl mb-3">Free</h3>
            <p className="text-sm text-gray-600 mb-5">Basic resume & 1 roadmap</p>
            <Button className="bg-gray-200 hover:bg-gray-300">Start Free</Button>
          </Card>
          <Card className="p-8 shadow-lg rounded-2xl border-2 border-blue-600 relative">
            <span className="absolute -top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="font-bold text-xl mb-3">Pro</h3>
            <p className="text-sm text-gray-600 mb-5">
              Unlimited resumes, AI mentor, quizzes, roadmaps, interviews
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">Get Pro</Button>
          </Card>
          <Card className="p-8 shadow-lg rounded-2xl">
            <h3 className="font-bold text-xl mb-3">Premium</h3>
            <p className="text-sm text-gray-600 mb-5">
              All Pro features + live mentor sessions + priority support
            </p>
            <Button className="bg-gray-200 hover:bg-gray-300">Get Premium</Button>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6 px-6">
          <details className="p-4 border rounded-md">
            <summary className="font-semibold">Is CareerAI free to use?</summary>
            <p className="mt-2 text-gray-600">
              Yes, you can start with the Free plan and upgrade anytime.
            </p>
          </details>
          <details className="p-4 border rounded-md">
            <summary className="font-semibold">How is it different from Zety or Kickresume?</summary>
            <p className="mt-2 text-gray-600">
              Unlike others, CareerAI is a full career co-pilot: resume, cover letter, mentor, roadmaps,
              interviews, insights, and more in one platform.
            </p>
          </details>
          <details className="p-4 border rounded-md">
            <summary className="font-semibold">Will this really help me get a job?</summary>
            <p className="mt-2 text-gray-600">
              Yes – our AI tools are designed to make you stand out, and many users have already landed jobs at top companies.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-3xl font-extrabold mb-4">Ready to build your career?</h2>
        <p className="mb-6 text-lg">Start with a free resume and upgrade when you're ready to accelerate.</p>
        <Button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">Get Started</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p>© 2025 CareerAI. All rights reserved.</p>
            <p className="text-sm text-gray-400">Made with ❤️ to help job seekers succeed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
