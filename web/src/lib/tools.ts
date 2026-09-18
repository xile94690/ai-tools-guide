export type Region = "domestic" | "global" | "both";

export interface Faq {
  q: string;
  a: string;
}

export interface Tool {
  slug: string;
  name: string;
  category: string;
  region: Region;
  pricingZh: string;
  pricingEn: string;
  website: string;
  tags: string[];
  keywords?: string[];
  featured?: boolean;
  /** Can be configured through CC Switch (API provider profiles). */
  ccSwitch?: boolean;
  /** Chat/desktop product whose coding CLI can be driven via CC Switch. */
  companionCli?: string;
  related?: string[];
  taglineZh: string;
  taglineEn: string;
  descZh: string;
  descEn: string;
  installZh: string[];
  installEn: string[];
  usageZh: string[];
  usageEn: string[];
  faqZh: Faq[];
  faqEn: Faq[];
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "chat",
    region: "global",
    pricingZh: "免费版 + Plus $20/月",
    pricingEn: "Free + Plus $20/mo",
    website: "https://chat.openai.com",
    tags: ["对话", "写作", "问答"],
    featured: true,
    companionCli: "codex",
    related: ["claude", "kimi", "codex"],
    taglineZh: "最出名的 AI 对话助手，写文案、查资料、学知识都行",
    taglineEn: "The most famous AI chat assistant for writing and Q&A",
    descZh:
      "ChatGPT 由 OpenAI 出品，是目前生态最成熟的对话大模型。插件、GPTs、联网搜索一应俱全，适合作为第一个入门的 AI 工具。",
    descEn:
      "ChatGPT by OpenAI is the most mature conversational AI, with plugins, GPTs and web browsing. A great first AI tool to learn.",
    installZh: [
      "打开官网 chat.openai.com，点击 Sign up 注册账号（需邮箱验证）",
      "国内网络无法直连，准备好可访问外网的网络环境",
      "手机端可在 App Store / Google Play 搜索 ChatGPT 下载官方 App",
      "登录后即可在网页端直接对话，无需安装",
    ],
    installEn: [
      "Go to chat.openai.com and click Sign up with your email",
      "Verify your email and log in",
      "Download the official app from the App Store / Google Play",
      "Start chatting right in the browser, no install needed",
    ],
    usageZh: [
      "在输入框直接提问，越具体回答越好：带上背景、目标和格式要求",
      "用「继续」「换一种说法」「举个例子」来追问和优化回答",
      "左侧可创建 GPTs，定制自己的专属助手（如翻译官、面试教练）",
      "Plus 用户可开启联网搜索和文件上传，做实时资料调研",
    ],
    usageEn: [
      "Ask directly, being specific: include background, goal and format",
      "Follow up with 'continue', 'rephrase' or 'give an example'",
      "Create custom GPTs from the sidebar for repeat tasks",
      "Plus users can enable web browsing and file uploads",
    ],
    faqZh: [
      { q: "国内手机号能注册吗？", a: "目前 OpenAI 不支持 +86 手机号，需用境外手机号或邮箱+验证方式，可留意官方最新政策。" },
      { q: "免费版和 Plus 差在哪？", a: "Plus 响应更快、可用 GPT-4 级模型和联网功能，重度用户建议开 Plus。" },
    ],
    faqEn: [
      { q: "Is it free?", a: "Yes, the free tier covers daily chat. Plus ($20/mo) is faster with stronger models." },
      { q: "Can it browse the web?", a: "Paid plans support web browsing and file uploads for research tasks." },
    ],
  },
  {
    slug: "claude",
    name: "Claude",
    category: "chat",
    region: "global",
    pricingZh: "免费版 + Pro $20/月",
    pricingEn: "Free + Pro $20/mo",
    website: "https://claude.ai",
    tags: ["对话", "长文本", "写作"],
    featured: true,
    companionCli: "claude-code",
    related: ["chatgpt", "claude-code", "kimi"],
    taglineZh: "长文本和写作能力突出，写长文、读论文首选",
    taglineEn: "Best-in-class long-text reading and writing",
    descZh:
      "Claude 由 Anthropic 出品，以超长上下文和细腻的写作风格著称。读上百页 PDF、写长报告体验很好，是很多写作者的首选。",
    descEn:
      "Claude by Anthropic is known for huge context windows and refined writing. Great for long PDFs and reports.",
    installZh: [
      "打开 claude.ai，用邮箱注册账号",
      "同样需要可访问外网的网络环境",
      "手机端下载 Claude 官方 App，账号互通",
      "直接在网页端上传文档即可开始对话",
    ],
    installEn: [
      "Go to claude.ai and sign up with email",
      "Log in from the web, no install required",
      "Get the official mobile app, accounts sync",
      "Upload documents directly in the chat to analyze them",
    ],
    usageZh: [
      "把 PDF/Word 直接拖进对话框，让它总结要点、列大纲",
      "写作时指定风格：「用简洁的公众号风格重写这段」",
      "用 Projects 功能把同一主题的文档和对话组织在一起",
      "代码、表格、翻译任务也可以直接扔给它",
    ],
    usageEn: [
      "Drag PDFs into the chat and ask for summaries or outlines",
      "Specify style: 'rewrite this in a concise blog tone'",
      "Use Projects to group docs and chats by topic",
      "It also handles code, tables and translation well",
    ],
    faqZh: [
      { q: "Claude 和 ChatGPT 选哪个？", a: "长文本阅读和中文写作选 Claude，插件生态和联网选 ChatGPT，都免费可都装。" },
      { q: "免费额度够用吗？", a: "日常问答够用，大量读文档建议 Pro。" },
    ],
    faqEn: [
      { q: "Claude vs ChatGPT?", a: "Pick Claude for long docs and writing, ChatGPT for plugins and browsing. Both have free tiers." },
      { q: "Is the free quota enough?", a: "Enough for daily Q&A; heavy document work needs Pro." },
    ],
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    category: "chat",
    region: "domestic",
    pricingZh: "免费，API 极便宜",
    pricingEn: "Free, very cheap API",
    website: "https://chat.deepseek.com",
    tags: ["对话", "推理", "国产", "免费"],
    featured: true,
    taglineZh: "国产之光，推理能力强，关键是免费",
    taglineEn: "Strong Chinese open model, free to use",
    descZh:
      "DeepSeek 是国产大模型代表，深度思考（R1）版本推理能力对标国际一线，数学代码表现出色，而且网页端完全免费，国内直连。",
    descEn:
      "DeepSeek is China's leading open model with strong reasoning (R1), great at math and code, free on the web.",
    installZh: [
      "打开 chat.deepseek.com，用手机号/微信直接注册登录",
      "国内网络直连，无需任何特殊环境",
      "手机端在应用商店搜 DeepSeek 下载 App",
      "登录后打开「深度思考」开关即可用推理模式",
    ],
    installEn: [
      "Go to chat.deepseek.com and sign up",
      "No VPN needed, works directly",
      "Get the DeepSeek app from your app store",
      "Toggle 'Deep Think' for the reasoning mode",
    ],
    usageZh: [
      "复杂问题先开「深度思考」，看它一步步推理",
      "数学题、代码 bug 直接贴进去，附上报错信息",
      "配合联网搜索做实时资讯查询",
      "开发者可用 API，价格只有国外模型的零头",
    ],
    usageEn: [
      "Turn on Deep Think for hard problems to see step-by-step reasoning",
      "Paste math problems or code bugs with error messages",
      "Combine with web search for current events",
      "Developers: the API costs a fraction of US models",
    ],
    faqZh: [
      { q: "真的全免费吗？", a: "网页端和 App 对话免费，高峰期可能排队，API 按量付费但很便宜。" },
      { q: "适合新手吗？", a: "非常适合，国内直连+中文优化，新手第一个装它准没错。" },
    ],
    faqEn: [
      { q: "Is it really free?", a: "Chat on web/app is free; API usage is pay-as-you-go but very cheap." },
      { q: "Good for beginners?", a: "Yes, direct access and strong Chinese support make it ideal." },
    ],
  },
  {
    slug: "doubao",
    name: "豆包",
    category: "chat",
    region: "domestic",
    pricingZh: "免费",
    pricingEn: "Free",
    website: "https://www.doubao.com",
    tags: ["对话", "语音", "国产", "免费"],
    taglineZh: "字节出品，语音聊天丝滑，还能做图做视频",
    taglineEn: "ByteDance AI with great voice chat and media tools",
    descZh:
      "豆包是字节跳动的大模型 App，语音对话自然，还整合了生图、视频、音乐等功能，一个 App 全搞定，对新手极友好。",
    descEn:
      "Doubao by ByteDance offers natural voice chat plus image, video and music generation in one app.",
    installZh: [
      "应用商店搜索「豆包」下载，或打开 doubao.com",
      "用抖音/手机号一键登录",
      "给 App 开麦克风权限即可语音对话",
      "电脑端直接用网页版，账号互通",
    ],
    installEn: [
      "Search 'Doubao' in your app store or visit doubao.com",
      "Log in with phone number",
      "Grant mic permission for voice chat",
      "Web and mobile accounts sync",
    ],
    usageZh: [
      "点麦克风图标直接语音聊天，适合练口语、练表达",
      "用「图像生成」做配图，用「视频生成」做短视频",
      "智能体广场有现成的助手：学习、办公、娱乐任选",
      "工作党用它做会议纪要、写周报很快",
    ],
    usageEn: [
      "Tap the mic icon for natural voice conversation",
      "Use image and video generation for creative posts",
      "Browse the agent square for ready-made assistants",
      "Great for meeting notes and weekly reports",
    ],
    faqZh: [
      { q: "豆包收费吗？", a: "个人使用基本免费，高级功能后续可能推出会员。" },
      { q: "和 DeepSeek 哪个好？", a: "豆包功能多（语音/生图/视频），DeepSeek 推理强，按需都装。" },
    ],
    faqEn: [
      { q: "Is Doubao free?", a: "Personal use is free." },
      { q: "Doubao vs DeepSeek?", a: "Doubao has more media features; DeepSeek reasons deeper. Use both." },
    ],
  },
  {
    slug: "kimi",
    name: "Kimi",
    category: "chat",
    region: "domestic",
    pricingZh: "免费，会员加速",
    pricingEn: "Free, membership for speed",
    website: "https://kimi.moonshot.cn",
    tags: ["长文本", "国产", "免费"],
    featured: true,
    taglineZh: "长文本阅读神器，几十万字文档一口气读完",
    taglineEn: "Long-document reader, huge context window",
    descZh:
      "Kimi 是月之暗面出品，以 20 万字级超长上下文出圈。读论文、读财报、整理会议记录特别好用，学生党打工人都爱它。",
    descEn:
      "Kimi by Moonshot is famous for 200K-character context. Excellent for papers, reports and meeting notes.",
    installZh: [
      "打开 kimi.moonshot.cn，用手机号注册",
      "国内直连，网页端直接用",
      "应用商店搜 Kimi 下载 App",
      "把文档拖进对话框即可开始解读",
    ],
    installEn: [
      "Visit kimi.moonshot.cn and sign up",
      "Works directly in the browser",
      "Get the Kimi mobile app",
      "Drag documents into the chat to analyze",
    ],
    usageZh: [
      "上传 PDF 后问：「总结三点核心结论」「列出所有数据」",
      "粘贴网页链接，让它提炼要点",
      "写论文时让它帮忙找论点、列提纲",
      "高峰期排队可开会员加速",
    ],
    usageEn: [
      "Upload a PDF and ask for 3 key takeaways or all data points",
      "Paste URLs to get summaries",
      "Ask it to outline essays and find arguments",
      "Membership speeds things up at peak hours",
    ],
    faqZh: [
      { q: "能读多长的文档？", a: "官方称支持 20 万字级别，长论文、长报告无压力。" },
      { q: "有联网吗？", a: "有，可联网搜索实时信息。" },
    ],
    faqEn: [
      { q: "How long a doc can it read?", a: "Around 200K characters — long papers are fine." },
      { q: "Web access?", a: "Yes, with web search for current info." },
    ],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "image",
    region: "global",
    pricingZh: "$10/月起，无免费版",
    pricingEn: "From $10/mo, no free tier",
    website: "https://www.midjourney.com",
    tags: ["绘画", "设计", "提示词"],
    featured: true,
    taglineZh: "AI 绘画天花板，做海报壁纸质感拉满",
    taglineEn: "Top-tier AI art for posters and wallpapers",
    descZh:
      "Midjourney 是公认审美最好的 AI 绘画工具，做海报、插画、壁纸质感一流。以前在 Discord 里用，现在有了网页版，新手也能快速上手。",
    descEn:
      "Midjourney is the best-looking AI art tool for posters and illustrations, now with an easy web app.",
    installZh: [
      "打开 midjourney.com，用 Discord 或谷歌账号登录",
      "订阅会员（Basic $10/月起），无免费版",
      "网页版直接在输入框写英文提示词出图",
      "想进阶可加入 Discord 服务器用 /imagine 命令",
    ],
    installEn: [
      "Go to midjourney.com and sign in with Discord or Google",
      "Subscribe (Basic from $10/mo), no free tier",
      "Type English prompts directly in the web app",
      "Advanced users can use /imagine in Discord",
    ],
    usageZh: [
      "提示词公式：主体 + 风格 + 光影 + 参数，如 sunset poster, flat design, --ar 16:9",
      "用 --ar 调整比例（海报 2:3，壁纸 16:9，头像 1:1）",
      "点 U 放大选中图，点 V 在此基础上变化",
      "国内可用替代：即梦、通义万相，先练手再订阅 MJ",
    ],
    usageEn: [
      "Prompt formula: subject + style + lighting + params, e.g. 'sunset poster, flat design, --ar 16:9'",
      "Use --ar for aspect ratio (2:3 poster, 16:9 wallpaper, 1:1 avatar)",
      "U upscales, V creates variations",
      "Try free alternatives first before subscribing",
    ],
    faqZh: [
      { q: "不会英文能用吗？", a: "能，先用中文想好画面，再用翻译工具翻成英文提示词。" },
      { q: "商用可以吗？", a: "付费会员一般可商用，具体以官方条款为准。" },
    ],
    faqEn: [
      { q: "No English?", a: "Write the scene in your language, translate to English prompts." },
      { q: "Commercial use?", a: "Paid plans generally allow it; check official terms." },
    ],
  },
  {
    slug: "jimeng",
    name: "即梦 AI",
    category: "image",
    region: "domestic",
    pricingZh: "免费 + 会员",
    pricingEn: "Free + membership",
    website: "https://jimeng.jianying.com",
    tags: ["绘画", "视频", "国产", "免费"],
    related: ["wanxiang", "kling", "midjourney"],
    taglineZh: "字节的免费生图+视频，中文提示词直接出片",
    taglineEn: "Free ByteDance image+video gen with Chinese prompts",
    descZh:
      "即梦是字节剪映团队的 AI 创作平台，中文提示词理解好，生图、视频、音乐都能做，每天有免费额度，新手练手首选。",
    descEn:
      "Jimeng by ByteDance offers image, video and music generation with good Chinese prompt support and daily free credits.",
    installZh: [
      "打开 jimeng.jianying.com，抖音/手机号登录",
      "国内直连，网页端直接用",
      "应用商店搜「即梦 AI」下 App",
      "每天领免费积分，不够再考虑会员",
    ],
    installEn: [
      "Visit jimeng.jianying.com and log in",
      "Use directly in the browser",
      "Get the Jimeng app from app stores",
      "Claim daily free credits",
    ],
    usageZh: [
      "直接写中文提示词，如「赛博朋克风格的上海外滩夜景」",
      "生图后点「生成视频」让图片动起来",
      "智能画布可做海报、电商图，一键排版",
      "剪映联动：一键把成片发到剪映剪辑",
    ],
    usageEn: [
      "Write prompts in Chinese directly",
      "Turn generated images into videos with one click",
      "Use smart canvas for posters and e-commerce images",
      "Send results to CapCut/Jianying for editing",
    ],
    faqZh: [
      { q: "免费额度够吗？", a: "日常练手够，每天签到领积分，重度用再开会员。" },
      { q: "能商用吗？", a: "以站内协议为准，自媒体配图一般没问题。" },
    ],
    faqEn: [
      { q: "Enough free credits?", a: "Enough for practice; check in daily for more." },
      { q: "Commercial use?", a: "Check the site terms; social media images are usually fine." },
    ],
  },
  {
    slug: "runway",
    name: "Runway",
    category: "video",
    region: "global",
    pricingZh: "免费试用 + $12/月起",
    pricingEn: "Free trial + from $12/mo",
    website: "https://runwayml.com",
    tags: ["视频", "特效", "剪辑"],
    taglineZh: "AI 视频生成标杆，图生视频质感最好",
    taglineEn: "Leading AI video generator, best image-to-video",
    descZh:
      "Runway 的 Gen 系列模型是 AI 短片圈的标配，图生视频、运镜控制、绿幕抠像都很强，适合做自媒体短片和广告创意。",
    descEn:
      "Runway's Gen models are the standard for AI shorts: image-to-video, camera control and green screen.",
    installZh: [
      "打开 runwayml.com，用谷歌/邮箱注册",
      "需要可访问外网的网络环境",
      "新号有免费额度，直接在网页端用",
      "重度用按需订阅 Standard $12/月起",
    ],
    installEn: [
      "Go to runwayml.com and sign up",
      "New accounts get free credits",
      "Use right in the browser",
      "Subscribe from $12/mo for serious use",
    ],
    usageZh: [
      "图生视频：上传一张图 + 描述运镜，如 slow push in",
      "文生视频：先写清分镜再生成，成功率高",
      "用 Motion Brush 指定画面中哪块动",
      "成片进剪映/PR 二次剪辑加字幕配音",
    ],
    usageEn: [
      "Image-to-video: upload an image + camera move like 'slow push in'",
      "Text-to-video: describe the shot clearly first",
      "Use Motion Brush to animate specific areas",
      "Edit output in CapCut/Premiere with captions",
    ],
    faqZh: [
      { q: "免费额度能做几个视频？", a: "几个短镜头够，正式项目建议订阅。" },
      { q: "国内替代？", a: "即梦、可灵，中文支持好，先用它们练手。" },
    ],
    faqEn: [
      { q: "How much can free credits make?", a: "A few short clips; subscribe for real projects." },
      { q: "Alternatives?", a: "Jimeng and Kling are strong Chinese alternatives." },
    ],
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "code",
    region: "global",
    pricingZh: "免费试用 + Pro $20/月",
    pricingEn: "Free trial + Pro $20/mo",
    website: "https://cursor.com",
    tags: ["编程", "代码", "AI编辑器"],
    featured: true,
    related: ["trae", "codebuddy", "windsurf"],
    taglineZh: "程序员最爱的 AI 编辑器，聊天就能写代码",
    taglineEn: "The AI code editor devs love",
    descZh:
      "Cursor 是基于 VS Code 的 AI 编辑器，对话、补全、改 Bug 一气呵成，能读懂整个项目，是学编程和提效的神器。",
    descEn:
      "Cursor is a VS Code-based AI editor with chat, completion and whole-project understanding.",
    installZh: [
      "打开 cursor.com 下载对应系统版本（Win/Mac）",
      "安装后登录账号，新号有免费试用",
      "把项目文件夹拖进 Cursor 打开",
      "按 Ctrl/Cmd+K 唤出 AI 改代码，Ctrl/Cmd+L 对话",
    ],
    installEn: [
      "Download from cursor.com for your OS",
      "Log in; new accounts get a free trial",
      "Open your project folder in Cursor",
      "Press Ctrl/Cmd+K to edit code, Ctrl/Cmd+L to chat",
    ],
    usageZh: [
      "Tab 补全：写代码时直接按 Tab 接受 AI 补全",
      "Cmd+L 选中报错问它：「这段报错怎么修」",
      "用 Composer（Cmd+I）让它多文件联动改需求",
      "新手学编程：让它逐行解释代码再自己改",
    ],
    usageEn: [
      "Tab completion: accept AI suggestions as you type",
      "Select an error and ask how to fix it",
      "Use Composer (Cmd+I) for multi-file changes",
      "Beginners: ask it to explain code line by line",
    ],
    faqZh: [
      { q: "不会编程能用吗？", a: "能，配合教程做小网站小工具是最好的学法。" },
      { q: "免费版够吗？", a: "试用后按量计费，重度开发建议 Pro。" },
    ],
    faqEn: [
      { q: "For non-coders?", a: "Yes, building small sites with tutorials is a great way to learn." },
      { q: "Is free enough?", a: "Trial then usage-based; heavy devs want Pro." },
    ],
  },
  {
    slug: "copilot",
    name: "GitHub Copilot",
    category: "code",
    region: "both",
    pricingZh: "学生免费，Pro $10/月",
    pricingEn: "Free for students, Pro $10/mo",
    website: "https://github.com/features/copilot",
    tags: ["编程", "补全"],
    taglineZh: "代码补全老牌神器，学生免费",
    taglineEn: "Classic code completion, free for students",
    descZh:
      "GitHub Copilot 是最早出圈的 AI 编程助手，补全又快又准，学生认证后免费，是学生党的第一选择。",
    descEn:
      "GitHub Copilot is the original AI pair programmer: fast completions, free for verified students.",
    installZh: [
      "有 GitHub 账号后去官网开通 Copilot",
      "学生去 education.github.com 认证领免费",
      "在 VS Code 装 GitHub Copilot 插件并登录",
      "写代码时按 Tab 接受补全即可",
    ],
    installEn: [
      "Sign up for Copilot with a GitHub account",
      "Students verify at education.github.com for free access",
      "Install the Copilot extension in VS Code",
      "Press Tab to accept completions",
    ],
    usageZh: [
      "写注释再回车，它会按注释生成代码",
      "补全不满意按 Alt+] 切换下一个建议",
      "配合 Copilot Chat 边问边写",
      "刷算法题时用它学思路，别直接抄",
    ],
    usageEn: [
      "Write a comment and hit enter; it generates the code",
      "Press Alt+] to cycle suggestions",
      "Use Copilot Chat to ask while coding",
      "Learn patterns from it rather than copying blindly",
    ],
    faqZh: [
      { q: "学生怎么免费？", a: "用学校邮箱在 GitHub Education 认证，通过后 Copilot 免费。" },
      { q: "和 Cursor 冲突吗？", a: "不冲突，Cursor 里也能登录 Copilot 一起用。" },
    ],
    faqEn: [
      { q: "Free for students?", a: "Verify with a school email via GitHub Education." },
      { q: "Work with Cursor?", a: "Yes, they can be used together." },
    ],
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "office",
    region: "both",
    pricingZh: "$10/月，可单买",
    pricingEn: "$10/mo add-on",
    website: "https://www.notion.so",
    tags: ["笔记", "办公", "写作"],
    taglineZh: "笔记里直接 AI 写作总结，打工人必备",
    taglineEn: "AI writing inside your notes",
    descZh:
      "Notion AI 长在笔记里：写周报、做会议纪要、总结文档，选中文字就能 AI 续写翻译，是知识管理党的效率神器。",
    descEn:
      "Notion AI lives in your notes: weekly reports, meeting minutes, summaries — select text and let AI help.",
    installZh: [
      "打开 notion.so 注册账号（邮箱即可）",
      "新建页面，按空格唤出 AI",
      "需要完整功能可订阅 Plus + AI 插件",
      "手机端下 Notion App 同步使用",
    ],
    installEn: [
      "Sign up at notion.so with email",
      "In any page, press space to summon AI",
      "Subscribe to Plus + AI add-on for full features",
      "Use the mobile app to sync",
    ],
    usageZh: [
      "选中会议记录点「总结」，一键出纪要",
      "写周报时让它扩写：「把这三条扩成正式周报」",
      "英文邮件让它润色翻译",
      "建知识库：读书笔记 + AI 总结沉淀",
    ],
    usageEn: [
      "Select meeting notes and hit Summarize",
      "Expand bullet points into formal weekly reports",
      "Polish and translate English emails",
      "Build a knowledge base with AI summaries",
    ],
    faqZh: [
      { q: "国内能用吗？", a: "能，网页直连，只是偶尔有点慢。" },
      { q: "国产替代？", a: "飞书妙记+飞书智能、语雀，协作办公可优先国产。" },
    ],
    faqEn: [
      { q: "Available in China?", a: "Yes via the web, occasionally slow." },
      { q: "Worth paying?", a: "Yes if you live in Notion; otherwise try built-in AI in local apps." },
    ],
  },
  {
    slug: "suno",
    name: "Suno",
    category: "audio",
    region: "global",
    pricingZh: "免费试用 + $10/月起",
    pricingEn: "Free trial + from $10/mo",
    website: "https://suno.com",
    tags: ["音乐", "配乐"],
    taglineZh: "一句话生成完整歌曲，短视频配乐自由",
    taglineEn: "Full songs from one sentence",
    descZh:
      "Suno 是最强的 AI 音乐生成，一句话就能产出带演唱的完整歌曲，做短视频 BGM、生日祝福歌特别出圈。",
    descEn:
      "Suno is the best AI music maker: one prompt produces a complete song with vocals. Perfect for video BGM.",
    installZh: [
      "打开 suno.com，用邮箱/Discord 登录",
      "新号送免费点数，直接网页端用",
      "在输入框选 Custom 或一句话模式",
      "生成后可下载音频，用到剪映里",
    ],
    installEn: [
      "Go to suno.com and sign in",
      "New accounts get free credits",
      "Choose Custom mode or one-line mode",
      "Download the audio for your videos",
    ],
    usageZh: [
      "一句话模式：写「欢快的城市民谣，关于周五下班」",
      "Custom 模式：分别写歌词、风格、标题",
      "一次生成两版，选顺耳的点 Extend 加长",
      "短视频配乐选纯音乐版，避开人声抢戏",
    ],
    usageEn: [
      "Simple mode: 'cheerful urban folk song about Friday'",
      "Custom mode: separate lyrics, style and title",
      "Generate two versions, Extend the better one",
      "Pick instrumentals for video BGM",
    ],
    faqZh: [
      { q: "中文歌效果好吗？", a: "中文咬字进步很大，简单歌词效果不错。" },
      { q: "能商用吗？", a: "付费版生成的曲目商用政策以官网为准。" },
    ],
    faqEn: [
      { q: "Good Chinese songs?", a: "Chinese vocals improved a lot; simple lyrics work well." },
      { q: "Commercial use?", a: "Check official terms for paid-plan generations." },
    ],
  },
  {
    slug: "grok",
    name: "Grok",
    category: "chat",
    region: "global",
    pricingZh: "免费版 + SuperGrok 订阅",
    pricingEn: "Free + SuperGrok subscription",
    website: "https://grok.com",
    tags: ["对话", "实时搜索", "X"],
    taglineZh: "xAI 出品，能读 X 平台实时动态，追热点最快",
    taglineEn: "xAI's assistant with live X/web data for hot topics",
    descZh:
      "Grok 由 xAI 出品，最大特色是接入 X 平台的实时数据，热点新闻、舆情风向问它很快。同时也能生图、读图、写代码、做数据分析，属于综合型对话助手。",
    descEn:
      "Grok by xAI stands out for real-time X and web data, great for news and trends. It also generates images, reads pictures and writes code.",
    installZh: [
      "打开 grok.com，用 X 账号或邮箱注册登录",
      "国内访问需准备可访问外网的网络环境",
      "手机端在 App Store / Google Play 搜 Grok 下载官方 App",
      "免费版即可对话，需要更强模型和更高额度可订阅 SuperGrok",
    ],
    installEn: [
      "Go to grok.com and sign in with X or email",
      "Mobile: install the Grok app from App Store / Google Play",
      "The free tier covers daily chat",
      "Subscribe to SuperGrok for stronger models and higher limits",
    ],
    usageZh: [
      "直接问实时信息：「今天科技圈有什么大新闻」",
      "复杂推理题打开思考模式，让它先推理再回答",
      "上传图片让它读图分析，也可以让它生成配图",
      "写文案、写代码时把背景和格式要求说清楚，效果差别很大",
    ],
    usageEn: [
      "Ask about live info: 'what happened in tech today'",
      "Enable thinking mode for hard reasoning problems",
      "Upload images for analysis or generate images",
      "Be explicit about background and output format",
    ],
    faqZh: [
      { q: "和 ChatGPT 比强在哪？", a: "实时信息和 X 平台数据是它的强项，追热点、看舆情选它更合适。" },
      { q: "免费额度够用吗？", a: "日常问答够用；高频使用或想用最新模型建议订阅 SuperGrok。" },
    ],
    faqEn: [
      { q: "Grok vs ChatGPT?", a: "Grok is better for live info and X trends; ChatGPT for plugins and ecosystem." },
      { q: "Is free enough?", a: "Fine for daily Q&A; subscribe for the newest models and higher limits." },
    ],
  },
  {
    slug: "grok-build",
    name: "Grok Build",
    category: "code",
    region: "global",
    pricingZh: "需 SuperGrok / X Premium+（早期 beta）",
    pricingEn: "Requires SuperGrok / X Premium+ (early beta)",
    website: "https://x.ai/cli",
    tags: ["CLI", "终端", "TUI"],
    taglineZh: "xAI 的终端编程 agent，全屏 TUI 直接改代码",
    taglineEn: "xAI's terminal coding agent with a fullscreen TUI",
    descZh:
      "Grok Build（命令是 grok）是 xAI 推出的终端 AI 编程 agent，运行在命令行里，能读懂代码库、改文件、执行命令、联网搜索，还支持 headless 模式和 ACP 接入编辑器。目前处于早期 beta。",
    descEn:
      "Grok Build (the `grok` command) is xAI's terminal coding agent: it reads your codebase, edits files, runs commands and searches the web, with headless mode and ACP editor integration. Currently in early beta.",
    installZh: [
      "macOS / Linux / Git Bash 执行：curl -fsSL https://x.ai/cli/install.sh | bash",
      "Windows PowerShell 执行：irm https://x.ai/cli/install.ps1 | iex",
      "执行 grok --version 验证是否安装成功",
      "首次启动会自动打开浏览器登录，需要 SuperGrok 或 X Premium+ 订阅",
    ],
    installEn: [
      "macOS / Linux / Git Bash: curl -fsSL https://x.ai/cli/install.sh | bash",
      "Windows PowerShell: irm https://x.ai/cli/install.ps1 | iex",
      "Verify with grok --version",
      "First launch opens the browser to authenticate (SuperGrok or X Premium+)",
    ],
    usageZh: [
      "在项目目录运行 grok，直接用中文或英文描述需求",
      "让它先出方案再动手，确认思路后再改代码更稳",
      "支持 MCP、skills、hooks，可以把你的工具链接进来",
      "脚本和 CI 场景可以用 headless 模式批量跑任务",
    ],
    usageEn: [
      "Run grok in your project and describe the task in natural language",
      "Ask for a plan first, then let it implement",
      "Extend it with MCP servers, skills and hooks",
      "Use headless mode for scripts and CI",
    ],
    faqZh: [
      { q: "免费能用吗？", a: "目前面向 SuperGrok 与 X Premium+ 订阅用户的早期 beta，暂无免费版。" },
      { q: "和 Cursor 的区别？", a: "它跑在终端，适合命令行、服务器 SSH 场景；Cursor 是编辑器体验。" },
    ],
    faqEn: [
      { q: "Is it free?", a: "No, it's an early beta for SuperGrok and X Premium+ subscribers." },
      { q: "Grok Build vs Cursor?", a: "Grok Build lives in the terminal (great over SSH); Cursor is an editor." },
    ],
  },
  {
    slug: "opencode",
    name: "OpenCode",
    category: "code",
    region: "both",
    pricingZh: "开源免费，模型 API 自付",
    pricingEn: "Open source, pay for model API",
    website: "https://opencode.ai",
    tags: ["开源", "CLI", "多模型"],
    ccSwitch: true,
    taglineZh: "开源终端编程 agent，模型服务商随便换",
    taglineEn: "Open-source terminal agent, bring any model provider",
    descZh:
      "OpenCode 是开源的 AI 编程 agent，主力形态是终端 TUI，也有桌面端和 IDE 插件。它能接任意模型服务商（含官方精选的 OpenCode Zen），支持 Plan/Build 双模式、会话分享和撤销重做。",
    descEn:
      "OpenCode is an open-source AI coding agent available as a terminal TUI, desktop app or IDE extension. Bring any provider (or the curated OpenCode Zen), with Plan/Build modes and conversation sharing.",
    installZh: [
      "一行安装（macOS / Linux / WSL）：curl -fsSL https://opencode.ai/install | bash",
      "其他方式：npm install -g opencode-ai，或 brew install anomalyco/tap/opencode",
      "Windows 建议用 WSL，也可用 choco install opencode 或 scoop install opencode",
      "首次运行 opencode 后用 /connect 选择服务商并填入 API Key",
    ],
    installEn: [
      "One-liner (macOS / Linux / WSL): curl -fsSL https://opencode.ai/install | bash",
      "Alternatives: npm install -g opencode-ai, or brew install anomalyco/tap/opencode",
      "On Windows, WSL is recommended; choco or scoop also work",
      "Run opencode, then use /connect to pick a provider and paste your API key",
    ],
    usageZh: [
      "进入项目目录运行 opencode，先执行 /init 生成 AGENTS.md",
      "按 Tab 在 Plan（只出方案）和 Build（直接改代码）模式间切换",
      "输入 @ 可以模糊搜索并引用项目里的文件",
      "改错了用 /undo 回退，/redo 重做；用 /share 生成会话链接给同事",
    ],
    usageEn: [
      "cd into your project, run opencode, then /init to create AGENTS.md",
      "Press Tab to switch between Plan and Build modes",
      "Type @ to fuzzy-search and reference project files",
      "/undo reverts, /redo reapplies, /share gives you a link to the session",
    ],
    faqZh: [
      { q: "要花钱吗？", a: "软件本身开源免费，模型费用按你选择的服务商结算。" },
      { q: "支持哪些模型？", a: "主流服务商基本都支持，也可以用官方精选的 OpenCode Zen。" },
    ],
    faqEn: [
      { q: "Does it cost money?", a: "The tool is free and open source; you pay only for the model API you use." },
      { q: "Which models work?", a: "Most major providers, plus the curated OpenCode Zen." },
    ],
  },
  {
    slug: "command-code",
    name: "Command Code",
    category: "code",
    region: "both",
    pricingZh: "免费版 + 付费套餐",
    pricingEn: "Free tier + paid plans",
    website: "https://commandcode.ai",
    tags: ["CLI", "Taste", "自动化"],
    taglineZh: "会学习你编码口味的终端编程 agent",
    taglineEn: "Terminal coding agent that learns your coding taste",
    descZh:
      "Command Code 是终端里的 AI 编程 agent，核心特色是 Taste 学习系统：它从你每次接受、拒绝和修改中学习你的编码偏好，越用越贴近你的风格。还支持 skills、自定义子 agent、MCP、plan 模式和 headless 模式。",
    descEn:
      "Command Code is a terminal coding agent built around its Taste system: it learns from every accept, reject and edit to match your coding preferences over time. Also supports skills, custom agents, MCP, plan and headless modes.",
    installZh: [
      "用 npm 全局安装：npm i -g command-code",
      "登录账号：cmd login",
      "进入项目目录运行 cmd 开始交互会话",
      "想启用偏好学习，在会话里输入 /taste",
    ],
    installEn: [
      "Install globally: npm i -g command-code",
      "Log in: cmd login",
      "Run cmd inside your project to start a session",
      "Type /taste in a session to enable taste learning",
    ],
    usageZh: [
      "直接描述任务：cmd \"修复登录接口的 bug\"",
      "按 Shift+Tab 切到 plan 模式，先看方案再动手",
      "用 /skills 和 /agents 扩展能力和专属子 agent",
      "脚本或 CI 里用 cmd -p \"query\" 跑非交互任务",
      "用 /import 从 Claude Code、Cursor、OpenCode 等导入你已有的配置",
    ],
    usageEn: [
      "Describe the task directly: cmd \"fix the login bug\"",
      "Press Shift+Tab for plan mode and review the approach first",
      "Extend it with /skills and /agents",
      "Run headlessly with cmd -p \"query\" in scripts and CI",
      "Import your setup from Claude Code, Cursor, OpenCode with /import",
    ],
    faqZh: [
      { q: "免费吗？", a: "有免费和付费套餐，具体价格以官网定价页为准。" },
      { q: "会用我的代码训练吗？", a: "官方说明不会用你的代码训练，也不存储代码片段；Taste 数据只存在本地。" },
    ],
    faqEn: [
      { q: "Is it free?", a: "There are free and premium plans — see the pricing page for current limits." },
      { q: "Does it train on my code?", a: "No. Code isn't used for training or stored; taste data stays local." },
    ],
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "code",
    region: "global",
    pricingZh: "需 Pro/Max/Team 订阅或 API Key",
    pricingEn: "Pro/Max/Team plan or API key",
    website: "https://claude.com/product/claude-code",
    tags: ["CLI", "终端", "长任务"],
    ccSwitch: true,
    taglineZh: "Anthropic 官方终端 agent，改多文件、跑测试一把梭",
    taglineEn: "Anthropic's official terminal agent for multi-file work",
    descZh:
      "Claude Code 是 Anthropic 官方的命令行编程 agent，能读懂整个项目、跨文件改代码、跑测试、提交 Git。适合想把整块任务交给终端自动完成、并习惯命令行工作流的开发者。",
    descEn:
      "Claude Code is Anthropic's official CLI coding agent: it understands a whole project, edits across files, runs tests and commits to Git. Ideal if you prefer working in the terminal.",
    installZh: [
      "macOS / Linux / WSL：curl -fsSL https://claude.ai/install.sh | bash",
      "Windows PowerShell：irm https://claude.ai/install.ps1 | iex",
      "也可用 npm install -g @anthropic-ai/claude-code，或 brew install --cask claude-code",
      "安装后运行 claude --version 验证，再运行 claude 完成浏览器登录",
    ],
    installEn: [
      "macOS / Linux / WSL: curl -fsSL https://claude.ai/install.sh | bash",
      "Windows PowerShell: irm https://claude.ai/install.ps1 | iex",
      "Or npm install -g @anthropic-ai/claude-code / brew install --cask claude-code",
      "Check claude --version, then run claude and log in via the browser",
    ],
    usageZh: [
      "在项目目录运行 claude，直接用自然语言描述需求",
      "运行 /init 生成 CLAUDE.md，把项目规范写进去让它每次遵守",
      "复杂需求先让它给方案，确认后再动手改代码",
      "让它顺手跑测试、修报错、写提交信息，一条龙完成",
    ],
    usageEn: [
      "Run claude in your project and describe what you want",
      "Run /init to create CLAUDE.md with your project conventions",
      "Have it plan first for bigger tasks, then implement",
      "Let it run tests, fix errors and write commit messages too",
    ],
    faqZh: [
      { q: "免费版能用吗？", a: "不能，Claude Code 需要 Pro/Max/Team/Enterprise 订阅，或使用 API Key。" },
      { q: "和 Cursor 怎么选？", a: "Claude Code 跑在终端、擅长长任务自动化；Cursor 是编辑器里所见即所得的体验。" },
    ],
    faqEn: [
      { q: "Does the free plan work?", a: "No — you need a Pro/Max/Team/Enterprise plan or an API key." },
      { q: "Claude Code vs Cursor?", a: "Claude Code automates long tasks in the terminal; Cursor is an editor experience." },
    ],
  },
  {
    slug: "codex",
    name: "Codex CLI",
    category: "code",
    region: "global",
    pricingZh: "含在 ChatGPT Plus/Pro 等订阅内",
    pricingEn: "Included in ChatGPT Plus/Pro",
    website: "https://developers.openai.com/codex",
    tags: ["CLI", "OpenAI", "终端"],
    ccSwitch: true,
    taglineZh: "OpenAI 官方终端 agent，ChatGPT 订阅直接开用",
    taglineEn: "OpenAI's terminal agent, powered by your ChatGPT plan",
    descZh:
      "Codex CLI 是 OpenAI 推出的本地编程 agent，用 ChatGPT 账号登录即可消耗订阅额度，不必单独买 API。除了终端版本，还有 IDE 插件和桌面 App，云端版本在 chatgpt.com/codex。",
    descEn:
      "Codex CLI is OpenAI's local coding agent — sign in with ChatGPT to use your existing plan instead of a separate API key. There are also IDE and desktop flavors, plus a cloud version.",
    installZh: [
      "macOS / Linux：curl -fsSL https://chatgpt.com/codex/install.sh | sh",
      "Windows PowerShell：irm https://chatgpt.com/codex/install.ps1 | iex",
      "也可 npm install -g @openai/codex 或 brew install --cask codex",
      "运行 codex 并选择 Sign in with ChatGPT 完成登录",
    ],
    installEn: [
      "macOS / Linux: curl -fsSL https://chatgpt.com/codex/install.sh | sh",
      "Windows PowerShell: irm https://chatgpt.com/codex/install.ps1 | iex",
      "Or npm install -g @openai/codex / brew install --cask codex",
      "Run codex and choose Sign in with ChatGPT",
    ],
    usageZh: [
      "在项目目录运行 codex，用自然语言提需求",
      "登录 ChatGPT 账号后直接用 Plus/Pro 套餐额度",
      "想在编辑器里用，装 VS Code / Cursor 的 Codex 插件",
      "想要图形界面运行 codex app 打开桌面版",
    ],
    usageEn: [
      "Run codex in your project and describe the task",
      "Sign in with ChatGPT to use your Plus/Pro quota",
      "Install the VS Code / Cursor extension for editor use",
      "Run codex app for the desktop experience",
    ],
    faqZh: [
      { q: "必须买 API 吗？", a: "不必，ChatGPT Plus/Pro 等订阅已含额度；也可改用 API Key 按量付费。" },
      { q: "和 Claude Code 区别？", a: "思路类似，都是终端 agent；主要看你手上是哪家的订阅。" },
    ],
    faqEn: [
      { q: "Do I need an API key?", a: "No — Plus/Pro plans include Codex usage; an API key is optional." },
      { q: "Codex vs Claude Code?", a: "Both are terminal agents; pick based on which subscription you already have." },
    ],
  },
  {
    slug: "gemini-cli",
    name: "Gemini CLI",
    category: "code",
    region: "global",
    pricingZh: "免费额度：每天 1000 次请求",
    pricingEn: "Free: 1000 requests/day",
    website: "https://geminicli.com",
    tags: ["开源", "免费", "Gemini"],
    ccSwitch: true,
    taglineZh: "Google 开源终端 agent，免费额度最大方",
    taglineEn: "Google's open-source terminal agent with a big free tier",
    descZh:
      "Gemini CLI 是 Google 开源的终端 AI agent，用个人 Google 账号登录就有免费额度（每分钟 60 次、每天 1000 次），支持 Gemini 3 模型和 100 万 token 上下文，还能调用 Google 搜索联网、接 MCP 扩展。",
    descEn:
      "Gemini CLI is Google's open-source terminal agent with a generous free tier (60 req/min, 1000 req/day) on a personal Google account, Gemini 3 models with a 1M token context, Google Search grounding and MCP support.",
    installZh: [
      "免安装直接体验：npx @google/gemini-cli",
      "全局安装：npm install -g @google/gemini-cli",
      "macOS / Linux 也可以用 brew install gemini-cli",
      "首次运行选择 Sign in with Google 完成浏览器授权",
    ],
    installEn: [
      "Try it without installing: npx @google/gemini-cli",
      "Install globally: npm install -g @google/gemini-cli",
      "On macOS / Linux: brew install gemini-cli",
      "First run: choose Sign in with Google and finish auth in the browser",
    ],
    usageZh: [
      "在项目目录运行 gemini，直接提问或下指令",
      "用 /init 生成 GEMINI.md，把项目约定写进去",
      "脚本里用 gemini -p \"问题\" --output-format json 拿结构化输出",
      "配置 MCP server 可以接 GitHub、数据库等外部能力",
    ],
    usageEn: [
      "Run gemini in your project and ask or instruct directly",
      "Use /init to generate GEMINI.md with project conventions",
      "Script it with gemini -p \"question\" --output-format json",
      "Add MCP servers for GitHub, databases and more",
    ],
    faqZh: [
      { q: "真的免费吗？", a: "个人 Google 账号有免费额度（每天 1000 次），超出或要更高配额可改用 API Key。" },
      { q: "和网页版 Gemini 区别？", a: "它能直接读写你本地的代码、执行命令，是干活的工具而不只是聊天。" },
    ],
    faqEn: [
      { q: "Is it really free?", a: "A personal Google account gets a free daily quota; switch to an API key for more." },
      { q: "Gemini CLI vs Gemini web?", a: "The CLI reads and writes your local code and runs commands." },
    ],
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    category: "code",
    region: "global",
    pricingZh: "免费版 + Pro 订阅",
    pricingEn: "Free + Pro plan",
    website: "https://windsurf.com",
    tags: ["IDE", "编辑器", "Agent"],
    taglineZh: "带 Cascade agent 的 AI 编辑器，从 VS Code 迁移无痛",
    taglineEn: "AI editor with the Cascade agent, easy VS Code migration",
    descZh:
      "Windsurf 是 Codeium 团队打造的 AI 编辑器，基于 VS Code 生态，主打 Cascade agent：能理解整个项目并连续完成多步任务。界面清爽，从 VS Code / Cursor 导入配置几乎零成本。",
    descEn:
      "Windsurf by the Codeium team is an AI editor built on the VS Code ecosystem. Its Cascade agent understands the whole project and executes multi-step tasks, with near-zero migration cost from VS Code or Cursor.",
    installZh: [
      "打开 windsurf.com 下载对应系统安装包（Windows / macOS / Linux）",
      "首次启动可选择从 VS Code 或 Cursor 导入配置与插件",
      "登录账号，免费版即可开始使用",
      "打开项目文件夹，在右侧面板和 Cascade 对话",
    ],
    installEn: [
      "Download the installer for your OS from windsurf.com",
      "On first launch, import settings and extensions from VS Code or Cursor",
      "Sign in — the free tier works right away",
      "Open your project folder and chat with Cascade in the side panel",
    ],
    usageZh: [
      "在 Cascade 面板描述需求，它会自己找文件、改代码",
      "选中代码让它局部重构或解释这段逻辑",
      "用 Tab 补全，它会预测你下一步想改的位置",
      "长任务可以连续执行，中途随时打断纠偏",
    ],
    usageEn: [
      "Describe the task in the Cascade panel; it finds files and edits them",
      "Select code to refactor or explain it locally",
      "Use Tab completion — it predicts your next edit location",
      "Let long tasks run and interrupt whenever you need to steer",
    ],
    faqZh: [
      { q: "怎么收费？", a: "有免费版，Pro 为订阅制，具体价格以官网为准。" },
      { q: "和 Cursor 的区别？", a: "都是 VS Code 系 AI 编辑器，Windsurf 的 Cascade 更偏自动连续执行任务。" },
    ],
    faqEn: [
      { q: "How much does it cost?", a: "There's a free tier plus a Pro subscription — check the site for current pricing." },
      { q: "Windsurf vs Cursor?", a: "Both are VS Code-based AI editors; Cascade leans more into autonomous multi-step runs." },
    ],
  },
  {
    slug: "cline",
    name: "Cline",
    category: "code",
    region: "both",
    pricingZh: "开源免费，模型 API 自付",
    pricingEn: "Open source, pay for model API",
    website: "https://cline.bot",
    tags: ["VS Code", "插件", "开源"],
    taglineZh: "VS Code 里的开源编程 agent，每步改动你说了算",
    taglineEn: "Open-source agent inside VS Code with full control",
    descZh:
      "Cline 是 VS Code 的开源 AI 编程插件，可以接你自己的模型 API Key，也有官方订阅可选。最大特点是每一步改动都会先给你看 diff、需要你确认，控制感强，适合不敢让 AI 乱改代码的人。",
    descEn:
      "Cline is an open-source VS Code extension agent. Bring your own model API key or use its subscription, and every change is shown as a diff you approve — great if you want tight control.",
    installZh: [
      "打开 VS Code，进入扩展商店搜索 Cline",
      "点击安装（也可从 open-vsx 下载 vsix 手动安装）",
      "安装后在侧边栏打开 Cline 面板，选择模型服务商",
      "填入 API Key，或登录 Cline 账号使用官方订阅",
    ],
    installEn: [
      "Open VS Code and search for Cline in the Extensions marketplace",
      "Click Install (or sideload a .vsix from open-vsx)",
      "Open the Cline panel in the sidebar and pick a provider",
      "Paste your API key, or sign in to use Cline's own plans",
    ],
    usageZh: [
      "在聊天框描述任务，它会先读文件再给出改动方案",
      "每一步都会显示 diff，点 Approve 才会真正写入",
      "它会主动跑命令验证，注意看终端输出",
      "用 @ 引用文件，注意控制上下文长度省 token",
    ],
    usageEn: [
      "Describe the task; it reads files first, then proposes changes",
      "Every step shows a diff — nothing is written until you approve",
      "It runs commands to verify; watch the terminal output",
      "Reference files with @ and keep context lean to save tokens",
    ],
    faqZh: [
      { q: "免费吗？", a: "插件本身开源免费，模型调用按你选择的服务商计费。" },
      { q: "和 Copilot 的区别？", a: "Cline 能连续完成多步任务并跑命令验证，不只是代码补全。" },
    ],
    faqEn: [
      { q: "Is it free?", a: "The extension is free and open source; you pay your model provider." },
      { q: "Cline vs Copilot?", a: "Cline runs multi-step tasks and verifies with commands, not just completions." },
    ],
  },
  {
    slug: "aider",
    name: "Aider",
    category: "code",
    region: "both",
    pricingZh: "开源免费，模型 API 自付",
    pricingEn: "Open source, pay for model API",
    website: "https://aider.chat",
    tags: ["开源", "Git", "结对编程"],
    taglineZh: "老牌开源终端结对编程，每轮改动自动提交 Git",
    taglineEn: "Classic open-source pair programming that auto-commits",
    descZh:
      "Aider 是最早出圈的终端 AI 结对编程工具，几乎支持所有主流模型。它会自动把每轮改动提交成 Git commit，改坏了直接回滚，特别适合已经习惯 Git 工作流的开发者。",
    descEn:
      "Aider is the long-standing terminal pair-programming tool. It works with nearly every major model and auto-commits each change to Git, so rolling back is trivial.",
    installZh: [
      "macOS / Linux 一行安装：curl -LsSf https://aider.chat/install.sh | sh",
      "Windows PowerShell：powershell -ExecutionPolicy ByPass -c \"irm https://aider.chat/install.ps1 | iex\"",
      "或用 pip 安装：python -m pip install aider-install 然后执行 aider-install",
      "首次运行要指定模型和 Key，例如 aider --model deepseek --api-key deepseek=<key>",
    ],
    installEn: [
      "macOS / Linux one-liner: curl -LsSf https://aider.chat/install.sh | sh",
      "Windows PowerShell: powershell -ExecutionPolicy ByPass -c \"irm https://aider.chat/install.ps1 | iex\"",
      "Or with pip: python -m pip install aider-install, then run aider-install",
      "Start with a model and key, e.g. aider --model deepseek --api-key deepseek=<key>",
    ],
    usageZh: [
      "在 Git 仓库目录运行 aider，用自然语言说要改什么",
      "用 /add 把文件加进上下文，/drop 移出，省 token",
      "每轮改动会自动 commit，不满意直接 git revert",
      "换模型只改 --model，比如 sonnet、gpt、deepseek",
    ],
    usageEn: [
      "Run aider inside a Git repo and describe the change",
      "/add files to context and /drop them to save tokens",
      "Each round is auto-committed; revert with git if unhappy",
      "Switch models with --model, e.g. sonnet, gpt, deepseek",
    ],
    faqZh: [
      { q: "免费吗？", a: "工具开源免费，模型 API 费用按服务商自付。" },
      { q: "必须用 Git 吗？", a: "建议在 Git 仓库里使用，自动提交和回滚才生效。" },
    ],
    faqEn: [
      { q: "Is it free?", a: "The tool is free and open source; you pay for model usage." },
      { q: "Do I need Git?", a: "Recommended — auto-commit and undo rely on a Git repo." },
    ],
  },
  {
    slug: "wanxiang",
    name: "通义万相",
    category: "image",
    region: "domestic",
    pricingZh: "网页免费额度 + 阿里云百炼按量",
    pricingEn: "Free credits + Alibaba Model Studio usage",
    website: "https://tongyi.aliyun.com/wanxiang",
    tags: ["绘画", "视频", "国产", "免费"],
    keywords: ["通义", "万相", "wan", "阿里云"],
    featured: true,
    taglineZh: "阿里云的文生图 / 文生视频，中文提示词、国内直连",
    taglineEn: "Alibaba's image & video generator with Chinese prompts",
    descZh:
      "通义万相是阿里云通义家族的视觉生成产品，网页端就能文生图、图生视频，中文提示词理解好，适合国内创作者当即梦之外的备选。开发者还可以走百炼 API 按量调用。",
    descEn:
      "Tongyi Wanxiang is Alibaba's visual generator: text-to-image and image-to-video in the browser, with strong Chinese prompt support. Developers can also call it via Model Studio APIs.",
    installZh: [
      "打开 tongyi.aliyun.com/wanxiang，用阿里云 / 淘宝 / 支付宝账号登录",
      "国内网络直连，浏览器即可用，不必装客户端",
      "新账号一般有免费生成额度，用完再考虑百炼按量或会员",
      "手机也可在通义 App 里使用同一套能力",
    ],
    installEn: [
      "Visit tongyi.aliyun.com/wanxiang and sign in with an Alibaba account",
      "Works in the browser on a mainland China network",
      "New accounts usually include free credits",
      "The Tongyi mobile app shares the same account",
    ],
    usageZh: [
      "文生图直接写中文：主体 + 风格 + 光线 + 构图",
      "出图后可再点图生视频，补一句运镜（缓推、环绕）",
      "比例选对：海报 3:4、壁纸 16:9、头像 1:1",
      "同一主体多张图时把角色外貌写死，减少漂移",
    ],
    usageEn: [
      "For images, write subject + style + lighting + framing",
      "Turn a still into video with a camera-move phrase",
      "Pick aspect ratio before generating (3:4 poster, 16:9 wallpaper)",
      "Lock character looks in the prompt for multi-image sets",
    ],
    faqZh: [
      { q: "和即梦怎么选？", a: "都免费可试用。即梦和剪映联动更顺，万相跟阿里云 / 通义生态更近，可以都备着。" },
      { q: "能商用吗？", a: "以官网授权条款为准；企业用量走百炼更清晰。" },
    ],
    faqEn: [
      { q: "Wanxiang vs Jimeng?", a: "Both have free trials. Jimeng pairs with CapCut; Wanxiang sits in the Alibaba stack." },
      { q: "Commercial use?", a: "Check the official terms; API billing via Model Studio is clearer for teams." },
    ],
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    category: "image",
    region: "global",
    pricingZh: "免费额度 + Plus 订阅",
    pricingEn: "Free credits + Plus",
    website: "https://ideogram.ai",
    tags: ["绘画", "海报", "文字"],
    keywords: ["文字海报", "logo", "typography"],
    taglineZh: "画面里能把字写清楚，做海报和 Logo 很能打",
    taglineEn: "Best-in-class text in images for posters and logos",
    descZh:
      "Ideogram 最出名的是把提示词里的文字较准确地画进图里，做海报、封面、Logo 比很多模型省事。需要外网，有免费额度。",
    descEn:
      "Ideogram is known for rendering readable text inside images, which makes posters, covers and logos much easier. Needs international access; free credits available.",
    installZh: [
      "打开 ideogram.ai，用 Google / 邮箱注册",
      "需要可访问外网的网络环境",
      "登录后在 Create 页即可出图，新号有免费积分",
      "积分用完再考虑 Plus，价格以官网为准",
    ],
    installEn: [
      "Go to ideogram.ai and sign in with Google or email",
      "Use the Create tab to generate; new accounts get free credits",
      "Upgrade to Plus when credits run out",
    ],
    usageZh: [
      "要把字画进图里，用引号把文案括起来，并写清字体风格",
      "Magic Prompt 可帮你扩写，海报类建议先开着",
      "出图后用 Upscale 放大，再下载 PNG",
      "中文海报可先写中文文案，再让它按排版生成",
    ],
    usageEn: [
      "Put the exact copy in quotes and describe the type style",
      "Magic Prompt helps expand a short idea into a fuller prompt",
      "Upscale before downloading a PNG",
      "Describe layout: title on top, subtitle below, logo bottom-left",
    ],
    faqZh: [
      { q: "中文文字效果好吗？", a: "英文最稳，中文近年好很多，重要海报仍建议生成后人工核字。" },
      { q: "和 Midjourney 比？", a: "要「图上有准确文字」选 Ideogram；要氛围和审美选 MJ。" },
    ],
    faqEn: [
      { q: "Good with non-English text?", a: "English is strongest; always proofread glyphs on final posters." },
      { q: "Vs Midjourney?", a: "Pick Ideogram for readable lettering; Midjourney for mood and aesthetics." },
    ],
  },
  {
    slug: "liblib",
    name: "哩布哩布",
    category: "image",
    region: "domestic",
    pricingZh: "免费额度 + 积分充值",
    pricingEn: "Free credits + top-ups",
    website: "https://www.liblib.art",
    tags: ["绘画", "模型", "国产", "免费"],
    keywords: ["哩布", "sd", "comfyui", "lora"],
    taglineZh: "国内的模型广场，海量 LoRA / 工作流直接在线跑",
    taglineEn: "China-based model arena: run LoRAs and workflows in the browser",
    descZh:
      "哩布哩布（LiblibAI）是面向国内用户的 AI 绘画社区与在线推理平台，不必自己装 ComfyUI 也能试用各种模型和 LoRA，适合进阶玩家找风格。",
    descEn:
      "Liblib is a China-based AI art community and hosted inference platform. You can try models and LoRAs in the browser without installing ComfyUI.",
    installZh: [
      "打开 liblib.art，用手机号注册登录",
      "国内直连，网页即可用",
      "新号有体验积分，在模型页点「在线生成」",
      "想本地跑再下载模型，新手先用在线即可",
    ],
    installEn: [
      "Visit liblib.art and sign up with a phone number",
      "Works directly in mainland China",
      "Use on-site generate with starter credits",
      "Download models later if you want a local ComfyUI setup",
    ],
    usageZh: [
      "先在广场搜风格（例如「国风」「产品渲染」），打开模型页看示例图",
      "用作者给的触发词（trigger）写提示词，比自己瞎写成功率高",
      "工作流页面可以一键跑别人的 ComfyUI 图，适合学节点",
      "出图后下载，注意模型页的协议能否商用",
    ],
    usageEn: [
      "Browse the model square by style, then open a model card",
      "Copy the author's trigger words into your prompt",
      "Workflow pages let you run someone else's graph in the cloud",
      "Check each model's license before commercial use",
    ],
    faqZh: [
      { q: "要自己装 SD 吗？", a: "不必。在线生成就能出图；只有要极致控制和批量时才值得本地部署。" },
      { q: "积分不够？", a: "每天任务 / 签到会送一点，重度用再充值，先用热门免费模型练手。" },
    ],
    faqEn: [
      { q: "Do I need Stable Diffusion locally?", a: "No. On-site generate is enough to start." },
      { q: "Out of credits?", a: "Daily check-ins help; top up only if you generate a lot." },
    ],
  },
  {
    slug: "kling",
    name: "可灵 AI",
    category: "video",
    region: "domestic",
    pricingZh: "免费额度 + 会员灵感值",
    pricingEn: "Free credits + membership",
    website: "https://klingai.com",
    tags: ["视频", "国产", "图生视频"],
    keywords: ["可灵", "快手", "kling ai"],
    featured: true,
    related: ["jimeng", "hailuo", "runway"],
    taglineZh: "快手出品的视频生成，国内用得最多的图生视频之一",
    taglineEn: "Kuaishou's video generator, a top image-to-video pick in China",
    descZh:
      "可灵是快手的 AI 视频产品，文生视频、图生视频、延长、对口型都比较齐，国内直连。免费用户有灵感值，会员档位从体验卡到高积分不等，价格以官网为准。",
    descEn:
      "Kling is Kuaishou's AI video suite: text-to-video, image-to-video, extend and lip-sync. Works in mainland China. Free users get credits; paid plans add more.",
    installZh: [
      "打开 klingai.com，用快手 / 手机号登录",
      "国内直连，网页端即可生成",
      "应用商店也可搜「可灵 AI」",
      "先用每日登录送的灵感值跑通一次，再决定是否开会员",
    ],
    installEn: [
      "Go to klingai.com and sign in",
      "Works in the browser without a VPN in China",
      "Mobile apps are listed as Kling AI",
      "Spend the daily free credits on one test clip first",
    ],
    usageZh: [
      "新手从图生视频开始：先用即梦 / 万相出一张构图干净的静帧",
      "提示词写清「谁在做什么 + 运镜」，一次只加一种镜头运动",
      "先出 5 秒预览，满意再延长，比一上来要 10 秒更省积分",
      "人物口播再用对口型，不要在一条提示词里塞剧情、转场、字幕",
    ],
    usageEn: [
      "Start with image-to-video from a clean still",
      "Prompt: who does what + one camera move",
      "Generate a short preview, then extend",
      "Use lip-sync as a separate pass for talking-head clips",
    ],
    faqZh: [
      { q: "免费能做几个视频？", a: "每天登录有少量灵感值，够练手几个短镜头；成片项目建议开会员。" },
      { q: "和 Runway / 海螺怎么选？", a: "国内直连、中文界面选可灵或海螺；要海外工作流再上 Runway。" },
    ],
    faqEn: [
      { q: "How far do free credits go?", a: "A few short clips for practice; subscribe for real projects." },
      { q: "Kling vs Runway vs Hailuo?", a: "Kling/Hailuo if you are in China; Runway for the global toolchain." },
    ],
  },
  {
    slug: "hailuo",
    name: "海螺视频",
    category: "video",
    region: "domestic",
    pricingZh: "免费试用 + 会员",
    pricingEn: "Free trial + membership",
    website: "https://hailuoai.com",
    tags: ["视频", "国产", "运镜"],
    keywords: ["海螺", "minimax", "hailuo"],
    taglineZh: "MiniMax 出品，中文提示词和运镜控制友好",
    taglineEn: "MiniMax video studio with friendly Chinese camera control",
    descZh:
      "海螺视频是 MiniMax 的消费级视频产品，网页和 App 都有，主打文生 / 图生视频和镜头控制。国内用户走 hailuoai.com，海外用户有独立入口。",
    descEn:
      "Hailuo is MiniMax's consumer video app, with text/image-to-video and camera-control presets. Mainland users go to hailuoai.com; there is a separate global entry.",
    installZh: [
      "打开 hailuoai.com，用手机号注册",
      "国内直连，网页即可创作",
      "手机应用商店搜「海螺视频」或 Hailuo AI",
      "新号有试用额度，先跑一条 5 秒图生视频",
    ],
    installEn: [
      "Visit hailuoai.com (or the global Hailuo domain) and sign up",
      "Create in the browser; iOS/Android apps are available",
      "Start with the trial quota on a 5-second image-to-video",
    ],
    usageZh: [
      "图生视频：上传一张人物或场景图，再写动作和运镜",
      "镜头控制里先只用一种运动（推、拉、摇），组合太多画面会飘",
      "主体参考适合「同一个人换场景」，先锁脸再写剧情",
      "成片下载后进剪映加字幕配乐，不要指望一条提示词出完整广告",
    ],
    usageEn: [
      "Image-to-video: upload a still, then describe action and camera",
      "Use one camera move at a time",
      "Subject reference keeps the same person across shots",
      "Edit the download in CapCut rather than prompting a full ad",
    ],
    faqZh: [
      { q: "和可灵比谁更强？", a: "各有所长，同一张图可以两边各出一条再选。可灵生态更偏快手，海螺运镜模块比较直观。" },
      { q: "商用？", a: "看当前会员条款；带平台水印的导出通常仅限个人学习。" },
    ],
    faqEn: [
      { q: "Hailuo vs Kling?", a: "Run the same still through both. Hailuo's camera presets are straightforward." },
      { q: "Commercial use?", a: "Depends on the current plan; watermarked exports are usually personal-only." },
    ],
  },
  {
    slug: "pika",
    name: "Pika",
    category: "video",
    region: "global",
    pricingZh: "免费试用 + 订阅",
    pricingEn: "Free trial + subscription",
    website: "https://pika.art",
    tags: ["视频", "特效", "图生视频"],
    keywords: ["pika labs", "pika art"],
    taglineZh: "网页里就能做花样特效的图生视频工具",
    taglineEn: "Web image-to-video with playful effects",
    descZh:
      "Pika 是较早出圈的网页 AI 视频工具，图生视频加上 Pikaffects 一类特效，适合做社交媒体短镜头。需要外网，有免费试用额度。",
    descEn:
      "Pika is a web-first AI video tool: image-to-video plus effect presets aimed at social clips. Needs international access; free trial credits included.",
    installZh: [
      "打开 pika.art，用 Google / Discord 登录",
      "需要可访问外网的网络环境",
      "新号有免费积分，直接在网页创建",
      "积分用完再订阅，档位以官网为准",
    ],
    installEn: [
      "Go to pika.art and sign in with Google or Discord",
      "Create in the browser with trial credits",
      "Subscribe when you outgrow the free quota",
    ],
    usageZh: [
      "先传一张主体清晰、背景简单的图",
      "提示词写动作，不要把整段剧本塞进去",
      "特效（变形、爆炸、毛发）当调味，一条视频只用一个",
      "导出后在剪辑软件里接上 BGM，Pika 本身不是完整剪辑器",
    ],
    usageEn: [
      "Upload a still with a clear subject and simple background",
      "Prompt the action, not a full screenplay",
      "Use one effect per clip",
      "Add music in an editor afterwards",
    ],
    faqZh: [
      { q: "国内替代？", a: "可灵、海螺、即梦视频。Pika 更适合已经有外网、想玩特效的人。" },
      { q: "免费够用吗？", a: "够试水，不够做系列内容。" },
    ],
    faqEn: [
      { q: "China alternatives?", a: "Kling, Hailuo and Jimeng. Use Pika if you already have global access." },
      { q: "Is free enough?", a: "Fine for tests, not for a series." },
    ],
  },
  {
    slug: "feishu",
    name: "飞书",
    category: "office",
    region: "domestic",
    pricingZh: "个人免费 + 商业版按席",
    pricingEn: "Free for individuals + paid seats",
    website: "https://www.feishu.cn",
    tags: ["办公", "会议", "国产", "协作"],
    keywords: ["飞书", "lark", "妙记", "多维表格"],
    featured: true,
    taglineZh: "文档、表格、会议纪要和 AI 写在同一个工作区",
    taglineEn: "Docs, sheets, meeting notes and AI in one workspace",
    descZh:
      "飞书把即时消息、云文档、多维表格、日历和会议放在一起，内置妙记转写和智能伙伴。国内团队协作很常见，个人使用有免费档。海外品牌是 Lark。",
    descEn:
      "Feishu (Lark overseas) combines chat, docs, base, calendar and meetings, with AI notes and an assistant. Common for teams in China; a free personal tier exists.",
    installZh: [
      "打开 feishu.cn，用手机号注册",
      "下载桌面端（Win/Mac）和手机 App，扫码登录",
      "个人可先建一个免费团队，把常用文档迁进去",
      "开会时用飞书会议，会后自动出妙记",
    ],
    installEn: [
      "Sign up at feishu.cn (or larksuite.com outside China)",
      "Install desktop and mobile apps",
      "Create a free workspace and move your docs in",
      "Use Feishu Meetings so minutes (Miaobi) generate afterwards",
    ],
    usageZh: [
      "会议结束打开妙记：看转写、章节和待办，确认后分享到群",
      "在文档里用智能伙伴改写、翻译、列提纲，选中一段再问",
      "多维表格适合项目看板和轻量 CRM，不必一上来上专业工具",
      "把周报模板做成文档模板，每周复制一页让 AI 按要点扩写",
    ],
    usageEn: [
      "After a meeting, open the AI notes for transcript, chapters and tasks",
      "In docs, select text and ask the assistant to rewrite or outline",
      "Use Base as a lightweight board or CRM",
      "Turn a weekly-review doc into a template and expand bullets with AI",
    ],
    faqZh: [
      { q: "和钉钉 / 企微怎么选？", a: "看团队已经在用哪套。飞书在文档和妙记上更顺；不要让一个小组同时装三套。" },
      { q: "个人免费够吗？", a: "自己做笔记、小团队试用够；要高级权限和管理再上商业版。" },
    ],
    faqEn: [
      { q: "Feishu vs other suites?", a: "Pick whatever your team already lives in. Feishu is strong at docs and meeting notes." },
      { q: "Is the free tier enough?", a: "Yes for personal notes and a small trial workspace." },
    ],
  },
  {
    slug: "gamma",
    name: "Gamma",
    category: "office",
    region: "global",
    pricingZh: "免费额度 + Plus 订阅",
    pricingEn: "Free credits + Plus",
    website: "https://gamma.app",
    tags: ["PPT", "演示", "写作"],
    keywords: ["ai ppt", "slides", "presentation", "演示文稿"],
    taglineZh: "一句话生成演示文稿，比从空白 PPT 开始快得多",
    taglineEn: "Generate a whole deck from a prompt",
    descZh:
      "Gamma 用 AI 从提纲或一句话生成可编辑的演示文稿 / 网页，排版比从空白幻灯片开始快。需要外网，有免费生成次数。",
    descEn:
      "Gamma turns an outline or a sentence into an editable deck or webdoc, much faster than starting from blank slides. Needs international access; free generations included.",
    installZh: [
      "打开 gamma.app，用 Google / 邮箱注册",
      "需要可访问外网的网络环境",
      "新号有免费生成额度，点 Create new 即可",
      "要去掉品牌水印、更高额度再升级 Plus",
    ],
    installEn: [
      "Go to gamma.app and sign in",
      "Click Create new and spend the free generations",
      "Upgrade to Plus to remove branding and raise limits",
    ],
    usageZh: [
      "用「Generate」：贴提纲或一句话主题，选风格后出整份演示",
      "生成后一定要逐页改数据，AI 数字不能当正式材料",
      "导出 PPTX / PDF 再进 Keynote / PowerPoint 微调字体",
      "对内汇报可以保持 Gamma 链接，改一页全员看到最新版",
    ],
    usageEn: [
      "Use Generate with an outline or one-line topic, then pick a theme",
      "Fact-check every number before presenting",
      "Export PPTX/PDF if stakeholders need native files",
      "Or share the Gamma link so edits stay live",
    ],
    faqZh: [
      { q: "能替代 PowerPoint 吗？", a: "适合初稿和内部分享；客户标书、政府模板仍常要回到 PPT。" },
      { q: "国内替代？", a: "美图设计室、即梦画布、WPS AI 演示，中文模板更多。" },
    ],
    faqEn: [
      { q: "Does it replace PowerPoint?", a: "Great for drafts and internal links; formal templates often still need PPT." },
      { q: "China alternatives?", a: "WPS AI and Jimeng canvas have more Chinese templates." },
    ],
  },
  {
    slug: "tingwu",
    name: "通义听悟",
    category: "office",
    region: "domestic",
    pricingZh: "免费额度 + 按量 / 高校优惠",
    pricingEn: "Free quota + usage / education plans",
    website: "https://tingwu.aliyun.com",
    tags: ["转写", "会议", "国产"],
    keywords: ["听悟", "录音转文字", "字幕", "纪要"],
    taglineZh: "音视频转文字、章节摘要和待办，开会学习都能用",
    taglineEn: "Speech-to-text, chapters and action items from recordings",
    descZh:
      "通义听悟是阿里云的音视频理解工具，上传录音或导入会议回放，就能得到转写、摘要、思维导图和待办。国内直连，适合会议纪要和网课笔记。",
    descEn:
      "Tongyi Tingwu transcribes recordings and meeting replays into text, summaries, mind maps and tasks. Works in mainland China — handy for minutes and lecture notes.",
    installZh: [
      "打开 tingwu.aliyun.com，用阿里云账号或手机号登录",
      "网页即可上传音视频，也可装浏览器插件转写网页里的音视频",
      "新用户有免费时长，高校师生可关注教育优惠",
      "会议场景也可和钉钉等办公套件打通，以官网说明为准",
    ],
    installEn: [
      "Visit tingwu.aliyun.com and sign in",
      "Upload audio/video in the browser, or use the extension",
      "New accounts include free hours; students should check education offers",
    ],
    usageZh: [
      "上传前尽量用清晰录音，杂音大会明显掉字",
      "转写完成后先看摘要和待办，再按需翻原文",
      "导出 Markdown / 思维导图，贴进飞书或 Notion 归档",
      "外语会议打开对应语言，会后再让它出中文摘要",
    ],
    usageEn: [
      "Upload a clean recording — noise drops accuracy fast",
      "Read the summary and tasks before diving into the transcript",
      "Export Markdown or a mind map into your notes app",
      "Pick the spoken language, then ask for a translated summary",
    ],
    faqZh: [
      { q: "和飞书妙记的区别？", a: "妙记绑在飞书会议里；听悟更适合「已经有一份录音 / 网课视频」的事后整理。" },
      { q: "方言行不行？", a: "普通话最稳，方言和专业名词建议转写后再人工校对一遍。" },
    ],
    faqEn: [
      { q: "Vs Feishu meeting notes?", a: "Feishu is live inside meetings; Tingwu is for files you already have." },
      { q: "Accents and jargon?", a: "Mandarin is strongest — proofread names and domain terms." },
    ],
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    category: "audio",
    region: "global",
    pricingZh: "免费额度 + 订阅",
    pricingEn: "Free credits + subscription",
    website: "https://elevenlabs.io",
    tags: ["配音", "语音", "克隆"],
    keywords: ["tts", "voice clone", "配音", "11labs"],
    featured: true,
    taglineZh: "目前最自然的 AI 配音之一，多语言口播和克隆都强",
    taglineEn: "Among the most natural AI voices, with cloning and many languages",
    descZh:
      "ElevenLabs 做文本转语音和声音克隆，口播、有声书、视频配音常用。需要外网，免费档有字符额度，商用和克隆要看套餐条款。",
    descEn:
      "ElevenLabs is a leading TTS and voice-cloning studio for narration, audiobooks and video voiceover. Needs international access; free character quota, with cloning/commercial use tied to the plan.",
    installZh: [
      "打开 elevenlabs.io，用邮箱 / Google 注册",
      "需要可访问外网的网络环境",
      "登录后进入 Text to Speech，选一个预置音色试听",
      "免费字符用完再升级，价格以官网为准",
    ],
    installEn: [
      "Sign up at elevenlabs.io",
      "Open Text to Speech and preview a stock voice",
      "Upgrade when the free character quota runs out",
    ],
    usageZh: [
      "先用预置音色，不要一上来克隆真人；克隆需要授权",
      "中文口播把标点、停顿写清楚，长文按段生成再拼接",
      "语速和稳定性滑杆先保持默认，再微调",
      "导出 MP3 进剪映 / PR，口型不对就按句切开对齐",
    ],
    usageEn: [
      "Start with stock voices; only clone a voice you have rights to",
      "Punctuate Chinese (or any language) for pauses; generate long scripts in chunks",
      "Leave stability sliders near default at first",
      "Export MP3 and align in your editor",
    ],
    faqZh: [
      { q: "能克隆自己的声音吗？", a: "可以，但必须是你有权使用的声音，并遵守平台对克隆的条款，不要去克隆别人。" },
      { q: "国内替代？", a: "MiniMax 语音、通义、火山引擎语音。ElevenLabs 在多语言自然度上仍常被当作标杆。" },
    ],
    faqEn: [
      { q: "Can I clone my voice?", a: "Yes if you own it and the plan allows cloning. Never clone someone else." },
      { q: "China alternatives?", a: "MiniMax Speech, Tongyi and Volcengine TTS. ElevenLabs is still a quality benchmark." },
    ],
  },
  {
    slug: "udio",
    name: "Udio",
    category: "audio",
    region: "global",
    pricingZh: "免费额度 + 订阅",
    pricingEn: "Free credits + subscription",
    website: "https://www.udio.com",
    tags: ["音乐", "编曲"],
    keywords: ["udio ai", "ai song"],
    taglineZh: "和 Suno 并列的 AI 歌曲工具，音质和编曲细节常被称赞",
    taglineEn: "Suno's usual rival: detailed arrangements and strong audio quality",
    descZh:
      "Udio 用一句话或自定义歌词生成完整歌曲，编曲层次和音质是它常被拿来和 Suno 对比的点。需要外网，有免费额度。",
    descEn:
      "Udio generates full songs from a prompt or custom lyrics. Arrangement detail and fidelity are why it is compared with Suno. Needs international access; free credits included.",
    installZh: [
      "打开 udio.com，用 Google / 邮箱登录",
      "需要可访问外网的网络环境",
      "新号有免费生成次数，网页即可创作",
      "要更高额度、商用条款再订阅，以官网为准",
    ],
    installEn: [
      "Sign in at udio.com",
      "Create in the browser with the free quota",
      "Subscribe for higher limits and the commercial terms you need",
    ],
    usageZh: [
      "简单模式：写风格 + 情绪 + 主题，例如「复古城市流行，周五下班」",
      "自定义歌词时段落标上 Verse / Chorus，结构会稳很多",
      "一次出多条选最顺耳的 Extend，不要在一条上反复叠词",
      "短视频 BGM 优先纯音乐 / instrumental，避免人声抢旁白",
    ],
    usageEn: [
      "Simple mode: genre + mood + topic",
      "Tag custom lyrics with Verse / Chorus",
      "Generate several takes, then extend the best one",
      "Pick instrumentals for video beds under voiceover",
    ],
    faqZh: [
      { q: "和 Suno 选哪个？", a: "两个都值得各跑一遍同一段歌词。Suno 更流行向，Udio 常被说编曲更细。" },
      { q: "中文歌？", a: "能唱，咬字和韵脚仍建议人工改词后再生成。" },
    ],
    faqEn: [
      { q: "Udio vs Suno?", a: "Run the same lyrics on both. Suno leans pop-catchy; Udio is often praised for arrangement." },
      { q: "Non-English vocals?", a: "Works, but edit rhymes before the final take." },
    ],
  },
  {
    slug: "mureka",
    name: "Mureka",
    category: "audio",
    region: "domestic",
    pricingZh: "免费试用 + 会员",
    pricingEn: "Free trial + membership",
    website: "https://www.mureka.cn",
    tags: ["音乐", "国产", "歌词"],
    keywords: ["天工", "昆仑", "skymusic", "mureka"],
    taglineZh: "昆仑万维的 AI 音乐，中文歌和分轨导出比较友好",
    taglineEn: "Skywork's AI music studio with stronger Chinese vocals and stems",
    descZh:
      "Mureka 是昆仑万维（天工）的 AI 音乐产品，支持提示词或歌词生成歌曲，中文演唱和分轨是国内创作者常提的优点。网页 mureka.cn 可直连。",
    descEn:
      "Mureka is Skywork's AI music product: prompt or lyrics in, full songs out. Chinese vocals and stem export are frequent reasons to pick it. mureka.cn works in mainland China.",
    installZh: [
      "打开 mureka.cn，用手机号注册",
      "国内直连，网页即可生成",
      "也有海外域名，国内用户用 .cn 即可",
      "先用免费次数出一首，再看要不要开会员",
    ],
    installEn: [
      "Sign up at mureka.cn (or the global Mureka site)",
      "Generate in the browser with trial credits",
      "Subscribe if you need stems and higher volume",
    ],
    usageZh: [
      "自定义歌词用中文时注意韵脚，先让对话模型改一版再贴进来",
      "选曲风和人声性别，不要在提示词里堆十种风格",
      "需要后期混音就导出分轨，没有分轨权限再考虑升级",
      "短视频配乐选纯音乐，避免和口播抢人声",
    ],
    usageEn: [
      "Polish Chinese lyrics (rhyme and tone) before pasting",
      "Pick one genre and a vocal gender",
      "Export stems when you need to mix",
      "Use instrumentals under spoken video",
    ],
    faqZh: [
      { q: "和 Suno / 海绵音乐？", a: "要国内直连、中文歌：Mureka 或海绵；已经在用 Suno 就继续，不必强迁。" },
      { q: "能商用吗？", a: "看当前套餐的授权说明，上传参考音频时不要用别人的版权歌当素材。" },
    ],
    faqEn: [
      { q: "Vs Suno?", a: "Use Mureka if you need China access and Chinese vocals; stay on Suno if it already fits." },
      { q: "Commercial use?", a: "Read the plan license; do not upload copyrighted reference tracks you do not own." },
    ],
  },
  {
    slug: "cc-switch",
    name: "CC Switch",
    category: "code",
    region: "both",
    pricingZh: "软件开源免费，模型 API 自付",
    pricingEn: "App is free; you pay the API",
    website: "https://github.com/farion1231/cc-switch",
    tags: ["CLI", "API", "切换"],
    keywords: ["ccswitch", "cc-switch", "供应商", "中转", "api key"],
    taglineZh: "给 Claude Code / Codex / Gemini 一键切换 API 供应商",
    taglineEn: "One-click API provider switching for Claude Code, Codex and Gemini",
    descZh:
      "CC Switch 是电脑端配置工具，用来给 Claude Code、Codex、Gemini CLI、OpenCode 保存多套 API 地址和 Key。官方订阅登录之外，用 Key 或中转时不用反复手改配置文件。软件本身免费，额度在各家控制台。",
    descEn:
      "CC Switch is a desktop profile manager for Claude Code, Codex, Gemini CLI and OpenCode. Store API hosts and keys and apply them in one click instead of editing config files. The app is free; usage is billed by each provider.",
    installZh: [
      "打开 github.com/farion1231/cc-switch/releases，下载对应系统安装包",
      "macOS 拖进应用程序，Windows 运行安装程序",
      "打开 CC Switch，左边选 Claude Code / Codex 等应用",
      "添加供应商：名称、API 地址、Key，设为当前后重启对应 CLI",
    ],
    installEn: [
      "Download the installer from github.com/farion1231/cc-switch/releases",
      "Install on macOS or Windows and launch CC Switch",
      "Pick Claude Code / Codex on the left",
      "Add a provider (name, base URL, key), set it current, restart the CLI",
    ],
    usageZh: [
      "换供应商后必须完全退出再打开 CLI，否则还在用旧环境变量",
      "Claude Code 走 Anthropic 协议，Codex 走 OpenAI 协议，Key 不要交叉填",
      "API 地址一般只填根域名，不要自己加 /v1",
      "Key 当密码保管，不要发到聊天或截图里",
    ],
    usageEn: [
      "Fully quit and reopen the CLI after switching",
      "Don’t put a Claude key on Codex — different protocols",
      "Base URL is usually the host only, without /v1",
      "Treat keys like passwords",
    ],
    faqZh: [
      { q: "能替代官方订阅吗？", a: "可以改走 API Key 或中转，但额度仍要向对应控制台付费。CC Switch 只负责切换配置。" },
      { q: "和 Claude Code 教程什么关系？", a: "先能装上 Claude Code，再用 CC Switch 管 Key。两边教程要一起看。" },
    ],
    faqEn: [
      { q: "Does this replace a subscription?", a: "It switches configs. You still pay the API or gateway." },
      { q: "Relation to Claude Code?", a: "Install Claude Code first, then use CC Switch to manage keys." },
    ],
  },
  {
    slug: "trae",
    name: "Trae",
    category: "code",
    region: "domestic",
    pricingZh: "国内版个人免费（可能排队）",
    pricingEn: "China personal build is free (queues possible)",
    website: "https://www.trae.cn/",
    tags: ["IDE", "国产", "免费"],
    keywords: ["trae", "trae cn", "字节", "豆包 ide"],
    featured: true,
    related: ["cursor", "codebuddy", "windsurf"],
    taglineZh: "字节的国产 AI IDE，中文界面，国内直连",
    taglineEn: "ByteDance’s China AI IDE — Chinese UI, no VPN",
    descZh:
      "Trae 是字节跳动的 AI 编程 IDE，国内版走 trae.cn，手机号登录，内置豆包 / DeepSeek 等国产模型。有 Chat、Builder、SOLO 几种模式，可从 VS Code 导入插件。和国际版 trae.ai 账号不通用。",
    descEn:
      "Trae is ByteDance’s AI IDE. The China build at trae.cn signs in with a phone number and local models. Chat, Builder and SOLO modes; VS Code plugins can be imported. Separate from trae.ai.",
    installZh: [
      "打开 trae.cn（或 trae.com.cn）下载 Windows / macOS 安装包，不要下国际版 trae.ai",
      "安装后选简体中文，用手机号或掘金登录",
      "File → Open Folder 打开项目",
      "需要命令行时，在命令面板安装 trae 命令",
    ],
    installEn: [
      "Download from trae.cn, not trae.ai",
      "Install, pick Simplified Chinese, sign in with a phone number",
      "File → Open Folder",
      "Optionally install the trae shell command",
    ],
    usageZh: [
      "问答用 Chat，从零搭项目用 Builder，长任务看 SOLO",
      "输入框旁切换模型，高峰可能排队",
      "可在设置里添加自定义 API 模型",
    ],
    usageEn: [
      "Chat for Q&A, Builder to scaffold, SOLO for longer agent runs",
      "Switch models next to the composer; queues happen at peak",
      "Add a custom API model in Settings if you need one",
    ],
    faqZh: [
      { q: "国内版和国际版？", a: "国内版 trae.cn、手机号、国产模型；国际版 trae.ai 要外网，账号不通用。" },
      { q: "和 Cursor 怎么选？", a: "国内直连、免费先试 Trae；已经在用 Cursor 外网工作流不必强迁。" },
    ],
    faqEn: [
      { q: "China vs international?", a: "trae.cn is the China app. trae.ai is a different login and plan." },
      { q: "Vs Cursor?", a: "Pick Trae if you need China access and a free start." },
    ],
  },
  {
    slug: "codebuddy",
    name: "CodeBuddy",
    category: "code",
    region: "domestic",
    pricingZh: "体验档 + 个人月付（人民币）",
    pricingEn: "Trial + RMB monthly plans",
    website: "https://www.codebuddy.cn/",
    tags: ["IDE", "CLI", "国产"],
    keywords: ["腾讯", "腾讯云代码助手", "腾讯 agent", "codebuddy", "copilot.tencent"],
    related: ["trae", "cursor", "workbuddy"],
    taglineZh: "腾讯云编程智能体，IDE / 插件 / 命令行都能用",
    taglineEn: "Tencent Cloud coding agent: IDE, plugins and CLI",
    descZh:
      "CodeBuddy（腾讯云代码助手）是腾讯的编程 Agent，覆盖独立 IDE、VS Code / JetBrains 插件和终端 CLI。国内站微信或手机号登录。办公向的 WorkBuddy（龙虾）是另一款产品。",
    descEn:
      "CodeBuddy is Tencent Cloud’s coding agent: a standalone IDE, editor plugins, and a CLI. Sign in on the China site with WeChat or a phone number. WorkBuddy is a separate office agent.",
    installZh: [
      "打开 codebuddy.cn 或 copilot.tencent.com，下载 IDE 安装包",
      "安装后用微信或手机号登录国内站",
      "打开文件夹开始对话写代码",
      "要用终端：npm i -g @tencent-ai/codebuddy-code（需套餐含 CLI）",
    ],
    installEn: [
      "Download the IDE from codebuddy.cn",
      "Sign in via the Chinese site with WeChat or phone",
      "Open a folder and chat to code",
      "CLI: npm i -g @tencent-ai/codebuddy-code if your plan includes it",
    ],
    usageZh: [
      "IDE 里用自然语言描述需求，让它改代码、预览",
      "CLI 在项目目录运行 codebuddy，选 Log in via Chinese Site",
      "体验档积分有限，CLI 可能未开通",
    ],
    usageEn: [
      "Describe the change in the IDE chat",
      "In a repo, run codebuddy and pick Chinese Site login",
      "The trial quota is small; CLI may be locked",
    ],
    faqZh: [
      { q: "和 Trae / Cursor？", a: "都是 AI IDE。腾讯云、微信登录选 CodeBuddy；字节国内免费选 Trae；外网 Cursor 另算。" },
      { q: "WorkBuddy 是不是同一个？", a: "不是。WorkBuddy 偏办公智能体；写代码用 CodeBuddy。" },
    ],
    faqEn: [
      { q: "Vs Trae / Cursor?", a: "CodeBuddy if you’re in Tencent Cloud; Trae for ByteDance’s free China IDE." },
      { q: "Is WorkBuddy the same?", a: "No. WorkBuddy is an office agent; CodeBuddy is for code." },
    ],
  },
  {
    slug: "tongyi",
    name: "通义千问",
    category: "chat",
    region: "domestic",
    pricingZh: "网页免费额度 + 百炼按量",
    pricingEn: "Free web quota + Model Studio",
    website: "https://tongyi.aliyun.com",
    tags: ["对话", "国产", "免费"],
    keywords: ["通义", "千问", "qwen", "阿里"],
    related: ["doubao", "kimi", "yuanbao"],
    taglineZh: "阿里云的对话助手，和万相、听悟同一账号",
    taglineEn: "Alibaba’s chat assistant, same account as Wanxiang",
    descZh:
      "通义千问是阿里云通义家族的对话产品，网页和 App 都能用，适合已经有淘宝 / 支付宝账号的人。同一账号还能用万相和听悟。",
    descEn:
      "Tongyi Qianwen is Alibaba’s chat app. A Taobao or Alipay login also unlocks Wanxiang and Tingwu.",
    installZh: [
      "打开 tongyi.aliyun.com，用淘宝 / 支付宝登录",
      "国内直连，浏览器即可",
      "先问一件具体的事，再考虑换模型",
    ],
    installEn: [
      "Visit tongyi.aliyun.com and sign in with Taobao or Alipay",
      "Works in the browser in mainland China",
      "Ask one concrete job before switching models",
    ],
    usageZh: ["长文档先要三条结论", "和通义万相、听悟共用账号"],
    usageEn: ["Ask for three takeaways on long docs", "Same account as Wanxiang and Tingwu"],
    faqZh: [{ q: "和豆包？", a: "阿里系选通义，字节系选豆包。" }],
    faqEn: [{ q: "Vs Doubao?", a: "Tongyi if you’re in Alibaba’s world; Doubao for ByteDance." }],
  },
  {
    slug: "yuanbao",
    name: "腾讯元宝",
    category: "chat",
    region: "domestic",
    pricingZh: "免费额度 + 会员",
    pricingEn: "Free quota + membership",
    website: "https://yuanbao.tencent.com",
    tags: ["对话", "国产", "微信"],
    keywords: ["元宝", "腾讯 ai", "混元"],
    related: ["doubao", "tongyi", "workbuddy"],
    taglineZh: "腾讯的 AI 助手，微信登录就能用",
    taglineEn: "Tencent’s assistant — sign in with WeChat",
    descZh:
      "元宝是腾讯的消费级 AI 助手，微信登录，适合写公众号、问国内资讯、和腾讯文档一起用。写代码请看 CodeBuddy，办公代劳看 WorkBuddy。",
    descEn:
      "Yuanbao is Tencent’s consumer chat app. WeChat login. For coding see CodeBuddy; for desktop chores see WorkBuddy.",
    installZh: [
      "打开 yuanbao.tencent.com，微信登录",
      "国内直连",
      "先问一件能核对的事",
    ],
    installEn: [
      "Open yuanbao.tencent.com and sign in with WeChat",
      "Works in mainland China",
      "Ask something you can verify",
    ],
    usageZh: ["适合微信生态里的材料", "专业结论仍要核原文"],
    usageEn: ["Handy with WeChat-world files", "Still check sources"],
    faqZh: [{ q: "和 WorkBuddy？", a: "元宝是聊天；WorkBuddy 是装在电脑里干活的龙虾。" }],
    faqEn: [{ q: "Vs WorkBuddy?", a: "Yuanbao is chat; WorkBuddy is a desktop agent." }],
  },
  {
    slug: "coze",
    name: "扣子",
    category: "chat",
    region: "domestic",
    pricingZh: "个人免费额度 + API 按量",
    pricingEn: "Free personal quota + API",
    website: "https://www.coze.cn",
    tags: ["智能体", "国产", "机器人"],
    keywords: ["coze", "扣子空间", "bot"],
    related: ["doubao", "yuanbao"],
    taglineZh: "字节的智能体搭建平台，用模板就能做一个 Bot",
    taglineEn: "ByteDance’s agent builder — start from a template",
    descZh:
      "扣子（Coze）用来搭自己的 Bot：知识库、插件、发布到豆包等渠道。国内用 coze.cn，和国际站 coze.com 账号不通用。",
    descEn:
      "Coze is ByteDance’s agent builder. China is coze.cn; coze.com is a separate login.",
    installZh: [
      "打开 coze.cn，抖音或手机号登录",
      "从模板创建 Bot，不要从空白人设开始",
      "预览里问三句再发布",
    ],
    installEn: [
      "Sign in at coze.cn",
      "Create a bot from a template",
      "Preview three questions before publishing",
    ],
    usageZh: ["知识库先传你熟悉的材料", "发布渠道以当前控制台为准"],
    usageEn: ["Upload a doc you know into the knowledge base", "Publish targets are listed in the console"],
    faqZh: [{ q: "国内还是国际？", a: "国内用 coze.cn。" }],
    faqEn: [{ q: "CN or global?", a: "Use coze.cn in mainland China." }],
  },
  {
    slug: "workbuddy",
    name: "WorkBuddy",
    category: "office",
    region: "domestic",
    pricingZh: "体验积分 + 套餐",
    pricingEn: "Trial credits + plans",
    website: "https://www.workbuddy.cn",
    tags: ["办公", "智能体", "国产"],
    keywords: ["龙虾", "腾讯龙虾", "小龙虾", "claw"],
    related: ["codebuddy", "feishu", "notion-ai"],
    taglineZh: "腾讯龙虾：装在电脑里、能改本地文件的办公 Agent",
    taglineEn: "Tencent’s desktop office agent that can work on local files",
    descZh:
      "WorkBuddy 是腾讯的桌面办公智能体（龙虾），下载即用，用自然语言处理本地文档、表格。和写代码的 CodeBuddy 分开装。",
    descEn:
      "WorkBuddy is Tencent’s desktop office agent. It runs locally on your files. Install separately from CodeBuddy.",
    installZh: [
      "打开 workbuddy.cn 或 codebuddy.cn/work 下载桌面端",
      "微信登录",
      "文件夹权限先只开桌面 / 文档 / 下载",
      "先下一件小事再授权更多目录",
    ],
    installEn: [
      "Download from workbuddy.cn",
      "Sign in with WeChat",
      "Grant Desktop/Documents/Downloads only at first",
      "Give one small job before more permissions",
    ],
    usageZh: ["规划模式适合重要文件", "不要把密码本放进授权目录"],
    usageEn: ["Use plan mode on important files", "Don’t grant your secrets folder"],
    faqZh: [{ q: "和元宝？", a: "元宝是网页聊天；WorkBuddy 会动你电脑上的文件。" }],
    faqEn: [{ q: "Vs Yuanbao?", a: "Yuanbao is chat; WorkBuddy edits local files." }],
  },
  {
    slug: "metaso",
    name: "秘塔 AI 搜索",
    category: "office",
    region: "domestic",
    pricingZh: "免费搜索 + 高级功能",
    pricingEn: "Free search + extras",
    website: "https://metaso.cn",
    tags: ["搜索", "资料", "国产"],
    keywords: ["秘塔", "ai 搜索", "论文"],
    related: ["kimi", "tingwu"],
    taglineZh: "带引用的 AI 搜索，适合查资料和论文",
    taglineEn: "Cited AI search for papers and briefings",
    descZh:
      "秘塔偏检索和综述，问完整问题并核对引用。和 Kimi 上传长文精读可以互补。",
    descEn:
      "Metaso is search-and-cite. Complements Kimi’s long-doc reading.",
    installZh: [
      "打开 metaso.cn，按提示登录或直接搜",
      "用完整句子提问",
      "点开引用核原文",
    ],
    installEn: [
      "Open metaso.cn",
      "Ask a full-sentence question",
      "Open citations before you trust the summary",
    ],
    usageZh: ["适合论文、政策、新闻综述", "不要把摘要直接当结论"],
    usageEn: ["Good for papers and news briefs", "Don’t treat the summary as the source"],
    faqZh: [{ q: "和 Kimi？", a: "秘塔是搜；Kimi 是读你丢进去的文件。" }],
    faqEn: [{ q: "Vs Kimi?", a: "Metaso searches the web; Kimi reads your files." }],
  },
  {
    slug: "ernie",
    name: "文心一言",
    category: "chat",
    region: "domestic",
    pricingZh: "基础免费 + 积分",
    pricingEn: "Free basic + credits",
    website: "https://yiyan.baidu.com",
    tags: ["对话", "国产", "百度"],
    keywords: ["文心", "一言", "ernie", "百度"],
    related: ["tongyi", "doubao", "yuanbao"],
    taglineZh: "百度的对话模型，百度账号就能用",
    taglineEn: "Baidu’s chat model — sign in with Baidu",
    descZh:
      "文心一言适合已经有百度账号、要查国内公开信息或写中文初稿的人。",
    descEn:
      "Ernie Bot is handy if you already have a Baidu account and need China-web answers or Chinese drafts.",
    installZh: [
      "打开 yiyan.baidu.com，百度账号登录",
      "国内直连",
      "先问能核对的问题",
    ],
    installEn: [
      "Sign in at yiyan.baidu.com with Baidu",
      "Works in mainland China",
      "Ask something you can verify",
    ],
    usageZh: ["国内公开信息检索", "初稿仍要人工改"],
    usageEn: ["China-web lookup", "Edit drafts before publishing"],
    faqZh: [{ q: "和通义、豆包？", a: "选你已经有账号的那家。" }],
    faqEn: [{ q: "Vs Tongyi / Doubao?", a: "Use whichever account you already have." }],
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);

