'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Filter, MoreVertical, Users, Clock, BarChart3 } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';

export default function AssessmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const assessments = [
    {
      id: 1,
      name: 'Senior Frontend React Test',
      role: 'Frontend Developer',
      candidates: 46,
      status: 'active',
      avgScore: 82,
      duration: '45 min',
      questions: 25,
      lastEdited: 'Just now',
      createdBy: 'Sarah Jenkins',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      name: 'Backend System Design',
      role: 'Backend Developer',
      candidates: 28,
      status: 'active',
      avgScore: 76,
      duration: '60 min',
      questions: 30,
      lastEdited: '2 hours ago',
      createdBy: 'John Doe',
      tags: ['System Design', 'Backend', 'Architecture']
    },
    {
      id: 3,
      name: 'Full Stack Challenge',
      role: 'Full Stack Developer',
      candidates: 19,
      status: 'draft',
      avgScore: 68,
      duration: '90 min',
      questions: 40,
      lastEdited: '1 day ago',
      createdBy: 'Sarah Jenkins',
      tags: ['Full Stack', 'React', 'Node.js']
    },
    {
      id: 4,
      name: 'Data Science Fundamentals',
      role: 'Data Scientist',
      candidates: 35,
      status: 'active',
      avgScore: 85,
      duration: '50 min',
      questions: 28,
      lastEdited: '3 days ago',
      createdBy: 'Alex Chen',
      tags: ['Python', 'ML', 'Statistics']
    },
    {
      id: 5,
      name: 'DevOps Engineering Assessment',
      role: 'DevOps Engineer',
      candidates: 22,
      status: 'paused',
      avgScore: 71,
      duration: '55 min',
      questions: 32,
      lastEdited: '5 days ago',
      createdBy: 'Mike Wilson',
      tags: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 6,
      name: 'Mobile Development iOS',
      role: 'iOS Developer',
      candidates: 15,
      status: 'draft',
      avgScore: 0,
      duration: '40 min',
      questions: 20,
      lastEdited: '1 week ago',
      createdBy: 'Sarah Jenkins',
      tags: ['Swift', 'iOS', 'Mobile']
    }
  ];

  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assessment.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || assessment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Assessments</h1>
              <p className="text-xs text-gray-600 mt-0.5">Create and manage your technical assessments</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Invite
              </button>
              <Link href="/assessments/new">
                <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  New Assessment
                </button>
              </Link>
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

        {/* Filters and Search */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search assessments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  filterStatus === 'all' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  filterStatus === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterStatus('draft')}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  filterStatus === 'draft' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Draft
              </button>
              <button
                onClick={() => setFilterStatus('paused')}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  filterStatus === 'paused' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Paused
              </button>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Assessments Grid */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAssessments.map((assessment) => (
              <Link key={assessment.id} href={`/assessments/${assessment.id}`}>
                <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {assessment.name}
                      </h3>
                      <p className="text-xs text-gray-600">{assessment.role}</p>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${
                      assessment.status === 'active' ? 'bg-green-100 text-green-700' :
                      assessment.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                    </span>
                    {assessment.avgScore > 0 && (
                      <span className="text-xs text-gray-600">
                        Avg: <span className="font-semibold text-gray-900">{assessment.avgScore}%</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{assessment.candidates}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>{assessment.questions} Qs</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {assessment.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                    <span>By {assessment.createdBy}</span>
                    <span>{assessment.lastEdited}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredAssessments.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No assessments found</h3>
              <p className="text-sm text-gray-600 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterStatus('all');
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
