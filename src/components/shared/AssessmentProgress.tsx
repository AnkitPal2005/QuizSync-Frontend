'use client';

import { useRouting } from '@/hooks';

/**
 * Assessment Progress Component
 * Shows current step in assessment flow
 */
export default function AssessmentProgress() {
  const { 
    getCurrentAssessmentStep, 
    getTotalAssessmentSteps,
    isInAssessmentFlow 
  } = useRouting();

  if (!isInAssessmentFlow()) {
    return null;
  }

  const currentStep = getCurrentAssessmentStep();
  const totalSteps = getTotalAssessmentSteps();
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    'Join',
    'Identity',
    'System Check',
    'Instructions',
    'Ready',
    'Assessment',
    'Submitted',
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-1 ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isCurrent 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <span className={`text-xs ${isCurrent ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
