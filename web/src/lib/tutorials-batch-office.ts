import type { TutorialSet } from "./tutorial-types";

export const officeTutorials: TutorialSet = {
  "notion-ai": {
    zh: {
      difficulty: "入门",
      os: "网页 / 桌面端 / iOS / Android",
      prereq: [
        {
          label: "Notion 账号",
          detail: "打开 notion.so 用邮箱或 Google 注册。国内一般能打开网页，偶尔偏慢，不必先装客户端。",
        },
        {
          label: "AI 额度",
          detail:
            "Workspace 带一定 AI 次数，用完需 Plus 或 AI 插件（名称和价格以官网为准）。先把免费次数用在「总结会议」这种高价值动作上。",
        },
      ],
      steps: [
        {
          title: "注册并新建一个工作区",
          blocks: [
            {
              kind: "text",
              text: "用个人邮箱注册即可。团队协作再开 Team，避免一开始就把私人笔记放进别人的 Workspace。",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/site.png",
              caption: "Notion 官网入口",
            },
          ],
        },
        {
          title: "在页面里唤出 AI",
          blocks: [
            {
              kind: "shot",
              src: "/shots/notion-ai/ask-ai.svg",
              caption: "选中文字或按空格 / 快捷键唤出 Ask AI",
            },
            {
              kind: "list",
              items: [
                "空白页按空格，选 Ask AI，让它按提纲生成一页周报",
                "选中会议速记，点 Summarize / 翻译 / Improve writing",
                "长文用「改成三条要点」再人工补数据和责任人",
              ],
            },
            {
              kind: "warn",
              text: "AI 写出来的数字、法规、引文都要核对。Notion AI 不是资料库，它只会改写你页面上的内容并调用模型。",
            },
          ],
        },
        {
          title: "和笔记工作流绑在一起",
          blocks: [
            {
              kind: "text",
              text: "给会议、读书、项目各建一个数据库，新页用模板。模板里留「原始记录 / AI 摘要 / 我的结论」三块，避免摘要覆盖原材料。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "没有 Ask AI 按钮",
          fix: "确认当前 Workspace 已开启 AI；免费额度用尽会灰掉。看 Settings → Workspace 里的 AI。",
        },
        {
          problem: "页面很慢",
          fix: "网页换 Chrome，关掉同时开着的几十个 Notion 页；桌面端有时更稳。",
        },
        {
          problem: "担心内容被训练",
          fix: "看当前企业条款。高度敏感的内容不要放进云端笔记，或使用企业协议。",
        },
      ],
      cost: "Notion 本体有免费个人档。AI 按 Workspace 计费，大约是订阅附加项，以 notion.so/pricing 为准。国内银行卡能否支付取决于当前渠道。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / desktop / iOS / Android",
      prereq: [
        {
          label: "Notion account",
          detail: "Sign up at notion.so with email or Google.",
        },
        {
          label: "AI quota",
          detail:
            "Workspaces include some AI responses. Spend them on summaries, not toy prompts. Paid AI is a workspace add-on — see official pricing.",
        },
      ],
      steps: [
        {
          title: "Create your own workspace",
          blocks: [
            {
              kind: "text",
              text: "Use a personal email first. Do not dump private notes into someone else’s team workspace.",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/site.png",
              caption: "Notion marketing / sign-in",
            },
          ],
        },
        {
          title: "Summon AI on a page",
          blocks: [
            {
              kind: "shot",
              src: "/shots/notion-ai/ask-ai.svg",
              caption: "Select text or press space to Ask AI",
            },
            {
              kind: "list",
              items: [
                "On a blank page, ask it to draft a weekly update from bullets",
                "Select meeting notes → Summarize / Translate / Improve",
                "Keep a “source / AI summary / my take” structure so drafts do not overwrite raw notes",
              ],
            },
            {
              kind: "warn",
              text: "Verify figures and citations. Notion AI rewrites what is on the page; it is not your system of record.",
            },
          ],
        },
        {
          title: "Bind it to templates",
          blocks: [
            {
              kind: "text",
              text: "One database each for meetings, reading and projects. Put AI prompts in the template so every new page is consistent.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "No Ask AI control",
          fix: "Enable AI on the workspace; a spent quota greys it out. Check Settings → Workspace.",
        },
        {
          problem: "The page crawls",
          fix: "Fewer open tabs, or the desktop app.",
        },
        {
          problem: "Training / privacy worries",
          fix: "Read the current enterprise terms; keep truly sensitive material out of cloud docs.",
        },
      ],
      cost: "The personal Notion plan can be free. AI is billed per workspace as an add-on — see notion.so/pricing.",
    },
  },

  feishu: {
    zh: {
      difficulty: "入门",
      os: "网页 / Windows / macOS / iOS / Android，国内直连",
      prereq: [
        {
          label: "手机号",
          detail: "feishu.cn 注册。如果团队已经在用飞书，让管理员发邀请，不要自己再开一个互不相通的企业。",
        },
      ],
      steps: [
        {
          title: "注册并装齐客户端",
          blocks: [
            {
              kind: "text",
              text: "网页能用，但会议和消息还是桌面端稳。Win / Mac 从官网下载，手机扫码登录。",
            },
            {
              kind: "shot",
              src: "/shots/feishu/site.svg",
              caption: "飞书注册页示意图",
            },
          ],
        },
        {
          title: "用一次「开会 → 妙记 → 文档」闭环",
          blocks: [
            {
              kind: "shot",
              src: "/shots/feishu/workspace.svg",
              caption: "工作区里消息、云文档、会议在一起",
            },
            {
              kind: "list",
              items: [
                "日历上建一场飞书会议，开录音 / 纪要（权限以管理员设置为准）",
                "结束后打开妙记：核对人名，把待办指派出去",
                "在云文档选中段落，让智能伙伴改写成对内通知",
              ],
            },
            {
              kind: "note",
              text: "海外团队用 Lark（larksuite.com），账号体系和飞书国内版并不自动打通。",
            },
          ],
        },
        {
          title: "多维表格先当看板",
          blocks: [
            {
              kind: "text",
              text: "先建「任务 / 负责人 / 截止日期」三列，再谈自动化。一上来上复杂公式，小组不会用。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "加入不了公司租户",
          fix: "必须用管理员邀请的邮箱或手机号；自己注册的是另一个企业，看起来像飞书，数据却不在一起。",
        },
        {
          problem: "妙记是空的",
          fix: "会议未开录音、或租户关掉了纪要。主持人在会中确认「智能纪要」已开。",
        },
        {
          problem: "智能伙伴没反应",
          fix: "个人免费档和商业档能力不同；也有可能是管理员关闭。看帮助中心当前说明。",
        },
      ],
      cost: "个人和小团队有免费档。商业版按席位，以 feishu.cn 定价页为准。妙记时长也可能按套餐计算。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / Windows / macOS / iOS / Android",
      prereq: [
        {
          label: "Phone number or team invite",
          detail:
            "Register at feishu.cn, or join the tenant your admin already runs. Do not create a second company.",
        },
      ],
      steps: [
        {
          title: "Install desktop + mobile",
          blocks: [
            {
              kind: "text",
              text: "Web works; meetings are more reliable in the desktop app. Scan to sign in on the phone.",
            },
            {
              kind: "shot",
              src: "/shots/feishu/site.svg",
              caption: "Feishu sign-up schematic",
            },
          ],
        },
        {
          title: "Run one meeting → notes → doc loop",
          blocks: [
            {
              kind: "shot",
              src: "/shots/feishu/workspace.svg",
              caption: "Chat, docs and meetings in one workspace",
            },
            {
              kind: "list",
              items: [
                "Schedule a Feishu meeting with recording / AI minutes enabled",
                "After the call, fix names in the notes and assign tasks",
                "Select a paragraph in Docs and ask the assistant to rewrite it as an internal notice",
              ],
            },
            {
              kind: "note",
              text: "International teams use Lark (larksuite.com); it is not the same tenant as Feishu China.",
            },
          ],
        },
        {
          title: "Use Base as a simple board",
          blocks: [
            {
              kind: "text",
              text: "Start with task / owner / due date. Add automations only after the team actually updates the rows.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Cannot join the company",
          fix: "You must be invited. A self-registered tenant looks like Feishu but holds none of the files.",
        },
        {
          problem: "Empty meeting notes",
          fix: "Recording or AI minutes were off. The host must enable them during the call.",
        },
        {
          problem: "Assistant missing",
          fix: "Plan limits or an admin toggle. Check current Feishu help.",
        },
      ],
      cost: "Free for small personal use. Business is per-seat. Minutes may be metered — see feishu.cn pricing.",
    },
  },

  gamma: {
    zh: {
      difficulty: "入门",
      os: "网页，需可访问 gamma.app 的网络",
      prereq: [
        {
          label: "账号",
          detail: "用 Google 或邮箱注册。国内访问需要外网。",
        },
      ],
      steps: [
        {
          title: "登录并点 Generate",
          blocks: [
            {
              kind: "shot",
              src: "/shots/gamma/site.svg",
              caption: "Gamma 生成入口示意图",
            },
            {
              kind: "text",
              text: "选择 Presentation，把提纲贴进去：每行一个要点。主题句比「帮我做个 PPT」有用得多。",
            },
          ],
        },
        {
          title: "改内容，不要只换皮肤",
          blocks: [
            {
              kind: "shot",
              src: "/shots/gamma/workspace.svg",
              caption: "生成后逐页改数字和结论",
            },
            {
              kind: "list",
              items: [
                "删掉空话页，每页只留一个结论",
                "数字全部换成你自己的表，AI 会编造增长",
                "需要给不会用 Gamma 的人：导出 PPTX 或 PDF",
              ],
            },
            {
              kind: "warn",
              text: "客户标书、政府模板往往有固定母版，Gamma 适合内部分享和初稿，不适合直接当最终合规文件。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "打不开官网",
          fix: "确认外网；换节点后清缓存。不要用搜出来的「Gamma 中文镜像」。",
        },
        {
          problem: "免费次数用完",
          fix: "先在同一份稿上改，而不是反复 Generate。升级 Plus 以官网为准。",
        },
      ],
      cost: "有免费生成次数。Plus 去掉品牌并提高额度，价格见 gamma.app/pricing。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (gamma.app)",
      prereq: [
        {
          label: "Account",
          detail: "Google or email. Needs international access from mainland China.",
        },
      ],
      steps: [
        {
          title: "Generate from an outline",
          blocks: [
            {
              kind: "shot",
              src: "/shots/gamma/site.svg",
              caption: "Gamma generate entry",
            },
            {
              kind: "text",
              text: "Pick Presentation and paste bullets — one idea per line — instead of “make a PPT”.",
            },
          ],
        },
        {
          title: "Edit the facts",
          blocks: [
            {
              kind: "shot",
              src: "/shots/gamma/workspace.svg",
              caption: "Replace every invented number",
            },
            {
              kind: "list",
              items: [
                "One point per card",
                "Swap in your real figures",
                "Export PPTX/PDF for stakeholders who will not open Gamma",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Site will not load",
          fix: "Check the network; avoid unofficial “Gamma China” clones.",
        },
        {
          problem: "Out of free generations",
          fix: "Iterate the existing deck instead of regenerating. See Plus pricing on the site.",
        },
      ],
      cost: "Free generations to start. Plus removes branding and raises limits — gamma.app/pricing.",
    },
  },

  tingwu: {
    zh: {
      difficulty: "入门",
      os: "网页 / 浏览器插件，国内直连",
      prereq: [
        {
          label: "阿里云或手机号账号",
          detail: "打开 tingwu.aliyun.com 登录。高校师生可留意教育优惠，以活动页为准。",
        },
        {
          label: "音视频文件",
          detail: "会议录音、网课、访谈。单声道、人声清楚的 m4a / mp3 / mp4 最稳。",
        },
      ],
      steps: [
        {
          title: "登录并导入文件",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tingwu/site.svg",
              caption: "通义听悟登录示意图",
            },
            {
              kind: "text",
              text: "点导入音视频，选对语言（普通话 / 英语等）。语言选错，专有名词会大面积错。",
            },
          ],
        },
        {
          title: "先读摘要，再校对原文",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tingwu/workspace.svg",
              caption: "摘要、待办和转写在同一份记录里",
            },
            {
              kind: "list",
              items: [
                "看章节和待办，把责任人改成真名",
                "专有名词、数字对着录音点回去听",
                "导出 Markdown 或思维导图，存进飞书 / Notion",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "转写全是错字",
          fix: "录音太吵或语言选错。换安静设备重录，或先用降噪再传。",
        },
        {
          problem: "免费时长不够",
          fix: "先剪掉片头片尾再传；高校计划或按量包以官网为准。",
        },
      ],
      cost: "新用户有免费时长。超出后按量或套餐，高校有时有加量，以 tingwu.aliyun.com 为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / browser extension, mainland China access",
      prereq: [
        {
          label: "Alibaba or phone account",
          detail: "Sign in at tingwu.aliyun.com. Students should check education offers.",
        },
        {
          label: "A recording",
          detail: "Meetings, lectures, interviews. Clear speech in m4a/mp3/mp4 works best.",
        },
      ],
      steps: [
        {
          title: "Import and pick the language",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tingwu/site.svg",
              caption: "Tingwu sign-in",
            },
            {
              kind: "text",
              text: "Wrong language wrecks proper nouns. Set it before you run the job.",
            },
          ],
        },
        {
          title: "Read the summary first",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tingwu/workspace.svg",
              caption: "Summary, tasks and transcript together",
            },
            {
              kind: "list",
              items: [
                "Fix names on action items",
                "Spot-check numbers against the audio",
                "Export Markdown or a mind map into your notes app",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Garbage transcript",
          fix: "Noisy audio or wrong language. Denoise and re-upload.",
        },
        {
          problem: "Out of free hours",
          fix: "Trim silence before upload; then buy a pack or use an education plan.",
        },
      ],
      cost: "New accounts include free hours, then usage packs. See tingwu.aliyun.com.",
    },
  },
};
