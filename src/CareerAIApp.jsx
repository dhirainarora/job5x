import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
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
            <p className="mt-2 text-sm">
              Score: <span className="font-semibold">65/100</span>
            </p>
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
            <p className="mb-2">
              <strong>Next action:</strong> Add a quantified achievement to Work Experience.
            </p>
            <p className="mb-1">
              Deadline: <span className="font-medium">2 days</span>
            </p>
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
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-blue-600 transition">
            FAQ
          </a>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Login</Button>
        </nav>
      </header>

      {/* Hero */}
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
          <Button className="px-12 py-6 text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg rounded-xl">
            Start Free Today
          </Button>
        </motion.div>
        <p className="mt-4 text-sm text-gray-600 font-medium">
          ⚡ Early Bird Offer: 70% Off First 100 Users
        </p>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6">Preview: Logged-in Dashboard</h2>
          <CareerDashboard />
        </div>
      </section>
    </div>
  );
}
