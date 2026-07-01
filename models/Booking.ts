import mongoose, { Schema, model, models } from "mongoose";

const bookingSchema = new Schema(
  {
    service: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    instagram: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
    price: {
      type: Number,
      required: true,
    },

    duration: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  models.Booking || model("Booking", bookingSchema);
console.log(
  "Booking schema paths:",
  Object.keys(bookingSchema.paths)
);
export default Booking;