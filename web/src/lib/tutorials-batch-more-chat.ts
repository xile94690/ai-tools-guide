import type { TutorialSet } from "./tutorial-types";

export const moreChatTutorials: TutorialSet = {
  doubao: {
    zh: {
      difficulty: "入门（会用手机就能上手）",
      os: "网页 / iOS / Android，国内网络直连",
      prereq: [
        {
          label: "手机号或抖音账号",
          detail:
            "豆包用字节系账号登录最省事。准备一个能收验证码的大陆手机号，或已登录的抖音 / 今日头条账号。不要买「共享会员」，容易被风控。",
        },
        {
          label: "网络",
          detail: "国内直连即可，不必准备外网。公司网如果拦截 doubao.com，换手机热点试一次。",
        },
        {
          label: "麦克风权限（语音对话才需要）",
          detail: "只打字可以不给。要用语音，在系统设置里允许豆包使用麦克风，嘈杂环境效果会差很多。",
        },
      ],
      steps: [
        {
          title: "打开官网或下载 App，认准官方入口",
          blocks: [
            {
              kind: "text",
              text: "电脑打开 **doubao.com**，手机在应用商店搜「豆包」看开发者是否为北京抖音信息服务有限公司或字节跳动。",
            },
            {
              kind: "shot",
              src: "/shots/doubao/site.png",
              caption: "豆包官网入口（以当前页面为准）",
            },
            {
              kind: "warn",
              text: "搜索「豆包」会混出山寨下载站。不要从来路不明的 APK 安装，也不要先充值才能「试用」的镜像。",
            },
          ],
        },
        {
          title: "注册并登录",
          blocks: [
            {
              kind: "text",
              text: "点登录，选手机号验证码或抖音授权。同一账号网页和 App 互通，对话记录会同步。",
            },
            {
              kind: "list",
              items: [
                "手机号：输入号码 → 收 6 位码 → 同意协议",
                "抖音一键登录：授权后不用再记密码",
                "电脑网页扫 App 里的二维码也可以登录",
              ],
            },
          ],
        },
        {
          title: "第一次对话：把任务说具体",
          blocks: [
            {
              kind: "shot",
              src: "/shots/doubao/chat-ui.svg",
              caption: "对话界面示意图：输入框里直接提需求",
            },
            {
              kind: "text",
              text: "不要只丢一个词。带上**对象、篇幅、语气**：例如「给家长微信群写 80 字通知，语气礼貌，说明周六运动会改到室内」。",
            },
            {
              kind: "note",
              text: "不满意就追问「再短一点」「改成条列」，比新开对话更省事。",
            },
          ],
        },
        {
          title: "语音、生图和智能体",
          blocks: [
            {
              kind: "list",
              items: [
                "点麦克风即可语音，适合走路时提问或练口语",
                "图像生成用中文描述画面；视频入口在技能 / 创作里，额度以页面显示为准",
                "智能体广场有现成助手（学习、办公），先用官方的，再考虑自己建",
              ],
            },
            {
              kind: "warn",
              text: "把身份证、银行卡号、未公开的公司数据贴进对话框之前先打码。免费产品也会把内容送到云端。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "收不到验证码",
          fix: "看短信是否被拦截；同一号码短时间不要反复点发送；换抖音授权，或过 10 分钟再试。",
        },
        {
          problem: "语音没反应",
          fix: "检查系统麦克风权限和是否静音；网页要用 Chrome / Edge，并允许浏览器使用麦克风。",
        },
        {
          problem: "高峰期排队或回答中断",
          fix: "正常现象。等一会儿，或把长任务拆成几段。会员加速以官网当前说明为准。",
        },
      ],
      cost: "个人网页和 App 对话目前以免费为主，生图 / 视频等能力可能消耗次数或会员权益，以豆包当前页面为准。不要轻信代充。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / iOS / Android, works on mainland China networks",
      prereq: [
        {
          label: "Phone number or Douyin account",
          detail:
            "Sign in with a mainland phone number that can receive SMS, or a Douyin account. Do not buy shared logins.",
        },
        {
          label: "Network",
          detail: "No VPN required. If the office network blocks doubao.com, try a phone hotspot.",
        },
        {
          label: "Microphone (voice chat only)",
          detail: "Typing works without it. Grant mic access in system settings for voice.",
        },
      ],
      steps: [
        {
          title: "Open the official app or doubao.com",
          blocks: [
            {
              kind: "text",
              text: "On desktop open **doubao.com**. In app stores confirm the publisher is ByteDance / Douyin.",
            },
            {
              kind: "shot",
              src: "/shots/doubao/site.png",
              caption: "Official Doubao entry (UI may change)",
            },
            {
              kind: "warn",
              text: "Skip third-party APKs and sites that demand payment before a trial.",
            },
          ],
        },
        {
          title: "Sign in",
          blocks: [
            {
              kind: "text",
              text: "Use SMS or Douyin OAuth. Web and app share the same history.",
            },
          ],
        },
        {
          title: "Your first chat: be specific",
          blocks: [
            {
              kind: "shot",
              src: "/shots/doubao/chat-ui.svg",
              caption: "Chat UI schematic",
            },
            {
              kind: "text",
              text: "State audience, length and tone, e.g. “80-word polite notice for a parent group, sports day moved indoors”.",
            },
          ],
        },
        {
          title: "Voice, images and agents",
          blocks: [
            {
              kind: "list",
              items: [
                "Tap the mic for hands-free questions",
                "Image/video skills live in the create panel; quotas are shown in-product",
                "Start with official agents before building your own",
              ],
            },
            {
              kind: "warn",
              text: "Do not paste ID numbers, bank details or unpublished company data.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "No SMS code",
          fix: "Check spam/blocked SMS, wait before retrying, or switch to Douyin login.",
        },
        {
          problem: "Voice does nothing",
          fix: "Enable mic permission; on web allow the browser prompt and use Chrome/Edge.",
        },
        {
          problem: "Queue or cut-off replies",
          fix: "Peak hours. Split the task. Paid speed-ups follow the in-app plan.",
        },
      ],
      cost: "Chat is generally free for personal use. Image/video may consume credits or membership — check the current Doubao page.",
    },
  },

  kimi: {
    zh: {
      difficulty: "入门",
      os: "网页 / iOS / Android，国内直连",
      prereq: [
        {
          label: "手机号",
          detail: "打开 kimi.moonshot.cn 用大陆手机号收验证码即可。学生用学校邮箱也行，以注册页选项为准。",
        },
        {
          label: "要解读的材料",
          detail: "PDF、Word 或网页链接。扫描件清晰度差会掉字，重要合同仍需人工核对。",
        },
      ],
      steps: [
        {
          title: "打开 Kimi 并登录",
          blocks: [
            {
              kind: "text",
              text: "浏览器打开 **kimi.moonshot.cn**（现也常跳转到 kimi.com）。应用商店搜 Kimi，认准月之暗面。",
            },
            {
              kind: "shot",
              src: "/shots/kimi/site.png",
              caption: "Kimi 网页入口",
            },
          ],
        },
        {
          title: "把长文档丢进去，先要结论",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kimi/chat-ui.svg",
              caption: "上传 PDF 后先问三个结论，而不是「帮我看看」",
            },
            {
              kind: "list",
              items: [
                "拖入 PDF 后问：「用三条列出核心结论，每条附页码」",
                "财报 / 论文再追问：「把所有数字列成表，标清单位」",
                "网页文章直接贴链接，让它提炼争议点和原文原话",
              ],
            },
            {
              kind: "warn",
              text: "Kimi 会摘要，但不会替你承担法律或学术责任。引用前打开原件核页码。",
            },
          ],
        },
        {
          title: "长对话怎么省额度",
          blocks: [
            {
              kind: "text",
              text: "同一份材料继续追问，不要每问一次重新上传。高峰期排队可开会员加速，日常精读免费档通常够用。",
            },
            {
              kind: "note",
              text: "一次只放相关文件。把整个网盘拖进去，重点会被稀释，也更费额度。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "上传失败或解析空白",
          fix: "把扫描 PDF 先 OCR；单文件过大就拆章节；加密 PDF 先解密再传。",
        },
        {
          problem: "回答像在编页码",
          fix: "明确要求「没有就说没有，不要编页码」，并对着原件抽查。",
        },
        {
          problem: "排队很久",
          fix: "避开晚上高峰，或开会员。刷新前把问题复制出来，以免输入框被清。",
        },
      ],
      cost: "网页对话免费，会员主要买速度和更高额度。价格以 Kimi 账户页为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / iOS / Android, mainland China access",
      prereq: [
        {
          label: "Phone number",
          detail: "Register at kimi.moonshot.cn with an SMS-capable number.",
        },
        {
          label: "A document to read",
          detail: "PDF, Word or a URL. Blurry scans OCR poorly — proofread anything that matters.",
        },
      ],
      steps: [
        {
          title: "Open Kimi and sign in",
          blocks: [
            {
              kind: "text",
              text: "Visit **kimi.moonshot.cn** (may redirect to kimi.com) or install the Kimi app by Moonshot.",
            },
            {
              kind: "shot",
              src: "/shots/kimi/site.png",
              caption: "Kimi web entry",
            },
          ],
        },
        {
          title: "Upload a long doc and ask for takeaways",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kimi/chat-ui.svg",
              caption: "Ask for three conclusions with page numbers",
            },
            {
              kind: "list",
              items: [
                "“List three takeaways, each with a page number”",
                "For filings: “Tabulate every figure with units”",
                "Paste a URL and ask for disputed claims plus quotes",
              ],
            },
            {
              kind: "warn",
              text: "Summaries are not a substitute for reading the source.",
            },
          ],
        },
        {
          title: "Keep one thread per document",
          blocks: [
            {
              kind: "text",
              text: "Follow up in the same chat instead of re-uploading. Membership mainly buys speed at peak hours.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Upload fails or comes back empty",
          fix: "OCR scans, split huge files, decrypt protected PDFs first.",
        },
        {
          problem: "Invented page numbers",
          fix: "Tell it not to fabricate citations, then spot-check the PDF.",
        },
        {
          problem: "Long queues",
          fix: "Off-peak hours or a membership; copy your prompt before refresh.",
        },
      ],
      cost: "Chat is free; membership is mostly speed and higher limits. See the account page.",
    },
  },

  grok: {
    zh: {
      difficulty: "入门（需要能访问 grok.com 的网络）",
      os: "网页 / iOS / Android / 桌面客户端",
      prereq: [
        {
          label: "账号",
          detail:
            "用 X 账号或邮箱在 grok.com 注册。国内手机号通常不是主路径，邮箱或 Google / Apple 更省事。",
        },
        {
          label: "网络环境",
          detail:
            "Grok 不对大陆直连开放。需要能稳定打开 grok.com 的网络，注册过程中不要频繁换节点。",
        },
        {
          label: "付费（可先免费）",
          detail:
            "免费档可以日常问答。更高模型、更高额度走 SuperGrok 或 X 的付费档，以官网为准。",
        },
      ],
      steps: [
        {
          title: "打开 grok.com，避开假站",
          blocks: [
            {
              kind: "text",
              text: "只使用 **grok.com** 和官方 App。搜索「Grok 中文版」出现的第三方站不要登录。",
            },
            {
              kind: "shot",
              src: "/shots/grok/signup.svg",
              caption: "注册 / 登录页示意图",
            },
          ],
        },
        {
          title: "登录并完成第一次提问",
          blocks: [
            {
              kind: "text",
              text: "选 Sign up / Log in，用 X 或邮箱完成验证。进入对话后先问一个你能核对的问题，确认网络和账号都正常。",
            },
            {
              kind: "shot",
              src: "/shots/grok/chat-ui.svg",
              caption: "对话界面示意图",
            },
            {
              kind: "list",
              items: [
                "追热点：直接问「今天某领域有什么重要动态」，它擅长结合 X / 网页近况",
                "推理题打开思考模式（名称以界面为准），让它先分步再给结论",
                "可以上传图片让它读图，也可以让它生成配图",
              ],
            },
          ],
        },
        {
          title: "和 ChatGPT / Claude 怎么分工",
          blocks: [
            {
              kind: "text",
              text: "要实时舆论和 X 上的讨论优先 Grok；要长文档精读优先 Claude / Kimi；要插件生态优先 ChatGPT。不必只留一个。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "页面一直转圈或 Access denied",
          fix: "出口 IP 不在支持地区。换节点、关浏览器翻译插件、用无痕窗口，并保持同一节点完成登录。",
        },
        {
          problem: "免费额度用尽",
          fix: "等重置或升级 SuperGrok。把多个问题合成一条，少开新会话。",
        },
        {
          problem: "App 登不进去",
          fix: "国区商店可能没有官方客户端，需要对应地区的 Apple ID / Google 账号，且手机网络也能访问 grok.com。",
        },
      ],
      cost: "免费档够日常问答。SuperGrok / X 付费档提供更高额度和更新模型，价格以 grok.com 账户页为准。支付方式通常需要支持的国际卡。",
    },
    en: {
      difficulty: "Beginner (needs access to grok.com)",
      os: "Web / iOS / Android / desktop",
      prereq: [
        {
          label: "Account",
          detail: "Sign in on grok.com with X, email, Google or Apple.",
        },
        {
          label: "Network",
          detail:
            "Not available on typical mainland China residential networks. Keep the same exit node while signing up.",
        },
        {
          label: "Plan",
          detail: "Free tier covers daily chat. SuperGrok / X paid plans raise limits.",
        },
      ],
      steps: [
        {
          title: "Open grok.com only",
          blocks: [
            {
              kind: "text",
              text: "Use **grok.com** and the official app. Ignore “Grok China mirror” sites.",
            },
            {
              kind: "shot",
              src: "/shots/grok/signup.svg",
              caption: "Sign-up schematic",
            },
          ],
        },
        {
          title: "Ask something you can verify",
          blocks: [
            {
              kind: "shot",
              src: "/shots/grok/chat-ui.svg",
              caption: "Chat UI schematic",
            },
            {
              kind: "list",
              items: [
                "News and X buzz: ask what moved today in a topic you follow",
                "Turn on thinking mode for multi-step problems",
                "Upload images to analyze, or generate illustrations",
              ],
            },
          ],
        },
        {
          title: "When to pick Grok vs ChatGPT / Claude",
          blocks: [
            {
              kind: "text",
              text: "Grok for live discussion; Claude/Kimi for long documents; ChatGPT for the plugin ecosystem.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Spinner or access denied",
          fix: "Wrong region exit IP. Switch nodes, disable translation extensions, use a private window.",
        },
        {
          problem: "Out of free quota",
          fix: "Wait for reset or upgrade. Batch questions into one prompt.",
        },
        {
          problem: "Mobile app will not sign in",
          fix: "Install the official build for your store region; the phone network must also reach grok.com.",
        },
      ],
      cost: "Free for light use. SuperGrok / X subscriptions add quota and models — see grok.com.",
    },
  },
};
