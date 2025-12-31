import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { JgiHero } from "../components/hero/JgiHero";
import { StoryBand } from "../components/sections/StoryBand";
import { ImageTiles } from "../components/sections/ImageTiles";

export function HomePage() {
  return (
    <>
      <JgiHero />

      <section className="py-16 pb-7 bg-bg">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-2 mb-4">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70">Explore</div>
              <h2 className="font-serif text-[clamp(28px,2.8vw,44px)] tracking-[-0.01em] m-0 text-forest2 leading-[1.05]">
                Learn More
              </h2>
            </div>
          </Reveal>

          <ImageTiles
            tiles={[
              {
                title: "Our Work",
                subtitle: "The challenges we're addressing and our innovative approach",
                to: "/our-work",
                imageUrl: "/images/technology.svg",
              },
              {
                title: "Our Impact",
                subtitle: "Research objectives and work packages driving innovation",
                to: "/our-impact",
                imageUrl: "/images/objectives.svg",
              },
              {
                title: "Consortium",
                subtitle: "Our multidisciplinary global partnership",
                to: "/consortium",
                imageUrl: "/images/workpackages.svg",
              },
            ]}
          />
        </Container>
      </section>

      <StoryBand
        kicker="The problem"
        title="Landslides: A Growing Global Threat"
        imageUrl="/images/challenges.svg"
      >
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <div className="text-center">
            <div className="text-4xl font-black text-forest mb-2">4.8M</div>
            <div className="text-sm text-black/70">People affected globally each year</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-forest mb-2">4,000+</div>
            <div className="text-sm text-black/70">Deaths annually</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-forest mb-2">€4.7B</div>
            <div className="text-sm text-black/70">Economic losses in Europe per year</div>
          </div>
        </div>
        <p className="m-0">
          Landslides are the most widespread geological disasters frequently occurring in Europe and globally. Every year, landslides have caused thousands of human casualties, critical infrastructure damage and severe socio-economic impacts. The frequency and severity of landslides have shown an alarming trend over the last decades due to increasingly frequent rainfall, heatwaves and droughts that are linked to climate change, and anthropogenic disturbances due to growing population and deforestation.
        </p>
        <p className="m-0 mt-4 font-semibold">
          It is imperative and timely to develop innovative technologies to effectively monitor hazardous areas and accurately predict landslides in real-time.
        </p>
      </StoryBand>

      <StoryBand
        kicker="Our solution"
        title="An Integrated IoT, AI, and 5G/6G Approach"
        imageUrl="/images/technology.svg"
      >
        <p className="m-0 mb-6">
          INSTANT leverages recent breakthroughs in Internet-of-Things (IoT), 5G/6G communications, and Artificial Intelligence/Machine Learning (AI/ML) to create an intelligent network system that can:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-white/60 p-4 rounded-lg border border-black/10">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-bold text-sm mb-2">Comprehensive Sensing</h3>
            <p className="text-sm text-black/70 m-0">Acquire measurements from heterogeneous sensors fully covering large-scale hazardous areas</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg border border-black/10">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-sm mb-2">Real-Time Transmission</h3>
            <p className="text-sm text-black/70 m-0">Efficiently transmit large data streams in real-time with ultra-low latency</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg border border-black/10">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-bold text-sm mb-2">AI-Powered Prediction</h3>
            <p className="text-sm text-black/70 m-0">Reliably process complex measurements using high-performance AI/ML for accurate prediction</p>
          </div>
        </div>
      </StoryBand>

      <StoryBand
        kicker="Global impact"
        title="Contributing to Climate Action and Resilience"
        imageUrl="/images/objectives.svg"
      >
        <p className="m-0 mb-6">
          By developing innovative technologies for monitoring and predicting landslide disasters amplified by climate change, INSTANT directly contributes to:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white/60 p-5 rounded-lg border border-black/10">
            <h3 className="font-bold mb-2">European Initiatives</h3>
            <ul className="text-sm text-black/70 m-0 pl-5 space-y-1">
              <li>EIT Climate</li>
              <li>EIT Digital</li>
              <li>2030 Digital Compass</li>
              <li>EU Disaster Resilience Goals</li>
            </ul>
          </div>
          <div className="bg-white/60 p-5 rounded-lg border border-black/10">
            <h3 className="font-bold mb-2">UN Sustainable Development Goals</h3>
            <ul className="text-sm text-black/70 m-0 pl-5 space-y-1">
              <li>SDG 9: Industry, Innovation and Infrastructure</li>
              <li>SDG 11: Sustainable Cities and Communities</li>
              <li>SDG 13: Climate Action</li>
            </ul>
          </div>
        </div>
      </StoryBand>
    </>
  );
}
