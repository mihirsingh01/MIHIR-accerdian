import mongoose, { Schema, model, models } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;
