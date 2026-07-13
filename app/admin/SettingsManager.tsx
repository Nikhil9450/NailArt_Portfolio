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
  const [savedSettings, setSavedSettings] =
    useState<Settings | null>(null);

  const [workingSettings, setWorkingSettings] =
    useState<Settings | null>(null);
  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    loadSettings();
  }, []);
  const handleSave = async () => {
  if (!workingSettings) return;

  try {
    setLoading(true);

    const updated = await updateSettings(
      workingSettings!
    );
    setSavedSettings(updated);
    setWorkingSettings(structuredClone(updated));
    toast.success("Settings saved successfully.");
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

    setSavedSettings(data);

    setWorkingSettings(structuredClone(data));
    } catch (error) {
      console.error(error);
    }
  }

  if (!workingSettings) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
<SettingsForm
  settings={workingSettings}
  setSettings={setWorkingSettings}
  loading={loading}
  onSave={handleSave}
/>
  );
}