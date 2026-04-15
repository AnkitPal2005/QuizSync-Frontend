export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Ready to transform your hiring?
          </h2>
          
          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of companies that use QuizSync to hire better engineers, faster.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full sm:flex-1 px-6 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
              Get Started Free
            </button>
          </div>

          {/* Fine Print */}
          <p className="text-sm text-gray-500">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
