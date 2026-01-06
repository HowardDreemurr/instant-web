import { Reveal } from "../components/ui/Reveal";
import { StoryBand } from "../components/sections/StoryBand";

type NewsItem = {
  date: string; // "YYYY-MM-DD"
  title: string;
  body?: string;
  href?: string;
  tag?: string;
};

const NEWS: NewsItem[] = [
  { date: "2025-08-06", title: "EC Signature Date", tag: "Time Point" },
  { date: "2026-01-01", title: "Project Start", tag: "Time Point" },
  { date: "2026-01-12", title: "The First Annual Workshop", tag: "Workshop" },
];

function parseLocalISODate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function formatDate(d: string) {
  const dt = parseLocalISODate(d);
  return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export function NewsPage() {
  const today = new Date();
  const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const todayLabel = todayDateOnly.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const items = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));

  const rendered: React.ReactNode[] = [];
  let insertedTodayMarker = false;

  const TodayMarker = (
    <Reveal key="__today_marker__" delayMs={0}>
      <div className="relative pl-10">
        <div className="absolute left-[10px] top-2 h-3 w-3 rounded-full bg-blue-400" />
        <div className="absolute left-[185px] right-0 top-[13px] border-t border-dashed border-black/20" />
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-extrabold text-orange-700">
          <span>Today</span>
          <span className="font-semibold text-orange-700/80">{todayLabel}</span>
        </div>
      </div>
    </Reveal>
  );

  for (let idx = 0; idx < items.length; idx++) {
    const it = items[idx];
    const itemDate = parseLocalISODate(it.date);

    const isFuture = itemDate.getTime() > todayDateOnly.getTime();

    if (!insertedTodayMarker && !isFuture) {
      rendered.push(TodayMarker);
      insertedTodayMarker = true;
    }

    rendered.push(
      <Reveal key={`${it.date}-${it.title}-${idx}`} delayMs={120}>
        <div className="relative pl-10">
          <div
            className={[
              "absolute left-[10px] top-0 h-3 w-3 rounded-full",
              isFuture ? "bg-orange-500" : "bg-forest",
            ].join(" ")}
          />

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs font-medium text-black/60">{formatDate(it.date)}</span>
            {it.tag && (
              <span className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/70">
                {it.tag}
              </span>
            )}
          </div>

          <h3 className="mt-2 text-base font-semibold leading-6">
            {it.href ? (
              <a className="underline underline-offset-4 hover:opacity-80" href={it.href}>
                {it.title}
              </a>
            ) : (
              it.title
            )}
          </h3>

          {it.body && <p className="mt-2 text-sm text-black/70">{it.body}</p>}
        </div>
      </Reveal>
    );
  }

  if (!insertedTodayMarker) {
    rendered.push(TodayMarker);
  }

  return (
    <>
      <StoryBand kicker="News" title="News & Event Timeline" imageUrl="/images/hero.svg">
        <p>Project updates, workshops, releases.</p>
      </StoryBand>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="relative mt-0">
          {/* 竖线 */}
          <div className="absolute left-4 top-1 bottom-1 w-px bg-black/10" />

          <div className="space-y-8">{rendered}</div>
        </div>
      </div>
    </>
  );
}
