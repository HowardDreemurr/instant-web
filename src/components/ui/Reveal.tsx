import type { ReactNode } from "react";
import clsx from "clsx";
import { useInView } from "../../hooks/useInView";

export function Reveal({
  children,
  className,
  delayMs = 0,
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
