import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
        N
      </div>

      <div>
        <h1 className="font-serif text-xl font-bold">
          Nail Studio
        </h1>

        <p className="text-xs text-gray-500">
          Luxury Nail Art
        </p>
      </div>
    </Link>
  );
}