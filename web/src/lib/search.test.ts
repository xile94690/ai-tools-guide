import { describe, expect, it } from "vitest";
import { searchTools } from "./search";

describe("searchTools", () => {
  it("returns nothing for empty, tiny, or generic queries", () => {
    expect(searchTools("")).toEqual([]);
    expect(searchTools("   ")).toEqual([]);
    expect(searchTools("a")).toEqual([]);
    expect(searchTools("ai")).toEqual([]);
  });

  it("finds a tool by name, slug or alias", () => {
    expect(searchTools("ChatGPT")[0]?.slug).toBe("chatgpt");
    expect(searchTools("可灵")[0]?.slug).toBe("kling");
    expect(
      searchTools("会议纪要").some(
        (t) => t.slug === "tingwu" || t.slug === "feishu",
      ),
    ).toBe(true);
  });

  it("does not pull in tools that only mention the query in copy", () => {
    const chatgpt = searchTools("ChatGPT").map((t) => t.slug);
    expect(chatgpt[0]).toBe("chatgpt");
    expect(chatgpt).not.toContain("codex");
    expect(chatgpt).not.toContain("claude");
    expect(chatgpt).not.toContain("grok");

    const cursor = searchTools("Cursor").map((t) => t.slug);
    expect(cursor[0]).toBe("cursor");
    expect(cursor).not.toContain("claude-code");
    expect(cursor).not.toContain("grok-build");
  });

  it("treats space-separated tokens as AND", () => {
    const hits = searchTools("国产 音乐");
    expect(hits.map((t) => t.slug)).toContain("mureka");
    expect(hits.every((t) => t.tags.includes("国产") && t.category === "audio")).toBe(
      true,
    );
  });

  it("matches category keywords like 绘画 only within that category", () => {
    const hits = searchTools("绘画");
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((t) => t.category === "image")).toBe(true);
  });
});
