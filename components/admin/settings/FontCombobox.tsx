"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Font {
  value: string;
  preview: string;
}

interface FontComboboxProps {
  value: string;

  onChange: (value: string) => void;

  fonts: Font[];

  disabled?: boolean;

  label: string;
}

export default function FontCombobox({
  value,
  onChange,
  fonts,
  disabled,
  label,
}: FontComboboxProps) {
  const [open, setOpen] =
    React.useState(false);

  return (
    <div className="space-y-3">

      <label className="text-sm font-semibold text-theme">
        {label}
      </label>

      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>

          <Button
            variant="outline"
            disabled={disabled}
            role="combobox"
            className="
              h-14
              w-full
              justify-between
              rounded-theme
              bg-theme-surface
              px-4
            "
          >
            <span
              style={{
                fontFamily: value,
              }}
              className="truncate text-base"
            >
              {value}
            </span>

            <ChevronsUpDown
              className="ml-2 h-4 w-4 opacity-60"
            />
          </Button>

        </PopoverTrigger>

        <PopoverContent
            align="start"
            className="
                w-[380px]
                max-w-[95vw]
                rounded-theme
                p-0
            "
            >
          <Command>
            <CommandInput
            placeholder="Search fonts..."
            className="sticky top-0 z-10 bg-theme-surface"
            />

            <CommandList className="max-h-[320px] overflow-y-auto">

              <CommandEmpty>
                No font found.
              </CommandEmpty>

              <CommandGroup>

                {fonts.map((font) => (

                <CommandItem
                key={font.value}
                value={font.value}
                onSelect={(value) => {
                    onChange(value);
                    setOpen(false);
                }}
                className="cursor-pointer py-3"
                >
                <div className="flex w-full items-center justify-between">

                    <div className="flex items-center gap-3">

                    <div
                        className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-theme-secondary
                        text-sm
                        font-semibold
                        "
                        style={{
                        fontFamily: font.value,
                        }}
                    >
                        Aa
                    </div>

                    <div>

                        <p
                        className="font-medium"
                        style={{
                            fontFamily: font.value,
                        }}
                        >
                        {font.value}
                        </p>

                        {/* Hide preview on mobile */}
                        <p className="hidden text-xs text-theme-muted sm:block">
                        {font.preview}
                        </p>

                    </div>

                    </div>

                    <Check
                    className={cn(
                        "h-4 w-4",
                        value === font.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                    />

                </div>
                </CommandItem>

                ))}

              </CommandGroup>

            </CommandList>

          </Command>

        </PopoverContent>

      </Popover>

    </div>
  );
}