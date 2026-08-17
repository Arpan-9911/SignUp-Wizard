import { useState } from "react";

export default function NameScreen({
  formData,
  updateFormData,
  onNext,
  onBack,
}) {
  const [name, setName] = useState(formData.name);

  const handleNext = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    updateFormData({ name });
    onNext();
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          "Name, please, for the party check!"
        </h1>

        <div className="relative border border-zinc-700 rounded-xl bg-zinc-950 p-4 focus-within:border-white transition-colors">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full bg-transparent text-white outline-none text-base placeholder-zinc-600"
          />
        </div>
        <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
          This is the name shown as on members and requests. Cannot be changed
          later.
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
