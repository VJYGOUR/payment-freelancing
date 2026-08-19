import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Database,
  Link2,
  RefreshCcw,
  ShieldCheck,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: CreditCard,
    number: "01",
    title: "Payment Integration",
    shortTitle: "Accept payments your way",
    description:
      "Build a payment experience around your actual business instead of forcing customers through a generic checkout.",
    features: [
      "Custom Razorpay checkout",
      "Payment links & buttons",
      "QR payment flows",
      "Customer-entered amounts",
      "Advance & partial payments",
      "Custom success / failure pages",
    ],
    cta: "Build My Payment Flow",
  },

  {
    icon: Zap,
    number: "02",
    title: "Payment Automation",
    shortTitle: "Automate what happens after payment",
    description:
      "A successful payment can automatically trigger the actions your team currently performs manually.",
    features: [
      "WhatsApp notifications",
      "Email receipts",
      "Invoice generation",
      "Database updates",
      "Google Sheets workflows",
      "Team notifications",
    ],
    cta: "Automate My Payments",
    featured: true,
  },

  {
    icon: Link2,
    number: "03",
    title: "Customer-Specific Payments",
    shortTitle: "Give every customer the right amount",
    description:
      "Create payment flows around individual customers, quotations, invoices, advances and balances.",
    features: [
      "Customer-specific amounts",
      "Quotation-based payments",
      "Invoice-based payments",
      "Unique payment links",
      "Customer IDs",
      "Expiring payment links",
    ],
    cta: "Create Customer Payments",
  },

  {
    icon: Database,
    number: "04",
    title: "Payment Tracking",
    shortTitle: "Know who paid and what happened",
    description:
      "Connect payment activity to customers, invoices and orders so you don't have to reconcile everything manually.",
    features: [
      "Paid / pending status",
      "Failed payments",
      "Refund tracking",
      "Invoice matching",
      "Customer matching",
      "Payment reports",
    ],
    cta: "Automate My Tracking",
  },

  {
    icon: RefreshCcw,
    number: "05",
    title: "Subscriptions",
    shortTitle: "Automate recurring payments",
    description:
      "Build recurring payment workflows for memberships, subscriptions, courses, services and other recurring businesses.",
    features: [
      "Monthly subscriptions",
      "Yearly subscriptions",
      "Membership payments",
      "Failed-payment handling",
      "Status updates",
      "Renewal workflows",
    ],
    cta: "Build My Subscription Flow",
  },

  {
    icon: ShieldCheck,
    number: "06",
    title: "Razorpay Troubleshooting",
    shortTitle: "Fix what's already broken",
    description:
      "If your existing payment integration is failing, I can investigate the payment, webhook and backend workflow.",
    features: [
      "Webhook problems",
      "Signature verification",
      "Payment callbacks",
      "Test vs live issues",
      "Duplicate records",
      "Missing payment updates",
    ],
    cta: "Fix My Razorpay Integration",
  },
];

function SolutionsSection() {
  return (
    <section id="solutions" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              What I can build
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
              Your payment problem.
              <br />
              <span className="text-slate-400">A custom solution.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              You explain the business problem. I design and build the payment,
              backend and automation workflow needed to solve it.
            </p>
          </div>

          <div className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 lg:block">
            No need to understand APIs, webhooks or backend systems.
            <span className="font-bold text-slate-900">
              {" "}
              Just tell me what you need to happen.
            </span>
          </div>
        </div>

        {/* Solutions */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Not sure which one you need?
              </div>

              <h3 className="mt-2 text-2xl font-black tracking-tight">
                Tell me what happens today and what you want to happen instead.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                I'll help identify the right payment and automation workflow.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-100"
            >
              Describe My Problem
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className={`group relative overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${
        solution.featured
          ? "border-blue-200 bg-blue-50/60 shadow-xl shadow-blue-100/50"
          : "border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
      }`}
    >
      {solution.featured && (
        <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
          Popular
        </div>
      )}

      {/* Number */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-black text-blue-600">
          {solution.number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-blue-600">
          <Icon size={20} />
        </div>
      </div>

      {/* Heading */}
      <h3 className="mt-7 text-xl font-black tracking-tight text-slate-950">
        {solution.title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-slate-500">
        {solution.shortTitle}
      </p>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-slate-600">
        {solution.description}
      </p>

      {/* Features */}
      <div className="mt-6 space-y-3 border-t border-slate-200/80 pt-6">
        {solution.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-700"
          >
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4.2 7.2L8 2.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {feature}
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition group-hover:text-blue-600"
      >
        {solution.cta}

        <ArrowRight
          size={15}
          className="transition group-hover:translate-x-1"
        />
      </a>
    </motion.article>
  );
}

export default SolutionsSection;
