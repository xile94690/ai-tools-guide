import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { categories } from "@/lib/site";
import { localizedPath } from "@/lib/paths";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/search",
    ...categories.map((c) => `/category/${c.id}`),
    ...tools.map((t) => `/tool/${t.slug}`),
  ];
  return (["zh", "en"] as const).flatMap((locale) =>
    paths.map((path) => ({
      url: `${site}${localizedPath(locale, path)}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : path.startsWith("/tool/") ? 0.8 : 0.5,
    })),
  );
}
