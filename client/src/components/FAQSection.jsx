import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need a website already?",
    answer:
      "No. We can build the required payment page or workflow from scratch, or integrate payments into your existing website or application.",
  },
  {
    question: "Can you integrate Razorpay into my existing website?",
    answer:
      "Yes. The integration can be added to an existing website or application, including custom checkout flows, payment links, webhooks and backend payment verification.",
  },
  {
    question: "Can every customer pay a different amount?",
    answer:
      "Yes. A payment flow can be designed around customer-specific amounts, quotations, invoices, advances or balances.",
  },
  {
    question: "Can I send WhatsApp messages automatically after payment?",
    answer:
      "Yes. Once a payment is successfully verified, the system can trigger a WhatsApp notification through the appropriate WhatsApp Business API or provider.",
  },
  {
    question: "Can payment information update my Excel or Google Sheet?",
    answer:
      "Yes. Depending on your workflow, successful payment information can be sent to a spreadsheet or another system automatically.",
  },
  {
    question: "Can you fix my existing Razorpay integration?",
    answer:
      "Yes. Problems involving webhooks, signature verification, payment callbacks, test/live configuration, duplicate records and missing database updates can be investigated.",
  },
  {
    question: "Can I collect an advance and then the remaining balance?",
    answer:
      "Yes. The payment workflow can be designed to record an advance and track the remaining amount for the customer.",
  },
  {
    question: "Do I need to understand technical things?",
    answer:
      "No. You should understand your business process, not the implementation details. You can explain what happens today and what you want to happen instead.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            Frequently asked questions
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Before you get started
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A few common questions about custom payment integrations and
            automation.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/40"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200/70 px-5 pb-5 pt-4">
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
