'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);

  const teamSizes = ['1-10', '11-50', '51-200', '200+'];
  const hiringFocus = [
    { id: 'frontend', label: 'Frontend', icon: '⚛️' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'devops', label: 'DevOps', icon: '🔧' },
    { id: 'data-science', label: 'Data Science', icon: '📊' },
    { id: 'mobile', label: 'Mobile', icon: '📱' },
  ];

  const toggleFocus = (id: string) => {
    setSelectedFocus(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-8 py-5 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-transform">
              <span className="text-white font-bold text-base">QS</span>
            </div>
            <span className="font-bold text-gray-900 text-xl font-poppins">QuizSync</span>
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Save & Exit
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-8 py-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 p-12 transform hover:shadow-3xl transition-shadow duration-300">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/40 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4 font-poppins bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tell us about your team
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            This helps us customize your assessment templates.
          </p>

          {/* Form */}
          <form className="space-y-8">
            {/* Company Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                Company name
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-300 bg-white shadow-sm"
              />
            </div>

            {/* Your Role */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                Your role
              </label>
              <div className="relative">
                <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white transition-all duration-200 hover:border-gray-300 shadow-sm cursor-pointer">
                  <option value="">Select your role</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="hiring-manager">Hiring Manager</option>
                  <option value="engineering-manager">Engineering Manager</option>
                  <option value="cto">CTO</option>
                  <option value="hr">HR</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Engineering Team Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                Engineering team size
              </label>
              <div className="grid grid-cols-4 gap-4">
                {teamSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-4 border-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm ${
                      selectedSize === size
                        ? 'border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700 shadow-lg shadow-indigo-500/20'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Hiring Focus */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                Primary hiring focus 
                <span className="text-gray-500 font-normal text-xs bg-gray-100 px-2 py-1 rounded-full">(Select up to 3)</span>
              </label>
              <div className="flex flex-wrap gap-3 mt-4">
                {hiringFocus.map((focus) => (
                  <button
                    key={focus.id}
                    type="button"
                    onClick={() => toggleFocus(focus.id)}
                    disabled={!selectedFocus.includes(focus.id) && selectedFocus.length >= 3}
                    className={`px-5 py-3 border-2 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2.5 transform hover:scale-105 shadow-sm ${
                      selectedFocus.includes(focus.id)
                        ? 'border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700 shadow-lg shadow-indigo-500/20'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100'
                    }`}
                  >
                    <span className="text-lg">{focus.icon}</span>
                    <span>{focus.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-8">
              <Link
                href="/login"
                className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </Link>
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-3 shadow-xl shadow-indigo-500/30 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
              >
                Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
