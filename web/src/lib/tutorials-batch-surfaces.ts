import type { Step } from "./tutorial-types";
import { apiLoginSteps } from "./tutorials-api-login";

/** Extra walkthrough for the *other* surface when a tool has both desktop and CLI. */
export const extraSurfaces: Record<
  string,
  { desktop?: { zh: Step[]; en: Step[] }; cli?: { zh: Step[]; en: Step[] } }
> = {
  trae: {
    cli: {
      zh: [
        {
          title: "可选：在终端用 trae 打开项目",
          blocks: [
            {
              kind: "text",
              text: "电脑端已经能用。只有你想在终端进入当前目录时，才装命令行。",
            },
            {
              kind: "list",
              items: [
                "打开 Trae，按 Cmd/Ctrl+Shift+P",
                "搜 install 'trae' command 并执行",
                "新开终端",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ntrae .",
              caption: "用 Trae 窗口打开当前文件夹",
            },
            { kind: "output", text: "（无输出；弹出 Trae）" },
          ],
        },
      ],
      en: [
        {
          title: "Optional: the trae shell command",
          blocks: [
            {
              kind: "text",
              text: "The desktop app is enough. Install the command only if you want `trae .`.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ntrae .",
              caption: "Opens the folder in Trae",
            },
          ],
        },
      ],
    },
  },
  codebuddy: {
    cli: {
      zh: [
        {
          title: "命令行：CodeBuddy Code",
          blocks: [
            {
              kind: "text",
              text: "IDE 能用之后，若套餐含 CLI，再装终端版。体验档常常没有 CLI 权限。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @tencent-ai/codebuddy-code\ncodebuddy --version",
              caption: "需要 Node.js 18.20+；也可用官网的安装脚本",
            },
            { kind: "output", text: "codebuddy/x.x.x" },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncodebuddy",
              caption: "首次选 Log in via Chinese Site，用和 IDE 同一套微信 / 手机号",
            },
          ],
        },
      ],
      en: [
        {
          title: "CLI: CodeBuddy Code",
          blocks: [
            {
              kind: "text",
              text: "After the IDE works, install the CLI if your plan includes it.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @tencent-ai/codebuddy-code\ncodebuddy --version",
              caption: "Needs Node.js 18.20+",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncodebuddy",
              caption: "First run: Log in via Chinese Site",
            },
          ],
        },
      ],
    },
  },
  cursor: {
    desktop: {
      zh: [
        {
          title: "另一种登录：在 Cursor 里填 API Key",
          blocks: [
            {
              kind: "text",
              text: "Cursor 可以继续用官方账号额度，也可以在设置里填 **自己的 API Key**（OpenAI / Anthropic 等）。这和 Claude Code 不是同一套配置。",
            },
            {
              kind: "list",
              items: [
                "打开 Cursor → Settings → Models / API Keys，粘贴 Key",
                "若你主要跑的是 **Claude Code / Codex CLI**，用 [CC Switch](/tool/cc-switch) 管那些终端工具，不要指望它改 Cursor 窗口",
                "改完开一个新的 Agent 对话再试，旧对话可能还走上一套额度",
              ],
            },
          ],
        },
      ],
      en: [
        {
          title: "Another way in: paste an API key in Cursor",
          blocks: [
            {
              kind: "text",
              text: "You can keep using Cursor’s subscription, or paste your own OpenAI / Anthropic key under Settings → Models.",
            },
            {
              kind: "list",
              items: [
                "Cursor → Settings → Models / API Keys",
                "For **Claude Code / Codex CLI**, use [CC Switch](/tool/cc-switch) — it does not drive the Cursor window",
                "Start a new agent chat after changing keys",
              ],
            },
          ],
        },
      ],
    },
    cli: {
      zh: [
        {
          title: "把 cursor 命令装进终端（可选）",
          blocks: [
            {
              kind: "text",
              text: "电脑端已经能用了。只有你想在终端里用 `cursor .` 打开当前文件夹，或以后跑自动化时，才需要这一步。",
            },
            {
              kind: "list",
              items: [
                "打开 Cursor，按 `Cmd+Shift+P`（Windows 是 `Ctrl+Shift+P`）",
                "搜 `install 'cursor' command` 并执行",
                "新开一个终端窗口",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncursor .",
              caption: "在项目目录打开 Cursor 窗口，不是在终端里写代码",
            },
            { kind: "output", text: "（无输出；会弹出 Cursor 并打开该文件夹）" },
          ],
        },
      ],
      en: [
        {
          title: "Optional: install the cursor shell command",
          blocks: [
            {
              kind: "text",
              text: "The desktop app is enough. Do this only if you want `cursor .` from a terminal.",
            },
            {
              kind: "list",
              items: [
                "In Cursor, press Cmd/Ctrl+Shift+P",
                "Run install 'cursor' command",
                "Open a new terminal window",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncursor .",
              caption: "Opens the folder in the Cursor window",
            },
            { kind: "output", text: "(no output; a Cursor window opens)" },
          ],
        },
      ],
    },
  },
  windsurf: {
    cli: {
      zh: [
        {
          title: "可选：让终端认识 windsurf 命令",
          blocks: [
            {
              kind: "text",
              text: "日常在窗口里点 **Open Folder** 即可。若要在终端进入项目，把命令加入 PATH。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf --version",
              caption: "新开终端执行；能打印版本就说明 PATH 生效了",
            },
            { kind: "output", text: "Windsurf 1.x.x" },
            {
              kind: "note",
              text: "command not found 时，在 Windsurf 命令面板搜 install shell command，执行后再开一个终端。",
            },
          ],
        },
      ],
      en: [
        {
          title: "Optional: the windsurf shell command",
          blocks: [
            {
              kind: "text",
              text: "Open Folder in the window is enough. Add PATH only if you want `windsurf .` from a terminal.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf --version",
              caption: "Run in a fresh terminal",
            },
            { kind: "output", text: "Windsurf 1.x.x" },
          ],
        },
      ],
    },
  },
  copilot: {
    cli: {
      zh: [
        {
          title: "命令行用法：GitHub Copilot CLI",
          blocks: [
            {
              kind: "text",
              text: "编辑器里的补全是电脑端。另外还有一个终端里的 Copilot，用来在命令行问「这条命令怎么写」、解释报错。两种可以同时装，互不影响。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @github/copilot\ncopilot --version",
              caption: "需要 Node.js；也可用 GitHub 官方文档里的其它安装方式",
            },
            { kind: "output", text: "copilot/0.x.x" },
            {
              kind: "code",
              lang: "bash",
              code: "copilot",
              caption: "首次会走 GitHub 登录，用和编辑器相同的账号",
            },
            {
              kind: "list",
              items: [
                "在仓库目录运行 `copilot`，用自然语言描述要干什么",
                "它给出命令或补丁前会先给你看，确认再执行",
                "没有 Node 也可以看 GitHub Copilot CLI 文档的包管理器安装方式",
              ],
            },
          ],
        },
      ],
      en: [
        {
          title: "CLI: GitHub Copilot CLI",
          blocks: [
            {
              kind: "text",
              text: "Completions live in the editor. Copilot CLI is a separate terminal tool for “write this command” and explaining errors.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @github/copilot\ncopilot --version",
              caption: "Needs Node.js; other installers are in GitHub’s docs",
            },
            { kind: "output", text: "copilot/0.x.x" },
            {
              kind: "code",
              lang: "bash",
              code: "copilot",
              caption: "First run signs in with the same GitHub account",
            },
          ],
        },
      ],
    },
  },
  cline: {
    cli: {
      zh: [
        {
          title: "命令行用法：Cline CLI（可选）",
          blocks: [
            {
              kind: "text",
              text: "默认请用 VS Code 侧边栏。只有你要在纯终端环境（SSH、CI、不方便开窗口）时才装 CLI。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g cline\ncline --version",
              caption: "安装方式以 Cline 当前文档为准",
            },
            {
              kind: "list",
              items: [
                "在 Git 仓库目录运行 `cline`，登录或填和插件里同一套 API Key",
                "仍然是先看 diff 再确认，不要指望它静默改完整仓库",
                "日常写代码继续用电脑端插件，CLI 当备用通道",
              ],
            },
          ],
        },
      ],
      en: [
        {
          title: "CLI: Cline CLI (optional)",
          blocks: [
            {
              kind: "text",
              text: "Prefer the VS Code sidebar. Use the CLI for SSH, CI, or machines without a GUI.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g cline\ncline --version",
              caption: "Confirm the current install command in Cline’s docs",
            },
          ],
        },
      ],
    },
  },
  codex: {
    cli: apiLoginSteps({
      appZh: "Codex",
      appEn: "Codex",
      settings: "~/.codex/config.toml",
      tokenVar: "OPENAI_API_KEY",
      urlVar: "OPENAI_BASE_URL",
      start: "codex",
      officialKeyZh: "OpenAI 平台（platform.openai.com）的 API Key；Codex 也可用兼容 OpenAI 协议的中转",
      officialKeyEn:
        "An OpenAI API key from platform.openai.com, or an OpenAI-compatible gateway",
    }),
    desktop: {
      zh: [
        {
          title: "电脑端：桌面 App 和 IDE 插件",
          blocks: [
            {
              kind: "text",
              text: "上面是命令行（`codex`）。不想进终端的话，用下面两种电脑端，账号和额度与 CLI 相同（ChatGPT Plus / Pro 或 API Key）。",
            },
            {
              kind: "shot",
              src: "/shots/codex/site.png",
              caption: "Codex 官网入口：桌面端、IDE、CLI 是同一套产品的不同入口",
            },
            {
              kind: "list",
              items: [
                "**桌面 App**：在 chatgpt.com 或 OpenAI 的 Codex 页下载 macOS / Windows 安装包，登录 ChatGPT 账号",
                "**VS Code / Cursor 扩展**：扩展商店搜 `Codex` 或 `OpenAI`，安装后在编辑器里登录",
                "窗口里描述任务即可，审批改动和 CLI 的 diff 确认是同一思路",
                "云端 / `codex exec` 适合把一次性任务丢到非交互环境，日常写代码用窗口或 CLI 都行",
              ],
            },
            {
              kind: "note",
              text: "三种入口不要混着登录不同账号，额度会对不上。选一个主入口即可。",
            },
          ],
        },
      ],
      en: [
        {
          title: "Desktop: app and IDE extension",
          blocks: [
            {
              kind: "text",
              text: "The section above is the CLI. The desktop app and the editor extension share the same ChatGPT Plus/Pro or API quota.",
            },
            {
              kind: "shot",
              src: "/shots/codex/site.png",
              caption: "Same product, three doors: desktop, IDE, CLI",
            },
            {
              kind: "list",
              items: [
                "Desktop app: download from the Codex / ChatGPT site and sign in",
                "VS Code / Cursor: install the Codex extension and sign in",
                "Approve diffs the same way you would in the terminal",
              ],
            },
          ],
        },
      ],
    },
  },
  opencode: {
    cli: apiLoginSteps({
      appZh: "OpenCode",
      appEn: "OpenCode",
      settings: "OpenCode 的 /connect 或配置文件",
      tokenVar: "ANTHROPIC_API_KEY",
      urlVar: "ANTHROPIC_BASE_URL",
      start: "opencode",
      officialKeyZh: "Anthropic / OpenAI / DeepSeek 等控制台的 Key，或 OpenCode Zen",
      officialKeyEn: "A key from Anthropic, OpenAI, DeepSeek, or OpenCode Zen",
    }),
    desktop: {
      zh: [
        {
          title: "电脑端：桌面窗口和 IDE 插件",
          blocks: [
            {
              kind: "text",
              text: "上面是终端 TUI。OpenCode 还有桌面窗口和 VS Code / Cursor 插件，连的是同一套 Provider 和 Key。",
            },
            {
              kind: "shot",
              src: "/shots/opencode/site.png",
              caption: "OpenCode 官网：桌面端与终端是同一产品",
            },
            {
              kind: "list",
              items: [
                "桌面安装包在 opencode.ai 下载，登录后 `/connect` 或设置里填 Key",
                "IDE 插件：扩展商店搜 OpenCode，打开侧栏对话",
                "Plan 模式、权限开关和终端版一致，只是点鼠标而不是快捷键",
              ],
            },
          ],
        },
      ],
      en: [
        {
          title: "Desktop: window and IDE extension",
          blocks: [
            {
              kind: "text",
              text: "The TUI is above. The desktop app and editor extension use the same providers and keys.",
            },
            {
              kind: "shot",
              src: "/shots/opencode/site.png",
              caption: "Desktop and terminal are the same product",
            },
          ],
        },
      ],
    },
  },

  "claude-code": {
    cli: apiLoginSteps({
      appZh: "Claude Code",
      appEn: "Claude Code",
      settings: "~/.claude/settings.json",
      tokenVar: "ANTHROPIC_AUTH_TOKEN",
      urlVar: "ANTHROPIC_BASE_URL",
      start: "claude",
      officialKeyZh: "Anthropic Console（console.anthropic.com）生成 Key，按量计费；也可用兼容 Anthropic 协议的中转",
      officialKeyEn:
        "Create a key in the Anthropic Console (console.anthropic.com), or use an Anthropic-compatible gateway",
    }),
  },
  "gemini-cli": {
    cli: apiLoginSteps({
      appZh: "Gemini CLI",
      appEn: "Gemini CLI",
      settings: "环境变量或 Gemini 配置",
      tokenVar: "GEMINI_API_KEY",
      start: "gemini",
      officialKeyZh: "Google AI Studio（aistudio.google.com/apikey）生成 GEMINI_API_KEY",
      officialKeyEn: "Create GEMINI_API_KEY at aistudio.google.com/apikey",
    }),
  },
  "grok-build": {
    cli: apiLoginSteps({
      appZh: "Grok Build",
      appEn: "Grok Build",
      settings: "当前终端或 shell 配置",
      tokenVar: "XAI_API_KEY",
      start: "grok",
      officialKeyZh: "xAI 控制台生成 XAI_API_KEY（以 x.ai 为准）",
      officialKeyEn: "Create XAI_API_KEY in the xAI console",
      ccSwitch: false,
    }),
  },
  aider: {
    cli: apiLoginSteps({
      appZh: "Aider",
      appEn: "Aider",
      settings: "项目 .env 或 shell 配置",
      tokenVar: "OPENAI_API_KEY",
      start: "aider",
      officialKeyZh: "DeepSeek / OpenAI / Anthropic 等控制台的 Key，写进环境变量或 .env",
      officialKeyEn: "A DeepSeek, OpenAI or Anthropic key in env or .env",
      ccSwitch: false,
    }),
  },
};
