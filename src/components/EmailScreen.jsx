import { useState } from "react";

export default function EmailScreen({ formData, updateFormData, onNext }) {
  const [email, setEmail] = useState(formData.email);
  const [newsletter, setNewsletter] = useState(formData.newsletter);
  const [error, setError] = useState(false);

  const validateAndProceed = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    updateFormData({ email, newsletter });
    onNext();
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          Enter your email
        </h1>

        <div className="relative border border-zinc-700 rounded-xl bg-zinc-950 p-4 focus-within:border-white transition-colors">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            placeholder="name@example.com"
            className="w-full bg-transparent text-white outline-none text-base placeholder-zinc-600"
          />
        </div>
        {error && (
          <p className="text-xs text-red-500 mt-2">
            Please enter a valid email address.
          </p>
        )}

        <div
          className="flex items-center mt-6 cursor-pointer select-none"
          onClick={() => setNewsletter(!newsletter)}
        >
          <div
            className={`w-5 h-5 border rounded flex items-center justify-center mr-3 transition-colors ${newsletter ? "bg-white border-white text-black" : "border-zinc-600 bg-transparent"}`}
          >
            {newsletter && (
              <svg
                className="w-3 h-3 text-black"
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
          <span className="text-sm text-zinc-300">
            I'd like to subscribe to your newsletter
          </span>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={validateAndProceed}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-lg hover:bg-zinc-200"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
