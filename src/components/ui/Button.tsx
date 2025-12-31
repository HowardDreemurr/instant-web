import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return (
    <button
      {...props}
      className={clsx(variant === "primary" ? "btn" : "btn btnSecondary", className)}
    />
  );
}
