import { categories, type Locale } from "./site";
import { tools, type Tool } from "./tools";

/** Extra aliases so CJK nicknames and English names hit the same tool. */
export const toolAliases: Record<string, string[]> = {
  chatgpt: ["gpt", "openai", "chat gpt", "chatgpt"],
  claude: ["anthropic", "克劳德"],
  deepseek: ["深度求索", "ds"],
  doubao: ["字节", "抖音 ai"],
  kimi: ["月之暗面", "moonshot", "kimi chat"],
  grok: ["xai", "x.ai", "grok.com"],
  "grok-build": ["grok cli", "xai cli", "grok tui"],
  midjourney: ["mj", "mid journey"],
  jimeng: ["即梦", "剪映 ai", "dreamina"],
  wanxiang: ["通义万相", "wanxiang", "wan 2", "通义"],
  ideogram: ["ideogram ai"],
  liblib: ["哩布", "哩布哩布", "liblibai", "stable diffusion"],
  runway: ["runway ml", "gen-3", "gen3"],
  kling: ["可灵", "可灵 ai", "kuaishou"],
  hailuo: ["海螺", "海螺视频", "minimax", "hailuo ai"],
  pika: ["pika labs", "pika art"],
  cursor: ["cursor ide", "cursor ai"],
  copilot: ["github copilot", "gh copilot"],
  "notion-ai": ["notion", "notion ai"],
  feishu: ["飞书", "lark", "飞书妙记", "飞书智能伙伴", "会议纪要"],
  gamma: ["gamma app", "ai ppt", "ai 演示"],
  tingwu: ["通义听悟", "听悟", "会议纪要", "转写"],
  suno: ["suno ai"],
  elevenlabs: ["11labs", "eleven labs", "配音", "tts"],
  udio: ["udio ai"],
  mureka: ["天工", "昆仑万维", "skymusic"],
  "cc-switch": ["ccswitch", "cc switch", "供应商切换", "api 中转"],
  trae: ["trae cn", "trae ide", "字节 ide", "trae.com.cn"],
  codebuddy: ["腾讯 agent", "腾讯云代码助手", "codebuddy", "腾讯编程"],
  tongyi: ["通义千问", "千问", "qwen"],
  yuanbao: ["元宝", "腾讯元宝", "混元"],
  coze: ["扣子", "coze", "智能体"],
  workbuddy: ["龙虾", "腾讯龙虾", "小龙虾", "workbuddy"],
  metaso: ["秘塔", "ai搜索"],
  ernie: ["文心", "一言", "文心一言", "百度"],
};

const STOP = new Set([
  "ai",
  "the",
  "and",
  "for",
  "app",
  "free",
  "with",
  "from",
  "工具",
  "使用",
  "一个",
  "可以",
  "支持",
  "官方",
]);

const CATEGORY_HINTS: Record<string, string[]> = Object.fromEntries(
  categories.map((c) => [c.id, [c.id, c.zh, c.en, ...c.keywords]]),
);

function normalize(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

function hasCjk(s: string): boolean {
  return /[\u4e00-\u9fff]/.test(s);
}

function tokensOf(query: string): string[] {
  return normalize(query)
    .split(" ")
    .filter((tok) => {
      if (!tok || STOP.has(tok)) return false;
      return hasCjk(tok) ? tok.length >= 1 : tok.length >= 2;
    });
}

function words(s: string): string[] {
  return normalize(s)
    .split(/[\s/_.,+\-()]+/)
    .filter(Boolean);
}

function tokenScore(tool: Tool, token: string): number {
  const name = normalize(tool.name);
  const slug = tool.slug.toLowerCase();
  const aliases = (toolAliases[tool.slug] ?? []).map(normalize);
  const tags = tool.tags.map(normalize);
  const keywords = (tool.keywords ?? []).map(normalize);
  const catHints = (CATEGORY_HINTS[tool.category] ?? []).map(normalize);
  const identity = [name, slug, ...aliases, ...tags, ...keywords];

  if (name === token || slug === token || aliases.includes(token)) return 100;
  if (tags.includes(token) || keywords.includes(token)) return 70;
  if (name.startsWith(token) || slug.startsWith(token)) return 65;
  if (aliases.some((a) => a.startsWith(token) || words(a).includes(token)))
    return 55;

  const longEnough = hasCjk(token) ? token.length >= 2 : token.length >= 3;
  if (longEnough && identity.some((s) => s.includes(token))) return 40;

  if (catHints.includes(token)) return 22;

  return 0;
}

export function searchTools(query: string, _locale?: Locale): Tool[] {
  const tokens = tokensOf(query);
  if (!tokens.length) return [];

  const ranked = tools
    .map((tool) => {
      let score = 0;
      for (const token of tokens) {
        const s = tokenScore(tool, token);
        if (s === 0) return { tool, score: 0 };
        score += s;
      }
      if (tool.featured) score += 1;
      return { tool, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name));

  return ranked.map((row) => row.tool);
}
