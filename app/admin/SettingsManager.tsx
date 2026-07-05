"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import Container from "@/components/layout/Container";
import { Settings } from "@/types/settings";
import SettingsForm from "@/components/admin/settings/SettingsForm";
import {
  getSettings,
  updateSettings,
} from "@/lib/api/settings";

export default function SettingsManager() {
  const [settings, setSettings] =
    useState<Settings | null>(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    loadSettings();
  }, []);
  const handleSave = async () => {
  if (!settings) return;

  try {
    setLoading(true);

    const updated = await updateSettings(settings);

    setSettings(updated);

    toast.error("Settings saved successfully.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to save settings.");
  } finally {
    setLoading(false);
  }
};

  async function loadSettings() {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!settings) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
<SettingsForm
  settings={settings}
  setSettings={setSettings}
  loading={loading}
  onSave={handleSave}
/>
  );
}