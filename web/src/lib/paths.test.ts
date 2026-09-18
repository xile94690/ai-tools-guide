import { describe, expect, it } from "vitest";
import { localizedPath, stripLocalePrefix, switchLocalePath } from "./paths";

describe("localizedPath", () => {
  it("omits the default locale prefix", () => {
    expect(localizedPath("zh", "/")).toBe("/");
    expect(localizedPath("zh", "/tool/kimi")).toBe("/tool/kimi");
    expect(localizedPath("zh", "/search")).toBe("/search");
  });

  it("prefixes English URLs with /en", () => {
    expect(localizedPath("en", "/")).toBe("/en");
    expect(localizedPath("en", "/tool/kimi")).toBe("/en/tool/kimi");
    expect(localizedPath("en", "/category/video")).toBe("/en/category/video");
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
  it("keeps the rest of the path and the query string", () => {
    expect(switchLocalePath("/tool/kimi", "?q=绘画", "en")).toBe(
      "/en/tool/kimi?q=绘画",
    );
    expect(switchLocalePath("/en/search", "?q=kimi", "zh")).toBe(
      "/search?q=kimi",
    );
  });
});
