import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span className="text-sm text-gray-700 font-medium">
              Meet the new QuizSync 2.0
            </span>
            <svg 
              className="w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
            Hire top engineering
            <br />
            talent
            <br />
            with confidence
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
            QuizSync provides an enterprise-grade platform for technical assessments, 
            realistic coding environments, and unbiased candidate evaluation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all font-semibold text-base shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Start Free Trial
            </Link>
            <button 
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-base border border-gray-200 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              <svg 
                className="w-4 h-4 text-gray-700" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