const SVG_ICONS = new Set([
  "wanxiang",
  "ideogram",
  "liblib",
  "kling",
  "hailuo",
  "pika",
  "feishu",
  "gamma",
  "tingwu",
  "elevenlabs",
  "udio",
  "mureka",
  "cc-switch",
  "trae",
  "codebuddy",
  "tongyi",
  "yuanbao",
  "coze",
  "workbuddy",
  "metaso",
  "ernie",
]);

export const toolIcon = (slug: string) =>
  SVG_ICONS.has(slug) ? `/icons/${slug}.svg` : `/icons/${slug}.png`;

export const toolsByCategory = (category: string) =>
  tools.filter((t) => t.category === category);

export const featuredTools = tools.filter((t) => t.featured);

export const CC_SWITCH_SLUG = "cc-switch";

export const ccSwitchTools = () => tools.filter((t) => t.ccSwitch);

export function relatedTools(tool: Tool, limit = 4): Tool[] {
  const named = (tool.related ?? [])
    .map((slug) => getTool(slug))
    .filter((t): t is Tool => Boolean(t) && t.slug !== tool.slug);
  if (named.length >= limit) return named.slice(0, limit);
  const extra = tools.filter(
    (t) =>
      t.slug !== tool.slug &&
      t.category === tool.category &&
      !named.some((n) => n.slug === t.slug),
  );
  return [...named, ...extra].slice(0, limit);
}
