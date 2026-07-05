"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname.startsWith("/login");

  return (
    <>
      {!isAdmin && !isLogin && <Navbar />}

      {children}

      {!isAdmin && !isLogin && <Footer />}
    </>
  );
}