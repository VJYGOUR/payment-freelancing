import { CheckCircle2, MessageCircle } from "lucide-react";

function InquirySuccess({ whatsappUrl, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-7 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 size={34} className="text-emerald-600" />
        </div>

        <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
          Your inquiry is received
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
          I have your requirements. For the fastest response, continue the
          conversation on WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:bg-slate-800"
        >
          <MessageCircle size={18} />
          Continue on WhatsApp
        </a>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-sm font-bold text-slate-400 hover:text-slate-700"
        >
          I'll wait for your response
        </button>
      </div>
    </div>
  );
}

export default InquirySuccess;
