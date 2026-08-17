import { useRef, useState } from "react";

export default function DobModal({ initialDob, onClose, onConfirm }) {
  const [dd, setDd] = useState(initialDob?.dd || "");
  const [mm, setMm] = useState(initialDob?.mm || "");
  const [yyyy, setYyyy] = useState(initialDob?.yyyy || "");
  const [error, setError] = useState("");

  const mmRef = useRef(null);
  const yyyyRef = useRef(null);

  const handleDdChange = (value) => {
    const clean = value.replace(/\D/g, "").slice(0, 2);

    setDd(clean);
    setError("");

    if (clean.length === 2) {
      mmRef.current?.focus();
    }
  };

  const handleMmChange = (value) => {
    const clean = value.replace(/\D/g, "").slice(0, 2);

    setMm(clean);
    setError("");

    if (clean.length === 2) {
      yyyyRef.current?.focus();
    }
  };

  const handleYyyyChange = (value) => {
    const clean = value.replace(/\D/g, "").slice(0, 4);

    setYyyy(clean);
    setError("");
  };

  const handleKeyDown = (event, previousRef) => {
    if (event.key === "Backspace" && event.currentTarget.value.length === 0) {
      previousRef?.current?.focus();
    }
  };

  const handleProceed = () => {
    const day = Number(dd);
    const month = Number(mm);
    const year = Number(yyyy);

    if (dd.length !== 2 || mm.length !== 2 || yyyy.length !== 4) {
      setError("Please enter your complete date of birth.");
      return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      setError("Please enter a valid date.");
      return;
    }

    const birthDate = new Date(year, month - 1, day);

    const isValidDate =
      birthDate.getFullYear() === year &&
      birthDate.getMonth() === month - 1 &&
      birthDate.getDate() === day;

    if (!isValidDate) {
      setError("That date doesn't appear to be valid.");
      return;
    }

    const today = new Date();

    if (birthDate > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    onConfirm(
      {
        dd: String(day).padStart(2, "0"),
        mm: String(month).padStart(2, "0"),
        yyyy: String(year),
      },
      calculatedAge,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950/95 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Personal Information
            </p>

            <h3 className="mt-1 text-lg font-bold text-white">Date of Birth</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Day
            </label>

            <input
              type="text"
              inputMode="numeric"
              autoFocus
              maxLength={2}
              value={dd}
              onChange={(e) => handleDdChange(e.target.value)}
              placeholder="DD"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3.5 text-center text-lg font-semibold text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Month
            </label>

            <input
              ref={mmRef}
              type="text"
              inputMode="numeric"
              maxLength={2}
              value={mm}
              onChange={(e) => handleMmChange(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, null)}
              placeholder="MM"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3.5 text-center text-lg font-semibold text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Year
            </label>

            <input
              ref={yyyyRef}
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={yyyy}
              onChange={(e) => handleYyyyChange(e.target.value)}
              placeholder="YYYY"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3.5 text-center text-lg font-semibold text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>
        </div>

        <div className="mt-3 min-h-10" aria-live="polite">
          {error && (
            <div className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-xs font-medium text-red-400">
              {error}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleProceed}
          className="mt-3 w-full rounded-xl bg-white py-3.5 font-bold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Confirm DOB
        </button>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-zinc-600">
          Your date of birth is used to verify your eligibility.
        </p>
      </div>
    </div>
  );
}
