const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

export const createWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message = "") => {
  window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");
};
