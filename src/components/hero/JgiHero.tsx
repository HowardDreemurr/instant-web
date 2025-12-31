import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Reveal } from "../ui/Reveal";

// ✅ Edit content directly here.
const SITE = {
  name: "INSTANT",
  tagline:
    "Intelligent and Sustainable IoT networks for Accurate and Real-Time Large-Scale Landslide Monitoring and Prediction.",
};

const HOME = {
  heroSubtitle:
    "INSTANT integrates sensing, 5G/6G networking, and knowledge‑guided AI/ML to monitor hazardous areas at scale and predict landslides in real time.",
  quickFacts: [
    { title: "Sustainable sensing", text: "Active RIS for SWIPT to power and connect dense sensors." },
    { title: "Ultra‑low latency", text: "Edge‑close networking for mission‑critical streams." },
    { title: "Trustworthy AI/ML", text: "Knowledge‑guided, explainable models for robust prediction." },
  ],
};

export function JgiHero() {
  const heroImage = `${import.meta.env.BASE_URL}images/spec-hero.png`;

  return (
    <header
      className="pt-28 pb-20 bg-cover bg-center"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(10,18,14,.88), rgba(10,18,14,.65)), url(${heroImage})`,
      }}
    >
      <Container>
        <div className="grid gap-4 items-end lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[720px]">
            <Reveal>
              <Badge>{SITE.name}</Badge>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="font-serif text-white text-[clamp(44px,5.2vw,78px)] tracking-[-0.02em] leading-[0.95] mt-3">
                Intelligent sensing.
                <br />
                Reliable networks.
                <br />
                Trustworthy prediction.
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-4 text-white/85 leading-[1.85] text-[16px] max-w-[70ch]">{HOME.heroSubtitle}</p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="flex gap-2 flex-wrap mt-5">
                <Link to="/our-work" className="btn btnPrimary">
                  Our Work
                </Link>
                <Link to="/our-impact" className="btn">
                  Our Impact
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={260}>
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur shadow-[0_28px_76px_rgba(0,0,0,.26)] p-5">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-white/85">Overview</div>
              <div className="mt-2 font-semibold text-white/90 leading-[1.75]">{SITE.tagline}</div>
              <div className="my-4 h-px bg-white/20" />
              <div className="flex flex-col gap-3">
                {HOME.quickFacts.map((q) => (
                  <div key={q.title}>
                    <div className="font-extrabold text-white tracking-[-0.01em]">{q.title}</div>
                    <div className="mt-1 text-white/90 text-[13px] leading-[1.65]">{q.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
