import { MessageCircle, Sparkles } from "lucide-react";
import InquiryForm from "./InquiryForm";

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Sparkles size={21} />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Have a payment problem
              <br />
              you want to solve?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Tell me how your customers pay today, what happens after payment,
              and what you want to automate.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                No technical knowledge required
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Explain the problem in your own words
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Get a solution based on your workflow
              </div>
            </div>

            <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-xs font-bold text-slate-500">
              <MessageCircle size={14} />
              WhatsApp-friendly
            </div>
          </div>

          {/* Form */}
          <div id="contact-form">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
