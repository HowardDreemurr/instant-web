import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function SiteFooter() {
  return (
    <footer className="py-16 bg-gradient-to-b from-bg to-white border-t border-black/10">
      <Container>
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <div className="font-black tracking-[-0.03em] text-forest2 mb-4">INSTANT</div>
            <p className="text-sm text-black/70 leading-relaxed">
              Intelligent and Sustainable IoT networks for Accurate and Real-Time Large-Scale Landslide Monitoring and Prediction
            </p>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70 mb-3">Project</div>
            <div className="flex flex-col gap-2">
              <Link to="/our-work" className="text-sm text-black/70 hover:text-forest transition">Our Work</Link>
              <Link to="/our-impact" className="text-sm text-black/70 hover:text-forest transition">Our Impact</Link>
              <Link to="/consortium" className="text-sm text-black/70 hover:text-forest transition">Consortium</Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70 mb-3">Funding</div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-black/70">HORIZON-MSCA-SE-2024</div>
              <div className="text-sm text-black/70">Marie Skłodowska-Curie Actions</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[.14em] uppercase text-black/70 mb-3">Connect</div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 font-extrabold text-sm bg-forest text-white hover:-translate-y-0.5 transition no-underline">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex items-center justify-between flex-wrap gap-4">
          <div className="text-sm text-black/60">
            © {new Date().getFullYear()} INSTANT Project. All rights reserved.
          </div>
          <div className="text-sm text-black/60">
            Funded by the European Union
          </div>
        </div>
      </Container>
    </footer>
  );
}
