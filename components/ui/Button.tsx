import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex min-h-[48px] items-center justify-center rounded-xl px-5 py-3 text-center text-base font-medium shadow-soft transition hover:shadow-soft-lg active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary:
    "border-2 border-primary bg-surface text-primary hover:bg-muted shadow-none hover:shadow-soft",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  /** External URL / tel / mailto — Next.js Link not used */
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
