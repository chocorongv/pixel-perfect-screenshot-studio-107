import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

/**
 * tone: 섹션마다 배경 분위기를 조금씩 변주합니다.
 * - calm: 가장 깨끗한 딥네이비, 넓은 여백
 * - mist: 미세한 별빛 입자 + 흐릿한 보랏빛 안개
 * - accent: 기본 배경 (카드 쪽에서 라벤더 포인트 강조)
 * - gradient: 남색 → 보랏빛 아주 약한 그라데이션
 * - none: 배경 없음 (상위 래퍼의 배경을 그대로 사용)
 */
export type SectionTone = "calm" | "mist" | "accent" | "gradient" | "none";

const toneClass: Record<SectionTone, string> = {
  calm: "bg-background",
  mist: "bg-gradient-to-b from-background via-surface to-background",
  accent: "bg-background",
  gradient: "bg-night-gradient",
  none: "",
};

export function Section({
  id,
  index,
  label,
  title,
  children,
  tone = "calm",
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  tone?: SectionTone;
}) {
  const roomy = tone === "calm";
  return (
    <section id={id} className={`relative isolate scroll-mt-16 overflow-hidden ${toneClass[tone]}`}>
      {tone === "mist" && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="starfield absolute -inset-6 opacity-70" />
          <div className="nebula absolute top-1/4 right-[-10%] h-96 w-[34rem]" />
          <div className="nebula absolute bottom-[-10%] left-[20%] h-72 w-[28rem] opacity-60" />
        </div>
      )}
      <div
        className={`mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[180px_1fr] md:gap-12 ${
          roomy ? "py-28 md:py-36" : "py-20 md:py-28"
        }`}
      >
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {index} · {label}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
          <span aria-hidden className="mt-4 block h-px w-10 bg-primary/50" />
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
