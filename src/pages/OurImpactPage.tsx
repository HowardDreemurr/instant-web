import { StoryBand } from "../components/sections/StoryBand";
import { VerticalTabs } from "../components/sections/VerticalTabs";
import { CardGrid } from "../components/sections/CardGrid";
import { Reveal } from "../components/ui/Reveal";

// ✅ Edit content directly here.
const INTRO =
  "INSTANT delivers measurable research objectives and a structured programme to validate an integrated system.";

const INNOVATIONS: string[] = [
  "An active Reconfigurable Intelligent Surface (RIS) structure optimized for simultaneous and efficient wireless power and information transfer",
  "An intelligent networking architecture for ultra-low latency communication of mission-critical data",
  "Knowledge-guided explainable AI/ML approaches for accurate and reliable landslide detection",
];

const RESEARCH_OBJECTIVES: string[] = [
  "To develop an active Reconfigurable Intelligent Surface (RIS) optimised for simultaneous wireless information and power transfer (SWIPT) (to address Challenge 1). By optimising the RIS elements’ phase and amplifying controllers of the active RIS, power and information can be simultaneously and efficiently transmitted to maintain sustainable sensing and communication for multiple sensors. The achievement of RO1 will be thoroughly measured using performance metrics including power transfer efficiency, and information spectral efficiency.",
  "To design an intelligent networking architecture to provide real-time communication capabilities for mission-critical measurements from a large quantity of heterogeneous sensors (to address Challenge 2). We will design integrated networking and computing technologies with AI/ML-driven dynamic resource allocation algorithms to achieve ultra-reliable and low-latency transmission of mission-critical sensor data. The achievement of RO2 will be quantified by the communication quality metrics including latency, data rate and network outage.",
  "To develop knowledge-guided and explainable AI/ML approaches for accurate and reliable landslide monitoring and prediction (to address Challenge 3). We will apply landslide knowledge such as geophysical laws to guide the design of AI/ML models through model regularisation and pre-processing of training data. We will develop explainable AI/ML approaches to understand the model’s decision chains for refinement and engagement. The achievement of RO3 will be measured in terms of the accuracy and uncertainty of the AI/ML models.",
  "To integrate the developed technologies into an innovative system for functional unit tests and technology validation. The system will be evaluated through simulation experiments and validation at the consortium project sites in Europe and Asia to test and validate the robustness of the developed technologies. The system will then be demonstrated to promote industrial opportunities and further innovations. The achievement of RO4 will be assessed by the metrics including the accuracy and efficiency for landslide monitoring and prediction."
];

