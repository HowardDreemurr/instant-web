import { NavLink, Link } from "react-router-dom";
import { Container } from "../ui/Container";

const nav = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work" },
  { to: "/our-impact", label: "Our Impact" },
  { to: "/consortium", label: "Consortium" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur border-b border-black/10">
      <Container>
        <div className="flex items-center justify-between gap-3 py-4 flex-wrap">
          <Link to="/" className="font-black tracking-[-0.03em] text-[22px] text-forest2 no-underline">
            INSTANT
          </Link>

          <nav className="flex gap-2 flex-wrap" aria-label="Primary">
            {nav.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === "/"}
                className={({ isActive }) =>
                  [
                    "px-3 py-2 rounded-full text-sm font-extrabold no-underline transition",
                    isActive ? "bg-forest/10 text-forest2" : "text-black/70 hover:bg-forest/5",
                  ].join(" ")
                }
              >
                {it.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex gap-2 items-center">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 font-black text-sm bg-accent text-white shadow-soft hover:-translate-y-0.5 transition no-underline">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
