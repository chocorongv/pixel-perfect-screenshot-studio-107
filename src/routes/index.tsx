import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
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
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            {about.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="strengths" index="02" label="Strengths" title="핵심 역량" muted>
          <ul className="grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <li key={s.title} className="rounded-lg border border-border bg-card p-6">
                <span className="text-xs font-semibold text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" index="03" label="Experience" title="주요 경험">
          <ol className="space-y-12">
            {experiences.map((e) => (
              <li key={e.company} className="border-l-2 border-primary/20 pl-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-bold text-foreground">{e.company}</h3>
                  <span className="text-sm text-muted-foreground tabular-nums">{e.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{e.role}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{e.summary}</p>
                <ul className="mt-3 space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="games" index="04" label="Games" title="게임 경험과 관심" muted>
          <p className="text-base leading-8 text-muted-foreground">{games.intro}</p>
          <ul className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">
            {games.played.map((g) => (
              <li key={g.title} className="flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
                <span className="w-40 shrink-0 font-semibold text-foreground">{g.title}</span>
                <span className="text-sm leading-6 text-muted-foreground">{g.note}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm font-medium text-foreground">특히 관심 있는 것</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {games.interests.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="credentials" index="05" label="Credentials" title="자격 및 기타">
          <ul className="grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-b border-border py-3 text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-bold tracking-tight text-foreground">
          {profile.name}
        </a>
        <nav className="hidden gap-6 md:flex">
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
    <section id="top" className="bg-background">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 pt-20 pb-20 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:pt-24 md:pb-24 lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-6xl lg:text-7xl">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
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
    </section>
  );
}

function StrengthCard() {
  return (
    <aside className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-7">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        {hero.card.eyebrow}
      </p>
      <h2 className="mt-2 text-lg font-bold tracking-tight text-foreground">{hero.card.title}</h2>
      <ul className="mt-6 space-y-4 border-t border-border pt-6">
        {strengths.map((s, i) => (
          <li key={s.title} className="flex gap-3">
            <span className="mt-0.5 text-xs font-semibold text-primary tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">06 · Contact</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
          함께 이야기 나누고 싶습니다.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${profile.phone.replace(/-/g, "")}`}
            className="flex items-center gap-4 rounded-lg border border-primary-foreground/20 p-5 transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5 opacity-80" />
            <div>
              <p className="text-xs opacity-70">전화</p>
              <p className="mt-1 font-medium tabular-nums">{profile.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-lg border border-primary-foreground/20 p-5 transition-colors hover:bg-primary-foreground/10"
          >
            <Mail className="h-5 w-5 opacity-80" />
            <div>
              <p className="text-xs opacity-70">이메일</p>
              <p className="mt-1 font-medium">{profile.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
