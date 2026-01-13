import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SECTION_COLORS, SECTION_IS_LIGHT } from "../../config/theme";

export function StoryBand({
  kicker,
  title,
  children,
  imageUrl,
  id,
  colorIndex = 0,
  className,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  imageUrl?: string;
  id?: string;
  colorIndex?: number;
  className?: string;
}) {
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith("/")
      ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`
      : imageUrl
    : null;

  const hasBgClass = className?.includes("bg-");
  const bgColor = SECTION_COLORS[colorIndex % SECTION_COLORS.length];
  const isLightBg = !fullImageUrl && !hasBgClass && SECTION_IS_LIGHT[colorIndex % SECTION_IS_LIGHT.length];

  return (
    <section
      id={id}
      className={"py-[48px] bg-cover bg-center " + (className ?? "")}
      style={{
        backgroundImage: fullImageUrl
          ? `linear-gradient(180deg, rgba(10,18,14,.78), rgba(10,18,14,.38)), url(${fullImageUrl})`
          : undefined,
        backgroundColor: fullImageUrl || hasBgClass ? undefined : bgColor,
      }}
    >
      <Container>
        <div className="max-w-[980px]">
          <Reveal>
            <div className={isLightBg ? "pill-dark" : "pill"}>{kicker}</div>
            <h2 className={`font-serif text-[clamp(30px,3.1vw,46px)] tracking-[-0.01em] leading-[1.06] mt-4 ${isLightBg ? "text-forest2" : "text-white"}`}>
              {title}
            </h2>
          </Reveal>

          <Reveal delayMs={120}>
            <div className={`mt-4 leading-[1.95] text-[15px] ${isLightBg ? "text-black/80" : "text-white/90"}`}>{children}</div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
