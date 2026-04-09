import Section from "../layout/Section";
import TextType from "../ui/TextType";

type Props = {
  content: {
    title: string[];
  };
};

export default function Hero({ content }: Props) {
  const handleScroll = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="hero">
      <div className="h-screen flex flex-col">
        
        {/* Texto */}
        <div className="flex-1 flex items-center justify-start">
          <div className="max-w-3xl">
            <TextType
              key={content.title.join()}
              as="h2"
              text={content.title}
              typingSpeed={90}
              deletingSpeed={60}
              pauseDuration={2500}
              showCursor
              cursorCharacter="_"
              loop
              className="
                min-h-[160px]
                text-4xl
                md:text-6xl
                leading-tight
                font-bold
                text-left
                text-[rgb(var(--text))]
              "
            />
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-center mb-32">
          <button
            onClick={handleScroll}
            className="animate-bounce opacity-70 hover:opacity-100 transition"
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

      </div>
    </Section>
  );
}