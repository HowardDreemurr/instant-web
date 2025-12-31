import { Reveal } from "../ui/Reveal";

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-5 grid grid-cols-12 gap-3">
      {items.map((it, idx) => (
        <Reveal key={it.title} delayMs={idx * 60} className="col-span-12 md:col-span-6">
          <div className="border-t border-white/25 pt-4">
            <div className="text-xs font-extrabold tracking-[.14em] uppercase text-white/95">{it.title}</div>
            <div className="mt-2 text-white/88 text-[14px] leading-[1.85] whitespace-pre-wrap">{it.text}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
