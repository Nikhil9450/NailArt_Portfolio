interface Props {
  badge?: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <div
      className={`max-w-2xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
          {badge}
        </span>
      )}

      <h2 className="mt-6 font-serif text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}