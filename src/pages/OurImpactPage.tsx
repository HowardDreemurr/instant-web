import { StoryBand } from "../components/sections/StoryBand";
import { VerticalTabs } from "../components/sections/VerticalTabs";
import { CardGrid } from "../components/sections/CardGrid";

// ✅ Edit content directly here.
const INTRO =
  "INSTANT delivers measurable research objectives and a structured programme to validate an integrated system.";

const INNOVATIONS: string[] = [
  "An active Reconfigurable Intelligent Surface (RIS) structure optimized for simultaneous and efficient wireless power and information transfer",
  "An intelligent networking architecture for ultra-low latency communication of mission-critical data",
  "Knowledge-guided explainable AI/ML approaches for accurate and reliable landslide detection",
];

const RESEARCH_OBJECTIVES: { title: string; body: string }[] = [
  {
    title: "RO1: Active RIS for SWIPT",
    body: "Develop an active Reconfigurable Intelligent Surface (RIS) that can simultaneously transmit wireless power and data to remote sensors. This solves the critical challenge of keeping sensors powered in dangerous, hard-to-access landslide areas without manual battery replacement. Success is measured by power transfer efficiency and data transmission speed.",
  },
  {
    title: "RO2: Intelligent Networking",
    body: "Design an intelligent IoT network architecture that ensures real-time transmission of sensor data even in areas with poor wireless coverage. Using AI-driven resource allocation, the network prioritizes mission-critical measurements to achieve ultra-low latency. Success is measured by latency (target: milliseconds), data rate, and network reliability.",
  },
  {
    title: "RO3: Explainable AI/ML",
    body: "Create AI/ML models that incorporate geophysical knowledge to accurately predict landslides from noisy sensor data. Unlike black-box AI, our models explain their reasoning so experts can verify predictions before issuing warnings. Success is measured by prediction accuracy, uncertainty quantification, and interpretability of results.",
  },
  {
    title: "RO4: System Integration",
    body: "Integrate all developed technologies into a complete monitoring system and validate it through rigorous testing. The system will be evaluated via simulations and field trials at actual landslide-prone sites in Europe and Asia. Success is measured by end-to-end accuracy, efficiency, and reliability in real-world conditions.",
  },
];

const MEASURES: { title: string; text: string }[] = [
  { title: "Power transfer efficiency", text: "Quantify sustainable SWIPT performance for multi‑sensor deployments." },
  { title: "Latency, data rate, outage", text: "Measure ultra‑reliable low‑latency communications for mission‑critical data." },
  { title: "Accuracy & uncertainty", text: "Evaluate prediction quality and uncertainty in knowledge‑guided AI/ML." },
  { title: "System validation", text: "Functional tests, simulation, and site validation for robustness and efficiency." },
];

export function OurImpactPage() {
  return (
    <>
      <StoryBand
        kicker="Our Impact"
        title="Research objectives and validation outcomes"
        imageUrl="/images/objectives.svg"
      >
        <p className="m-0">{INTRO}</p>
      </StoryBand>

      <StoryBand kicker="Innovations" title="Transformative outputs we target" colorIndex={0}>
        <div className="mt-4 flex flex-col gap-3">
          {INNOVATIONS.map((x) => (
            <div key={x} className="flex gap-3 items-start border border-white/20 bg-white/10 rounded-2xl p-4">
              <div className="w-2.5 h-2.5 rounded-full bg-white/80 mt-2" />
              <div className="text-white/90 leading-[1.8] text-[14px]">{x}</div>
            </div>
          ))}
        </div>
      </StoryBand>

      <StoryBand kicker="Research objectives" title="Four Goals Driving Our Research" colorIndex={1}>
        <VerticalTabs
          tabs={RESEARCH_OBJECTIVES.map((ro) => ({
            title: ro.title,
            body: ro.body,
          }))}
        />
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/20">
          <img
            src={`${import.meta.env.BASE_URL}images/spec-img.png`}
            alt="INSTANT Research Objectives Overview"
            className="w-full h-auto"
          />
        </div>
      </StoryBand>

      <StoryBand kicker="How we measure" title="Key metrics & validation" colorIndex={0}>
        <CardGrid items={MEASURES} />
      </StoryBand>

      <StoryBand
        kicker="Global Impact"
        title="Contributing to Global Challenges"
        colorIndex={1}
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
