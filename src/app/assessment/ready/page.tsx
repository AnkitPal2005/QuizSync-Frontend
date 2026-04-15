'use client';

import Link from 'next/link';

export default function ReadyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">QS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">QuizSync</span>
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
            Help
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="h-[calc(100vh-73px)] flex items-center justify-center px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-4xl">
          {/* Header with Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Pre-Test Setup</h1>
              <span className="text-sm text-gray-600 font-semibold">Step 4 of 4</span>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-green-500 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">System Check</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-green-500 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">Identity</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-green-500 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">Instructions</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-indigo-600 rounded-full mb-2"></div>
                <span className="text-xs font-semibold text-indigo-600">Ready</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">
              You're all set!
            </h2>
            <p className="text-gray-600 text-sm">
              Everything is ready for your assessment. Click the button below to enter fullscreen mode and begin.
            </p>
          </div>

          {/* Assessment Summary */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center font-poppins">Assessment Summary</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">Position</p>
                  <p className="text-sm font-bold text-gray-900">Sr. Frontend</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">Duration</p>
                  <p className="text-sm font-bold text-gray-900">90 Minutes</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">Tasks</p>
                  <p className="text-sm font-bold text-gray-900">3 Challenges</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 font-medium">Proctoring</p>
                  <p className="text-sm font-bold text-gray-900">Cam & Screen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Reminders */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Before you start:</h4>
                <p className="text-xs text-gray-700">Ensure you're in a quiet environment. Keep your face visible to the camera. Do not switch tabs or leave the assessment window.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link
              href="/assessment/instructions"
              className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <button
              className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all shadow-xl shadow-green-500/30 transform hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
