import Section from "../layout/Section";

type Props = {
  content: {
    title: string;
    subtitle: string;
  };
};

export default function Projects({ content }: Props) {
  return (
    <Section id="projects">
      <h3 className="text-3xl mb-2">{content.title}</h3>
      <p className="text-[rgb(var(--muted))]">{content.subtitle}</p>
    </Section>
  );
}
