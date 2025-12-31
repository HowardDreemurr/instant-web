import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-2 text-xs font-extrabold tracking-[.14em] uppercase text-white bg-white/15 border border-white/25">
      {children}
    </span>
  );
}
