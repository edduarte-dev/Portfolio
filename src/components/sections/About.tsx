import Section from "../layout/Section";

type Props = {
  content: {
    title: string;
    text: string;
  };
};

export default function About({ content }: Props) {
  return (
    <Section id="about">
      <div className="max-w-xl">
        <h3 className="text-3xl mb-4">{content.title}</h3>
        <p className="text-[rgb(var(--muted))]">{content.text}</p>
      </div>
    </Section>
  );
}
