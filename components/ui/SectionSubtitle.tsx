interface SectionSubtitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionSubtitle({
  children,
  center = false,
}: SectionSubtitleProps) {
  return (
    <p
      className={`mt-5 max-w-2xl text-lg text-theme-muted ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}