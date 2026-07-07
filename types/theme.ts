export interface Theme {
  _id?: string;

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