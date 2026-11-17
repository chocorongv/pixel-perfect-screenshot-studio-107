import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * 스크롤로 섹션을 옮겨 갈 때 천천히 페이드 인, 화면 밖으로 나갈 때 부드럽게 페이드 아웃.
 * 화면 위로 나가면 살짝 위로, 아래로 나가면 살짝 아래로 사라집니다.
 * 모션 최소화 설정에서는 항상 그대로 보입니다.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "above" | "below" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        if (entry.isIntersecting) setState("shown");
        else setState(entry.boundingClientRect.top < 0 ? "above" : "below");
      },
      { rootMargin: "-4% 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = state === "above" || state === "below";

  return (
    <Tag
      ref={ref as never}
      style={state === "shown" && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        state !== "idle" && "transition-[opacity,translate] ease-out",
        state === "shown" && "translate-y-0 opacity-100 duration-1000",
        hidden && "opacity-0 duration-500",
        state === "above" && "-translate-y-3",
        state === "below" && "translate-y-3",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
