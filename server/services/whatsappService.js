const sendWhatsAppNotification = async (inquiry) => {
  const message = `
NEW LEAD

Name: ${inquiry.name}
WhatsApp: ${inquiry.whatsapp}
Business: ${inquiry.businessType}

Interested In:
${inquiry.interestedIn || "Not specified"}

Problem:
${inquiry.problem}

Source:
${inquiry.source}
`;

  console.log("WhatsApp notification:");
  console.log(message);

  /*
    WhatsApp provider integration goes here.

    Example:

    await fetch(PROVIDER_URL, {
      method: "POST",
      headers: {
        ...
      },
      body: JSON.stringify({
        ...
      }),
    });
  */

  return true;
};

export default sendWhatsAppNotification;
