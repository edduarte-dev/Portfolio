import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  center = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        min-h-screen
        w-full
        px-8
        py-16
        ${center ? "flex items-center justify-center" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
