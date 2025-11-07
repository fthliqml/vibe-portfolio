import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors duration-300";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
    secondary:
      "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
