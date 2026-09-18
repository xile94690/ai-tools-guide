import { describe, expect, it } from "vitest";
import { parseLocale } from "./locale";
import { localizedPath, publicUrl, stripLocalePrefix, switchLocalePath } from "./paths";

describe("localizedPath", () => {
  it("never prefixes language on public URLs", () => {
    expect(localizedPath("zh", "/")).toBe("/");
    expect(localizedPath("zh", "/tool/kimi")).toBe("/tool/kimi");
    expect(localizedPath("en", "/")).toBe("/");
    expect(localizedPath("en", "/tool/kimi")).toBe("/tool/kimi");
    expect(localizedPath("en", "/category/video")).toBe("/category/video");
  });

  it("strips a leftover /en or /zh prefix", () => {
    expect(localizedPath("en", "/en/tool/kimi")).toBe("/tool/kimi");
  });
});

describe("stripLocalePrefix", () => {
  it("strips zh or en only at the start", () => {
    expect(stripLocalePrefix("/en/tool/kimi")).toBe("/tool/kimi");
    expect(stripLocalePrefix("/zh/search")).toBe("/search");
    expect(stripLocalePrefix("/tool/kimi")).toBe("/tool/kimi");
    expect(stripLocalePrefix("/en")).toBe("/");
  });
});

describe("switchLocalePath", () => {
  it("keeps the path and query; language is not in the URL", () => {
    expect(switchLocalePath("/tool/kimi", "?q=绘画", "en")).toBe(
      "/tool/kimi?q=绘画",
    );
    expect(switchLocalePath("/en/search", "?q=kimi", "zh")).toBe(
      "/search?q=kimi",
    );
  });
});

describe("publicUrl", () => {
  it("leaves root-relative public files unchanged without a basePath", () => {
    expect(publicUrl("/icons/chatgpt.png")).toBe("/icons/chatgpt.png");
    expect(publicUrl("https://example.com/a.png")).toBe("https://example.com/a.png");
  });
});

describe("parseLocale", () => {
  it("accepts zh and en and falls back to zh", () => {
    expect(parseLocale("en")).toBe("en");
    expect(parseLocale("zh")).toBe("zh");
    expect(parseLocale(undefined)).toBe("zh");
    expect(parseLocale("fr")).toBe("zh");
  });
});
