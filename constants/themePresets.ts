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
  name: "Rose Gold",

  primaryColor: "#C97C5D",
  secondaryColor: "#FFF3EE",
  accentColor: "#E8A87C",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FFF8F6",

  textColor: "#3E2723",
  mutedColor: "#8D6E63",

  headingFont: "Playfair Display",
  bodyFont: "Poppins",

  borderRadius: 24,

  buttonStyle: "filled",
  shadow: "medium",

  editable: false,
},
{
  name: "Nude Beige",

  primaryColor: "#B08968",
  secondaryColor: "#F7F2EC",
  accentColor: "#DDB892",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FCFAF8",

  textColor: "#4E342E",
  mutedColor: "#8D7B68",

  headingFont: "Cormorant Garamond",
  bodyFont: "Lato",

  borderRadius: 18,

  buttonStyle: "soft",
  shadow: "soft",

  editable: false,
},
{
  name: "Champagne",

  primaryColor: "#D4AF37",
  secondaryColor: "#FFFBEA",
  accentColor: "#E6C86E",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FFFDF8",

  textColor: "#4A3F35",
  mutedColor: "#8A817C",

  headingFont: "Playfair Display",
  bodyFont: "Open Sans",

  borderRadius: 22,

  buttonStyle: "filled",
  shadow: "large",

  editable: false,
},
{
  name: "Royal Purple",

  primaryColor: "#6D28D9",
  secondaryColor: "#F3E8FF",
  accentColor: "#A855F7",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FAF5FF",

  textColor: "#312E81",
  mutedColor: "#6B7280",

  headingFont: "Cinzel",
  bodyFont: "Inter",

  borderRadius: 20,

  buttonStyle: "filled",
  shadow: "large",

  editable: false,
},
{
  name: "Ocean Spa",

  primaryColor: "#0EA5E9",
  secondaryColor: "#E0F7FF",
  accentColor: "#38BDF8",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#F7FCFF",

  textColor: "#0F172A",
  mutedColor: "#64748B",

  headingFont: "Montserrat",
  bodyFont: "Open Sans",

  borderRadius: 20,

  buttonStyle: "soft",
  shadow: "medium",

  editable: false,
},
{
  name: "Peach Blossom",

  primaryColor: "#FB7185",
  secondaryColor: "#FFF1F2",
  accentColor: "#FDA4AF",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FFF7F8",

  textColor: "#4A2C2A",
  mutedColor: "#8D6E63",

  headingFont: "DM Serif Display",
  bodyFont: "Nunito",

  borderRadius: 24,

  buttonStyle: "filled",
  shadow: "medium",

  editable: false,
},
{
  name: "Black Gold",

  primaryColor: "#D4AF37",
  secondaryColor: "#2C2C2C",
  accentColor: "#F4D35E",

  backgroundColor: "#1A1A1A",
  surfaceColor: "#2A2A2A",

  textColor: "#FFFFFF",
  mutedColor: "#B0B0B0",

  headingFont: "Cinzel",
  bodyFont: "Poppins",

  borderRadius: 20,

  buttonStyle: "filled",
  shadow: "large",

  editable: false,
},
{
  name: "Mint Fresh",

  primaryColor: "#10B981",
  secondaryColor: "#ECFDF5",
  accentColor: "#6EE7B7",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#F8FFFC",

  textColor: "#064E3B",
  mutedColor: "#6B7280",

  headingFont: "Montserrat",
  bodyFont: "Inter",

  borderRadius: 18,

  buttonStyle: "soft",
  shadow: "soft",

  editable: false,
},
{
  name: "Luxury White",

  primaryColor: "#111827",
  secondaryColor: "#F9FAFB",
  accentColor: "#9CA3AF",

  backgroundColor: "#FFFFFF",
  surfaceColor: "#FFFFFF",

  textColor: "#111827",
  mutedColor: "#6B7280",

  headingFont: "Cormorant Garamond",
  bodyFont: "Lato",

  borderRadius: 16,

  buttonStyle: "outline",
  shadow: "soft",

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
