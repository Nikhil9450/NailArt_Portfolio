"use client";

import { useEffect } from "react";
import { Settings } from "@/types/settings";

interface Props {
  settings: Settings;
  children: React.ReactNode;
}

export default function ThemeProvider({
  settings,
  children,
}: Props) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      "--theme-primary",
      settings.primaryColor
    );

    root.style.setProperty(
      "--theme-secondary",
      settings.secondaryColor
    );

    root.style.setProperty(
      "--theme-accent",
      settings.accentColor
    );

    root.style.setProperty(
      "--theme-background",
      settings.backgroundColor
    );

    root.style.setProperty(
      "--theme-surface",
      settings.surfaceColor
    );

    root.style.setProperty(
      "--theme-text",
      settings.textColor
    );

    root.style.setProperty(
      "--theme-muted",
      settings.mutedColor
    );

    root.style.setProperty(
      "--theme-radius",
      `${settings.borderRadius}px`
    );

    root.style.setProperty(
      "--theme-heading-font",
      settings.headingFont
    );

    root.style.setProperty(
      "--theme-body-font",
      settings.bodyFont
    );
  }, [settings]);

  return <>{children}</>;
}