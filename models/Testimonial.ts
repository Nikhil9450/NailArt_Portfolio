import { Schema, model, models } from "mongoose";

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    review: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Testimonial ||
  model("Testimonial", testimonialSchema);