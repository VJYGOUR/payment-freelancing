import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { createWhatsAppLink } from "../utils/whatsapp";

const navItems = [
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Industries",
    href: "#industries",
  },
  {
    label: "How It Works",
    href: "#process",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const whatsappMessage =
    "Hi, I found your website and would like to discuss a business requirement.";

  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" onClick={closeMobileMenu} className="group">
          <div className="text-sm font-black tracking-tight text-slate-950">
            ONLINE PAYMENT COLLECTION
          </div>

          <div className="mt-0.5 text-[9px] font-semibold tracking-[0.22em] text-slate-500">
            CUSTOM PAYMENT SYSTEMS
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          {/* Main CTA */}
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Tell Me Your Problem
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm font-semibold text-slate-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-bold text-slate-700"
            >
              <MessageCircle size={17} />
              WhatsApp Me
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 rounded-xl bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Tell Me Your Problem
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
