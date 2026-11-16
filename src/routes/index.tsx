import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, BadgeCheck, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/Reveal";
import { Section } from "@/components/portfolio/Section";
import {
  about,
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />

        <Section id="about" index="01" label="About Me" title="소개">
          <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-[1.05rem]">
            {about.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="strengths" index="02" label="Strengths" title="핵심 역량" muted>
          <ul className="grid gap-5 sm:grid-cols-2">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={(i % 2) * 80}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-teal">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </Section>

        <Section id="experience" index="03" label="Experience" title="주요 경험">
          <ol className="relative space-y-14 border-l border-sky/40 pl-8">
            {experiences.map((e) => (
              <Reveal as="li" key={e.company} className="relative">
                <span
                  className="absolute top-2 -left-[2.34rem] h-3 w-3 rounded-full border-2 border-background bg-primary ring-4 ring-accent"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-foreground">{e.company}</h3>
                  <span className="text-sm text-muted-foreground tabular-nums">{e.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{e.role}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{e.summary}</p>
                <ul className="mt-3 space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="games" index="04" label="Games" title="게임 경험과 관심" muted>
          <p className="text-base leading-8 text-muted-foreground md:text-[1.05rem]">{games.intro}</p>
          <ul className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {games.played.map((g) => (
              <li key={g.title} className="flex flex-col gap-1 px-7 py-5 sm:flex-row sm:gap-6">
                <span className="w-40 shrink-0 font-semibold text-foreground">{g.title}</span>
                <span className="text-sm leading-6 text-muted-foreground">{g.note}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-sm font-medium text-foreground">특히 관심 있는 것</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {games.interests.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-accent-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="credentials" index="05" label="Credentials" title="자격 및 기타">
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-b border-border py-4 text-foreground"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-teal" strokeWidth={1.5} />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <Contact />
      </main>
      <footer className="bg-background py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-bold tracking-tight text-foreground">
          {profile.name}
        </a>
        <nav className="hidden gap-7 md:flex">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy">
      <img
        src={hero.image.large}
        srcSet={`${hero.image.small} 960w, ${hero.image.large} 1672w`}
        sizes="100vw"
        alt={hero.image.alt}
        fetchPriority="high"
        className="animate-hero-drift absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center] md:object-center"
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid min-h-[min(calc(100svh-3.5rem),820px)] max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-24 lg:gap-16">
        <Reveal className="text-primary-foreground">
          <p className="hero-text-shadow text-xs font-semibold tracking-[0.18em] uppercase opacity-90">
            {hero.eyebrow}
          </p>
          <h1 className="hero-text-shadow mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-text-shadow mt-7 max-w-[34rem] text-base leading-8 opacity-95 md:text-lg">
            {hero.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 rounded-lg px-7">
              <a href="#experience">
                경험 보기 <ArrowDown strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass" className="h-11 rounded-lg px-7">
              <a href="#contact">연락하기</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <StrengthCard />
        </Reveal>
      </div>
    </section>
  );
}

function StrengthCard() {
  return (
    <aside className="rounded-2xl border border-card/60 bg-card/90 p-6 shadow-lifted backdrop-blur-md md:p-7">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        {hero.card.eyebrow}
      </p>
      <h2 className="mt-2 text-base font-bold tracking-tight text-foreground">{hero.card.title}</h2>
      <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
        {strengths.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="flex items-center gap-3">
              <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">{s.title}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-deep scroll-mt-16 text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase opacity-75">
            <span className="h-px w-6 bg-primary-foreground/60" aria-hidden />
            06 · Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            함께 이야기 나누고 싶습니다.
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${profile.phone.replace(/-/g, "")}`}
            className="flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5 opacity-80" strokeWidth={1.5} />
            <div>
              <p className="text-xs opacity-70">전화</p>
              <p className="mt-1 font-medium tabular-nums">{profile.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10"
          >
            <Mail className="h-5 w-5 opacity-80" strokeWidth={1.5} />
            <div>
              <p className="text-xs opacity-70">이메일</p>
              <p className="mt-1 font-medium">{profile.email}</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
