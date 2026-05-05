import { Link } from "react-router-dom";
import { StoryBand } from "../components/sections/StoryBand";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

const STATS = [
  { value: "5", label: "years" },
  { value: "1,200+", label: "articles" },
  { value: "6,300+", label: "authors" },
  { value: "3,000+", label: "institutions" },
];

const CHANGES = [
  {
    title: "CERN takes over operations",
    body: "CERN becomes the operating and hosting organisation, providing the technical infrastructure (alongside its experience running Zenodo, Invenio, and SCOAP³).",
  },
  {
    title: "16 national funders join",
    body: "Funders from 11 European countries (Austria, France, Germany, Italy, the Netherlands, Norway, Portugal, Slovenia, Spain, Sweden, Switzerland) join the governance, alongside continued European Commission involvement.",
  },
  {
    title: "Expanded eligibility",
    body: "In addition to EU-funded researchers, researchers affiliated with institutions in participating countries will also be able to publish for free.",
  },
  {
    title: "New platform URL: ore.eu",
    body: "The current platform at open-research-europe.ec.europa.eu remains operational until autumn 2026.",
  },
];

const CONSORTIUM_IMPLICATIONS = [
  {
    title: "Continued free publishing",
    body: "As Horizon Europe / MSCA beneficiaries, our team can publish on ORE at no cost — both now and after the autumn 2026 transition.",
  },
  {
    title: "Open peer review = visible scrutiny",
    body: "ORE's transparent review model is well suited to research outputs that benefit from open dialogue (methods papers, data papers, replication studies, software tools).",
  },
  {
    title: "Strategic alignment",
    body: "Publishing on ORE supports our Horizon Europe open science obligations and amplifies the visibility of our project deliverables.",
  },
];

export function OREBriefingPage() {
  return (
    <>
      <StoryBand
        kicker="Briefing"
        title="Open Research Europe: A New Era Ahead"
        className="bg-blue-950"
      >
        <p>5th Anniversary &amp; New Phase</p>
        <p className="mt-2 text-white/70 text-sm">26 March 2026 · Briefing for project partners</p>
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

          {/* What is ORE */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                What is ORE?
              </h2>
              <div className="prose prose-sm text-black/80 space-y-3">
                <p>
                  <strong>Open Research Europe (ORE)</strong> is the European Commission's
                  open access publishing platform for research funded by EU programmes.
                  Launched in 2021, it now marks its 5th anniversary. It is offered free of
                  charge to authors, institutions, and readers; Horizon Europe beneficiaries
                  (including MSCA) can publish their peer-reviewed work on ORE at no cost.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Publishing Model */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                The Publishing Model
              </h2>
              <div className="prose prose-sm text-black/80 space-y-3">
                <p>
                  ORE follows a <strong>Publish–Review–Curate</strong> model: articles are
                  made openly available immediately after initial integrity and policy
                  checks, then undergo rigorous, open post-publication peer review.
                  Reviewer reports and revisions are visible to readers, ensuring
                  transparency.
                </p>
                <p>
                  The platform covers all major disciplines from natural sciences and
                  engineering to medicine, social sciences, humanities, and the arts.
                  Articles passing peer review are indexed in{" "}
                  <strong>Scopus, PubMed, Inspec, and Google Scholar</strong>.
                </p>
              </div>
            </section>
          </Reveal>

          {/* What's Changing in Autumn 2026 */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                What's Changing in Autumn 2026
              </h2>
              <p className="text-sm text-black/70 mb-4">
                ORE is entering a new phase as a collectively supported publishing service,
                backed by a <strong>€17M budget for 2026–2031</strong> (€10M co-funded by
                the European Commission).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CHANGES.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-lg border border-black/10 p-5 hover:shadow-sm transition-shadow"
                  >
                    <div className="text-sm font-semibold text-forest mb-2">{c.title}</div>
                    <p className="text-sm text-black/70">{c.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* What This Means for Our Consortium */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                What This Means for INSTANT
              </h2>
              <ul className="space-y-3">
                {CONSORTIUM_IMPLICATIONS.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg bg-forest/5 border border-forest/10 p-4"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                    <div>
                      <div className="text-sm font-semibold text-forest">{item.title}</div>
                      <p className="mt-1 text-sm text-black/70">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Key Resources */}
          <Reveal>
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-3">
                Key Resources
              </h2>
              <ul className="space-y-2 text-sm text-black/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                  <span>
                    <strong>Current ORE platform</strong> — submit, browse, and review
                    articles at <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">open-research-europe.ec.europa.eu</code>{" "}
                    (operational until autumn 2026)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                  <span>
                    <strong>Future ORE platform</strong> (CERN-hosted) at{" "}
                    <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">ore.eu</code>{" "}
                    — information on the new phase and expanded eligibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                  <span>
                    <strong>"A new era for Open Research Europe"</strong> — DG R&amp;I
                    announcement (full update from Marc Lemaître and the Commission)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest" />
                  <span>
                    <strong>CERN announcement</strong> — technical and operational details
                    of the new phase
                  </span>
                </li>
              </ul>
            </section>
          </Reveal>

          <p className="mt-10 text-xs text-black/50 border-t border-black/10 pt-4">
            Source: Horizon Europe grants communication team; supplementary information
            from the DG R&amp;I announcement (26 March 2026) and CERN press release.
          </p>
        </Container>
      </div>
    </>
  );
}
