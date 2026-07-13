import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      {/* Logo */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border-2
          border-theme
          bg-theme-secondary
          shadow-lg
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        <Image
          src="/logo/logo.png"
          alt="Blush & Bloom Nail Studio"
          width={34}
          height={34}
          priority
          className="object-contain"
        />
      </div>

      {/* Brand */}
      <div className="leading-tight">
        <h1
          className="
            text-lg
            font-bold
            tracking-wide
            text-theme
            sm:text-xl
          "
          style={{ fontFamily: "var(--theme-heading-font)" }}
        >
          Blush & Bloom
        </h1>

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-theme-primary
            sm:text-xs
          "
        >
          Luxury Nail Studio
        </p>
      </div>
    </Link>
  );
}