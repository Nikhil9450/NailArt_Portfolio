export interface Settings {
  _id?: string;

  salonName: string;
  ownerName: string;

  phone: string;
  whatsapp: string;
  email: string;
  address: string;

  instagram: string;
  facebook: string;
  youtube: string;

  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;

  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;

  workingHours: string;

    // ⭐ Theme
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;

  backgroundColor: string;
  surfaceColor: string;

  textColor: string;
  mutedColor: string;

  headingFont: string;
  bodyFont: string;

  borderRadius: number;

  buttonStyle: "filled" | "outline" | "soft";

  shadow:
    | "none"
    | "soft"
    | "medium"
    | "large";

  themeMode:
    | "light"
    | "dark";

  preset: string;
}