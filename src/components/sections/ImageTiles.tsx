import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";

export function ImageTiles({
  tiles,
}: {
  tiles: { title: string; subtitle: string; to: string; imageUrl: string }[];
}) {
  return (
    <div className="grid grid-cols-12 gap-3">
      {tiles.map((t, idx) => (
        <Reveal key={t.title} delayMs={idx * 70} className="col-span-12 md:col-span-4">
          <Link to={t.to} className="group relative block overflow-hidden rounded-[26px] border border-black/10 shadow-soft min-h-[240px] no-underline">
            <div
              className="absolute inset-0 bg-cover bg-center scale-[1.02] transition-transform duration-500 ease-out group-hover:scale-[1.08]"
              style={{
                backgroundImage:
                  `linear-gradient(180deg, rgba(10,18,14,.20), rgba(10,18,14,.62)), url(${t.imageUrl})`,
              }}
            />
            <div className="absolute inset-0 p-5 flex flex-col justify-end gap-2 text-white">
              <div className="text-xs font-extrabold tracking-[.14em] uppercase text-white/90">Learn more</div>
              <div className="font-serif text-[34px] leading-[1] tracking-[-0.01em]">{t.title}</div>
              <div className="text-white/85 leading-[1.65] text-sm max-w-[44ch]">{t.subtitle}</div>
              <div className="mt-1 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/25 bg-white/10">
                →
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
