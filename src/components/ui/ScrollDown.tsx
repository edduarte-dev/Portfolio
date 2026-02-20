type Props = {
  targetId?: string;
};

export default function ScrollDown({ targetId = "about" }: Props) {
  const handleScroll = () => {
    const nextSection = document.getElementById(targetId);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <button
        onClick={handleScroll}
        className="animate-bounce text-[rgb(var(--text))] opacity-70 hover:opacity-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}