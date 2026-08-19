import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../utils/whatsapp";

function WhatsAppFloatingButton() {
  const message =
    "Hi, I found your website and would like to discuss a business requirement.";

  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl transition hover:scale-105 hover:bg-slate-800"
    >
      <MessageCircle size={23} />
    </a>
  );
}

export default WhatsAppFloatingButton;
