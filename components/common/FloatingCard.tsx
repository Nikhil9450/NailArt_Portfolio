import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingCard({
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-theme-surface/80 p-4 shadow-xl backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}