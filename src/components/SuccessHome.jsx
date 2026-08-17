export default function SuccessHome({ onReset }) {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center py-4">
      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl animate-bounce">
        🎉
      </div>
      <h1 className="text-4xl font-black mb-3">You're All Set!</h1>
      <p className="text-zinc-400 text-sm max-w-xs mb-8">
        Welcome to Extroverts. Get ready for spontaneous parties, great
        connections, and unforgettable experiences.
      </p>
      <button
        onClick={onReset}
        className="py-3 px-8 bg-zinc-900 border border-zinc-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors"
      >
        Restart Demo
      </button>
    </div>
  );
}
