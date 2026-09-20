import type { Locale } from "./site";
import type { Tutorial, TutorialSet } from "./tutorial-types";
import { chatTutorials } from "./tutorials-batch-chat";
import { codeTutorials } from "./tutorials-batch-code";
import { creativeTutorials } from "./tutorials-batch-creative";
import { moreChatTutorials } from "./tutorials-batch-more-chat";
import { officeTutorials } from "./tutorials-batch-office";
import { mediaTutorials } from "./tutorials-batch-media";
import { tutorialShells } from "./tutorials-shell";
import { extraSurfaces } from "./tutorials-batch-surfaces";
import { ccSwitchTutorials } from "./tutorials-batch-ccswitch";
import { cnIdeTutorials } from "./tutorials-batch-cn-ide";
import { cnAppTutorials } from "./tutorials-batch-cn-apps";
import { starterSteps } from "./tutorial-scope";

export type {
  Block,
  Step,
  Tutorial,
  TutorialSet,
  Plan,
  EnvCheck,
} from "./tutorial-types";

const claudeCode: { zh: Tutorial; en: Tutorial } = {
  zh: {
    difficulty: "入门（会用终端基础命令即可）",
    os: "macOS 13+ / Windows 10 1809+ / Ubuntu 20.04+ / Debian 10+，4GB 以上内存",
    prereq: [
      {
        label: "账号（必需）",
        detail:
          "Claude Code 不支持免费版 Claude。需要 Pro（$20/月）、Max、Team、Enterprise 订阅，或者 Anthropic Console 的 API Key（按量付费）。没有订阅就先别装，装完也登录不了。",
      },
      {
        label: "终端",
        detail:
          "macOS 打开「启动台 → 终端」，Windows 打开 PowerShell（开始菜单搜 PowerShell）。后面所有命令都在这两个窗口里执行。",
      },
      {
        label: "Node.js（可选）",
        detail:
          "官方安装脚本自带运行时，不需要 Node。只有你想用 npm 方式安装时才需要 Node 22 以上，提前运行 node -v 确认。",
      },
      {
        label: "Git（建议）",
        detail:
          "让 Claude Code 帮你提交和回滚改动会顺手很多，版本在 2.0 以上即可，运行 git --version 检查。",
      },
      {
        label: "网络",
        detail:
          "需要能访问 claude.ai 和 api.anthropic.com。国内直连不通，请先准备好可访问外网的网络环境，否则第 6 步登录一定失败。",
      },
    ],
    steps: [
      {
        title: "打开终端，确认自己在哪个目录",
        blocks: [
          {
            kind: "text",
            text: "安装和登录不分目录，但**第 6 步开始要在你的项目目录里操作**。先记住终端里 `~` 表示用户主目录。",
          },
          { kind: "code", lang: "bash", code: "cd ~/Desktop", caption: "先切到桌面，方便后面找项目" },
          { kind: "output", text: "（无输出即为成功，终端提示符会显示当前目录）" },
        ],
      },
      {
        title: "安装 Claude Code（macOS / Linux / WSL）",
        blocks: [
          {
            kind: "text",
            text: "复制下面这行命令粘到终端里回车，脚本会自动下载，并把它装到 `~/.local/bin/claude`。",
          },
          {
            kind: "code",
            lang: "bash",
            code: "curl -fsSL https://claude.ai/install.sh | bash",
            caption: "官方安装脚本（原生安装，会自动后台更新）",
          },
          {
            kind: "output",
            text: "Claude Code successfully installed!\nInstalled to ~/.local/bin/claude\nRun 'claude' to get started",
          },
          {
            kind: "warn",
            text: "不要加 sudo 执行。如果报 `syntax error near unexpected token '<'`，说明你现在其实在 PowerShell 里，请改用下一步的 Windows 命令。",
          },
        ],
      },
      {
        title: "安装 Claude Code（Windows）",
        blocks: [
          {
            kind: "text",
            text: "Windows 在 **PowerShell** 里执行下面这行（不需要管理员权限）。",
          },
          {
            kind: "code",
            lang: "powershell",
            code: "irm https://claude.ai/install.ps1 | iex",
            caption: "Windows PowerShell 安装命令",
          },
          {
            kind: "note",
            text: "如果你用的是 **CMD** 而不是 PowerShell，改用：`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`。提示符带 `PS C:\\` 说明是 PowerShell，只有 `C:\\` 说明是 CMD。",
          },
          {
            kind: "note",
            text: "也可以走包管理器：macOS 用 `brew install --cask claude-code`，Windows 用 `winget install Anthropic.ClaudeCode`，或用 npm `npm install -g @anthropic-ai/claude-code`。注意 Homebrew、WinGet、npm 三种方式**不会自动更新**，需要手动升级；官方脚本会。",
          },
        ],
      },
      {
        title: "（遇到才做）让终端认识 claude 命令",
        blocks: [
          {
            kind: "text",
            text: "如果第 5 步提示 `command not found`，说明安装目录不在 PATH 里。把下面这行加进 shell 配置并让它立即生效。",
          },
          {
            kind: "code",
            lang: "bash",
            code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
            caption: "macOS 默认是 zsh；如果你用 bash，把 ~/.zshrc 换成 ~/.bashrc",
          },
          { kind: "output", text: "（无输出即可，重新运行 claude --version 验证）" },
        ],
      },
      {
        title: "验证安装是否成功",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "claude --version",
            caption: "能打印版本号就说明装好了",
          },
          { kind: "output", text: "2.1.211 (Claude Code)" },
          {
            kind: "note",
            text: "想更彻底地体检，运行 `claude doctor`，它会检查安装健康度、配置文件语法错误，并给出修复建议。",
          },
        ],
      },
      {
        title: "首次启动并登录账号",
        blocks: [
          {
            kind: "text",
            text: "先 `cd` 进你的项目文件夹，再运行 `claude`（不要加 sudo）。第一次启动会出现登录方式选择界面。",
          },
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project\nclaude",
            caption: "先进入项目目录，再启动 Claude Code",
          },
          {
            kind: "shot",
            src: "/shots/claude-code/login.svg",
            caption: "首次启动的登录选择：1 用订阅账号，2 用 Console API Key",
          },
          {
            kind: "list",
            items: [
              "**1. Claude account with subscription** —— 用 Pro / Max / Team / Enterprise 订阅登录，推荐，额度含在订阅里",
              "**2. Anthropic Console account** —— 用 API Key 按量付费，适合已经有 API 预算的团队",
            ],
          },
          {
            kind: "text",
            text: "选 1 之后会自动打开浏览器，在网页里登录 Claude 账号并点击授权，授权完成终端会自动继续，不用手动复制任何东西。如果网页没自动打开，把终端里显示的链接复制到浏览器打开。",
          },
          {
            kind: "note",
            text: "如果环境变量里存在 `ANTHROPIC_API_KEY`，它会先问你要不要用这个 Key，而不是开浏览器。",
          },
        ],
      },
      {
        title: "让它读懂你的项目（生成 CLAUDE.md）",
        blocks: [
          {
            kind: "text",
            text: "进入会话后，先输入 `/init`。它会扫描项目结构，自动生成一份 `CLAUDE.md`，把构建命令、测试命令、代码规范写进去。以后每次会话它都会先读这份文件。",
          },
          { kind: "code", lang: "text", code: "/init", caption: "在 Claude Code 会话里输入，注意是斜杠命令" },
          {
            kind: "note",
            text: "生成后建议打开 `CLAUDE.md` 手工补几条你自己的规矩（比如「提交信息用中文」「不要动 legacy 目录」），并把文件提交到 Git。",
          },
        ],
      },
      {
        title: "用它干活：先出方案，再改代码",
        blocks: [
          {
            kind: "text",
            text: "直接用中文描述需求就行，越具体越好。复杂需求**先让它给方案**，确认思路后再让它动手，能少走很多弯路。",
          },
          {
            kind: "code",
            lang: "text",
            code: "把 src/auth/login.ts 里空密码没校验的问题修掉，补一个单元测试，然后跑 npm test",
            caption: "一个典型的需求描述：改哪里 + 期望结果 + 验收方式",
          },
          {
            kind: "shot",
            src: "/shots/claude-code/plan.svg",
            caption: "它会先列出要改的文件和步骤，你选“确认”之后才真正写文件",
          },
          {
            kind: "text",
            text: "答复里给的操作需要你逐条确认：**auto-accept edits** 表示这类改动以后不用再问；**manually approve edits** 表示每步都给你看 diff。第一次用建议选手动确认，看清楚它到底改了什么。",
          },
        ],
      },
      {
        title: "常用命令与快捷键速查",
        blocks: [
          {
            kind: "list",
            items: [
              "`claude` —— 在当前目录启动交互会话",
              "`claude -c` —— 继续上一次对话",
              "`claude -r` —— 从历史会话里挑一个恢复",
              "`claude -p \"问题\"` —— 非交互执行一次，适合脚本和 CI",
              "`claude doctor` —— 检查安装与配置状态",
              "`claude update` —— 手动更新到最新版",
              "`/init` —— 生成项目记忆 CLAUDE.md",
              "`/clear` —— 清空上下文重新开始（历史仍保存在磁盘上）",
              "`/compact` —— 压缩对话历史，省 token",
              "`/config` —— 改设置（模型、自动更新通道等）",
            ],
          },
          {
            kind: "shot",
            src: "/shots/claude-code/site.png",
            caption: "官方 Quickstart 文档（code.claude.com/docs）：本文流程和它一致，进阶配置可对照查阅",
          },
        ],
      },
    ],
    configs: [
      {
        path: "~/.claude/settings.json",
        desc: "全局配置：环境变量、自动更新通道、权限等。改完重启 Claude Code 生效。",
        code: `{
  "autoUpdatesChannel": "stable",
  "env": {
    "DISABLE_AUTOUPDATER": "1"
  }
}`,
      },
      {
        path: "CLAUDE.md（项目根目录）",
        desc: "项目记忆文件，每次会话都会读。把项目规范写死在这里，比每次口头交代靠谱。",
        code: `# 项目约定
- 包管理器用 pnpm，不要用 npm
- 提交信息用中文，格式 type(scope): 说明
- 改完代码必须跑 pnpm test 和 pnpm lint
- 不要修改 legacy/ 目录下的文件`,
      },
      {
        path: "~/.claude/settings.json（Windows 专用）",
        desc: "Windows 原生安装时，指定 Git Bash 路径，否则只能用 PowerShell 工具跑命令。",
        code: `{
  "env": {
    "CLAUDE_CODE_GIT_BASH_PATH": "C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe"
  }
}`,
      },
    ],
    troubles: [
      {
        problem: "运行 claude 提示 command not found",
        fix: "PATH 没生效。运行 `echo $PATH` 看是否包含 ~/.local/bin，没有就按第 4 步写入 shell 配置，然后关掉终端重新打开。",
      },
      {
        problem: "登录时浏览器打开了，但授权后终端一直卡住",
        fix: "企业网络或代理常会拦截本地回调。先确认浏览器里已登录 Claude 账号；仍不行就换网络（如手机热点）重试，或改用 Console API Key 方式登录。",
      },
      {
        problem: "npm 安装报 EBADENGINE 或 EACCES 权限错误",
        fix: "EBADENGINE 说明 Node 版本低于 22，升级 Node 或改用官方脚本。EACCES 千万不要加 sudo，改用 nvm 管理 Node，或修正 npm 全局目录权限。",
      },
      {
        problem: "搜索文件、找代码的结果不准确",
        fix: "它依赖 ripgrep。确认系统里有 `rg` 命令；Alpine 等精简系统需要 `apk add ripgrep` 并设置环境变量 USE_BUILTIN_RIPGREP=0。",
      },
    ],
    cost: "免费版 Claude 账号**不能**使用 Claude Code。费用来自订阅（Pro $20/月起，另有 Max/Team/Enterprise）或 Console API Key 按量计费。具体价格以 Anthropic 官网为准。",
  },
  en: {
    difficulty: "Beginner (basic terminal commands)",
    os: "macOS 13+ / Windows 10 1809+ / Ubuntu 20.04+ / Debian 10+, 4GB+ RAM",
    prereq: [
      {
        label: "Account (required)",
        detail:
          "The free Claude plan does not include Claude Code. You need Pro ($20/mo), Max, Team or Enterprise, or an Anthropic Console API key (pay as you go). Don't install without one — login will fail.",
      },
      {
        label: "A terminal",
        detail:
          "Terminal on macOS, PowerShell on Windows. Every command below runs there.",
      },
      {
        label: "Node.js (optional)",
        detail:
          "The official installer bundles its own runtime. Node 22+ is only needed if you install via npm — check with node -v.",
      },
      {
        label: "Git (recommended)",
        detail:
          "Makes committing and reverting changes much smoother. Check with git --version.",
      },
      {
        label: "Network",
        detail:
          "claude.ai and api.anthropic.com must be reachable. Behind a blocked network, step 6 will never complete.",
      },
    ],
    steps: [
      {
        title: "Open a terminal and pick your project folder",
        blocks: [
          {
            kind: "text",
            text: "Installing works from anywhere, but from **step 6 you must be inside your project**. `~` means your home directory.",
          },
          { kind: "code", lang: "bash", code: "cd ~/Desktop", caption: "Move somewhere easy to reach" },
          { kind: "output", text: "(no output means success — the prompt shows the current folder)" },
        ],
      },
      {
        title: "Install (macOS / Linux / WSL)",
        blocks: [
          { kind: "text", text: "Paste this one line into the terminal and press enter. It installs to `~/.local/bin/claude`." },
          {
            kind: "code",
            lang: "bash",
            code: "curl -fsSL https://claude.ai/install.sh | bash",
            caption: "Official installer (native install, auto-updates)",
          },
          {
            kind: "output",
            text: "Claude Code successfully installed!\nInstalled to ~/.local/bin/claude\nRun 'claude' to get started",
          },
          {
            kind: "warn",
            text: "Never run this with sudo. If you get `syntax error near unexpected token '<'` you are actually in PowerShell — use the Windows command instead.",
          },
        ],
      },
      {
        title: "Install (Windows)",
        blocks: [
          { kind: "text", text: "In **PowerShell** (no admin rights needed):" },
          {
            kind: "code",
            lang: "powershell",
            code: "irm https://claude.ai/install.ps1 | iex",
            caption: "Windows PowerShell installer",
          },
          {
            kind: "note",
            text: "On **CMD** use instead: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`. A prompt starting with `PS C:\\` is PowerShell; plain `C:\\` is CMD.",
          },
          {
            kind: "note",
            text: "Package managers also work: `brew install --cask claude-code`, `winget install Anthropic.ClaudeCode`, or `npm install -g @anthropic-ai/claude-code`. These do **not** auto-update, unlike the official script.",
          },
        ],
      },
      {
        title: "Only if needed: put claude on your PATH",
        blocks: [
          { kind: "text", text: "If step 5 says `command not found`, add the install directory to your PATH:" },
          {
            kind: "code",
            lang: "bash",
            code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
            caption: "macOS defaults to zsh; use ~/.bashrc if you run bash",
          },
          { kind: "output", text: "(no output — re-run claude --version to confirm)" },
        ],
      },
      {
        title: "Verify the installation",
        blocks: [
          { kind: "code", lang: "bash", code: "claude --version", caption: "A version number means you're good" },
          { kind: "output", text: "2.1.211 (Claude Code)" },
          {
            kind: "note",
            text: "For a full health check run `claude doctor` — it validates the install and your settings files and suggests fixes.",
          },
        ],
      },
      {
        title: "First launch and login",
        blocks: [
          { kind: "text", text: "`cd` into your project, then run `claude` (no sudo). The first launch asks how to sign in:" },
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project\nclaude",
            caption: "Enter the project first, then start the CLI",
          },
          {
            kind: "shot",
            src: "/shots/claude-code/login.svg",
            caption: "Login options: (1) subscription account, (2) Console API key",
          },
          {
            kind: "list",
            items: [
              "**1. Claude account with subscription** — use your Pro / Max / Team / Enterprise plan (recommended, included in the plan)",
              "**2. Anthropic Console account** — pay-as-you-go API key",
            ],
          },
          {
            kind: "text",
            text: "Option 1 opens your browser: sign in, click authorize, and the terminal continues by itself. If the browser doesn't open, copy the link printed in the terminal.",
          },
          {
            kind: "note",
            text: "If `ANTHROPIC_API_KEY` is set in your environment, it will ask whether to use that key instead of opening the browser.",
          },
        ],
      },
      {
        title: "Teach it about your project (/init)",
        blocks: [
          {
            kind: "text",
            text: "Inside the session, type `/init`. It scans the project and writes a `CLAUDE.md` with build commands, test commands and conventions that it reads every session.",
          },
          { kind: "code", lang: "text", code: "/init", caption: "A slash command — type it inside the Claude Code session" },
          {
            kind: "note",
            text: "Edit the generated file and add your own rules (e.g. \"commit messages in English\", \"never touch legacy/\"), then commit it to Git.",
          },
        ],
      },
      {
        title: "Do real work: plan first, then edit",
        blocks: [
          {
            kind: "text",
            text: "Describe the task in plain language. For anything non-trivial, **ask for a plan first** and approve it before it writes code.",
          },
          {
            kind: "code",
            lang: "text",
            code: "Fix the missing empty-password check in src/auth/login.ts, add a unit test, then run npm test",
            caption: "A good prompt: where + what + how to verify",
          },
          {
            kind: "shot",
            src: "/shots/claude-code/plan.svg",
            caption: "It lists the files it will change and waits for your approval",
          },
          {
            kind: "text",
            text: "You choose how edits are approved: **auto-accept** stops asking, **manually approve** shows you every diff. Start with manual approval so you can see exactly what changed.",
          },
        ],
      },
      {
        title: "Command cheat sheet",
        blocks: [
          {
            kind: "list",
            items: [
              "`claude` — start an interactive session here",
              "`claude -c` — continue the last conversation",
              "`claude -r` — pick a past session to resume",
              "`claude -p \"question\"` — one-shot, non-interactive (scripts, CI)",
              "`claude doctor` — diagnose install and settings",
              "`claude update` — update manually",
              "`/init` — create the project memory file",
              "`/clear` — fresh context (history stays on disk)",
              "`/compact` — compress history to save tokens",
              "`/config` — change settings (model, update channel, …)",
            ],
          },
          {
            kind: "shot",
            src: "/shots/claude-code/site.png",
            caption: "The official Quickstart (code.claude.com/docs) — same flow, more depth for advanced config",
          },
        ],
      },
    ],
    configs: [
      {
        path: "~/.claude/settings.json",
        desc: "Global settings: environment variables, update channel, permissions. Restart the CLI to apply.",
        code: `{
  "autoUpdatesChannel": "stable",
  "env": {
    "DISABLE_AUTOUPDATER": "1"
  }
}`,
      },
      {
        path: "CLAUDE.md (project root)",
        desc: "Project memory, read every session. Put your conventions here instead of repeating them in chat.",
        code: `# Project conventions
- Use pnpm, never npm
- Commit messages: type(scope): summary
- Always run pnpm test and pnpm lint after edits
- Do not modify anything under legacy/`,
      },
      {
        path: "~/.claude/settings.json (Windows)",
        desc: "On native Windows, point it at Git Bash so the Bash tool works.",
        code: `{
  "env": {
    "CLAUDE_CODE_GIT_BASH_PATH": "C:\\\\Program Files\\\\Git\\\\bin\\\\bash.exe"
  }
}`,
      },
    ],
    troubles: [
      {
        problem: "claude: command not found",
        fix: "PATH issue. Run `echo $PATH` and check it contains ~/.local/bin, then apply step 4 and reopen the terminal.",
      },
      {
        problem: "The browser opened but the terminal hangs after authorizing",
        fix: "Corporate proxies often block the local callback. Confirm you are logged in on the web, try another network (phone hotspot), or sign in with a Console API key instead.",
      },
      {
        problem: "npm install fails with EBADENGINE or EACCES",
        fix: "EBADENGINE means Node < 22 — upgrade or use the official script. For EACCES never use sudo; manage Node with nvm or fix the npm global prefix permissions.",
      },
      {
        problem: "File search and grep results look wrong",
        fix: "It relies on ripgrep. Make sure `rg` exists on your system; on Alpine install it and set USE_BUILTIN_RIPGREP=0.",
      },
    ],
    cost: "The free Claude plan **cannot** use Claude Code. You pay via a subscription (Pro from $20/mo, plus Max/Team/Enterprise) or a Console API key billed by usage. Check Anthropic's site for current prices.",
  },
};

