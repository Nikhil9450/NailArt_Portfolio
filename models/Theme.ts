import mongoose, { Schema, Document } from "mongoose";

export interface ITheme extends Document {
  preset: string;

  primary: string;
  secondary: string;
  accent: string;

  background: string;
  surface: string;

  text: string;
  muted: string;

  headingFont: string;
  bodyFont: string;

  radius: number;

  buttonStyle: "filled" | "outline" | "soft";

  shadow: "none" | "soft" | "medium" | "large";

  mode: "light" | "dark";
}

const ThemeSchema = new Schema<ITheme>(
  {
    preset: String,

    primary: String,
    secondary: String,
    accent: String,

    background: String,
    surface: String,

    text: String,
    muted: String,

    headingFont: String,
    bodyFont: String,

    radius: Number,

    buttonStyle: String,

    shadow: String,

    mode: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Theme ||
  mongoose.model<ITheme>("Theme", ThemeSchema);