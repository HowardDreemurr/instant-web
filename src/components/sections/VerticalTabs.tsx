import { useState } from "react";
import { Reveal } from "../ui/Reveal";

export function VerticalTabs({ tabs, light = false }: { tabs: { title: string; body: string }[]; light?: boolean }) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];

  return (
    <div className="mt-5 grid gap-4 lg:grid-cols-[320px_1fr] items-start">
      <Reveal>
        <div className="flex flex-col gap-2" role="tablist" aria-label="tabs">
          {tabs.map((t, i) => (
            <button
              key={t.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={[
                "text-left rounded-xl px-3 py-3 font-extrabold transition border",
                light
                  ? i === active
                    ? "bg-forest/15 border-forest/30 text-forest2"
                    : "bg-black/5 border-black/10 text-black/80 hover:bg-black/10 hover:-translate-y-0.5"
                  : i === active
                    ? "bg-white/25 border-white/35 text-white"
                    : "bg-white/12 border-white/25 text-white hover:bg-white/18 hover:-translate-y-0.5",
              ].join(" ")}
            >
              {t.title}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <div className={`border-l-2 pl-4 ${light ? "border-forest/25" : "border-white/25"}`} role="tabpanel">
          <p className={`m-0 leading-[1.9] text-[14px] whitespace-pre-wrap ${light ? "text-black/80" : "text-white/92"}`}>{current?.body ?? ""}</p>
        </div>
      </Reveal>
    </div>
  );
}