const opencode: { zh: Tutorial; en: Tutorial } = {
  zh: {
    difficulty: "入门",
    os: "macOS / Linux / WSL（Windows 官方推荐用 WSL）",
    prereq: [
      {
        label: "一个现代终端",
        detail:
          "系统自带终端就能用，但官方推荐 WezTerm、Ghostty、Kitty、Alacritty 这类现代终端模拟器，显示效果和快捷键支持更好。",
      },
      {
        label: "模型 API Key（必需）",
        detail:
          "OpenCode 本身不含模型，必须接一个服务商。最省事的是官方精选的 OpenCode Zen（去 opencode.ai/auth 登录、绑卡、拿 Key），也可以自备 Anthropic / OpenAI / DeepSeek / Google 的 Key。",
      },
      {
        label: "Node.js（可选）",
        detail: "用官方脚本安装不需要 Node；用 npm 方式安装则需要 Node 18 以上。",
      },
      {
        label: "网络",
        detail: "需要能访问 opencode.ai 和你所选模型服务商的 API 域名。",
      },
    ],
    steps: [
      {
        title: "打开终端",
        blocks: [
          {
            kind: "text",
            text: "macOS 打开「终端」或 Ghostty，Windows 请先打开 **WSL**（开始菜单搜 WSL 或 Ubuntu），后面的命令都在 WSL 里执行。",
          },
        ],
      },
      {
        title: "一行命令完成安装",
        blocks: [
          { kind: "text", text: "在终端粘贴执行：" },
          {
            kind: "code",
            lang: "bash",
            code: "curl -fsSL https://opencode.ai/install | bash",
            caption: "官方推荐的一键安装脚本",
          },
          {
            kind: "output",
            text: "Installing opencode...\n✓ opencode installed successfully\nAdd ~/.opencode/bin to your PATH if it isn't already",
          },
          {
            kind: "note",
            text: "其他安装方式：`npm install -g opencode-ai`、`brew install anomalyco/tap/opencode`（macOS/Linux，更新最快）、Windows 上 `choco install opencode` 或 `scoop install opencode`。",
          },
        ],
      },
      {
        title: "验证安装",
        blocks: [
          { kind: "code", lang: "bash", code: "opencode --version", caption: "打印出版本号即可" },
          { kind: "output", text: "0.x.y" },
          {
            kind: "note",
            text: "如果提示 command not found，把安装脚本提示的目录（通常是 `~/.opencode/bin`）加进 PATH，然后重开终端。",
          },
        ],
      },
      {
        title: "进入你要干活的项目目录",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project",
            caption: "OpenCode 会以当前目录作为工作区",
          },
          {
            kind: "shot",
            src: "/shots/opencode/site.png",
            caption: "OpenCode 官方文档：安装、配置、快捷键都在这里查",
          },
        ],
      },
      {
        title: "启动 OpenCode",
        blocks: [
          { kind: "code", lang: "bash", code: "opencode", caption: "启动后会进入全屏 TUI 界面" },
          {
            kind: "text",
            text: "第一次进入是空的，因为还没接模型。看下一步。",
          },
        ],
      },
      {
        title: "关键一步：连接模型服务商（/connect）",
        blocks: [
          {
            kind: "text",
            text: "在 TUI 的输入框里输入 `/connect` 回车，会出现服务商列表。新手推荐选第一项 **opencode**（官方精选的 OpenCode Zen，模型都测过，不用自己挑）。",
          },
          { kind: "code", lang: "text", code: "/connect", caption: "在 OpenCode 会话里输入" },
          {
            kind: "shot",
            src: "/shots/opencode/connect-panel.svg",
            caption: "/connect 的服务商列表：选 opencode 用官方 Zen，也可以接自己的 Key",
          },
          {
            kind: "list",
            items: [
              "选 **opencode** → 浏览器打开 opencode.ai/auth",
              "登录账号，添加付款方式（充值余额）",
              "生成并复制 API Key",
              "回到终端把 Key 粘贴进输入框并回车",
            ],
          },
          {
            kind: "note",
            text: "不想用官方 Zen，就选 anthropic / openai / deepseek / google 等，直接粘贴你已有的 API Key 即可，费用按各家定价走。",
          },
        ],
      },
      {
        title: "初始化项目：生成 AGENTS.md",
        blocks: [
          {
            kind: "text",
            text: "输入 `/init`，它会分析项目结构并生成 `AGENTS.md`（项目约定文件）。建议提交到 Git，让团队共用同一份约定。",
          },
          { kind: "code", lang: "text", code: "/init" },
        ],
      },
      {
        title: "核心用法：Tab 切换 Plan / Build 模式",
        blocks: [
          {
            kind: "text",
            text: "按 **Tab** 键切换模式。**Plan** 模式只出方案、不动文件，适合先对齐思路；确认没问题后按 Tab 回到 **Build** 模式，它才会真正改代码、跑命令。",
          },
          {
            kind: "shot",
            src: "/shots/opencode/plan-mode.svg",
            caption: "状态栏显示当前处于 Plan 还是 Build，按 Tab 切换",
          },
          {
            kind: "code",
            lang: "text",
            code: "当用户删除笔记时，把它标记为已删除而不是真删。再做一个“最近删除”页面，可以恢复或彻底删除。",
            caption: "在 Plan 模式下这样描述需求，它会先给你实现方案",
          },
        ],
      },
      {
        title: "提高效率的四个技巧",
        blocks: [
          {
            kind: "list",
            items: [
              "**@** —— 输入 @ 会模糊搜索项目文件并引用进上下文，比手打路径快",
              "**/undo 与 /redo** —— 改错了一键回退，和它说一句就能重新生成",
              "**/share** —— 把当前会话生成链接发给同事，对方能看到完整过程",
              "**拖拽图片进终端** —— 设计稿截图直接拖进来当参考，不需要另存文件",
            ],
          },
        ],
      },
    ],
    configs: [
      {
        path: "AGENTS.md（项目根目录）",
        desc: "项目约定文件，OpenCode 每次会话都会读取。用 /init 自动生成后再手工补充。",
        code: `# 项目约定
- 依赖管理一律用 pnpm
- 组件放在 src/components，样式用 Tailwind
- 提交前必须跑 pnpm lint 和 pnpm test`,
      },
      {
        path: "opencode.json（项目根目录，可选）",
        desc: "项目级配置：默认模型、主题、快捷键等。字段以官方文档为准。",
        code: `{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "theme": "opencode"
}`,
      },
    ],
    troubles: [
      {
        problem: "opencode: command not found",
        fix: "安装目录没进 PATH。重开终端试试，仍不行就把安装脚本提示的 ~/.opencode/bin 手动加进 shell 配置。",
      },
      {
        problem: "粘贴 API Key 后仍提示未授权 / 报错 401",
        fix: "确认 Key 复制完整没有多余空格，且账户有余额。也可以重新执行 /connect 换一个服务商或换一个 Key。",
      },
      {
        problem: "终端界面显示错乱、边框乱码",
        fix: "换现代终端（Ghostty、WezTerm、Kitty），或确认终端支持 256 色，把 TERM 设为 xterm-256color。",
      },
      {
        problem: "Windows 上卡顿或功能缺失",
        fix: "官方推荐在 WSL 里运行 OpenCode，而不是原生 Windows。在 WSL 终端里重新执行安装脚本即可。",
      },
    ],
    cost: "OpenCode 开源免费。费用来自模型：用官方 OpenCode Zen 需要先充值（按 token 计费），用自家 Key 则按 Anthropic / OpenAI / DeepSeek 等各家的价格结算。",
  },
  en: {
    difficulty: "Beginner",
    os: "macOS / Linux / WSL (WSL recommended on Windows)",
    prereq: [
      {
        label: "A modern terminal",
        detail:
          "The built-in terminal works, but the docs recommend WezTerm, Ghostty, Kitty or Alacritty for better rendering and keybindings.",
      },
      {
        label: "A model API key (required)",
        detail:
          "OpenCode ships no model of its own. Easiest is the curated OpenCode Zen (sign in at opencode.ai/auth, add billing, copy the key), or bring your own Anthropic / OpenAI / DeepSeek / Google key.",
      },
      {
        label: "Node.js (optional)",
        detail: "Not needed for the install script; Node 18+ is required only for the npm install path.",
      },
      {
        label: "Network",
        detail: "opencode.ai and your chosen model provider's API must be reachable.",
      },
    ],
    steps: [
      {
        title: "Open a terminal",
        blocks: [
          {
            kind: "text",
            text: "On Windows, open **WSL** first (not native PowerShell) and run everything inside it.",
          },
        ],
      },
      {
        title: "Install with one command",
        blocks: [
          { kind: "text", text: "Paste this into the terminal:" },
          {
            kind: "code",
            lang: "bash",
            code: "curl -fsSL https://opencode.ai/install | bash",
            caption: "The recommended install script",
          },
          {
            kind: "output",
            text: "Installing opencode...\n✓ opencode installed successfully\nAdd ~/.opencode/bin to your PATH if it isn't already",
          },
          {
            kind: "note",
            text: "Alternatives: `npm install -g opencode-ai`, `brew install anomalyco/tap/opencode` (fastest updates), or on Windows `choco install opencode` / `scoop install opencode`.",
          },
        ],
      },
      {
        title: "Verify the install",
        blocks: [
          { kind: "code", lang: "bash", code: "opencode --version", caption: "A version number means success" },
          { kind: "output", text: "0.x.y" },
          {
            kind: "note",
            text: "`command not found` means the install directory (usually `~/.opencode/bin`) isn't on your PATH — add it and reopen the terminal.",
          },
        ],
      },
      {
        title: "Go to your project folder",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project",
            caption: "OpenCode uses the current directory as its workspace",
          },
          {
            kind: "shot",
            src: "/shots/opencode/site.png",
            caption: "The official docs: install, config and keybinds all live here",
          },
        ],
      },
      {
        title: "Start OpenCode",
        blocks: [
          { kind: "code", lang: "bash", code: "opencode", caption: "Launches the fullscreen TUI" },
          { kind: "text", text: "It's empty at first because no model is connected yet — that's the next step." },
        ],
      },
      {
        title: "The key step: connect a provider (/connect)",
        blocks: [
          {
            kind: "text",
            text: "Type `/connect` in the prompt and press enter. Pick the first entry, **opencode** (OpenCode Zen) if you want a tested set of models without choosing yourself.",
          },
          { kind: "code", lang: "text", code: "/connect", caption: "Run inside the OpenCode session" },
          {
            kind: "shot",
            src: "/shots/opencode/connect-panel.svg",
            caption: "The provider list: pick opencode for Zen, or bring your own key",
          },
          {
            kind: "list",
            items: [
              "Choose **opencode** → your browser opens opencode.ai/auth",
              "Sign in and add billing (top up credits)",
              "Generate and copy an API key",
              "Paste the key back into the terminal and press enter",
            ],
          },
          {
            kind: "note",
            text: "Prefer your own provider? Pick anthropic, openai, deepseek or google and paste the key you already have — you pay that provider directly.",
          },
        ],
      },
      {
        title: "Initialize the project (AGENTS.md)",
        blocks: [
          {
            kind: "text",
            text: "Type `/init`. It analyses the project and writes `AGENTS.md`, which it reads every session. Commit it so your team shares the same conventions.",
          },
          { kind: "code", lang: "text", code: "/init" },
        ],
      },
      {
        title: "The core workflow: Tab switches Plan / Build",
        blocks: [
          {
            kind: "text",
            text: "Press **Tab** to switch modes. **Plan** only proposes changes (no files touched) — great for agreeing on an approach. Press Tab again for **Build** and it will actually edit code and run commands.",
          },
          {
            kind: "shot",
            src: "/shots/opencode/plan-mode.svg",
            caption: "The status bar shows Plan or Build; Tab toggles between them",
          },
          {
            kind: "code",
            lang: "text",
            code: "When a user deletes a note, flag it as deleted instead of removing it. Add a Recently Deleted screen where users can restore or purge notes.",
            caption: "Describe the feature in Plan mode and review the plan first",
          },
        ],
      },
      {
        title: "Four habits that make it much faster",
        blocks: [
          {
            kind: "list",
            items: [
              "**@** — fuzzy-search and reference project files instead of typing paths",
              "**/undo and /redo** — revert a bad change instantly, then ask again",
              "**/share** — generate a link so a teammate can read the whole session",
              "**Drag images into the terminal** — drop a design mockup straight into the prompt",
            ],
          },
        ],
      },
    ],
    configs: [
      {
        path: "AGENTS.md (project root)",
        desc: "Project conventions, read every session. Generate with /init, then edit.",
        code: `# Project conventions
- Always use pnpm
- Components live in src/components, styled with Tailwind
- Run pnpm lint and pnpm test before committing`,
      },
      {
        path: "opencode.json (project root, optional)",
        desc: "Project config: default model, theme, keybinds. See the official docs for all fields.",
        code: `{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "theme": "opencode"
}`,
      },
    ],
    troubles: [
      {
        problem: "opencode: command not found",
        fix: "The install directory isn't on PATH. Reopen the terminal; if it persists add ~/.opencode/bin to your shell config.",
      },
      {
        problem: "Pasting an API key still gives 401 / unauthorized",
        fix: "Check the key was copied fully (no stray spaces) and the account has credits. Re-run /connect to try a different provider or key.",
      },
      {
        problem: "The TUI renders garbled",
        fix: "Use a modern terminal (Ghostty, WezTerm, Kitty) and make sure TERM supports 256 colors (xterm-256color).",
      },
      {
        problem: "Slow or missing features on Windows",
        fix: "Run OpenCode inside WSL instead of native Windows — that's the officially recommended setup.",
      },
    ],
    cost: "OpenCode is free and open source. You pay for models: top up OpenCode Zen, or pay your own provider (Anthropic, OpenAI, DeepSeek…) per token.",
  },
};

