import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

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
    <section id={id} className={`scroll-mt-16 ${muted ? "bg-surface" : "bg-background"}`}>
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-[190px_1fr] md:gap-14 md:py-32">
        <Reveal>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            <span className="h-px w-6 bg-teal" aria-hidden />
            {index} · {label}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-[1.7rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={80}>{children}</Reveal>
      </div>
    </section>
  );
}
