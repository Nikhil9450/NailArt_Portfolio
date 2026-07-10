"use client";

import { useEffect, useState } from "react";

import FontCombobox from "./FontCombobox";
import MobileFontPicker from "./MobileFontPicker";

interface Font {
  value: string;
  preview: string;
}

interface ResponsiveFontPickerProps {
  label: string;
  value: string;
  fonts: Font[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default function ResponsiveFontPicker(
  props: ResponsiveFontPickerProps
) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  if (mobile) {
    return (
      <MobileFontPicker {...props} />
    );
  }

  return (
    <FontCombobox {...props} />
  );
}