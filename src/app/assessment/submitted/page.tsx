'use client';

import Link from 'next/link';

export default function SubmittedPage() {
  const submissionId = 'QS-892A-4B7C';
  const submissionDate = 'Oct 24, 2023 • 14:30 EST';
  const questionsCompleted = '3 / 3 Completed';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(submissionId);
  };

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
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto">
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
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-137px)] flex items-center justify-center px-6 py-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-full max-w-3xl">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 rounded-full blur-xl opacity-40"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2 font-poppins">
            Assessment Submitted!
          </h1>
          <p className="text-gray-600 text-center text-sm mb-6 max-w-xl mx-auto">
            Thank you for completing the technical assessment. Your code has been securely saved and submitted for review.
          </p>

          {/* Submission Receipt */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200 p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Submission Receipt</h3>
              <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Verified
              </span>
            </div>

            <div className="space-y-2">
              {/* Date & Time */}
              <div className="flex items-center justify-between py-1.5 border-b border-gray-200">
                <span className="text-gray-600 font-medium text-xs">Date & Time</span>
                <span className="text-gray-900 font-semibold text-xs">{submissionDate}</span>
              </div>

              {/* Questions Answered */}
              <div className="flex items-center justify-between py-1.5 border-b border-gray-200">
                <span className="text-gray-600 font-medium text-xs">Questions Answered</span>
                <span className="text-gray-900 font-semibold text-xs">{questionsCompleted}</span>
              </div>

              {/* Submission ID */}
              <div className="flex items-center justify-between py-1.5">
                <span className="text-gray-600 font-medium text-xs">Submission ID</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-900 font-mono font-semibold text-xs">{submissionId}</span>
                  <button
                    onClick={copyToClipboard}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {/* Evaluation Process */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1 font-poppins">Evaluation Process</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Our engineering team will review your code for efficiency, edge cases, and best practices. Automated tests have already been run.
              </p>
            </div>

            {/* Expected Timeline */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1 font-poppins">Expected Timeline</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                You can expect to hear back from the recruitment team within <span className="font-semibold text-gray-900">2-3 business days</span> with your results and next steps.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-xs">What happens next?</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Your submission has been recorded. You will receive an email confirmation shortly. The hiring team will review your performance and reach out with feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center pt-3 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
