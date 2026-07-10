"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "@/types/settings";
import {
  headingFonts,
  bodyFonts,
} from "@/constants/fonts";
import FontCombobox from "./FontCombobox";
import ResponsiveFontPicker from "./ResponsiveFontPicker";
import { themePresets } from "@/constants/themePresets";

interface ThemePresetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  settings: Settings;
  setSettings: React.Dispatch<
    React.SetStateAction<Settings | null>
  >;

  preset: (typeof themePresets)[number] | null;

  editable: boolean;
}

export default function ThemePresetDialog({
  open,
  onOpenChange,
  settings,
  setSettings,
  preset,
  editable,
}: ThemePresetDialogProps) {
    const themeData = editable ? settings : preset;
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
<DialogContent
  className="
    flex
    h-[90vh]
    w-[95vw]
    max-w-[95vw]
    lg:max-w-5xl
    xl:max-w-6xl
    flex-col
    overflow-hidden
    rounded-theme
    p-0
  "
>

    <DialogHeader className="border-b px-6 py-4">
        <DialogTitle>
        {editable
            ? "Customize Theme"
            : `${preset?.name} Theme`}
        </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Colors */}
            <div className="mt-6 rounded-theme border p-5">
            <h3 className="mb-4 text-base font-semibold text-theme sm:text-lg">
                Theme Colors
            </h3>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">

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
                        value={
                        (themeData?.[
                            key as keyof typeof themeData
                        ] as string) ?? ""
                        }                        
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
                        disabled={!editable}
                        className="
                        h-14
                        w-14
                        cursor-pointer
                        border-gray-200
                        p-0
                        "
                    />

                    <input
                        value={
                        themeData?.[
                            key as keyof typeof themeData
                        ] as string
                        }
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
                        disabled={!editable}
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
<div className="mt-6 rounded-theme border p-6">
  <h3 className="mb-6 text-lg font-semibold text-theme">
    Fonts
  </h3>

  <div className="grid gap-8 lg:grid-cols-2">

    {/* Heading Fonts */}
<ResponsiveFontPicker
  label="Heading Font"
  value={themeData?.headingFont ?? ""}
  fonts={headingFonts}
  disabled={!editable}
  onChange={(value) =>
    setSettings((prev) =>
      prev
        ? {
            ...prev,
            headingFont: value,
          }
        : prev
    )
  }
/>

    {/* Body Fonts */}
<ResponsiveFontPicker
  label="Body Font"
  value={themeData?.bodyFont ?? ""}
  fonts={bodyFonts}
  disabled={!editable}
  onChange={(value) =>
    setSettings((prev) =>
      prev
        ? {
            ...prev,
            bodyFont: value,
          }
        : prev
    )
  }
/>

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
                value={themeData?.borderRadius ?? 24}
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
                disabled={!editable}

                className="w-full"
                />

                <p className="mt-2 text-sm text-gray-500">
                {settings.borderRadius}px
                </p>

            </div>

        </div>
        </div>
        {!editable && (
        <div
            className="
            rounded-theme
            border
            bg-theme-secondary
            p-4
            text-sm
            text-theme-muted
            "
        >
            This is a built-in theme preset.

            Select <strong>Custom</strong> to
            customize colors, fonts and styles.
        </div>
        )}

        <div
        className="
            flex
            shrink-0
            justify-end
            gap-3
            border-t
            bg-theme-surface
            px-6
            py-4
        "
        >
        <Button
        variant="outline"
        className="flex-1 sm:flex-none"
        onClick={() => onOpenChange(false)}
        >
        Close
        </Button>

        {editable && (
        <Button
            className="flex-1 bg-theme sm:flex-none"
        >
            Save Theme
        </Button>
        )}
        </div>
      </DialogContent>
    </Dialog>
  );
}