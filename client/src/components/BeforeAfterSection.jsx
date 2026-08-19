import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  FileSpreadsheet,
  MessageCircle,
  UserRound,
  X,
} from "lucide-react";

const beforeItems = [
  {
    icon: UserRound,
    text: "Customer asks how much they need to pay",
  },
  {
    icon: Clock3,
    text: "You manually check whether payment arrived",
  },
  {
    icon: FileSpreadsheet,
    text: "You update Excel or your records",
  },
  {
    icon: MessageCircle,
    text: "You manually send payment confirmation",
  },
];

const afterItems = [
  "Customer gets the correct payment amount",
  "Payment is verified automatically",
  "Customer record is updated",
  "WhatsApp confirmation is sent",
  "Invoice or receipt can be generated",
  "Your team gets notified",
];

function BeforeAfterSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            The difference
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Stop managing every payment manually.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Your business process should not depend on you checking every
            transaction and sending every confirmation yourself.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <X size={19} />
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-red-500">
                  Before
                </div>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Manual payment management
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {beforeItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                      <Icon size={17} />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-blue-200 bg-blue-50/60 p-7 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Check size={19} />
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-blue-600">
                  After
                </div>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Automated payment workflow
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {afterItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check size={15} />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Your business keeps moving automatically.
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Automate My Payment Process
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
