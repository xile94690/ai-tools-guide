"use client";

import { useState } from "react";
import Image from "next/image";
import { publicUrl } from "@/lib/paths";

export default function Shot({
  src,
  caption,
  hint,
}: {
  src: string;
  caption: string;
  hint: string;
}) {
  const [missing, setMissing] = useState(false);

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
      <Image
        src={publicUrl(src)}
        alt={caption}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-xl border border-zinc-200 bg-white"
        onError={() => setMissing(true)}
      />
      <figcaption className="mt-2 text-center text-xs text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}
