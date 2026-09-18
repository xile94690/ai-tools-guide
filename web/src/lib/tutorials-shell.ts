import type { EnvCheck, Plan, Surface } from "./tutorial-types";
import { networkCurlCommand } from "./network";

export interface TutorialShell {
  surfaces: Surface[];
  /** Which existing `steps` array belongs to when the tool has both surfaces. */
  primary: Surface;
  plans: { zh: Plan[]; en: Plan[] };
  envCheck: { zh: EnvCheck[]; en: EnvCheck[] };
}

function webEnv(
  url: string,
  accountZh: string,
  accountEn: string,
  extraZh: EnvCheck[] = [],
  extraEn: EnvCheck[] = [],
): TutorialShell["envCheck"] {
  return {
    zh: [
      {
        label: "电脑浏览器",
        check: "用 Chrome / Edge / Safari 最新版打开，不要用微信内置浏览器。",
        pass: "能完整显示官网页面，地址栏可以输入文字。",
      },
      {
        label: "网络",
        check: "打开终端，把下面命令贴进去回车（Windows 可写成 curl.exe）。",
        command: networkCurlCommand(url),
        output: "HTTP/2 200",
        pass: "几秒内出现 HTTP 状态码（200、301、302、403 都行，说明能连上）。超时或 Could not resolve 说明现在上不了。",
      },
      {
        label: "账号",
        check: accountZh,
        pass: "能登录并看到主界面。",
      },
      ...extraZh,
    ],
    en: [
      {
        label: "Desktop browser",
        check: "Use a current Chrome, Edge or Safari window — not an in-app browser.",
        pass: "The site renders and you can type in the address bar.",
      },
      {
        label: "Network",
        check: "Open a terminal, paste this, and press Enter (on Windows you can type curl.exe).",
        command: networkCurlCommand(url),
        output: "HTTP/2 200",
        pass: "An HTTP status (200, 301, 302, or even 403) appears within a few seconds. Timeout or Could not resolve means you cannot reach it yet.",
      },
      {
        label: "Account",
        check: accountEn,
        pass: "You can sign in and see the main UI.",
      },
      ...extraEn,
    ],
  };
}

function cliEnv(
  extraZh: EnvCheck[] = [],
  extraEn: EnvCheck[] = [],
): TutorialShell["envCheck"] {
  return {
    zh: [
      {
        label: "终端",
        check: "macOS 打开「终端」；Windows 打开 PowerShell（提示符带 PS）。",
        pass: "窗口能输入命令并回车。",
      },
      {
        label: "Git",
        check: "在终端执行下面命令。",
        pass: "打印出版本号，且为 2.0 以上。",
        command: "git --version",
        output: "git version 2.39.3",
      },
      ...extraZh,
    ],
    en: [
      {
        label: "A terminal",
        check: "Terminal on macOS; PowerShell on Windows (prompt starts with PS).",
        pass: "You can type a command and press Enter.",
      },
      {
        label: "Git",
        check: "Run this in the terminal.",
        pass: "It prints a 2.x version or newer.",
        command: "git --version",
        output: "git version 2.39.3",
      },
      ...extraEn,
    ],
  };
}

const nodeCheckZh: EnvCheck = {
  label: "Node.js",
  check: "在终端执行下面命令。",
  pass: "版本 ≥ 18（部分工具要 20/22，步骤里会再写）。",
  command: "node -v",
  output: "v22.11.0",
};
const nodeCheckEn: EnvCheck = {
  label: "Node.js",
  check: "Run this in the terminal.",
  pass: "v18+ (some tools need 20/22 — the steps say so).",
  command: "node -v",
  output: "v22.11.0",
};

