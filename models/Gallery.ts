import { Schema, model, models } from "mongoose";

const gallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      default: "Nail Art",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Gallery ||
  model("Gallery", gallerySchema);