import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SECTION_COLORS } from "../../config/theme";

export function StoryBand({
  kicker,
  title,
  children,
  imageUrl,
  id,
  colorIndex = 0,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  imageUrl?: string;
  id?: string;
  colorIndex?: number;
}) {
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith("/")
      ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`
      : imageUrl
    : null;

  const bgColor = SECTION_COLORS[colorIndex % SECTION_COLORS.length];

  return (
    <section
      id={id}
      className="py-[48px] bg-cover bg-center"
      style={{
        backgroundImage: fullImageUrl
          ? `linear-gradient(180deg, rgba(10,18,14,.78), rgba(10,18,14,.38)), url(${fullImageUrl})`
          : undefined,
        backgroundColor: fullImageUrl ? undefined : bgColor,
      }}
    >
      <Container>
        <div className="max-w-[980px]">
          <Reveal>
            <div className="pill">{kicker}</div>
            <h2 className="font-serif text-white text-[clamp(30px,3.1vw,46px)] tracking-[-0.01em] leading-[1.06] mt-4">
              {title}
            </h2>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mt-4 text-white/90 leading-[1.95] text-[15px]">{children}</div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
