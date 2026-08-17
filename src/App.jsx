import { useState } from "react";
import Landing from "./components/Landing";
import TermsScreen from "./components/TermsScreen";
import EmailScreen from "./components/EmailScreen";
import OtpScreen from "./components/OtpScreen";
import UsernameScreen from "./components/UsernameScreen";
import NameScreen from "./components/NameScreen";
import AgeScreen from "./components/AgeScreen";
import PronounsScreen from "./components/PronounsScreen";
import InviteScreen from "./components/InviteScreen";
import SuccessHome from "./components/SuccessHome";

const STEP_NAMES = {
  landing: "",
  terms: "",
  email: "Step 1 of 5",
  otp: "Verification",
  username: "Step 2 of 5",
  name: "Step 3 of 5",
  age: "Step 4 of 5",
  pronouns: "Step 5 of 5",
  invite: "Final Step",
  home: "",
};

export default function App() {
  const [currentStep, setCurrentStep] = useState("landing");
  const [formData, setFormData] = useState({
    email: "",
    newsletter: false,
    otp: ["", "", "", "", "", ""],
    username: "",
    name: "",
    dob: { dd: "", mm: "", yyyy: "" },
    age: null,
    pronouns: [],
    invite: "",
  });

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-between selection:bg-purple-500 selection:text-white aurora-bg">
      {/* Header Branding (Arpan Kumar / AK°) */}
      <header className="w-full max-w-md mx-auto px-6 pt-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-wider flex items-center">
          AK<span className="text-purple-400 text-3xl">°</span>
        </div>
        <div className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          {STEP_NAMES[currentStep]}
        </div>
      </header>

      {/* Main Body */}
      <main className="w-full max-w-md mx-auto px-6 py-8 grow flex flex-col justify-center relative">
        {currentStep === "landing" && (
          <Landing onNext={() => setCurrentStep("terms")} />
        )}
        {currentStep === "terms" && (
          <TermsScreen onNext={() => setCurrentStep("email")} />
        )}
        {currentStep === "email" && (
          <EmailScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("otp")}
          />
        )}
        {currentStep === "otp" && (
          <OtpScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("username")}
            onBack={() => setCurrentStep("email")}
          />
        )}
        {currentStep === "username" && (
          <UsernameScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("name")}
            onBack={() => setCurrentStep("otp")}
          />
        )}
        {currentStep === "name" && (
          <NameScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("age")}
            onBack={() => setCurrentStep("username")}
          />
        )}
        {currentStep === "age" && (
          <AgeScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("pronouns")}
            onBack={() => setCurrentStep("name")}
          />
        )}
        {currentStep === "pronouns" && (
          <PronounsScreen
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("invite")}
            onBack={() => setCurrentStep("age")}
          />
        )}
        {currentStep === "invite" && (
          <InviteScreen
            formData={formData}
            updateFormData={updateFormData}
            onSuccess={() => setCurrentStep("home")}
            onBack={() => setCurrentStep("pronouns")}
          />
        )}
        {currentStep === "home" && (
          <SuccessHome
            onReset={() => {
              setFormData({
                email: "",
                newsletter: false,
                otp: ["", "", "", "", "", ""],
                username: "",
                name: "",
                dob: { dd: "", mm: "", yyyy: "" },
                age: null,
                pronouns: [],
                invite: "",
              });
              setCurrentStep("landing");
            }}
          />
        )}
      </main>
    </div>
  );
}
