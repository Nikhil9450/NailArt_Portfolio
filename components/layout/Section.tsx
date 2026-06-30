import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}