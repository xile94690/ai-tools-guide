import type { Locale } from "@/lib/site";

export default function SiteFooter({
  locale,
  text,
}: {
  locale: Locale;
  text: string;
}) {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white" lang={locale}>
      <p className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-zinc-500">
        {text}
      </p>
    </footer>
  );
}
