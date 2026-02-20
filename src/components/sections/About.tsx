import Section from "../layout/Section";
import ScrollDown from "../ui/ScrollDown";

type Props = {
  content: {
    title: string;
    text: string;
  };
};

export default function About({ content }: Props) {
  return (
    <Section id="about" className="relative min-h-screen">
      
      <div className="max-w-xl">
        <h3 className="text-3xl mb-4">{content.title}</h3>
        <p className="text-[rgb(var(--muted))]">
          {content.text}
        </p>
      </div>

      {/* Flecha centralizada no inferior */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollDown targetId="projects" />
      </div>

    </Section>
  );
}
