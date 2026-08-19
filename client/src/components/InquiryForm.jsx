import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

import { createWhatsAppLink } from "../utils/whatsapp";
import { createWhatsAppInquiryMessage } from "../utils/createWhatsAppInquiryMessage";

const businessTypes = [
  "Healthcare",
  "CA / Professional Services",
  "Educator / Course Creator",
  "Gym / Fitness",
  "Yoga / Wellness",
  "Product Seller",
  "Service Seller",
  "Instagram Seller",
  "Other",
];

const initialForm = {
  name: "",
  whatsapp: "",
  businessType: "",
  problem: "",
  interestedIn: "",
  website: "",
};

function InquiryForm({ selectedService = "" }) {
  const [form, setForm] = useState({
    ...initialForm,
    interestedIn: selectedService,
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot check
    if (form.website) {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            source: "landing-page",
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit inquiry.");
      }

      /*
       * Create the WhatsApp message BEFORE
       * clearing the form.
       */
      const whatsappMessage = createWhatsAppInquiryMessage({
        name: form.name,
        businessType: form.businessType,
        interestedIn: form.interestedIn,
        problem: form.problem,
      });

      const generatedWhatsAppUrl = createWhatsAppLink(whatsappMessage);

      setWhatsappUrl(generatedWhatsAppUrl);

      setStatus("success");

      setMessage(
        "Your inquiry has been received. For the fastest response, continue the conversation on WhatsApp.",
      );

      setForm({
        ...initialForm,
        interestedIn: selectedService,
      });
    } catch (error) {
      setStatus("error");

      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <CheckCircle2 size={26} />
        </div>

        <h3 className="mt-6 text-2xl font-black text-slate-950">
          Inquiry received
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          {message}
        </p>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Continue on WhatsApp
            <ArrowRight size={17} />
          </a>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
            setWhatsappUrl("");
          }}
          className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8"
    >
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <MessageCircle size={20} />
        </div>

        <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
          Tell me what you need
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Don't worry about technical terms. Explain the business problem in
          your own words.
        </p>
      </div>

      <div className="mt-7 space-y-5">
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {/* Name */}
        <Field label="Your name" required>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Rahul Sharma"
            className="input"
          />
        </Field>

        {/* WhatsApp */}
        <Field label="WhatsApp number" required>
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            required
            type="tel"
            placeholder="+91 98765 43210"
            className="input"
          />
        </Field>

        {/* Business */}
        <Field label="What type of business do you run?" required>
          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select your business</option>

            {businessTypes.map((business) => (
              <option key={business} value={business}>
                {business}
              </option>
            ))}
          </select>
        </Field>

        {/* Interested in */}
        <Field label="What are you interested in?">
          <input
            name="interestedIn"
            value={form.interestedIn}
            onChange={handleChange}
            placeholder="Payment automation"
            className="input"
          />
        </Field>

        {/* Problem */}
        <Field label="What problem are you trying to solve?" required>
          <textarea
            name="problem"
            value={form.problem}
            onChange={handleChange}
            required
            rows={5}
            placeholder="For example: I want customers to pay an advance and automatically receive a WhatsApp confirmation..."
            className="input resize-none"
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send My Inquiry
            <ArrowRight size={17} />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Your information is used only to respond to your inquiry.
      </p>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-800">
        {label}

        {required && <span className="ml-1 text-blue-600">*</span>}
      </span>

      {children}
    </label>
  );
}

export default InquiryForm;
