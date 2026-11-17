import { useEffect, useState } from "react";

/**
 * 스크롤 위치에 따라 지금 읽고 있는 섹션 id를 돌려줍니다.
 * 화면 위쪽에서 offset 지점을 지난 마지막 섹션을active로 봅니다.
 */
export function useActiveSection(ids: string[], offset = 0.35) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const line = window.innerHeight * offset;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 8 <= line) current = id;
      }

      // 페이지 맨 아래에서는 마지막 섹션을 유지
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}
