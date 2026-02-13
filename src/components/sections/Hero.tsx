import Section from "../layout/Section";
import LiquidEther from "../background/LiquidEther";
import { useTheme } from "../../hooks/useTheme";

type Props = {
  content: {
    title: string;
  };
};

export default function Hero({ content }: Props) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <Section
      id="hero"
      center
      background={
        <LiquidEther
          colors={
            isLight
              ? ["#3B82F6", "#60A5FA", "#93C5FD"]
              : ["#5227FF", "#FF9FFC", "#B19EEF"]
          }
          mouseForce={20}
          cursorSize={75}
          resolution={0.5}
        />
      }
    >
      <h2 className="text-5xl font-bold max-w-2xl leading-tight">
        {content.title}
      </h2>
    </Section>
  );
}
