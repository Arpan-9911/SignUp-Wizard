import { useState } from "react";
import DobModal from "./DobModal";

export default function AgeScreen({
  formData,
  updateFormData,
  onNext,
  onBack,
}) {
  const [showDobModal, setShowDobModal] = useState(false);

  const [dob, setDob] = useState(
    formData?.dob || {
      dd: "",
      mm: "",
      yyyy: "",
    },
  );

  const [age, setAge] = useState(formData?.age ?? null);
  const [ageError, setAgeError] = useState(false);

  const handleDobConfirm = (newDob, calculatedAge) => {
    setDob(newDob);
    setAge(calculatedAge);

    updateFormData({
      dob: newDob,
      age: calculatedAge,
    });

    setShowDobModal(false);

    setAgeError(calculatedAge < 18);
  };

  const handleOpenDob = () => {
    setAgeError(false);
    setShowDobModal(true);
  };

  const handleNext = () => {
    if (!dob.dd || !dob.mm || !dob.yyyy) {
      setAgeError(true);
      return;
    }

    if (age === null || age < 18) {
      setAgeError(true);
      return;
    }

    setAgeError(false);
    onNext();
  };

  const displayValue =
    dob.dd && dob.mm && dob.yyyy ? `${dob.dd} / ${dob.mm} / ${dob.yyyy}` : "";

  return (
    <div className="flex min-h-full flex-col py-4">
      <div className="flex-1">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          How many years have you been around?
        </h1>

        <button
          type="button"
          onClick={handleOpenDob}
          className={`
            w-full rounded-xl border p-4 text-left
            bg-zinc-950/80 backdrop-blur-md
            transition-all
            ${
              ageError
                ? "border-red-500/60"
                : "border-zinc-700 hover:border-zinc-600"
            }
          `}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Date of Birth
              </span>

              <span
                className={`block text-base ${
                  displayValue ? "text-white" : "text-zinc-600"
                }`}
              >
                {displayValue || "DD / MM / YYYY"}
              </span>
            </div>

            {age !== null && (
              <span
                className={`
                  shrink-0 rounded-lg border px-3 py-1 text-sm font-bold
                  ${
                    age < 18
                      ? "border-red-800 bg-red-950 text-red-400"
                      : "border-purple-800 bg-purple-950 text-purple-300"
                  }
                `}
              >
                {age} yrs
              </span>
            )}
          </div>
        </button>

        <div className="mt-3 min-h-12" aria-live="polite">
          {ageError && (
            <div className="rounded-lg border border-red-900/50 bg-red-950/50 p-2.5 text-xs font-medium text-red-400">
              {age !== null && age < 18
                ? `⚠️ You entered age ${age}. You must be at least 18 years old to join.`
                : "⚠️ Please enter your date of birth."}
            </div>
          )}
        </div>

        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
          We need your age to verify eligibility and maintain community
          guidelines.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded-xl bg-white py-4 font-bold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Next
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-xl border border-zinc-700 bg-transparent py-4 font-bold uppercase tracking-wider text-white transition hover:bg-zinc-900 active:scale-[0.98]"
        >
          Back
        </button>
      </div>

      {showDobModal && (
        <DobModal
          initialDob={dob}
          onClose={() => setShowDobModal(false)}
          onConfirm={handleDobConfirm}
        />
      )}
    </div>
  );
}
