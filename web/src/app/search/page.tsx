import type { Metadata } from "next";
import { defaultLocale } from "@/lib/site";
import { t } from "@/lib/i18n";
import SearchView from "@/components/SearchView";

export const metadata: Metadata = {
  title: t(defaultLocale).search,
};

export default function SearchPage() {
  return <SearchView />;
}
