import { Schema, model, models } from "mongoose";

const settingsSchema = new Schema(
  {
    salonName: {
      type: String,
      default: "",
    },

    ownerName: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    whatsapp: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    heroTitle: {
      type: String,
      default: "",
    },

    heroSubtitle: {
      type: String,
      default: "",
    },

    heroImage: {
      type: String,
      default: "",
    },

    aboutTitle: {
      type: String,
      default: "",
    },

    aboutDescription: {
      type: String,
      default: "",
    },

    aboutImage: {
      type: String,
      default: "",
    },

    workingHours: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Settings ||
  model("Settings", settingsSchema);