import type { TutorialSet } from "./tutorial-types";

export const mediaTutorials: TutorialSet = {
  wanxiang: {
    zh: {
      difficulty: "入门",
      os: "网页 / 通义 App，国内直连",
      prereq: [
        {
          label: "阿里云 / 淘宝 / 支付宝账号",
          detail: "打开 tongyi.aliyun.com/wanxiang 登录。新账号通常有免费生成次数，用完可走百炼按量。",
        },
      ],
      steps: [
        {
          title: "登录并先出一张静帧",
          blocks: [
            {
              kind: "shot",
              src: "/shots/wanxiang/site.svg",
              caption: "通义万相登录示意图",
            },
            {
              kind: "text",
              text: "选文生图。提示词按「主体 + 风格 + 光线 + 构图」写，例如「窗台上的橘猫，下午侧光，胶片，35mm」。",
            },
          ],
        },
        {
          title: "比例、种子和图生视频",
          blocks: [
            {
              kind: "shot",
              src: "/shots/wanxiang/workspace.svg",
              caption: "创作页：先选比例再生成",
            },
            {
              kind: "list",
              items: [
                "海报 3:4，壁纸 16:9，头像 1:1，生成前改，事后裁会糊",
                "同一角色多张图，把外貌写死，不要每张换一套形容词",
                "满意的静帧再图生视频，运镜一次只加一种（缓推 / 环绕）",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "提示词几乎没被听进去",
          fix: "删掉形容词堆砌，把主体放在第一句，并指定镜头（中景 / 特写）。",
        },
        {
          problem: "免费次数没了",
          fix: "看通义 App 或百炼控制台的额度；不要去第三方「代打」。",
        },
      ],
      cost: "网页和通义 App 常有免费额度。API 走阿里云百炼按张 / 按秒，价格以控制台为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / Tongyi app, mainland China access",
      prereq: [
        {
          label: "Alibaba account",
          detail: "Sign in at tongyi.aliyun.com/wanxiang. New accounts usually include free generations.",
        },
      ],
      steps: [
        {
          title: "Generate a still first",
          blocks: [
            {
              kind: "shot",
              src: "/shots/wanxiang/site.svg",
              caption: "Wanxiang sign-in",
            },
            {
              kind: "text",
              text: "Prompt as subject + style + light + framing.",
            },
          ],
        },
        {
          title: "Aspect ratio, then image-to-video",
          blocks: [
            {
              kind: "shot",
              src: "/shots/wanxiang/workspace.svg",
              caption: "Set aspect ratio before you generate",
            },
            {
              kind: "list",
              items: [
                "3:4 poster, 16:9 wallpaper, 1:1 avatar",
                "Lock character looks across a set",
                "Add a single camera move when you animate the still",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "The model ignores the prompt",
          fix: "Put the subject first and drop the adjective pile.",
        },
        {
          problem: "No free credits left",
          fix: "Check Tongyi / Model Studio; avoid unofficial resellers.",
        },
      ],
      cost: "Apps often include free credits. API is metered on Alibaba Model Studio.",
    },
  },

  ideogram: {
    zh: {
      difficulty: "入门",
      os: "网页，需访问 ideogram.ai",
      prereq: [
        {
          label: "Google 或邮箱账号 + 外网",
          detail: "国内无法直连。新号有免费积分，用在「图上要有字」的海报上最划算。",
        },
      ],
      steps: [
        {
          title: "注册并打开 Create",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ideogram/site.svg",
              caption: "Ideogram 注册示意图",
            },
          ],
        },
        {
          title: "把要出现的文字放进引号",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ideogram/workspace.svg",
              caption: "Create 页：文案用引号包起来",
            },
            {
              kind: "code",
              lang: "text",
              code: 'A vintage travel poster of Hangzhou West Lake at dusk, large condensed type that says "WEST LAKE", gold on deep teal, generous margins --ar 3:4',
              caption: "示例提示词：画面描述 + 引号内文案 + 比例",
            },
            {
              kind: "note",
              text: "中文海报也能做，但生成后务必逐字检查。英文目前更稳。Magic Prompt 适合扩写画面，会改写你的字时把它关掉。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "字缺笔画或拼错",
          fix: "缩短文案、加大字号描述（huge title），多出几张再选。重要印刷品用矢量软件重打字。",
        },
        {
          problem: "打不开网站",
          fix: "检查外网；只使用 ideogram.ai。",
        },
      ],
      cost: "免费积分 + Plus 订阅，以 ideogram.ai 账户页为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (ideogram.ai)",
      prereq: [
        {
          label: "Google or email + international access",
          detail: "Spend free credits on posters that need readable lettering.",
        },
      ],
      steps: [
        {
          title: "Sign in and open Create",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ideogram/site.svg",
              caption: "Ideogram sign-up",
            },
          ],
        },
        {
          title: "Quote the copy you want on the image",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ideogram/workspace.svg",
              caption: "Put the headline in quotes",
            },
            {
              kind: "code",
              lang: "text",
              code: 'A vintage travel poster of Hangzhou West Lake at dusk, large condensed type that says "WEST LAKE", gold on deep teal --ar 3:4',
              caption: "Scene + quoted lettering + aspect ratio",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Misshapen letters",
          fix: "Shorter copy, “huge title”, generate several. Re-typeset anything that will be printed.",
        },
        {
          problem: "Site blocked",
          fix: "Use ideogram.ai on a supported network.",
        },
      ],
      cost: "Free credits plus Plus — see the account page.",
    },
  },

  liblib: {
    zh: {
      difficulty: "入门偏进阶（要会抄模型页的触发词）",
      os: "网页，国内直连",
      prereq: [
        {
          label: "手机号",
          detail: "liblib.art 注册。先用在线生成，不必先装 ComfyUI。",
        },
      ],
      steps: [
        {
          title: "在模型广场找有示例图的模型",
          blocks: [
            {
              kind: "shot",
              src: "/shots/liblib/site.svg",
              caption: "哩布哩布首页示意图",
            },
            {
              kind: "text",
              text: "搜「国风」「产品」等，打开模型卡，看作者写的触发词（trigger）和示例参数。",
            },
          ],
        },
        {
          title: "在线生成，再考虑工作流",
          blocks: [
            {
              kind: "shot",
              src: "/shots/liblib/workspace.svg",
              caption: "在线生成：把触发词放进提示词",
            },
            {
              kind: "warn",
              text: "每个模型的许可不同。个人练习可以，商用前读模型页协议，不要默认「能下载就能卖」。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "出图和示例完全不像",
          fix: "漏了触发词，或采样步数 / 尺寸和示例差太远。先一键用作者参数。",
        },
        {
          problem: "积分不够",
          fix: "做每日任务；先用免费或低耗模型练提示词。",
        },
      ],
      cost: "注册送体验积分，之后可签到或充值，以站点为准。",
    },
    en: {
      difficulty: "Beginner–intermediate",
      os: "Web, mainland China access",
      prereq: [
        {
          label: "Phone number",
          detail: "Register at liblib.art. Use hosted generate before installing ComfyUI.",
        },
      ],
      steps: [
        {
          title: "Pick a model that already has sample images",
          blocks: [
            {
              kind: "shot",
              src: "/shots/liblib/site.svg",
              caption: "Liblib home",
            },
            {
              kind: "text",
              text: "Copy the author’s trigger words; do not start from a blank prompt.",
            },
          ],
        },
        {
          title: "Generate on-site, then try workflows",
          blocks: [
            {
              kind: "shot",
              src: "/shots/liblib/workspace.svg",
              caption: "Hosted generate",
            },
            {
              kind: "warn",
              text: "Licenses differ per model. Read the card before commercial use.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Looks nothing like the samples",
          fix: "You dropped the trigger or changed sampler settings. Clone the author’s preset.",
        },
        {
          problem: "Out of credits",
          fix: "Daily tasks; practise on cheaper models first.",
        },
      ],
      cost: "Starter credits, then check-ins or top-ups.",
    },
  },

  kling: {
    zh: {
      difficulty: "入门",
      os: "网页 / App，国内直连",
      prereq: [
        {
          label: "快手或手机号账号",
          detail: "klingai.com 登录。先花每日灵感值跑通一条 5 秒图生视频，再决定开不开会员。",
        },
      ],
      steps: [
        {
          title: "登录并准备一张干净的静帧",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kling/site.svg",
              caption: "可灵登录示意图",
            },
            {
              kind: "text",
              text: "人物或产品居中、背景简单的图成功率最高。先用即梦 / 万相出静帧也可以。",
            },
          ],
        },
        {
          title: "图生视频：一个动作 + 一种运镜",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kling/workspace.svg",
              caption: "先出 5 秒预览再延长",
            },
            {
              kind: "list",
              items: [
                "提示词写「谁、做什么、镜头怎么动」，不要写分镜剧本",
                "5 秒满意再延长，比一上来 10 秒省灵感值",
                "口播对口型单独做，不要和运镜、特效挤在同一条",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "人物脸崩、手指乱",
          fix: "换一张五官清楚、手没交叉的静帧；提示词里减少「快速转身」这类大动作。",
        },
        {
          problem: "灵感值不够",
          fix: "每日登录会送一点。成片再开黄金 / 铂金，档位以 klingai.com 会员页为准。",
        },
      ],
      cost: "免费用户有灵感值。会员按月送灵感值，价格和商用条款以官网会员计划为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / app, mainland China access",
      prereq: [
        {
          label: "Kuaishou or phone account",
          detail: "Sign in at klingai.com. Spend daily credits on one 5-second test before paying.",
        },
      ],
      steps: [
        {
          title: "Start from a clean still",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kling/site.svg",
              caption: "Kling sign-in",
            },
          ],
        },
        {
          title: "Image-to-video: one action, one camera move",
          blocks: [
            {
              kind: "shot",
              src: "/shots/kling/workspace.svg",
              caption: "Preview 5 seconds, then extend",
            },
            {
              kind: "list",
              items: [
                "Prompt who / what / camera — not a screenplay",
                "Extend only after a good preview",
                "Do lip-sync as a separate pass",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Faces or hands collapse",
          fix: "Use a still with a clear face and uncluttered hands; avoid violent turns.",
        },
        {
          problem: "Out of credits",
          fix: "Daily login helps; memberships are listed on klingai.com.",
        },
      ],
      cost: "Free daily credits, then memberships. Commercial terms follow the plan page.",
    },
  },

  hailuo: {
    zh: {
      difficulty: "入门",
      os: "网页 / 海螺视频 App，国内直连",
      prereq: [
        {
          label: "手机号",
          detail: "hailuoai.com 注册。海外用户走独立域名，国内用 .com 中文站即可。",
        },
      ],
      steps: [
        {
          title: "登录并选择图生视频",
          blocks: [
            {
              kind: "shot",
              src: "/shots/hailuo/site.svg",
              caption: "海螺视频入口示意图",
            },
          ],
        },
        {
          title: "运镜一次只用一种",
          blocks: [
            {
              kind: "shot",
              src: "/shots/hailuo/workspace.svg",
              caption: "镜头控制：推、拉、摇先单独试",
            },
            {
              kind: "list",
              items: [
                "主体参考适合「同一人换场景」，先锁脸再写动作",
                "提示词写环境光和动作，不要点名电影镜头术语堆砌",
                "下载后进剪映加字幕，海螺负责镜头，不负责成片包装",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "主体换脸或不像",
          fix: "参考图只要一张正脸、光线均匀；多张参考反而打架。",
        },
        {
          problem: "生成排队",
          fix: "避开高峰；会员加速以页面为准。",
        },
      ],
      cost: "新号有试用额度，之后会员或按次，以 hailuoai.com 为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / Hailuo app",
      prereq: [
        {
          label: "Account",
          detail: "hailuoai.com for mainland users; there is a separate global site.",
        },
      ],
      steps: [
        {
          title: "Sign in and pick image-to-video",
          blocks: [
            {
              kind: "shot",
              src: "/shots/hailuo/site.svg",
              caption: "Hailuo entry",
            },
          ],
        },
        {
          title: "One camera move at a time",
          blocks: [
            {
              kind: "shot",
              src: "/shots/hailuo/workspace.svg",
              caption: "Camera-control presets",
            },
            {
              kind: "list",
              items: [
                "Subject reference to keep the same person",
                "Describe light and action, skip stacked film jargon",
                "Caption in an editor afterwards",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Identity drifts",
          fix: "One even-lit face reference beats a pile of photos.",
        },
        {
          problem: "Queue",
          fix: "Off-peak or a paid speed slot.",
        },
      ],
      cost: "Trial credits, then membership — hailuoai.com.",
    },
  },

  pika: {
    zh: {
      difficulty: "入门",
      os: "网页 pika.art，需外网",
      prereq: [
        {
          label: "Google 或 Discord 账号",
          detail: "不要从搜索广告进山寨站。新号有试用积分。",
        },
      ],
      steps: [
        {
          title: "登录并上传静帧",
          blocks: [
            {
              kind: "shot",
              src: "/shots/pika/site.svg",
              caption: "Pika 登录示意图",
            },
          ],
        },
        {
          title: "一个特效就够了",
          blocks: [
            {
              kind: "shot",
              src: "/shots/pika/workspace.svg",
              caption: "Image to video + 单一 Pikaffect",
            },
            {
              kind: "text",
              text: "提示词只写动作。特效（膨胀、爆炸、毛发）当调味，一条视频用一个，否则主体会烂。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "官网打不开",
          fix: "检查外网；只访问 pika.art。",
        },
        {
          problem: "积分很快没了",
          fix: "先用最短时长预览。订阅档以官网为准。",
        },
      ],
      cost: "试用积分 + 订阅。社交短镜头够玩，系列内容会不够。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (pika.art)",
      prereq: [
        {
          label: "Google or Discord",
          detail: "Use pika.art only. Trial credits on new accounts.",
        },
      ],
      steps: [
        {
          title: "Sign in and upload a still",
          blocks: [
            {
              kind: "shot",
              src: "/shots/pika/site.svg",
              caption: "Pika sign-in",
            },
          ],
        },
        {
          title: "One effect per clip",
          blocks: [
            {
              kind: "shot",
              src: "/shots/pika/workspace.svg",
              caption: "Image to video plus a single effect",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Site blocked",
          fix: "International access to pika.art.",
        },
        {
          problem: "Credits vanish",
          fix: "Preview at the shortest duration. See subscription tiers on the site.",
        },
      ],
      cost: "Trial then subscription. Fine for social tests, not a whole series.",
    },
  },

  elevenlabs: {
    zh: {
      difficulty: "入门",
      os: "网页 elevenlabs.io，需外网",
      prereq: [
        {
          label: "邮箱 / Google 账号",
          detail: "免费档有字符额度，够试几段口播。克隆别人的声音既违规也不道德。",
        },
      ],
      steps: [
        {
          title: "注册并先用预置音色",
          blocks: [
            {
              kind: "shot",
              src: "/shots/elevenlabs/site.svg",
              caption: "ElevenLabs 入口示意图",
            },
            {
              kind: "text",
              text: "进入 Text to Speech，挑一个预置声，贴 2～3 句中文或英文试听，再决定要不要克隆自己的声音。",
            },
          ],
        },
        {
          title: "长文分段，标点当停顿",
          blocks: [
            {
              kind: "shot",
              src: "/shots/elevenlabs/workspace.svg",
              caption: "TTS 页：先默认滑杆，再微调",
            },
            {
              kind: "list",
              items: [
                "句号、逗号会影响气口，口播稿按说的方式标点",
                "超过一两分钟就按段生成再拼接，减少中途崩掉",
                "导出 MP3，在剪辑时间轴按句对齐口型",
              ],
            },
            {
              kind: "warn",
              text: "只有你拥有授权的声音才能克隆。商用条款跟套餐走，发布前读当前许可。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "中文腔调怪",
          fix: "换一个明确标了 Chinese 的音色；把数字写成汉字（三千，而不是 3000）。",
        },
        {
          problem: "字符不够",
          fix: "删掉重复礼貌句；升级以官网为准。",
        },
      ],
      cost: "免费字符 + 订阅。克隆和商用通常在付费档，见 elevenlabs.io/pricing。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (elevenlabs.io)",
      prereq: [
        {
          label: "Email or Google",
          detail: "Free character quota. Never clone a voice you do not own.",
        },
      ],
      steps: [
        {
          title: "Start with a stock voice",
          blocks: [
            {
              kind: "shot",
              src: "/shots/elevenlabs/site.svg",
              caption: "ElevenLabs entry",
            },
          ],
        },
        {
          title: "Punctuate for breath, generate in chunks",
          blocks: [
            {
              kind: "shot",
              src: "/shots/elevenlabs/workspace.svg",
              caption: "Leave sliders near default at first",
            },
            {
              kind: "warn",
              text: "Cloning and commercial use follow the plan license.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Odd Chinese delivery",
          fix: "Pick a voice tagged for that language; write numbers as words.",
        },
        {
          problem: "Out of characters",
          fix: "Cut filler; then upgrade.",
        },
      ],
      cost: "Free characters plus subscriptions — elevenlabs.io/pricing.",
    },
  },

  udio: {
    zh: {
      difficulty: "入门",
      os: "网页 udio.com，需外网",
      prereq: [
        {
          label: "Google 或邮箱",
          detail: "和 Suno 一样需要外网。同一段歌词两边各跑一遍再选。",
        },
      ],
      steps: [
        {
          title: "登录并用简单模式出第一首",
          blocks: [
            {
              kind: "shot",
              src: "/shots/udio/site.svg",
              caption: "Udio 登录示意图",
            },
            {
              kind: "text",
              text: "写「风格 + 情绪 + 主题」，例如「复古城市流行，周五下班，温暖贝斯」。",
            },
          ],
        },
        {
          title: "自定义歌词与延长",
          blocks: [
            {
              kind: "shot",
              src: "/shots/udio/workspace.svg",
              caption: "一次两条，选顺耳的 Extend",
            },
            {
              kind: "list",
              items: [
                "歌词标 Verse / Chorus，结构更稳",
                "短视频床垫选 instrumental，避免人声撞旁白",
                "商用前读当前套餐授权，不要上传别人的版权歌当参考",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "打不开",
          fix: "检查外网；只使用 udio.com。",
        },
        {
          problem: "中文咬字飘",
          fix: "先改韵脚再生成，短句比长从句好。",
        },
      ],
      cost: "免费额度 + 订阅，以 udio.com 为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (udio.com)",
      prereq: [
        {
          label: "Google or email",
          detail: "International access. Run the same lyrics on Suno too.",
        },
      ],
      steps: [
        {
          title: "Simple mode first",
          blocks: [
            {
              kind: "shot",
              src: "/shots/udio/site.svg",
              caption: "Udio sign-in",
            },
            {
              kind: "text",
              text: "Genre + mood + topic, e.g. “city pop, Friday evening, warm bass”.",
            },
          ],
        },
        {
          title: "Custom lyrics and extend",
          blocks: [
            {
              kind: "shot",
              src: "/shots/udio/workspace.svg",
              caption: "Generate two takes, extend the better one",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Blocked",
          fix: "udio.com on a supported network.",
        },
        {
          problem: "Sloppy vocals",
          fix: "Shorter lines and cleaner rhymes before regenerating.",
        },
      ],
      cost: "Free quota plus subscription — udio.com.",
    },
  },

  mureka: {
    zh: {
      difficulty: "入门",
      os: "网页 mureka.cn，国内直连",
      prereq: [
        {
          label: "手机号",
          detail: "国内用户用 mureka.cn。先用免费次数出一首中文歌，再看分轨是否值得开会员。",
        },
      ],
      steps: [
        {
          title: "登录并选择灵感或自定义歌词",
          blocks: [
            {
              kind: "shot",
              src: "/shots/mureka/site.svg",
              caption: "Mureka 登录示意图",
            },
          ],
        },
        {
          title: "中文词先改韵脚再生成",
          blocks: [
            {
              kind: "shot",
              src: "/shots/mureka/workspace.svg",
              caption: "自定义歌词 + 曲风，不要堆十种风格",
            },
            {
              kind: "list",
              items: [
                "可用对话模型先改一版歌词，再贴进 Mureka",
                "需要后期混音就导出分轨",
                "短视频 BGM 选纯音乐",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "人声糊、跑调",
          fix: "缩短句子、减少生僻词；换一种曲风再出两条对比。",
        },
        {
          problem: "没有分轨按钮",
          fix: "功能跟套餐走，看会员页。不要用别人的歌当参考音频。",
        },
      ],
      cost: "免费试用 + 会员。授权以 mureka.cn 当前条款为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web (mureka.cn)",
      prereq: [
        {
          label: "Phone number",
          detail: "Mainland users should use mureka.cn. Try one free song before paying for stems.",
        },
      ],
      steps: [
        {
          title: "Sign in: prompt mode or custom lyrics",
          blocks: [
            {
              kind: "shot",
              src: "/shots/mureka/site.svg",
              caption: "Mureka sign-in",
            },
          ],
        },
        {
          title: "Fix rhymes, then generate",
          blocks: [
            {
              kind: "shot",
              src: "/shots/mureka/workspace.svg",
              caption: "One genre, custom lyrics, optional stems",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Mushy vocals",
          fix: "Shorter lines, fewer rare characters, try another genre.",
        },
        {
          problem: "No stem export",
          fix: "Tied to the plan. Do not upload copyrighted references.",
        },
      ],
      cost: "Trial plus membership — mureka.cn terms.",
    },
  },
};
