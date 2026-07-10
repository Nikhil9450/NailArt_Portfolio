"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown, ChevronUp, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface Font {
  value: string;
  preview: string;
}

interface MobileFontPickerProps {
  label: string;
  value: string;
  fonts: Font[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default function MobileFontPicker({
  label,
  value,
  fonts,
  disabled,
  onChange,
}: MobileFontPickerProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredFonts = useMemo(() => {
    return fonts.filter((font) =>
      font.value.toLowerCase().includes(search.toLowerCase())
    );
  }, [fonts, search]);

  return (
    <div className="space-y-3">

      <label className="text-sm font-semibold text-theme">
        {label}
      </label>

      {/* Trigger */}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className="
          flex
          h-14
          w-full
          items-center
          justify-between
          rounded-theme
          border
          border-gray-200
          bg-theme-surface
          px-4
        "
      >
        <span
          style={{
            fontFamily: value,
          }}
          className="text-base"
        >
          {value}
        </span>

        {open ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>

      {/* List */}

      {open && (
        <div className="rounded-theme border bg-theme-surface shadow-lg">

          {/* Search */}

          <div className="sticky top-0 border-b bg-theme-surface p-3">

            <div className="relative">

              <Search className="absolute left-3 top-3 h-4 w-4 text-theme-muted" />

              <Input
                placeholder="Search fonts..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="pl-9"
              />

            </div>

          </div>

          {/* Fonts */}

          <div className="max-h-72 overflow-y-auto">

            {filteredFonts.map((font) => (
              <button
                key={font.value}
                type="button"
                onClick={() => {
                  onChange(font.value);
                  setOpen(false);
                  setSearch("");
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-left
                  transition
                  hover:bg-theme-secondary
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-theme-secondary
                      font-semibold
                    "
                    style={{
                      fontFamily: font.value,
                    }}
                  >
                    Aa
                  </div>

                  <span
                    style={{
                      fontFamily: font.value,
                    }}
                    className="font-medium"
                  >
                    {font.value}
                  </span>

                </div>

                <Check
                  className={cn(
                    "h-5 w-5",
                    value === font.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </button>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}