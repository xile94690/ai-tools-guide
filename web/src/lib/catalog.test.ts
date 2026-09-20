import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { categories } from "./site";
import { getTool, tools, toolIcon, toolsByRegionFilter } from "./tools";
import { getTutorial, tutorials } from "./tutorials";
import { dict } from "./i18n";
import { adRails } from "./ads";

const publicDir = path.join(process.cwd(), "public");

describe("catalog integrity", () => {
  it("has unique slugs", () => {
    const slugs = tools.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every category at least four tools", () => {
    for (const cat of categories) {
      const count = tools.filter((t) => t.category === cat.id).length;
      expect(count, cat.id).toBeGreaterThanOrEqual(4);
    }
  });

  it("ships a bilingual tutorial for every tool", () => {
    for (const tool of tools) {
      expect(getTutorial(tool.slug, "zh"), `${tool.slug} zh`).toBeTruthy();
      expect(getTutorial(tool.slug, "en"), `${tool.slug} en`).toBeTruthy();
    }
    const extra = Object.keys(tutorials).filter(
      (slug) => !tools.some((t) => t.slug === slug),
    );
    expect(extra).toEqual([]);
  });

  it("keeps beginner prereq on ChatGPT instead of wiping it", () => {
    expect(getTutorial("chatgpt", "zh")?.prereq.length).toBeGreaterThan(0);
  });

  it("gives every tool plans and an environment check", () => {
    for (const tool of tools) {
      const tut = getTutorial(tool.slug, "zh");
      expect(tut?.plans?.length, `${tool.slug} plans`).toBeGreaterThan(0);
      expect(tut?.envCheck?.length, `${tool.slug} env`).toBeGreaterThan(0);
    }
  });

  it("teaches both desktop and CLI when a product has both", () => {
    const both = ["cursor", "copilot", "cline", "codex", "windsurf", "opencode"];
    for (const slug of both) {
      const tut = getTutorial(slug, "zh");
      expect(tut?.desktop?.length, `${slug} desktop`).toBeGreaterThan(0);
      expect(tut?.cli?.length, `${slug} cli`).toBeGreaterThan(0);
    }
  });

  it("links ChatGPT and Claude chat apps to their CLI + CC Switch", () => {
    expect(getTool("chatgpt")?.companionCli).toBe("codex");
    expect(getTool("claude")?.companionCli).toBe("claude-code");
  });

  it("marks Claude Code, Codex, Gemini CLI and OpenCode as CC Switch apps", () => {
    const slugs = tools.filter((t) => t.ccSwitch).map((t) => t.slug).sort();
    expect(slugs).toEqual(
      ["claude-code", "codex", "gemini-cli", "opencode"].sort(),
    );
  });

  it("does not leave CLI-only tools under a desktop heading", () => {
    const cliOnly = ["claude-code", "gemini-cli", "grok-build", "aider", "command-code"];
    for (const slug of cliOnly) {
      const tut = getTutorial(slug, "zh");
      expect(tut?.cli?.length, slug).toBeGreaterThan(0);
      expect(tut?.desktop ?? [], slug).toEqual([]);
    }
  });

  it("has an icon file for every tool", () => {
    for (const tool of tools) {
      const file = path.join(publicDir, toolIcon(tool.slug).replace(/^\//, ""));
      expect(fs.existsSync(file), file).toBe(true);
    }
  });

  it("keeps zh/en dictionary keys in sync", () => {
    expect(Object.keys(dict.en).sort()).toEqual(Object.keys(dict.zh).sort());
  });

  it("keeps tool records free of unused install/usage copy", () => {
    for (const tool of tools) {
      expect(tool).not.toHaveProperty("installZh");
      expect(tool).not.toHaveProperty("usageZh");
    }
  });

  it("filters homepage tools by region without duplicating the full catalog", () => {
    const all = toolsByRegionFilter("all");
    expect(all.length).toBeGreaterThan(0);
    expect(all.length).toBeLessThan(tools.length);
    expect(all.every((tool) => tool.featured)).toBe(true);
    expect(
      toolsByRegionFilter("domestic").every((tool) => tool.region !== "global"),
    ).toBe(true);
    expect(
      toolsByRegionFilter("global").every((tool) => tool.region !== "domestic"),
    ).toBe(true);
  });

  it("gates every proxy ad slot behind the leaving notice", () => {
    const slots = [...adRails.left, ...adRails.right];
    const proxies = slots.filter((slot) => slot.kind === "proxy");
    expect(proxies.length).toBeGreaterThan(0);
    for (const slot of proxies) {
      expect(slot.gate, slot.id).toBe(true);
    }
  });
});
