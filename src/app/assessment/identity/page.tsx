'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IdentityPage() {
  const [photoTaken, setPhotoTaken] = useState(false);

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
              <span className="text-sm text-gray-600 font-semibold">Step 2 of 4</span>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-green-500 rounded-full mb-2"></div>
                <span className="text-xs font-medium text-gray-400">System Check</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full h-1 bg-indigo-600 rounded-full mb-2"></div>
                <span className="text-xs font-semibold text-indigo-600">Identity</span>
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
              Verify your identity
            </h2>
            <p className="text-gray-600 text-sm">
              Take a photo of yourself to verify your identity. Make sure your face is clearly visible and well-lit.
            </p>
          </div>

          {/* Camera Preview */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
              {!photoTaken ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 border-4 border-dashed border-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Position your face in the frame</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base font-semibold">Photo Captured!</p>
                  </div>
                </div>
              )}
            </div>

            {/* Capture Button */}
            <div className="flex justify-center mt-4">
              {!photoTaken ? (
                <button
                  onClick={() => setPhotoTaken(true)}
                  className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105"
                >
                  <div className="w-12 h-12 border-4 border-white rounded-full"></div>
                </button>
              ) : (
                <button
                  onClick={() => setPhotoTaken(false)}
                  className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors text-sm"
                >
                  Retake Photo
                </button>
              )}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Photo Guidelines</h4>
                <p className="text-xs text-gray-700">Ensure your face is clearly visible and centered. Remove sunglasses, hats, or face coverings. Make sure lighting is adequate.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link
              href="/assessment/system-check"
              className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <Link
              href="/assessment/instructions"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                photoTaken
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