const WORK_PACKAGES: { wp: string; title: string; aim: string; novelty: string }[] = [
  {
    wp: "WP2",
    title: "Requirement Analysis and System Architecture Design",
    aim: "Conduct comprehensive analysis of typical landslide scenarios and design an integrated architecture to sustainably acquire, transmit and analyze real-time sensor data for accurate landslide prediction.",
    novelty: "1) Comprehensively investigate major types of landslides using novel sensor measurements\n2) Design an intelligent computing and networking architecture to deliver landslide prediction",
  },
  {
    wp: "WP3",
    title: "Optimized RIS for Simultaneous Wireless Power and Information Transfer",
    aim: "Optimize RIS designs for sustainable IoT sensor energy supply and robust wireless communication across large-scale landslide-prone regions (to achieve RO1).",
    novelty: "1) Optimization methodology for active RIS to achieve ideal SWIPT\n2) Efficient and real-time CSI acquisition technology\n3) Innovative RIS-SWIPT testbed for comprehensive evaluation of QoS",
  },
  {
    wp: "WP4",
    title: "Intelligent and Ultra-Low Latency IoT Networking Technologies",
    aim: "Deliver novel designs of an intelligent and ultra-low latency IoT network to securely transmit real-time measurements acquired by large-scale heterogeneous sensors covering extensive landslide areas (to achieve RO2).",
    novelty: "1) Innovative and intelligent IoT network architecture\n2) Integrated computing and networking framework\n3) Lightweight and interpretable AI-based IoT abnormality mitigation technologies",
  },
  {
    wp: "WP5",
    title: "Knowledge-guided and Explainable AI/ML Approach",
    aim: "Create reliable, knowledge-guided, and explainable AI/ML models to accurately predict landslides by integrating real-time sensor measurements, remote sensing data, and environmental information (to achieve RO3).",
    novelty: "1) High-performance knowledge-guided transformer model\n2) Adversarial and transfer learning method to enhance robustness\n3) Integration of Grad-CAM, SHAP and causal reasoning to understand decision chains",
  },
  {
    wp: "WP6",
    title: "System Integration, Experiments, Demonstration and Evaluation",
    aim: "Integrate individual R&I outcomes into an experiment system and perform comprehensive simulated and real-world experiments for performance evaluation, refinement, and demonstration (to achieve RO4).",
    novelty: "1) Test platform for testing the integrated system\n2) Comprehensive performance and reliability tests of the novel prediction system\n3) Real-world demonstrations to catalyze innovations in broader environmental monitoring",
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
        title="Research objectives, work packages, and validation outcomes"
        imageUrl="/images/objectives.svg"
      >
        <p className="m-0">{INTRO}</p>
      </StoryBand>

      <StoryBand kicker="Innovations" title="Transformative outputs we target" imageUrl="/images/hero.svg">
        <div className="mt-4 flex flex-col gap-3">
          {INNOVATIONS.map((x) => (
            <div key={x} className="flex gap-3 items-start border border-white/20 bg-white/10 rounded-2xl p-4">
              <div className="w-2.5 h-2.5 rounded-full bg-white/80 mt-2" />
              <div className="text-white/90 leading-[1.8] text-[14px]">{x}</div>
            </div>
          ))}
        </div>
      </StoryBand>

      <StoryBand kicker="Research objectives" title="RO1–RO4" imageUrl="/images/challenges.svg">
        <VerticalTabs
          tabs={[
            {
              title: "RO1: Active RIS for SWIPT",
              body: RESEARCH_OBJECTIVES[0] ?? "",
            },
            {
              title: "RO2: Intelligent Networking",
              body: RESEARCH_OBJECTIVES[1] ?? "",
            },
            {
              title: "RO3: Explainable AI/ML",
              body: RESEARCH_OBJECTIVES[2] ?? "",
            },
            {
              title: "RO4: System Integration",
              body: RESEARCH_OBJECTIVES[3] ?? "",
            },
          ]}
        />
      </StoryBand>

      <StoryBand kicker="Work packages" title="WP2–WP6 programme structure" imageUrl="/images/workpackages.svg">
        <div className="mt-5 grid grid-cols-12 gap-3">
          {WORK_PACKAGES.map((wp, idx) => (
            <Reveal key={wp.wp} delayMs={idx * 60} className="col-span-12 md:col-span-6">
              <div className="border border-white/20 bg-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/15 bg-white/5">
                  <div className="inline-flex px-3 py-1.5 rounded-full border border-white/25 bg-white/10 font-extrabold text-xs tracking-[.14em] uppercase text-white/90">
                    {wp.wp}
                  </div>
                  <div className="mt-3 font-extrabold text-white/95 tracking-[-0.01em]">{wp.title}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-extrabold tracking-[.14em] uppercase text-white/90">Aim</div>
                  <div className="mt-2 text-white/80 text-[13px] leading-[1.75] whitespace-pre-wrap">{wp.aim}</div>
                  <div className="mt-4 text-xs font-extrabold tracking-[.14em] uppercase text-white/90">Novelty</div>
                  <div className="mt-2 text-white/80 text-[13px] leading-[1.75] whitespace-pre-wrap">{wp.novelty}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </StoryBand>

      <StoryBand kicker="How we measure" title="Key metrics & validation" imageUrl="/images/technology.svg">
        <CardGrid items={MEASURES} />
      </StoryBand>
    </>
  );
}
