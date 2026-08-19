export const createWhatsAppInquiryMessage = ({
  name,
  businessType,
  interestedIn,
  problem,
}) => {
  return `Hi, I just submitted an inquiry through your website.

Name: ${name}

Business: ${businessType}

Interested in: ${interestedIn || "Not specified"}

My problem:
${problem}

I'd like to discuss this with you.`;
};
