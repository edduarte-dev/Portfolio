import Section from "../layout/Section";

type Props = {
  content: {
    title: string;
  };
};

export default function Hero({ content }: Props) {
  const handleScroll = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="hero">
      <div className="min-h-screen flex flex-col items-center text-center">
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-4xl max-w-xl leading-tight">{content.title}</h2>
        </div>

        <button
          onClick={handleScroll}
          className="mb-32 animate-bounce opacity-70 hover:opacity-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[rgb(var(--text))]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </Section>
  );
}
