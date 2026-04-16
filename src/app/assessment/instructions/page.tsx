'use client';

import Link from 'next/link';

export default function InstructionsPage() {
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
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-5xl max-h-full overflow-y-auto">
          {/* Header with Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Pre-Test Setup</h1>
              <span className="text-sm text-gray-600 font-semibold">Step 3 of 4</span>
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
                <div className="w-full h-1 bg-indigo-600 rounded-full mb-2"></div>
                <span className="text-xs font-semibold text-indigo-600">Instructions</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-gray-200 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">Ready</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
              Assessment Instructions
            </h2>
            <p className="text-gray-600 text-sm">
              Please read the following instructions carefully before starting your assessment.
            </p>
          </div>

          {/* Instructions Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Instruction 1 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Time Limit</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  You have <span className="font-semibold">90 minutes</span> to complete all 3 coding tasks. Timer starts immediately and cannot be paused.
                </p>
              </div>
            </div>

            {/* Instruction 2 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Proctoring & Monitoring</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Your webcam and screen will be recorded. Suspicious activity will be flagged.
                </p>
              </div>
            </div>

            {/* Instruction 3 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Allowed Resources</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Official documentation and IDE allowed. AI tools and direct solution searches are <span className="font-semibold text-red-600">prohibited</span>.
                </p>
              </div>
            </div>

            {/* Instruction 4 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Submission</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Code auto-saves as you work. Click "Submit" for each task when done. You can submit early.
                </p>
              </div>
            </div>

            {/* Instruction 5 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Technical Issues</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Use the "Help" button in the top right corner to contact support immediately if needed.
                </p>
              </div>
            </div>

            {/* Instruction 6 - Placeholder for symmetry */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                6
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Environment</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Ensure you're in a quiet space with minimal distractions. Keep your workspace organized.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 text-amber-600 flex-shrink-0">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Important Notice</h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  By proceeding, you acknowledge that you have read and understood all instructions. Any violation may result in disqualification.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link
              href="/assessment/identity"
              className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <Link
              href="/assessment/ready"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              I Understand, Continue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
