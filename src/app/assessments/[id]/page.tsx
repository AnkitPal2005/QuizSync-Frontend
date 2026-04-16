'use client';

import { useState } from 'react';
import { ChevronLeft, Eye, Link2, Share2, Plus, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function AssessmentDetailPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'details' | 'questions' | 'settings'>('questions');
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [timeLimit, setTimeLimit] = useState(true);
  const [randomizeOptions, setRandomizeOptions] = useState(true);

  const sections = [
    { id: 1, name: 'React Core', questions: 3 },
    { id: 2, name: 'State Mgmt', questions: 5 },
    { id: 3, name: 'System Design', questions: 10 },
  ];

  const questions = [
    {
      id: 1,
      type: 'Multiple Choice',
      difficulty: 'Medium',
      text: 'What is the primary difference between useMemo and useCallback hooks in React?',
      options: [
        'useMemo memoizes a value, while useCallback maintains a function reference',
        'useMemo is for synchronous rendering, useCallback is for asynchronous',
        'There is no difference, they are aliases for the same underlying hook'
      ],
      correctAnswer: 1,
      points: 10,
      tags: ['React', 'Hooks']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Senior Frontend React Test</h1>
                <p className="text-sm text-gray-500">Last edited: Just now</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Link2 className="w-4 h-4" />
                Get Link
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Share2 className="w-4 h-4" />
                Publish
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Left Panel - Sections & Questions */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    activeTab === 'details'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('questions')}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    activeTab === 'questions'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Questions
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    activeTab === 'settings'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Settings
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="text-xs font-semibold text-gray-500 mb-3">ASSESSMENT STRUCTURE</div>
            </div>

            <div className="flex-1 overflow-y-auto px-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-500 mb-2">SECTIONS</div>
                {sections.map((section, idx) => (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {idx + 1}. {section.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{section.questions} Qs</span>
                  </div>
                ))}
                <button className="w-full flex items-center justify-center gap-2 p-3 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>
            </div>
          </div>

          {/* Center Panel - Question Editor */}
          <div className="flex-1 bg-white p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">1. React Core Concepts</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Fundamental questions about React lifecycle, hooks, and component architecture.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      Multiple Choice
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                      Medium
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="text-gray-400">📋</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="text-gray-400">🗑️</span>
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Text
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    defaultValue={questions[0].text}
                  />
                </div>

                <div className="space-y-3">
                  {questions[0].options.map((option, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="answer"
                        defaultChecked={idx === questions[0].correctAnswer}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <input
                          type="text"
                          defaultValue={option}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                    <Plus className="w-4 h-4" />
                    Add Option
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                    Coding Test
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                    Hard
                  </span>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  Implement a custom useDebounce hook that...
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span>⏱️ 15 mins</span>
                  <span>💻 JavaScript, TypeScript</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Plus className="w-4 h-4" />
                  Create New Question
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  <Plus className="w-4 h-4" />
                  Add from Question Bank
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Question Properties */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Question Properties</h3>
              <button className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BASIC SETTINGS
                </label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Question Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Multiple Choice</option>
                      <option>Single Choice</option>
                      <option>True/False</option>
                      <option>Coding</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Difficulty Level</label>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                        Easy
                      </button>
                      <button className="px-3 py-1 text-sm bg-orange-100 text-orange-700 border border-orange-300 rounded">
                        Medium
                      </button>
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                        Hard
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Points / Weight</label>
                    <input
                      type="number"
                      defaultValue="10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  RULES & LIMITS
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Time Limit</div>
                      <div className="text-xs text-gray-500">Enforce time per question</div>
                    </div>
                    <button
                      onClick={() => setTimeLimit(!timeLimit)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        timeLimit ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          timeLimit ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {timeLimit && (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        defaultValue="5"
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg"
                      />
                      <span className="text-sm text-gray-600">minutes</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900">Randomize Options</div>
                      <div className="text-xs text-gray-500">Shuffle choices for candidates</div>
                    </div>
                    <button
                      onClick={() => setRandomizeOptions(!randomizeOptions)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        randomizeOptions ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          randomizeOptions ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TAGS & METADATA
                </label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1">
                        React
                        <button className="hover:text-blue-900">✕</button>
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1">
                        Hooks
                        <button className="hover:text-blue-900">✕</button>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Add a tag..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
