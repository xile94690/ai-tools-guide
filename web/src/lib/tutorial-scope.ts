import type { Step } from "./tutorial-types";

/** Steps we skip for now: get them using the tool first, extras later. */
const SKIP =
  /核心用法|进阶|常见玩法|数据与隐私|效率技巧|技巧速查|快捷键速查|常用命令与快捷键|^core usage|^core workflow|^advanced\b|^level up|common combinations|data and privacy|speed tips|^cheat sheet$|beyond the basics/i;

export function isStarterStep(step: Step): boolean {
  return !SKIP.test(step.title.trim());
}

export function starterSteps(steps: Step[] | undefined): Step[] {
  return (steps ?? []).filter(isStarterStep);
}
