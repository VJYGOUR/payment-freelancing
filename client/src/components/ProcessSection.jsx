import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Code2, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Tell me the problem",
    description:
      "Explain how customers currently pay, what happens afterward and where the manual work or errors happen.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "We define the workflow",
    description:
      "I map the payment, customer, database and notification steps your business actually needs.",
  },
  {
    number: "03",
    icon: Code2,
    title: "I build the system",
    description:
      "The required frontend, backend, payment integration, webhooks and automation are implemented.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Test & launch",
    description:
      "We test successful, failed and edge-case payment scenarios before moving the workflow live.",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            Simple process
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            You explain the problem.
            <br />
            <span className="text-slate-400">I build the solution.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            You don't need to know how APIs, webhooks or backend systems work.
            You just need to explain what you want your payment process to do.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
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
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-black text-blue-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 lg:flex">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
