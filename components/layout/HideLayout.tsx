"use client";

import { usePathname } from "next/navigation";

export default function HideLayout({
  children,
}: {
  children: (isHidden: boolean) => React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login");

  return <>{children(hideLayout)}</>;
}