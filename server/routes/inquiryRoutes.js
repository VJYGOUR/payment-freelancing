import express from "express";
import Inquiry from "../models/Inquiry.js";
import sendWhatsAppNotification from "../services/whatsappService.js";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .isLength({
        min: 2,
        max: 100,
      })
      .withMessage("Invalid name."),

    body("whatsapp")
      .trim()
      .isLength({
        min: 8,
        max: 30,
      })
      .withMessage("Invalid WhatsApp number."),

    body("businessType")
      .trim()
      .isLength({
        min: 2,
        max: 100,
      })
      .withMessage("Invalid business type."),

    body("problem")
      .trim()
      .isLength({
        min: 10,
        max: 2000,
      })
      .withMessage("Please describe your problem."),

    body("interestedIn").optional().trim().isLength({
      max: 200,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: errors
            .array()
            .map((error) => error.msg)
            .join(" "),
        });
      }

      if (
        typeof req.body.website === "string" &&
        req.body.website.trim() !== ""
      ) {
        return res.status(400).json({
          success: false,
          message: "Unable to submit inquiry.",
        });
      }
      const { name, whatsapp, businessType, problem, interestedIn, source } =
        req.body;

      if (!name || !whatsapp || !businessType || !problem) {
        return res.status(400).json({
          success: false,
          message: "Please fill all required fields.",
        });
      }

      const inquiry = await Inquiry.create({
        name,
        whatsapp,
        businessType,
        problem,
        interestedIn,
        source,
      });

      try {
        await sendWhatsAppNotification(inquiry);
      } catch (whatsappError) {
        console.error("WhatsApp notification failed:", whatsappError.message);
      }

      return res.status(201).json({
        success: true,
        message: "Your inquiry has been received. I'll get back to you soon.",
        inquiryId: inquiry._id,
      });
    } catch (error) {
      console.error("Inquiry error:", error);

      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },
);

export default router;
