import { useState } from "react";

export default function UsernameScreen({
  formData,
  updateFormData,
  onNext,
  onBack,
}) {
  const [username, setUsername] = useState(formData.username);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!username.trim() || username.length < 6) {
      setError(true);
      return;
    }
    updateFormData({ username });
    onNext();
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          Create a username that fits your vibe!
        </h1>

        <div
          className={`relative border rounded-xl bg-zinc-950/80 backdrop-blur-md p-4 transition-colors ${error ? "border-red-500" : "border-zinc-700 focus-within:border-purple-500"}`}
        >
          <label className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
            placeholder="e.g. arpan_kumar"
            className="w-full bg-transparent text-white outline-none text-base placeholder-zinc-600"
          />
        </div>
        {error && (
          <p className="text-xs text-red-400 mt-2">
            Username must be at least 6 characters long.
          </p>
        )}
        <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
          All your Superlatives and Invites will come your way with this name,
          so make it unforgettable!
        </p>
      </div>

      <div className="space-y-3 mt-8">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 shadow-lg hover:bg-zinc-200"
        >
          Next
        </button>
        <button
          onClick={onBack}
          className="w-full py-4 bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 hover:bg-zinc-900"
        >
          Back
        </button>
      </div>
    </div>
  );
}
