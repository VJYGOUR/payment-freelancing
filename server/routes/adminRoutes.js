import express from "express";
import Inquiry from "../models/Inquiry.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();
router.use(protect);
/**
 * GET /api/admin/inquiries
 * Get all inquiries
 */
router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();

    res.json({
      success: true,
      inquiries,
    });
  } catch (error) {
    console.error("Get inquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load inquiries.",
    });
  }
});

/**
 * PATCH /api/admin/inquiries/:id
 * Update inquiry status
 */
router.patch("/inquiries/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["new", "contacted", "qualified", "closed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    res.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("Update inquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update inquiry.",
    });
  }
});

/**
 * DELETE /api/admin/inquiries/:id
 */
router.delete("/inquiries/:id", async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    res.json({
      success: true,
      message: "Inquiry deleted.",
    });
  } catch (error) {
    console.error("Delete inquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete inquiry.",
    });
  }
});

export default router;
