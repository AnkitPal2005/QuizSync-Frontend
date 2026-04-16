'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CheckStatus = 'checking' | 'pass' | 'blocked';

export default function SystemCheckPage() {
  const [browserCheck, setBrowserCheck] = useState<CheckStatus>('pass');
  const [internetCheck, setInternetCheck] = useState<CheckStatus>('pass');
  const [fullscreenCheck, setFullscreenCheck] = useState<CheckStatus>('pass');
  const [cameraCheck, setCameraCheck] = useState<CheckStatus>('pass');

  useEffect(() => {
    // Simulate checking fullscreen permission
    setTimeout(() => {
      setFullscreenCheck('pass');
    }, 1000);
  }, []);

  const requestCameraAccess = async () => {
    try {
      setCameraCheck('checking');
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraCheck('pass');
    } catch (error) {
      setCameraCheck('blocked');
    }
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
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
            Help
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="h-[calc(100vh-73px)] flex items-center justify-center px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-4xl max-h-full overflow-y-auto">
          {/* Header with Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-900 font-poppins">Pre-Test Setup</h1>
              <span className="text-sm text-gray-600 font-semibold">Step 1 of 4</span>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-indigo-600 rounded-full mb-2"></div>
                <span className="text-xs font-semibold text-indigo-600">System Check</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-gray-200 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">Identity</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-gray-200 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">Instructions</span>
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
              Let's check your system
            </h2>
            <p className="text-gray-600 text-sm">
              Before we begin the assessment, we need to ensure your device meets the technical requirements for a smooth experience.
            </p>
          </div>

          {/* Check Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {/* Browser Support */}
            <div className="border-2 border-gray-200 rounded-xl p-4 flex items-start justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Browser Support</h3>
                  <p className="text-xs text-gray-600">Chrome 120.0</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pass
              </div>
            </div>

            {/* Internet Connection */}
            <div className="border-2 border-gray-200 rounded-xl p-4 flex items-start justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Internet Connection</h3>
                  <p className="text-xs text-gray-600">Stable (45 Mbps)</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pass
              </div>
            </div>

            {/* Fullscreen Permission */}
            <div className="border-2 border-gray-200 rounded-xl p-4 flex items-start justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Fullscreen Permission</h3>
                  <p className="text-xs text-gray-600">Granted</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pass
              </div>
            </div>

            {/* Camera Access */}
            <div className="border-2 border-gray-200 rounded-xl p-4 flex items-start justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Camera Access</h3>
                  <p className="text-xs text-gray-600">Enabled</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pass
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Having trouble with camera access?</h4>
                <p className="text-xs text-gray-700">Check your browser's URL bar for a blocked camera icon and click it to allow access.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link
              href="/assessment"
              className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </Link>
            <Link
              href="/assessment/identity"
              type="button"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                cameraCheck === 'pass'
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
              }`}
            >
              Continue
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
