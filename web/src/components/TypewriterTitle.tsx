"use client";

import { useEffect, useState } from "react";

const CHAR_MS = 90;

export default function TypewriterTitle({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !text) {
      setShown(text);
      return;
    }

    setShown("");
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(timer);
    }, CHAR_MS);
    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <h1 className="min-h-[1.2em] text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden>{shown}</span>
    </h1>
  );
}
