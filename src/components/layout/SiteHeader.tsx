import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container } from "../ui/Container";

const nav = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/our-work", label: "Our Work" },
  { to: "/our-impact", label: "Our Impact" },
  { to: "/consortium", label: "Consortium" },
];

function HamburgerIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-forest/10 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`block w-5 h-0.5 bg-forest2 rounded-full transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-forest2 rounded-full transition-all duration-300 mt-1 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-forest2 rounded-full transition-all duration-300 mt-1 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);


  return (
    <header className="sticky top-0 z-30 bg-[#f7f7f7] border-b border-black/10">
      <Container>
        <div className="flex items-center justify-between gap-3 py-4">
          <Link to="/" className="font-black tracking-[-0.03em] text-[22px] text-forest2 no-underline">
            INSTANT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2" aria-label="Primary">
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

          {/* Desktop Contact Button */}
          <div className="hidden md:flex gap-2 items-center">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 font-black text-sm bg-accent text-white shadow-soft hover:-translate-y-0.5 transition no-underline">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <HamburgerIcon isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#f7f7f7] border-t border-black/5 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {nav.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === "/"}
                className={({ isActive }) =>
                  [
                    "px-4 py-3 rounded-xl text-base font-extrabold no-underline transition-colors",
                    isActive ? "bg-forest/10 text-forest2" : "text-black/70 hover:bg-forest/5",
                  ].join(" ")
                }
              >
                {it.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 mx-4 inline-flex items-center justify-center rounded-full px-6 py-3 font-black text-base bg-accent text-white shadow-soft hover:-translate-y-0.5 transition no-underline"
            >
              Contact
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
