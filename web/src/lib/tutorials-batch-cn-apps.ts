import type { TutorialSet } from "./tutorial-types";

export const cnAppTutorials: TutorialSet = {
  tongyi: {
    zh: {
      difficulty: "入门",
      os: "网页 / 通义 App，国内直连",
      prereq: [],
      steps: [
        {
          title: "打开通义千问并登录",
          blocks: [
            {
              kind: "text",
              text: "阿里云的对话助手。网页 [tongyi.aliyun.com](https://tongyi.aliyun.com) 用淘宝 / 支付宝 / 阿里云账号登录即可，国内直连。",
            },
            {
              kind: "shot",
              src: "/shots/tongyi/site.svg",
              caption: "通义千问登录页示意图",
            },
          ],
        },
        {
          title: "先问一件具体的事",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tongyi/workspace.svg",
              caption: "对话里直接提需求，可切换模型",
            },
            {
              kind: "text",
              text: "把对象、篇幅、格式说清。长文档可以上传后先要三条结论。同一账号在通义 App 里也能用万相、听悟等能力。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "登录要企业账号", fix: "个人用淘宝或支付宝即可，不必先开阿里云企业认证。" },
        { problem: "和豆包怎么选", fix: "阿里生态、文档和万相连用选通义；抖音账号选豆包。" },
      ],
      cost: "网页对话有免费额度。更高模型和 API 走百炼按量，以官网为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / Tongyi app, mainland China",
      prereq: [],
      steps: [
        {
          title: "Open Tongyi Qianwen and sign in",
          blocks: [
            {
              kind: "text",
              text: "Alibaba’s chat assistant at [tongyi.aliyun.com](https://tongyi.aliyun.com). Sign in with Taobao, Alipay or Alibaba Cloud.",
            },
            { kind: "shot", src: "/shots/tongyi/site.svg", caption: "Tongyi sign-in" },
          ],
        },
        {
          title: "Ask one specific job",
          blocks: [
            {
              kind: "shot",
              src: "/shots/tongyi/workspace.svg",
              caption: "Chat and switch models in the thread",
            },
            {
              kind: "text",
              text: "State audience, length and format. Upload a long doc and ask for three takeaways first.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "It asks for an enterprise account", fix: "Personal Taobao/Alipay is enough." },
      ],
      cost: "Web chat includes free quota. APIs bill on Model Studio.",
    },
  },
  yuanbao: {
    zh: {
      difficulty: "入门",
      os: "网页 / App，国内直连",
      prereq: [],
      steps: [
        {
          title: "打开腾讯元宝",
          blocks: [
            {
              kind: "text",
              text: "腾讯的 AI 助手。官网 [yuanbao.tencent.com](https://yuanbao.tencent.com)，用微信登录最省事。",
            },
            { kind: "shot", src: "/shots/yuanbao/site.svg", caption: "元宝官网，微信登录" },
          ],
        },
        {
          title: "用微信生态里的材料提问",
          blocks: [
            {
              kind: "shot",
              src: "/shots/yuanbao/workspace.svg",
              caption: "对话、读文件、联网搜",
            },
            {
              kind: "text",
              text: "适合和微信 / QQ / 腾讯文档一起用。写公众号、总结聊天记录、问国内资讯都可以。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "和豆包重复了", fix: "微信重度用户用元宝；抖音账号用豆包。不必两个都当主力。" },
      ],
      cost: "个人对话有免费额度，会员以元宝页面为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / app, mainland China",
      prereq: [],
      steps: [
        {
          title: "Open Yuanbao",
          blocks: [
            {
              kind: "text",
              text: "Tencent’s assistant at [yuanbao.tencent.com](https://yuanbao.tencent.com). WeChat login is easiest.",
            },
            { kind: "shot", src: "/shots/yuanbao/site.svg", caption: "Yuanbao sign-in" },
          ],
        },
        {
          title: "Ask with WeChat-world context",
          blocks: [
            {
              kind: "shot",
              src: "/shots/yuanbao/workspace.svg",
              caption: "Chat, files and web search",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "Vs Doubao?", fix: "Yuanbao if you live in WeChat; Doubao if you live in Douyin." },
      ],
      cost: "Free chat quota; membership is listed in-app.",
    },
  },
  coze: {
    zh: {
      difficulty: "入门偏动手",
      os: "网页，国内用 coze.cn",
      prereq: [],
      steps: [
        {
          title: "打开扣子国内站",
          blocks: [
            {
              kind: "text",
              text: "字节的智能体搭建平台。国内 [coze.cn](https://www.coze.cn/)，国际站 coze.com 账号不通用。用抖音 / 手机号登录。",
            },
            { kind: "shot", src: "/shots/coze/site.svg", caption: "扣子国内站" },
          ],
        },
        {
          title: "用模板先做一个 Bot",
          blocks: [
            {
              kind: "shot",
              src: "/shots/coze/workspace.svg",
              caption: "从模板创建，再预览对话",
            },
            {
              kind: "list",
              items: [
                "点创建 Bot，选一个办公或客服模板，不要从空白人设开始",
                "预览里问三句，满意再发布到豆包等渠道（以当前支持为准）",
                "知识库先传一份你熟悉的 PDF，方便核答案",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "打不开或要 Google", fix: "国内用 coze.cn。coze.com 是国际站。" },
      ],
      cost: "个人创建有免费额度。API 和商用以扣子定价为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web; China site coze.cn",
      prereq: [],
      steps: [
        {
          title: "Open Coze China",
          blocks: [
            {
              kind: "text",
              text: "ByteDance’s agent builder. China: [coze.cn](https://www.coze.cn/). coze.com is a separate login.",
            },
            { kind: "shot", src: "/shots/coze/site.svg", caption: "Coze CN" },
          ],
        },
        {
          title: "Start from a template",
          blocks: [
            {
              kind: "shot",
              src: "/shots/coze/workspace.svg",
              caption: "Create from a template, then preview",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "Site wants Google", fix: "Use coze.cn in mainland China." },
      ],
      cost: "Personal bots include free quota. API pricing is on the site.",
    },
  },
  workbuddy: {
    zh: {
      difficulty: "入门",
      os: "Windows / macOS 桌面端，国内直连",
      prereq: [],
      steps: [
        {
          title: "下载腾讯 WorkBuddy（龙虾）",
          blocks: [
            {
              kind: "text",
              text: "腾讯的桌面办公智能体，圈内叫「腾讯龙虾」。官网 [workbuddy.cn](https://www.workbuddy.cn/) 或 [codebuddy.cn/work](https://www.codebuddy.cn/work/)。和写代码的 CodeBuddy 不是同一个窗口。",
            },
            { kind: "shot", src: "/shots/workbuddy/site.svg", caption: "WorkBuddy 下载页" },
          ],
        },
        {
          title: "安装、授权文件夹、下一句任务",
          blocks: [
            {
              kind: "shot",
              src: "/shots/workbuddy/workspace.svg",
              caption: "用一句话下任务，让它处理本地文件",
            },
            {
              kind: "list",
              items: [
                "安装后微信登录",
                "文件夹权限先只开桌面 / 文档 / 下载，不要一上来全盘",
                "先下一件小事：「把下载里的发票文件名改成日期+金额」",
                "重要文件用规划模式，让它先出方案再执行",
              ],
            },
            {
              kind: "warn",
              text: "它能改本地文件。不要把密码本、未公开合同放进授权目录。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "和 CodeBuddy 搞混", fix: "写代码用 CodeBuddy；办公代劳用 WorkBuddy。" },
        { problem: "要很多系统权限", fix: "屏幕录制 / 辅助功能按任务再开。先完成登录和一句任务。" },
      ],
      cost: "新用户常有体验积分。后续按 Credits / 套餐，以官网为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Windows / macOS desktop, mainland China",
      prereq: [],
      steps: [
        {
          title: "Download WorkBuddy",
          blocks: [
            {
              kind: "text",
              text: "Tencent’s desktop office agent (“lobster”). [workbuddy.cn](https://www.workbuddy.cn/). Not the same app as CodeBuddy.",
            },
            { kind: "shot", src: "/shots/workbuddy/site.svg", caption: "WorkBuddy download" },
          ],
        },
        {
          title: "Install, grant folders, give one job",
          blocks: [
            {
              kind: "shot",
              src: "/shots/workbuddy/workspace.svg",
              caption: "One-sentence tasks on local files",
            },
            {
              kind: "warn",
              text: "It can edit local files. Don’t grant your secrets folder.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "Confused with CodeBuddy", fix: "CodeBuddy is for code; WorkBuddy is for office chores." },
      ],
      cost: "New accounts often include trial credits. Then packs — see the site.",
    },
  },
  metaso: {
    zh: {
      difficulty: "入门",
      os: "网页，国内直连",
      prereq: [],
      steps: [
        {
          title: "打开秘塔 AI 搜索",
          blocks: [
            {
              kind: "text",
              text: "偏学术和资料检索的 AI 搜索。官网 [metaso.cn](https://metaso.cn)，国内直连，适合查论文、新闻综述。",
            },
            { kind: "shot", src: "/shots/metaso/site.svg", caption: "秘塔首页" },
          ],
        },
        {
          title: "用完整问题搜，而不是两三个词",
          blocks: [
            {
              kind: "shot",
              src: "/shots/metaso/workspace.svg",
              caption: "问完整问题，看引用再下结论",
            },
            {
              kind: "text",
              text: "例如「2024 年以来国内大模型开源许可有哪些变化」。点开引用核原文，不要直接把摘要当结论。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "和 Kimi 重复", fix: "秘塔偏搜索+引用；Kimi 偏长文上传精读。可以两个都留。" },
      ],
      cost: "基础搜索有免费额度，高级功能以官网为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web, mainland China",
      prereq: [],
      steps: [
        {
          title: "Open Metaso",
          blocks: [
            {
              kind: "text",
              text: "AI search for papers and briefings at [metaso.cn](https://metaso.cn).",
            },
            { kind: "shot", src: "/shots/metaso/site.svg", caption: "Metaso home" },
          ],
        },
        {
          title: "Ask a full question, then check citations",
          blocks: [
            {
              kind: "shot",
              src: "/shots/metaso/workspace.svg",
              caption: "Full-sentence queries with sources",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "Vs Kimi?", fix: "Metaso is search+citations; Kimi is long-doc reading." },
      ],
      cost: "Basic search is free-quota; extras are on the site.",
    },
  },
  ernie: {
    zh: {
      difficulty: "入门",
      os: "网页 / App，国内直连",
      prereq: [],
      steps: [
        {
          title: "打开文心一言",
          blocks: [
            {
              kind: "text",
              text: "百度的对话模型。网页 [yiyan.baidu.com](https://yiyan.baidu.com)，用百度账号登录。",
            },
            { kind: "shot", src: "/shots/ernie/site.svg", caption: "文心一言登录" },
          ],
        },
        {
          title: "用它查国内公开信息和写初稿",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ernie/workspace.svg",
              caption: "对话、联网、写作",
            },
            {
              kind: "text",
              text: "适合百度系检索和中文初稿。专业结论仍要打开引用或原文。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "和通义、豆包怎么排", fix: "百度账号用文心；阿里用通义；字节用豆包。选你已经有号的那家。" },
      ],
      cost: "基础对话免费，更高模型或积分以百度页面为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Web / app, mainland China",
      prereq: [],
      steps: [
        {
          title: "Open Ernie Bot",
          blocks: [
            {
              kind: "text",
              text: "Baidu’s chat model at [yiyan.baidu.com](https://yiyan.baidu.com). Sign in with a Baidu account.",
            },
            { kind: "shot", src: "/shots/ernie/site.svg", caption: "Ernie sign-in" },
          ],
        },
        {
          title: "Use it for China-web questions and drafts",
          blocks: [
            {
              kind: "shot",
              src: "/shots/ernie/workspace.svg",
              caption: "Chat, search and writing",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        { problem: "Vs Tongyi / Doubao?", fix: "Pick the account you already have." },
      ],
      cost: "Basic chat is free; higher tiers are on Baidu’s page.",
    },
  },
};
