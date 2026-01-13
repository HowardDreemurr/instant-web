import { Link } from "react-router-dom";
import { StoryBand } from "../components/sections/StoryBand";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";

type Talk = {
  timeUK: string;
  timeCET: string;
  timeCN: string;
  institution: string;
  institutionShort: string;
  country: string;
  title: string;
  presenter: string;
};

const TALKS: Talk[] = [
  {
    timeUK: "13:00–13:20",
    timeCET: "14:00–14:20",
    timeCN: "21:00–21:20",
    institution: "University of Oulu",
    institutionShort: "UOULU",
    country: "Finland",
    title: "Deformable Object Manipulation: An AI Perspective",
    presenter: "Prof. Shuai Li",
  },
  {
    timeUK: "13:25–13:45",
    timeCET: "14:25–14:45",
    timeCN: "21:25–21:45",
    institution: "China University of Petroleum",
    institutionShort: "UPC",
    country: "China",
    title: "Autonomous UAV Inspection System for Complex Environments",
    presenter: "Prof. Cai Luo",
  },
  {
    timeUK: "13:50–14:10",
    timeCET: "14:50–15:10",
    timeCN: "21:50–22:10",
    institution: "RINICOM Ltd",
    institutionShort: "RINICOM",
    country: "UK",
    title: "Secure Communications and Agentic AI for Predicting and Managing Natural Disasters",
    presenter: "Prof. Garik Markarian",
  },
  {
    timeUK: "14:15–14:35",
    timeCET: "15:15–15:35",
    timeCN: "22:15–22:35",
    institution: "Anhui University",
    institutionShort: "AHU",
    country: "China",
    title: "Advanced Multivariate Time Series Forecasting",
    presenter: "Prof. Yao Lu",
  },
  {
    timeUK: "14:40–15:00",
    timeCET: "15:40–16:00",
    timeCN: "22:40–23:00",
    institution: "Geostud s.r.l.",
    institutionShort: "GEOS",
    country: "Romania",
    title: "Intelligent and Sustainable IoT Networks for Accurate and Real-Time Large-Scale Landslide Monitoring and Prediction",
    presenter: "Prof. Anton Chirica",
  },
  {
    timeUK: "15:00–15:20",
    timeCET: "16:00–16:20",
    timeCN: "23:00–23:20",
    institution: "University of Exeter",
    institutionShort: "UoE",
    country: "UK",
    title: "Joint Optimisation on Network, Control and Energy Management on UxV IoT Network",
    presenter: "Dr. Zhuhui Li",
  },
  {
    timeUK: "15:20–15:40",
    timeCET: "16:20–16:40",
    timeCN: "23:20–23:40",
    institution: "Instituto de Telecomunicações",
    institutionShort: "ITV",
    country: "Portugal",
    title: "ITV in INSTANT",
    presenter: "Dr. Mohammed Al-Rawi",
  },
  {
    timeUK: "15:40–16:00",
    timeCET: "16:40–17:00",
    timeCN: "23:40–24:00",
    institution: "Tree Technology SA",
    institutionShort: "TREE",
    country: "Spain",
    title: "Big Data & Artificial Intelligence Unit",
    presenter: "Dr. Javier Gutiérrez Meana",
  },
];

export function Newsletter1Page() {
  return (
    <>
      <StoryBand
        kicker="Newsletter"
        title="INSTANT Workshop Newsletter"
        className="bg-blue-950"
      >
        <p>Workshop #1 — Programme Highlights (Talks)</p>
        <p className="mt-2 text-white/70 text-sm">12 January 2026</p>
      </StoryBand>

      <div className="bg-white py-12">
        <Container>
          {/* Summary Section */}
          <Reveal>
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-semibold text-forest mb-4">
                  Workshop Summary
                </h2>
                <div className="prose prose-sm text-black/80 space-y-3">
                  <p>
                    The INSTANT consortium successfully held its first annual workshop on 12 January 2026,
                    bringing together all project partners in a productive virtual meeting spanning multiple time zones.
                  </p>
                  <p>
                    During this inaugural session, team members from across Europe and China had the opportunity
                    to introduce themselves and present their respective research areas and expertise.
                    The workshop provided an invaluable platform for partners to gain deeper insights into
                    each other's work, fostering a strong foundation for collaboration.
                  </p>
                  <p>
                    Building on this successful first meeting, the consortium is now actively exploring
                    opportunities for further cooperation, identifying synergies between research groups,
                    and laying the groundwork for joint initiatives that will drive the project forward.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[400px] flex-shrink-0 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/logos/logo-ec--mute.svg`}
                  alt="INSTANT Workshop #1"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </Reveal>

          {/* Talks Section */}
          <Reveal>
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-forest mb-2">
                Programme Highlights | Talks
              </h2>
              <p className="text-sm text-black/60">
                Time zones shown for each talk: UK (GMT) | Central Europe (CET) | China (CST)
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TALKS.map((talk, idx) => (
              <Reveal key={idx} delayMs={80 * idx}>
                <div className="border border-black/10 rounded-lg p-5 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3 text-xs">
                    <span className="bg-forest/10 text-forest px-2 py-1 rounded">
                      UK {talk.timeUK}
                    </span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      CET {talk.timeCET}
                    </span>
                    <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded">
                      CN {talk.timeCN}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="text-sm font-medium text-forest">
                      {talk.institution} ({talk.institutionShort})
                    </span>
                    <span className="text-sm text-black/50">, {talk.country}</span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug mb-2 flex-grow">
                    {talk.title}
                  </h3>

                  <p className="text-sm text-black/70 mt-auto">
                    Presenter: <span className="font-medium">{talk.presenter}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
