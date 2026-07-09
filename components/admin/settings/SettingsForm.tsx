"use client";

import { Settings } from "@/types/settings";
import { validateImage } from "@/lib/imageValidation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { themePresets } from "@/constants/themePresets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
        <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
          Business Information
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-theme">Salon Name</label>

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
              className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-theme">Owner Name</label>

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
              className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-theme">Phone</label>

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
              className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-theme">Email</label>

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
              className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
          </div>
        <div>
        <label className="mb-2 block text-sm font-medium text-theme">WhatsApp</label>

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
            className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
        />
        </div>
        <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-theme">Address</label>

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
            className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
        />
        </div>        
        </div>
      </div>
        {/* Social Media Section */}
        <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
        <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
            Social Media
        </h2>

        <div className="grid gap-6 md:grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3">

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">Instagram</label>

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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">Facebook</label>

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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">YouTube</label>

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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>

        </div>
        </div>
        {/* Hero Section */}
        <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
        <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
            Hero Section
        </h2>

        <div className="space-y-6">

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>
            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />

            {settings.heroImage && (
                <img
                src={settings.heroImage}
                alt="Hero Preview"
                 className="
                    mt-4
                    h-44
                    w-full
                    rounded-theme
                    object-cover
                    shadow-theme
                    sm:h-56
                    "
                />
            )}
            </div>
        </div>
        </div>    
        {/* About Section     */}
        <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
        <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
            About Section
        </h2>

        <div className="space-y-6">

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>

            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />
            </div>
            <div>
            <label className="mb-2 block text-sm font-medium text-theme">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
            />

            {settings.aboutImage && (
                <img
                src={settings.aboutImage}
                alt="About Preview"
                className="
                    mt-4
                    h-48
                    w-full
                    rounded-theme
                    object-cover
                    shadow-theme
                    sm:h-64
                    "
                />
            )}
            </div>
        </div>
        </div>
        {/* Working Hours Section */}
        <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
            <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
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
                className="
w-full
rounded-theme
border
border-gray-200
bg-theme-surface
px-4
py-3
text-sm
text-theme
placeholder:text-theme-muted
focus:border-theme
focus:outline-none
sm:text-base
"
                placeholder={`Monday - Friday
                    10:00 AM - 8:00 PM

                    Saturday
                    10:00 AM - 6:00 PM

                    Sunday
                    Closed`}
                    />
        </div>

        {/* Appearance */}
        <div className="rounded-theme border bg-theme-surface p-4 shadow-theme sm:p-6">
        <h2 className="mb-4 text-xl font-semibold text-theme sm:mb-6 sm:text-2xl">
            Appearance
        </h2>

        <h3 className="mb-3 text-base font-semibold text-theme sm:mb-4 sm:text-lg">
            Theme Preset
        </h3>

<div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
  {themePresets.map((preset) => {
    const active = settings.preset === preset.name;

    return (
      <button
        key={preset.name}
        type="button"
        onClick={() =>
          setSettings((prev) =>
            prev
              ? {
                  ...prev,
                  preset: preset.name,
                  primaryColor: preset.primaryColor,
                  secondaryColor: preset.secondaryColor,
                  accentColor: preset.accentColor,
                  backgroundColor: preset.backgroundColor,
                  surfaceColor: preset.surfaceColor,
                  textColor: preset.textColor,
                  mutedColor: preset.mutedColor,
                }
              : prev
          )
        }
        className={`
            relative
            rounded-theme
            border
            bg-theme-surface
            p-4
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg

          ${
           active
            ? "border-theme ring-2 ring-theme bg-theme-secondary"
            : "border-gray-200"
          }
        `}
      >
        {/* Selected */}
        {active && (
          <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-theme text-xs text-white">
            ✓
          </div>
        )}

        <h4 className="text-sm font-semibold text-theme">
          {preset.name}
        </h4>

        {/* Color Palette */}
<div className="mt-4 flex justify-between">
  {[
    {
      label: "PRI",
      color: preset.primaryColor,
    },
    {
      label: "SEC",
      color: preset.secondaryColor,
    },
    {
      label: "ACC",
      color: preset.accentColor,
    },
    {
      label: "BGD",
      color: preset.backgroundColor,
    },
  ].map((item) => (
    <div
      key={item.label}
      className="flex flex-col items-center gap-1"
    >
      <div
        className="h-7 w-7 rounded-full border border-gray-200 shadow-sm"
        style={{
          backgroundColor: item.color,
        }}
      />

      <span className="text-[10px] font-semibold uppercase tracking-wide text-theme-muted">
        {item.label}
      </span>
    </div>
  ))}
</div>
      </button>
    );
  })}
