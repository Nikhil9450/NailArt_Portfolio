import { Settings } from "@/types/settings";

export const themePresets: Array<
  Pick<
    Settings,
    | "primaryColor"
    | "secondaryColor"
    | "accentColor"
    | "backgroundColor"
    | "surfaceColor"
    | "textColor"
    | "mutedColor"
    | "headingFont"
    | "bodyFont"
    | "borderRadius"
    | "buttonStyle"
    | "shadow"
  > & {
    name: string;
    editable: boolean;
  }
> = [
  {
    name: "Pink Luxury",

    primaryColor: "#ec4899",
    secondaryColor: "#fff1f6",
    accentColor: "#f472b6",

    backgroundColor: "#ffffff",
    surfaceColor: "#ffffff",

    textColor: "#111827",
    mutedColor: "#6b7280",

    headingFont: "Playfair Display",
    bodyFont: "Poppins",

    borderRadius: 24,

    buttonStyle: "filled",

    shadow: "medium",

    editable: false,
  },

  {
    name: "Lavender Spa",

    primaryColor: "#8b5cf6",
    secondaryColor: "#f5f3ff",
    accentColor: "#a78bfa",

    backgroundColor: "#ffffff",
    surfaceColor: "#ffffff",

    textColor: "#1f2937",
    mutedColor: "#6b7280",

    headingFont: "Cormorant Garamond",
    bodyFont: "Inter",

    borderRadius: 20,

    buttonStyle: "soft",

    shadow: "soft",

    editable: false,
  },

  {
    name: "Emerald",

    primaryColor: "#10b981",
    secondaryColor: "#ecfdf5",
    accentColor: "#34d399",

    backgroundColor: "#ffffff",
    surfaceColor: "#ffffff",

    textColor: "#111827",
    mutedColor: "#6b7280",

    headingFont: "Montserrat",
    bodyFont: "Open Sans",

    borderRadius: 18,

    buttonStyle: "filled",

    shadow: "medium",

    editable: false,
  },

  {
    name: "Minimal",

    primaryColor: "#111827",
    secondaryColor: "#f3f4f6",
    accentColor: "#374151",

    backgroundColor: "#ffffff",
    surfaceColor: "#ffffff",

    textColor: "#111827",
    mutedColor: "#6b7280",

    headingFont: "Inter",
    bodyFont: "Inter",

    borderRadius: 12,

    buttonStyle: "outline",

    shadow: "none",

    editable: false,
  },

  {
    name: "Dark Luxury",

    primaryColor: "#f472b6",
    secondaryColor: "#27272a",
    accentColor: "#ec4899",

    backgroundColor: "#18181b",
    surfaceColor: "#27272a",

    textColor: "#fafafa",
    mutedColor: "#a1a1aa",

    headingFont: "Playfair Display",
    bodyFont: "Poppins",

    borderRadius: 24,

    buttonStyle: "filled",

    shadow: "large",

    editable: false,
  },

  {
    name: "Custom",

    primaryColor: "#ec4899",
    secondaryColor: "#fff1f6",
    accentColor: "#f472b6",

    backgroundColor: "#ffffff",
    surfaceColor: "#ffffff",

    textColor: "#111827",
    mutedColor: "#6b7280",

    headingFont: "Playfair Display",
    bodyFont: "Poppins",

    borderRadius: 24,

    buttonStyle: "filled",

    shadow: "medium",

    editable: true,
  },
];
