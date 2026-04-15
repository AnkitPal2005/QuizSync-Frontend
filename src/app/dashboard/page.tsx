'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('reports');
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const [assessmentFilter, setAssessmentFilter] = useState('All Assessments');

  const stats = [
    {
      label: 'Total Candidates',
      value: '1,248',
      change: '↑ 12% from last month',
      trend: 'up'
    },
    {
      label: 'Average Score',
      value: '76',
      subValue: '/100',
      change: '↑ 4.2% from last month',
      trend: 'up'
    },
    {
      label: 'Completion Rate',
      value: '89%',
      change: '↓ 1.8% from last month',
      trend: 'down'
    },
    {
      label: 'Avg. Time Spent',
      value: '42',
      subValue: 'm',
      change: 'Consistent with last month',
      trend: 'neutral'
    }
  ];

  const funnelData = [
    { stage: 'Invited', count: 1500, percentage: 100, width: 100 },
    { stage: 'Started', count: 1248, percentage: 83, width: 90 },
    { stage: 'Completed Coding', count: 1150, percentage: 77, width: 80 },
    { stage: 'Submitted', count: 1110, percentage: 74, width: 70 }
  ];

  const assessmentBreakdown = [
    {
      name: 'Frontend React Mid-Level',
      candidates: 428,
      avgScore: 78,
      completion: 92,
      plagiarismFlags: 12,
      flagType: 'flagged'
    },
    {
      name: 'Backend Java Senior',
      candidates: 315,
      avgScore: 65,
      completion: 85,
      plagiarismFlags: 3,
      flagType: 'normal'
    },
    {
      name: 'Data Science Entry',
      candidates: 505,
      avgScore: 82,
      completion: 95,
      plagiarismFlags: 0,
      flagType: 'clean'
    }
  ];

  const monthlyData = [
    { month: 'Jan' }, { month: 'Feb' }, { month: 'Mar' }, { month: 'Apr' },
    { month: 'May' }, { month: 'Jun' }, { month: 'Jul' }, { month: 'Aug' },
    { month: 'Sep' }, { month: 'Oct' }, { month: 'Nov' }, { month: 'Dec', value: 82 }
  ];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'assessments', label: 'Assessments', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'question-bank', label: 'Question Bank', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'candidates', label: 'Candidates', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'reports', label: 'Reports & Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', active: true },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">QS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">QuizSync</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                item.active || activeNav === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Quota Card */}
        <div className="p-4 m-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-xs text-gray-600 mb-2">Assessment Quota</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <button className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Analytics Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2.5">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">Sarah Jenkins</div>
                  <div className="text-xs text-gray-500">Lead Recruiter</div>
                </div>
                <img 
                  src="https://i.pravatar.cc/150?img=5" 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {/* Filters */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <select 
                value={assessmentFilter}
                onChange={(e) => setAssessmentFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>All Assessments</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Data Science</option>
              </select>
              
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
              </select>
            </div>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  {stat.subValue && <span className="text-lg text-gray-500">{stat.subValue}</span>}
                </div>
                <div className={`text-xs font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Assessment Funnel */}
            <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-base font-bold text-gray-900 mb-1">Assessment Funnel</h3>
                <p className="text-sm text-gray-600">Conversion rates from invitation to completion.</p>
              </div>

              <div className="space-y-4">
                {funnelData.map((stage, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-700">{stage.stage}</div>
                    <div className="flex-1">
                      <div 
                        className="bg-indigo-500 rounded px-4 py-3 text-white text-sm font-medium flex items-center justify-between"
                        style={{ 
                          width: `${stage.width}%`,
                          backgroundColor: `rgba(99, 102, 241, ${1 - idx * 0.15})`
                        }}
                      >
                        <span>{stage.count}</span>
                        <span>{stage.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Distribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-base font-bold text-gray-900 mb-1">Score Distribution</h3>
                <p className="text-sm text-gray-600">Overall candidate performance.</p>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" fill="none" stroke="#E5E7EB" strokeWidth="20" />
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="70" 
                      fill="none" 
                      stroke="#6366F1" 
                      strokeWidth="20"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">76</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { label: 'Good (75-89)', color: 'bg-indigo-600' },
                  { label: 'Average (60-74)', color: 'bg-indigo-400' },
                  { label: 'Excellent (90-100)', color: 'bg-indigo-800' },
                  { label: 'Below Avg (<60)', color: 'bg-gray-300' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm ${item.color}`}></div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Average Score Trend */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Average Score Trend</h3>
                <p className="text-sm text-gray-600">Monthly average scores across all assessments.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span className="text-xs text-gray-600">Scores</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-200 rounded"></div>
                  <span className="text-xs text-gray-600">Completion</span>
                </div>
              </div>
            </div>

            <div className="h-48 flex items-end justify-between gap-2">
              {monthlyData.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div 
                      className={`w-full rounded-t ${data.value ? 'bg-indigo-600' : 'bg-indigo-100'}`}
                      style={{ height: data.value ? `${data.value * 2}px` : '40px' }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Breakdown */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Assessment Breakdown</h3>
                <p className="text-sm text-gray-600">Detailed metrics per active assessment.</p>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search assessments..." 
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Assessment Name</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Candidates</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Avg. Score</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Completion</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Plagiarism Flags</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessmentBreakdown.map((assessment, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900">{assessment.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{assessment.candidates}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">{assessment.avgScore}%</span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-indigo-600 h-1.5 rounded-full" 
                            style={{ width: `${assessment.avgScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{assessment.completion}%</td>
                    <td className="py-4 px-4">
                      <span className={`text-sm font-semibold ${
                        assessment.flagType === 'flagged' ? 'text-red-600' :
                        assessment.flagType === 'normal' ? 'text-gray-700' : 'text-green-600'
                      }`}>
                        {assessment.plagiarismFlags} {assessment.flagType === 'flagged' ? 'flagged' : assessment.flagType === 'clean' ? 'flagged' : 'flagged'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