</div>

      {/* Colors */}
        <div className="mt-6 rounded-theme border p-5">
        <h3 className="mb-4 text-base font-semibold text-theme sm:text-lg">
            Theme Colors
        </h3>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">

            {[
            ["Primary", "primaryColor"],
            ["Secondary", "secondaryColor"],
            ["Accent", "accentColor"],
            ["Background", "backgroundColor"],
            ["Surface", "surfaceColor"],
            ["Text", "textColor"],
            ["Muted", "mutedColor"],
            ].map(([label, key]) => (
            <div
                key={key}
                className="
                rounded-theme
                border
                border-gray-200
                bg-theme-surface
                px-3
                py-4
                shadow-sm
                "
            >
                <label className="mb-3 block text-xs font-semibold text-theme">
                {label}
                </label>

                <div className="flex flex-col items-center gap-3">

                <input
                    type="color"
                    value={settings[key as keyof Settings] as string}
                    onChange={(e) =>
                    setSettings((prev) =>
                        prev
                        ? {
                            ...prev,
                            [key]: e.target.value,
                            }
                        : prev
                    )
                    }
                    className="
                    h-14
                    w-14
                    cursor-pointer
                    border-none
                    p-0
                    "
                />

                <input
                    value={settings[key as keyof Settings] as string}
                    onChange={(e) =>
                    setSettings((prev) =>
                        prev
                        ? {
                            ...prev,
                            [key]: e.target.value,
                            }
                        : prev
                    )
                    }
                    className="
                    w-full
                    rounded-full
                    border
                    border-gray-200
                    bg-theme-surface
                    px-3
                    py-2
                    text-center
                    font-mono
                    text-xs
                    uppercase
                    text-theme
                    focus:border-theme
                    focus:outline-none
                    "
                />

                </div>
            </div>
            ))}

        </div>
        </div>

        {/* Fonts */}
        <div className="mt-6 rounded-theme border p-5">
                <h3 className="mt-10 mb-4 text-lg font-semibold">
                    Fonts
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

                    <div>
                    <label className="mb-2 block text-sm font-medium text-theme">
                        Heading Font
                    </label>

                    <select
                        value={settings.headingFont}
                        onChange={(e) =>
                        setSettings((prev) =>
                            prev
                            ? {
                                ...prev,
                                headingFont: e.target.value,
                                }
                            : prev
                        )
                        }
                        className="
        w-full
        rounded-theme
        border
        border-gray-200
        bg-theme-surface
        px-4
        py-3
        text-sm
        text-theme
        placeholder:text-theme-muted
        focus:border-theme
        focus:outline-none
        sm:text-base
        "
                    >
                        <option>Playfair Display</option>
                        <option>Poppins</option>
                        <option>Inter</option>
                        <option>Montserrat</option>
                        <option>Lora</option>
                    </select>
                    </div>

                    <div>
                    <label className="mb-2 block text-sm font-medium text-theme">
                        Body Font
                    </label>

                    <select
                        value={settings.bodyFont}
                        onChange={(e) =>
                        setSettings((prev) =>
                            prev
                            ? {
                                ...prev,
                                bodyFont: e.target.value,
                                }
                            : prev
                        )
                        }
                        className="
                            w-full
                            rounded-theme
                            border
                            border-gray-200
                            bg-theme-surface
                            px-4
                            py-3
                            text-sm
                            text-theme
                            placeholder:text-theme-muted
                            focus:border-theme
                            focus:outline-none
                            sm:text-base
                            "
                    >
                        <option>Poppins</option>
                        <option>Inter</option>
                        <option>Montserrat</option>
                        <option>DM Sans</option>
                    </select>
                    </div>

                </div>
        </div>

        {/* Radius */}
        <div className="mt-6 rounded-theme border p-5">
            <h3 className="mt-10 mb-4 text-lg font-semibold">
                Border Radius
            </h3>

            <div>

                <input
                type="range"
                min={0}
                max={40}
                value={settings.borderRadius}
                onChange={(e) =>
                    setSettings((prev) =>
                    prev
                        ? {
                            ...prev,
                            borderRadius: Number(e.target.value),
                        }
                        : prev
                    )
                }
                className="w-full"
                />

                <p className="mt-2 text-sm text-gray-500">
                {settings.borderRadius}px
                </p>

            </div>

        </div>

        </div>
      <div
        className="
        sticky
        bottom-4
        z-30
        flex
        justify-center
        sm:justify-end
        "
        >
        <button
          onClick={onSave}
          disabled={loading}
            className="
            sticky
            bottom-0
            z-30
            mt-8
            border-t
            bg-theme-surface/90
            p-4
            backdrop-blur
            flex
            justify-center
            sm:justify-end
            "    
            >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

    </div>
  );
}