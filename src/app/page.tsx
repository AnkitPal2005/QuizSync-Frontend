export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
        Welcome to QuizSync 🚀
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        FAANG Level Assessment Platform
      </p>
      
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg font-semibold shadow-lg shadow-blue-500/30">
        Get Started
      </button>
    </main>
  );
}