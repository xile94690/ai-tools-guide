import type { TutorialSet } from "./tutorial-types";

export const ccSwitchTutorials: TutorialSet = {
  "cc-switch": {
    zh: {
      difficulty: "入门（会装软件、会复制粘贴即可）",
      os: "macOS / Windows / Linux 桌面端",
      prereq: [],
      steps: [
        {
          title: "它是干什么的",
          blocks: [
            {
              kind: "text",
              text: "**CC Switch** 是一个电脑端小工具，用来给 Claude Code、Codex、Gemini CLI、OpenCode 等管理多套 **API 供应商**。官方订阅登录是一条路；国内直连不稳、要换 DeepSeek / 中转 / 官方 Console Key 时，用它点一下切换，不用每次手改配置文件。",
            },
            {
              kind: "shot",
              src: "/shots/cc-switch/site.svg",
              caption: "从 GitHub Releases 下载对应系统的安装包（示意图）",
            },
            {
              kind: "warn",
              text: "它不提供模型额度。Key 和账单在你自己的 Anthropic / OpenAI / 中转控制台。CC Switch 只负责写进各 CLI 的配置。",
            },
          ],
        },
        {
          title: "下载并安装桌面端",
          blocks: [
            {
              kind: "text",
              text: "打开 [github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases)，按系统下载：macOS 用 `.dmg`，Windows 用安装包，Linux 用 AppImage 或对应包。",
            },
            {
              kind: "list",
              items: [
                "macOS：打开 dmg，把应用拖进「应用程序」。若提示未验证，到系统设置 → 隐私与安全性点「仍要打开」",
                "Windows：运行安装程序，SmartScreen 拦了就「更多信息 → 仍要运行」",
                "装好后从启动台 / 开始菜单打开 **CC Switch**，不必开终端",
              ],
            },
          ],
        },
        {
          title: "添加一套 API 供应商",
          blocks: [
            {
              kind: "shot",
              src: "/shots/cc-switch/workspace.svg",
              caption: "左边选应用，右上角添加供应商：名称、API 地址、Key",
            },
            {
              kind: "list",
              items: [
                "左边先选你要配的应用，例如 **Claude Code** 或 **Codex**",
                "点添加。名称自己好认即可，比如「官方 Console」或「某中转」",
                "**API 地址**只填根地址（如 `https://api.anthropic.com` 或中转域名），一般**不要**自己加 `/v1`",
                "**API Key** 从对应控制台复制，整段粘贴，前后不要空格",
              ],
            },
            {
              kind: "note",
              text: "Claude Code 走 Anthropic 协议（`ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN`）。Codex / 部分 OpenCode 走 OpenAI 协议，地址和 Key 不是同一套，不要把 Claude 的 Key 填进 Codex。",
            },
          ],
        },
        {
          title: "设为当前，并重启对应 CLI",
          blocks: [
            {
              kind: "text",
              text: "在列表里选中刚加的供应商，点 **应用 / 设为当前**。CC Switch 会写入该应用的配置文件。",
            },
            {
              kind: "list",
              items: [
                "Claude Code：完全退出终端里的 `claude`（Ctrl+C），再重新运行",
                "Codex：退出 `codex` 再开",
                "Gemini CLI / OpenCode：同样先退出再启动",
                "开一个**新**终端窗口再启动，避免读到旧环境变量",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "claude",
              caption: "以 Claude Code 为例：应用配置后必须新开进程",
            },
            {
              kind: "warn",
              text: "只点「应用」却不退出 CLI，窗口里还是上一套供应商。换 Key 失败时先查是不是没重启。",
            },
          ],
        },
        {
          title: "确认已经走 API",
          blocks: [
            {
              kind: "text",
              text: "启动后随便问一句「现在用的是哪家接口」。若报 401 / unauthorized：Key 不完整、地址多写了 `/v1`，或选错了应用协议。回到 CC Switch 编辑那一条，保存后再重启 CLI。",
            },
            {
              kind: "list",
              items: [
                "常用切换：官方订阅不够用时切到 Console Key 或中转；出国旅行再切回官方",
                "多套配置可以并存，主界面或托盘里切换",
                "详细的各 CLI 安装仍看本站对应教程；这里只解决「用哪把 Key」",
              ],
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "应用了配置，CLI 还是提示未登录 / 401",
          fix: "完全退出 CLI 再开。检查 API 地址不要多 `/v1`，Key 前后无空格。Claude 和 Codex 的 Key 不要交叉填。",
        },
        {
          problem: "macOS 打不开，提示来自未知开发者",
          fix: "系统设置 → 隐私与安全性 → 仍要打开。只从 GitHub Releases 下载，不要用来路不明的安装包。",
        },
        {
          problem: "切换后模型名不对、一直超时",
          fix: "中转和官方的模型 ID 不同。在供应商配置里按对方文档填模型名；超时先换网络或换节点，再测 Key 是否有效。",
        },
      ],
      cost: "CC Switch 软件本身免费开源。你付的是各家 API 或中转的按量费用，以对应控制台为准。",
    },
    en: {
      difficulty: "Beginner",
      os: "macOS / Windows / Linux desktop",
      prereq: [],
      steps: [
        {
          title: "What it is",
          blocks: [
            {
              kind: "text",
              text: "**CC Switch** is a desktop app that stores API provider profiles for Claude Code, Codex, Gemini CLI and OpenCode. Use it when you log in with keys instead of a vendor subscription, or when you hop between official and gateway endpoints.",
            },
            {
              kind: "shot",
              src: "/shots/cc-switch/site.svg",
              caption: "Download the installer from GitHub Releases",
            },
            {
              kind: "warn",
              text: "It does not sell tokens. Billing stays with Anthropic, OpenAI, or your gateway.",
            },
          ],
        },
        {
          title: "Install the desktop app",
          blocks: [
            {
              kind: "text",
              text: "Get the build for your OS from [github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases).",
            },
            {
              kind: "list",
              items: [
                "macOS: drag the .dmg app into Applications; allow it under Privacy & Security if blocked",
                "Windows: run the installer; use More info → Run anyway on SmartScreen",
                "Launch **CC Switch** from the Start menu / Launchpad — no terminal required",
              ],
            },
          ],
        },
        {
          title: "Add a provider",
          blocks: [
            {
              kind: "shot",
              src: "/shots/cc-switch/workspace.svg",
              caption: "Pick the app on the left, add name + base URL + key",
            },
            {
              kind: "list",
              items: [
                "Select Claude Code or Codex (or Gemini / OpenCode) first",
                "Add a provider with a name you’ll recognize",
                "Base URL is the host only — usually **no** `/v1` suffix",
                "Paste the API key with no extra spaces",
              ],
            },
            {
              kind: "note",
              text: "Claude Code uses the Anthropic protocol; Codex uses OpenAI-style keys. Don’t mix them.",
            },
          ],
        },
        {
          title: "Apply, then restart the CLI",
          blocks: [
            {
              kind: "text",
              text: "Set the provider as current. Fully quit the CLI (`Ctrl+C`) and start it in a **new** terminal so it reloads env.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "claude",
              caption: "Example: restart Claude Code after applying",
            },
          ],
        },
        {
          title: "Confirm it’s using the key",
          blocks: [
            {
              kind: "text",
              text: "Ask a trivial question. 401 usually means a bad key, an extra `/v1`, or the wrong protocol for that app. Edit the profile, apply, restart.",
            },
          ],
        },
      ],
      configs: [],
      troubles: [
        {
          problem: "Applied, but the CLI still says logged out / 401",
          fix: "Quit the CLI fully. Check the base URL and key. Don’t put a Claude key on Codex.",
        },
        {
          problem: "macOS blocks the app",
          fix: "Privacy & Security → Open Anyway. Download only from GitHub Releases.",
        },
        {
          problem: "Timeouts or unknown model IDs",
          fix: "Gateways use different model names — copy them from that provider’s docs. Retry the key on a stable network.",
        },
      ],
      cost: "CC Switch is free and open source. You pay the API or gateway you pointed it at.",
    },
  },
};
