'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/layout';
import { Share2, RotateCcw, CheckCircle, Mail, Phone, MapPin, Clock, CheckSquare, Shield, Plus } from 'lucide-react';

export default function CandidateProfilePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [note, setNote] = useState('');

  // Mock candidate data
  const candidate = {
    id: params.id,
    name: 'James Calzoni',
    email: 'jam_ca@gmail.com',
    phone: '+1 (555) 013-2834',
    location: 'San Francisco, CA',
    avatar: 'https://i.pravatar.cc/150?img=1',
    assessment: 'Senior Frontend Engineer',
    source: 'LinkedIn',
    status: 'Assessment Completed',
    finalScore: 92,
    totalScore: 100,
    percentile: 'Top 8% of candidates',
    timeTaken: '45m 12s',
    totalTime: '60m allotted',
    testCasesPassed: 24,
    totalTestCases: 25,
    successRate: 96,
    proctoringStatus: 'Clean',
    tabSwitches: 0,
  };

  const timeline = [
    {
      title: 'Assessment Submitted',
      description: 'Candidate completed all sections and submitted the test.',
      time: 'Oct 24, 10:45 AM',
      status: 'completed',
    },
    {
      title: 'Coding Section Completed',
      description: 'Spent 35 minutes on Algorithm challenge.',
      time: 'Oct 24, 10:30 AM',
      status: 'completed',
    },
    {
      title: 'Assessment Started',
      description: 'System check passed. Webcam and screen sharing enabled.',
      time: 'Oct 24, 10:00 AM',
      status: 'completed',
    },
    {
      title: 'Invitation Sent',
      description: 'Sent by Sarah Jenkins (Lead Recruiter).',
      time: 'Oct 22, 02:15 PM',
      status: 'completed',
    },
  ];

  const recruiterNotes = [
    {
      author: 'Sarah Jenkins',
      date: 'Oct 24',
      note: 'Strong performance on the React hooks question. Code is clean and well-commented. Recommend moving to technical interview.',
    },
  ];

  const skillBreakdown = [
    { skill: 'React', score: 95 },
    { skill: 'Algorithms', score: 88 },
    { skill: 'Code Quality', score: 92 },
    { skill: 'System Design', score: 85 },
    { skill: 'CSS/Styling', score: 90 },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'results', label: 'Results & Rubric' },
    { id: 'code', label: 'Code Playback' },
    { id: 'resume', label: 'Resume & Notes' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/candidates" className="hover:text-indigo-600">Candidates</Link>
              <span>›</span>
              <span className="text-gray-900">{candidate.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Share2 className="w-4 h-4" />
                Share Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                <RotateCcw className="w-4 h-4" />
                Request Retake
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700">
                <CheckCircle className="w-4 h-4" />
                Mark Decision
              </button>
            </div>
          </div>
        </header>

        {/* Candidate Info Card */}
        <div className="bg-white border-b border-gray-200 px-6 py-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <img 
                src={candidate.avatar} 
                alt={candidate.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{candidate.name}</h1>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {candidate.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {candidate.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {candidate.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {candidate.location}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">
                    Applied: {candidate.assessment}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                    Source: {candidate.source}
                  </span>
                </div>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center border border-indigo-100">
              <div className="text-xs text-gray-600 mb-2">Final Score</div>
              <div className="text-5xl font-bold text-indigo-600 mb-1">
                {candidate.finalScore}
                <span className="text-2xl text-gray-400">/{candidate.totalScore}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${candidate.finalScore}%` }}
                />
              </div>
              <div className="text-xs text-gray-600">{candidate.percentile}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - Stats */}
              <div className="space-y-6">
                {/* Time Taken */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 text-indigo-600 mb-3">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-semibold">Time Taken</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{candidate.timeTaken}</div>
                  <div className="text-xs text-gray-600">Out of {candidate.totalTime}</div>
                </div>

                {/* Test Cases Passed */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 text-green-600 mb-3">
                    <CheckSquare className="w-5 h-5" />
                    <span className="text-sm font-semibold">Test Cases Passed</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {candidate.testCasesPassed} / {candidate.totalTestCases}
                  </div>
                  <div className="text-xs text-gray-600">{candidate.successRate}% Success Rate</div>
                </div>

                {/* Proctoring Status */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center gap-2 text-purple-600 mb-3">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-semibold">Proctoring Status</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-lg font-bold text-gray-900">{candidate.proctoringStatus}</span>
                  </div>
                  <div className="text-xs text-gray-600">{candidate.tabSwitches} tab switches detected</div>
                </div>
              </div>

              {/* Middle Column - Timeline */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Assessment Timeline</h3>
                <div className="space-y-4">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'completed' ? 'bg-indigo-600' : 'bg-gray-300'
                        }`} />
                        {idx < timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 my-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                          <span className="text-xs text-gray-500">{item.time}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Notes */}
              <div className="space-y-6">
                {/* Recruiter Notes */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-gray-900">Recruiter Notes</h3>
                    <button className="text-indigo-600 hover:text-indigo-700">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-4 mb-4">
                    {recruiterNotes.map((item, idx) => (
                      <div key={idx} className="pb-4 border-b border-gray-100 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-900">{item.author}</span>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-sm text-gray-700">{item.note}</p>
                      </div>
                    ))}
                  </div>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                    rows={3}
                  />
                  <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
                    Save Note
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Skill Breakdown - Below Overview */}
          {activeTab === 'overview' && (
            <div className="mt-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">Skill Breakdown</h3>
                <p className="text-xs text-gray-600 mb-6">Performance across tested competencies compared to average.</p>
                
                <div className="flex items-center justify-center">
                  {/* Radar Chart Placeholder */}
                  <div className="relative w-96 h-96">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Background circles */}
                      <circle cx="200" cy="200" r="150" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="200" cy="200" r="120" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="200" cy="200" r="90" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="200" cy="200" r="60" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      <circle cx="200" cy="200" r="30" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                      
                      {/* Axes */}
                      <line x1="200" y1="200" x2="200" y2="50" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="200" y1="200" x2="350" y2="200" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="200" y1="200" x2="200" y2="350" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="200" y1="200" x2="50" y2="200" stroke="#E5E7EB" strokeWidth="1" />
                      <line x1="200" y1="200" x2="306" y2="106" stroke="#E5E7EB" strokeWidth="1" />
                      
                      {/* Data polygon - James Calzoni */}
                      <polygon
                        points="200,65 290,140 270,250 130,250 110,140"
                        fill="#818CF8"
                        fillOpacity="0.3"
                        stroke="#6366F1"
                        strokeWidth="2"
                      />
                      
                      {/* Average polygon */}
                      <polygon
                        points="200,95 260,160 240,240 160,240 140,160"
                        fill="none"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      
                      {/* Labels */}
                      <text x="200" y="40" textAnchor="middle" className="text-xs fill-gray-600">React</text>
                      <text x="320" y="110" textAnchor="start" className="text-xs fill-gray-600">Algorithms</text>
                      <text x="290" y="270" textAnchor="start" className="text-xs fill-gray-600">Code Quality</text>
                      <text x="110" y="270" textAnchor="end" className="text-xs fill-gray-600">System Design</text>
                      <text x="80" y="110" textAnchor="end" className="text-xs fill-gray-600">CSS/Styling</text>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-8 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-indigo-600" />
                    <span className="text-sm text-gray-700">James Calzoni</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-gray-400 border-dashed border-t-2" />
                    <span className="text-sm text-gray-700">Average Candidate</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab === 'results' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Results & Rubric</h3>
              <p className="text-gray-600">Detailed results and scoring rubric will be displayed here.</p>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Code Playback</h3>
              <p className="text-gray-600">Code playback and recording will be displayed here.</p>
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resume & Notes</h3>
              <p className="text-gray-600">Resume and additional notes will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
