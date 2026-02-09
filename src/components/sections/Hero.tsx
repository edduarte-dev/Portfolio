import Section from "../layout/Section";

type Props = {
  content: {
    title: string;
  };
};

export default function Hero({ content }: Props) {
  return (
    <Section id="hero" center>
      <h2 className="text-4xl max-w-xl leading-tight">
        {content.title}
      </h2>
    </Section>
  );
}
