import { useRef } from "react";

export default function OtpScreen({
  formData,
  updateFormData,
  onNext,
  onBack,
}) {
  const inputsRef = useRef([]);

  const handleOtpChange = (val, idx) => {
    const cleanVal = val.replace(/[^0-9]/g, "");
    const newOtp = [...formData.otp];
    newOtp[idx] = cleanVal;
    updateFormData({ otp: newOtp });

    if (cleanVal && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !formData.otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const verify = () => {
    if (formData.otp.join("").length < 6) {
      alert("Please enter the complete 6-digit OTP.");
      return;
    }
    onNext();
  };

  return (
    <div className="flex flex-col justify-between h-full py-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Enter OTP</h1>
        <p className="text-xs text-zinc-400 mb-8">
          A 6-digit OTP has been sent to {formData.email || "your email"}.
        </p>

        <div className="flex justify-between gap-2 mb-6">
          {formData.otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-12 h-14 bg-zinc-900 border border-zinc-700 text-center text-xl font-bold rounded-xl focus:border-white outline-none"
            />
          ))}
        </div>

        <div className="text-right mb-6">
          <button
            onClick={() => alert("A new OTP has been sent.")}
            className="text-xs font-medium text-zinc-400 hover:text-white underline"
          >
            Resend OTP
          </button>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <button
          onClick={verify}
          className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 shadow-lg hover:bg-zinc-200"
        >
          Verify
        </button>
        <button
          onClick={onBack}
          className="w-full py-4 bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-wider rounded-xl transition-transform active:scale-95 hover:bg-zinc-900"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
