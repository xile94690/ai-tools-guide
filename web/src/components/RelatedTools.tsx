import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { relatedTools, type Tool } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export default function RelatedTools({
  tool,
  locale,
}: {
  tool: Tool;
  locale: Locale;
}) {
  const d = t(locale);
  const list = relatedTools(tool);
  if (!list.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold">{d.related}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {list.map((item) => (
          <ToolCard key={item.slug} tool={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
