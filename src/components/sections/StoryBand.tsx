import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function StoryBand({
  kicker,
  title,
  children,
  imageUrl,
  id,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  imageUrl: string;
  id?: string;
}) {
  const fullImageUrl = imageUrl.startsWith("/")
    ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}`
    : imageUrl;

  return (
    <section
      id={id}
      className="py-[88px] bg-cover bg-center"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(10,18,14,.78), rgba(10,18,14,.38)), url(${fullImageUrl})`,
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
