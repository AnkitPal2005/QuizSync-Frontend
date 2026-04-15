'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuestionBankPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);
  const [activeFilters, setActiveFilters] = useState(['DSA', 'Hard']);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([1]);

  const stats = [
    { label: 'Total Questions', value: '1,248', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { label: 'Coding Tasks', value: '452', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { label: 'Multiple Choice', value: '796', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { label: 'Avg Success Rate', value: '68%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
  ];

  const questions = [
    {
      id: 1,
      title: 'Implement LRU Cache',
      languages: 'Python, Java, C++',
      category: 'DSA',
      difficulty: 'Hard',
      estTime: '45 mins',
      usage: '1.2k',
      type: 'coding'
    },
    {
      id: 2,
      title: 'React Hooks Lifecycle',
      languages: 'Multiple Choice',
      category: 'Frontend',
      difficulty: 'Medium',
      estTime: '3 mins',
      usage: '85C',
      type: 'mcq'
    },
    {
      id: 3,
      title: 'Optimize SQL Query',
      languages: 'PostgreSQL, MySQL',
      category: 'SQL',
      difficulty: 'Hard',
      estTime: '20 mins',
      usage: '42C',
      type: 'coding'
    }
  ];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'assessments', label: 'Assessments', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'question-bank', label: 'Question Bank', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', active: true },
    { id: 'candidates', label: 'Candidates', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'reports', label: 'Reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const toggleQuestionSelection = (id: number) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(q => q !== id));
    } else {
      setSelectedQuestions([...selectedQuestions, id]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-5 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">QS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">QuizSync</span>
          </Link>
        </div>

        <nav className="flex-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id === 'question-bank' ? '/question-bank' : `/${item.id}`}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                item.active
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </Link>
          ))}
        </nav>

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
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Problem Library</h1>
              <p className="text-sm text-gray-600">Manage, organize, and create questions for your assessments.</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Import
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Question
              </button>
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

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Questions List */}
          <div className="flex-1 flex flex-col bg-white border-r border-gray-200">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Search questions, tags" 
                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Category</option>
                  <option>DSA</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>SQL</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Language</option>
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>Java</option>
                </select>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </button>
              </div>

              {activeFilters.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Active filters:</span>
                  {activeFilters.map((filter) => (
                    <span key={filter} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {filter}
                      <button onClick={() => removeFilter(filter)} className="hover:text-gray-900">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                  <button onClick={() => setActiveFilters([])} className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
                    Clear all
                  </button>
                </div>
              )}
            </div>

            {/* Questions Table */}
            <div className="flex-1 overflow-auto">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr className="border-b border-gray-200">
                    <th className="w-10 px-4 py-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Question</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Category</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Difficulty</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Est. Time</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => (
                    <tr 
                      key={question.id}
                      onClick={() => setSelectedQuestion(question.id)}
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        selectedQuestion === question.id ? 'bg-indigo-50' : ''
                      }`}
                    >
                      <td className="px-4 py-4">
                        <input 
                          type="checkbox" 
                          checked={selectedQuestions.includes(question.id)}
                          onChange={() => toggleQuestionSelection(question.id)}
                          className="rounded border-gray-300"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-medium text-sm text-gray-900">{question.title}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          {question.languages}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {question.category}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          question.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                          question.difficulty === 'Medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {question.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">{question.estTime}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{question.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">Showing 1 to 10 of 1,248 entries</div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">3</button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Question Detail Panel */}
          {selectedQuestion && (
            <div className="w-96 bg-white flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">DSA</span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Hard</span>
                  <span className="text-xs text-gray-500">ID: Q-8843</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button onClick={() => setSelectedQuestion(null)} className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Implement LRU Cache</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Estimated Time</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      45 Minutes
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Supported Languages</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      3 Languages
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">PROBLEM STATEMENT</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
                  </p>
                  <p className="text-sm text-gray-700 mb-4">Implement the LRUCache class:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><code className="bg-gray-100 px-1 rounded">LRUCache(int capacity)</code> Initialize the LRU cache with positive size capacity.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><code className="bg-gray-100 px-1 rounded">int get(int key)</code> Return the value of the key if the key exists, otherwise return -1.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><code className="bg-gray-100 px-1 rounded">void put(int key, int value)</code> Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200">
                <button className="w-full px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add to Assessment
                </button>
                <button className="w-full mt-2 px-4 py-2 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
