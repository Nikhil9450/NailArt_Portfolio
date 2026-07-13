"use client";

import {
  createContext,
  useContext,
} from "react";

import { Settings } from "@/types/settings";

const WebsiteSettingsContext =
  createContext<Settings | null>(null);

interface Props {
  settings: Settings;
  children: React.ReactNode;
}

export default function WebsiteSettingsProvider({
  settings,
  children,
}: Props) {
  return (
    <WebsiteSettingsContext.Provider
      value={settings}
    >
      {children}
    </WebsiteSettingsContext.Provider>
  );
}

export function useWebsiteSettings() {
  const context = useContext(
    WebsiteSettingsContext
  );

  if (!context) {
    throw new Error(
      "useWebsiteSettings must be used inside WebsiteSettingsProvider"
    );
  }

  return context;
}