import { useState } from "react";
import TermsModal from "./TermsModal";

export default function TermsScreen({ onNext }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <p className="text-xl sm:text-2xl font-bold leading-relaxed tracking-tight text-zinc-100">
          By using this app, you’re agreeing to keep things fun, safe, and
          respectful... and also agreeing to our{" "}
          <span
            onClick={() => setShowModal(true)}
            className="text-purple-400 underline cursor-pointer hover:text-purple-300"
          >
            terms and conditions
          </span>
          . Politeness is a must—treat others how you’d want to be treated.
          Everyone here is looking for reasons to{" "}
          <span className="text-purple-400">party</span>, so bring your best
          vibe and expect the same from others. Let's party responsibly and make
          every experience a great one!
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs text-zinc-400 mb-4 text-center">
          To proceed, accept{" "}
          <span
            onClick={() => setShowModal(true)}
            className="underline cursor-pointer text-zinc-300"
          >
            Terms and Conditions
          </span>
        </p>
        <button
          onClick={onNext}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 shadow-lg hover:bg-zinc-200"
        >
          Accept
        </button>
      </div>

      {showModal && <TermsModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
