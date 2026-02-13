type SectionProps = {
  id?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
  center?: boolean;
};

export default function Section({ id, children, background, center }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {background && (
        <div className="absolute inset-0 -z-10">
          {background}
        </div>
      )}

      <div className={`relative z-10 container mx-auto px-6 ${center ? "text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}
