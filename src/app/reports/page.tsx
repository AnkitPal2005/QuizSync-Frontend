'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/layout';
import { Download, Calendar, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

export default function ReportsPage() {
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const [assessmentFilter, setAssessmentFilter] = useState('All Assessments');

  const stats = [
    { label: 'Total Candidates', value: '1,248', change: '↑ 12% from last month', trend: 'up' },
    { label: 'Average Score', value: '76/100', change: '↑ 4.2% from last month', trend: 'up' },
    { label: 'Completion Rate', value: '89%', change: '↓ 1.5% from last month', trend: 'down' },
    { label: 'Avg. Time Spent', value: '42m', change: 'Consistent with last month', trend: 'neutral' },
  ];

  const assessmentBreakdown = [
    { name: 'Frontend React Mid-Level', candidates: 428, avgScore: 78, completion: 92, flagged: 12 },
    { name: 'Backend Java Senior', candidates: 315, avgScore: 65, completion: 85, flagged: 3 },
    { name: 'Data Science Entry', candidates: 505, avgScore: 82, completion: 95, flagged: 0 },
  ];

  const scoreDistribution = [
    { range: 'Excellent (90-100)', count: 187, percentage: 15 },
    { range: 'Good (75-89)', count: 449, percentage: 36 },
    { range: 'Average (60-74)', count: 374, percentage: 30 },
    { range: 'Below Avg (<60)', count: 238, percentage: 19 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Analytics Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <select 
                value={assessmentFilter}
                onChange={(e) => setAssessmentFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>All Assessments</option>
                <option>Frontend React Mid-Level</option>
                <option>Backend Java Senior</option>
                <option>Data Science Entry</option>
              </select>
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="bg-white border-b border-gray-200 px-6 py-6">
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className={`flex items-center gap-1 text-xs font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                  {stat.trend === 'down' && <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Assessment Funnel */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">Assessment Funnel</h3>
              <p className="text-xs text-gray-600 mb-6">Conversion rates from invitation to completion.</p>
              
              <div className="space-y-3">
                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Invited</span>
                    <span className="text-sm font-semibold text-gray-900">1500 (100%)</span>
                  </div>
                  <div className="w-full bg-indigo-100 rounded h-12 flex items-center justify-center">
                    <span className="text-sm font-semibold text-indigo-700">100%</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Started</span>
                    <span className="text-sm font-semibold text-gray-900">1248 (83%)</span>
                  </div>
                  <div className="w-5/6 bg-indigo-200 rounded h-12 flex items-center justify-center">
                    <span className="text-sm font-semibold text-indigo-700">83%</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Completed Coding</span>
                    <span className="text-sm font-semibold text-gray-900">1126 (75%)</span>
                  </div>
                  <div className="w-3/4 bg-indigo-400 rounded h-12 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">75%</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Submitted</span>
                    <span className="text-sm font-semibold text-gray-900">1110 (74%)</span>
                  </div>
                  <div className="w-2/3 bg-indigo-600 rounded h-12 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">74%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Distribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">Score Distribution</h3>
              <p className="text-xs text-gray-600 mb-6">Overall candidate performance.</p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#E5E7EB" strokeWidth="16" />
                    <circle 
                      cx="96" 
                      cy="96" 
                      r="80" 
                      fill="none" 
                      stroke="#6366F1" 
                      strokeWidth="16"
                      strokeDasharray="502"
                      strokeDashoffset="125"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">76</div>
                      <div className="text-xs text-gray-600">Avg Score</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {scoreDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        idx === 0 ? 'bg-green-500' :
                        idx === 1 ? 'bg-blue-500' :
                        idx === 2 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <span className="text-sm text-gray-700">{item.range}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                      <span className="text-xs text-gray-500">({item.percentage}%)</span>
                    </div>
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
                <p className="text-xs text-gray-600">Monthly average scores across all assessments.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded">
                  Scores
                </button>
                <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded">
                  Completion
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64 flex items-end justify-between gap-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => (
                <div key={month} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-indigo-200 rounded-t hover:bg-indigo-300 transition-colors cursor-pointer"
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  />
                  <span className="text-xs text-gray-600 mt-2">{month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Breakdown */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Assessment Breakdown</h3>
                <p className="text-xs text-gray-600">Detailed metrics per active assessment.</p>
              </div>
              <input
                type="text"
                placeholder="Search assessments..."
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Assessment Name</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Candidates</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Avg. Score</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Completion</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Plagiarism Flags</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessmentBreakdown.map((assessment, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="text-sm font-medium text-gray-900">{assessment.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{assessment.candidates}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${assessment.avgScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{assessment.avgScore}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{assessment.completion}%</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        assessment.flagged === 0 ? 'bg-green-100 text-green-700' :
                        assessment.flagged < 5 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {assessment.flagged} Flagged
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
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
