import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { StoryBand } from "../components/sections/StoryBand";

export function ContactPage() {
  return (
    <>
      <StoryBand kicker="Contact" title="Get in Touch" imageUrl="/images/hero.svg">
        <p className="m-0">
          For inquiries about the INSTANT project, collaboration opportunities, or general information, please reach out to us via email.
        </p>
      </StoryBand>

      <section className="py-16 bg-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="bg-white rounded-2xl border border-black/10 shadow-soft p-8">
                <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70 mb-2">
                  Project Email
                </div>
                <h2 className="font-serif text-forest2 text-[clamp(28px,3vw,42px)] tracking-[-0.01em] leading-[1.1] mb-4">
                  Contact Information
                </h2>

                <div className="bg-bg p-6 rounded-xl mb-6">
                  <div className="text-sm font-extrabold text-black/70 mb-2">Email Address</div>
                  <a
                    href="mailto:contact@instant-project.eu"
                    className="text-2xl font-bold text-forest hover:text-accent transition underline"
                  >
                    contact@instant-project.eu
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">About INSTANT</h3>
                    <p className="text-black/70 leading-relaxed">
                      INSTANT (Intelligent and Sustainable IoT networks for Accurate and Real-Time Large-Scale Landslide Monitoring and Prediction) is a research project funded by the European Union under the HORIZON-MSCA-SE-2024 programme.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Coordination</h3>
                    <p className="text-black/70 leading-relaxed">
                      The project is coordinated by a consortium of 9 partners including European academic institutions, industry partners, and third-country universities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Funding Programme</h3>
                    <p className="text-black/70 leading-relaxed">
                      Marie Skłodowska-Curie Actions - Staff Exchanges (HORIZON-MSCA-SE-2024)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
