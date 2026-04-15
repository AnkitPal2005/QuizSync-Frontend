'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    details: 'You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    constraints: [
      '2 ≤ nums.length ≤ 10⁴',
      '-10⁹ ≤ nums[i] ≤ 10⁹',
      '-10⁹ ≤ target ≤ 10⁹',
      'Only one valid answer exists.'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    starterCode: {
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your code here
};`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`
    }
  },
  {
    id: 2,
    title: 'Merge Intervals',
    difficulty: 'Medium',
    description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.',
    details: 'Return an array of the non-overlapping intervals that cover all the intervals in the input.',
    examples: [
      {
        input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
        output: '[[1,6],[8,10],[15,18]]',
        explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].'
      }
    ],
    constraints: [
      '1 ≤ intervals.length ≤ 10⁴',
      'intervals[i].length == 2',
      '0 ≤ starti ≤ endi ≤ 10⁴'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    starterCode: {
      python: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Write your code here
        pass`,
      javascript: `/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Write your code here
};`,
      java: `class Solution {
    public int[][] merge(int[][] intervals) {
        // Write your code here
    }
}`
    }
  },
  {
    id: 3,
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    details: 'Implement the LRUCache class with get and put methods that run in O(1) time complexity.',
    examples: [
      {
        input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)',
        output: '1, -1',
        explanation: 'Cache capacity is 2. After put(3,3), key 2 is evicted.'
      }
    ],
    constraints: [
      '1 ≤ capacity ≤ 3000',
      '0 ≤ key ≤ 10⁴',
      '0 ≤ value ≤ 10⁵'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    starterCode: {
      python: `class LRUCache:
    def __init__(self, capacity: int):
        # Write your code here
        pass
    
    def get(self, key: int) -> int:
        pass
    
    def put(self, key: int, value: int) -> None:
        pass`,
      javascript: `/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // Write your code here
};

LRUCache.prototype.get = function(key) {
    
};

LRUCache.prototype.put = function(key, value) {
    
};`,
      java: `class LRUCache {
    public LRUCache(int capacity) {
        // Write your code here
    }
    
    public int get(int key) {
        
    }
    
    public void put(int key, int value) {
        
    }
}`
    }
  }
];

export default function CodingInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [language, setLanguage] = useState<'python' | 'javascript' | 'java'>('python');
  const [code, setCode] = useState(questions[0].starterCode.python);
  const [activeTab, setActiveTab] = useState<'description' | 'testcases'>('description');
  const [timeLeft, setTimeLeft] = useState('01:29:45');

  const question = questions[currentQuestion];

  const handleLanguageChange = (newLang: 'python' | 'javascript' | 'java') => {
    setLanguage(newLang);
    setCode(question.starterCode[newLang]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">QS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">QuizSync</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{timeLeft}</span>
          </div>

          <div className="flex items-center gap-2 text-green-600 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Autosaved just now</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </button>
          <Link
            href="/assessment/submitted"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            Submit Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-2">
        <div className="flex items-center gap-8 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-full h-1 bg-indigo-600 rounded-full" style={{ width: '60px' }}></div>
            <span className="text-gray-600 font-medium">SYSTEM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-1 bg-indigo-600 rounded-full" style={{ width: '60px' }}></div>
            <span className="text-gray-600 font-medium">RULES</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-1 bg-indigo-600 rounded-full" style={{ width: '60px' }}></div>
            <span className="text-gray-600 font-medium">IDENTITY</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-1 bg-indigo-600 rounded-full" style={{ width: '60px' }}></div>
            <span className="text-indigo-600 font-semibold">ASSESSMENT</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Questions */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <div className="text-xs font-semibold text-gray-500 mb-3">QUESTIONS</div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-gray-900">{currentQuestion + 1}/3</span>
            </div>
            <div className="space-y-2">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestion(idx);
                    setCode(q.starterCode[language]);
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    currentQuestion === idx
                      ? 'bg-white border-indigo-600 shadow-sm'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${
                      currentQuestion === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {q.icon}
                    </div>
                    <span className={`text-xs font-semibold ${currentQuestion === idx ? 'text-indigo-600' : 'text-gray-900'}`}>
                      {idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gray-900 mb-1">{q.title}</div>
                  <div className={`text-xs px-2 py-0.5 rounded inline-block ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Overall Progress */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs font-semibold text-gray-500 mb-2">Overall Progress</div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>
        </div>

        {/* Middle - Problem Description */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="p-6">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-3 px-1 font-semibold text-sm border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Description
                </div>
              </button>
              <button
                onClick={() => setActiveTab('testcases')}
                className={`pb-3 px-1 font-semibold text-sm border-b-2 transition-colors ${
                  activeTab === 'testcases'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Test Cases
              </button>
              <div className="ml-auto">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getDifficultyColor(question.difficulty)}`}>
                  {question.difficulty}
                </span>
              </div>
            </div>

            {activeTab === 'description' ? (
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
                    {currentQuestion + 1}. {question.title}
                  </h1>
                  <p className="text-gray-700 leading-relaxed">{question.description}</p>
                  <p className="text-gray-700 leading-relaxed mt-2">{question.details}</p>
                </div>

                {/* Examples */}
                <div>
                  {question.examples.map((example, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">EXAMPLE {idx + 1}:</h3>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                        <div className="mb-1">
                          <span className="font-semibold">Input:</span> {example.input}
                        </div>
                        <div className="mb-1">
                          <span className="font-semibold">Output:</span> {example.output}
                        </div>
                        {example.explanation && (
                          <div className="text-gray-600">
                            <span className="font-semibold">Explanation:</span> {example.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">CONSTRAINTS:</h3>
                  <ul className="space-y-1">
                    {question.constraints.map((constraint, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Test Cases</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Case
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-sm text-gray-700 mb-2">Case 1</div>
                    <div className="text-sm text-gray-600">nums = [2,7,11,15]</div>
                    <div className="text-sm text-gray-600">target = 9</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="font-semibold text-sm text-gray-700 mb-2">Case 2</div>
                    <div className="text-sm text-gray-600">nums = [3,2,4]</div>
                    <div className="text-sm text-gray-600">target = 6</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right - Code Editor */}
        <div className="flex-1 flex flex-col bg-gray-900 border-l border-gray-700">
          {/* Editor Header */}
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value as any)}
                  className="bg-gray-700 text-white px-3 py-1.5 rounded border border-gray-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="python">Python 3</option>
                  <option value="javascript">JavaScript</option>
                  <option value="java">Java</option>
                </select>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none"
              style={{ tabSize: 4 }}
              spellCheck={false}
            />
          </div>

          {/* Editor Footer */}
          <div className="bg-gray-800 border-t border-gray-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gray-700 text-white rounded font-medium hover:bg-gray-600 transition-colors text-sm">
                Test Cases
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white rounded font-medium hover:bg-gray-600 transition-colors text-sm">
                Test Results
              </button>
            </div>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Run Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
