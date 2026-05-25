"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
  threshold?: number;
  once?: boolean;
  id?: string;
};

export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  threshold = 0.15,
  once = true,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      id={id}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  text: string;
  className?: string;
  as?: ElementType;
};

export function WordStagger({ text, className = "", as: Tag = "span" }: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(/(\s+)/);
  let wordIndex = 0;
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`headline-stagger ${className}`}>
      {words.map((w, i) => {
        if (w.trim() === "") return <span key={i}>{w}</span>;
        const idx = wordIndex++;
        return (
          <span
            key={i}
            className="word"
            style={{ ["--w" as string]: idx }}
          >
            {w}
          </span>
        );
      })}
    </Tag>
  );
}
