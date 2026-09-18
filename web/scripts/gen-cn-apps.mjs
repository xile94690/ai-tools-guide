import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

function icon(letter, fill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="${fill}"/><text x="32" y="42" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="ui-sans-serif,system-ui,sans-serif">${letter}</text></svg>
`;
}

function chrome(url, title, sub, cta) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="#fff" stroke="#e4e4e7"/>
  <path d="M56 40 h1088 a16 16 0 0 1 16 16 v28 h-1120 v-28 a16 16 0 0 1 16 -16 z" fill="#f4f4f5"/>
  <line x1="40" y1="84" x2="1160" y2="84" stroke="#e4e4e7"/>
  <circle cx="76" cy="62" r="7" fill="#ff5f57"/>
  <circle cx="98" cy="62" r="7" fill="#febc2e"/>
  <circle cx="120" cy="62" r="7" fill="#28c840"/>
  <text x="600" y="67" text-anchor="middle" fill="#71717a" font-size="14">${url}</text>
  <text x="600" y="210" text-anchor="middle" fill="#18181b" font-size="28" font-weight="700">${title}</text>
  <text x="600" y="248" text-anchor="middle" fill="#71717a" font-size="16">${sub}</text>
  <rect x="420" y="300" width="360" height="48" rx="12" fill="#18181b"/>
  <text x="600" y="331" text-anchor="middle" fill="#fff" font-size="16">${cta}</text>
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">示意图</text>
</svg>
`;
}

function workspace(url, nav, headline, input) {
  const navT = nav
    .map((n, i) => `<text x="76" y="${140 + i * 36}" fill="${i === 0 ? "#18181b" : "#3f3f46"}" font-size="15" font-weight="${i === 0 ? "700" : "400"}">${n}</text>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="#fff" stroke="#e4e4e7"/>
  <path d="M56 40 h1088 a16 16 0 0 1 16 16 v28 h-1120 v-28 a16 16 0 0 1 16 -16 z" fill="#f4f4f5"/>
  <line x1="40" y1="84" x2="1160" y2="84" stroke="#e4e4e7"/>
  <circle cx="76" cy="62" r="7" fill="#ff5f57"/>
  <circle cx="98" cy="62" r="7" fill="#febc2e"/>
  <circle cx="120" cy="62" r="7" fill="#28c840"/>
  <text x="600" y="67" text-anchor="middle" fill="#71717a" font-size="14">${url}</text>
  <path d="M40 84 h260 v636 h-244 a16 16 0 0 1 -16 -16 z" fill="#fafafa"/>
  <line x1="300" y1="84" x2="300" y2="720" stroke="#e4e4e7"/>
  ${navT}
  <text x="360" y="150" fill="#18181b" font-size="20" font-weight="700">${headline}</text>
  <rect x="360" y="200" width="740" height="280" rx="12" fill="#fafafa" stroke="#e4e4e7"/>
  <rect x="360" y="560" width="740" height="96" rx="20" fill="#fff" stroke="#e4e4e7"/>
  <text x="384" y="616" fill="#a1a1aa" font-size="15">${input}</text>
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">示意图</text>
</svg>
`;
}

const apps = [
  { slug: "tongyi", letter: "通", fill: "#FF6A00", url: "tongyi.aliyun.com", title: "通义千问", sub: "淘宝 / 支付宝登录", cta: "登录", nav: ["新对话", "文档", "应用"], headline: "问一件具体的事", input: "给家长群写 80 字通知…" },
  { slug: "yuanbao", letter: "元", fill: "#07C160", url: "yuanbao.tencent.com", title: "腾讯元宝", sub: "微信登录", cta: "微信登录", nav: ["对话", "文件", "搜索"], headline: "用微信生态里的材料提问", input: "帮我改一版公众号开头…" },
  { slug: "coze", letter: "扣", fill: "#4F46E5", url: "www.coze.cn", title: "扣子", sub: "国内站，从模板创建 Bot", cta: "创建 Bot", nav: ["Bot", "知识库", "发布"], headline: "用模板，不要从空白人设开始", input: "预览：你能做什么？" },
  { slug: "workbuddy", letter: "虾", fill: "#111827", url: "www.workbuddy.cn", title: "WorkBuddy", sub: "腾讯龙虾 · 桌面办公 Agent", cta: "下载", nav: ["任务", "文件", "技能"], headline: "先下一件小事", input: "整理下载里的发票文件名…" },
  { slug: "metaso", letter: "秘", fill: "#0F766E", url: "metaso.cn", title: "秘塔 AI 搜索", sub: "带引用的资料检索", cta: "开始搜索", nav: ["搜索", "学术", "收藏"], headline: "用完整问题搜", input: "国内大模型开源许可有哪些变化…" },
  { slug: "ernie", letter: "文", fill: "#2932E1", url: "yiyan.baidu.com", title: "文心一言", sub: "百度账号登录", cta: "登录", nav: ["对话", "写作", "联网"], headline: "问能核对的问题", input: "用三条列出核心结论…" },
];

for (const a of apps) {
  fs.writeFileSync(path.join(root, "public", "icons", `${a.slug}.svg`), icon(a.letter, a.fill));
  const dir = path.join(root, "public", "shots", a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "site.svg"), chrome(a.url, a.title, a.sub, a.cta));
  fs.writeFileSync(path.join(dir, "workspace.svg"), workspace(a.url, a.nav, a.headline, a.input));
}
console.log("wrote", apps.length);
