import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  BookOpen,
  BriefcaseBusiness,
  Dumbbell,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Camera,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    examples: "Clinics, doctors, therapists",
    problems: [
      "Consultation payments",
      "Advance payments",
      "Patient-specific amounts",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "CA & Professional Services",
    examples: "CAs, consultants, agencies",
    problems: [
      "Quotation-based payments",
      "Client advances",
      "Invoice tracking",
    ],
  },
  {
    icon: BookOpen,
    title: "Educators",
    examples: "Teachers, tutors, course creators",
    problems: ["Course payments", "Installments", "Subscription fees"],
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    examples: "Gyms, trainers, fitness studios",
    problems: ["Membership payments", "Monthly renewals", "Payment reminders"],
  },
  {
    icon: Sparkles,
    title: "Yoga & Wellness",
    examples: "Yoga teachers, wellness businesses",
    problems: ["Class payments", "Packages", "Recurring memberships"],
  },
  {
    icon: ShoppingBag,
    title: "Product Sellers",
    examples: "Small businesses & D2C sellers",
    problems: [
      "Custom order amounts",
      "Advance payments",
      "Order confirmation",
    ],
  },
  {
    icon: BadgeIndianRupee,
    title: "Service Sellers",
    examples: "Freelancers & service businesses",
    problems: ["Custom quotations", "Advance + balance", "Automatic receipts"],
  },
  {
    icon: Camera,
    title: "Instagram Sellers",
    examples: "Creators & social sellers",
    problems: [
      "DM-to-payment flows",
      "Customer-specific links",
      "Payment confirmation",
    ],
  },
];

function IndustriesSection() {
  return (
    <section id="industries" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            Built around your business
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Different businesses.
            <br />
            <span className="text-slate-400">Different payment problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Whether you run a clinic, teach students, sell through Instagram or
            manage a gym, your payment workflow can be built around how your
            business actually operates.
          </p>
        </div>

        {/* Industry cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-start gap-4 rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Stethoscope size={19} />
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-950">
              Your industry doesn't have to fit into a generic payment system.
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              I build the payment flow around your customers, your pricing, your
              process and the actions you need after payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, index }) {
  const Icon = industry.icon;

  return (
    <motion.article
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={20} />
        </div>

        <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-black text-slate-950">
        {industry.title}
      </h3>

      <p className="mt-1 text-xs font-semibold text-slate-400">
        {industry.examples}
      </p>

      <div className="mt-5 space-y-2.5">
        {industry.problems.map((problem) => (
          <div
            key={problem}
            className="flex items-center gap-2 text-xs font-medium text-slate-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            {problem}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default IndustriesSection;
