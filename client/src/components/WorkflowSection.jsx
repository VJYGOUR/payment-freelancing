import { motion } from "framer-motion";
import {
  ArrowDown,
  Bell,
  CheckCircle2,
  Database,
  FileText,
  MessageCircle,
  ReceiptIndianRupee,
  ShieldCheck,
  ShoppingCart,
  WalletCards,
  Webhook,
} from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    icon: WalletCards,
    title: "Customer pays",
    description:
      "Your customer completes the payment through your custom payment page or Razorpay checkout.",
  },
  {
    number: "02",
    icon: Webhook,
    title: "Payment notification arrives",
    description:
      "Your backend receives the payment event and identifies the customer and transaction.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Payment is verified",
    description:
      "The server verifies the payment before your business workflow continues.",
  },
  {
    number: "04",
    icon: Database,
    title: "Customer record updates",
    description:
      "Payment status, order, invoice or customer information can be updated automatically.",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Customer gets notified",
    description:
      "Send an automated WhatsApp or email confirmation after successful payment.",
  },
  {
    number: "06",
    icon: ReceiptIndianRupee,
    title: "Business workflow continues",
    description:
      "Generate receipts, invoices, reports or trigger other business actions.",
  },
];

const outputCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Payment confirmation",
  },
  {
    icon: FileText,
    title: "Invoice",
    text: "Automatic generation",
  },
  {
    icon: Database,
    title: "Database",
    text: "Customer updated",
  },
  {
    icon: Bell,
    title: "Team",
    text: "Payment notification",
  },
  {
    icon: ShoppingCart,
    title: "Order",
    text: "Order created",
  },
  {
    icon: CheckCircle2,
    title: "Status",
    text: "Marked as paid",
  },
];

function WorkflowSection() {
  return (
    <section id="workflow" className="overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            What happens after payment
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
            Don't just accept the payment.
            <br />
            <span className="text-slate-500">
              Automate everything after it.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            This is where a basic payment integration becomes a real business
            system.
          </p>
        </div>

        {/* Main workflow */}
        <div className="mt-14">
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-slate-800 lg:block" />

            <div className="grid gap-8 lg:grid-cols-6">
              {workflowSteps.map((step, index) => (
                <WorkflowStep key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Automation outputs */}
        <div className="mt-20">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                One payment can trigger
              </div>

              <h3 className="mt-2 text-2xl font-black">
                Multiple business actions
              </h3>
            </div>

            <div className="hidden items-center gap-2 text-xs font-bold text-emerald-400 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Automated workflow
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outputCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500/50 hover:bg-slate-800"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white">
                      {item.title}
                    </div>

                    <div className="mt-0.5 text-xs text-slate-500">
                      {item.text}
                    </div>
                  </div>

                  <CheckCircle2
                    size={16}
                    className="ml-auto text-emerald-500"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Example */}
        <div className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-900 p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">
                Example
              </div>

              <h3 className="mt-3 text-2xl font-black">
                A customer pays ₹5,000 for your service.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Instead of manually checking the payment and updating everything
                yourself, your system can handle the workflow.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <MiniAction icon={CheckCircle2} text="Payment verified" />

              <MiniAction icon={Database} text="Customer marked paid" />

              <MiniAction icon={MessageCircle} text="WhatsApp sent" />

              <MiniAction icon={FileText} text="Receipt generated" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black text-slate-950 transition hover:bg-blue-100"
          >
            I Want This Automated
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="relative"
    >
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-blue-400 shadow-xl shadow-black/20">
        <Icon size={22} />
      </div>

      <div className="mt-5">
        <div className="text-[10px] font-black tracking-[0.15em] text-blue-400">
          {step.number}
        </div>

        <h3 className="mt-2 text-sm font-black text-white">{step.title}</h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {step.description}
        </p>
      </div>

      {/* Mobile connector */}
      {index !== workflowSteps.length - 1 && (
        <div className="absolute left-8 top-16 h-8 w-px bg-slate-800 lg:hidden" />
      )}
    </motion.div>
  );
}

function MiniAction({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3">
      <Icon size={17} className="shrink-0 text-emerald-400" />

      <span className="text-sm font-semibold text-slate-300">{text}</span>
    </div>
  );
}

export default WorkflowSection;
