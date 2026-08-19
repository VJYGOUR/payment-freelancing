import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    whatsapp: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },

    businessType: {
      type: String,
      required: true,
      trim: true,
    },

    problem: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    interestedIn: {
      type: String,
      trim: true,
      default: "",
    },

    source: {
      type: String,
      trim: true,
      default: "landing-page",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
