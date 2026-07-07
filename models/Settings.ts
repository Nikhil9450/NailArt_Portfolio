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

    primaryColor: {
      type: String,
      default: "#ec4899",
    },

    secondaryColor: {
      type: String,
      default: "#fff1f6",
    },

    accentColor: {
      type: String,
      default: "#f472b6",
    },

    backgroundColor: {
      type: String,
      default: "#ffffff",
    },

    surfaceColor: {
      type: String,
      default: "#ffffff",
    },

    textColor: {
      type: String,
      default: "#111827",
    },

    mutedColor: {
      type: String,
      default: "#6b7280",
    },

    headingFont: {
      type: String,
      default: "Playfair Display",
    },

    bodyFont: {
      type: String,
      default: "Poppins",
    },

    borderRadius: {
      type: Number,
      default: 24,
    },

    buttonStyle: {
      type: String,
      default: "filled",
    },

    shadow: {
      type: String,
      default: "medium",
    },

    themeMode: {
      type: String,
      default: "light",
    },

    preset: {
      type: String,
      default: "Pink Luxury",
    },  
  },
  {
    timestamps: true,
  }
);

export default models.Settings ||
  model("Settings", settingsSchema);