export const tutorialShells: Record<string, TutorialShell> = {
  chatgpt: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "$0", includes: "日常对话、传文件、有限额度" },
        { name: "Plus", price: "$20/月", includes: "更强模型、更高额度、优先排队", highlight: true },
        { name: "Pro", price: "更高档", includes: "最强模型与更高上限，以官网为准" },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Daily chat, files, capped usage" },
        { name: "Plus", price: "$20/mo", includes: "Stronger models and higher caps", highlight: true },
        { name: "Pro", price: "Higher tier", includes: "Highest models and limits — see the site" },
      ],
    },
    envCheck: webEnv(
      "chatgpt.com",
      "准备邮箱或 Google / Apple 账号。不要用 +86 收验证码。",
      "Email or Google/Apple. +86 SMS is not supported.",
      [
        {
          label: "支付（可后补）",
          check: "免费档先跳过。若开 Plus，需要境外信用卡或虚拟卡。",
          pass: "能登录即可开始；付费不是第一步。",
        },
      ],
      [
        {
          label: "Payment (later)",
          check: "Skip on Free. Plus needs an international or virtual card.",
          pass: "Signed in is enough to start.",
        },
      ],
    ),
  },
  claude: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "$0", includes: "对话、传文件，5 小时滚动额度" },
        { name: "Pro", price: "$20/月", includes: "更高额度、更强模型", highlight: true },
        { name: "Max / Team", price: "更高档", includes: "团队与更高上限，以官网为准" },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Chat and files, 5-hour rolling cap" },
        { name: "Pro", price: "$20/mo", includes: "Higher limits, stronger models", highlight: true },
        { name: "Max / Team", price: "Higher tier", includes: "See Anthropic pricing" },
      ],
    },
    envCheck: webEnv(
      "claude.ai",
      "邮箱或 Google。注册常要境外手机号验证。",
      "Email or Google. Phone verify often needs a non-+86 number.",
    ),
  },
  deepseek: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "网页 / 对话", price: "免费", includes: "chat.deepseek.com 聊天", highlight: true },
        { name: "API", price: "按量，很便宜", includes: "platform.deepseek.com，写程序才需要" },
      ],
      en: [
        { name: "Web chat", price: "Free", includes: "chat.deepseek.com", highlight: true },
        { name: "API", price: "Cheap metered", includes: "platform.deepseek.com for developers" },
      ],
    },
    envCheck: webEnv(
      "chat.deepseek.com",
      "国内手机号收验证码即可。",
      "A mainland phone number for SMS is enough.",
    ),
  },
  doubao: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "个人", price: "免费为主", includes: "网页对话、基础技能", highlight: true },
        { name: "会员", price: "以页面为准", includes: "部分生成能力可能另计次数" },
      ],
      en: [
        { name: "Personal", price: "Mostly free", includes: "Web chat and basic skills", highlight: true },
        { name: "Membership", price: "See the site", includes: "Some generation features are metered" },
      ],
    },
    envCheck: webEnv("doubao.com", "手机号或抖音账号。", "Phone number or Douyin account."),
  },
  kimi: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "$0", includes: "长文阅读、日常对话", highlight: true },
        { name: "会员", price: "以官网为准", includes: "高峰加速、更高额度" },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Long docs and daily chat", highlight: true },
        { name: "Membership", price: "See the site", includes: "Speed at peak hours, higher caps" },
      ],
    },
    envCheck: webEnv("kimi.moonshot.cn", "国内手机号。", "A mainland phone number."),
  },
  grok: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "$0", includes: "日常对话、有限额度" },
        { name: "SuperGrok", price: "订阅", includes: "更高额度与更新模型", highlight: true },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Daily chat with caps" },
        { name: "SuperGrok", price: "Subscription", includes: "Higher caps and newer models", highlight: true },
      ],
    },
    envCheck: webEnv(
      "grok.com",
      "X 或邮箱。电脑网络必须能打开 grok.com。",
      "X or email. The computer must reach grok.com.",
    ),
  },
  midjourney: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "Basic", price: "$10/月起", includes: "有限次数，无免费档", highlight: true },
        { name: "Standard / Pro", price: "更高档", includes: "更多放松模式时长，以官网为准" },
      ],
      en: [
        { name: "Basic", price: "From $10/mo", includes: "No free tier", highlight: true },
        { name: "Standard / Pro", price: "Higher", includes: "More relaxed-mode hours" },
      ],
    },
    envCheck: webEnv("midjourney.com", "Discord 或 Google 账号，并准备好付费。", "Discord or Google, and a payment method."),
  },
  jimeng: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费额度", price: "每日积分", includes: "练手够用", highlight: true },
        { name: "会员", price: "以官网为准", includes: "更多积分、去水印等" },
      ],
      en: [
        { name: "Free credits", price: "Daily", includes: "Enough to practise", highlight: true },
        { name: "Membership", price: "See the site", includes: "More credits, watermark options" },
      ],
    },
    envCheck: webEnv("jimeng.jianying.com", "抖音或手机号。", "Douyin or phone number."),
  },
  wanxiang: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "网页额度", price: "免费试用", includes: "通义网页 / App 积分", highlight: true },
        { name: "百炼 API", price: "按张 / 按秒", includes: "开发者按量，以控制台为准" },
      ],
      en: [
        { name: "Web credits", price: "Trial", includes: "Tongyi web credits", highlight: true },
        { name: "Model Studio API", price: "Per image / second", includes: "Metered for developers" },
      ],
    },
    envCheck: webEnv("tongyi.aliyun.com/wanxiang", "阿里云 / 淘宝 / 支付宝账号。", "An Alibaba / Taobao / Alipay account."),
  },
  ideogram: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "有限积分", includes: "够试海报文字" },
        { name: "Plus", price: "订阅", includes: "更高积分", highlight: true },
      ],
      en: [
        { name: "Free", price: "Limited credits", includes: "Enough to test text-in-image" },
        { name: "Plus", price: "Subscription", includes: "More credits", highlight: true },
      ],
    },
    envCheck: webEnv("ideogram.ai", "Google 或邮箱，电脑需能访问外网。", "Google or email, on a network that reaches ideogram.ai."),
  },
  liblib: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "体验积分", price: "注册赠送", includes: "在线生成", highlight: true },
        { name: "充值", price: "按积分", includes: "以站点为准" },
      ],
      en: [
        { name: "Starter credits", price: "On signup", includes: "Hosted generate", highlight: true },
        { name: "Top-up", price: "Credits", includes: "See the site" },
      ],
    },
    envCheck: webEnv("www.liblib.art", "国内手机号。", "A mainland phone number."),
  },
  runway: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费试用", price: "新号积分", includes: "几个短镜头" },
        { name: "Standard", price: "$12/月起", includes: "正经项目建议订阅", highlight: true },
      ],
      en: [
        { name: "Trial", price: "New-account credits", includes: "A few short clips" },
        { name: "Standard", price: "From $12/mo", includes: "For real projects", highlight: true },
      ],
    },
    envCheck: webEnv("runwayml.com", "Google 或邮箱，需外网。", "Google or email, international access."),
  },
  kling: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "非会员", price: "每日灵感值", includes: "练手短镜头" },
        { name: "黄金会员", price: "约 ¥58/月档", includes: "更多灵感值，以会员页为准", highlight: true },
        { name: "铂金 / 更高", price: "更高档", includes: "商用、去水印等看条款" },
      ],
      en: [
        { name: "Free", price: "Daily credits", includes: "Short practice clips" },
        { name: "Gold", price: "See membership page", includes: "More credits", highlight: true },
        { name: "Platinum+", price: "Higher", includes: "Commercial / no-watermark per terms" },
      ],
    },
    envCheck: webEnv("klingai.com", "快手或手机号。", "Kuaishou or phone number."),
  },
  hailuo: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "试用", price: "新号额度", includes: "先跑一条 5 秒", highlight: true },
        { name: "会员", price: "以官网为准", includes: "更多条数与加速" },
      ],
      en: [
        { name: "Trial", price: "New-account quota", includes: "One 5-second test", highlight: true },
        { name: "Membership", price: "See the site", includes: "More clips and speed" },
      ],
    },
    envCheck: webEnv("hailuoai.com", "手机号。", "Phone number."),
  },
  pika: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "试用", price: "免费积分", includes: "试特效" },
        { name: "订阅", price: "以官网为准", includes: "更多条数", highlight: true },
      ],
      en: [
        { name: "Trial", price: "Free credits", includes: "Try effects" },
        { name: "Paid", price: "See the site", includes: "More generations", highlight: true },
      ],
    },
    envCheck: webEnv("pika.art", "Google 或 Discord，需外网。", "Google or Discord, international access."),
  },
  cursor: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "Hobby", price: "免费", includes: "每月少量 AI 额度" },
        { name: "Pro", price: "$20/月", includes: "日常开发够用", highlight: true },
      ],
      en: [
        { name: "Hobby", price: "Free", includes: "A small monthly AI quota" },
        { name: "Pro", price: "$20/mo", includes: "Fine for daily coding", highlight: true },
      ],
    },
    envCheck: {
      zh: [
        {
          label: "系统",
          check: "macOS 12+ / Windows 10 64 位 / 主流 Linux。关于本机或设置 → 系统 看版本。",
          pass: "版本号满足即可，Intel 和 Apple Silicon 都能装。",
        },
        {
          label: "网络",
          check: "浏览器打开 cursor.com",
          pass: "能进入下载和登录页。",
        },
        {
          label: "账号",
          check: "GitHub / Google / 邮箱，免费即可先用。",
          pass: "能在 Cursor 窗口里登录成功。",
        },
        {
          label: "Git（建议）",
          check: "Agent 面板用 Git 显示 diff。可后装。",
          pass: "能打印 2.x 版本。",
          command: "git --version",
          output: "git version 2.39.3",
        },
      ],
      en: [
        {
          label: "OS",
          check: "macOS 12+ / 64-bit Windows 10 / mainstream Linux.",
          pass: "Version is new enough. Intel and Apple Silicon both work.",
        },
        {
          label: "Network",
          check: "Open cursor.com",
          pass: "Download and sign-in pages load.",
        },
        {
          label: "Account",
          check: "GitHub, Google or email. Free is enough to start.",
          pass: "You can sign in inside the Cursor window.",
        },
        {
          label: "Git (recommended)",
          check: "The agent panel uses Git for diffs. Can install later.",
          pass: "Prints a 2.x version.",
          command: "git --version",
          output: "git version 2.39.3",
        },
      ],
    },
  },
  copilot: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "学生 / 教师", price: "认证后免费", includes: "GitHub Education", highlight: true },
        { name: "Pro", price: "约 $10/月", includes: "个人开发者" },
        { name: "Business", price: "按席", includes: "公司账号由管理员开" },
      ],
      en: [
        { name: "Student / teacher", price: "Free after verify", includes: "GitHub Education", highlight: true },
        { name: "Pro", price: "About $10/mo", includes: "Individual developers" },
        { name: "Business", price: "Per seat", includes: "Admin-controlled" },
      ],
    },
    envCheck: {
      zh: [
        {
          label: "VS Code 或 Cursor",
          check: "已安装其中之一，能打开窗口。",
          pass: "启动后能看到左侧活动栏。",
        },
        {
          label: "GitHub 账号",
          check: "浏览器打开 github.com 能登录。",
          pass: "账号可开通 Copilot 或已是学生认证。",
        },
      ],
      en: [
        {
          label: "VS Code or Cursor",
          check: "One of them is installed and opens.",
          pass: "You can see the activity bar.",
        },
        {
          label: "GitHub account",
          check: "You can sign in at github.com.",
          pass: "Copilot can be enabled, or Education is verified.",
        },
      ],
    },
  },
  "grok-build": {
    surfaces: ["cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "SuperGrok / X Premium+", price: "订阅（无免费 CLI）", includes: "目前早期 beta 需要订阅", highlight: true },
      ],
      en: [
        { name: "SuperGrok / X Premium+", price: "Subscription (no free CLI)", includes: "Early beta requires a plan", highlight: true },
      ],
    },
    envCheck: cliEnv(
      [
        {
          label: "订阅",
          check: "登录 x.ai 账号，确认是 SuperGrok 或 X Premium+。",
          pass: "没有订阅时，装完也登录不了。",
        },
        {
          label: "网络",
          check: "终端能访问 x.ai。",
          pass: "浏览器能打开 x.ai/cli。",
        },
      ],
      [
        {
          label: "Subscription",
          check: "Sign in at x.ai with SuperGrok or X Premium+.",
          pass: "Install will not log in without a plan.",
        },
        {
          label: "Network",
          check: "The machine can reach x.ai.",
          pass: "x.ai/cli loads in a browser.",
        },
      ],
    ),
  },
  opencode: {
    surfaces: ["desktop", "cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "软件", price: "开源免费", includes: "TUI / 桌面端 / IDE 插件", highlight: true },
        { name: "模型", price: "自付 API 或 Zen", includes: "按你选的服务商结算" },
      ],
      en: [
        { name: "App", price: "Open source", includes: "TUI, desktop, IDE", highlight: true },
        { name: "Models", price: "Your API or Zen", includes: "Pay the provider you connect" },
      ],
    },
    envCheck: cliEnv(
      [nodeCheckZh, { label: "API Key", check: "准备好 Anthropic / OpenAI / DeepSeek 等其中一家的 Key，或 OpenCode Zen。", pass: "/connect 能保存成功。" }],
      [nodeCheckEn, { label: "API key", check: "Have a key from Anthropic, OpenAI, DeepSeek, or OpenCode Zen.", pass: "/connect saves without 401." }],
    ),
  },
  "command-code": {
    surfaces: ["cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "免费档", price: "有限额度", includes: "先试用" },
        { name: "付费档", price: "以官网为准", includes: "更高额度", highlight: true },
      ],
      en: [
        { name: "Free", price: "Limited", includes: "Try it first" },
        { name: "Paid", price: "See the site", includes: "Higher limits", highlight: true },
      ],
    },
    envCheck: cliEnv([nodeCheckZh], [nodeCheckEn]),
  },
  "claude-code": {
    surfaces: ["cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "Pro", price: "$20/月起", includes: "个人够用", highlight: true },
        { name: "Max / Team", price: "更高档", includes: "更长任务、团队" },
        { name: "API Key", price: "按量", includes: "Console 计费，和订阅二选一" },
      ],
      en: [
        { name: "Pro", price: "From $20/mo", includes: "Fine for individuals", highlight: true },
        { name: "Max / Team", price: "Higher", includes: "Longer tasks, teams" },
        { name: "API key", price: "Metered", includes: "Console billing instead of a seat" },
      ],
    },
    envCheck: cliEnv(
      [
        {
          label: "订阅或 API Key",
          check: "免费版 Claude **不能**用 Claude Code。准备 Pro/Max/Team 或 Console Key。",
          pass: "登录页能选订阅账号或粘贴 Key。",
        },
        {
          label: "网络",
          check: "能打开 claude.ai 和 api.anthropic.com。",
          pass: "浏览器能进 Claude 登录页。",
        },
      ],
      [
        {
          label: "Plan or API key",
          check: "The free Claude plan cannot run Claude Code.",
          pass: "The login screen accepts a plan account or a Console key.",
        },
        {
          label: "Network",
          check: "claude.ai and api.anthropic.com are reachable.",
          pass: "The Claude login page loads.",
        },
      ],
    ),
  },
  codex: {
    surfaces: ["desktop", "cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "ChatGPT Plus / Pro", price: "含在订阅内", includes: "登录 ChatGPT 即可用额度", highlight: true },
        { name: "API Key", price: "按量", includes: "不用订阅、按 token 付" },
      ],
      en: [
        { name: "ChatGPT Plus / Pro", price: "Included", includes: "Sign in with ChatGPT", highlight: true },
        { name: "API key", price: "Metered", includes: "Pay per token without a seat" },
      ],
    },
    envCheck: cliEnv(
      [
        {
          label: "ChatGPT 订阅或 API Key",
          check: "免费 ChatGPT **没有** Codex 额度。准备 Plus/Pro 或 OpenAI API Key。",
          pass: "能在 chatgpt.com 看到付费档，或 Key 能调通。",
        },
        nodeCheckZh,
      ],
      [
        {
          label: "ChatGPT plan or API key",
          check: "Free ChatGPT has no Codex quota.",
          pass: "You see a paid plan on chatgpt.com, or the key works.",
        },
        nodeCheckEn,
      ],
    ),
  },
  "gemini-cli": {
    surfaces: ["cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "个人 Google 账号", price: "免费额度", includes: "每天约 1000 次请求", highlight: true },
        { name: "API Key", price: "按量", includes: "额度不够再换 Key" },
      ],
      en: [
        { name: "Personal Google account", price: "Free quota", includes: "About 1000 requests/day", highlight: true },
        { name: "API key", price: "Metered", includes: "Switch when the free quota is gone" },
      ],
    },
    envCheck: cliEnv(
      [nodeCheckZh, { label: "Google 账号", check: "浏览器能登录 Google。", pass: "首次 gemini 能走完授权。" }],
      [nodeCheckEn, { label: "Google account", check: "You can sign in to Google in a browser.", pass: "First-run gemini finishes OAuth." }],
    ),
  },
  windsurf: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "$0", includes: "可先用", highlight: true },
        { name: "Pro", price: "订阅", includes: "更高额度，以官网为准" },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Start here", highlight: true },
        { name: "Pro", price: "Subscription", includes: "Higher limits — see the site" },
      ],
    },
    envCheck: {
      zh: [
        { label: "系统", check: "Windows / macOS / Linux 能装官方安装包。", pass: "下载页能选到你的系统。" },
        { label: "网络", check: "打开 windsurf.com", pass: "能下载安装包并登录。" },
      ],
      en: [
        { label: "OS", check: "Windows / macOS / Linux installer from the site.", pass: "Your OS is listed on the download page." },
        { label: "Network", check: "Open windsurf.com", pass: "You can download and sign in." },
      ],
    },
  },
  cline: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "插件", price: "开源免费", includes: "VS Code 扩展本身不收费", highlight: true },
        { name: "模型", price: "自付 API 或官方订阅", includes: "按服务商计费" },
      ],
      en: [
        { name: "Extension", price: "Open source", includes: "The VS Code add-on is free", highlight: true },
        { name: "Models", price: "Your API or Cline plan", includes: "Pay the provider" },
      ],
    },
    envCheck: {
      zh: [
        { label: "VS Code", check: "已安装并能打开。", pass: "扩展商店能搜索 Cline。" },
        { label: "API Key 或 Cline 账号", check: "准备一家模型的 Key，或 Cline 订阅。", pass: "面板里能选中服务商并保存。" },
      ],
      en: [
        { label: "VS Code", check: "Installed and opens.", pass: "The marketplace finds Cline." },
        { label: "API key or Cline account", check: "A provider key, or a Cline plan.", pass: "The panel saves a provider." },
      ],
    },
  },
  aider: {
    surfaces: ["cli"],
    primary: "cli",
    plans: {
      zh: [
        { name: "软件", price: "开源免费", includes: "终端结对编程", highlight: true },
        { name: "模型", price: "自付 API", includes: "DeepSeek / Claude / GPT 均可" },
      ],
      en: [
        { name: "App", price: "Open source", includes: "Terminal pair programming", highlight: true },
        { name: "Models", price: "Your API", includes: "DeepSeek, Claude, GPT, …" },
      ],
    },
    envCheck: cliEnv(
      [
        {
          label: "API Key",
          check: "准备好至少一个模型服务商的 Key。",
          pass: "aider --model … 启动时不再报缺 Key。",
        },
      ],
      [
        {
          label: "API key",
          check: "Have at least one provider key.",
          pass: "aider --model … starts without a missing-key error.",
        },
      ],
    ),
  },
  "notion-ai": {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "Notion 免费档", price: "$0", includes: "笔记本身" },
        { name: "AI 附加", price: "约 $10/月", includes: "Workspace 计费", highlight: true },
      ],
      en: [
        { name: "Notion free", price: "$0", includes: "The notes app" },
        { name: "AI add-on", price: "About $10/mo", includes: "Billed per workspace", highlight: true },
      ],
    },
    envCheck: webEnv("notion.so", "邮箱或 Google。", "Email or Google."),
  },
  feishu: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "个人 / 免费", price: "$0", includes: "小团队试用", highlight: true },
        { name: "商业版", price: "按席", includes: "管理、高级权限" },
      ],
      en: [
        { name: "Free", price: "$0", includes: "Small-team trial", highlight: true },
        { name: "Business", price: "Per seat", includes: "Admin and extra rights" },
      ],
    },
    envCheck: {
      zh: [
        { label: "电脑", check: "从 feishu.cn 下载桌面端（Win / Mac）。", pass: "能打开飞书窗口并扫码登录。" },
        { label: "账号", check: "手机号，或管理员发来的企业邀请。", pass: "进的是团队那个租户，不是自己新注册的空企业。" },
      ],
      en: [
        { label: "Computer", check: "Download the desktop app from feishu.cn.", pass: "The window opens and QR login works." },
        { label: "Account", check: "Phone number, or an admin invite.", pass: "You joined the team tenant, not a new empty org." },
      ],
    },
  },
  gamma: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "有限次数", includes: "先出一份初稿" },
        { name: "Plus", price: "订阅", includes: "去品牌、更高额度", highlight: true },
      ],
      en: [
        { name: "Free", price: "Limited gens", includes: "One draft" },
        { name: "Plus", price: "Subscription", includes: "No branding, more gens", highlight: true },
      ],
    },
    envCheck: webEnv("gamma.app", "Google 或邮箱，需外网。", "Google or email, international access."),
  },
  tingwu: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费时长", price: "新用户赠送", includes: "先转一场会", highlight: true },
        { name: "按量 / 套餐", price: "以官网为准", includes: "高校有时有加量" },
      ],
      en: [
        { name: "Free hours", price: "New accounts", includes: "One meeting", highlight: true },
        { name: "Packs", price: "See the site", includes: "Education extras sometimes" },
      ],
    },
    envCheck: webEnv("tingwu.aliyun.com", "阿里云或手机号。准备一份清晰录音。", "Alibaba or phone account, plus a clean recording."),
  },
  suno: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费试用", price: "新号点数", includes: "先出一首" },
        { name: "Pro", price: "$10/月起", includes: "更多首、商用看条款", highlight: true },
      ],
      en: [
        { name: "Trial", price: "New-account credits", includes: "One song" },
        { name: "Pro", price: "From $10/mo", includes: "More songs; commercial use per terms", highlight: true },
      ],
    },
    envCheck: webEnv("suno.com", "邮箱或 Discord，需外网。", "Email or Discord, international access."),
  },
  elevenlabs: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "字符额度", includes: "试几段口播" },
        { name: "Starter / Creator", price: "订阅", includes: "更多字符、克隆看档位", highlight: true },
      ],
      en: [
        { name: "Free", price: "Character cap", includes: "A few voiceovers" },
        { name: "Starter / Creator", price: "Subscription", includes: "More characters; cloning depends on tier", highlight: true },
      ],
    },
    envCheck: webEnv("elevenlabs.io", "邮箱或 Google，需外网。只克隆你有权使用的声音。", "Email or Google. Only clone a voice you own."),
  },
  udio: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "有限次数", includes: "先对比 Suno" },
        { name: "订阅", price: "以官网为准", includes: "更高额度", highlight: true },
      ],
      en: [
        { name: "Free", price: "Limited gens", includes: "Compare with Suno" },
        { name: "Paid", price: "See the site", includes: "Higher caps", highlight: true },
      ],
    },
    envCheck: webEnv("www.udio.com", "Google 或邮箱，需外网。", "Google or email, international access."),
  },
  tongyi: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "网页对话", price: "免费额度", includes: "日常问答", highlight: true },
        { name: "百炼 API", price: "按量", includes: "开发者用" },
      ],
      en: [
        { name: "Web chat", price: "Free quota", includes: "Daily Q&A", highlight: true },
        { name: "API", price: "Metered", includes: "For developers" },
      ],
    },
    envCheck: {
      zh: [
        { label: "网络", check: "打开 tongyi.aliyun.com。", pass: "能进入登录页。" },
        { label: "账号", check: "淘宝 / 支付宝 / 阿里云。", pass: "能登录进对话。" },
      ],
      en: [
        { label: "Network", check: "Open tongyi.aliyun.com.", pass: "Sign-in loads." },
        { label: "Account", check: "Taobao, Alipay or Alibaba Cloud.", pass: "You reach chat." },
      ],
    },
  },
  yuanbao: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "免费", price: "有额度", includes: "日常对话", highlight: true },
        { name: "会员", price: "以页面为准", includes: "更高额度" },
      ],
      en: [
        { name: "Free", price: "Quota", includes: "Daily chat", highlight: true },
        { name: "Member", price: "See the site", includes: "Higher caps" },
      ],
    },
    envCheck: {
      zh: [
        { label: "网络", check: "打开 yuanbao.tencent.com。", pass: "能进官网。" },
        { label: "账号", check: "微信。", pass: "能授权登录。" },
      ],
      en: [
        { label: "Network", check: "Open yuanbao.tencent.com.", pass: "The site loads." },
        { label: "Account", check: "WeChat.", pass: "OAuth finishes." },
      ],
    },
  },
  coze: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "个人", price: "免费额度", includes: "搭 Bot、预览", highlight: true },
        { name: "API", price: "按量", includes: "发布到业务里" },
      ],
      en: [
        { name: "Personal", price: "Free quota", includes: "Build and preview", highlight: true },
        { name: "API", price: "Metered", includes: "Publish into a product" },
      ],
    },
    envCheck: {
      zh: [
        { label: "网络", check: "打开 coze.cn。", pass: "国内站，不是 coze.com。" },
        { label: "账号", check: "抖音或手机号。", pass: "能进工作区。" },
      ],
      en: [
        { label: "Network", check: "Open coze.cn.", pass: "China site, not coze.com." },
        { label: "Account", check: "Douyin or phone.", pass: "Workspace opens." },
      ],
    },
  },
  workbuddy: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "体验积分", price: "新用户常送", includes: "先下一件小事", highlight: true },
        { name: "套餐", price: "Credits", includes: "以官网为准" },
      ],
      en: [
        { name: "Trial credits", price: "Often included", includes: "One small job", highlight: true },
        { name: "Plan", price: "Credits", includes: "See the site" },
      ],
    },
    envCheck: {
      zh: [
        { label: "电脑", check: "Windows / macOS 能装桌面端。", pass: "窗口能打开。" },
        { label: "账号", check: "微信登录。", pass: "能进工作台。" },
        { label: "权限", check: "先只授权桌面 / 文档 / 下载。", pass: "不要一上来全盘。" },
      ],
      en: [
        { label: "Computer", check: "Windows / macOS desktop app.", pass: "The window opens." },
        { label: "Account", check: "WeChat.", pass: "You reach the bench." },
        { label: "Permissions", check: "Grant Desktop/Documents/Downloads only.", pass: "Not the whole disk." },
      ],
    },
  },
  metaso: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "基础搜索", price: "免费额度", includes: "带引用", highlight: true },
        { name: "高级", price: "以官网为准", includes: "更多次数" },
      ],
      en: [
        { name: "Basic search", price: "Free quota", includes: "With citations", highlight: true },
        { name: "Plus", price: "See the site", includes: "More queries" },
      ],
    },
    envCheck: {
      zh: [
        { label: "网络", check: "打开 metaso.cn。", pass: "能进搜索框。" },
      ],
      en: [
        { label: "Network", check: "Open metaso.cn.", pass: "The search box loads." },
      ],
    },
  },
  ernie: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "基础对话", price: "免费", includes: "日常问答", highlight: true },
        { name: "积分", price: "以百度页为准", includes: "更高模型" },
      ],
      en: [
        { name: "Basic chat", price: "Free", includes: "Daily Q&A", highlight: true },
        { name: "Credits", price: "See Baidu", includes: "Stronger models" },
      ],
    },
    envCheck: {
      zh: [
        { label: "网络", check: "打开 yiyan.baidu.com。", pass: "能进登录页。" },
        { label: "账号", check: "百度账号。", pass: "能进入对话。" },
      ],
      en: [
        { label: "Network", check: "Open yiyan.baidu.com.", pass: "Sign-in loads." },
        { label: "Account", check: "Baidu.", pass: "Chat opens." },
      ],
    },
  },
  trae: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "国内版个人", price: "免费", includes: "国产模型，可能排队", highlight: true },
        { name: "自定义模型", price: "自付 API", includes: "在设置里填 Key" },
      ],
      en: [
        { name: "China personal", price: "Free", includes: "Local models, queues possible", highlight: true },
        { name: "Custom model", price: "Your API", includes: "Paste a key in Settings" },
      ],
    },
    envCheck: {
      zh: [
        { label: "系统", check: "Windows 10+ 或 macOS 10.15+。", pass: "能安装官网安装包。" },
        { label: "网络", check: "打开 trae.cn。", pass: "能进入国内版下载页，不是 trae.ai。" },
        { label: "账号", check: "大陆手机号或掘金账号。", pass: "能收验证码并登录。" },
      ],
      en: [
        { label: "OS", check: "Windows 10+ or macOS 10.15+.", pass: "The installer runs." },
        { label: "Network", check: "Open trae.cn.", pass: "You see the China download page, not trae.ai." },
        { label: "Account", check: "A mainland phone number or Juejin.", pass: "You can sign in." },
      ],
    },
  },
  codebuddy: {
    surfaces: ["desktop", "cli"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "体验版", price: "有限积分", includes: "常不含 CLI" },
        { name: "个人标准档", price: "按月人民币", includes: "IDE + 更高积分，以官网为准", highlight: true },
      ],
      en: [
        { name: "Trial", price: "Limited credits", includes: "CLI often locked" },
        { name: "Personal", price: "RMB / month", includes: "IDE + more credits", highlight: true },
      ],
    },
    envCheck: {
      zh: [
        { label: "系统", check: "Windows 10+ / macOS 11+。", pass: "IDE 能安装启动。" },
        { label: "网络", check: "打开 codebuddy.cn。", pass: "能进入国内站，不是 codebuddy.ai。" },
        { label: "账号", check: "微信或手机号。", pass: "能完成国内站登录。" },
        {
          label: "Node.js（仅 CLI）",
          check: "要用终端版再装。",
          pass: "v18.20 以上。",
          command: "node -v",
          output: "v22.11.0",
        },
      ],
      en: [
        { label: "OS", check: "Windows 10+ / macOS 11+.", pass: "The IDE launches." },
        { label: "Network", check: "Open codebuddy.cn.", pass: "China site, not codebuddy.ai." },
        { label: "Account", check: "WeChat or phone.", pass: "Chinese-site login succeeds." },
        {
          label: "Node.js (CLI only)",
          check: "Only if you want the terminal app.",
          pass: "v18.20+.",
          command: "node -v",
          output: "v22.11.0",
        },
      ],
    },
  },
  "cc-switch": {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "软件", price: "开源免费", includes: "桌面端切换配置", highlight: true },
        { name: "模型", price: "自付 API", includes: "官方控制台或中转按量" },
      ],
      en: [
        { name: "App", price: "Open source", includes: "Desktop profile switcher", highlight: true },
        { name: "Models", price: "Your API", includes: "Official console or a gateway" },
      ],
    },
    envCheck: {
      zh: [
        {
          label: "电脑",
          check: "能安装 GitHub Releases 里的 dmg / 安装包。",
          pass: "能打开 CC Switch 窗口。",
        },
        {
          label: "至少一把 API Key",
          check: "Anthropic / OpenAI / 中转控制台能复制 Key。",
          pass: "Key 以 sk- 或官方格式开头，完整无空格。",
        },
        {
          label: "对应 CLI 已装",
          check: "要切谁就先装谁：claude / codex / gemini / opencode。",
          pass: "终端里能跑对应命令，或至少已经按本站教程装过。",
        },
      ],
      en: [
        {
          label: "Computer",
          check: "You can install the GitHub Releases build.",
          pass: "The CC Switch window opens.",
        },
        {
          label: "At least one API key",
          check: "Copy a key from Anthropic, OpenAI, or a gateway.",
          pass: "The key is complete, no extra spaces.",
        },
        {
          label: "The CLI is installed",
          check: "Install claude / codex / gemini / opencode first.",
          pass: "The matching command runs, or you followed that tool’s guide.",
        },
      ],
    },
  },
  mureka: {
    surfaces: ["desktop"],
    primary: "desktop",
    plans: {
      zh: [
        { name: "试用", price: "免费次数", includes: "先出一首中文歌", highlight: true },
        { name: "会员", price: "以官网为准", includes: "分轨等能力看档位" },
      ],
      en: [
        { name: "Trial", price: "Free gens", includes: "One Chinese song", highlight: true },
        { name: "Membership", price: "See the site", includes: "Stems depend on the plan" },
      ],
    },
    envCheck: webEnv("www.mureka.cn", "国内手机号。", "A mainland phone number."),
  },
};
