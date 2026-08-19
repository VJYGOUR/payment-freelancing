import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Database,
  FileText,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

const automationItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    icon: FileText,
    label: "Invoice",
  },
  {
    icon: Database,
    label: "Database",
  },
  {
    icon: Zap,
    label: "Automation",
  },
];

function Hero() {
  const scrollToWorkflow = () => {
    document.getElementById("workflow")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
          >
            <Sparkles size={14} />
            Payment integration + automation
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-4xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Struggling to collect online payments from customers?
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Custom payment solutions for businesses that need more than a basic
            checkout — from customer-specific payments and subscriptions to
            invoices, WhatsApp notifications, payment tracking and business
            automation.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Tell Me Your Payment Problem
              <ArrowRight size={17} />
            </a>

            <button
              type="button"
              onClick={scrollToWorkflow}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-slate-950"
            >
              See What I Can Automate
              <ArrowDown size={16} />
            </button>
          </motion.div>

          {/* Technology / trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500"
          >
            <span>Razorpay</span>
            <span>Webhooks</span>
            <span>Custom checkout</span>
            <span>WhatsApp</span>
            <span>Database automation</span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <WorkflowPreview />
      </div>
    </section>
  );
}

function WorkflowPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative"
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-2xl shadow-slate-200/70 sm:p-7">
        {/* Card header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Example workflow
            </div>

            <div className="mt-1 text-sm font-bold text-slate-900">
              Payment → Business automation
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Automated
          </div>
        </div>

        {/* Workflow */}
        <div className="space-y-3">
          <WorkflowStep
            number="01"
            title="Customer pays"
            description="Customer completes the payment"
            dark
          />

          <Connector />

          <WorkflowStep
            number="02"
            title="Payment Gateway confirms"
            description="Payment response is received"
            blue
          />

          <Connector />

          <WorkflowStep
            number="03"
            title="Payment verified"
            description="Your backend validates the payment"
          />

          <Connector />

          <WorkflowStep
            number="04"
            title="Business actions run"
            description="Everything else happens automatically"
          />
        </div>

        {/* Outputs */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {automationItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon size={15} />
              </div>

              <span className="text-xs font-bold text-slate-700">{label}</span>

              <Check size={14} className="ml-auto text-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function WorkflowStep({
  number,
  title,
  description,
  dark = false,
  blue = false,
}) {
  let classes = "border border-slate-200 bg-white text-slate-950";

  if (dark) {
    classes = "bg-slate-950 text-white";
  }

  if (blue) {
    classes = "bg-blue-600 text-white";
  }

  return (
    <div className={`rounded-2xl px-5 py-4 shadow-sm ${classes}`}>
      <div className="flex items-center gap-4">
        <span
          className={`text-[10px] font-black ${
            dark || blue ? "text-blue-200" : "text-blue-600"
          }`}
        >
          {number}
        </span>

        <div>
          <div className="text-sm font-bold">{title}</div>

          <div
            className={`mt-0.5 text-xs ${
              dark || blue ? "text-white/65" : "text-slate-500"
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <div className="h-4 w-px bg-slate-300" />
    </div>
  );
}

export default Hero;
