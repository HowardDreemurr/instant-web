import { Link } from "react-router-dom";
import { StoryBand } from "../components/sections/StoryBand";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

const STATS = [
  { value: "30", label: "years" },
  { value: "150,000+", label: "researchers" },
  { value: "23", label: "Nobel Prize winners" },
  { value: "1996", label: "since" },
];

const PARTNER_ACTIONS = [
  "Highlight our project's contribution to research and innovation",
  "Showcase the researchers involved in the consortium",
  "Share success stories and testimonials from fellows and supervisors",
  "Demonstrate the broader societal and scientific impact of MSCA funding",
];

const MATERIALS = [
  {
    name: "Video message from Prof. Dr. Hélène Langevin-Joliot",
    note: "Marie Skłodowska-Curie's granddaughter — share at meetings and events",
  },
  { name: "Posters, roll-ups & stickers", note: "Print-ready files" },
  { name: "Anniversary logo", note: "For slides, websites, reports" },
  { name: "Web banner", note: "For project pages and intranets" },
  { name: "Full anniversary resources page", note: "Central hub of all assets and guidance" },
];

export function MSCAAnniversaryPage() {
  return (
    <>
      <StoryBand
        kicker="Briefing"
        title="MSCA 30th Anniversary"
        className="bg-blue-950"
      >
        <p>"Curiosity that changes the world"</p>
        <p className="mt-2 text-white/70 text-sm">9 March 2026 · Briefing for project partners</p>
      </StoryBand>

      <div className="bg-white py-12">
        <Container>
          <Reveal>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-forest mb-8 transition-colors"
            >
              <span aria-hidden="true">←</span>
              <span>Back to News</span>
            </Link>
          </Reveal>

          {/* Stats */}
          <Reveal>
            <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-black/10 bg-forest/5 px-4 py-5 text-center"
                >
                  <div className="text-2xl font-semibold text-forest">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-black/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* The Milestone */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                The Milestone
              </h2>
              <div className="prose prose-sm text-black/80 space-y-3">
                <p>
                  Since 1996, the Marie Skłodowska-Curie Actions (MSCA) have supported over
                  150,000 researchers at all career stages, including 23 Nobel Prize winners.
                  Named after the Polish-French scientist who discovered radioactivity and
                  won two Nobel Prizes, the programme has become a cornerstone of European
                  research — fostering international, inter-sectoral and interdisciplinary
                  mobility across the EU and beyond.
                </p>
                <p>
                  The 2026 anniversary is structured around the symbolic theme of{" "}
                  <em>Radium</em>, referencing Marie Skłodowska-Curie's discovery, and
                  showcases stories, milestones and highlights from 30 years of the
                  programme. INSTANT is part of this legacy.
                </p>
              </div>
            </section>
          </Reveal>

          {/* About the MSCA Programme */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                About the MSCA Programme
              </h2>
              <div className="prose prose-sm text-black/80 space-y-3">
                <p>
                  Part of Horizon Europe, the MSCA is the EU's reference programme for
                  doctoral education and postdoctoral training. Its main schemes are{" "}
                  <strong>Doctoral Networks (DN)</strong>,{" "}
                  <strong>Postdoctoral Fellowships (PF)</strong>,{" "}
                  <strong>Staff Exchanges (SE)</strong>, <strong>COFUND</strong>, and the
                  new <strong>Choose Europe for Science</strong> pilot.
                </p>
                <p>
                  In 2026 alone, MSCA committed €399M to ~1,600 postdoctoral projects,
                  €105.5M to COFUND programmes, and €97.7M to 81 Staff Exchanges projects.
                </p>
              </div>
            </section>
          </Reveal>

          {/* How Partners Can Contribute */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                How Partners Can Contribute
              </h2>
              <p className="text-sm text-black/70 mb-4">
                The European Commission invites MSCA partners to amplify the programme's
                impact within their institutions and networks.
              </p>
              <ul className="space-y-2">
                {PARTNER_ACTIONS.map((action) => (
                  <li key={action} className="flex items-start gap-3 text-sm text-black/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Communication Materials */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                Communication Materials Available
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MATERIALS.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-lg border border-black/10 p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="text-sm font-semibold text-forest">{m.name}</div>
                    <div className="mt-1 text-xs text-black/60">{m.note}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Suggested Social Media */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                Suggested Social Media Approach
              </h2>
              <div className="rounded-lg bg-forest/5 border border-forest/10 p-5 text-sm text-black/80 space-y-3">
                <p>
                  <strong>Tag:</strong> @MSCActions (LinkedIn) and @MSCActions (X / Twitter)
                </p>
                <p>
                  <strong>Hashtags:</strong> #MSCA #MarieSkłodowskaCurieActions #HorizonEU
                  #ResearchImpactEU
                </p>
                <p className="italic text-black/70">
                  "Proud to be part of 30 years of the MSCA — supporting 150,000+
                  researchers across Europe and beyond."
                </p>
              </div>
            </section>
          </Reveal>

          <p className="mt-10 text-xs text-black/50 border-t border-black/10 pt-4">
            Source: REA Marie Skłodowska-Curie Actions Team (9 March 2026); supplementary
            information from the official MSCA 30th anniversary website.
          </p>
        </Container>
      </div>
    </>
  );
}
