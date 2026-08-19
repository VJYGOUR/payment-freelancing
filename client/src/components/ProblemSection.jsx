import { motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  FileSpreadsheet,
  Link2,
  MessageCircle,
  RefreshCcw,
  UserRound,
  Webhook,
  WalletCards,
} from "lucide-react";

const problems = [
  {
    icon: WalletCards,
    title: "Every customer pays a different amount",
    description:
      "You have different quotations, fees, advances or balances for different customers.",
  },
  {
    icon: Link2,
    title: "You need a payment link for each customer",
    description:
      "Instead of manually explaining how much someone should pay, give them the exact payment flow they need.",
  },
  {
    icon: RefreshCcw,
    title: "You collect an advance and chase the balance",
    description:
      "Collect an advance now and manage the remaining payment as part of the same workflow.",
  },
  {
    icon: MessageCircle,
    title: "You manually message customers after payment",
    description:
      "Stop checking payments and sending individual WhatsApp confirmations.",
  },
  {
    icon: FileSpreadsheet,
    title: "You manually update Excel or Google Sheets",
    description:
      "Every successful payment can update your business records automatically.",
  },
  {
    icon: UserRound,
    title: "You don't know who has actually paid",
    description:
      "Connect payments with customers, invoices and orders so your records stay organised.",
  },
  {
    icon: Webhook,
    title: "Your Razorpay integration isn't working",
    description:
      "Payment succeeds but your database doesn't update, webhooks fail or callbacks don't fire.",
  },
  {
    icon: AlertCircle,
    title: "You manually handle failed or pending payments",
    description:
      "Track successful, failed, pending and refunded payments in one workflow.",
  },
];

function ProblemSection() {
  return (
    <section id="problems" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Problem recognition
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Does your payment process still involve this much manual work?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Most businesses don't have a payment problem. They have a{" "}
            <span className="font-bold text-slate-950">
              “what happens after payment?” problem.
            </span>
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
              <Check size={17} className="text-emerald-600" />
              Your payment system should do more than say “Payment Successful.”
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              It should automatically trigger the next steps your business
              needs.
            </p>
          </div>

          <a
            href="#solutions"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            See How I Can Help
          </a>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem, index }) {
  const Icon = problem.icon;

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
        delay: index * 0.04,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={20} />
      </div>

      <h3 className="mt-6 text-base font-bold leading-6 text-slate-950">
        {problem.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {problem.description}
      </p>
    </motion.div>
  );
}

export default ProblemSection;
