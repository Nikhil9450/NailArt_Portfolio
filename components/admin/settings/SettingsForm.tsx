"use client";

import { Settings } from "@/types/settings";
import { validateImage } from "@/lib/imageValidation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
interface SettingsFormProps {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings | null>>;
  onSave: () => void;
  loading: boolean;
}

export default function SettingsForm({
  settings,
  setSettings,
  onSave,
  loading,
}: SettingsFormProps) {
  return (
    <div className="space-y-10">

      {/* Business Information */}
      <div className="rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          Business Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block">Salon Name</label>

            <input
              value={settings.salonName}
              onChange={(e) =>
                setSettings((prev) =>
                  prev
                    ? {
                        ...prev,
                        salonName: e.target.value,
                      }
                    : prev
                )
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Owner Name</label>

            <input
              value={settings.ownerName}
              onChange={(e) =>
                setSettings((prev) =>
                  prev
                    ? {
                        ...prev,
                        ownerName: e.target.value,
                      }
                    : prev
                )
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Phone</label>

            <input
              value={settings.phone}
              onChange={(e) =>
                setSettings((prev) =>
                  prev
                    ? {
                        ...prev,
                        phone: e.target.value,
                      }
                    : prev
                )
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Email</label>

            <input
              value={settings.email}
              onChange={(e) =>
                setSettings((prev) =>
                  prev
                    ? {
                        ...prev,
                        email: e.target.value,
                      }
                    : prev
                )
              }
              className="w-full rounded-xl border p-3"
            />
          </div>
        <div>
        <label className="mb-2 block">WhatsApp</label>

        <input
            value={settings.whatsapp}
            onChange={(e) =>
            setSettings((prev) =>
                prev
                ? {
                    ...prev,
                    whatsapp: e.target.value,
                    }
                : prev
            )
            }
            className="w-full rounded-xl border p-3"
        />
        </div>
        <div className="md:col-span-2">
        <label className="mb-2 block">Address</label>

        <textarea
            value={settings.address}
            onChange={(e) =>
            setSettings((prev) =>
                prev
                ? {
                    ...prev,
                    address: e.target.value,
                    }
                : prev
            )
            }
            rows={4}
            className="w-full rounded-xl border p-3"
        />
        </div>        
        </div>
      </div>
        {/* Social Media Section */}
        <div className="rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
            Social Media
        </h2>

        <div className="grid gap-6 md:grid-cols-1
sm:grid-cols-2
lg:grid-cols-3">

            <div>
            <label className="mb-2 block">Instagram</label>

            <input
                value={settings.instagram}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        instagram: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>

            <div>
            <label className="mb-2 block">Facebook</label>

            <input
                value={settings.facebook}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        facebook: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>

            <div>
            <label className="mb-2 block">YouTube</label>

            <input
                value={settings.youtube}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        youtube: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>

        </div>
        </div>
        {/* Hero Section */}
        <div className="rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
            Hero Section
        </h2>

        <div className="space-y-6">

            <div>
            <label className="mb-2 block">
                Hero Title
            </label>

            <input
                value={settings.heroTitle}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        heroTitle: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>

            <div>
            <label className="mb-2 block">
                Hero Subtitle
            </label>

            <textarea
                rows={4}
                value={settings.heroSubtitle}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        heroSubtitle: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>
            <div>
            <label className="mb-2 block">
                Hero Image
            </label>

            <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) return;
                if (!validateImage(file)) {
                e.target.value = "";
                return;
                }
                const formData = new FormData();
                formData.append("file", file);

                try {
                    const response = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                    });

                    const data = await response.json();

                    setSettings((prev) =>
                    prev
                        ? {
                            ...prev,
                            heroImage: data.url,
                        }
                        : prev
                    );
                } catch (error) {
                    console.error(error);
                }
                }}
                className="w-full rounded-xl border p-3"
            />

            {settings.heroImage && (
                <img
                src={settings.heroImage}
                alt="Hero Preview"
                className="mt-4 h-56 w-full rounded-xl object-cover"
                />
            )}
            </div>
        </div>
        </div>    
        {/* About Section     */}
        <div className="rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
            About Section
        </h2>

        <div className="space-y-6">

            <div>
            <label className="mb-2 block">
                About Title
            </label>

            <input
                value={settings.aboutTitle}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        aboutTitle: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>

            <div>
            <label className="mb-2 block">
                About Description
            </label>

            <textarea
                rows={6}
                value={settings.aboutDescription}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        aboutDescription: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
            />
            </div>
            <div>
            <label className="mb-2 block">
                About Image
            </label>

            <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                const formData = new FormData();
                formData.append("file", file);

                try {
                    const response = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                    });

                    const data = await response.json();

                    setSettings((prev) =>
                    prev
                        ? {
                            ...prev,
                            aboutImage: data.url,
                        }
                        : prev
                    );
                } catch (error) {
                    console.error(error);
                }
                }}
                className="w-full rounded-xl border p-3"
            />

            {settings.aboutImage && (
                <img
                src={settings.aboutImage}
                alt="About Preview"
                className="mt-4 h-64 w-full rounded-xl object-cover"
                />
            )}
            </div>
        </div>
        </div>
        {/* Working Hours Section */}
        <div className="rounded-2xl border p-6">
            <h2 className="mb-6 text-2xl font-semibold">
                Working Hours
            </h2>

            <textarea
                rows={6}
                value={settings.workingHours}
                onChange={(e) =>
                setSettings((prev) =>
                    prev
                    ? {
                        ...prev,
                        workingHours: e.target.value,
                        }
                    : prev
                )
                }
                className="w-full rounded-xl border p-3"
                placeholder={`Monday - Friday
                    10:00 AM - 8:00 PM

                    Saturday
                    10:00 AM - 6:00 PM

                    Sunday
                    Closed`}
                    />
        </div>
      <div className="flex justify-end">
        <button
          onClick={onSave}
          disabled={loading}
          className="rounded-xl  px-6 py-3 text-white hover:bg-pink-700 disabled:opacity-50"
          style={{
            background: "var(--primary)"
          }}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

    </div>
  );
}