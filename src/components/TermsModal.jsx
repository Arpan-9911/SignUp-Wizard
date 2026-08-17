export default function TermsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col overflow-hidden animate-slide-up">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-lg font-bold">Terms and Conditions</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-zinc-300 leading-relaxed">
          <p>
            Welcome to Extroverts! Please take a moment to read these to ensure
            a safe and enjoyable experience for everyone:
          </p>
          <p>
            <strong className="text-white">Respect and Kindness:</strong> Treat
            everyone with respect and courtesy. Personal boundaries must be
            respected at all times.
          </p>
          <p>
            <strong className="text-white">Personal Contributions:</strong> Each
            attendee is responsible for their own expenses (food, drinks, etc.).
          </p>
          <p>
            <strong className="text-white">App's Responsibility:</strong> The
            app connects people, we do not interfere between personal
            interactions or relations during the event.
          </p>
          <p>
            <strong className="text-white">
              Zero Tolerance for Harassment:
            </strong>{" "}
            Any form of harassment (verbal, physical, or sexual) is not
            tolerated. Respectful behavior is essential.
          </p>
          <p>
            <strong className="text-white">Sexual Conduct:</strong> All
            interactions must be consensual and respectful of personal
            boundaries.
          </p>
          <p>
            <strong className="text-white">Safety First:</strong> Prioritize
            your safety and well-being. If you feel unsafe, leave or seek
            assistance.
          </p>
          <p>
            <strong className="text-white">Alcohol & Substances:</strong> Drink
            responsibly and look out for one another.
          </p>
          <p>
            <strong className="text-white">No Unapproved Recordings:</strong>{" "}
            Respect privacy—no recordings without consent.
          </p>
        </div>
        <div className="p-6 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full py-3 bg-white text-black font-bold uppercase rounded-xl"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
