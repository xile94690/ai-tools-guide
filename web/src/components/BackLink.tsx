import Link from "next/link";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";

export default function BackLink({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localizedPath(locale, "/")}
      className={`inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M10 3.5 5.5 8l4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {t(locale).back}
    </Link>
  );
}