const commandCode: { zh: Tutorial; en: Tutorial } = {
  zh: {
    difficulty: "入门",
    os: "macOS / Linux / Windows",
    prereq: [
      {
        label: "Node.js 18+",
        detail:
          "CLI 通过 npm 全局安装。先运行 `node -v` 检查，没装就去 nodejs.org 装 LTS 版本；推荐用 nvm 管理 Node，避免权限问题。",
      },
      {
        label: "终端",
        detail: "macOS 用「终端」，Windows 用 PowerShell，后面所有命令都在这里执行。",
      },
      {
        label: "Command Code 账号",
        detail:
          "`cmd login` 会在浏览器里完成登录，账号免费就能注册；免费和付费套餐都有，重度的再考虑付费。",
      },
      {
        label: "网络",
        detail: "需要能访问 commandcode.ai。",
      },
    ],
    steps: [
      {
        title: "确认 Node 环境",
        blocks: [
          { kind: "code", lang: "bash", code: "node -v", caption: "版本需要 18 以上" },
          { kind: "output", text: "v20.19.5" },
          {
            kind: "note",
            text: "如果提示 command not found，先安装 Node LTS：macOS 可 `brew install node`，或去 nodejs.org 下载安装包。",
          },
        ],
      },
      {
        title: "全局安装 Command Code",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "npm i -g command-code",
            caption: "安装完成后命令名是 cmd",
          },
          { kind: "output", text: "added 1 package in 3s" },
          {
            kind: "warn",
            text: "报 EACCES 权限错误时**不要**加 sudo。先运行 `npm config get prefix` 看全局目录，把它改成你有权限的目录（例如 `npm config set prefix ~/.npm-global` 并加进 PATH），或改用 nvm。",
          },
        ],
      },
      {
        title: "登录账号",
        blocks: [
          { kind: "code", lang: "bash", code: "cmd login", caption: "会自动打开浏览器完成授权" },
          {
            kind: "shot",
            src: "/shots/command-code/login.svg",
            caption: "浏览器里点授权，终端会自动完成登录",
          },
          {
            kind: "text",
            text: "浏览器打开 commandcode.ai 的登录页，用邮箱或 GitHub 登录并点击授权。如果 Chrome 弹出「本地网络访问」的询问，**点允许**——CLI 需要本地端口接收登录回调，这是正常行为。",
          },
          {
            kind: "note",
            text: "登录成功后终端会直接显示已登录状态。想确认身份可以运行 `cmd whoami`，想看登录状态运行 `cmd status`。",
          },
        ],
      },
      {
        title: "进入项目并启动",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project\ncmd",
            caption: "在项目目录里运行 cmd 进入交互会话",
          },
          {
            kind: "note",
            text: "首次进入某个项目时会问你信任不信任这个目录（trust），信任之后它才能读文件、改代码、跑命令。不信任的目录只能看不能改。",
          },
          {
            kind: "shot",
            src: "/shots/command-code/site.png",
            caption: "Command Code 官网：一句 npm i -g command-code 就能装",
          },
        ],
      },
      {
        title: "开始干活：先 plan 再动手",
        blocks: [
          {
            kind: "text",
            text: "按 **Shift+Tab** 在权限模式间切换：默认（每次改动都问你）→ auto-accept（自动接受）→ plan（只读，只出方案）。第一次用建议先进 plan 模式看方案。",
          },
          {
            kind: "code",
            lang: "text",
            code: "把登录接口空密码没校验的问题修掉，并补一个单元测试",
            caption: "直接输入中文需求即可",
          },
          {
            kind: "text",
            text: "想先写方案再执行，也可以直接输入 `/plan 修复登录接口的空密码校验`，它会进入计划模式，你审核通过后再执行。",
          },
        ],
      },
      {
        title: "开启 Taste 偏好学习",
        blocks: [
          { kind: "code", lang: "text", code: "/taste", caption: "在会话里输入即可开启" },
          {
            kind: "shot",
            src: "/shots/command-code/taste.svg",
            caption: "开启后，它会实时告诉你学到了什么偏好",
          },
          {
            kind: "text",
            text: "开启后，你每次接受、拒绝、手改代码都会成为学习信号，用久了它会越来越贴合你的编码习惯。学习结果默认只存在本地 `.commandcode/taste/` 目录，不会上传你的代码。",
          },
        ],
      },
      {
        title: "扩展能力：技能、子 agent、MCP",
        blocks: [
          {
            kind: "list",
            items: [
              "`/skills` —— 浏览和打开技能包（比如代码审查、写提交信息）",
              "`/agents` —— 管理自定义子 agent，让不同任务用不同角色和模型",
              "`/mcp` —— 接外部工具，例如 GitHub、Notion、数据库",
              "`/import claude` —— 把你 Claude Code / Cursor / OpenCode 的配置一键导进来",
            ],
          },
        ],
      },
      {
        title: "常用命令速查",
        blocks: [
          {
            kind: "list",
            items: [
              "`cmd` —— 启动交互会话",
              "`cmd \"修复登录报错\"` —— 带着任务直接启动",
              "`cmd -c` —— 继续上一次对话",
              "`cmd -r` —— 从历史会话里挑一个恢复",
              "`cmd -p \"问题\"` —— 非交互执行一次，适合脚本 / CI",
              "`Shift+Tab` —— 切换权限模式；`Alt+P`（macOS 是 Option+P）—— 快速切换模型",
              "`/usage` —— 查看额度和用量；`/upgrade` —— 打开升级页面",
              "`/update` —— 更新到最新版",
            ],
          },
        ],
      },
    ],
    configs: [
      {
        path: "AGENTS.md（项目根目录）",
        desc: "项目记忆：构建、测试命令和代码规范写在这里，每次会话都会读。用 /init 可自动生成。",
        code: `# 项目约定
- 包管理器用 pnpm
- 测试命令：pnpm test
- 提交信息用中文，格式 type(scope): 说明`,
      },
      {
        path: ".mcp.json（项目根目录）",
        desc: "接入 MCP 外部工具（也可以用命令 cmd mcp add 添加）。",
        code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`,
      },
      {
        path: ".commandcode/taste/taste.md",
        desc: "Taste 学习结果，由系统自动维护，**不要手改**。用 /taste 管理，npx taste push 可以同步到远端或团队共享。",
        code: `# JavaScript
- Use const instead of let for non-reassigned variables. Confidence: 0.90
- Use object parameters for functions with 2+ params. Confidence: 0.85`,
      },
    ],
    troubles: [
      {
        problem: "安装后提示 command not found: cmd",
        fix: "npm 的全局 bin 目录不在 PATH 里。运行 `npm config get prefix` 找到目录，把 `<该目录>/bin` 加进 PATH，然后重开终端。",
      },
      {
        problem: "登录失败、一直提示未授权",
        fix: "先 `cmd logout` 再 `cmd login` 重新走一遍。仍然失败可以删除 `~/.commandcode/auth.json` 后重试，或到 commandcode.ai/studio 检查账号状态。",
      },
      {
        problem: "浏览器授权时提示「本地网络访问」",
        fix: "点「允许」。这是 CLI 的 OAuth 回调用的本地临时服务，属于正常流程。",
      },
      {
        problem: "不想把请求发到云端",
        fix: "配合自己的 BYOK 服务商时可用 `--local-only` 启动，只走本地配置的模型服务，不经过 Command Code 服务。",
      },
    ],
    cost: "有免费套餐，付费套餐按订阅计费，额度按请求/用量计算，超出可开自动充值。官网当前起价约每月 1 美元（含赠送额度），具体套餐与价格以 commandcode.ai/pricing 为准。官方说明不会用你的代码做训练。",
  },
  en: {
    difficulty: "Beginner",
    os: "macOS / Linux / Windows",
    prereq: [
      {
        label: "Node.js 18+",
        detail:
          "The CLI installs globally through npm. Check with `node -v`; install the LTS build from nodejs.org if missing. Using nvm avoids permission problems.",
      },
      {
        label: "A terminal",
        detail: "Terminal on macOS, PowerShell on Windows — every command below runs there.",
      },
      {
        label: "A Command Code account",
        detail:
          "`cmd login` signs you in through the browser. Registration is free and there are free and paid plans.",
      },
      {
        label: "Network",
        detail: "commandcode.ai must be reachable.",
      },
    ],
    steps: [
      {
        title: "Check your Node version",
        blocks: [
          { kind: "code", lang: "bash", code: "node -v", caption: "Needs to be 18 or newer" },
          { kind: "output", text: "v20.19.5" },
          {
            kind: "note",
            text: "If the command isn't found, install Node LTS first — `brew install node` on macOS, or the installer from nodejs.org.",
          },
        ],
      },
      {
        title: "Install globally",
        blocks: [
          { kind: "code", lang: "bash", code: "npm i -g command-code", caption: "The CLI binary is called cmd" },
          { kind: "output", text: "added 1 package in 3s" },
          {
            kind: "warn",
            text: "On EACCES permission errors do **not** use sudo. Run `npm config get prefix`, point it somewhere you own (e.g. `npm config set prefix ~/.npm-global` and add it to PATH), or switch to nvm.",
          },
        ],
      },
      {
        title: "Log in",
        blocks: [
          { kind: "code", lang: "bash", code: "cmd login", caption: "Opens the browser to authorize" },
          {
            kind: "shot",
            src: "/shots/command-code/login.svg",
            caption: "Authorize in the browser; the terminal finishes login by itself",
          },
          {
            kind: "text",
            text: "Sign in on the web page (email or GitHub) and authorize. If Chrome asks about **local network access**, click Allow — the CLI needs a temporary local port for the OAuth callback.",
          },
          {
            kind: "note",
            text: "Check who you are with `cmd whoami`, or the connection state with `cmd status`.",
          },
        ],
      },
      {
        title: "Open your project and start",
        blocks: [
          {
            kind: "code",
            lang: "bash",
            code: "cd ~/Desktop/my-project\ncmd",
            caption: "Run cmd inside the project",
          },
          {
            kind: "note",
            text: "The first time you open a project it asks whether to trust the folder. Trusted folders can be read, edited and executed in; untrusted ones are read-only.",
          },
          {
            kind: "shot",
            src: "/shots/command-code/site.png",
            caption: "The Command Code site: install is one npm line",
          },
        ],
      },
      {
        title: "Work: plan first, then let it edit",
        blocks: [
          {
            kind: "text",
            text: "Press **Shift+Tab** to cycle permission modes: default (asks every time) → auto-accept → plan (read-only, proposes only). Start in plan mode.",
          },
          {
            kind: "code",
            lang: "text",
            code: "Fix the missing empty-password check in the login endpoint and add a unit test",
            caption: "Plain language is enough",
          },
          {
            kind: "text",
            text: "You can also run `/plan <task>` to enter plan mode for that task directly, review it, then approve.",
          },
        ],
      },
      {
        title: "Turn on Taste learning",
        blocks: [
          { kind: "code", lang: "text", code: "/taste", caption: "Type it inside the session" },
          {
            kind: "shot",
            src: "/shots/command-code/taste.svg",
            caption: "It shows what it learned as you work",
          },
          {
            kind: "text",
            text: "Every accept, reject and manual edit becomes a learning signal, so it matches your style more closely over time. Learnings stay local in `.commandcode/taste/` by default.",
          },
        ],
      },
      {
        title: "Extend it: skills, sub-agents, MCP",
        blocks: [
          {
            kind: "list",
            items: [
              "`/skills` — browse reusable playbooks (code review, commit messages…)",
              "`/agents` — manage custom sub-agents with their own role and model",
              "`/mcp` — connect external tools like GitHub, Notion or databases",
              "`/import claude` — import your setup from Claude Code, Cursor or OpenCode",
            ],
          },
        ],
      },
      {
        title: "Command cheat sheet",
        blocks: [
          {
            kind: "list",
            items: [
              "`cmd` — start an interactive session",
              "`cmd \"fix the login error\"` — start with a task",
              "`cmd -c` — continue the last conversation",
              "`cmd -r` — resume a past session",
              "`cmd -p \"question\"` — one-shot, non-interactive (scripts / CI)",
              "`Shift+Tab` — switch permission mode; `Alt+P` — quick model switch",
              "`/usage` — check quota and usage; `/upgrade` — open billing",
              "`/update` — update to the latest version",
            ],
          },
        ],
      },
    ],
    configs: [
      {
        path: "AGENTS.md (project root)",
        desc: "Project memory: build/test commands and conventions, read every session. `/init` scaffolds one.",
        code: `# Project conventions
- Use pnpm
- Test command: pnpm test
- Commit messages: type(scope): summary`,
      },
      {
        path: ".mcp.json (project root)",
        desc: "Wire up MCP servers (or use `cmd mcp add`).",
        code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`,
      },
      {
        path: ".commandcode/taste/taste.md",
        desc: "Taste output, maintained automatically — **do not edit by hand**. Manage with /taste; `npx taste push` syncs it remotely for a team.",
        code: `# JavaScript
- Use const instead of let for non-reassigned variables. Confidence: 0.90
- Use object parameters for functions with 2+ params. Confidence: 0.85`,
      },
    ],
    troubles: [
      {
        problem: "command not found: cmd after installing",
        fix: "npm's global bin directory isn't on PATH. Run `npm config get prefix` and add `<prefix>/bin` to PATH, then reopen the terminal.",
      },
      {
        problem: "Login fails or keeps saying unauthorized",
        fix: "Run `cmd logout` then `cmd login` again. If it persists, delete `~/.commandcode/auth.json` and retry, or check your account at commandcode.ai/studio.",
      },
      {
        problem: "Browser asks about local network access",
        fix: "Click Allow — it's the CLI's temporary local callback server for OAuth.",
      },
      {
        problem: "You don't want requests leaving your machine",
        fix: "With your own BYOK provider, launch with `--local-only` so only your configured local providers are used.",
      },
    ],
    cost: "There's a free tier and paid subscriptions billed by plan and usage, with auto top-up when you hit limits. The site currently advertises plans from about $1/month with bonus credits — see commandcode.ai/pricing. Your code is not used for training.",
  },
};

export const tutorials: TutorialSet = {
  "claude-code": claudeCode,
  opencode,
  "command-code": commandCode,
  ...chatTutorials,
  ...codeTutorials,
  ...creativeTutorials,
  ...moreChatTutorials,
  ...officeTutorials,
  ...mediaTutorials,
  ...ccSwitchTutorials,
  ...cnIdeTutorials,
  ...cnAppTutorials,
};

export const getTutorial = (slug: string, locale: Locale) => {
  const base = tutorials[slug]?.[locale];
  if (!base) return undefined;

  const shell = tutorialShells[slug];
  const extra = extraSurfaces[slug];
  const plans = shell?.plans[locale] ?? base.plans;
  const envCheck = shell?.envCheck[locale] ?? base.envCheck;

  if (!shell) {
    return {
      ...base,
      plans,
      envCheck,
      steps: starterSteps(base.steps),
      desktop: starterSteps(base.desktop),
      cli: starterSteps(base.cli),
      configs: [],
    };
  }

  const hasDesktop = shell.surfaces.includes("desktop");
  const hasCli = shell.surfaces.includes("cli");
  const extraDesktop = extra?.desktop?.[locale] ?? [];
  const extraCli = extra?.cli?.[locale] ?? [];

  let desktop = base.desktop ?? [];
  let cli = base.cli ?? [];

  if (hasDesktop && hasCli) {
    if (shell.primary === "desktop") {
      desktop = [
        ...(desktop.length ? desktop : base.steps),
        ...extraDesktop,
      ];
      cli = extraCli;
    } else {
      cli = [...(cli.length ? cli : base.steps), ...extraCli];
      desktop = extraDesktop;
    }
  } else if (hasDesktop) {
    desktop = [...(desktop.length ? desktop : base.steps), ...extraDesktop];
  } else if (hasCli) {
    cli = [...(cli.length ? cli : base.steps), ...extraCli];
  }

  return {
    ...base,
    plans,
    envCheck,
    desktop: starterSteps(desktop),
    cli: starterSteps(cli),
    steps: starterSteps(base.steps),
    configs: [],
  };
};
