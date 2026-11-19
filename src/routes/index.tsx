import { useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ArrowDown, Search, Compass, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/Reveal";
import { Section } from "@/components/portfolio/Section";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import coverAsset from "@/assets/moonlit_flower_field.jpg.asset.json";
import {
  aboutLessons,
  aboutWants,
  credentials,
  experiences,
  games,
  hero,
  navItems,
  profile,
  strengths,
} from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "박정우 | 게임 사업 PM · 운영 포트폴리오" },
      {
        name: "description",
        content:
          "현장 운영과 고객 응대 경험을 바탕으로 게임 사업 PM·운영 직무에 지원하는 박정우의 포트폴리오입니다.",
      },
      { property: "og:title", content: "박정우 | 게임 사업 PM · 운영 포트폴리오" },
      {
        property: "og:description",
        content: "플레이어가 오래 머물고 싶은 게임 경험을 고민하는 운영 인재, 박정우입니다.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const wantIcons = {
  search: Search,
  compass: Compass,
  heart: Heart,
} as const;

function About() {
  return (
    <section id="about" className="relative isolate scroll-mt-16 overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            01 · About Me
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            경험으로 배운 운영의 기준
          </h2>
          <span aria-hidden className="mt-4 block h-px w-10 bg-primary/50" />
        </Reveal>

        <ol className="mt-12 space-y-5">
          {aboutLessons.map((l, i) => (
            <Reveal
              as="li"
              key={l.number}
              delay={i * 100}
              className="glass rounded-xl p-6 [--glass-border:var(--border-accent)] shadow-glow md:p-8"
            >
              <div className="grid gap-3 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-8">
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-primary tabular-nums">{l.number}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{l.title}</h3>
                </div>
                <p className="min-w-0 whitespace-pre-line text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  {l.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-24 md:mt-32">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            01 · What I Want to Do
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            게임에서 하고 싶은 일
          </h2>
          <span aria-hidden className="mt-4 block h-px w-10 bg-primary/50" />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutWants.map((w, i) => {
            const Icon = wantIcons[w.icon];
            return (
              <Reveal
                as="li"
                key={w.number}
                delay={i * 100}
                className="glass flex flex-col rounded-xl p-6 shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary tabular-nums">{w.number}</span>
                  <Icon className="icon-glow h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{w.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{w.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />

        <About />

        <Section id="strengths" index="02" label="Strengths" title="핵심 역량" tone="mist">
          <ul className="grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 2) * 120} className="glass rounded-xl p-6">
                <span className="text-xs font-semibold text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section id="experience" index="03" label="Experience" title="주요 경험" tone="accent">
          <ol className="space-y-6">
            {experiences.map((e) => (
              <Reveal
                as="li"
                key={e.company}
                className="glass relative overflow-hidden rounded-xl p-6 [--glass-border:var(--border-accent)] shadow-glow md:p-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-foreground">{e.company}</h3>
                  <span className="text-sm text-muted-foreground tabular-nums">{e.period}</span>
                </div>
                <p className="mt-2 inline-flex rounded-full border border-primary/30 bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                  {e.role}
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">{e.summary}</p>
                <ul className="mt-3 space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary shadow-glow" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="games" index="04" label="Games" title="게임 경험과 관심" tone="gradient">
          <Reveal>
            <p className="text-base leading-8 text-muted-foreground">{games.intro}</p>
          </Reveal>
          <Reveal className="mt-8">
            <ul className="glass divide-y divide-border rounded-xl">
              {games.played.map((g) => (
                <li key={g.title} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
                  <span className="w-40 shrink-0 font-semibold text-foreground">{g.title}</span>
                  <span className="text-sm leading-6 text-muted-foreground">{g.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-8">
            <p className="text-sm font-medium text-foreground">특히 관심 있는 것</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {games.interests.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-primary/25 bg-accent px-3 py-1 text-sm text-accent-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <div className="relative isolate overflow-hidden bg-closing-gradient">
          <ClosingLights />
          <Section id="credentials" index="05" label="Credentials" title="자격 및 기타" tone="none">
            <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={(i % 2) * 100}
                  className="flex items-center gap-3 border-b border-border py-3.5 text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-star shadow-glow" />
                  {c}
                </Reveal>
              ))}
            </ul>
          </Section>

          <Contact />

          <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </footer>
        </div>
      </main>
    </div>
  );
}

function ClosingLights() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="starfield absolute -inset-6 opacity-60" />
      <div className="nebula absolute top-[38%] left-[-8%] h-80 w-[30rem] opacity-70" />
      <div className="nebula absolute right-[-6%] bottom-[8%] h-96 w-[34rem]" />
    </div>
  );
}

function Header() {
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-bold tracking-tight text-foreground">
          {profile.name}
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative py-1 text-sm transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {n.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full bg-primary transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      {/* 표지 이미지: 화면 전체 폭, cover. 모바일은 오른쪽 꽃 군락이 보이도록 중심점 이동 */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[78svh] md:inset-0 md:h-auto">
        <img
          src={coverAsset.url}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-[88%_center] md:object-[72%_center] lg:object-center"
        />
        {/* 모바일: 위쪽 꽃은 살리고 아래로 갈수록 배경색으로 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-25% via-background/70 via-60% to-background md:hidden" />
        {/* 데스크톱: 왼쪽 짙은 여백을 조금 더 짙게 해 글자를 선명하게 */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background/90 via-background/45 via-45% to-transparent to-75% md:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 데스크톱: 소개글과 핵심 역량 카드 전체를 화면 세로 중앙에 배치 */}
      <div className="md:flex md:min-h-[calc(100svh-3.5rem)] md:items-center">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 pt-[46svh] pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-10 md:py-16 lg:gap-16">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000">
            <p className="text-legible text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="title-glow mt-5 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-6xl lg:text-7xl">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-legible mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              {hero.lead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#experience">
                  경험 보기 <ArrowDown />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">연락하기</a>
              </Button>
            </div>
          </div>
          <StrengthCard />
        </div>
      </div>
    </section>
  );
}

function StrengthCard() {
  return (
    <aside className="glass w-full rounded-xl p-5 [--glass-bg:color-mix(in_oklab,var(--background)_60%,transparent)] animate-in fade-in duration-1000 md:max-w-xs md:justify-self-end md:p-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        {hero.card.eyebrow}
      </p>
      <h2 className="mt-2 text-base font-bold tracking-tight text-foreground">{hero.card.title}</h2>
      <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
        {strengths.map((s, i) => (
          <li key={s.title} className="flex items-center gap-3">
            <span className="text-xs font-semibold text-primary tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-foreground">{s.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 pt-4 pb-20 md:pt-8 md:pb-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">06 · Contact</p>
          <h2 className="title-glow mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            함께 이야기 나누고 싶습니다.
          </h2>
        </Reveal>
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${profile.phone.replace(/-/g, "")}`}
            className="glass sheen flex items-center gap-4 rounded-xl p-5 transition-colors hover:[--glass-border:var(--border-accent)]"
          >
            <Phone className="icon-glow h-5 w-5 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-xs text-muted-foreground">전화</p>
              <p className="mt-1 font-medium text-foreground tabular-nums">{profile.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="glass sheen flex items-center gap-4 rounded-xl p-5 transition-colors hover:[--glass-border:var(--border-accent)]"
          >
            <Mail className="icon-glow h-5 w-5 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-xs text-muted-foreground">이메일</p>
              <p className="mt-1 font-medium text-foreground">{profile.email}</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
