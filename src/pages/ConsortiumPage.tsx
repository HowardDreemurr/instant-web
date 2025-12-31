import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { StoryBand } from "../components/sections/StoryBand";

function getLogoUrl(logo: string) {
  if (logo.startsWith("/")) {
    return `${import.meta.env.BASE_URL}${logo.slice(1)}`;
  }
  return logo;
}

const PARTNERS = [
  {
    name: "University of Exeter",
    shortName: "UNEXE",
    country: "United Kingdom",
    url: "https://www.exeter.ac.uk",
    logo: "https://www.exeter.ac.uk/v8media/recruitmentsites/images/homepage/uoe-logo.svg",
    description: "Project Coordinator. Expertise in high-performance computing and networking.",
  },
  {
    name: "University of Oulu",
    shortName: "UOULU",
    country: "Finland",
    url: "https://www.oulu.fi/en",
    logo: "/images/logos/uoulu.svg",
    description: "Expertise in optimization and controlling.",
  },
  {
    name: "Instituto de Telecomunicações",
    shortName: "IT",
    country: "Portugal",
    url: "https://www.it.pt",
    logo: "https://www.it.pt/img/IT-30years-logo_01_website.png",
    description: "Expertise in wireless communications.",
  },
  {
    name: "Geostud",
    shortName: "GEOS",
    country: "Romania",
    url: "https://geostud.ro",
    logo: "https://geostud.ro/wp-content/uploads/2025/01/geostudalb-min.avif",
    description: "Real-world practical expertise in geophysical understanding.",
  },
  {
    name: "Tree Technology",
    shortName: "TREE",
    country: "Spain",
    url: "https://treetk.com/en/index.html",
    logo: "https://treetk.com/en/assets/images/tree-techonology-965x399.png",
    description: "Expertise in Big Data and AI solutions.",
  },
  {
    name: "Rinicom",
    shortName: "RINICOM",
    country: "United Kingdom",
    url: "https://rinicom.com",
    logo: "https://rinicom.com/wp-content/uploads/2025/01/comms_rinicom_153-151x50.webp",
    description: "Expertise in communications and detection systems.",
  },
  {
    name: "China University of Petroleum (East China)",
    shortName: "UPC",
    country: "China",
    url: "https://www.upc.edu.cn",
    logo: "https://www.upc.edu.cn/ximages/f_logo.png",
    description: "Landslide monitoring cases for technology validation.",
  },
  {
    name: "Anhui University",
    shortName: "AHU",
    country: "China",
    url: "https://www.ahu.edu.cn",
    logo: "https://www.ahu.edu.cn/_upload/tpl/07/cc/1996/template1996/images/logonew.png",
    description: "Landslide monitoring cases for technology validation.",
  },
  {
    name: "China University of Geosciences",
    shortName: "CUG",
    country: "China",
    url: "https://en.cug.edu.cn",
    logo: "https://en.cug.edu.cn/images/logo.png",
    description: "Landslide monitoring cases for technology validation.",
  },
];

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
            <div className="mb-10">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70">Partners</div>
              <h2 className="font-serif text-[clamp(28px,2.8vw,44px)] tracking-[-0.01em] m-0 text-forest2 leading-[1.05] mt-2">
                Our Partners
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, idx) => (
              <Reveal key={partner.shortName} delayMs={idx * 50}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-xl border border-black/10 hover:shadow-lg hover:-translate-y-1 transition-all no-underline group h-full"
                >
                  <div className="h-24 flex items-center justify-center mb-4 bg-slate-700 rounded-lg p-4">
                    <img
                      src={getLogoUrl(partner.logo)}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-2xl font-bold text-white">{partner.shortName}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1 text-black group-hover:text-forest2 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-black/50 mb-2">{partner.country}</p>
                  <p className="text-sm text-black/70 m-0">{partner.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
