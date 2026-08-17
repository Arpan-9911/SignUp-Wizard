export default function Landing({ onNext }) {
  return (
    <div className="flex flex-col justify-between h-full py-4 animate-fadeIn">
      <div className="absolute inset-0 -z-10 opacity-45 pointer-events-none overflow-hidden flex justify-center items-center">
        <div className="w-96 h-96 bg-linear-to-tr from-purple-700 via-blue-600 to-cyan-400 rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      <div className="text-center my-auto">
        <div className="text-7xl font-extrabold mb-6 tracking-tight flex justify-center items-center">
          AK<span className="text-purple-400 text-8xl">°</span>
        </div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-300 mb-2">An Exclusive Space By</h2>
        <h1 className="text-4xl font-black tracking-tight text-white mb-6 uppercase bg-linear-to-r from-white via-zinc-200 to-purple-400 bg-clip-text">Arpan Kumar</h1>
        <p className="text-sm text-purple-300 font-medium px-4 bg-purple-950/40 border border-purple-800/50 py-3 rounded-2xl backdrop-blur-md">
          <strong className="font-bold">Warning:</strong> Entering may lead to spontaneous creativity and high-energy vibes!
        </p>
      </div>

      <div className="mt-8">
        <button onClick={onNext} className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-500/10 hover:bg-zinc-200">
          Continue
        </button>
      </div>
    </div>
  );
}