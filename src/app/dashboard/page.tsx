'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components/shared';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const { toasts, success, info, removeToast } = useToast();
  const router = useRouter();

  const stats = [
    { label: 'Active Assessments', value: '24', change: '↑ 12%', trend: 'up', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'indigo' },
    { label: 'Candidates in Progress', value: '142', change: '↑ 8%', trend: 'up', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'blue' },
    { label: 'Completion Rate', value: '78%', change: '— 0%', trend: 'neutral', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'purple' },
    { label: 'Avg. Time to Complete', value: '42m', change: '↓ 4m', trend: 'down', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'orange' }
  ];

  const activities = [
    { type: 'completion', user: 'Alex Chen', detail: 'completed test', assessment: 'Scored 87% on Senior Frontend React', time: '2 hours ago', color: 'green' },
    { type: 'publish', title: 'Assessment Published', detail: '"Data Science Fundamentals" is now live.', time: '3 hours ago', color: 'blue' },
    { type: 'invite', title: '5 Candidates Invited', detail: 'Invites sent for Backend System Design', avatars: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3'], time: '5 hours ago', color: 'indigo' },
    { type: 'maintenance', title: 'System Maintenance', detail: 'Scheduled DB updates completed.', time: '1 days ago', color: 'orange' }
  ];

  const assessments = [
    { name: 'Senior Frontend React', role: 'Frontend Dev', candidates: 46, status: 'invited', avgScore: 82, statusLabel: 'Active' },
    { name: 'Backend System Design', role: 'Backend Dev', candidates: 28, status: 'invited', avgScore: 76, statusLabel: 'Active' },
    { name: 'Full Stack Challenge', role: 'Full Stack', candidates: 19, status: 'started', avgScore: 68, statusLabel: 'Draft' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <ToastContainer toasts={toasts} onClose={removeToast} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Welcome back, Sarah</h1>
              <p className="text-xs text-gray-600 mt-0.5">Here's what's happening with your technical hiring today.</p>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => success('Invite feature coming soon!')}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Invite
              </button>
              <button 
                onClick={() => router.push('/assessments/new')}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Assessment
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors relative">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-xs font-semibold text-gray-900">Sarah Jenkins</div>
                  <div className="text-[10px] text-gray-500">Lead Recruiter</div>
                </div>
                <img 
                  src="https://i.pravatar.cc/150?img=5" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-5">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center text-${stat.color}-600`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <span className={`text-xs font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Completion Trends */}
            <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">Completion Trends</h3>
                  <p className="text-xs text-gray-600">Assessment completions over the last 30 days</p>
                </div>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>

              {/* Chart */}
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818CF8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 150 Q 50 140, 100 130 T 200 110 T 300 100 T 400 90 T 500 70 T 600 60 L 600 200 L 0 200 Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M 0 150 Q 50 140, 100 130 T 200 110 T 300 100 T 400 90 T 500 70 T 600 60"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-[10px] text-gray-500">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">Recent Activity</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${activity.color}-500 mt-1.5 flex-shrink-0`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-900">
                        {activity.user && <span className="font-semibold">{activity.user}</span>}
                        {activity.title && <span className="font-semibold">{activity.title}</span>}
                        {activity.user && <span className="text-gray-600"> {activity.detail}</span>}
                      </div>
                      {activity.assessment && (
                        <div className="text-[10px] text-gray-600 mt-0.5">{activity.assessment}</div>
                      )}
                      {activity.detail && !activity.user && (
                        <div className="text-[10px] text-gray-600 mt-0.5">{activity.detail}</div>
                      )}
                      {activity.avatars && (
                        <div className="flex -space-x-1.5 mt-1.5">
                          {activity.avatars.map((avatar, i) => (
                            <img key={i} src={avatar} alt="" className="w-5 h-5 rounded-full border-2 border-white" />
                          ))}
                        </div>
                      )}
                      <div className="text-[10px] text-gray-500 mt-0.5">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => info('Viewing all activity...')}
                className="w-full mt-4 text-xs text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                View All Activity
              </button>
            </div>
          </div>

          {/* Active Assessments */}
          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Active Assessments</h3>
              <button 
                onClick={() => router.push('/assessments')}
                className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                View All
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 text-[10px] font-semibold text-gray-600 uppercase">Assessment Name</th>
                  <th className="text-left py-2 px-3 text-[10px] font-semibold text-gray-600 uppercase">Role</th>
                  <th className="text-left py-2 px-3 text-[10px] font-semibold text-gray-600 uppercase">Candidates</th>
                  <th className="text-left py-2 px-3 text-[10px] font-semibold text-gray-600 uppercase">Avg Score</th>
                  <th className="text-left py-2 px-3 text-[10px] font-semibold text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-3">
                      <Link href={`/assessments/${idx + 1}`} className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                        {assessment.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-xs text-gray-600">{assessment.role}</td>
                    <td className="py-3 px-3">
                      <span className="text-xs text-gray-900">{assessment.candidates}</span>
                      <span className="text-[10px] text-gray-500 ml-1">{assessment.status}</span>
                    </td>
                    <td className="py-3 px-3 text-xs font-semibold text-gray-900">{assessment.avgScore}%</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        assessment.statusLabel === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {assessment.statusLabel}
                      </span>
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
