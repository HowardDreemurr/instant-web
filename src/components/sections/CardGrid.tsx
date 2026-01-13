import { Reveal } from "../ui/Reveal";

export function CardGrid({ items, light = false }: { items: { title: string; text: string }[]; light?: boolean }) {
  return (
    <div className="mt-5 grid grid-cols-12 gap-3">
      {items.map((it, idx) => (
        <Reveal key={it.title} delayMs={idx * 60} className="col-span-12 md:col-span-6">
          <div className={`border-t pt-4 ${light ? "border-black/15" : "border-white/25"}`}>
            <div className={`text-xs font-extrabold tracking-[.14em] uppercase ${light ? "text-forest2" : "text-white/95"}`}>{it.title}</div>
            <div className={`mt-2 text-[14px] leading-[1.85] whitespace-pre-wrap ${light ? "text-black/75" : "text-white/88"}`}>{it.text}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
