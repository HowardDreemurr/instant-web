import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { StoryBand } from "../components/sections/StoryBand";

export function ConsortiumPage() {
  return (
    <>
      <StoryBand
        kicker="Consortium"
        title="A Multidisciplinary Global Partnership"
        imageUrl="/images/workpackages.svg"
      >
        <p className="m-0">
          INSTANT is conducted by an international multidisciplinary and cross-sector consortium, including three European academic partners, three European industry partners, and three third country (TC) universities. The consortium is led by a team of world-leading academia and highly skilled industrial experts from multiple disciplines, including Computer Science, Communication Engineering, and Environmental Sciences.
        </p>
      </StoryBand>

      <section className="py-16 bg-bg">
        <Container>
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70">Partners</div>
              <h2 className="font-serif text-[clamp(28px,2.8vw,44px)] tracking-[-0.01em] m-0 text-forest2 leading-[1.05] mt-2">
                European Academic Institutions
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-accent mb-2">UNEXE</div>
                <h3 className="font-bold text-lg mb-2">University of Exeter</h3>
                <p className="text-sm text-black/70 mb-3">United Kingdom</p>
                <p className="text-sm text-black/70 m-0">
                  Expertise in high-performance computing and networking
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={60}>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-accent mb-2">UOULU</div>
                <h3 className="font-bold text-lg mb-2">University of Oulu</h3>
                <p className="text-sm text-black/70 mb-3">Finland</p>
                <p className="text-sm text-black/70 m-0">
                  Expertise in optimization and controlling
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-accent mb-2">ITV</div>
                <h3 className="font-bold text-lg mb-2">ITV</h3>
                <p className="text-sm text-black/70 mb-3">Europe</p>
                <p className="text-sm text-black/70 m-0">
                  Expertise in wireless communications
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70">Partners</div>
              <h2 className="font-serif text-[clamp(28px,2.8vw,44px)] tracking-[-0.01em] m-0 text-forest2 leading-[1.05] mt-2">
                European Industry Partners
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="bg-bg p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-secondary mb-2">GEOS</div>
                <h3 className="font-bold text-lg mb-2">GEOS</h3>
                <p className="text-sm text-black/70 mb-3">Europe</p>
                <p className="text-sm text-black/70 m-0">
                  Real-world practical expertise in geophysical understanding
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={60}>
              <div className="bg-bg p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-secondary mb-2">TREE</div>
                <h3 className="font-bold text-lg mb-2">TREE</h3>
                <p className="text-sm text-black/70 mb-3">Europe</p>
                <p className="text-sm text-black/70 m-0">
                  Expertise in edge and cloud computing
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="bg-bg p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-secondary mb-2">RINICOM</div>
                <h3 className="font-bold text-lg mb-2">RINICOM</h3>
                <p className="text-sm text-black/70 mb-3">Europe</p>
                <p className="text-sm text-black/70 m-0">
                  Expertise in system integration
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70">Partners</div>
              <h2 className="font-serif text-[clamp(28px,2.8vw,44px)] tracking-[-0.01em] m-0 text-forest2 leading-[1.05] mt-2">
                Third Country Universities
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-forest mb-2">CUG</div>
                <h3 className="font-bold text-lg mb-2">China University of Geosciences</h3>
                <p className="text-sm text-black/70 mb-3">China</p>
                <p className="text-sm text-black/70 m-0">
                  Typical landslide monitoring cases essential to test and refine developed technologies
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={60}>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-forest mb-2">UPC</div>
                <h3 className="font-bold text-lg mb-2">UPC</h3>
                <p className="text-sm text-black/70 mb-3">Third Country</p>
                <p className="text-sm text-black/70 m-0">
                  Typical landslide monitoring cases essential to test and refine developed technologies
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="bg-white p-6 rounded-lg border border-black/10">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-forest mb-2">AHU</div>
                <h3 className="font-bold text-lg mb-2">AHU</h3>
                <p className="text-sm text-black/70 mb-3">Third Country</p>
                <p className="text-sm text-black/70 m-0">
                  Typical landslide monitoring cases essential to test and refine developed technologies
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StoryBand
        kicker="Impact"
        title="Contributing to Global Challenges"
        imageUrl="/images/objectives.svg"
      >
        <p className="m-0 mb-6">
          By developing innovative technologies for monitoring and predicting landslide disasters that have been increasingly amplified under climate changes and enabling effective knowledge sharing at a global scale, INSTANT will directly contribute to addressing critical challenges identified by:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white/60 p-5 rounded-lg border border-white/20">
            <h3 className="font-bold mb-3 text-white">European Initiatives</h3>
            <ul className="text-sm text-white/85 m-0 pl-5 space-y-2">
              <li>EIT Climate</li>
              <li>EIT Digital</li>
              <li>2030 Digital Compass</li>
              <li>EU Disaster Resilience Goals</li>
            </ul>
          </div>
          <div className="bg-white/60 p-5 rounded-lg border border-white/20">
            <h3 className="font-bold mb-3 text-white">United Nations SDGs</h3>
            <ul className="text-sm text-white/85 m-0 pl-5 space-y-2">
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
