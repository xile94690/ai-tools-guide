"use client";

import { useState } from "react";
import Image from "next/image";
import { publicUrl } from "@/lib/paths";

export default function Shot({
  src,
  caption,
  hint,
  label,
  guide,
}: {
  src: string;
  caption: string;
  hint: string;
  label?: string;
  guide?: string;
}) {
  const [missing, setMissing] = useState(false);
  const kicker = [label, guide].filter(Boolean).join(" · ");

  if (missing) {
    if (process.env.NODE_ENV === "production") return null;
    return (
      <figure className="my-4 rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 text-center">
        <p className="text-sm font-medium text-amber-800">{hint}</p>
        <p className="mt-1 font-mono text-xs text-amber-700">{src}</p>
        <figcaption className="mt-2 text-xs text-amber-700">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {kicker ? (
          <p className="border-b border-zinc-100 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-500">
            {kicker}
          </p>
        ) : null}
        <Image
          src={publicUrl(src)}
          alt={caption}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full bg-white"
          onError={() => setMissing(true)}
        />
      </div>
      <figcaption className="mt-2 text-center text-xs leading-5 text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}
