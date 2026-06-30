interface SectionTitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionTitle({
  children,
  center = false,
}: SectionTitleProps) {
  return (
    <h2
      className={`font-serif text-4xl font-bold leading-tight md:text-5xl ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}