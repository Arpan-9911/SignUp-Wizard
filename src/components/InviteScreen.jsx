import { useState } from "react";

export default function InviteScreen({
  formData,
  updateFormData,
  onSuccess,
  onBack,
}) {
  const [invite, setInvite] = useState(formData.invite);
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    updateFormData({ invite });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <p className="text-xs sm:text-sm font-semibold leading-relaxed tracking-wide text-zinc-200 mb-6">
          KINDNESS = GOOD <span className="text-purple-400">HAIR</span> DAY
          <br />
          SIP IN? <span className="text-purple-400">CHIP</span> IN.
          <br />
          GHOSTING IS FOR <span className="text-purple-400">HALLOWEEN</span>.
          <br />
          OUTFITS LOUD, <span className="text-purple-400">INTENTIONS</span>{" "}
          CLEAR.
          <br />
          JOINING? FREE. HOSTING? <span className="text-purple-400">
            ALSO
          </span>{" "}
          FREE.
          <br />
          EARLLY IS <span className="text-purple-400">ICONIC</span>.<br />
          YES. <span className="text-purple-400">SPELLING</span> MISTAKE.
        </p>

        <div className="relative border border-zinc-700 rounded-xl bg-zinc-950 p-4 focus-within:border-white transition-colors">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">
            Enter invite code (optional)
          </label>
          <input
            type="text"
            value={invite}
            onChange={(e) => setInvite(e.target.value)}
            placeholder="CODE123"
            className="w-full bg-transparent text-white outline-none text-base placeholder-zinc-600 uppercase"
          />
        </div>
        <p className="text-xs text-zinc-400 mt-2">
          Enter invite code and get up to +30 HVT!
        </p>
      </div>

      <div className="space-y-3 mt-8">
        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 shadow-lg hover:bg-zinc-200 flex items-center justify-center space-x-2"
        >
          <span>{loading ? "Creating Account..." : "Sign Up"}</span>
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
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
