import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function icon({ slug, fill, letter, letterFill = "#ffffff" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="${esc(slug)}">
  <rect width="64" height="64" rx="14" fill="${fill}"/>
  <text x="32" y="42" text-anchor="middle" font-size="26" font-weight="700" fill="${letterFill}" font-family="ui-sans-serif, system-ui, sans-serif">${esc(letter)}</text>
</svg>
`;
}

function chrome({ url, children }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="#ffffff"/>
  <path d="M56 40 h1088 a16 16 0 0 1 16 16 v28 h-1120 v-28 a16 16 0 0 1 16 -16 z" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="none" stroke="#e4e4e7"/>
  <line x1="40" y1="84" x2="1160" y2="84" stroke="#e4e4e7"/>
  <circle cx="76" cy="62" r="7" fill="#ff5f57"/>
  <circle cx="98" cy="62" r="7" fill="#febc2e"/>
  <circle cx="120" cy="62" r="7" fill="#28c840"/>
  <rect x="420" y="48" width="360" height="28" rx="14" fill="#e4e4e7"/>
  <text x="600" y="67" text-anchor="middle" fill="#71717a" font-size="14">${esc(url)}</text>
  ${children}
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">示意图</text>
</svg>
`;
}

function siteShot({ url, title, subtitle, cta, fields }) {
  const fieldRects = (fields ?? ["邮箱", "密码"])
    .map(
      (label, i) => `
  <rect x="420" y="${268 + i * 58}" width="360" height="44" rx="8" fill="#ffffff" stroke="#e4e4e7"/>
  <text x="438" y="${296 + i * 58}" fill="#a1a1aa" font-size="15">${esc(label)}</text>`,
    )
    .join("");
  return chrome({
    url,
    children: `
  <rect x="380" y="130" width="440" height="500" rx="12" fill="#ffffff" stroke="#e4e4e7"/>
  <text x="600" y="190" text-anchor="middle" fill="#18181b" font-size="24" font-weight="700">${esc(title)}</text>
  <text x="600" y="228" text-anchor="middle" fill="#71717a" font-size="14">${esc(subtitle)}</text>
  ${fieldRects}
  <rect x="420" y="430" width="360" height="44" rx="8" fill="#18181b"/>
  <text x="600" y="458" text-anchor="middle" fill="#ffffff" font-size="16">${esc(cta)}</text>
  <text x="600" y="520" text-anchor="middle" fill="#71717a" font-size="13">Google · Apple · 手机号 均可（以实际页面为准）</text>`,
  });
}

function workspaceShot({ url, nav, headline, pills, input }) {
  const navItems = nav
    .map(
      (item, i) =>
        `<text x="76" y="${140 + i * 36}" fill="${i === 0 ? "#18181b" : "#3f3f46"}" font-size="15" font-weight="${i === 0 ? "700" : "400"}">${esc(item)}</text>`,
    )
    .join("\n  ");
  const pillItems = pills
    .map((p, i) => {
      const x = 360 + (i % 3) * 230;
      const y = 200 + Math.floor(i / 3) * 90;
      return `<rect x="${x}" y="${y}" width="210" height="70" rx="12" fill="#fafafa" stroke="#e4e4e7"/>
  <text x="${x + 20}" y="${y + 42}" fill="#18181b" font-size="15">${esc(p)}</text>`;
    })
    .join("\n  ");
  return chrome({
    url,
    children: `
  <path d="M40 84 h260 v636 h-244 a16 16 0 0 1 -16 -16 z" fill="#fafafa"/>
  <line x1="300" y1="84" x2="300" y2="720" stroke="#e4e4e7"/>
  ${navItems}
  <text x="360" y="150" fill="#18181b" font-size="22" font-weight="700">${esc(headline)}</text>
  ${pillItems}
  <rect x="360" y="560" width="740" height="96" rx="20" fill="#ffffff" stroke="#e4e4e7"/>
  <text x="384" y="616" fill="#a1a1aa" font-size="15">${esc(input)}</text>
  <rect x="1020" y="584" width="56" height="48" rx="12" fill="#18181b"/>`,
  });
}

const icons = [
  { slug: "wanxiang", fill: "#FF6A00", letter: "万" },
  { slug: "ideogram", fill: "#111111", letter: "Id" },
  { slug: "liblib", fill: "#5B4DFF", letter: "哩" },
  { slug: "kling", fill: "#111827", letter: "可" },
  { slug: "hailuo", fill: "#FF5A36", letter: "螺" },
  { slug: "pika", fill: "#F5C542", letter: "Pk", letterFill: "#18181b" },
  { slug: "feishu", fill: "#3370FF", letter: "飞" },
  { slug: "gamma", fill: "#8B5CF6", letter: "Γ" },
  { slug: "tingwu", fill: "#1677FF", letter: "听" },
  { slug: "elevenlabs", fill: "#0A0A0A", letter: "11" },
  { slug: "udio", fill: "#E85D04", letter: "Ud" },
  { slug: "mureka", fill: "#111827", letter: "Mu" },
];

const shots = {
  wanxiang: {
    url: "tongyi.aliyun.com/wanxiang",
    title: "通义万相",
    subtitle: "用阿里云账号登录即可开始文生图",
    cta: "登录并开始创作",
    nav: ["文生图", "图生视频", "资产", "API"],
    headline: "描述你想要的画面",
    pills: ["赛博朋克街道", "产品白底图", "国风插画", "16:9 壁纸", "3:4 海报", "1:1 头像"],
    input: "一只橙色的猫咪坐在窗台，下午阳光，胶片感",
  },
  ideogram: {
    url: "ideogram.ai/create",
    title: "Create an account",
    subtitle: "Google or email — then generate your first poster",
    cta: "Continue",
    nav: ["Create", "My images", "Explore", "Upgrade"],
    headline: "Describe a poster with the text in quotes",
    pills: ['"SUMMER SALE"', "Bold sans type", "High contrast", "Logo mock", "Upscale", "Magic Prompt"],
    input: 'A retro poster that says "OPEN LATE" in neon type',
  },
  liblib: {
    url: "www.liblib.art",
    title: "哩布哩布",
    subtitle: "手机号注册，在线跑模型和 LoRA",
    cta: "登录",
    nav: ["模型广场", "工作流", "在线生成", "我的"],
    headline: "从模型示例图开始，而不是空白提示词",
    pills: ["国风", "产品渲染", "真人写真", "LoRA", "工作流", "积分"],
    input: "用模型页推荐的触发词 + 你的主体",
  },
  kling: {
    url: "klingai.com",
    title: "可灵 AI",
    subtitle: "快手 / 手机号登录，先用每日灵感值",
    cta: "登录",
    nav: ["图生视频", "文生视频", "延长", "对口型"],
    headline: "上传一张干净的静帧，再写一个动作",
    pills: ["5 秒预览", "运镜：缓推", "1080p", "延长", "灵感值", "主体"],
    input: "女孩转过身向镜头挥手，镜头缓慢前推",
  },
  hailuo: {
    url: "hailuoai.com",
    title: "海螺视频",
    subtitle: "MiniMax 出品，中文界面可直连",
    cta: "开始创作",
    nav: ["创作视频", "图生视频", "主体参考", "Agent"],
    headline: "选一种运镜，不要一次写整部电影",
    pills: ["推镜头", "摇镜", "跟随", "主体参考", "5 秒", "下载"],
    input: "城市夜雨，镜头从霓虹招牌缓缓下摇到积水倒影",
  },
  pika: {
    url: "pika.art",
    title: "Welcome to Pika",
    subtitle: "Sign in with Google or Discord",
    cta: "Continue",
    nav: ["Create", "Pikaffects", "Library", "Upgrade"],
    headline: "Image to video + one effect",
    pills: ["Image to video", "Inflate", "Explode", "Hair", "5s", "Credits"],
    input: "The cat turns its head, subtle camera push-in",
  },
  feishu: {
    url: "www.feishu.cn",
    title: "飞书",
    subtitle: "手机号注册，文档和会议在同一个工作区",
    cta: "免费注册",
    nav: ["消息", "云文档", "多维表格", "会议 / 妙记"],
    headline: "会后打开妙记：转写、章节、待办",
    pills: ["智能伙伴", "周报模板", "多维表格", "妙记", "日历", "知识库"],
    input: "把这三条要点扩写成一页周报",
  },
  gamma: {
    url: "gamma.app",
    title: "Create with Gamma",
    subtitle: "Sign in and generate a deck from an outline",
    cta: "Generate",
    nav: ["Generate", "Themes", "Share", "Export"],
    headline: "Paste an outline, pick a theme",
    pills: ["Presentation", "Webpage", "Cards", "PPTX", "PDF", "Plus"],
    input: "Q3 review: revenue, three risks, next-quarter plan",
  },
  tingwu: {
    url: "tingwu.aliyun.com",
    title: "通义听悟",
    subtitle: "上传录音，得到转写和摘要",
    cta: "登录",
    nav: ["导入音视频", "实时记录", "摘要", "思维导图"],
    headline: "先看摘要和待办，再翻原文",
    pills: ["转写", "章节", "待办", "导图", "导出 MD", "多语言"],
    input: "上传会议.m4a 或网课视频",
  },
  elevenlabs: {
    url: "elevenlabs.io/app/speech-synthesis",
    title: "ElevenLabs",
    subtitle: "Text to Speech — start with a stock voice",
    cta: "Get started",
    nav: ["Text to Speech", "Voices", "Dubbing", "API"],
    headline: "Paste a paragraph, pick a voice, generate",
    pills: ["Stock voices", "Stability", "MP3", "Cloning", "Languages", "Credits"],
    input: "Welcome back. Today we will cover three things…",
  },
  udio: {
    url: "www.udio.com",
    title: "Udio",
    subtitle: "Sign in and describe a song",
    cta: "Create",
    nav: ["Create", "Library", "Extend", "Upgrade"],
    headline: "Genre + mood + topic, then pick a take",
    pills: ["Simple", "Custom lyrics", "Extend", "Instrumental", "Two takes", "Download"],
    input: "Cheerful city pop about Friday evening, warm bass",
  },
  mureka: {
    url: "www.mureka.cn",
    title: "Mureka",
    subtitle: "手机号登录，用中文歌词出歌",
    cta: "开始创作",
    nav: ["灵感模式", "自定义歌词", "分轨", "我的作品"],
    headline: "先改好韵脚，再点生成",
    pills: ["中文流行", "纯音乐", "分轨导出", "人声", "曲风", "会员"],
    input: "一首温柔的民谣，关于下班路上的晚霞",
  },
};

for (const item of icons) {
  const dest = path.join(publicDir, "icons", `${item.slug}.svg`);
  fs.writeFileSync(dest, icon(item));
}

for (const [slug, spec] of Object.entries(shots)) {
  const dir = path.join(publicDir, "shots", slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "site.svg"),
    siteShot({
      url: spec.url,
      title: spec.title,
      subtitle: spec.subtitle,
      cta: spec.cta,
    }),
  );
  fs.writeFileSync(
    path.join(dir, "workspace.svg"),
    workspaceShot({
      url: spec.url,
      nav: spec.nav,
      headline: spec.headline,
      pills: spec.pills,
      input: spec.input,
    }),
  );
}

console.log(`icons ${icons.length}, shot folders ${Object.keys(shots).length}`);
