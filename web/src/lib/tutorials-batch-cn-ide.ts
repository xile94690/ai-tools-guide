import type { TutorialSet } from "./tutorial-types";

export const cnIdeTutorials: TutorialSet = {
  trae: {
    zh: {
      difficulty: "入门（会装软件即可）",
      os: "Windows 10+ / macOS 10.15+，国内直连",
      prereq: [],
      steps: [
        {
          title: "认准国内版官网再下载",
          blocks: [
            {
              kind: "text",
              text: "字节跳动的 AI IDE。**国内版**官网是 [trae.cn](https://www.trae.cn/) 或 [trae.com.cn](https://www.trae.com.cn/)，中文界面、国产模型、手机号登录。国际版是 trae.ai，账号和套餐都不通用，国内用户先装国内版。",
            },
            {
              kind: "shot",
              src: "/shots/trae/site.svg",
              caption: "国内版下载页：按系统取 Windows / macOS 安装包",
            },
            {
              kind: "warn",
              text: "不要用来路不明的「破解包」。国际版要外网，和国内版是两套产品。",
            },
          ],
        },
        {
          title: "安装并完成首次向导",
          blocks: [
            {
              kind: "list",
              items: [
                "Windows：双击安装包，一直下一步；macOS：把图标拖进「应用程序」",
                "首次打开选主题和「简体中文」",
                "若从 VS Code / Cursor 迁过来，向导里可以导入插件和快捷键",
                "可选：安装 `trae` 命令，方便以后在终端 `trae .` 打开项目",
              ],
            },
            {
              kind: "shot",
              src: "/shots/trae/workspace.svg",
              caption: "主界面：中间写代码，右侧是 AI 对话 / Builder",
            },
          ],
        },
        {
          title: "登录并打开一个项目",
          blocks: [
            {
              kind: "text",
              text: "用**手机号**或掘金账号登录（国内版）。登录后 **File → Open Folder** 打开你的项目，或把文件夹拖进窗口。",
            },
            {
              kind: "list",
              items: [
                "日常问答用 Chat；从零搭项目用 Builder；长流程自动化看 SOLO（入口在左上角模式切换）",
                "输入框旁可选模型（国内版常见豆包 / DeepSeek 等，以当前列表为准）",
                "高峰期可能排队，属正常；先用短任务试通",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "打不开官网或下载很慢",
          fix: "确认打开的是 trae.cn / trae.com.cn，不是 trae.ai。换浏览器或关掉翻译插件再试。",
        },
        {
          problem: "登录要 Google / 一直转圈",
          fix: "你可能装成了国际版。卸了重装国内版，用手机号登录。",
        },
        {
          problem: "AI 一直排队或中断",
          fix: "国内版免费额度会排队。把任务拆短，避开高峰；自定义 API 模型走你自己的 Key。",
        },
      ],
      cost: "国内版个人使用目前以免费为主（可能排队）。国际版按订阅收费。自定义模型按各家 API 计费。以官网为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Windows 10+ / macOS 10.15+, mainland China network",
      prereq: [],
      steps: [
        {
          title: "Download the China build, not trae.ai",
          blocks: [
            {
              kind: "text",
              text: "Trae is ByteDance’s AI IDE. The **China build** lives at [trae.cn](https://www.trae.cn/). The international app at trae.ai is a different account and plan.",
            },
            {
              kind: "shot",
              src: "/shots/trae/site.svg",
              caption: "China download page: Windows / macOS installers",
            },
          ],
        },
        {
          title: "Install and finish the first-run wizard",
          blocks: [
            {
              kind: "list",
              items: [
                "Windows: run the installer; macOS: drag to Applications",
                "Pick a theme and Simplified Chinese",
                "Optionally import VS Code / Cursor plugins and keybindings",
              ],
            },
            {
              kind: "shot",
              src: "/shots/trae/workspace.svg",
              caption: "Editor in the middle, AI chat / Builder on the right",
            },
          ],
        },
        {
          title: "Sign in and open a folder",
          blocks: [
            {
              kind: "text",
              text: "Sign in with a phone number or Juejin. Then File → Open Folder. Use Chat for questions, Builder to scaffold, SOLO for longer agent runs.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Login wants Google",
          fix: "That’s the international build. Install the China app from trae.cn and use a phone number.",
        },
        {
          problem: "Queue or cut-off generations",
          fix: "The free China tier queues at peak. Split the task, or attach your own API key.",
        },
      ],
      cost: "The China personal build is largely free (queues possible). International Trae is paid. Custom models bill via each API.",
    },
  },

  codebuddy: {
    zh: {
      difficulty: "入门",
      os: "Windows 10+ / macOS 11+；CLI 另支持 Linux",
      prereq: [],
      steps: [
        {
          title: "认准 CodeBuddy 官网",
          blocks: [
            {
              kind: "text",
              text: "腾讯云的编程智能体，产品名 **CodeBuddy**（腾讯云代码助手）。有三种形态：独立 **IDE**、编辑器插件、终端 **CLI**。国内官网 [codebuddy.cn](https://www.codebuddy.cn/) 或 [copilot.tencent.com](https://copilot.tencent.com/)，国内直连。",
            },
            {
              kind: "shot",
              src: "/shots/codebuddy/site.svg",
              caption: "官网下载 CodeBuddy IDE；CLI 用 npm 另装",
            },
            {
              kind: "note",
              text: "腾讯还有办公向的 WorkBuddy（龙虾）。本页只教写代码的 CodeBuddy。",
            },
          ],
        },
        {
          title: "安装 IDE 并用微信 / 手机号登录",
          blocks: [
            {
              kind: "list",
              items: [
                "在官网下载对应芯片的 macOS dmg 或 Windows 安装包",
                "macOS 拖进应用程序；Windows 双击安装（可为当前用户安装）",
                "打开后点登录，用**微信或手机号**走国内站认证",
                "登录成功回到 IDE，File → Open Folder 打开项目",
              ],
            },
            {
              kind: "shot",
              src: "/shots/codebuddy/workspace.svg",
              caption: "IDE：对话写需求，中间出代码和预览",
            },
            {
              kind: "warn",
              text: "体验档可能不含 CLI。要用终端版先看套餐是否开通 CLI。",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "登录跳到国际站或要企业域名",
          fix: "个人选 Chinese Site / 国内站。国际站是 codebuddy.ai，账号不通用。",
        },
        {
          problem: "macOS 提示无法验证开发者",
          fix: "系统设置 → 隐私与安全性 → 仍要打开。只从官网下载。",
        },
        {
          problem: "CLI 提示无权使用",
          fix: "体验版常常不含 CLI。升级套餐，或先只用 IDE。",
        },
      ],
      cost: "有体验档（积分有限，可能不含 CLI）。个人标准档按月人民币计价，以 codebuddy.cn 定价页为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "Windows 10+ / macOS 11+; CLI also on Linux",
      prereq: [],
      steps: [
        {
          title: "Use the China site",
          blocks: [
            {
              kind: "text",
              text: "**CodeBuddy** is Tencent Cloud’s coding agent: a standalone IDE, editor plugins, and a CLI. China site: [codebuddy.cn](https://www.codebuddy.cn/).",
            },
            {
              kind: "shot",
              src: "/shots/codebuddy/site.svg",
              caption: "Download the IDE; install the CLI with npm if your plan allows",
            },
          ],
        },
        {
          title: "Install the IDE and sign in with WeChat or phone",
          blocks: [
            {
              kind: "list",
              items: [
                "Download the macOS or Windows build",
                "Sign in via the Chinese site",
                "File → Open Folder",
              ],
            },
            {
              kind: "shot",
              src: "/shots/codebuddy/workspace.svg",
              caption: "Chat on the side, editor in the middle",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Login sends you to the international site",
          fix: "Pick Chinese Site. codebuddy.ai is a separate account.",
        },
        {
          problem: "CLI says unauthorized",
          fix: "The free trial often excludes CLI. Use the IDE or upgrade.",
        },
      ],
      cost: "A limited trial exists. Paid personal plans are RMB monthly — see codebuddy.cn.",
    },
  },
};
