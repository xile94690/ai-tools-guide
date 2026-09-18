import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function phone({ slug, title, hint, pills, input }) {
  const pillsSvg = pills
    .map((p, i) => {
      const y = 250 + i * 52;
      return `<rect x="470" y="${y}" width="260" height="40" rx="20" fill="#f4f4f5"/>
  <text x="600" y="${y + 26}" text-anchor="middle" fill="#18181b" font-size="14">${esc(p)}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="430" y="40" width="340" height="680" rx="40" fill="#18181b"/>
  <rect x="446" y="72" width="308" height="616" rx="28" fill="#ffffff"/>
  <rect x="560" y="84" width="80" height="10" rx="5" fill="#e4e4e7"/>
  <text x="600" y="130" text-anchor="middle" fill="#18181b" font-size="18" font-weight="700">${esc(title)}</text>
  <text x="600" y="158" text-anchor="middle" fill="#71717a" font-size="13">${esc(hint)}</text>
  ${pillsSvg}
  <rect x="466" y="580" width="268" height="72" rx="24" fill="#f4f4f5"/>
  <text x="490" y="622" fill="#a1a1aa" font-size="14">${esc(input)}</text>
  <circle cx="704" cy="616" r="16" fill="#18181b"/>
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">示意图</text>
</svg>
`;
}

function desktop({ slug, title, nav, headline, input }) {
  const navSvg = nav
    .map(
      (n, i) =>
        `<text x="76" y="${140 + i * 36}" fill="${i === 0 ? "#18181b" : "#3f3f46"}" font-size="15">${esc(n)}</text>`,
    )
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="#ffffff"/>
  <path d="M56 40 h1088 a16 16 0 0 1 16 16 v28 h-1120 v-28 a16 16 0 0 1 16 -16 z" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="none" stroke="#e4e4e7"/>
  <line x1="40" y1="84" x2="1160" y2="84" stroke="#e4e4e7"/>
  <circle cx="76" cy="62" r="7" fill="#ff5f57"/>
  <circle cx="98" cy="62" r="7" fill="#febc2e"/>
  <circle cx="120" cy="62" r="7" fill="#28c840"/>
  <text x="600" y="67" text-anchor="middle" fill="#71717a" font-size="14">${esc(title)}</text>
  <path d="M40 84 h260 v636 h-244 a16 16 0 0 1 -16 -16 z" fill="#fafafa"/>
  <line x1="300" y1="84" x2="300" y2="720" stroke="#e4e4e7"/>
  ${navSvg}
  <text x="360" y="150" fill="#18181b" font-size="20" font-weight="700">${esc(headline)}</text>
  <rect x="360" y="200" width="500" height="280" rx="12" fill="#fafafa" stroke="#e4e4e7"/>
  <rect x="900" y="200" width="200" height="280" rx="12" fill="#fafafa" stroke="#e4e4e7"/>
  <text x="920" y="236" fill="#18181b" font-size="14">AI</text>
  <rect x="360" y="560" width="740" height="96" rx="20" fill="#ffffff" stroke="#e4e4e7"/>
  <text x="384" y="616" fill="#a1a1aa" font-size="15">${esc(input)}</text>
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">示意图</text>
</svg>
`;
}

const phones = [
  { slug: "chatgpt", title: "ChatGPT", hint: "OpenAI 官方 App", pills: ["新对话", "语音通话", "拍照问"], input: "问任何问题…" },
  { slug: "claude", title: "Claude", hint: "Anthropic", pills: ["新对话", "上传 PDF", "Projects"], input: "Ask Claude…" },
  { slug: "deepseek", title: "DeepSeek", hint: "深度思考可开关", pills: ["深度思考", "联网搜索", "拍题"], input: "输入问题…" },
  { slug: "doubao", title: "豆包", hint: "字节跳动", pills: ["语音通话", "图像生成", "智能体"], input: "有问题尽管问…" },
  { slug: "kimi", title: "Kimi", hint: "月之暗面", pills: ["上传 PDF", "深度研究", "新对话"], input: "把文件丢进来…" },
  { slug: "grok", title: "Grok", hint: "xAI", pills: ["语音", "生图", "热点"], input: "Ask Grok…" },
  { slug: "jimeng", title: "即梦 AI", hint: "图片 / 视频", pills: ["图片生成", "视频生成", "画布"], input: "用中文描述画面…" },
  { slug: "kling", title: "可灵 AI", hint: "图生视频", pills: ["图生视频", "文生视频", "作品"], input: "描述动作和运镜…" },
  { slug: "hailuo", title: "海螺视频", hint: "运镜预设", pills: ["推镜头", "摇镜", "主体参考"], input: "描述这一镜…" },
  { slug: "notion-ai", title: "Notion", hint: "Ask AI", pills: ["总结", "翻译", "续写"], input: "Ask AI…" },
  { slug: "wanxiang", title: "通义", hint: "万相 / 图像", pills: ["文生图", "图生视频", "资产"], input: "描述你想要的画面…" },
];

const desktops = [
  {
    slug: "feishu",
    title: "飞书",
    nav: ["消息", "云文档", "会议", "妙记"],
    headline: "会后打开妙记",
    input: "把待办指派给负责人",
  },
  {
    slug: "cursor",
    title: "Cursor",
    nav: ["资源管理器", "搜索", "Git", "扩展"],
    headline: "右侧是 AI 对话，不是终端",
    input: "用中文描述你想改的功能",
  },
  {
    slug: "windsurf",
    title: "Windsurf",
    nav: ["文件", "Cascade", "搜索"],
    headline: "Cascade 在右侧面板",
    input: "描述多步任务…",
  },
  {
    slug: "copilot",
    title: "VS Code",
    nav: ["资源管理器", "搜索", "扩展"],
    headline: "扩展：GitHub Copilot",
    input: "Tab 接受补全",
  },
  {
    slug: "cline",
    title: "VS Code · Cline",
    nav: ["资源管理器", "Cline", "扩展"],
    headline: "每步 diff 等你点 Approve",
    input: "描述任务…",
  },
];

for (const spec of phones) {
  const dir = path.join(root, "public", "shots", spec.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "app.svg"), phone(spec));
}
for (const spec of desktops) {
  const dir = path.join(root, "public", "shots", spec.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "app.svg"), desktop(spec));
}
console.log("app shots", phones.length + desktops.length);
