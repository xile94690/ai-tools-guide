import { describe, expect, it } from "vitest";
import { isStarterStep, partitionSteps, starterSteps } from "./tutorial-scope";
import { getTutorial } from "./tutorials";

describe("starterSteps", () => {
  it("keeps install and interface tour, drops later extras", () => {
    const keep = [
      "打开官网，先认清域名",
      "注册账号：邮箱、Google、Apple 三选一",
      "界面导览：左边栏、模型切换、输入框在哪",
      "Tour the interface: sidebar, model switcher, composer",
    ];
    const drop = [
      "核心用法：5 个可以直接复制的提示词",
      "进阶设置：自定义指令、记忆、项目",
      "常见玩法组合",
      "数据与隐私：训练开关在哪关",
      "效率技巧速查",
      "Core usage: five prompts you can copy",
      "Advanced settings: custom instructions, memory, projects",
      "Common combinations",
      "Data and privacy: where the training switch is",
      "Speed tips",
      "Cheat sheet",
    ];
    for (const title of keep) {
      expect(isStarterStep({ title, blocks: [] }), title).toBe(true);
    }
    for (const title of drop) {
      expect(isStarterStep({ title, blocks: [] }), title).toBe(false);
    }
    expect(starterSteps(keep.concat(drop).map((title) => ({ title, blocks: [] }))).map((s) => s.title)).toEqual(keep);
  });
});

describe("getTutorial scope", () => {
  it("keeps starter and advanced ChatGPT steps, and partitions extras", () => {
    const tut = getTutorial("chatgpt", "zh");
    const titles = (tut?.desktop ?? tut?.steps ?? []).map((s) => s.title);
    expect(titles.some((t) => t.includes("打开官网"))).toBe(true);
    expect(titles.some((t) => t.includes("核心用法"))).toBe(true);
    expect(titles.some((t) => t.includes("进阶"))).toBe(true);
    const parts = partitionSteps(tut?.desktop ?? tut?.steps);
    expect(parts.starter.some((s) => s.title.includes("打开官网"))).toBe(true);
    expect(parts.extra.some((s) => s.title.includes("核心用法"))).toBe(true);
    expect(parts.extra.some((s) => s.title.includes("进阶"))).toBe(true);
  });

  it("keeps API key + CC Switch as a starter step on Claude Code", () => {
    const tut = getTutorial("claude-code", "zh");
    const titles = (tut?.cli ?? []).map((s) => s.title);
    expect(titles.some((t) => t.includes("API Key"))).toBe(true);
    expect(titles.some((t) => t.includes("CC Switch"))).toBe(true);
  });
});
