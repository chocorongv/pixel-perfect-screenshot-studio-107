import type { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  children,
  muted = false,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-border ${muted ? "bg-surface" : "bg-background"}`}>
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[180px_1fr] md:gap-12 md:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {index} · {label}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
