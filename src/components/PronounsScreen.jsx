const PRONOUNS_LIST = [
  "he",
  "him",
  "his",
  "she",
  "her",
  "hers",
  "they",
  "them",
  "theirs",
  "ze",
  "zir",
  "zie",
];

export default function PronounsScreen({
  formData,
  updateFormData,
  onNext,
  onBack,
}) {
  const togglePronoun = (p) => {
    let current = [...formData.pronouns];
    if (current.includes(p)) {
      current = current.filter((item) => item !== p);
    } else {
      if (current.length >= 3) {
        alert("You can select up to 3 pronouns.");
        return;
      }
      current.push(p);
    }
    updateFormData({ pronouns: current });
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Which pronouns feel right for you?
        </h1>
        <p className="text-xs text-zinc-400 mb-6">Select upto 3</p>

        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {PRONOUNS_LIST.map((p) => {
            const isSelected = formData.pronouns.includes(p);
            return (
              <div
                key={p}
                onClick={() => togglePronoun(p)}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors"
              >
                <span className="text-sm font-medium capitalize">{p}</span>
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? "bg-purple-600 border-purple-600" : "border-zinc-600"}`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <button
          onClick={onNext}
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
