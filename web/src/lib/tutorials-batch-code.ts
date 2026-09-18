import type { TutorialSet } from "./tutorial-types";

export const codeTutorials: TutorialSet = {
  /* ------------------------------------------------------------------ Cursor */
  cursor: {
    zh: {
      difficulty: "入门（会用图形界面即可，不需要命令行基础）",
      os: "macOS 12 或更高 / Windows 10 及以上（64 位）/ Linux（Ubuntu 20.04+ 等主流发行版）；Intel 与 Apple Silicon 都支持",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "Cursor 账号，免费注册就能用。免费版（Hobby）每月有少量 AI 额度，重度使用需要 Pro（$20/月，以 cursor.com 价格页为准）。邮箱、GitHub、Google 登录都行。",
        },
        {
          label: "系统权限",
          detail:
            "macOS 首次打开若提示「无法验证开发者」，去「系统设置 → 隐私与安全性」点「仍要打开」。Windows 10/11 首次运行若弹 SmartScreen，选「更多信息 → 仍要运行」。",
        },
        {
          label: "Git（建议）",
          detail:
            "Cursor 用 Git 来展示 diff、回滚改动，装上会顺手很多。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "Node.js（可选）",
          detail:
            "Cursor 本身不需要 Node。只有当你要在 Cursor 里跑前端 / Node 项目时才需要，建议装 LTS 版本，用 node -v 确认。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 cursor.com 与 api2.cursor.sh 等域名。国内直连可能不稳定，登录和模型请求容易超时，请先准备好可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "下载并安装（macOS）",
          blocks: [
            {
              kind: "text",
              text: "打开 [cursor.com](https://cursor.com)，点右上角的 **Download**，页面会自动识别你的系统；手动选 **macOS** 也行。",
            },
            {
              kind: "list",
              items: [
                "下载得到 `.dmg` 文件，双击打开",
                "把 **Cursor** 图标拖进「应用程序」文件夹",
                "第一次打开如果被拦，去「系统设置 → 隐私与安全性」点「仍要打开」",
                "Apple Silicon（M 系列）和 Intel 用同一个安装包，不用挑",
              ],
            },
            {
              kind: "shot",
              src: "/shots/cursor/site.png",
              caption: "Cursor 官网：右上角 Download 直接给对应系统的安装包",
            },
            {
              kind: "warn",
              text: "不要从第三方下载站拿安装包。Cursor 走应用内自动更新，第三方包经常是旧版甚至被改过。",
            },
          ],
        },
        {
          title: "下载并安装（Windows）",
          blocks: [
            {
              kind: "text",
              text: "同样在 [cursor.com](https://cursor.com) 点 **Download**，选 **Windows**，下载得到 `.exe` 安装程序。",
            },
            {
              kind: "list",
              items: [
                "双击 `.exe`，一路 Next 装完",
                "弹出 SmartScreen 蓝色警告时，点「更多信息」→「仍要运行」",
                "装完在开始菜单搜 Cursor 打开",
              ],
            },
            {
              kind: "warn",
              text: "Windows 上建议用安装程序给的默认目录，不要装到需要管理员权限的位置，否则后续自动更新可能失败。",
            },
          ],
        },
        {
          title: "首次启动：选主题并登录账号",
          blocks: [
            {
              kind: "text",
              text: "第一次打开 Cursor 会走一段设置向导：选主题、选键盘布局（默认就是 VS Code 键位，从 VS Code 迁过来可以直接导入扩展和设置），最后是登录。",
            },
            {
              kind: "list",
              items: [
                "**Sign in** —— 用 GitHub / Google / 邮箱登录，免费版（Hobby）自带每月额度",
                "**Skip** —— 不登录也能当普通编辑器用，但所有 AI 功能都不可用",
              ],
            },
            {
              kind: "text",
              text: "登录在浏览器里完成，授权完自动跳回 Cursor。额度可以在 **Customize / Settings → Account** 里看用量并升级 Pro。",
            },
            {
              kind: "note",
              text: "公司或学校电脑登录失败，多半是代理问题：Cursor 的请求走 HTTPS，需要能访问 cursor.com 与 api2.cursor.sh。",
            },
          ],
        },
        {
          title: "把你的项目打开",
          blocks: [
            {
              kind: "text",
              text: "启动后点 **Open Folder**（或把文件夹拖进窗口），选中项目根目录。和 VS Code 一样，不需要打开终端。",
            },
            {
              kind: "list",
              items: [
                "菜单 **File → Open Folder…**，选你的项目",
                "也可以把文件夹从访达 / 资源管理器直接拖进 Cursor 窗口",
                "打开后左侧是文件树，中间是编辑器，右侧（或 `Cmd+L` / `Ctrl+L`）是 AI 对话",
              ],
            },
            {
              kind: "note",
              text: "Agent 面板用 Git 显示 diff。如果还没装 Git，去 git-scm.com 下一个图形安装包即可，装完重启 Cursor。",
            },
          ],
        },
        {
          title: "让 Cursor 读懂项目：写 AGENTS.md 或 .cursor/rules",
          blocks: [
            {
              kind: "text",
              text: "Cursor 每次对话都会读两类指令文件：项目根目录的 **AGENTS.md**（最省事），以及 **`.cursor/rules/*.mdc`**（可按文件路径生效、可分文件管理）。新手先用 AGENTS.md。",
            },
            {
              kind: "code",
              lang: "text",
              code: "# 项目约定\n- 包管理器用 pnpm，不要用 npm\n- 提交信息用中文，格式 type(scope): 说明\n- 改完代码必须跑 pnpm lint 和 pnpm test\n- 不要修改 legacy/ 目录\n- 新文件一律用 TypeScript",
              caption: "把这份内容存成项目根目录的 AGENTS.md，提交到 Git",
            },
            {
              kind: "note",
              text: "也可以直接在 Agent 输入框里敲 `/create-rule`，让它帮你生成一条规则，再手工补充。",
            },
          ],
        },
        {
          title: "核心用法一：Tab 补全 + Cmd/Ctrl+K 行内改写",
          blocks: [
            {
              kind: "text",
              text: "**Tab 补全**：写代码时 Cursor 会预测你下一步想改的位置，出现灰字按 **Tab** 接受，按 Esc 忽略。",
            },
            {
              kind: "text",
              text: "**Cmd/Ctrl+K**：选中一段代码（也可以不选）按 Cmd+K，输入一句话，它会直接改写这段代码，改完以 diff 给你确认。",
            },
            {
              kind: "shot",
              src: "/shots/cursor/cmd-k.svg",
              caption: "选中代码后按 Cmd/Ctrl+K，输入要求，回车即生成并就地改成 diff",
            },
            {
              kind: "code",
              lang: "text",
              code: "把这段改成带空密码校验的版本，并且返回 400 而不是 401",
              caption: "行内改写时说清楚「改成什么样」，比「优化一下」有用得多",
            },
          ],
        },
        {
          title: "核心用法二：Cmd/Ctrl+L 对话 + Composer 多文件改动",
          blocks: [
            {
              kind: "text",
              text: "**Cmd/Ctrl+L** 打开右侧 Agent 面板，用自然语言描述需求。它会自己找文件、改代码、跑命令。",
            },
            {
              kind: "shot",
              src: "/shots/cursor/agent-chat.svg",
              caption: "右侧 Agent 面板：顶部可切 Plan / Agent，改动以 diff 呈现，逐个或一键接受",
            },
            {
              kind: "text",
              text: "面板顶部有 **Plan** 和 **Agent** 两个模式：**Plan** 只出方案、不动文件，确认思路后再切到 **Agent** 执行。多文件联动改动用 **Cmd/Ctrl+I** 的 Composer。",
            },
            {
              kind: "code",
              lang: "text",
              code: "给首页 hero 区加响应式断点，再加一套暗色模式样式，最后跑一遍 pnpm lint",
              caption: "一个典型需求：改什么 + 做到什么程度 + 怎么验收",
            },
            {
              kind: "note",
              text: "改动会以 diff 呈现，可以逐个 Accept，也可以一次 **Accept all**；拿不准就先点 **Review** 看完整 diff。",
            },
          ],
        },
        {
          title: "接外部工具：MCP 与 Rules",
          blocks: [
            {
              kind: "list",
              items: [
                "**Customize → MCP** —— 一键添加 Marketplace 里的 MCP 插件，或手写 `.cursor/mcp.json`",
                "**Customize → Rules** —— 管理项目规则、用户规则（全局偏好）",
                "**`/create-rule`** —— 在对话里直接生成一条规则",
                "**@** —— 在对话里 @ 文件、@ 目录、@ 文档，把上下文精确喂给它",
              ],
            },
            {
              kind: "note",
              text: "MCP 工具默认需要你确认才执行；点工具名旁的小箭头能看到它要传的参数。MCP 出问题可看 Output 面板里的 **MCP Logs**。",
            },
          ],
        },
        {
          title: "核心快捷键速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Cmd/Ctrl+K` —— 行内改写选中代码",
                "`Cmd/Ctrl+L` —— 打开 / 聚焦 Agent 对话面板",
                "`Cmd/Ctrl+I` —— Composer，多文件一起改",
                "`Tab` —— 接受补全建议",
                "`Cmd/Ctrl+Shift+P` —— 命令面板",
                "`Cmd/Ctrl+P` —— 快速打开文件",
                "`Cmd/Ctrl+Shift+F` —— 全项目搜索",
                "`Cmd/Ctrl+Shift+U` —— Output 面板（切 MCP Logs 看报错）",
                "`Cmd/Ctrl+,` —— 打开设置",
              ],
            },
            {
              kind: "note",
              text: "快捷键是 VS Code 键位，从 VS Code 迁过来的话不用重新学。想改键位：Cmd/Ctrl+K 再按 Cmd/Ctrl+S。",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md（项目根目录）",
          desc: "最简单的项目指令文件，Cursor 每次对话都会读。根目录放一份，子目录可以再放，越深优先级越高。",
          code: `# Project conventions
- Use pnpm, never npm
- Commit messages: type(scope): summary
- Always run pnpm lint and pnpm test after edits
- Do not modify anything under legacy/`,
        },
        {
          path: ".cursor/rules/*.mdc",
          desc: "项目规则。必须是 .mdc 后缀并带 frontmatter，否则会被忽略。alwaysApply: true 表示每次对话都生效；只写 globs 表示匹配到对应文件才生效。",
          code: `---
description: React component standards
globs: src/components/**/*.tsx
alwaysApply: false
---
- Use named exports, not default exports
- Keep components under 200 lines
- Co-locate styles in a module CSS file next to the component`,
        },
        {
          path: ".cursor/mcp.json",
          desc: "接入 MCP 外部工具。项目级放项目根目录，全局级放 ~/.cursor/mcp.json。字段以 Cursor 官方文档为准。",
          code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    }
  }
}`,
        },
      ],
      troubles: [
        {
          problem: "macOS 打开时提示「无法打开，因为无法验证开发者」",
          fix: "别去关系统安全设置。打开「系统设置 → 隐私与安全性」，在底部找到被拦截的提示点「仍要打开」，再确认一次即可。",
        },
        {
          problem: "点了 Sign in，浏览器授权完 Cursor 还是没登录",
          fix: "多见于代理或公司网络拦截本地回调。先在浏览器确认已登录 cursor.com，再回 Cursor 点一次 Sign in；仍不行就换网络（手机热点）重试，或在 Cursor 设置里配置 HTTP 代理。",
        },
        {
          problem: "Tab 补全一直不出灰字",
          fix: "确认已登录且额度没用完；在设置里检查 Cursor Tab 是否被关掉；另外超大文件、部分文件类型默认不触发补全，换个文件试试。",
        },
        {
          problem: "对话里报 401 或者提示超出额度",
          fix: "到 Settings → Account 看用量和订阅状态。免费额度用尽需要升级或换更省额度的小模型；代理/防火墙拦截也会表现为连接失败。",
        },
        {
          problem: "Windows 上装完打不开，或被杀软删掉文件",
          fix: "用官网下载的安装包重装，并在杀软里给安装目录加白名单。装在需要管理员权限的目录会导致自动更新失败，建议用默认位置。",
        },
        {
          problem: "它改了代码，我想整体退回去",
          fix: "Cursor 不接管版本控制。改之前先 `git commit`，不满意用 `git restore .` 或 `git checkout -- <文件>` 回退。养成小步提交的习惯最保险。",
        },
      ],
      cost: "免费版（Hobby）每月有少量 AI 额度，用完需等下一周期或升级；Pro $20/月起，另有 Team / Enterprise，部分模型按用量单独计费——价格与额度以 cursor.com 官网 pricing 页为准。省额度：日常补全用默认小模型，只有大改动用强模型；把无关的大目录排除出索引（Cursor 支持忽略文件配置，具体文件名以官方文档为准）；长任务拆成小步，别一次性把整个仓库塞进上下文。",
    },
    en: {
      difficulty: "Beginner (GUI only — no terminal experience needed)",
      os: "macOS 12+ / Windows 10+ (64-bit) / Linux (Ubuntu 20.04+ and other mainstream distros); Intel and Apple Silicon both supported",
      prereq: [
        {
          label: "Account (required)",
          detail:
            "A Cursor account — free to create. The free Hobby plan includes a small monthly AI allowance; heavy use needs Pro ($20/mo, see cursor.com for current pricing). Email, GitHub or Google sign-in all work.",
        },
        {
          label: "OS permissions",
          detail:
            "On macOS, if the first launch says the developer cannot be verified, allow it under System Settings → Privacy & Security. On Windows 10/11, SmartScreen may block the first run — choose More info → Run anyway.",
        },
        {
          label: "Git (recommended)",
          detail:
            "Cursor uses Git to show diffs and roll back edits. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Node.js (optional)",
          detail:
            "Cursor does not need Node. You only need it if you run front-end or Node projects inside Cursor — install the LTS build and check with node -v.",
        },
        {
          label: "Network",
          detail:
            "cursor.com and api2.cursor.sh must be reachable. On restricted networks sign-in and model calls time out — set up a working outbound connection first.",
        },
      ],
      steps: [
        {
          title: "Download and install (macOS)",
          blocks: [
            {
              kind: "text",
              text: "Open [cursor.com](https://cursor.com) and click **Download** in the top right — the site detects your OS automatically. You can also pick **macOS** manually.",
            },
            {
              kind: "list",
              items: [
                "You get a `.dmg` file — double-click it",
                "Drag the **Cursor** icon into the Applications folder",
                "If the first launch is blocked, allow it under System Settings → Privacy & Security",
                "Apple Silicon (M-series) and Intel share the same installer",
              ],
            },
            {
              kind: "shot",
              src: "/shots/cursor/site.png",
              caption: "cursor.com — one Download button for every platform",
            },
            {
              kind: "warn",
              text: "Never install from a third-party download site. Cursor auto-updates itself; third-party builds are often stale or modified.",
            },
          ],
        },
        {
          title: "Download and install (Windows)",
          blocks: [
            {
              kind: "text",
              text: "On [cursor.com](https://cursor.com) click **Download** and pick **Windows** to get the `.exe` installer.",
            },
            {
              kind: "list",
              items: [
                "Run the `.exe` and click Next through the wizard",
                "If the blue SmartScreen warning appears, click More info → Run anyway",
                "Launch Cursor from the Start menu afterwards",
              ],
            },
            {
              kind: "warn",
              text: "Keep the default install location on Windows. Installing into a directory that needs administrator rights can break the auto-updater.",
            },
          ],
        },
        {
          title: "First launch: pick a theme and sign in",
          blocks: [
            {
              kind: "text",
              text: "The first launch walks you through a short wizard: pick a theme, pick keybindings (VS Code is the default, so migrating is painless), then sign in.",
            },
            {
              kind: "list",
              items: [
                "**Sign in** — GitHub / Google / email; the free Hobby plan includes a monthly allowance",
                "**Skip** — you can still use it as a plain editor, but every AI feature stays disabled",
              ],
            },
            {
              kind: "text",
              text: "Sign-in happens in the browser and returns to Cursor automatically. Check usage and upgrade under **Customize / Settings → Account**.",
            },
            {
              kind: "note",
              text: "If sign-in fails on a corporate machine it is usually the proxy: Cursor needs HTTPS access to cursor.com and api2.cursor.sh.",
            },
          ],
        },
        {
          title: "Open your project",
          blocks: [
            {
              kind: "text",
              text: "Click **Open Folder** (or drag a folder onto the window). No terminal needed.",
            },
            {
              kind: "list",
              items: [
                "File → Open Folder… and pick the project",
                "Or drag the folder from Finder / Explorer into Cursor",
                "File tree on the left, editor in the middle, AI chat on the right (`Cmd+L` / `Ctrl+L`)",
              ],
            },
            {
              kind: "note",
              text: "The agent panel uses Git for diffs. If Git is missing, install it from git-scm.com and restart Cursor.",
            },
          ],
        },
        {
          title: "Teach it about your project: AGENTS.md or .cursor/rules",
          blocks: [
            {
              kind: "text",
              text: "Cursor reads two kinds of instruction files: **AGENTS.md** in the project root (simplest), and **`.cursor/rules/*.mdc`** (path-scoped, one file per concern). Start with AGENTS.md.",
            },
            {
              kind: "code",
              lang: "text",
              code: "# Project conventions\n- Use pnpm, never npm\n- Commit messages: type(scope): summary\n- Always run pnpm lint and pnpm test after edits\n- Never modify anything under legacy/\n- TypeScript for all new files",
              caption: "Save this as AGENTS.md in the project root and commit it",
            },
            {
              kind: "note",
              text: "You can also type `/create-rule` in the agent input and let it scaffold a rule for you, then edit it.",
            },
          ],
        },
        {
          title: "Core workflow 1: Tab completion + Cmd/Ctrl+K inline edit",
          blocks: [
            {
              kind: "text",
              text: "**Tab completion**: as you type, Cursor predicts your next edit and shows grey text — press **Tab** to accept, Esc to dismiss.",
            },
            {
              kind: "text",
              text: "**Cmd/Ctrl+K**: select some code (or not) and press Cmd+K, describe the change in one line, and it rewrites the block in place, showing you a diff.",
            },
            {
              kind: "shot",
              src: "/shots/cursor/cmd-k.svg",
              caption: "Select code, press Cmd/Ctrl+K, type the instruction, hit enter",
            },
            {
              kind: "code",
              lang: "text",
              code: "Rewrite this with an empty-password check and return 400 instead of 401",
              caption: "Say what the result should be — much better than \"optimise this\"",
            },
          ],
        },
        {
          title: "Core workflow 2: Cmd/Ctrl+L chat + Composer for multi-file edits",
          blocks: [
            {
              kind: "text",
              text: "**Cmd/Ctrl+L** opens the agent panel on the right. Describe the task in plain language; it finds files, edits them and runs commands.",
            },
            {
              kind: "shot",
              src: "/shots/cursor/agent-chat.svg",
              caption: "The agent panel: Plan / Agent toggle at the top, diffs you accept one by one or all at once",
            },
            {
              kind: "text",
              text: "Two modes sit at the top: **Plan** proposes without touching files, **Agent** executes. Use **Cmd/Ctrl+I** (Composer) for changes that span several files.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Make the home hero responsive, add a dark-mode variant, then run pnpm lint",
              caption: "A good prompt: what, how far, and how to verify",
            },
            {
              kind: "note",
              text: "Every change arrives as a diff — **Accept** individually or **Accept all**; when unsure, hit **Review** first.",
            },
          ],
        },
        {
          title: "Connect external tools: MCP and Rules",
          blocks: [
            {
              kind: "list",
              items: [
                "**Customize → MCP** — one-click install Marketplace MCP plugins, or hand-write `.cursor/mcp.json`",
                "**Customize → Rules** — manage project rules and global user rules",
                "**`/create-rule`** — generate a rule straight from the chat",
                "**@** — reference files, folders and docs to pin down the context",
              ],
            },
            {
              kind: "note",
              text: "MCP tools ask for approval before running; the arrow next to a tool name shows the arguments it will pass. Debug MCP issues in the **MCP Logs** output channel.",
            },
          ],
        },
        {
          title: "Keyboard cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`Cmd/Ctrl+K` — inline-edit the selected code",
                "`Cmd/Ctrl+L` — open / focus the agent chat panel",
                "`Cmd/Ctrl+I` — Composer, multi-file edits",
                "`Tab` — accept a completion",
                "`Cmd/Ctrl+Shift+P` — command palette",
                "`Cmd/Ctrl+P` — quick open a file",
                "`Cmd/Ctrl+Shift+F` — search the whole project",
                "`Cmd/Ctrl+Shift+U` — Output panel (switch to MCP Logs)",
                "`Cmd/Ctrl+,` — settings",
              ],
            },
            {
              kind: "note",
              text: "These are the VS Code keybindings, so migrating costs nothing. Rebind with Cmd/Ctrl+K then Cmd/Ctrl+S.",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md (project root)",
          desc: "The simplest instruction file; Cursor reads it every conversation. Root-level applies everywhere, subdirectory files take precedence.",
          code: `# Project conventions
- Use pnpm, never npm
- Commit messages: type(scope): summary
- Always run pnpm lint and pnpm test after edits
- Do not modify anything under legacy/`,
        },
        {
          path: ".cursor/rules/*.mdc",
          desc: "Project rules. The .mdc extension and frontmatter are required, otherwise the file is ignored. alwaysApply: true applies it to every chat; globs scopes it to matching files.",
          code: `---
description: React component standards
globs: src/components/**/*.tsx
alwaysApply: false
---
- Use named exports, not default exports
- Keep components under 200 lines
- Co-locate styles in a module CSS file next to the component`,
        },
        {
          path: ".cursor/mcp.json",
          desc: "Wire up MCP servers. Project-scoped goes in the repo root; global goes to ~/.cursor/mcp.json. See the Cursor docs for the full field list.",
          code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    }
  }
}`,
        },
      ],
      troubles: [
        {
          problem: "macOS says the developer cannot be verified",
          fix: "Do not disable system security. Go to System Settings → Privacy & Security, find the blocked-app notice at the bottom and click Open Anyway.",
        },
        {
          problem: "Browser authorises successfully but Cursor stays logged out",
          fix: "Usually a proxy blocking the local callback. Confirm you are signed in on cursor.com, then click Sign in again; try another network (phone hotspot), or configure an HTTP proxy in Cursor settings.",
        },
        {
          problem: "Tab completion never shows grey text",
          fix: "Check you are signed in and still inside your allowance, and that Cursor Tab is enabled in settings. Very large files and some file types never trigger completions — try a different file.",
        },
        {
          problem: "Chat returns 401 or says you are out of usage",
          fix: "Check usage and subscription under Settings → Account. Exhausted free allowance needs an upgrade (or a cheaper model); a blocking proxy also looks like a connection failure.",
        },
        {
          problem: "On Windows Cursor will not start, or antivirus removes files",
          fix: "Reinstall using the official download and whitelist the install folder in your antivirus. Installing outside the default directory can break auto-updates.",
        },
        {
          problem: "It edited my code and I want it all back",
          fix: "Cursor does not manage version control. Commit before asking for changes, then use `git restore .` or `git checkout -- <file>`. Small commits are the safest habit.",
        },
      ],
      cost: "The free Hobby plan includes a small monthly AI allowance; when it runs out you either wait or upgrade. Pro starts at $20/mo, with Team and Enterprise above it, and some models are billed by usage — check the pricing page on cursor.com. To stretch your allowance: use the default small model for everyday completions and a stronger one only for big edits; exclude huge irrelevant folders from indexing (Cursor supports ignore files — see the docs for the exact name); split long tasks into smaller steps instead of dumping the whole repo into context.",
    },
  },

  /* -------------------------------------------------------- GitHub Copilot */
  copilot: {
    zh: {
      difficulty: "入门（会用 VS Code 即可）",
      os: "Windows 10+ / macOS 12+ / Linux；需要 VS Code（桌面版）与一个 GitHub 账号",
      prereq: [
        {
          label: "GitHub 账号（必需）",
          detail:
            "Copilot 挂在 GitHub 账号下。没有账号先去 github.com 注册，邮箱验证通过即可。",
        },
        {
          label: "订阅或免费额度",
          detail:
            "Copilot 需要订阅才能用：个人 Pro 约 $10/月（以官网为准），学生、教师和符合条件的开源维护者认证后免费；部分账号还有个人免费额度。企业/学校由组织分配 Business / Enterprise 席位。",
        },
        {
          label: "编辑器",
          detail:
            "本教程以 VS Code 为例。Copilot 也支持 Visual Studio、JetBrains 系列、Xcode、Eclipse 等，安装方式类似。",
        },
        {
          label: "Git（建议）",
          detail:
            "用 git --version 检查，2.0 以上即可。Copilot 的代码审查、提交信息生成等功能都依赖 Git 仓库。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 github.com 与 Copilot 的 API 域名。国内直连可能不稳，会出现补全不返回、登录失败；请先准备好可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "确认 VS Code 已装好",
          blocks: [
            {
              kind: "text",
              text: "先确认编辑器在。macOS 打开「终端」、Windows 打开 PowerShell 执行：",
            },
            {
              kind: "code",
              lang: "bash",
              code: "code --version",
              caption: "没装的话去 code.visualstudio.com 下载对应系统版本",
            },
            { kind: "output", text: "1.104.0\n9d1e5b7b1a2c8f0e4d3b6a5c9e8f7d6c5b4a3210\nx64" },
            {
              kind: "note",
              text: "提示 command not found 有两种情况：VS Code 没装；或者装了但没把 code 命令加进 PATH。macOS 可以在 VS Code 里按 Cmd+Shift+P 执行 **Shell Command: Install 'code' command in PATH**。",
            },
          ],
        },
        {
          title: "注册并验证 GitHub 账号",
          blocks: [
            {
              kind: "text",
              text: "打开 [github.com](https://github.com) 注册账号，邮箱验证通过。已经有账号的跳过。",
            },
            {
              kind: "note",
              text: "Copilot 的所有权限都跟着这个 GitHub 账号走，所以**先确认账号能正常登录**，再去开通订阅。",
            },
          ],
        },
        {
          title: "学生 / 教师：先认证，能白嫖就别付钱",
          blocks: [
            {
              kind: "text",
              text: "如果你是学生或教师，先去 [education.github.com](https://education.github.com) 用学校邮箱（或学信网/学生证等证明）提交认证。",
            },
            {
              kind: "list",
              items: [
                "打开 education.github.com，选 **Student** 或 **Teacher**",
                "填学校、学校邮箱、在读证明等材料",
                "审核通常几天内出结果，通过后账号会获得 GitHub Student Developer Pack",
                "认证通过后再去开通 Copilot，就会显示免费（Free for verified students）",
              ],
            },
            {
              kind: "warn",
              text: "不要用别人的学生身份、也不要造假材料。被撤销资格会连带影响整个账号。",
            },
          ],
        },
        {
          title: "在 GitHub 上开通 Copilot",
          blocks: [
            {
              kind: "text",
              text: "打开 [github.com/features/copilot](https://github.com/features/copilot)，登录后点开通，选择适合你的方案（个人 / 学生免费 / 组织席位）。",
            },
            {
              kind: "shot",
              src: "/shots/copilot/site.png",
              caption: "Copilot 主页：从这里进入开通流程，学生认证入口也在这一页",
            },
            {
              kind: "note",
              text: "开通后到 **GitHub → Settings → Copilot** 里能看到订阅状态和用量（Premium requests）。价格与额度以 GitHub 官网为准。",
            },
          ],
        },
        {
          title: "在 VS Code 里安装 GitHub Copilot 扩展",
          blocks: [
            {
              kind: "text",
              text: "打开 VS Code，按 **Ctrl/Cmd+Shift+X** 打开扩展面板（左侧积木图标），搜索 `GitHub Copilot`，点 **Install**。",
            },
            {
              kind: "shot",
              src: "/shots/copilot/extension-marketplace.svg",
              caption: "扩展面板搜 GitHub Copilot，点 Install；同名/相关扩展可一并安装",
            },
            {
              kind: "note",
              text: "VS Code 版 Copilot 由「GitHub Copilot」和「GitHub Copilot Chat」等扩展组成，装主扩展时通常会一起提示安装，按提示全部装上即可。",
            },
            {
              kind: "warn",
              text: "如果同时装了 TabNine、IntelliCode 等补全插件，会出现两套灰字互相打架。建议只留一套，把冲突的插件禁用。",
            },
          ],
        },
        {
          title: "在编辑器里登录 GitHub 账号",
          blocks: [
            {
              kind: "text",
              text: "装完扩展后，左下角（或状态栏）会出现 Copilot 图标。点它 → **Sign in with GitHub**，浏览器会打开授权页，点 **Authorize** 后回到 VS Code 即可。",
            },
            {
              kind: "list",
              items: [
                "图标是「已完成登录」状态说明成功",
                "如果浏览器没自动打开，把 VS Code 弹出的链接复制到浏览器",
                "公司电脑可能要管理员在组织设置里允许 Copilot，否则会显示策略禁用",
              ],
            },
            {
              kind: "note",
              text: "登录完成后**建议重启（Reload）一次窗口**：命令面板（Ctrl/Cmd+Shift+P）搜 Reload Window。",
            },
          ],
        },
        {
          title: "验证是否真的生效",
          blocks: [
            {
              kind: "text",
              text: "新建一个 `.js` 或 `.py` 文件，输入一行注释，回车换行，等 1～2 秒看有没有灰色建议文字。",
            },
            {
              kind: "code",
              lang: "text",
              code: "// 返回两个数的和",
              caption: "在下一行等灰字建议出现；按 Tab 接受",
            },
            {
              kind: "shot",
              src: "/shots/copilot/inline-suggestion.svg",
              caption: "灰色斜体就是 Copilot 的行内建议，按 Tab 才真正写入文件",
            },
              { kind: "output", text: "function add(a, b) {\n  return a + b;\n}" },
          ],
        },
        {
          title: "核心用法：Tab 接受、Alt+] 换建议、Chat 对话",
          blocks: [
            {
              kind: "list",
              items: [
                "**Tab** —— 接受当前建议（灰字变成正式代码）",
                "**Alt+]** —— 切换到下一个候选建议（对结果不满意就多按几次）",
                "**Esc** —— 忽略建议，继续自己写",
                "**Copilot Chat** —— 打开侧边栏对话，选中代码后可以直接问「这段为什么报错」「帮我加单元测试」",
                "**写注释再写函数名** —— 先描述意图，它给的代码命中率高得多",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "给 src/utils/price.ts 的 formatPrice 补单元测试，覆盖 0、负数和小数三种情况，用 vitest",
              caption: "Chat 里描述任务时，把文件、范围、测试框架都写清楚",
            },
            {
              kind: "note",
              text: "Copilot 会联想你打开的文件，但不会自动读整个仓库。想让它更懂项目，见下一步的指令文件。",
            },
          ],
        },
        {
          title: "让 Copilot 遵守项目规范：写自定义指令",
          blocks: [
            {
              kind: "text",
              text: "在项目根目录建 `.github/copilot-instructions.md`，把技术栈和代码规范写进去。它会在每次请求时自动带上，不用反复交代。",
            },
            {
              kind: "code",
              lang: "text",
              code: "# 项目说明\n这是一个用 React + Node.js 的任务管理 Web 应用。\n\n## 技术栈\n- 前端：React + Tailwind CSS\n- 后端：Node.js + Express\n- 数据库：MongoDB\n\n## 代码规范\n- 字符串用单引号，语句结尾加分号\n- React 一律用函数组件\n- 回调统一用箭头函数",
              caption: "存成 .github/copilot-instructions.md 并提交到仓库",
            },
            {
              kind: "note",
              text: "需要按文件类型区分规范时，再放 `.github/instructions/NAME.instructions.md`；Copilot 也识别 `AGENTS.md`。具体字段与优先级以 GitHub 官方文档为准。",
            },
          ],
        },
        {
          title: "常用操作速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Tab` —— 接受补全建议",
                "`Alt+]` —— 下一个建议；`Esc` —— 忽略",
                "`Ctrl/Cmd+Shift+X` —— 打开扩展面板（装/管 Copilot）",
                "`Ctrl/Cmd+Shift+P` —— 命令面板（Reload Window、切换 Copilot 开关）",
                "`Ctrl/Cmd+I` —— 打开 Copilot Chat（不同版本文案可能是 Open Chat）",
                "状态栏 Copilot 图标 —— 查看登录状态、启用/禁用补全",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".github/copilot-instructions.md",
          desc: "仓库级自定义指令，每次请求都会带上。写短句、写可执行的规则，别贴整本风格指南。",
          code: `# Project overview
A task-management web app: React + Node.js, MongoDB for storage.

## Standards
- Use semicolons and single quotes
- Use function components in React
- Use arrow functions for callbacks
- Write tests with vitest for any new business logic`,
        },
        {
          path: ".github/instructions/NAME.instructions.md",
          desc: "按文件类型生效的指令，适合「只有测试文件才需要遵守」那类规则。frontmatter 字段以官方文档为准。",
          code: `---
applyTo: "**/*.test.ts"
---
- Use describe/it blocks, not a single test function
- Mock external services, never the module under test
- One assertion per test where practical`,
        },
        {
          path: "AGENTS.md（项目根目录）",
          desc: "跨工具通用的 agent 指令文件，Copilot 也会识别；如果你同时在用别的编码 agent，用它最省事。",
          code: `# Project conventions
- Package manager: pnpm
- Test command: pnpm test
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "扩展装完了，但完全没有补全建议",
          fix: "大概率是没登录或没有有效订阅。点状态栏 Copilot 图标看状态；确认 GitHub 账号已开通 Copilot（学生要先通过认证）；再确认当前文件语言受支持、文件不是太大。",
        },
        {
          problem: "浏览器里授权了，VS Code 还是提示未登录",
          fix: "先 Reload Window（命令面板搜 Reload Window），再点一次 Sign in。仍不行就退出 GitHub 账号重新登录，或换网络重试（回调被代理拦截很常见）。",
        },
        {
          problem: "灰字建议一闪一闪、或者一次出现好几套",
          fix: "多个补全插件在打架。禁用 TabNine / IntelliCode 等其它补全扩展，只保留一套；再检查设置里 Copilot 的 inline suggestions 是否被关。",
        },
        {
          problem: "学生认证一直不通过",
          fix: "学校邮箱是官方最认的凭证；没有教育邮箱就上传学生证、在读证明等材料，并确保姓名与 GitHub 资料一致。被拒后可以补充材料重新提交。",
        },
        {
          problem: "提示「组织已禁用 Copilot」或策略受限",
          fix: "组织/学校的账号由管理员控制开关。让管理员在组织设置里为你的账号启用 Copilot，或改用个人账号。",
        },
        {
          problem: "提问后它给了明显过时的 API 写法",
          fix: "Copilot 依赖上下文。把相关文档、类型定义或最新示例 @ 进对话，或在 `.github/copilot-instructions.md` 里写清版本号与框架约定。",
        },
      ],
      cost: "Copilot 是订阅制：个人 Pro 约 $10/月（以 GitHub 官网为准），学生、教师和符合条件的开源维护者通过认证后免费；组织有 Business / Enterprise 席位制；部分账号还有个人免费额度。超出套餐的高阶模型请求按 Premium requests 另行计费或限额。省额度：不需要补全的语言（如纯 Markdown）可以在设置里关掉、少开超大文件、把 Chat 的问题问具体一点以减少来回。",
    },
    en: {
      difficulty: "Beginner (VS Code experience is enough)",
      os: "Windows 10+ / macOS 12+ / Linux; needs VS Code (desktop) and a GitHub account",
      prereq: [
        {
          label: "A GitHub account (required)",
          detail:
            "Copilot lives under your GitHub account. Sign up at github.com and verify your email if you do not have one yet.",
        },
        {
          label: "A subscription or free allowance",
          detail:
            "Copilot needs a plan: individual Pro is about $10/mo (see the site for current pricing); students, teachers and qualifying open-source maintainers get it free after verification; some accounts also get a personal free tier. Business / Enterprise seats come from your organisation.",
        },
        {
          label: "An editor",
          detail:
            "This guide uses VS Code. Copilot also runs in Visual Studio, JetBrains IDEs, Xcode and Eclipse, with a similar install flow.",
        },
        {
          label: "Git (recommended)",
          detail:
            "Check with git --version — 2.0+ is fine. Code review and commit-message features rely on a Git repository.",
        },
        {
          label: "Network",
          detail:
            "github.com and the Copilot API must be reachable. On restricted networks completions silently stop and sign-in fails, so sort out your outbound connection first.",
        },
      ],
      steps: [
        {
          title: "Confirm VS Code is installed",
          blocks: [
            {
              kind: "text",
              text: "Check the editor first — Terminal on macOS, PowerShell on Windows:",
            },
            {
              kind: "code",
              lang: "bash",
              code: "code --version",
              caption: "Not installed? Get it from code.visualstudio.com",
            },
            { kind: "output", text: "1.104.0\n9d1e5b7b1a2c8f0e4d3b6a5c9e8f7d6c5b4a3210\nx64" },
            {
              kind: "note",
              text: "`command not found` means either VS Code is missing, or the `code` shim is not on PATH. On macOS run **Shell Command: Install 'code' command in PATH** from the command palette.",
            },
          ],
        },
        {
          title: "Create and verify a GitHub account",
          blocks: [
            {
              kind: "text",
              text: "Sign up at [github.com](https://github.com) and verify your email. Skip this if you already have an account.",
            },
            {
              kind: "note",
              text: "Every Copilot permission follows this GitHub account, so **make sure you can sign in reliably** before subscribing.",
            },
          ],
        },
        {
          title: "Students and teachers: verify first, pay nothing",
          blocks: [
            {
              kind: "text",
              text: "If you are a student or teacher, apply at [education.github.com](https://education.github.com) with your school email or enrolment proof.",
            },
            {
              kind: "list",
              items: [
                "Open education.github.com and choose **Student** or **Teacher**",
                "Provide your school, school email and proof of enrolment",
                "Reviews usually finish within a few days; approved accounts get the Student Developer Pack",
                "Then subscribe to Copilot — it shows as free for verified students",
              ],
            },
            {
              kind: "warn",
              text: "Never borrow someone else's student identity or fake documents — losing verified status affects the whole account.",
            },
          ],
        },
        {
          title: "Subscribe to Copilot on GitHub",
          blocks: [
            {
              kind: "text",
              text: "Open [github.com/features/copilot](https://github.com/features/copilot), sign in and pick the plan that fits (individual / student free / organisation seat).",
            },
            {
              kind: "shot",
              src: "/shots/copilot/site.png",
              caption: "The Copilot landing page — subscription and student verification both start here",
            },
            {
              kind: "note",
              text: "After subscribing, **GitHub → Settings → Copilot** shows plan status and Premium request usage. Prices and limits are set by GitHub — check the official site.",
            },
          ],
        },
        {
          title: "Install the GitHub Copilot extension in VS Code",
          blocks: [
            {
              kind: "text",
              text: "In VS Code press **Ctrl/Cmd+Shift+X** (the blocks icon in the activity bar), search for `GitHub Copilot` and click **Install**.",
            },
            {
              kind: "shot",
              src: "/shots/copilot/extension-marketplace.svg",
              caption: "Search the Extensions view for GitHub Copilot and click Install",
            },
            {
              kind: "note",
              text: "On VS Code, Copilot ships as several extensions (GitHub Copilot, GitHub Copilot Chat, …). The marketplace prompts you to install the related ones — accept them.",
            },
            {
              kind: "warn",
              text: "If TabNine, IntelliCode or another completion engine is installed, the two ghost-text providers fight each other. Keep one and disable the rest.",
            },
          ],
        },
        {
          title: "Sign in with GitHub inside the editor",
          blocks: [
            {
              kind: "text",
              text: "A Copilot icon appears in the status bar. Click it → **Sign in with GitHub**, then click **Authorize** in the browser page that opens.",
            },
            {
              kind: "list",
              items: [
                "A signed-in icon means the login worked",
                "If the browser does not open, copy the link VS Code prints into your browser",
                "On managed machines an admin must enable Copilot for the organisation, otherwise you get a policy error",
              ],
            },
            {
              kind: "note",
              text: "After signing in, **reload the window once**: command palette (Ctrl/Cmd+Shift+P) → Reload Window.",
            },
          ],
        },
        {
          title: "Verify it actually works",
          blocks: [
            {
              kind: "text",
              text: "Create a `.js` or `.py` file, type a comment, press enter and wait a second or two for grey text.",
            },
            {
              kind: "code",
              lang: "text",
              code: "// return the sum of two numbers",
              caption: "Wait for the ghost text on the next line, then press Tab",
            },
            {
              kind: "shot",
              src: "/shots/copilot/inline-suggestion.svg",
              caption: "Grey italic text is Copilot's inline suggestion — nothing hits disk until you press Tab",
            },
            { kind: "output", text: "function add(a, b) {\n  return a + b;\n}" },
          ],
        },
        {
          title: "Core usage: Tab to accept, Alt+] to cycle, Chat to ask",
          blocks: [
            {
              kind: "list",
              items: [
                "**Tab** — accept the suggestion (ghost text becomes real code)",
                "**Alt+]** — cycle to the next suggestion when you dislike the current one",
                "**Esc** — dismiss it and keep typing yourself",
                "**Copilot Chat** — select code and ask why it fails, or request tests",
                "**Write the comment first** — describing intent before the function body sharply improves results",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "Add vitest unit tests for formatPrice in src/utils/price.ts, covering zero, negative and fractional values",
              caption: "In chat, name the file, the scope and the test framework",
            },
            {
              kind: "note",
              text: "Copilot reasons about the files you have open, not your whole repo. Use the instructions file in the next step to give it project-wide context.",
            },
          ],
        },
        {
          title: "Make Copilot follow your conventions: custom instructions",
          blocks: [
            {
              kind: "text",
              text: "Create `.github/copilot-instructions.md` in the repository root with your stack and conventions. It is attached to every request automatically, so you stop repeating yourself.",
            },
            {
              kind: "code",
              lang: "text",
              code: "# Project overview\nA task-management web app built with React + Node.js.\n\n## Stack\n- Front end: React + Tailwind CSS\n- Back end: Node.js + Express\n- Database: MongoDB\n\n## Standards\n- Single quotes, semicolons at the end of statements\n- Function components only\n- Arrow functions for callbacks",
              caption: "Save as .github/copilot-instructions.md and commit it",
            },
            {
              kind: "note",
              text: "For per-file rules add `.github/instructions/NAME.instructions.md`; Copilot also reads `AGENTS.md`. Field names and precedence are defined in the GitHub docs.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`Tab` — accept a suggestion",
                "`Alt+]` — next suggestion; `Esc` — dismiss",
                "`Ctrl/Cmd+Shift+X` — Extensions view (install / manage Copilot)",
                "`Ctrl/Cmd+Shift+P` — command palette (Reload Window, toggle Copilot)",
                "`Ctrl/Cmd+I` — open Copilot Chat (wording varies by version)",
                "Status-bar Copilot icon — sign-in state, enable/disable completions",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".github/copilot-instructions.md",
          desc: "Repository-wide custom instructions, sent with every request. Keep them short and actionable — do not paste a style guide.",
          code: `# Project overview
A task-management web app: React + Node.js, MongoDB for storage.

## Standards
- Use semicolons and single quotes
- Use function components in React
- Use arrow functions for callbacks
- Write tests with vitest for any new business logic`,
        },
        {
          path: ".github/instructions/NAME.instructions.md",
          desc: "Path-scoped instructions for rules that only apply to some files. Check the official docs for the frontmatter fields.",
          code: `---
applyTo: "**/*.test.ts"
---
- Use describe/it blocks, not a single test function
- Mock external services, never the module under test
- One assertion per test where practical`,
        },
        {
          path: "AGENTS.md (project root)",
          desc: "The cross-tool agent instruction file — Copilot reads it too, which is handy if you also run another coding agent.",
          code: `# Project conventions
- Package manager: pnpm
- Test command: pnpm test
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "The extension is installed but no completions ever appear",
          fix: "Usually no sign-in or no active plan. Check the status-bar Copilot icon; confirm the GitHub account has Copilot enabled (students must be verified first); make sure the language is supported and the file is not enormous.",
        },
        {
          problem: "You authorised in the browser but VS Code still says signed out",
          fix: "Reload the window (command palette → Reload Window) and click Sign in again. If it persists, sign out of GitHub and back in, or switch networks — a proxy intercepting the callback is common.",
        },
        {
          problem: "Ghost text flickers, or several suggestions appear at once",
          fix: "Two completion engines are fighting. Disable TabNine / IntelliCode or other completion extensions so only one remains, and check that Copilot inline suggestions are enabled in settings.",
        },
        {
          problem: "Student verification keeps getting rejected",
          fix: "A school email is the strongest proof; otherwise upload a student ID or enrolment letter, and make sure the name matches your GitHub profile. You can resubmit with better documents.",
        },
        {
          problem: "\"Copilot is disabled for your organisation\"",
          fix: "Organisation and school accounts are controlled by admins. Ask an admin to enable Copilot for your account, or use a personal account instead.",
        },
        {
          problem: "It suggests outdated APIs",
          fix: "Copilot depends on context. Reference the relevant docs, type definitions or current examples in the chat, or pin the framework version in `.github/copilot-instructions.md`.",
        },
      ],
      cost: "Copilot is subscription-based: individual Pro is about $10/mo (see the GitHub site), free for verified students, teachers and qualifying open-source maintainers, with Business / Enterprise per-seat plans; some accounts also get a personal free tier. Higher-tier model requests beyond your plan are metered as Premium requests. To save usage: disable completions for file types that do not need them, close huge files, and ask sharper questions in chat so you need fewer round trips.",
    },
  },

  /* ----------------------------------------------------------- Grok Build */
  "grok-build": {
    zh: {
      difficulty: "入门（会用终端基础命令即可）",
      os: "macOS / Linux / Windows；Windows 可用 PowerShell 原生安装，也可以用 Git Bash 或 WSL",
      prereq: [
        {
          label: "账号与订阅（必需）",
          detail:
            "Grok Build 目前是早期 beta，需要 **SuperGrok** 或 **X Premium+** 订阅才能登录使用，暂无免费版。先登录 grok.com 确认订阅已生效，否则装完也进不去。",
        },
        {
          label: "终端",
          detail:
            "macOS 打开「终端」，Windows 打开 **PowerShell**（或 Git Bash）。后面所有命令都在这个窗口里执行。",
        },
        {
          label: "Git（建议）",
          detail:
            "让它帮你改代码、回滚改动会顺手很多。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 x.ai、grok.com 和 xAI 的 API 域名。国内直连不通，请先准备好可访问外网的网络环境，否则第 6 步登录一定失败。",
        },
        {
          label: "安装位置",
          detail:
            "安装脚本会把二进制放进 `~/.grok/bin`（Windows 是用户目录下的 `.grok/bin`），不需要管理员权限，**不要加 sudo**。",
        },
      ],
      steps: [
        {
          title: "打开终端，确认环境",
          blocks: [
            {
              kind: "text",
              text: "macOS 用「启动台 → 终端」，Windows 用「开始菜单 → PowerShell」。先确认 Git 可用。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version",
              caption: "后续让它帮你提交代码时用得到",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)" },
            {
              kind: "note",
              text: "提示符是 `PS C:\\` 说明在 PowerShell；只有 `C:\\` 说明在 CMD，CMD 里跑不了下面的命令，请切到 PowerShell。",
            },
          ],
        },
        {
          title: "安装（macOS / Linux / Git Bash）",
          blocks: [
            {
              kind: "text",
              text: "复制下面这行回车，脚本会自动下载对应平台的二进制并安装到 `~/.grok/bin/grok`。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -fsSL https://x.ai/cli/install.sh | bash",
              caption: "官方安装脚本（macOS / Linux / Git Bash 通用）",
            },
            {
              kind: "output",
              text: "Downloading grok for aarch64-apple-darwin…\nInstalled to ~/.grok/bin/grok\nAdd ~/.grok/bin to your PATH if 'grok' is not found",
            },
            {
              kind: "note",
              text: "安装脚本的提示文案会随版本变化，只要最后 `grok --version` 能打印版本号就说明成功了。需要装指定版本时用 `curl -fsSL https://x.ai/cli/install.sh | bash -s 0.1.42`。",
            },
            {
              kind: "warn",
              text: "不要加 sudo 执行。报 `syntax error near unexpected token '<'` 说明你其实在 PowerShell 里，请改用下一步的命令。",
            },
          ],
        },
        {
          title: "安装（Windows PowerShell）",
          blocks: [
            {
              kind: "text",
              text: "Windows 在 **PowerShell** 里执行下面这行（不需要管理员权限）。",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "irm https://x.ai/cli/install.ps1 | iex",
              caption: "Windows 原生 PowerShell 安装命令",
            },
            {
              kind: "note",
              text: "这个安装器会自动把 `%USERPROFILE%` 下的 `.grok/bin` 加进用户 PATH，装完重开一个 PowerShell 窗口就能直接用 grok。指定版本：先 `$env:GROK_VERSION=\"0.1.42\"` 再执行安装命令。",
            },
            {
              kind: "note",
              text: "也可以用 **Git Bash** 跑上面那条 bash 脚本，或者用 WSL —— WSL 会自动装 Linux 版二进制。",
            },
          ],
        },
        {
          title: "（遇到才做）让终端认识 grok 命令",
          blocks: [
            {
              kind: "text",
              text: "如果第 5 步提示 `command not found`，说明 `~/.grok/bin` 不在 PATH 里。把下面这行加进 shell 配置并立即生效：",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.grok/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS 默认是 zsh；用 bash 的话把 ~/.zshrc 换成 ~/.bashrc",
            },
            { kind: "output", text: "（无输出即可，重开终端后再跑一次 grok --version 验证）" },
          ],
        },
        {
          title: "验证安装是否成功",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "grok --version",
              caption: "能打印版本号就说明装好了",
            },
            { kind: "output", text: "grok 0.1.42" },
            {
              kind: "note",
              text: "想升级到最新版，直接运行 `grok update`，不用重跑安装脚本。",
            },
          ],
        },
        {
          title: "首次启动并登录",
          blocks: [
            {
              kind: "text",
              text: "先 `cd` 进项目目录，再运行 `grok`（不要加 sudo）。第一次启动会出现登录方式选择。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngrok",
              caption: "先进项目目录，再启动 TUI",
            },
            {
              kind: "shot",
              src: "/shots/grok-build/login.svg",
              caption: "首次启动的登录选择：用 grok.com 账号（需订阅），或直接给 XAI_API_KEY",
            },
            {
              kind: "list",
              items: [
                "**Sign in with grok.com** —— 用 SuperGrok / X Premium+ 订阅登录，推荐",
                "**Use XAI_API_KEY** —— 适合 CI/CD、无浏览器环境，事先设置好 XAI_API_KEY 环境变量",
              ],
            },
            {
              kind: "text",
              text: "选第一项会自动打开浏览器，在 grok.com 登录并点击授权，终端自动继续。凭据保存在 `~/.grok/auth.json`，之后会自动续期。",
            },
            {
              kind: "note",
              text: "运行 `export XAI_API_KEY=\"xai-...\"` 再启动 grok，就会跳过浏览器直接走 API Key。",
            },
          ],
        },
        {
          title: "让它读懂你的项目（AGENTS.md）",
          blocks: [
            {
              kind: "text",
              text: "Grok 会从仓库根目录一路向下读到当前工作目录，读取 **AGENTS.md**（同时兼容 `CLAUDE.md`）。越深的文件越靠后加载，冲突时优先级更高。",
            },
            {
              kind: "code",
              lang: "text",
              code: "# 项目约定\n- 包管理器用 pnpm\n- 提交前必须跑 pnpm lint 和 pnpm test\n- 提交信息用中文，格式 type(scope): 说明\n- 不要修改 legacy/ 目录",
              caption: "存成项目根目录的 AGENTS.md，并提交到 Git",
            },
            {
              kind: "note",
              text: "全局规则放 `~/.grok/AGENTS.md`；只想给这一次会话加规则，用 `grok --rules \"...\"`。想确认它到底加载了哪些规则文件，运行 `grok inspect`。",
            },
            {
              kind: "warn",
              text: "项目规则只有在目录被信任后才会自动加载：首次启动会问你，或启动时加 `--trust`。不信任的目录里规则不生效。",
            },
          ],
        },
        {
          title: "核心用法：先让它出方案，再让它动手",
          blocks: [
            {
              kind: "text",
              text: "直接用中文描述需求就行。复杂需求**先切到 Plan 模式**：按 **Shift+Tab** 循环切换 普通 → Plan → Always-approve，或者在输入框里敲 `/plan <需求>` 一步进入。",
            },
            {
              kind: "code",
              lang: "text",
              code: "/plan 给产品列表接口加一层缓存，要求 60 秒过期、写操作时失效",
              caption: "复杂改动的正确打开方式：先要方案，再批准执行",
            },
            {
              kind: "shot",
              src: "/shots/grok-build/plan-mode.svg",
              caption: "计划审批界面：a 批准、s 提修改、c 针对某行评论、y 复制、q 放弃",
            },
            {
              kind: "text",
              text: "Plan 模式下它**只读代码**，唯一能写的文件是会话目录里的 `plan.md`，其它文件的改动会被直接拒绝。看完计划按 `a` 批准后才会进入实现。",
            },
            {
              kind: "note",
              text: "计划批准后想再看一眼，输入 `/view-plan` 重新打开预览。",
            },
          ],
        },
        {
          title: "权限与审批：默认每一步都问你",
          blocks: [
            {
              kind: "text",
              text: "默认情况下，执行 shell 命令和改文件前它都会征求同意，你可以逐条批准，也可以整体放行。",
            },
            {
              kind: "list",
              items: [
                "`Ctrl+O` —— 在会话里切换 always-approve 模式",
                "`/always-approve` —— 同上，用命令切换",
                "`grok --yolo` —— 启动时就自动批准所有工具调用",
              ],
            },
            {
              kind: "warn",
              text: "always-approve 意味着它可以在你机器上随意跑命令和改文件。只在可信的沙箱、容器或一次性环境里打开，别在存着重要未提交改动的机器上全局放行。",
            },
          ],
        },
        {
          title: "常用命令与快捷键速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`grok` —— 在当前目录启动交互式 TUI",
                "`grok \"修复登录测试并跑一遍\"` —— 启动时直接带上第一个任务",
                "`grok -c` —— 继续最近一次会话",
                "`grok --resume <session-id>` —— 恢复指定会话",
                "`grok -p \"问题\"` —— headless 非交互执行，适合脚本 / CI",
                "`grok -p \"...\" --output-format json` —— 结构化输出（可选 `streaming-json`）",
                "`grok -m grok-4.6` —— 指定模型",
                "`grok update` —— 更新到最新版",
                "`grok inspect` —— 查看加载了哪些项目规则文件",
                "`Tab` —— 在输入区和 scrollback 之间切换焦点；`Ctrl+C` —— 取消当前回合",
                "`@` —— 模糊搜索并引用文件，如 `@src/main.rs:10-50`",
                "`/model` `/compact` `/new` —— 换模型 / 压缩上下文 / 开新会话",
              ],
            },
          ],
        },
        {
          title: "进阶：MCP、Skills、Hooks、Headless 与 ACP",
          blocks: [
            {
              kind: "list",
              items: [
                "**MCP** —— 接入 GitHub、数据库等外部工具，配置写在 `~/.grok/config.toml` 或项目的 `.grok/config.toml`",
                "**Skills** —— 把可复用的多步流程打包成技能，放 `.grok/skills/`",
                "**Hooks** —— 在生命周期节点插入自己的脚本（`.grok/hooks/`）",
                "**Headless** —— `grok -p` 配合 `--output-format json` 可以塞进 CI，例如：`grok -p \"审查改动\" --output-format json --yolo | jq -r '.text'`",
                "**ACP** —— 通过 Agent Client Protocol 把它接进支持的编辑器",
              ],
            },
            {
              kind: "shot",
              src: "/shots/grok-build/site.png",
              caption: "官方仓库（github.com/xai-org/grok-build）：安装命令、用户指南、changelog 都在这里",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md（项目根目录）",
          desc: "项目规则主入口。Grok 从仓库根读到当前目录，越深的文件优先级越高；同时兼容 CLAUDE.md。",
          code: `# Build & Test
- Run pnpm test before committing
- Lint with pnpm lint
- Never modify anything under legacy/`,
        },
        {
          path: "~/.grok/config.toml",
          desc: "用户级配置。除了内置规则目录，还可以用 [paths] 把团队规则目录挂进来（路径必须是绝对路径或以 ~/ 开头）。字段以官方文档为准。",
          code: `[paths]
extra_rule_dirs = ["~/team-rules", "/opt/company/grok-rules"]`,
        },
        {
          path: "~/.grok/rules/style.md",
          desc: "全局规则。`~/.grok/rules/` 下的每个 .md 文件都会被加载到所有项目（不扫描子目录）。",
          code: `# 全局规范
- 注释和提交信息用中文
- 不确定的实现细节先读源码再动手
- 不要引入新的第三方依赖，除非我明确同意`,
        },
      ],
      troubles: [
        {
          problem: "运行 grok 提示 command not found",
          fix: "PATH 没生效。确认 `~/.grok/bin` 在 `echo $PATH` 的输出里；没有就按第 4 步写进 shell 配置，然后关掉终端重开。Windows 用户重开一个 PowerShell 窗口即可，安装器已经帮你写好了 PATH。",
        },
        {
          problem: "首次启动浏览器没打开，或授权后终端一直卡住",
          fix: "把终端里打印的链接手动复制到浏览器打开。仍不行就改用 API Key：设置 XAI_API_KEY 环境变量后重启 grok。公司网络常会拦截本地回调。",
        },
        {
          problem: "提示未授权 / 401，或说需要订阅",
          fix: "Grok Build 目前只对 SuperGrok 与 X Premium+ 订阅用户开放。先确认订阅在 grok.com 上是生效状态，再重新登录（可先删除 `~/.grok/auth.json` 再启动）。",
        },
        {
          problem: "Windows PowerShell 里报「禁止运行脚本」",
          fix: "执行策略限制。最省事的办法是改用 **Git Bash** 跑 bash 安装脚本；或者按官方文档以当前用户身份调整 PowerShell 执行策略后重试。不要用管理员权限去改全局策略。",
        },
        {
          problem: "写了 AGENTS.md，但它好像没读",
          fix: "先确认当前目录已被信任（不信任的目录不会自动加载项目规则），再用 `grok inspect` 看它实际加载了哪些文件。文件名必须是受支持的写法（AGENTS.md / CLAUDE.md 等）。",
        },
        {
          problem: "Windows 原生跑起来体验差、经常报错",
          fix: "换成 WSL 或用 Git Bash。WSL 会自动安装 Linux 版二进制，路径和权限模型也更接近它预期的工作环境。",
        },
      ],
      cost: "Grok Build 目前是早期 beta，面向 **SuperGrok** 与 **X Premium+** 订阅用户，没有免费版；额度包含在订阅里，具体价格与限额以 x.ai 官网为准。省额度：用 `/compact` 压缩长会话、把大任务拆成小步、先用 Plan 模式对齐方案再执行，避免它反复探索同一片代码。",
    },
    en: {
      difficulty: "Beginner (basic terminal commands)",
      os: "macOS / Linux / Windows; native PowerShell installer on Windows, Git Bash and WSL also work",
      prereq: [
        {
          label: "Account and subscription (required)",
          detail:
            "Grok Build is in early beta and needs a **SuperGrok** or **X Premium+** subscription — there is no free tier. Sign in on grok.com and confirm your subscription is active first, or the install will be useless.",
        },
        {
          label: "A terminal",
          detail:
            "Terminal on macOS, **PowerShell** (or Git Bash) on Windows. Every command below runs there.",
        },
        {
          label: "Git (recommended)",
          detail:
            "Makes editing and rolling back much smoother. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Network",
          detail:
            "x.ai, grok.com and the xAI API endpoints must be reachable. On a blocked network step 6 will never complete.",
        },
        {
          label: "Install location",
          detail:
            "The installer drops the binary into `~/.grok/bin` (a `.grok/bin` folder in your home directory on Windows). No admin rights needed — **never run it with sudo**.",
        },
      ],
      steps: [
        {
          title: "Open a terminal and check the basics",
          blocks: [
            {
              kind: "text",
              text: "Use Terminal on macOS and PowerShell on Windows. Confirm Git is available first.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version",
              caption: "You will want it when Grok starts committing code",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)" },
            {
              kind: "note",
              text: "A prompt starting with `PS C:\\` is PowerShell; a bare `C:\\` means CMD, where the commands below will not work. Switch to PowerShell.",
            },
          ],
        },
        {
          title: "Install (macOS / Linux / Git Bash)",
          blocks: [
            {
              kind: "text",
              text: "Paste this and press enter. The script downloads the right binary and installs it as `~/.grok/bin/grok`.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -fsSL https://x.ai/cli/install.sh | bash",
              caption: "Official installer (macOS / Linux / Git Bash)",
            },
            {
              kind: "output",
              text: "Downloading grok for aarch64-apple-darwin…\nInstalled to ~/.grok/bin/grok\nAdd ~/.grok/bin to your PATH if 'grok' is not found",
            },
            {
              kind: "note",
              text: "The exact wording changes between releases — if `grok --version` prints a version afterwards you are good. To pin a version: `curl -fsSL https://x.ai/cli/install.sh | bash -s 0.1.42`.",
            },
            {
              kind: "warn",
              text: "Never run this with sudo. A `syntax error near unexpected token '<'` means you are actually in PowerShell — use the Windows command instead.",
            },
          ],
        },
        {
          title: "Install (Windows PowerShell)",
          blocks: [
            {
              kind: "text",
              text: "In **PowerShell** (no admin rights needed):",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "irm https://x.ai/cli/install.ps1 | iex",
              caption: "Native Windows PowerShell installer",
            },
            {
              kind: "note",
              text: "This installer adds the `.grok/bin` folder under `%USERPROFILE%` to your user PATH automatically, so a freshly opened PowerShell window can run grok immediately. To pin a version, set `$env:GROK_VERSION=\"0.1.42\"` first.",
            },
            {
              kind: "note",
              text: "You can also run the bash script from **Git Bash**, or use WSL — inside WSL the Linux binary is installed automatically.",
            },
          ],
        },
        {
          title: "Only if needed: put grok on your PATH",
          blocks: [
            {
              kind: "text",
              text: "If step 5 says `command not found`, `~/.grok/bin` is not on your PATH. Add it and reload your shell:",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.grok/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS defaults to zsh; use ~/.bashrc if you run bash",
            },
            { kind: "output", text: "(no output — reopen the terminal and re-run grok --version)" },
          ],
        },
        {
          title: "Verify the installation",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "grok --version",
              caption: "A version number means success",
            },
            { kind: "output", text: "grok 0.1.42" },
            {
              kind: "note",
              text: "Update later with `grok update` — no need to re-run the installer.",
            },
          ],
        },
        {
          title: "First launch and login",
          blocks: [
            {
              kind: "text",
              text: "`cd` into your project, then run `grok` (no sudo). The first launch asks how to authenticate.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngrok",
              caption: "Enter the project directory first, then start the TUI",
            },
            {
              kind: "shot",
              src: "/shots/grok-build/login.svg",
              caption: "Login options: grok.com account (subscription required) or an XAI_API_KEY",
            },
            {
              kind: "list",
              items: [
                "**Sign in with grok.com** — use your SuperGrok / X Premium+ plan (recommended)",
                "**Use XAI_API_KEY** — for CI/CD and browserless machines; export the variable beforehand",
              ],
            },
            {
              kind: "text",
              text: "The first option opens your browser: sign in on grok.com, click authorize, and the terminal continues on its own. Credentials are stored in `~/.grok/auth.json` and refreshed automatically.",
            },
            {
              kind: "note",
              text: "Run `export XAI_API_KEY=\"xai-...\"` before starting grok to skip the browser entirely.",
            },
          ],
        },
        {
          title: "Teach it about your project (AGENTS.md)",
          blocks: [
            {
              kind: "text",
              text: "Grok reads **AGENTS.md** (and also `CLAUDE.md`) from the repo root down to your current working directory. Deeper files load later and win when instructions conflict.",
            },
            {
              kind: "code",
              lang: "text",
              code: "# Project conventions\n- Use pnpm, never npm\n- Always run pnpm lint and pnpm test before committing\n- Commit messages: type(scope): summary\n- Never modify anything under legacy/",
              caption: "Save this as AGENTS.md in the repo root and commit it",
            },
            {
              kind: "note",
              text: "Global rules live in `~/.grok/AGENTS.md`. For a one-off session rule use `grok --rules \"...\"`. To see exactly which rule files were loaded, run `grok inspect`.",
            },
            {
              kind: "warn",
              text: "Project rules only load for trusted folders: grok asks on first launch, or start with `--trust`. In an untrusted directory the rules are silently skipped.",
            },
          ],
        },
        {
          title: "Core workflow: plan first, then let it build",
          blocks: [
            {
              kind: "text",
              text: "Describe the task in plain language. For anything ambiguous, enter **Plan mode**: press **Shift+Tab** to cycle Normal → Plan → Always-approve, or type `/plan <task>` in the prompt.",
            },
            {
              kind: "code",
              lang: "text",
              code: "/plan add a 60-second cache in front of the products endpoint, invalidated on writes",
              caption: "The right way to start a non-trivial change: agree on the plan first",
            },
            {
              kind: "shot",
              src: "/shots/grok-build/plan-mode.svg",
              caption: "Plan approval: a approves, s requests changes, c comments, y copies, q abandons",
            },
            {
              kind: "text",
              text: "Plan mode is **read-only** apart from `plan.md` inside the session directory — edits to any other file are rejected outright. Approve with `a` and only then does it implement.",
            },
            {
              kind: "note",
              text: "Reopen a saved plan later with `/view-plan`.",
            },
          ],
        },
        {
          title: "Permissions: it asks before every command by default",
          blocks: [
            {
              kind: "text",
              text: "By default grok asks before running shell commands or editing files. You approve one at a time, or switch the whole session to always-approve.",
            },
            {
              kind: "list",
              items: [
                "`Ctrl+O` — toggle always-approve inside the session",
                "`/always-approve` — same thing as a command",
                "`grok --yolo` — auto-approve every tool call from launch",
              ],
            },
            {
              kind: "warn",
              text: "Always-approve lets it run arbitrary commands and edit any file on your machine. Only enable it in a sandbox, container or disposable environment — not on a laptop holding uncommitted work you care about.",
            },
          ],
        },
        {
          title: "Command and shortcut cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`grok` — start the interactive TUI here",
                "`grok \"fix the auth test and run it\"` — start with an initial task",
                "`grok -c` — continue the most recent session",
                "`grok --resume <session-id>` — resume a specific session",
                "`grok -p \"question\"` — non-interactive headless run for scripts / CI",
                "`grok -p \"...\" --output-format json` — structured output (or `streaming-json`)",
                "`grok -m grok-4.6` — pick a model",
                "`grok update` — update to the latest version",
                "`grok inspect` — list the project rule files it loaded",
                "`Tab` — move focus between prompt and scrollback; `Ctrl+C` cancels a turn",
                "`@` — fuzzy-match and attach files, e.g. `@src/main.rs:10-50`",
                "`/model` `/compact` `/new` — switch model / compress context / new session",
              ],
            },
          ],
        },
        {
          title: "Beyond the basics: MCP, skills, hooks, headless, ACP",
          blocks: [
            {
              kind: "list",
              items: [
                "**MCP** — connect GitHub, databases and more via `~/.grok/config.toml` or the project's `.grok/config.toml`",
                "**Skills** — package repeatable multi-step procedures under `.grok/skills/`",
                "**Hooks** — run your own scripts at lifecycle events (`.grok/hooks/`)",
                "**Headless** — `grok -p` plus `--output-format json` drops into CI, e.g. `grok -p \"review the diff\" --output-format json --yolo | jq -r '.text'`",
                "**ACP** — embed grok in editors that speak the Agent Client Protocol",
              ],
            },
            {
              kind: "shot",
              src: "/shots/grok-build/site.png",
              caption: "The official repository (github.com/xai-org/grok-build): installer, user guide and changelog",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md (project root)",
          desc: "The main project-rule entry point. Grok reads from the repo root down to the cwd, deeper files winning; CLAUDE.md is supported too.",
          code: `# Build & Test
- Run pnpm test before committing
- Lint with pnpm lint
- Never modify anything under legacy/`,
        },
        {
          path: "~/.grok/config.toml",
          desc: "User-level config. Besides the built-in rules directories you can mount shared team rule folders via [paths]. Entries must be absolute or start with ~/. See the official docs for the full reference.",
          code: `[paths]
extra_rule_dirs = ["~/team-rules", "/opt/company/grok-rules"]`,
        },
        {
          path: "~/.grok/rules/style.md",
          desc: "Global rules. Every .md file under `~/.grok/rules/` loads for all projects (subdirectories are not scanned).",
          code: `# Global conventions
- Write comments and commit messages in English
- Read the source before proposing changes when unsure
- Do not add new dependencies without asking first`,
        },
      ],
      troubles: [
        {
          problem: "grok: command not found",
          fix: "PATH problem. Check that `~/.grok/bin` appears in `echo $PATH`; if not, apply step 4 and reopen the terminal. On Windows just open a new PowerShell window — the installer already wrote the PATH entry.",
        },
        {
          problem: "The browser never opened, or the terminal hangs after authorising",
          fix: "Copy the link printed in the terminal into your browser manually. If that fails, switch to API-key auth by exporting XAI_API_KEY and restarting grok. Corporate proxies often block the local callback.",
        },
        {
          problem: "Unauthorized / 401, or a message about needing a subscription",
          fix: "Grok Build is currently limited to SuperGrok and X Premium+ subscribers. Confirm the subscription is active on grok.com, then sign in again (delete `~/.grok/auth.json` first if needed).",
        },
        {
          problem: "PowerShell refuses to run the script (execution policy)",
          fix: "Simplest fix: run the bash installer from **Git Bash** instead. Otherwise adjust the PowerShell execution policy for the current user as described in the official docs — do not change machine-wide policy with admin rights.",
        },
        {
          problem: "You wrote AGENTS.md but it seems to be ignored",
          fix: "Check the folder is trusted — untrusted directories skip project rules — then run `grok inspect` to see which files it actually loaded. The filename must be one of the recognised spellings (AGENTS.md, CLAUDE.md, …).",
        },
        {
          problem: "Native Windows runs poorly and errors often",
          fix: "Move to WSL or Git Bash. WSL installs the Linux binary automatically and matches the paths and permission model grok expects.",
        },
      ],
      cost: "Grok Build is an early beta for **SuperGrok** and **X Premium+** subscribers — there is no free tier. Usage is included in the subscription; prices and limits are set by xAI, so check x.ai. To stretch it: `/compact` long sessions, split big tasks into smaller steps, and use Plan mode to agree on an approach before it starts exploring the same code repeatedly.",
    },
  },

  /* --------------------------------------------------------------- Codex CLI */
  codex: {
    zh: {
      difficulty: "入门（会用终端基础命令即可）",
      os: "macOS / Linux / Windows（Windows 原生 PowerShell 支持，也推荐 WSL）；另有 IDE 扩展与桌面版",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "ChatGPT **Plus / Pro / Business / Edu / Enterprise** 订阅之一，或 OpenAI API Key。免费版 ChatGPT 不含 Codex 额度，别装完才发现登录进去没额度。",
        },
        {
          label: "终端",
          detail:
            "macOS 打开「终端」，Windows 打开 PowerShell（WSL 也行）。所有命令都在这里执行。",
        },
        {
          label: "Node.js（可选）",
          detail:
            "只有走 `npm install -g @openai/codex` 才需要 Node，官方脚本和 Homebrew 都不需要。npm 方式请先 `node -v` 确认版本够新，版本过低会报 EBADENGINE。",
        },
        {
          label: "Git（建议）",
          detail:
            "官方建议在任务前后打 Git checkpoint，改坏了能一键回退。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 chatgpt.com 与 OpenAI 的 API 域名。国内直连不通，请先准备好可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "打开终端，确认环境",
          blocks: [
            {
              kind: "text",
              text: "先确认 Git 可用；如果你打算用 npm 方式安装，也顺手看一眼 Node 版本。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version\nnode -v",
              caption: "Node 只有 npm 安装方式才需要",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)\nv20.19.5" },
            {
              kind: "note",
              text: "没装 Git 去 git-scm.com；没装 Node 去 nodejs.org 装 LTS，或用 nvm 管理。",
            },
          ],
        },
        {
          title: "安装（macOS / Linux / WSL）",
          blocks: [
            {
              kind: "text",
              text: "官方推荐用独立安装脚本，不依赖 Node 环境。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
              caption: "官方安装脚本，同一个命令也可以用来更新",
            },
            {
              kind: "output",
              text: "Installing Codex…\nCodex installed.\nRun 'codex' to get started",
            },
            {
              kind: "warn",
              text: "不要加 sudo 执行。前面出现 `syntax error near unexpected token '<'` 说明你在 PowerShell 里，请改用下一步的命令。",
            },
          ],
        },
        {
          title: "安装（Windows 与其它方式）",
          blocks: [
            {
              kind: "text",
              text: "Windows 在 **PowerShell** 里执行下面这行（不需要管理员权限）。",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "irm https://chatgpt.com/codex/install.ps1 | iex",
              caption: "Windows PowerShell 安装命令",
            },
            {
              kind: "note",
              text: "也可以走包管理器：`npm install -g @openai/codex`，macOS 还可以 `brew install --cask codex`。注意 Homebrew 和 npm 方式**不会自动更新**，需要手动升级。",
            },
            {
              kind: "note",
              text: "想更新现有安装，重跑一次安装脚本即可：`curl -fsSL https://chatgpt.com/codex/install.sh | sh`。",
            },
          ],
        },
        {
          title: "（遇到才做）让终端认识 codex 命令",
          blocks: [
            {
              kind: "text",
              text: "如果下一步提示 `command not found`，把安装脚本打印出来的目录加进 PATH（官方脚本通常装在用户目录下的 bin 目录里）。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS 默认 zsh；用 bash 就改 ~/.bashrc。npm 方式请用 npm config get prefix 查看全局目录",
            },
            { kind: "output", text: "（无输出即可，关掉终端重开后重新验证）" },
          ],
        },
        {
          title: "验证安装是否成功",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "codex --version",
              caption: "能打印版本号就说明装好了",
            },
            { kind: "output", text: "codex-cli 0.51.0" },
            {
              kind: "note",
              text: "报 `command not found` 就回到上一步处理 PATH；npm 方式报 EBADENGINE 说明 Node 版本太低，升级 Node 或改用官方脚本。",
            },
          ],
        },
        {
          title: "首次启动并登录",
          blocks: [
            {
              kind: "text",
              text: "先 `cd` 进项目目录，再运行 `codex`。第一次启动会让你选登录方式。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncodex",
              caption: "先进项目目录，再启动 Codex",
            },
            {
              kind: "shot",
              src: "/shots/codex/login.svg",
              caption: "登录选择：用 ChatGPT 订阅，或改用 API Key 按量付费",
            },
            {
              kind: "list",
              items: [
                "**Sign in with ChatGPT** —— 用 Plus / Pro / Business / Edu / Enterprise 订阅额度，推荐，不用单独买 API",
                "**Use an API key** —— 在 platform.openai.com 生成 Key，按 token 计费",
              ],
            },
            {
              kind: "text",
              text: "选第一项会打开浏览器，登录 ChatGPT 并点击授权，终端自动完成登录。凭据持久保存，之后不用重复授权。",
            },
            {
              kind: "note",
              text: "启动后输入框提示里会列出可用命令，例如 `/init`、`/status`、`/permissions`、`/model`、`/review`，按 `?` 可以看到快捷键。",
            },
          ],
        },
        {
          title: "让它读懂你的项目（/init 生成 AGENTS.md）",
          blocks: [
            {
              kind: "text",
              text: "进入会话先输入 `/init`，它会扫描项目并生成一份 `AGENTS.md`，把构建、测试命令和代码规范写进去。之后每次会话都会先读这份文件。",
            },
            { kind: "code", lang: "text", code: "/init", caption: "在 Codex 会话里输入，注意是斜杠命令" },
            {
              kind: "note",
              text: "生成后打开 `AGENTS.md` 手工补几条你自己的规矩（比如「提交信息用中文」「不要动 legacy 目录」），然后提交到 Git。",
            },
          ],
        },
        {
          title: "权限与审批：先决定它能做什么",
          blocks: [
            {
              kind: "text",
              text: "Codex 默认会在执行命令、改文件前询问。用 `/permissions` 选择权限档位，也可以在配置文件里写死。",
            },
            {
              kind: "shot",
              src: "/shots/codex/approvals.svg",
              caption: "/permissions 里的三档：只读、工作区内可写、完全放行",
            },
            {
              kind: "list",
              items: [
                "`:read-only` —— 只能读文件，任何命令和改动都要先问你，探索陌生仓库时用它",
                "`:workspace` —— 可以在工作区内改文件、跑命令，网络默认仍受限",
                "`:danger-full-access` —— 无沙箱无审批，只建议在一次性容器里用",
              ],
            },
            {
              kind: "warn",
              text: "别一上来就开 `:danger-full-access` 或配置 `approval_policy = \"never\"`。默认要审批是有意义的，它会执行任意 shell 命令。",
            },
          ],
        },
        {
          title: "核心用法：描述需求，让它改、让它查",
          blocks: [
            {
              kind: "text",
              text: "直接用中文描述任务即可，越具体越好。先用一句「这个项目是做什么的」让它熟悉仓库，再提具体需求。",
            },
            {
              kind: "code",
              lang: "text",
              code: "把 src/auth/login.ts 里空密码没校验的问题修掉，补一个单元测试，然后跑 npm test",
              caption: "说清改哪里、期望结果、怎么验收",
            },
            {
              kind: "list",
              items: [
                "`/model` —— 切换模型和推理强度（reasoning effort）",
                "`/review` —— 让它对未提交改动或某个分支做代码审查，只报告问题、不动你的工作区",
                "`/status` —— 查看当前会话配置（模型、目录等）",
                "`codex resume` —— 回到之前的会话继续",
                "`codex --search` —— 需要最新外部信息时打开联网搜索",
              ],
            },
            {
              kind: "note",
              text: "改之前建议先 `git commit` 一次。官方也推荐在任务前后打 Git checkpoint，出问题直接回退。",
            },
          ],
        },
        {
          title: "其它形态：桌面版、IDE 扩展、云端、脚本",
          blocks: [
            {
              kind: "list",
              items: [
                "`codex app` —— 打开桌面版应用，图形界面里用同一个账号和额度",
                "**IDE 扩展** —— 在 VS Code / Cursor 里装 Codex 扩展，在编辑器内用",
                "**云端版** —— 打开 chatgpt.com/codex，也可以从终端用 `codex cloud` 把任务派到云端",
                "`codex exec` —— 非交互执行，适合脚本和 CI",
                "`codex mcp` —— 管理 MCP 外部工具",
                "`codex --image` —— 把报错截图、设计稿当上下文传进去",
              ],
            },
            {
              kind: "shot",
              src: "/shots/codex/site.png",
              caption: "官方文档（developers.openai.com/codex）：CLI、IDE、桌面、云端四种形态都在这里",
            },
          ],
        },
        {
          title: "常用命令速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`codex` —— 在当前目录启动交互会话",
                "`cd 项目 && codex \"修复登录报错\"` —— 带着任务直接启动",
                "`codex resume` —— 恢复历史会话",
                "`codex exec \"跑测试并修掉报错\"` —— 非交互执行",
                "`/init` —— 生成 AGENTS.md",
                "`/permissions` —— 选择权限档位",
                "`/model` —— 切换模型与推理强度",
                "`/review` —— 审查改动",
                "`/status` —— 查看当前会话配置",
                "`codex completion` —— 给 shell 生成命令补全",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "~/.codex/config.toml",
          desc: "用户级配置：默认模型、审批策略、沙箱级别、MCP 服务器等。字段以官方文档为准。",
          code: `model = "gpt-5.6"
approval_policy = "on-request"
sandbox_mode = "workspace-write"
model_reasoning_effort = "high"`,
        },
        {
          path: ".codex/config.toml（项目根目录）",
          desc: "项目级覆盖，优先级高于用户级配置。出于安全考虑，项目级 .codex/ 只有在项目被标记为受信任时才会加载。",
          code: `web_search = "cached"
model_reasoning_effort = "medium"`,
        },
        {
          path: "AGENTS.md（项目根目录）",
          desc: "项目指令文件，`/init` 会自动生成一份草稿。把它提交到 Git，团队共用同一套约定。",
          code: `# Project conventions
- Use pnpm
- Test command: pnpm test
- Lint before committing: pnpm lint
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "codex: command not found",
          fix: "PATH 没生效。找到安装脚本提示的目录（npm 方式用 `npm config get prefix` 查），把它的 bin 目录加进 PATH，然后重开终端。",
        },
        {
          problem: "浏览器授权完终端还是卡在登录",
          fix: "企业网络常拦截本地回调。先在浏览器确认已登录 ChatGPT，再重试一次；仍不行就换网络，或改用 API Key 方式登录。",
        },
        {
          problem: "npm 安装报 EBADENGINE 或 EACCES",
          fix: "EBADENGINE 是 Node 版本太低，升级 Node 或改用官方安装脚本。EACCES 千万不要加 sudo，改用 nvm 管理 Node 或修正 npm 全局目录权限。",
        },
        {
          problem: "登录后提示没有额度 / 401",
          fix: "确认你用的是 Plus / Pro / Business / Edu / Enterprise 订阅账号——免费版 ChatGPT 不含 Codex 额度；或者改用 API Key 按量付费。",
        },
        {
          problem: "Windows 原生运行时报沙箱相关错误",
          fix: "在配置文件的 [windows] 段里把沙箱设为 elevated（`sandbox = \"elevated\"`）；没有管理员权限再退回 unelevated。更省心的做法是直接用 WSL。",
        },
        {
          problem: "项目里的 .codex/config.toml 好像没生效",
          fix: "项目级配置只在你信任该项目时加载。先在同一目录下运行一次正常会话并确认信任，再检查文件语法；不确定的就改到用户级 `~/.codex/config.toml`。",
        },
      ],
      cost: "Codex 的额度包含在 ChatGPT Plus / Pro / Business / Edu / Enterprise 订阅里（按时间窗口重置），也可以改用 OpenAI API Key 按 token 计费，或用 Codex cloud。具体价格与限额以 OpenAI 官网为准。省额度：把探索类问题合并成一次提问、用 `/compact` 类似的收敛方式控制上下文、小改动别开最高推理强度、把一次性任务交给 `codex exec` 而不是长会话。",
    },
    en: {
      difficulty: "Beginner (basic terminal commands)",
      os: "macOS / Linux / Windows (native PowerShell supported, WSL recommended); IDE extension and desktop app also exist",
      prereq: [
        {
          label: "Account (required)",
          detail:
            "A ChatGPT **Plus / Pro / Business / Edu / Enterprise** plan, or an OpenAI API key. The free ChatGPT tier does not include Codex usage — check before installing.",
        },
        {
          label: "A terminal",
          detail: "Terminal on macOS, PowerShell (or WSL) on Windows. Every command runs there.",
        },
        {
          label: "Node.js (optional)",
          detail:
            "Only needed for `npm install -g @openai/codex`. The official script and Homebrew do not need Node. For npm, check `node -v` first — an old Node fails with EBADENGINE.",
        },
        {
          label: "Git (recommended)",
          detail:
            "The docs recommend Git checkpoints before and after a task so you can revert instantly. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Network",
          detail:
            "chatgpt.com and the OpenAI API must be reachable. On a blocked network the sign-in step will never complete.",
        },
      ],
      steps: [
        {
          title: "Open a terminal and check the basics",
          blocks: [
            {
              kind: "text",
              text: "Confirm Git is available, and check your Node version if you plan to install through npm.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version\nnode -v",
              caption: "Node is only required for the npm install path",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)\nv20.19.5" },
            {
              kind: "note",
              text: "No Git? Get it from git-scm.com. No Node? Install the LTS build from nodejs.org, or use nvm.",
            },
          ],
        },
        {
          title: "Install (macOS / Linux / WSL)",
          blocks: [
            {
              kind: "text",
              text: "The standalone installer is the recommended route — it needs no Node runtime.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
              caption: "Official installer; the same command updates an existing install",
            },
            {
              kind: "output",
              text: "Installing Codex…\nCodex installed.\nRun 'codex' to get started",
            },
            {
              kind: "warn",
              text: "Never run this with sudo. If you see `syntax error near unexpected token '<'` you are in PowerShell — use the Windows command instead.",
            },
          ],
        },
        {
          title: "Install (Windows and alternatives)",
          blocks: [
            {
              kind: "text",
              text: "In **PowerShell** on Windows (no admin rights needed):",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "irm https://chatgpt.com/codex/install.ps1 | iex",
              caption: "Windows PowerShell installer",
            },
            {
              kind: "note",
              text: "Package managers work too: `npm install -g @openai/codex`, or `brew install --cask codex` on macOS. Note that Homebrew and npm installs do **not** auto-update.",
            },
            {
              kind: "note",
              text: "To update an existing install, just re-run the installer: `curl -fsSL https://chatgpt.com/codex/install.sh | sh`.",
            },
          ],
        },
        {
          title: "Only if needed: put codex on your PATH",
          blocks: [
            {
              kind: "text",
              text: "If the next step says `command not found`, add the directory the installer printed (official installs usually land in a bin directory under your home folder).",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS defaults to zsh; use ~/.bashrc for bash. For npm installs, find it with npm config get prefix",
            },
            { kind: "output", text: "(no output — reopen the terminal and verify again)" },
          ],
        },
        {
          title: "Verify the installation",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "codex --version",
              caption: "A version number means you're good",
            },
            { kind: "output", text: "codex-cli 0.51.0" },
            {
              kind: "note",
              text: "`command not found` means the PATH step above is still pending. EBADENGINE on an npm install means Node is too old — upgrade Node or use the official script.",
            },
          ],
        },
        {
          title: "First launch and login",
          blocks: [
            {
              kind: "text",
              text: "`cd` into your project and run `codex`. The first launch asks how to sign in.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ncodex",
              caption: "Enter the project first, then start Codex",
            },
            {
              kind: "shot",
              src: "/shots/codex/login.svg",
              caption: "Sign-in options: your ChatGPT plan, or a pay-as-you-go API key",
            },
            {
              kind: "list",
              items: [
                "**Sign in with ChatGPT** — use your Plus / Pro / Business / Edu / Enterprise quota (recommended, no separate API bill)",
                "**Use an API key** — create one at platform.openai.com and pay per token",
              ],
            },
            {
              kind: "text",
              text: "The first option opens your browser; sign in and authorise, and the terminal finishes on its own. The credential persists between sessions.",
            },
            {
              kind: "note",
              text: "Once running, the prompt hints at the available commands: `/init`, `/status`, `/permissions`, `/model`, `/review`. Press `?` for shortcuts.",
            },
          ],
        },
        {
          title: "Teach it about your project (/init → AGENTS.md)",
          blocks: [
            {
              kind: "text",
              text: "Inside the session, type `/init`. It scans the project and writes an `AGENTS.md` with build and test commands plus conventions, which it re-reads every session.",
            },
            { kind: "code", lang: "text", code: "/init", caption: "A slash command — type it inside the Codex session" },
            {
              kind: "note",
              text: "Open the generated file, add your own rules (\"commit messages in English\", \"never touch legacy/\") and commit it to Git.",
            },
          ],
        },
        {
          title: "Permissions: decide what it may do",
          blocks: [
            {
              kind: "text",
              text: "By default Codex asks before running commands or editing files. Choose a profile with `/permissions`, or pin one in the config file.",
            },
            {
              kind: "shot",
              src: "/shots/codex/approvals.svg",
              caption: "/permissions offers three levels: read-only, workspace write, full access",
            },
            {
              kind: "list",
              items: [
                "`:read-only` — reads files, asks before every command and edit; best for exploring an unfamiliar repo",
                "`:workspace` — may edit files in the workspace and run commands; network stays gated",
                "`:danger-full-access` — no sandbox, no approvals; only inside a disposable container",
              ],
            },
            {
              kind: "warn",
              text: "Do not start with `:danger-full-access` or `approval_policy = \"never\"`. It runs arbitrary shell commands, so the default approval flow exists for a reason.",
            },
          ],
        },
        {
          title: "Core workflow: describe the task and let it work",
          blocks: [
            {
              kind: "text",
              text: "Describe the task in plain language — the more specific the better. Start with \"tell me about this project\" so it orients itself, then ask for the change.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Fix the missing empty-password check in src/auth/login.ts, add a unit test, then run npm test",
              caption: "Where + what + how to verify",
            },
            {
              kind: "list",
              items: [
                "`/model` — switch model and reasoning effort",
                "`/review` — review uncommitted changes or a branch without touching your working tree",
                "`/status` — show the current session configuration",
                "`codex resume` — return to an earlier chat",
                "`codex --search` — turn on live web search when the task needs current information",
              ],
            },
            {
              kind: "note",
              text: "Commit before you let it edit. The docs also recommend Git checkpoints before and after a task so reverting is trivial.",
            },
          ],
        },
        {
          title: "Other surfaces: desktop, IDE extension, cloud, scripts",
          blocks: [
            {
              kind: "list",
              items: [
                "`codex app` — launch the desktop app, same account and quota",
                "**IDE extension** — install Codex in VS Code / Cursor and work inside the editor",
                "**Cloud** — open chatgpt.com/codex, or hand a task to the cloud from the terminal with `codex cloud`",
                "`codex exec` — non-interactive runs for scripts and CI",
                "`codex mcp` — manage MCP tools",
                "`codex --image` — attach a screenshot or design mock as context",
              ],
            },
            {
              kind: "shot",
              src: "/shots/codex/site.png",
              caption: "Official docs (developers.openai.com/codex): CLI, IDE, desktop and cloud",
            },
          ],
        },
        {
          title: "Command cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`codex` — start an interactive session here",
                "`cd project && codex \"fix the login error\"` — start with a task",
                "`codex resume` — resume a saved chat",
                "`codex exec \"run the tests and fix failures\"` — non-interactive run",
                "`/init` — generate AGENTS.md",
                "`/permissions` — choose a permission profile",
                "`/model` — switch model and reasoning effort",
                "`/review` — review your changes",
                "`/status` — show session configuration",
                "`codex completion` — generate shell completions",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "~/.codex/config.toml",
          desc: "User-level config: default model, approval policy, sandbox level, MCP servers. See the official docs for every field.",
          code: `model = "gpt-5.6"
approval_policy = "on-request"
sandbox_mode = "workspace-write"
model_reasoning_effort = "high"`,
        },
        {
          path: ".codex/config.toml (project root)",
          desc: "Project overrides, which take precedence over user config. For safety, project-scoped .codex/ layers load only when the project is trusted.",
          code: `web_search = "cached"
model_reasoning_effort = "medium"`,
        },
        {
          path: "AGENTS.md (project root)",
          desc: "Project instructions; `/init` scaffolds a draft. Commit it so the whole team shares the same conventions.",
          code: `# Project conventions
- Use pnpm
- Test command: pnpm test
- Lint before committing: pnpm lint
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "codex: command not found",
          fix: "PATH issue. Find the directory the installer printed (for npm, `npm config get prefix`), add its bin directory to PATH and reopen the terminal.",
        },
        {
          problem: "The browser authorises but the terminal stays stuck at login",
          fix: "Corporate proxies often block the local callback. Confirm you are signed in to ChatGPT in the browser, retry once, then try another network or switch to API-key auth.",
        },
        {
          problem: "npm install fails with EBADENGINE or EACCES",
          fix: "EBADENGINE means Node is too old — upgrade it or use the official installer. For EACCES, never use sudo; manage Node with nvm or fix the npm global prefix permissions.",
        },
        {
          problem: "Signed in but \"no usage\" or a 401",
          fix: "Check you signed in with a Plus / Pro / Business / Edu / Enterprise account — the free ChatGPT tier has no Codex quota. Otherwise switch to a pay-as-you-go API key.",
        },
        {
          problem: "Sandbox errors on native Windows",
          fix: "Set `sandbox = \"elevated\"` in the `[windows]` section of the config; fall back to `unelevated` when you lack admin rights. Using WSL avoids the issue entirely.",
        },
        {
          problem: "The project's .codex/config.toml seems ignored",
          fix: "Project-scoped config loads only for trusted projects. Run a normal session in that directory and confirm the trust prompt, then re-check the file syntax — or move the setting to the user-level `~/.codex/config.toml`.",
        },
      ],
      cost: "Codex usage is included with ChatGPT Plus / Pro / Business / Edu / Enterprise (resets on a rolling window). You can also pay per token with an OpenAI API key, or use Codex cloud. Prices and limits are set by OpenAI — check their site. To save usage: batch exploratory questions into one prompt, keep context tight, drop the reasoning effort for small edits, and hand one-off jobs to `codex exec` instead of a long interactive session.",
    },
  },

  /* ----------------------------------------------------------- Gemini CLI */
  "gemini-cli": {
    zh: {
      difficulty: "入门（会用终端基础命令即可）",
      os: "macOS 15+ / Windows 11 24H2+ / Ubuntu 20.04+（官方推荐配置）；需要 Node.js 20.0.0 或更高",
      prereq: [
        {
          label: "Node.js 20+（必需）",
          detail:
            "Gemini CLI 通过 npm 分发，必须装 Node 20 或更高版本。先运行 node -v 检查，没装就去 nodejs.org 装 LTS，或用 nvm 管理避免权限问题。",
        },
        {
          label: "账号（免费可用）",
          detail:
            "用个人 Google 账号登录即可，免费额度是**每分钟 60 次、每天 1000 次**，不用绑定支付方式。想要更高配额可以改用 AI Studio 的 API Key，或走企业版 Vertex AI。",
        },
        {
          label: "终端",
          detail:
            "macOS 打开「终端」，Windows 打开 PowerShell 或 WSL。官方推荐 Bash / Zsh / PowerShell。",
        },
        {
          label: "Git（建议）",
          detail:
            "它支持 Git 感知的文件过滤和检查点回滚。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 Google 与 Gemini 的 API 域名。国内直连不通，请先准备好可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "确认 Node 环境",
          blocks: [
            {
              kind: "text",
              text: "先看一眼 Node 版本，低于 20 直接装新版本，别硬试。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "node -v\nnpm -v",
              caption: "Node 需要 20.0.0 或更高",
            },
            { kind: "output", text: "v20.19.5\n10.8.2" },
            {
              kind: "note",
              text: "没装 Node：macOS 可以 `brew install node`，其他系统去 nodejs.org 下载 LTS 安装包。推荐用 nvm 管理版本，避免后面 npm 全局安装的权限问题。",
            },
          ],
        },
        {
          title: "不想装？先用 npx 直接跑一次",
          blocks: [
            {
              kind: "text",
              text: "npx 会临时下载并执行，不往系统里装东西，适合先试个鲜。注意每次都重新下载，长期用还是要全局安装。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npx @google/gemini-cli",
              caption: "免安装直接体验，第一次运行会问登录方式",
            },
            { kind: "output", text: "（首次会先下载包，随后进入交互界面）" },
          ],
        },
        {
          title: "全局安装 Gemini CLI",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @google/gemini-cli",
              caption: "安装后命令名是 gemini",
            },
            { kind: "output", text: "added 1 package in 8s" },
            {
              kind: "note",
              text: "macOS / Linux 也可以用 Homebrew：`brew install gemini-cli`。想尝鲜新功能可以装预览通道：`npm install -g @google/gemini-cli@preview`。",
            },
            {
              kind: "warn",
              text: "报 EACCES 权限错误时**不要**加 sudo。先运行 `npm config get prefix` 看全局目录，把它改成你有权限的目录（例如 `npm config set prefix ~/.npm-global` 并加进 PATH），或改用 nvm。",
            },
          ],
        },
        {
          title: "（遇到才做）让终端认识 gemini 命令",
          blocks: [
            {
              kind: "text",
              text: "`gemini` 提示 command not found，说明 npm 的全局 bin 目录不在 PATH 里。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm config get prefix",
              caption: "把这个目录下面的 bin 加进 PATH",
            },
            { kind: "output", text: "/usr/local" },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.npm-global/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "如果你按上一步改过 npm prefix，用这个目录；否则替换成实际路径",
            },
          ],
        },
        {
          title: "验证安装是否成功",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "gemini --version",
              caption: "打印版本号即可，也可以写 gemini -v",
            },
            { kind: "output", text: "0.9.1" },
            {
              kind: "note",
              text: "想升级到最新版：`npm install -g @google/gemini-cli@latest`，或者在会话里运行 `gemini update`。",
            },
          ],
        },
        {
          title: "首次启动并登录",
          blocks: [
            {
              kind: "text",
              text: "先 `cd` 进项目目录，再运行 `gemini`。第一次启动会让你选择认证方式。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngemini",
              caption: "先进项目目录再启动，它会以当前目录为工作区",
            },
            {
              kind: "shot",
              src: "/shots/gemini-cli/auth.svg",
              caption: "三种认证方式：Google 账号登录（有免费额度）、Gemini API Key、Vertex AI",
            },
            {
              kind: "list",
              items: [
                "**1. Sign in with Google** —— 个人 Google 账号，免费额度每分钟 60 次、每天 1000 次，推荐",
                "**2. Gemini API Key** —— 到 aistudio.google.com/apikey 生成，设置成 GEMINI_API_KEY 环境变量",
                "**3. Vertex AI** —— 企业团队用，需要 Google Cloud 项目与计费账号",
              ],
            },
            {
              kind: "text",
              text: "选 1 会自动打开浏览器，用 Google 账号登录并点击授权，终端自动完成登录。之后想换认证方式，在会话里运行 `/auth`。",
            },
            {
              kind: "warn",
              text: "Google 官方公告：自 2026 年 6 月 18 日起，免费档与 Google One 用户的 Gemini CLI 逐步被 Antigravity CLI 取代。免费额度政策可能随时调整，动手前先看一眼官方公告。",
            },
          ],
        },
        {
          title: "让它读懂你的项目（/init 生成 GEMINI.md）",
          blocks: [
            {
              kind: "text",
              text: "进入会话后输入 `/init`，它会分析当前目录并生成一份 `GEMINI.md`，作为项目的长期上下文文件。之后每次会话都会自动加载。",
            },
            { kind: "code", lang: "text", code: "/init", caption: "在 Gemini CLI 会话里输入" },
            {
              kind: "code",
              lang: "text",
              code: "# 项目约定\n- 包管理器用 pnpm\n- 提交前必须跑 pnpm lint 和 pnpm test\n- 组件放在 src/components，样式用 Tailwind\n- 不要修改 legacy/ 目录",
              caption: "生成后手工补几条你自己的规矩，并把 GEMINI.md 提交到 Git",
            },
            {
              kind: "note",
              text: "`GEMINI.md` 是分层加载的：全局、项目/上层目录、子目录的都会合并。想看当前实际加载了哪些、内容是什么，运行 `/memory show`。",
            },
          ],
        },
        {
          title: "核心用法：Plan 模式 + 审批档位",
          blocks: [
            {
              kind: "text",
              text: "直接用中文描述需求。复杂任务先进入 **Plan 模式**：会话里输入 `/plan` 切换到只读的计划模式，它会先给出方案而不动文件，你确认后再让它执行。",
            },
            {
              kind: "code",
              lang: "text",
              code: "/plan 给搜索接口加一层缓存，要求 5 分钟过期，写入时失效",
              caption: "先要方案，再批准执行",
            },
            {
              kind: "list",
              items: [
                "`/plan` —— 切到只读 Plan 模式（看方案），`/plan copy` 复制已批准的计划",
                "`/model` —— 换模型或调推理强度",
                "`/restore` —— 把文件恢复到某个工具执行之前的状态",
                "`/rewind` —— 回退对话，可选只回退历史、只回退代码改动，或两者都回退",
                "`@` —— 引用文件或目录，如 `@src/utils/` 会把整个目录内容喂进上下文",
                "`!` 开头 —— 直接执行 shell 命令，如 `!git status`",
              ],
            },
            {
              kind: "text",
              text: "启动时也可以用 `--approval-mode` 指定审批策略：`default`（默认，逐条确认）、`auto_edit`（自动接受编辑）、`plan`（计划模式）、`yolo`（全部放行）。",
            },
            {
              kind: "warn",
              text: "`--approval-mode=yolo` 会不经确认执行任何命令。只在一次性容器或完全可信的沙箱里用，别在本地主力开发机上开。",
            },
          ],
        },
        {
          title: "把它塞进脚本：非交互模式",
          blocks: [
            {
              kind: "text",
              text: "用 `-p` 可以一次问完就退出，非常适合脚本和 CI；配合 `--output-format json` 拿到结构化结果。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "gemini -p \"解释这个项目的架构\"\ngemini -p \"总结这次改动的风险\" --output-format json",
              caption: "非交互执行；输出格式可选 text / json / stream-json",
            },
            {
              kind: "output",
              text: "{\n  \"response\": \"…\",\n  \"stats\": { \"models\": { … } }\n}",
            },
            {
              kind: "note",
              text: "还可以用管道喂内容：`cat logs.txt | gemini`；要继续上次会话用 `gemini -r \"latest\"`；把别的目录也纳入工作区用 `gemini --include-directories ../lib,../docs`。",
            },
          ],
        },
        {
          title: "扩展能力：MCP 与自定义命令",
          blocks: [
            {
              kind: "list",
              items: [
                "`gemini mcp add github npx -y @modelcontextprotocol/server-github` —— 命令行添加 MCP 服务器",
                "`gemini mcp list` —— 查看已配置的 MCP 服务器",
                "`/mcp` —— 在会话里管理、启用、做 OAuth 授权",
                "`/commands list` —— 列出所有自定义斜杠命令（放在 ~/.gemini/commands/ 或项目的 .gemini/commands/）",
                "`gemini extensions install <git-url>` —— 从 Git 仓库安装扩展",
              ],
            },
            {
              kind: "shot",
              src: "/shots/gemini-cli/site.png",
              caption: "官方文档（geminicli.com）：安装、配置、快捷键、MCP 都在这里查",
            },
          ],
        },
        {
          title: "常用命令速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`gemini` —— 启动交互会话",
                "`gemini -p \"问题\"` —— 非交互执行一次",
                "`gemini -r \"latest\"` —— 继续最近一次会话",
                "`gemini -m flash` —— 指定模型（别名有 auto / pro / flash / flash-lite）",
                "`gemini update` —— 更新到最新版",
                "`/init` —— 生成 GEMINI.md",
                "`/plan` —— 进入只读计划模式",
                "`/memory show` —— 查看当前加载的上下文文件",
                "`/model` —— 切换模型",
                "`/mcp` —— 管理 MCP 服务器",
                "`/settings` —— 打开设置编辑器",
                "`/stats` —— 查看本次会话的用量与配额",
                "`/clear` —— 清空对话开新会话；`Ctrl+L` 只清屏",
                "`/help` —— 列出全部命令",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "GEMINI.md（项目根目录）",
          desc: "长期上下文文件，每次会话都会读。全局、项目、子目录的 GEMINI.md 会合并加载，越具体越靠后、优先级越高。",
          code: `# Project conventions
- Use pnpm, never npm
- Run pnpm lint and pnpm test before committing
- Components live in src/components, styled with Tailwind
- Never modify anything under legacy/`,
        },
        {
          path: "~/.gemini/settings.json",
          desc: "用户级设置：主题、模型、沙箱、MCP 服务器等。也可以直接用会话里的 `/settings` 图形化修改。字段以官方文档为准。",
          code: `{
  "theme": "default",
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`,
        },
        {
          path: "~/.gemini/commands/*.toml",
          desc: "自定义斜杠命令，一个文件一条命令。用户级放 ~/.gemini/commands/，项目级放 <项目>/.gemini/commands/。增删后用 `/commands reload` 重新加载。",
          code: `prompt = """
Review the current git diff and list only real bugs, 
grouped by file. Do not rewrite the code.
"""`,
        },
      ],
      troubles: [
        {
          problem: "gemini: command not found",
          fix: "npm 全局 bin 目录不在 PATH 里。运行 `npm config get prefix` 找到目录，把它的 bin 子目录加进 PATH 后重开终端；或者干脆先用 `npx @google/gemini-cli`。",
        },
        {
          problem: "npm install -g 报 EACCES 权限错误",
          fix: "**不要用 sudo**。先 `npm config get prefix` 看全局目录，改成你有权限的路径（如 `~/.npm-global`）并加进 PATH，或者用 nvm 管理 Node。",
        },
        {
          problem: "提示 Node 版本不受支持",
          fix: "Gemini CLI 需要 Node 20.0.0 或更高。用 nvm 装一个 20 以上的版本并设为默认：`nvm install 20 && nvm use 20`。",
        },
        {
          problem: "登录时浏览器打开了，但终端一直卡在等待授权",
          fix: "多半是代理拦住了本地回调。先确认浏览器里已登录 Google，再重试一次；仍不行就改用 API Key：到 aistudio.google.com/apikey 生成 Key，`export GEMINI_API_KEY=\"...\"` 后重启。",
        },
        {
          problem: "报 429 或提示超出配额",
          fix: "免费额度是每分钟 60 次、每天 1000 次，超出就会 429。降速重试、把任务合并成更少的请求，或改用 API Key / 升级套餐。注意官方已公告免费档用户逐步迁移到 Antigravity CLI。",
        },
        {
          problem: "终端界面乱码、边框显示错位",
          fix: "换现代终端（Ghostty、WezTerm、Windows Terminal），并确认支持 256 色。在 VS Code / Cursor / Windsurf 内部终端里输入多行容易出问题，可以先跑一次 `/terminal-setup` 配置快捷键。",
        },
      ],
      cost: "用个人 Google 账号登录即可免费使用，额度为每分钟 60 次、每天 1000 次请求，这是目前主流 CLI 里最宽松的免费额度之一。走 API Key 则按 Google AI Studio 的价格按 token 计费，企业版走 Vertex AI 计费。注意官方公告：自 2026 年 6 月 18 日起免费档与 Google One 用户的 Gemini CLI 逐步由 Antigravity CLI 取代，具体政策与价格以官方为准。省额度：把一个大问题拆成一次问完而不是来回追问、用 `/clear` 及时开新会话、长会话用 `/compress` 压缩历史、关闭用不上的 MCP 服务器以减少上下文。",
    },
    en: {
      difficulty: "Beginner (basic terminal commands)",
      os: "macOS 15+ / Windows 11 24H2+ / Ubuntu 20.04+ (official recommendations); requires Node.js 20.0.0 or newer",
      prereq: [
        {
          label: "Node.js 20+ (required)",
          detail:
            "Gemini CLI ships through npm and needs Node 20 or newer. Check with node -v; install the LTS build from nodejs.org, or use nvm to avoid permission problems.",
        },
        {
          label: "An account (free tier available)",
          detail:
            "A personal Google account works and includes a free tier of **60 requests/min and 1,000 requests/day** — no payment method needed. Higher limits come from an AI Studio API key or enterprise Vertex AI.",
        },
        {
          label: "A terminal",
          detail:
            "Terminal on macOS, PowerShell or WSL on Windows. Bash, Zsh and PowerShell are supported.",
        },
        {
          label: "Git (recommended)",
          detail:
            "It uses Git-aware file filtering and checkpoint-based restores. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Network",
          detail:
            "Google and the Gemini API endpoints must be reachable. On a blocked network sign-in will fail, so set up outbound access first.",
        },
      ],
      steps: [
        {
          title: "Check your Node environment",
          blocks: [
            {
              kind: "text",
              text: "Look at the Node version first. Anything below 20 needs upgrading before you start.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "node -v\nnpm -v",
              caption: "Node 20.0.0 or newer is required",
            },
            { kind: "output", text: "v20.19.5\n10.8.2" },
            {
              kind: "note",
              text: "No Node yet? `brew install node` on macOS, or download the LTS installer from nodejs.org. Using nvm avoids npm permission headaches later.",
            },
          ],
        },
        {
          title: "Not ready to install? Try it with npx",
          blocks: [
            {
              kind: "text",
              text: "npx downloads and runs the package temporarily without installing anything — ideal for a first look. It re-downloads each time, so install globally for daily use.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npx @google/gemini-cli",
              caption: "Runs without installing; the first run asks how to authenticate",
            },
            { kind: "output", text: "(the package downloads first, then the interactive UI appears)" },
          ],
        },
        {
          title: "Install Gemini CLI globally",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g @google/gemini-cli",
              caption: "The binary is called gemini",
            },
            { kind: "output", text: "added 1 package in 8s" },
            {
              kind: "note",
              text: "On macOS / Linux you can also use Homebrew: `brew install gemini-cli`. To try new features early: `npm install -g @google/gemini-cli@preview`.",
            },
            {
              kind: "warn",
              text: "On EACCES errors do **not** use sudo. Run `npm config get prefix`, point it somewhere you own (e.g. `npm config set prefix ~/.npm-global` and add it to PATH), or switch to nvm.",
            },
          ],
        },
        {
          title: "Only if needed: put gemini on your PATH",
          blocks: [
            {
              kind: "text",
              text: "`command not found` means npm's global bin directory is not on your PATH.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm config get prefix",
              caption: "Add the bin subdirectory of this path to your PATH",
            },
            { kind: "output", text: "/usr/local" },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.npm-global/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "Use whatever prefix you actually configured",
            },
          ],
        },
        {
          title: "Verify the installation",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "gemini --version",
              caption: "A version number means success; gemini -v works too",
            },
            { kind: "output", text: "0.9.1" },
            {
              kind: "note",
              text: "Update later with `npm install -g @google/gemini-cli@latest`, or run `gemini update` inside a session.",
            },
          ],
        },
        {
          title: "First launch and login",
          blocks: [
            {
              kind: "text",
              text: "`cd` into your project and run `gemini`. The first launch asks which authentication method to use.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngemini",
              caption: "Run it inside the project — the current directory becomes the workspace",
            },
            {
              kind: "shot",
              src: "/shots/gemini-cli/auth.svg",
              caption: "Three auth options: Google sign-in (free tier), Gemini API key, Vertex AI",
            },
            {
              kind: "list",
              items: [
                "**1. Sign in with Google** — personal account, free tier of 60 req/min and 1,000 req/day (recommended)",
                "**2. Gemini API Key** — generate one at aistudio.google.com/apikey and export GEMINI_API_KEY",
                "**3. Vertex AI** — for enterprise teams with a Google Cloud project and billing",
              ],
            },
            {
              kind: "text",
              text: "Option 1 opens your browser: sign in with Google, click authorize, and the terminal finishes by itself. Switch methods later with `/auth`.",
            },
            {
              kind: "warn",
              text: "Google has announced that from 18 June 2026, unpaid-tier and Google One users are being transitioned from Gemini CLI to Antigravity CLI. Free-tier terms can change — check the official announcement before you rely on them.",
            },
          ],
        },
        {
          title: "Teach it about your project (/init → GEMINI.md)",
          blocks: [
            {
              kind: "text",
              text: "Type `/init` in the session. It analyses the current directory and writes a `GEMINI.md` as durable project context, loaded automatically in every later session.",
            },
            { kind: "code", lang: "text", code: "/init", caption: "Type it inside the Gemini CLI session" },
            {
              kind: "code",
              lang: "text",
              code: "# Project conventions\n- Use pnpm, never npm\n- Run pnpm lint and pnpm test before committing\n- Components live in src/components, styled with Tailwind\n- Never modify anything under legacy/",
              caption: "Edit the generated file, then commit GEMINI.md",
            },
            {
              kind: "note",
              text: "`GEMINI.md` files are loaded hierarchically: global, project/ancestor and subdirectory files all merge. Run `/memory show` to see exactly what is loaded.",
            },
          ],
        },
        {
          title: "Core workflow: Plan mode and approval levels",
          blocks: [
            {
              kind: "text",
              text: "Describe the task in plain language. For anything non-trivial, enter **Plan mode**: type `/plan` to switch to a read-only planning mode that proposes an approach before touching files.",
            },
            {
              kind: "code",
              lang: "text",
              code: "/plan add a 5-minute cache in front of the search endpoint, invalidated on writes",
              caption: "Agree on the plan before approving the implementation",
            },
            {
              kind: "list",
              items: [
                "`/plan` — read-only Plan mode; `/plan copy` copies an approved plan",
                "`/model` — switch model or reasoning effort",
                "`/restore` — roll project files back to before a tool ran",
                "`/rewind` — step back through history, reverting chat, code, or both",
                "`@` — reference files or directories, e.g. `@src/utils/` pulls in the whole folder",
                "`!` — run a shell command directly, e.g. `!git status`",
              ],
            },
            {
              kind: "text",
              text: "You can also set the policy at launch with `--approval-mode`: `default` (ask every time), `auto_edit`, `plan`, or `yolo`.",
            },
            {
              kind: "warn",
              text: "`--approval-mode=yolo` runs any command without confirmation. Use it only in a disposable container or a sandbox you fully trust — not on your main workstation.",
            },
          ],
        },
        {
          title: "Drop it into scripts: non-interactive mode",
          blocks: [
            {
              kind: "text",
              text: "`-p` asks once and exits, which is perfect for scripts and CI; add `--output-format json` for structured output.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "gemini -p \"Explain the architecture of this project\"\ngemini -p \"Summarise the risk in this diff\" --output-format json",
              caption: "Non-interactive; output formats are text / json / stream-json",
            },
            {
              kind: "output",
              text: "{\n  \"response\": \"…\",\n  \"stats\": { \"models\": { … } }\n}",
            },
            {
              kind: "note",
              text: "Piping works too (`cat logs.txt | gemini`); continue a session with `gemini -r \"latest\"`; add extra workspace folders with `gemini --include-directories ../lib,../docs`.",
            },
          ],
        },
        {
          title: "Extend it: MCP and custom commands",
          blocks: [
            {
              kind: "list",
              items: [
                "`gemini mcp add github npx -y @modelcontextprotocol/server-github` — add an MCP server from the shell",
                "`gemini mcp list` — list configured MCP servers",
                "`/mcp` — manage, enable and OAuth-authenticate MCP servers inside the session",
                "`/commands list` — list your custom slash commands (in ~/.gemini/commands/ or <project>/.gemini/commands/)",
                "`gemini extensions install <git-url>` — install an extension from a Git repo",
              ],
            },
            {
              kind: "shot",
              src: "/shots/gemini-cli/site.png",
              caption: "Official docs (geminicli.com): install, configuration, shortcuts and MCP",
            },
          ],
        },
        {
          title: "Command cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`gemini` — start an interactive session",
                "`gemini -p \"question\"` — one-shot, non-interactive",
                "`gemini -r \"latest\"` — continue the most recent session",
                "`gemini -m flash` — pick a model (aliases: auto / pro / flash / flash-lite)",
                "`gemini update` — update to the latest version",
                "`/init` — generate GEMINI.md",
                "`/plan` — enter read-only plan mode",
                "`/memory show` — inspect the loaded context files",
                "`/model` — switch model",
                "`/mcp` — manage MCP servers",
                "`/settings` — open the settings editor",
                "`/stats` — session usage and quota",
                "`/clear` — reset the conversation (Ctrl+L only clears the screen)",
                "`/help` — list every command",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "GEMINI.md (project root)",
          desc: "Durable context, read every session. Global, project and subdirectory files merge, with more specific files winning conflicts.",
          code: `# Project conventions
- Use pnpm, never npm
- Run pnpm lint and pnpm test before committing
- Components live in src/components, styled with Tailwind
- Never modify anything under legacy/`,
        },
        {
          path: "~/.gemini/settings.json",
          desc: "User settings: theme, model, sandbox, MCP servers. You can also edit these through `/settings`. See the official docs for the full field list.",
          code: `{
  "theme": "default",
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}`,
        },
        {
          path: "~/.gemini/commands/*.toml",
          desc: "Custom slash commands, one file per command. User-level lives in ~/.gemini/commands/, project-level in <project>/.gemini/commands/. Reload with `/commands reload`.",
          code: `prompt = """
Review the current git diff and list only real bugs, 
grouped by file. Do not rewrite the code.
"""`,
        },
      ],
      troubles: [
        {
          problem: "gemini: command not found",
          fix: "npm's global bin directory is not on PATH. Run `npm config get prefix` and add its bin subdirectory to PATH, then reopen the terminal — or just use `npx @google/gemini-cli`.",
        },
        {
          problem: "npm install -g fails with EACCES",
          fix: "Do **not** use sudo. Run `npm config get prefix`, point it at a directory you own (e.g. `~/.npm-global`) and add it to PATH, or manage Node with nvm.",
        },
        {
          problem: "It says your Node version is unsupported",
          fix: "Gemini CLI needs Node 20.0.0+. Install and default to a newer version with nvm: `nvm install 20 && nvm use 20`.",
        },
        {
          problem: "The browser opened but the terminal waits forever for authorisation",
          fix: "Usually a proxy blocking the local callback. Confirm you are signed in to Google in the browser and retry; if it persists, switch to an API key: generate one at aistudio.google.com/apikey, `export GEMINI_API_KEY=\"...\"` and restart.",
        },
        {
          problem: "429 or \"quota exceeded\"",
          fix: "The free tier is 60 requests/minute and 1,000/day; exceeding it returns 429. Slow down, batch tasks into fewer requests, or move to an API key / paid plan. Note that Google is transitioning free-tier users to Antigravity CLI.",
        },
        {
          problem: "Garbled TUI rendering",
          fix: "Use a modern terminal (Ghostty, WezTerm, Windows Terminal) with 256-colour support. Multi-line input is unreliable in the VS Code / Cursor / Windsurf integrated terminals — run `/terminal-setup` once to fix the keybindings.",
        },
      ],
      cost: "Signing in with a personal Google account is free, at 60 requests/minute and 1,000 requests/day — one of the most generous free tiers among coding CLIs. API-key usage is billed per token at Google AI Studio rates, and enterprise teams pay through Vertex AI. Note the official announcement that from 18 June 2026 free-tier and Google One users are being transitioned to Antigravity CLI — check the official page for current terms. To make the quota last: ask one complete question instead of a long back-and-forth, `/clear` between unrelated tasks, `/compress` long sessions, and disable MCP servers you are not using.",
    },
  },

  /* -------------------------------------------------------------- Windsurf */
  windsurf: {
    zh: {
      difficulty: "入门（会用 VS Code 类编辑器即可）",
      os: "Windows 10+ / macOS / Linux（glibc ≥ 2.28，覆盖 Ubuntu 20、Debian 10、Fedora 36、RHEL 8 及以上）",
      prereq: [
        {
          label: "账号（免费可注册）",
          detail:
            "Windsurf 账号，免费版注册即可开始用，有额度限制；Pro 为订阅制（价格以 windsurf.com 官网为准）。用邮箱、Google 或 GitHub 登录都行。",
        },
        {
          label: "系统要求",
          detail:
            "Windows 10 及以上、macOS、或 glibc ≥ 2.28 的 Linux 发行版。用 deb / rpm 包管理器安装的版本可以自动更新，用 tarball 的需要手动更新。",
        },
        {
          label: "可迁移（可选）",
          detail:
            "如果你现在用 VS Code 或 Cursor，第一次启动可以直接导入设置、快捷键和扩展，几乎零迁移成本。",
        },
        {
          label: "Git（建议）",
          detail:
            "让 Cascade 帮你改代码、看 diff、回滚会顺手很多。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 windsurf.com 与模型服务域名。国内直连可能不稳定，登录和模型请求容易超时，请先准备好可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "确认系统版本",
          blocks: [
            {
              kind: "text",
              text: "先确认系统满足最低要求。macOS 打开「终端」执行下面这条；Windows 用 `winver` 查看版本；Linux 用 `ldd --version` 看 glibc。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "sw_vers",
              caption: "macOS 查看系统版本；Windows 用 winver，Linux 用 ldd --version",
            },
            { kind: "output", text: "ProductName:\tmacOS\nProductVersion:\t14.5\nBuildVersion:\t23F79" },
            {
              kind: "note",
              text: "Linux 用户注意：`glibc` 低于 2.28 的发行版（如 CentOS 7）官方不支持，请先升级系统或用 AppImage 类替代方案。",
            },
          ],
        },
        {
          title: "下载并安装（macOS / Windows）",
          blocks: [
            {
              kind: "text",
              text: "打开 [windsurf.com](https://windsurf.com)，点 **Download**，页面会给出 macOS、Windows、Linux 三个入口，选你系统的安装包。",
            },
            {
              kind: "list",
              items: [
                "**macOS**：下载 `.dmg`，把 Windsurf 拖进「应用程序」；首次打开若被拦，去「系统设置 → 隐私与安全性」点「仍要打开」",
                "**Windows**：下载 `.exe` 安装程序，双击一路装完；默认装到用户目录下的程序目录，不需要管理员权限",
                "**Windows 首次运行** 若弹 SmartScreen，点「更多信息」→「仍要运行」",
              ],
            },
            {
              kind: "warn",
              text: "本页没有真实截图（官网页面结构多变，抓到的图不对），下面几张都是示意图，用来标注关键界面位置，具体以你安装到的版本为准。",
            },
          ],
        },
        {
          title: "下载并安装（Linux）",
          blocks: [
            {
              kind: "text",
              text: "Linux 有两条路：包管理器（能自动更新，推荐）或 tarball（需要手动更新）。",
            },
            {
              kind: "list",
              items: [
                "deb 系（Ubuntu 20.04+ / Debian 10+）：按官网给出的仓库配置步骤添加源，然后安装",
                "rpm 系（Fedora 36+ / CentOS 8+ / RHEL 8+）：导入签名密钥、添加 yum/dnf 仓库，再安装",
                "通用 tarball：解压即用，但不会自动更新，需要自己盯新版本",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "# 仓库地址与安装包名以 windsurf.com 官方文档为准\nsudo apt update && sudo apt install <package-name>",
              caption: "deb 系示例；仓库和包名请以官网当前文档为准",
            },
            {
              kind: "note",
              text: "不确定用哪种？直接下载 tarball 解压到 `~/Applications` 也能跑，代价是要手动更新。",
            },
          ],
        },
        {
          title: "首次启动：主题、导入设置、登录",
          blocks: [
            {
              kind: "text",
              text: "第一次打开会走一段简短的引导流程，三步就能开始用。",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/onboarding.svg",
              caption: "首次启动引导：选主题 → 可选导入 VS Code / Cursor 设置 → 登录",
            },
            {
              kind: "list",
              items: [
                "**选主题** —— 保持默认即可，之后随时能在设置里改",
                "**Import Settings** —— 从 VS Code 或 Cursor 导入主题、快捷键、扩展，强烈建议打开",
                "**保持勾选安装终端命令** —— 这样就能用 `windsurf` 命令从终端打开项目",
              ],
            },
            {
              kind: "text",
              text: "登录用邮箱、Google 或 GitHub 都行，免费版登录后就能用。公司网络登录失败多半是代理问题。",
            },
            {
              kind: "note",
              text: "忘了导入设置？之后随时在命令面板（Cmd/Ctrl+Shift+P）里搜 **Import** 再导入一次即可。",
            },
          ],
        },
        {
          title: "（遇到才做）确认装好了，并把 windsurf 命令加进 PATH",
          blocks: [
            {
              kind: "text",
              text: "先确认应用能正常启动，再确认终端命令可用。引导流程里勾选了终端命令的话，下面这条应该能打印版本号。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf --version",
              caption: "提示 command not found 就按下面的方法处理",
            },
            {
              kind: "list",
              items: [
                "**macOS**：在命令面板（Cmd+Shift+P）里搜 install ... command 执行一次（不同版本文案略有差异）",
                "**Linux**：把可执行文件软链到 `/usr/local/bin`，或把安装目录加进 PATH",
                "**Windows**：重开一个终端窗口；仍不行就重新运行一次安装/引导流程并勾选终端命令",
              ],
            },
            {
              kind: "note",
              text: "不装终端命令也完全能用，只是没法直接从命令行打开项目。",
            },
          ],
        },
        {
          title: "打开项目，认识 Cascade 面板",
          blocks: [
            {
              kind: "text",
              text: "选 **Open Folder** 打开项目根目录。界面右侧那一栏就是 **Cascade** —— 它的 AI agent 面板，你的大部分操作都在这里完成。",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/cascade.svg",
              caption: "右侧 Cascade 面板：描述需求，它自己找文件、改代码，改动以 diff 给你确认",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf ~/Desktop/my-project",
              caption: "引导流程里勾选了终端命令的话，也可以这样打开项目",
            },
          ],
        },
        {
          title: "核心用法：让 Cascade 连续完成多步任务",
          blocks: [
            {
              kind: "text",
              text: "在 Cascade 输入框里用自然语言描述需求即可。它的强项是**连续执行多步任务**：自己读文件、改代码、跑命令、看报错、再修，中途可以随时打断纠偏。",
            },
            {
              kind: "code",
              lang: "text",
              code: "给产品列表加一层 60 秒缓存，写操作时失效，然后跑一遍单元测试确认没坏",
              caption: "把目标、约束和验收方式一次说清楚",
            },
            {
              kind: "list",
              items: [
                "**Tab 补全** —— 它会预测你下一步想改的位置，直接按 Tab 接受",
                "**选中代码再问** —— 「重构这段」「解释这段逻辑」比泛泛的提问命中率高得多",
                "**改动逐条确认** —— 每一步都能看到 diff，Accept 或 Reject 由你决定",
                "**长任务随时打断** —— 发现方向不对立刻在输入框补充说明，不用等它跑完",
              ],
            },
            {
              kind: "note",
              text: "改大范围代码前先 `git commit` 一次。有了干净的基线，出问题直接 `git restore .` 回退。",
            },
          ],
        },
        {
          title: "进阶：Memories、Workflows 与 Skills",
          blocks: [
            {
              kind: "text",
              text: "除了手写规则文件，Cascade 还有几套辅助机制，用对了能省掉不少重复劳动。",
            },
            {
              kind: "list",
              items: [
                "**Memories（记忆）** —— 它在对话过程中自动记住有用的上下文，只存在本地，不消耗额度；想让某个知识长期可靠地生效，还是写进 Rules 或 AGENTS.md 更稳",
                "**Workflows（工作流）** —— 把「部署」「发 PR 前的检查」这类固定流程写成模板，用 `/工作流名` 手动触发",
                "**Skills（技能）** —— 更复杂、需要附带脚本和参考文件的多步流程，由模型按需调用，或在输入框里 @ 引用",
                "**AGENTS.md** —— 零配置的目录级规则，根目录全局生效，子目录只对该目录生效",
              ],
            },
            {
              kind: "note",
              text: "记忆、规则、工作流都在 **Customizations** 面板里管理（Cascade 右上角的图标，或右下角的 Settings 按钮）。",
            },
          ],
        },
        {
          title: "让它记住项目规范：AGENTS.md 与 Rules",
          blocks: [
            {
              kind: "text",
              text: "有三层地方可以写规范，从省事到精细依次是：项目里的 **AGENTS.md**、工作区规则文件、以及全局规则文件。",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/rules.svg",
              caption: "Customizations → Rules：列出所有生效的规则，每条都能单独开关",
            },
            {
              kind: "list",
              items: [
                "**AGENTS.md** —— 放在仓库根目录就全局生效，放在子目录只对该目录生效，零配置",
                "**工作区规则** —— 每条一个 .md 文件，用 frontmatter 的 `trigger` 决定何时生效（always_on / model_decision / glob / manual）",
                "**全局规则** —— 对你所有项目生效，适合个人偏好",
              ],
            },
            {
              kind: "note",
              text: "产品正在改名为 Devin Desktop：规则目录 `.windsurf/rules/` 仍兼容，新版本优先读 `.devin/rules/`，配置目录也从 `~/.codeium/windsurf` 延续过来。以官网当前文档为准。",
            },
          ],
        },
        {
          title: "扩展与兼容性：装什么、别装什么",
          blocks: [
            {
              kind: "text",
              text: "它基于 VS Code 生态，绝大多数 VS Code 扩展都能直接用。但有几类扩展是明确不兼容的。",
            },
            {
              kind: "list",
              items: [
                "**不兼容**：其它 AI 代码补全类扩展（会和自带的补全打架），以及部分闭源商业扩展",
                "**不兼容**：部分版本不开放任意第三方市场，只能用内置市场；具体以你的版本为准",
                "**推荐**：语言插件（ESLint、Prettier、Python、Go…）、Git 增强、主题",
              ],
            },
            {
              kind: "note",
              text: "从 VS Code 导入后如果发现某个 AI 补全插件被禁用，这是预期行为，不要强行启用。",
            },
          ],
        },
        {
          title: "常用快捷键与操作速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Cmd/Ctrl+Shift+P` —— 命令面板（导入设置、切换设置都在这里）",
                "`Cmd/Ctrl+P` —— 快速打开文件",
                "`Cmd/Ctrl+L` 或点右侧图标 —— 聚焦 Cascade 面板",
                "`Tab` —— 接受 AI 补全建议",
                "`Cmd/Ctrl+Shift+F` —— 全项目搜索",
                "`Cmd/Ctrl+,` —— 打开设置（含账号、Cascade 配置）",
                "右下角 **Settings** —— 查看账号状态、Cascade 设置与用量",
              ],
            },
            {
              kind: "note",
              text: "快捷键默认沿用 VS Code 键位；如果在引导流程里选了别的键位方案，以实际为准。",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md（项目根目录）",
          desc: "零配置的项目规范。放在仓库根目录对所有文件生效，放在子目录只对该目录树生效，越具体的优先级越高。",
          code: `# Project conventions
- Use pnpm, never npm
- Run pnpm lint and pnpm test before committing
- Components live in src/components, styled with Tailwind
- Never modify anything under legacy/`,
        },
        {
          path: ".windsurf/rules/*.md（新版为 .devin/rules/*.md）",
          desc: "工作区规则，一条规则一个文件，用 frontmatter 的 trigger 决定激活时机。单文件上限 12000 字符。字段以官方文档为准。",
          code: `---
trigger: glob
globs: "**/*.test.ts"
---
All test files must use describe/it blocks and mock external API calls.`,
        },
        {
          path: "~/.codeium/windsurf/memories/global_rules.md",
          desc: "全局规则，对所有工作区生效，始终开启，上限 6000 字符。适合写个人偏好而不是项目规范。",
          code: `# 个人偏好
- 回复保持简洁，别复述我已经知道的东西
- 改完代码顺手告诉我该跑哪个命令验证
- 中文注释，英文标识符`,
        },
      ],
      troubles: [
        {
          problem: "macOS / Windows 提示应用来自未知开发者，打不开",
          fix: "macOS 去「系统设置 → 隐私与安全性」点「仍要打开」；Windows 在 SmartScreen 弹窗里点「更多信息」→「仍要运行」。别去关系统的整体安全设置。",
        },
        {
          problem: "登录一直转圈，或浏览器授权后没反应",
          fix: "多为代理或公司网络拦截本地回调。确认浏览器里已登录成功，换网络（手机热点）重试；仍不行就在系统里配置代理，或让管理员放行 windsurf.com 相关域名。",
        },
        {
          problem: "从 VS Code 导入后，某些扩展不见了或被禁用",
          fix: "预期行为。其它 AI 补全类扩展与自带补全冲突，会被禁用；闭源商业扩展也不支持。需要的话只保留一套补全引擎。",
        },
        {
          problem: "Cascade 改代码时卡住，或者一直重复同一步",
          fix: "在输入框里打断它，把范围缩小（明确指定文件和函数），或先让它出一份计划再执行。任务太大时它容易反复试探。",
        },
        {
          problem: "写了 AGENTS.md / 规则文件但没生效",
          fix: "在 Customizations → Rules 面板里确认这条规则已经被识别且开关是打开的；注意规则文件有字符上限（工作区 12000、全局 6000），超了会被截断。",
        },
        {
          problem: "国内网络下模型请求频繁超时",
          fix: "确认你的网络环境能稳定访问 windsurf.com 与模型服务域名；必要时配置系统级代理，或改用免费版自带的基础模型先跑通流程。",
        },
      ],
      cost: "有免费版，注册即可使用，但有额度限制；Pro 为订阅制。具体价格、额度与包含的模型以 windsurf.com 官网定价页为准（产品正在改名/整合为 Devin Desktop，价格页可能同步变化）。省额度：长任务拆成小步、及时把不需要的文件从上下文里去掉、简单改动别用最强的模型、本地能跑的格式化/lint 交给命令行而不是让它反复来回。",
    },
    en: {
      difficulty: "Beginner (VS Code-like editor experience)",
      os: "Windows 10+ / macOS / Linux (glibc ≥ 2.28 — Ubuntu 20, Debian 10, Fedora 36, RHEL 8 and newer)",
      prereq: [
        {
          label: "Account (free signup)",
          detail:
            "A Windsurf account — the free plan works right away with usage limits; Pro is a subscription (see windsurf.com for current pricing). Email, Google or GitHub sign-in all work.",
        },
        {
          label: "System requirements",
          detail:
            "Windows 10+, macOS, or a Linux distro with glibc ≥ 2.28. Installs from the deb / rpm repositories update themselves; the tarball needs manual updates.",
        },
        {
          label: "Migration (optional)",
          detail:
            "If you already use VS Code or Cursor you can import settings, keybindings and extensions on first launch — almost zero migration cost.",
        },
        {
          label: "Git (recommended)",
          detail:
            "Makes diffs and rollbacks much smoother. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Network",
          detail:
            "windsurf.com and the model endpoints must be reachable. On restricted networks sign-in and model calls time out — sort out outbound access first.",
        },
      ],
      steps: [
        {
          title: "Check your OS version",
          blocks: [
            {
              kind: "text",
              text: "Confirm you meet the minimum requirements first. On macOS run the command below; on Windows use `winver`; on Linux check glibc with `ldd --version`.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "sw_vers",
              caption: "macOS: use winver on Windows, ldd --version on Linux",
            },
            { kind: "output", text: "ProductName:\tmacOS\nProductVersion:\t14.5\nBuildVersion:\t23F79" },
            {
              kind: "note",
              text: "Linux users: distros older than glibc 2.28 (for example CentOS 7) are not supported — upgrade the distro or find an alternative.",
            },
          ],
        },
        {
          title: "Download and install (macOS / Windows)",
          blocks: [
            {
              kind: "text",
              text: "Open [windsurf.com](https://windsurf.com) and click **Download**. The page offers macOS, Windows and Linux builds — pick yours.",
            },
            {
              kind: "list",
              items: [
                "**macOS**: download the `.dmg` and drag Windsurf into Applications; if the first launch is blocked, allow it under System Settings → Privacy & Security",
                "**Windows**: download the `.exe` and run the wizard; it installs under your user directory and needs no admin rights",
                "**Windows first run**: if SmartScreen appears, choose More info → Run anyway",
              ],
            },
            {
              kind: "warn",
              text: "There is no real screenshot on this page — the vendor's page structure changes too often to capture reliably — so the images below are diagrams that label the key screens. Trust your installed version over the picture.",
            },
          ],
        },
        {
          title: "Download and install (Linux)",
          blocks: [
            {
              kind: "text",
              text: "Two options on Linux: a package repository (self-updating, recommended) or the tarball (manual updates).",
            },
            {
              kind: "list",
              items: [
                "deb-based (Ubuntu 20.04+ / Debian 10+): add the repository as documented, then install",
                "rpm-based (Fedora 36+ / CentOS 8+ / RHEL 8+): import the signing key, add the dnf/yum repo, then install",
                "Generic tarball: unpack and run — but it never updates itself",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "# Repository URL and package name come from the current official docs\nsudo apt update && sudo apt install <package-name>",
              caption: "deb example — check the official docs for the current repo and package name",
            },
            {
              kind: "note",
              text: "Not sure which to pick? Unpacking the tarball into `~/Applications` works fine; you just have to watch for new releases yourself.",
            },
          ],
        },
        {
          title: "First launch: theme, import, sign in",
          blocks: [
            {
              kind: "text",
              text: "The first launch runs a short three-step wizard.",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/onboarding.svg",
              caption: "Onboarding: pick a theme → optionally import VS Code / Cursor settings → sign in",
            },
            {
              kind: "list",
              items: [
                "**Theme** — keep the default; you can change it later in settings",
                "**Import Settings** — pull in themes, keybindings and extensions from VS Code or Cursor; strongly recommended",
                "**Leave the terminal-command option checked** — that gives you a `windsurf` command for opening projects",
              ],
            },
            {
              kind: "text",
              text: "Sign in with email, Google or GitHub; the free plan works immediately. Login failures on corporate networks are usually the proxy.",
            },
            {
              kind: "note",
              text: "Forgot to import? Open the command palette (Cmd/Ctrl+Shift+P), search for **Import** and run it again at any time.",
            },
          ],
        },
        {
          title: "Only if needed: confirm it installed and put windsurf on your PATH",
          blocks: [
            {
              kind: "text",
              text: "Check the app launches, then check the terminal command. If you kept the terminal-command option checked during onboarding, this prints a version number:",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf --version",
              caption: "`command not found`? Use the fixes below",
            },
            {
              kind: "list",
              items: [
                "**macOS**: run install ... command from the command palette (Cmd+Shift+P) — the exact wording varies by version",
                "**Linux**: symlink the binary into `/usr/local/bin`, or add the install directory to PATH",
                "**Windows**: open a fresh terminal window; if it still fails, re-run the installer / onboarding with the terminal-command option checked",
              ],
            },
            {
              kind: "note",
              text: "The terminal command is optional — without it you simply cannot open projects from the shell.",
            },
          ],
        },
        {
          title: "Open a project and meet the Cascade panel",
          blocks: [
            {
              kind: "text",
              text: "Choose **Open Folder** and pick your project root. The panel on the right is **Cascade** — the agent you will spend most of your time with.",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/cascade.svg",
              caption: "The Cascade panel: describe the task, it finds files and edits them, showing diffs for approval",
            },
            {
              kind: "code",
              lang: "bash",
              code: "windsurf ~/Desktop/my-project",
              caption: "If you kept the terminal command checked during onboarding",
            },
          ],
        },
        {
          title: "Core workflow: let Cascade run multi-step tasks",
          blocks: [
            {
              kind: "text",
              text: "Describe the task in plain language in the Cascade box. Its strength is **running multi-step work**: reading files, editing, running commands, reading the errors and fixing them — while you can interrupt and steer at any point.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Add a 60-second cache in front of the product list, invalidate it on writes, then run the unit tests to confirm nothing broke",
              caption: "State the goal, the constraints and how to verify — in one go",
            },
            {
              kind: "list",
              items: [
                "**Tab completion** — it predicts your next edit, press Tab to accept",
                "**Select code, then ask** — \"refactor this\" / \"explain this\" beats vague prompts by a mile",
                "**Approve each step** — every change arrives as a diff you accept or reject",
                "**Interrupt long runs** — if it drifts, add a correction to the box instead of waiting",
              ],
            },
            {
              kind: "note",
              text: "Commit before large changes. With a clean baseline, `git restore .` puts everything back.",
            },
          ],
        },
        {
          title: "Going further: Memories, Workflows and Skills",
          blocks: [
            {
              kind: "text",
              text: "Beyond hand-written rule files, Cascade has a few supporting mechanisms that remove a lot of repetition when used well.",
            },
            {
              kind: "list",
              items: [
                "**Memories** — context it stores automatically during conversations; it stays local and does not consume credits, but anything you need to rely on belongs in Rules or AGENTS.md instead",
                "**Workflows** — templates for repeatable processes (deploys, pre-PR checks) triggered manually with `/<workflow-name>`",
                "**Skills** — richer multi-step procedures bundled with scripts and reference files, invoked by the model or with an @ mention",
                "**AGENTS.md** — zero-config directory-scoped rules: root applies everywhere, a subfolder only to that tree",
              ],
            },
            {
              kind: "note",
              text: "Memories, rules and workflows all live in the **Customizations** panel (the icon at the top-right of Cascade, or the Settings button at the bottom-right).",
            },
          ],
        },
        {
          title: "Teach it your conventions: AGENTS.md and Rules",
          blocks: [
            {
              kind: "text",
              text: "Three places to put conventions, from least to most effort: **AGENTS.md** in the repo, workspace rule files, and a global rules file.",
            },
            {
              kind: "shot",
              src: "/shots/windsurf/rules.svg",
              caption: "Customizations → Rules lists every active rule with its own toggle",
            },
            {
              kind: "list",
              items: [
                "**AGENTS.md** — zero config: at the repo root it applies everywhere, in a subfolder it applies only to that tree",
                "**Workspace rules** — one .md per rule; a `trigger` frontmatter field decides when it activates (always_on / model_decision / glob / manual)",
                "**Global rules** — apply across all your projects; best for personal preferences",
              ],
            },
            {
              kind: "note",
              text: "The product is being rebranded to Devin Desktop: `.windsurf/rules/` still works, newer builds prefer `.devin/rules/`, and the config folder carries over from `~/.codeium/windsurf`. Check the official docs for your version.",
            },
          ],
        },
        {
          title: "Extensions and compatibility: what to install, what to avoid",
          blocks: [
            {
              kind: "text",
              text: "It is built on the VS Code ecosystem, so most VS Code extensions work as-is — but a few categories are explicitly incompatible.",
            },
            {
              kind: "list",
              items: [
                "**Incompatible**: other AI code-completion extensions (they fight the built-in one), plus some proprietary extensions",
                "**Incompatible**: on newer builds you cannot install from arbitrary marketplaces — only the built-in one works",
                "**Recommended**: language tooling (ESLint, Prettier, Python, Go…), Git helpers, themes",
              ],
            },
            {
              kind: "note",
              text: "If an AI completion extension arrives disabled after importing from VS Code, that is expected — leave it disabled.",
            },
          ],
        },
        {
          title: "Shortcut and panel cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`Cmd/Ctrl+Shift+P` — command palette (import settings, open settings)",
                "`Cmd/Ctrl+P` — quick open a file",
                "`Cmd/Ctrl+L` or the right-hand icon — focus Cascade",
                "`Tab` — accept an AI completion",
                "`Cmd/Ctrl+Shift+F` — search the whole project",
                "`Cmd/Ctrl+,` — settings (account, Cascade configuration)",
                "Bottom-right **Settings** — account status, Cascade settings and usage",
              ],
            },
            {
              kind: "note",
              text: "The defaults follow VS Code keybindings; if you picked another scheme during onboarding, that wins.",
            },
          ],
        },
      ],
      configs: [
        {
          path: "AGENTS.md (project root)",
          desc: "Zero-config conventions. At the repo root it applies everywhere; in a subfolder it only applies to that directory tree, with more specific files winning.",
          code: `# Project conventions
- Use pnpm, never npm
- Run pnpm lint and pnpm test before committing
- Components live in src/components, styled with Tailwind
- Never modify anything under legacy/`,
        },
        {
          path: ".windsurf/rules/*.md (newer builds: .devin/rules/*.md)",
          desc: "Workspace rules, one file per rule; the `trigger` frontmatter decides when it activates. Each file is capped at 12,000 characters. See the official docs for the fields.",
          code: `---
trigger: glob
globs: "**/*.test.ts"
---
All test files must use describe/it blocks and mock external API calls.`,
        },
        {
          path: "~/.codeium/windsurf/memories/global_rules.md",
          desc: "Global rules across every workspace, always on, capped at 6,000 characters. Use it for personal preferences rather than project conventions.",
          code: `# Personal preferences
- Keep replies short; do not restate what I already know
- After an edit, tell me which command verifies it
- Comments in English, identifiers in English`,
        },
      ],
      troubles: [
        {
          problem: "macOS / Windows blocks the app as coming from an unknown developer",
          fix: "On macOS allow it under System Settings → Privacy & Security; on Windows click More info → Run anyway in the SmartScreen dialog. Do not weaken your overall security settings.",
        },
        {
          problem: "Sign-in spins forever, or nothing happens after browser authorisation",
          fix: "Usually a proxy or corporate network blocking the local callback. Confirm the browser sign-in succeeded, retry on another network (phone hotspot), configure a system proxy, or ask IT to allow the windsurf.com domains.",
        },
        {
          problem: "After importing from VS Code, some extensions are missing or disabled",
          fix: "Expected. Other AI completion extensions conflict with the built-in one and get disabled; some proprietary extensions are unsupported. Keep a single completion engine.",
        },
        {
          problem: "Cascade hangs or repeats the same step",
          fix: "Interrupt it in the input box, narrow the scope (name the file and function), or ask for a plan before execution. Very large tasks make it probe repeatedly.",
        },
        {
          problem: "AGENTS.md or a rule file seems to be ignored",
          fix: "Open Customizations → Rules and check the rule was detected and its toggle is on. Note the character caps (12,000 per workspace rule, 6,000 global) — content past the limit is truncated.",
        },
        {
          problem: "Model requests time out constantly on a restricted network",
          fix: "Make sure your network can steadily reach windsurf.com and the model endpoints; configure a system proxy if needed, or use the free tier's basic models to validate the workflow first.",
        },
      ],
      cost: "There is a free plan you can use right after signing up, with usage limits, plus a Pro subscription. Current prices, limits and included models are on the windsurf.com pricing page — note the product is being rebranded / merged into Devin Desktop, so that page may change too. To make usage last: split long tasks into smaller steps, drop files you no longer need from context, avoid the strongest model for trivial edits, and run formatting and linting from the command line instead of asking the agent to loop on it.",
    },
  },

  /* ------------------------------------------------------------------ Cline */
  cline: {
    zh: {
      difficulty: "入门（会用 VS Code 即可）",
      os: "Windows 10+ / macOS / Linux；需要 VS Code（也支持 Cursor、Windsurf、VSCodium、JetBrains 系列）；CLI 方式需要 Node.js 20+",
      prereq: [
        {
          label: "编辑器（必需）",
          detail:
            "本教程以 VS Code 为例。Cline 也能装在 Cursor、Windsurf、VSCodium 和 JetBrains 系列里；其中 Windsurf 和 VSCodium 走 Open VSX 市场，安装流程一样。",
        },
        {
          label: "模型服务商与 API Key（必需）",
          detail:
            "Cline 插件本身**不含模型**。必须选一个服务商并填 Key（Anthropic、OpenAI、Google、OpenRouter、DeepSeek、本地 Ollama 等），或者登录 Cline 使用官方订阅（按量付费或月付）。",
        },
        {
          label: "Node.js 20+（仅 CLI 方式）",
          detail:
            "只有你要用 `npm install -g cline` 装终端版时才需要，官方建议 20 以上、22 更好。扩展方式完全不需要 Node。",
        },
        {
          label: "Git（建议）",
          detail:
            "让 Cline 帮你回滚改动会轻松很多。运行 git --version 检查，2.0 以上即可。",
        },
        {
          label: "网络",
          detail:
            "需要能访问 VS Code 扩展市场与你所选模型服务商的 API 域名。国内直连可能不稳，装扩展和模型请求都容易失败。",
        },
      ],
      steps: [
        {
          title: "确认 VS Code 已装好",
          blocks: [
            {
              kind: "text",
              text: "先确认编辑器在。macOS 打开「终端」、Windows 打开 PowerShell 执行：",
            },
            {
              kind: "code",
              lang: "bash",
              code: "code --version",
              caption: "没装的话去 code.visualstudio.com 下载",
            },
            { kind: "output", text: "1.104.0\n9d1e5b7b1a2c8f0e4d3b6a5c9e8f7d6c5b4a3210\nx64" },
            {
              kind: "note",
              text: "提示 command not found 时，如果 VS Code 明明开着，就是 code 命令不在 PATH 里；macOS 在 VS Code 里按 Cmd+Shift+P 执行 **Shell Command: Install 'code' command in PATH** 即可。",
            },
          ],
        },
        {
          title: "从扩展商店安装 Cline（主推方式）",
          blocks: [
            {
              kind: "text",
              text: "打开 VS Code，按 **Ctrl/Cmd+Shift+X** 打开扩展面板，搜索 `Cline`，在 Cline（发布者 Cline）上点 **Install**。",
            },
            {
              kind: "shot",
              src: "/shots/cline/marketplace.svg",
              caption: "扩展面板搜 Cline → Install；装完左侧活动栏会出现 Cline 图标",
            },
            {
              kind: "note",
              text: "安装完成后可能需要 **Reload Window**（命令面板搜 Reload Window）才会加载新扩展。",
            },
            {
              kind: "warn",
              text: "别装同名的山寨扩展。认准发布者、安装量和你搜到的那个名字完全一致的条目，第三方 fork 可能带别的行为。",
            },
          ],
        },
        {
          title: "备选：从 Open VSX 手动安装 .vsix",
          blocks: [
            {
              kind: "text",
              text: "Windsurf、VSCodium 等不接微软市场的编辑器，或者公司网络访问不了市场时，走这条路。",
            },
            {
              kind: "list",
              items: [
                "打开 open-vsx.org，搜索 **Cline**",
                "在版本页下载对应的 `.vsix` 文件",
                "在编辑器里打开扩展面板，点右上角 `...` → **Install from VSIX…**",
                "选中刚下载的文件，等安装完成",
                "JetBrains 用户：直接在 JetBrains Marketplace 里搜 Cline 安装",
              ],
            },
            {
              kind: "note",
              text: "装完同样建议 Reload Window 一次。",
            },
          ],
        },
        {
          title: "打开 Cline 面板",
          blocks: [
            {
              kind: "text",
              text: "点击左侧活动栏里的 **Cline** 图标，右侧会展开 Cline 面板。第一次打开会直接进入服务商配置界面。",
            },
            {
              kind: "note",
              text: "如果面板一直转圈打不开，先 Reload Window；仍不行就看看 Output 面板里有没有扩展报错。",
            },
          ],
        },
        {
          title: "选择模型服务商并填入 API Key",
          blocks: [
            {
              kind: "text",
              text: "在面板顶部点设置（齿轮）图标，打开 **API Provider** 配置：先选服务商，再填 Key，最后选模型。",
            },
            {
              kind: "shot",
              src: "/shots/cline/providers.svg",
              caption: "API Provider 下拉＋API Key 输入框：选服务商、粘贴 Key、选模型，三步搞定",
            },
            {
              kind: "list",
              items: [
                "**Cline** —— 官方订阅，按量付费或月付，最省事，不用自己管 Key",
                "**Anthropic / OpenAI / Google Gemini** —— 用你已有的 Key，按各家价格计费",
                "**OpenRouter** —— 一个 Key 打通用多家模型，方便比价",
                "**DeepSeek** —— 便宜，适合日常小改动",
                "**Ollama / LM Studio** —— 本地模型，完全离线，但吃显存",
              ],
            },
            {
              kind: "note",
              text: "Key 只存在你的本机扩展配置里，不上传到第三方服务器；但发给模型的代码内容按各家服务商的隐私政策走，敏感项目请先确认。",
            },
          ],
        },
        {
          title: "验证连接是否正常",
          blocks: [
            {
              kind: "text",
              text: "在输入框里发一句最简单的消息，比如「你好，你能看到这个项目吗」，看它是否正常回话。",
            },
            {
              kind: "code",
              lang: "text",
              code: "你好，简单介绍一下这个项目是做什么的",
              caption: "能正常回复说明 Key 和模型都配好了",
            },
            {
              kind: "note",
              text: "报 401 说明 Key 不对或没余额；报模型不存在说明模型名选错了；一直无响应多半是网络问题。",
            },
          ],
        },
        {
          title: "写项目规则：.clinerules 或 AGENTS.md",
          blocks: [
            {
              kind: "text",
              text: "在项目根目录建一个 `.clinerules/` 目录，里面每个 `.md` 或 `.txt` 都会作为规则加载（可以放多个文件，一个主题一份）。",
            },
            {
              kind: "code",
              lang: "text",
              code: "# 项目约定\n\n## 代码风格\n- 包管理器用 pnpm\n- 提交信息用中文，格式 type(scope): 说明\n\n## 测试\n- 改完业务逻辑必须补单元测试\n- 提交前跑 pnpm test 和 pnpm lint",
              caption: "存成 .clinerules/coding.md（一个文件一个主题更好维护）",
            },
            {
              kind: "note",
              text: "Cline 也自动识别 `.cursorrules`、`.windsurfrules` 和 `AGENTS.md`，从别的工具迁过来不用重写。规则面板里可以逐条开关。",
            },
          ],
        },
        {
          title: "核心用法：每一步都给你看 diff，你点 Approve 才算数",
          blocks: [
            {
              kind: "text",
              text: "在输入框描述任务。Cline 会先读相关文件，再提出改动 —— **每次改动都以 diff 呈现，只有你点 Approve 才会写入磁盘**。这是它最大的特点，也是最适合不放心让 AI 直接改代码的人的地方。",
            },
            {
              kind: "code",
              lang: "text",
              code: "缓存 key 没带 locale，导致用户看到错误币种。请修掉并补一个测试。",
              caption: "说清现象、期望结果和验收方式",
            },
            {
              kind: "shot",
              src: "/shots/cline/diff-approval.svg",
              caption: "diff 面板：绿色为新增、红色为删除，点 Approve 才落地，点 Reject 直接丢弃",
            },
            {
              kind: "list",
              items: [
                "它还会**主动跑命令验证**（比如跑测试），终端输出会显示在面板里，注意看有没有报错",
                "读文件、网页抓取等操作同样会请求权限，可以逐条批准或允许本次会话",
                "不想被频繁打断，可以在设置里开启自动批准；但**命令执行的自动批准要慎重**，它真的会在你机器上跑命令",
              ],
            },
          ],
        },
        {
          title: "控制上下文：用 @ 引用文件，别把整个仓库塞进去",
          blocks: [
            {
              kind: "text",
              text: "上下文越长，越贵、越慢、越容易跑偏。用 **@** 精确引用需要的文件，而不是让它自己满仓库翻。",
            },
            {
              kind: "list",
              items: [
                "`@文件路径` —— 把某个文件加进上下文",
                "`@目录/` —— 引用整个目录（谨慎，容易爆上下文）",
                "任务做完就开新对话 —— 让上一轮的上下文继续堆积只会拖慢速度、增加费用",
                "简单任务换便宜模型 —— 只有架构级改动才需要最强模型",
              ],
            },
            {
              kind: "note",
              text: "看面板上的 token 计数：接近上限时它就开始丢信息、答非所问，这时候该开新任务了。",
            },
          ],
        },
        {
          title: "可选：终端版 Cline CLI",
          blocks: [
            {
              kind: "text",
              text: "Cline 也提供命令行版本，适合 SSH 到服务器或用脚本批量跑任务。需要 Node.js 20+。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g cline\ncline auth\ncline \"给你的项目加一个 /health 接口\"",
              caption: "安装 → 认证 → 直接带任务运行；不传参就是交互模式",
            },
            {
              kind: "note",
              text: "CLI 与扩展共用同一套服务商配置思路。国内网络下 npm 全局安装可能很慢，必要时先配好 npm 镜像。",
            },
          ],
        },
        {
          title: "常用操作速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Ctrl/Cmd+Shift+X` —— 打开扩展面板",
                "点左侧 Cline 图标 —— 打开 / 收起面板",
                "`@` —— 在输入框引用文件",
                "**Approve / Reject** —— 决定每一步改动是否落地",
                "齿轮图标 → API Provider —— 换服务商或模型",
                "`.clinerules/` —— 项目规则目录（可多文件、可逐条开关）",
                "`/newrule` —— 让 Cline 交互式帮你创建一条规则",
                "`npm install -g cline` + `cline auth` —— 终端版",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".clinerules/（项目根目录）",
          desc: "工作区规则目录，里面每个 .md / .txt 都会被合并成一套规则。一个文件一个主题，方便单独开关。",
          code: `# Project guidelines

## Code style
- Use TypeScript for all new files
- Prefer composition over inheritance
- Use the repository pattern for data access

## Testing
- Unit tests for business logic
- Integration tests for API endpoints`,
        },
        {
          path: ".clinerules/frontend.md（按路径生效）",
          desc: "带 frontmatter 的条件规则：只有当前上下文里出现了匹配路径的文件时才会激活，能有效节省上下文。",
          code: `---
paths:
  - "src/components/**"
  - "src/hooks/**"
---
# Frontend guidelines
- Use Tailwind CSS for styling
- Prefer functional components with hooks
- Keep components focused on a single responsibility`,
        },
        {
          path: "AGENTS.md（项目根目录）",
          desc: "跨工具通用的规则文件，Cline 会自动识别；如果你同时在用别的编码 agent，用它最省事。个人全局规则放系统里的 Cline Rules 目录。",
          code: `# Project conventions
- Package manager: pnpm
- Test command: pnpm test
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "扩展面板里搜不到 Cline，或者点 Install 一直转圈",
          fix: "网络访问不了微软扩展市场。改用 open-vsx.org 下载 .vsix 手动安装（见第 3 步），或配置好代理后重试。",
        },
        {
          problem: "Cline 面板打开是空白 / 一直加载",
          fix: "先 Reload Window；再检查 Output 面板里 Cline 的日志有没有报错；确认扩展版本与编辑器版本兼容（老版本 VS Code 可能需要降级扩展）。",
        },
        {
          problem: "发消息报 401 或提示额度不足",
          fix: "Key 填错、Key 没余额，或模型名与 Key 不匹配。到面板设置里重新粘贴 Key，用「验证」类的按钮测试；也可以换成另一个服务商排除是 Key 的问题。",
        },
        {
          problem: "每一步都要点确认，太磨人",
          fix: "在 Cline 设置里可以开启自动批准（Auto-approve）。建议只对「读文件」和「编辑」开自动批准，**命令执行保留人工确认** —— 它执行的命令和你自己敲的命令权限完全一样。",
        },
        {
          problem: "聊久了它开始答非所问、重复劳动",
          fix: "上下文太长了。开一个新对话，把当前任务重新描述一遍；下次用 @ 只引用真正需要的文件，别 @ 整个目录。",
        },
        {
          problem: "它总是不按项目规范写代码",
          fix: "规则要写具体、可执行。「代码要整洁」没用，写「变量用 camelCase、常量用 UPPER_SNAKE、测试文件放 __tests__」才有用；并确认规则文件在 .clinerules/ 目录下、在规则面板里处于开启状态。",
        },
      ],
      cost: "插件本身**开源免费**，费用只来自模型：你可以自带 Key（按 Anthropic / OpenAI / Google / OpenRouter / DeepSeek 等各家价格计费），也可以使用 Cline 官方订阅（按量付费，或按月订阅的固定套餐）。具体价格以 cline.bot 官网为准。省 token：用 @ 精确引用文件而不是整个目录、任务做完就开新对话、简单任务换便宜模型、把「解释代码」这类轻量问题和「大规模重构」分开跑；有条件的话用本地模型处理不敏感的杂活。",
    },
    en: {
      difficulty: "Beginner (VS Code experience is enough)",
      os: "Windows 10+ / macOS / Linux; needs VS Code (also runs in Cursor, Windsurf, VSCodium and JetBrains IDEs); the CLI path needs Node.js 20+",
      prereq: [
        {
          label: "An editor (required)",
          detail:
            "This guide uses VS Code. Cline also installs into Cursor, Windsurf, VSCodium and JetBrains IDEs — Windsurf and VSCodium pull it from Open VSX, with the same flow.",
        },
        {
          label: "A model provider and API key (required)",
          detail:
            "The extension ships **no model of its own**. Pick a provider and paste a key (Anthropic, OpenAI, Google, OpenRouter, DeepSeek, a local Ollama, …) or sign in to use Cline's own plans (pay-as-you-go or monthly).",
        },
        {
          label: "Node.js 20+ (CLI path only)",
          detail:
            "Only needed if you install the terminal version with `npm install -g cline`; the docs recommend 20+, preferably 22. The extension needs no Node at all.",
        },
        {
          label: "Git (recommended)",
          detail: "Makes rolling changes back easy. Check with git --version; 2.0+ is fine.",
        },
        {
          label: "Network",
          detail:
            "The extension marketplace and your chosen model API must be reachable. On restricted networks both the install and the model calls fail.",
        },
      ],
      steps: [
        {
          title: "Confirm VS Code is installed",
          blocks: [
            {
              kind: "text",
              text: "Check the editor first — Terminal on macOS, PowerShell on Windows:",
            },
            {
              kind: "code",
              lang: "bash",
              code: "code --version",
              caption: "Not installed? Get it from code.visualstudio.com",
            },
            { kind: "output", text: "1.104.0\n9d1e5b7b1a2c8f0e4d3b6a5c9e8f7d6c5b4a3210\nx64" },
            {
              kind: "note",
              text: "If `command not found` appears while VS Code is clearly installed, the `code` shim is simply not on PATH — run **Shell Command: Install 'code' command in PATH** from the macOS command palette.",
            },
          ],
        },
        {
          title: "Install Cline from the extension marketplace (recommended)",
          blocks: [
            {
              kind: "text",
              text: "In VS Code press **Ctrl/Cmd+Shift+X**, search for `Cline` and click **Install** on the Cline entry (publisher Cline).",
            },
            {
              kind: "shot",
              src: "/shots/cline/marketplace.svg",
              caption: "Search the Extensions view for Cline → Install; the Cline icon appears in the activity bar",
            },
            {
              kind: "note",
              text: "You may need to **Reload Window** (command palette → Reload Window) before the extension loads.",
            },
            {
              kind: "warn",
              text: "Avoid lookalike extensions. Match the publisher and the exact name — third-party forks can behave differently.",
            },
          ],
        },
        {
          title: "Alternative: sideload a .vsix from Open VSX",
          blocks: [
            {
              kind: "text",
              text: "Use this path in editors that do not use the Microsoft marketplace (Windsurf, VSCodium), or when a corporate network blocks it.",
            },
            {
              kind: "list",
              items: [
                "Open open-vsx.org and search for **Cline**",
                "Download the matching `.vsix` from the version page",
                "In the editor's Extensions view, click the `...` menu → **Install from VSIX…**",
                "Select the downloaded file and wait for the install to finish",
                "JetBrains users: install Cline straight from the JetBrains Marketplace",
              ],
            },
            {
              kind: "note",
              text: "Reload the window afterwards, as above.",
            },
          ],
        },
        {
          title: "Open the Cline panel",
          blocks: [
            {
              kind: "text",
              text: "Click the **Cline** icon in the activity bar; the panel opens on the right. The first open drops you straight into provider setup.",
            },
            {
              kind: "note",
              text: "If the panel spins forever, reload the window; if it still fails, check the Output panel for extension errors.",
            },
          ],
        },
        {
          title: "Pick a provider and paste your API key",
          blocks: [
            {
              kind: "text",
              text: "Click the gear icon at the top of the panel to open **API Provider** settings: choose a provider, paste the key, pick a model.",
            },
            {
              kind: "shot",
              src: "/shots/cline/providers.svg",
              caption: "Provider dropdown + key field: choose, paste, select a model — three steps",
            },
            {
              kind: "list",
              items: [
                "**Cline** — official plans, pay-as-you-go or monthly; easiest, no key juggling",
                "**Anthropic / OpenAI / Google Gemini** — your existing keys, billed by each provider",
                "**OpenRouter** — one key for many models, handy for comparing prices",
                "**DeepSeek** — cheap and good for everyday small edits",
                "**Ollama / LM Studio** — local models, fully offline, but VRAM-hungry",
              ],
            },
            {
              kind: "note",
              text: "Keys stay in your local extension settings, but the code you send follows each provider's privacy policy — check it first on sensitive projects.",
            },
          ],
        },
        {
          title: "Verify the connection",
          blocks: [
            {
              kind: "text",
              text: "Send the simplest possible message — \"hi, can you see this project?\" — and check it answers.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Hi — briefly, what does this project do?",
              caption: "A normal reply means the key and model are wired up",
            },
            {
              kind: "note",
              text: "A 401 means a bad key or no credit; \"model not found\" means the model name is wrong; silence is usually the network.",
            },
          ],
        },
        {
          title: "Write project rules: .clinerules or AGENTS.md",
          blocks: [
            {
              kind: "text",
              text: "Create a `.clinerules/` directory in the project root. Every `.md` or `.txt` inside is merged into one rule set — one topic per file keeps them easy to toggle.",
            },
            {
              kind: "code",
              lang: "text",
              code: "# Project conventions\n\n## Code style\n- Use pnpm, never npm\n- Commit messages: type(scope): summary\n\n## Testing\n- Add unit tests when you change business logic\n- Run pnpm test and pnpm lint before committing",
              caption: "Save as .clinerules/coding.md",
            },
            {
              kind: "note",
              text: "Cline also picks up `.cursorrules`, `.windsurfrules` and `AGENTS.md`, so migrating from another tool costs nothing. Rules can be toggled individually in the Rules panel.",
            },
          ],
        },
        {
          title: "Core workflow: every step is a diff you approve",
          blocks: [
            {
              kind: "text",
              text: "Describe the task in the box. Cline reads the relevant files first, then proposes changes — and **nothing is written to disk until you click Approve**. That is its defining trait, and why people who distrust auto-editing agents like it.",
            },
            {
              kind: "code",
              lang: "text",
              code: "The cache key ignores the locale, so users see the wrong currency. Fix it and add a test.",
              caption: "Symptom + expected result + how to verify",
            },
            {
              kind: "shot",
              src: "/shots/cline/diff-approval.svg",
              caption: "The diff view: green adds, red removes; Approve applies it, Reject throws it away",
            },
            {
              kind: "list",
              items: [
                "It also **runs commands to verify** (tests, linters); watch the terminal output for failures",
                "Reads, web fetches and other actions ask for permission too — approve one at a time or for the session",
                "To cut the interruptions, enable Auto-approve in settings; be careful with auto-approving **command execution** — it runs with your full user permissions",
              ],
            },
          ],
        },
        {
          title: "Manage context: reference files with @, don't dump the repo",
          blocks: [
            {
              kind: "text",
              text: "Longer context means more cost, more latency and more drift. Use **@** to pin exactly the files you need instead of letting it rummage.",
            },
            {
              kind: "list",
              items: [
                "`@path/to/file` — add a specific file to context",
                "`@some/folder/` — pull in a whole directory (use sparingly; it burns context fast)",
                "Start a new task when one finishes — piling conversations up only slows things down and costs more",
                "Switch to a cheaper model for small jobs; keep the strongest model for architectural work",
              ],
            },
            {
              kind: "note",
              text: "Watch the token counter in the panel: once it approaches the limit, it starts dropping information and answering off-topic — that is your cue for a new task.",
            },
          ],
        },
        {
          title: "Optional: the Cline CLI",
          blocks: [
            {
              kind: "text",
              text: "Cline also ships a terminal client, handy over SSH or for scripted batch work. It needs Node.js 20+.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "npm install -g cline\ncline auth\ncline \"add a /health endpoint to this project\"",
              caption: "Install → authenticate → run with a task; no argument starts interactive mode",
            },
            {
              kind: "note",
              text: "The CLI follows the same provider setup as the extension. Global npm installs can be slow on restricted networks — set an npm registry mirror first if needed.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`Ctrl/Cmd+Shift+X` — open the Extensions view",
                "Click the Cline icon — open / collapse the panel",
                "`@` — reference a file in the input box",
                "**Approve / Reject** — decide whether each change lands",
                "Gear icon → API Provider — change provider or model",
                "`.clinerules/` — project rules directory (multi-file, individually toggleable)",
                "`/newrule` — have Cline create a rule interactively",
                "`npm install -g cline` + `cline auth` — the terminal version",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".clinerules/ (project root)",
          desc: "The workspace rules directory. Every .md / .txt inside is merged into a single rule set; one topic per file makes toggling easy.",
          code: `# Project guidelines

## Code style
- Use TypeScript for all new files
- Prefer composition over inheritance
- Use the repository pattern for data access

## Testing
- Unit tests for business logic
- Integration tests for API endpoints`,
        },
        {
          path: ".clinerules/frontend.md (path-scoped)",
          desc: "Conditional rules with frontmatter: they activate only when matching paths appear in the current context, which saves a lot of tokens.",
          code: `---
paths:
  - "src/components/**"
  - "src/hooks/**"
---
# Frontend guidelines
- Use Tailwind CSS for styling
- Prefer functional components with hooks
- Keep components focused on a single responsibility`,
        },
        {
          path: "AGENTS.md (project root)",
          desc: "The cross-tool rule file — Cline detects it automatically, which is handy if you also run another coding agent. Personal global rules live in Cline's own Rules directory on your system.",
          code: `# Project conventions
- Package manager: pnpm
- Test command: pnpm test
- Commit messages: type(scope): summary`,
        },
      ],
      troubles: [
        {
          problem: "Cline does not appear in the marketplace, or Install spins forever",
          fix: "The Microsoft marketplace is unreachable. Sideload the .vsix from open-vsx.org (step 3), or configure a proxy and retry.",
        },
        {
          problem: "The Cline panel is blank or loads forever",
          fix: "Reload the window first, then check the Cline output channel for errors. Also confirm the extension version is compatible with your editor — very old VS Code may need an older extension build.",
        },
        {
          problem: "Sending a message returns 401 or \"insufficient balance\"",
          fix: "Wrong key, no credit, or a model that does not match the key. Re-paste the key in settings and use the built-in verification; try another provider to isolate whether it is the key.",
        },
        {
          problem: "Approving every step is exhausting",
          fix: "Enable Auto-approve in Cline settings. Prefer auto-approving reads and edits only and keep **command execution** manual — commands run with exactly your user permissions.",
        },
        {
          problem: "After a long session it starts rambling or repeating work",
          fix: "The context is too long. Start a new task and restate the goal; next time reference only the files you need with @ rather than a whole directory.",
        },
        {
          problem: "It keeps ignoring your conventions",
          fix: "Make the rules specific and actionable. \"Write clean code\" does nothing; \"camelCase for variables, UPPER_SNAKE for constants, tests in __tests__\" works. Confirm the files live under .clinerules/ and are enabled in the Rules panel.",
        },
      ],
      cost: "The extension is **free and open source**. Costs come only from the model: bring your own key (billed at Anthropic / OpenAI / Google / OpenRouter / DeepSeek rates) or use Cline's own plans (pay-as-you-go, or a flat monthly subscription). Check cline.bot for current pricing. To save tokens: reference files with @ instead of whole directories, start a fresh task when one finishes, use a cheap model for small jobs, and keep \"explain this code\" questions separate from large refactors. A local model is a good fit for non-sensitive chores if you have the hardware.",
    },
  },

  /* ------------------------------------------------------------------ Aider */
  aider: {
    zh: {
      difficulty: "入门（会用终端和 Git 基础命令）",
      os: "macOS / Linux / Windows（Windows 用 PowerShell；也支持 WSL）",
      prereq: [
        {
          label: "模型 API Key（必需）",
          detail:
            "Aider 自己不含模型，必须至少有一个服务商的 Key：DeepSeek、Anthropic、OpenAI 等。DeepSeek 最便宜，适合先跑通流程。",
        },
        {
          label: "Git 仓库（必需）",
          detail:
            "Aider 的自动提交和回滚完全依赖 Git。先在项目目录跑过 `git init` 或本来就是 Git 仓库。用 git --version 检查版本，2.0 以上即可。",
        },
        {
          label: "Python（可选）",
          detail:
            "官方一行安装脚本会自动装 uv 和独立的 Python 3.12，所以你不需要预装 Python。只有走 pipx 方式才需要 Python 3.9–3.12，走 aider-install 方式需要 3.8–3.13。",
        },
        {
          label: "终端",
          detail:
            "macOS 打开「终端」，Windows 打开 PowerShell。后面所有命令都在这里执行。",
        },
        {
          label: "网络",
          detail:
            "需要能访问你所选模型服务商的 API 域名。国内访问 DeepSeek 通常没问题，访问 Anthropic / OpenAI 则需要可访问外网的网络环境。",
        },
      ],
      steps: [
        {
          title: "打开终端，确认环境",
          blocks: [
            {
              kind: "text",
              text: "确认 Git 可用；顺手看一眼 Python 版本（只有走 pipx 方式才严格要求）。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version\npython3 --version",
              caption: "Windows 上 Python 命令可能叫 python 而不是 python3",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)\nPython 3.12.4" },
            {
              kind: "note",
              text: "完全没装 Python 也没关系，下一步的一行安装脚本会自己搞定。",
            },
          ],
        },
        {
          title: "一行安装（macOS / Linux）",
          blocks: [
            {
              kind: "text",
              text: "官方脚本会下载 uv，并用它把 aider 装进一个独立的 Python 环境，不会污染你的系统 Python。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -LsSf https://aider.chat/install.sh | sh",
              caption: "官方一行安装脚本（没有 curl 可用 wget -qO- 替换前面的命令）",
            },
            {
              kind: "output",
              text: "installing aider…\naider installed to ~/.local/bin/aider",
            },
            {
              kind: "warn",
              text: "不要加 sudo 执行。提示 `syntax error near unexpected token '<'` 说明你在 PowerShell 里，请用下一步的命令。",
            },
          ],
        },
        {
          title: "安装（Windows）",
          blocks: [
            {
              kind: "text",
              text: "Windows 在 **PowerShell** 里执行下面这行（注意要带 `-ExecutionPolicy ByPass`，否则可能被策略拦住）。",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "powershell -ExecutionPolicy ByPass -c \"irm https://aider.chat/install.ps1 | iex\"",
              caption: "Windows 官方安装命令",
            },
            {
              kind: "note",
              text: "如果你在 CMD 里，先输入 `powershell` 切进 PowerShell 再执行。WSL 用户直接用上一步的 bash 命令即可。",
            },
          ],
        },
        {
          title: "其它安装方式（pip / pipx）",
          blocks: [
            {
              kind: "text",
              text: "已经会管理 Python 环境的，也可以用包管理器安装。三种方式挑一种就行，别混着装。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "python -m pip install aider-install\naider-install",
              caption: "方式一：aider-install（会自动准备独立环境）",
            },
            {
              kind: "code",
              lang: "bash",
              code: "python -m pip install pipx\npipx install aider-chat",
              caption: "方式二：pipx（需要 Python 3.9–3.12）",
            },
            {
              kind: "warn",
              text: "直接用 `pip install aider-chat` 装到全局环境容易和别的包冲突，官方也说系统包管理器里的版本经常依赖不对。优先用上面的脚本或 pipx。",
            },
          ],
        },
        {
          title: "（遇到才做）让终端认识 aider 命令",
          blocks: [
            {
              kind: "text",
              text: "如果下一步提示 `aider: command not found`，先试着用 `python -m aider` 替代；确认能跑通后，再把安装目录加进 PATH。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS 默认 zsh；用 bash 就改 ~/.bashrc",
            },
            { kind: "output", text: "（无输出即可，重开终端后再试一次）" },
          ],
        },
        {
          title: "验证安装是否成功",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "aider --version",
              caption: "能打印版本号就说明装好了",
            },
            { kind: "output", text: "aider 0.86.0" },
            {
              kind: "note",
              text: "仍报 command not found 就用 `python -m aider --version`；两条都不行说明安装没成功，重跑一次安装脚本。",
            },
          ],
        },
        {
          title: "准备 API Key",
          blocks: [
            {
              kind: "text",
              text: "最直接的方式是启动时用 `--api-key` 传进去；长远看更推荐写进 `.env` 或配置文件，免得每次都敲。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "aider --model deepseek --api-key deepseek=<你的key>",
              caption: "临时用一次；把 <你的key> 换成真实 Key",
            },
            {
              kind: "list",
              items: [
                "**DeepSeek** —— `--model deepseek`，便宜，适合先跑通",
                "**Anthropic** —— `--model sonnet`，配合 `--api-key anthropic=<key>`",
                "**OpenAI** —— `--model o3-mini`，配合 `--api-key openai=<key>`",
              ],
            },
            {
              kind: "note",
              text: "只有 OpenAI 和 Anthropic 的 Key 能直接写进 `.aider.conf.yml`；其它服务商的 Key 请写在 `.env` 文件里（见下面的配置示例）。",
            },
          ],
        },
        {
          title: "首次启动：在 Git 仓库里跑起来",
          blocks: [
            {
              kind: "text",
              text: "`cd` 进项目目录再启动。目录必须是一个 Git 仓库，否则自动提交和回滚都用不了。",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngit init          # 还不是仓库的话先初始化\naider --model deepseek --api-key deepseek=<你的key>",
              caption: "启动后会看到版本、模型、Git 信息和 repo map 统计",
            },
            {
              kind: "shot",
              src: "/shots/aider/startup.svg",
              caption: "启动界面：模型、Git 版本、repo-map 用量和提示符 aider>",
            },
            {
              kind: "note",
              text: "第一次运行如果报「没有 Git 仓库」，就在该目录执行一次 `git init`，再重新启动。",
            },
          ],
        },
        {
          title: "把文件加进上下文：/add 与 /drop",
          blocks: [
            {
              kind: "text",
              text: "Aider 只会修改**已经在上下文里的文件**。用 `/add` 把要改的文件加进去，用完 `/drop` 移出，能显著省钱。",
            },
            {
              kind: "code",
              lang: "text",
              code: "/add src/server.ts\n/add src/routes/*.ts\n/drop src/legacy.ts",
              caption: "在 aider> 提示符后输入；支持通配符一次加多个文件",
            },
            {
              kind: "list",
              items: [
                "启动时也可以直接指定：`aider src/server.ts src/auth.ts`",
                "只想让它读、不许改的文件用 `aider --read CONVENTIONS.md`",
                "`/ls` 之类的命令可以用 `/help` 查看，不同版本可用命令略有差异",
              ],
            },
            {
              kind: "note",
              text: "上下文越短越便宜也越准。改完一个需求就 `/drop` 掉不再需要的文件。",
            },
          ],
        },
        {
          title: "核心用法：描述需求，改动自动提交成 Git commit",
          blocks: [
            {
              kind: "text",
              text: "直接用中文说要改什么即可。它每完成一轮改动就会**自动 git commit**，提交信息由模型生成 —— 不满意直接回滚。",
            },
            {
              kind: "code",
              lang: "text",
              code: "给这个服务加一个 /health 接口，返回 {\"ok\": true}，然后跑一下测试",
              caption: "说清改什么、期望结果、怎么验证",
            },
            {
              kind: "shot",
              src: "/shots/aider/git-commit.svg",
              caption: "每轮改动自动提交，git log 里能看到 aider 生成的提交信息",
            },
            {
              kind: "list",
              items: [
                "`/undo` —— 撤销上一次 aider 提交（最常用的救命命令）",
                "`git revert HEAD` —— 在 aider 之外自己回滚",
                "`/diff` —— 查看尚未提交的改动",
                "`/run <命令>` —— 让它执行命令并把输出带回对话",
              ],
            },
            {
              kind: "warn",
              text: "它会自动提交，所以改之前**先确认工作区是干净的**（`git status`）。有未提交的改动时它会连你的改动一起提交，事后不好分辨。",
            },
          ],
        },
        {
          title: "常用命令速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`aider --model deepseek --api-key deepseek=<key>` —— 指定模型和 Key 启动",
                "`aider src/a.ts src/b.ts` —— 启动时就把文件加进上下文",
                "`aider --read CONVENTIONS.md` —— 只读文件（只给它看，不许改）",
                "`aider --message \"修掉登录报错\"` —— 一次性执行一个任务后退出",
                "`aider --yes-always` —— 自动确认所有提示（谨慎）",
                "`/add` `/drop` —— 把文件加进 / 移出上下文",
                "`/undo` —— 撤销上一次提交",
                "`/diff` —— 查看未提交的改动",
                "`/run <cmd>` —— 执行命令并把结果带回对话",
                "`/tokens` —— 查看当前上下文用量",
                "`/help` —— 列出所有可用命令",
                "`aider --upgrade` —— 升级到最新版",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".aider.conf.yml",
          desc: "YAML 配置。Aider 会依次在用户主目录、Git 仓库根目录、当前目录查找这个文件，后加载的覆盖先加载的。只有 OpenAI / Anthropic 的 Key 能直接写在这里。",
          code: `model: deepseek
read:
  - CONVENTIONS.md
auto-commits: true
gitignore: true
show-diffs: true
pretty: true`,
        },
        {
          path: ".env（Git 仓库根目录）",
          desc: "放 API Key 的地方。其它服务商的 Key 都写在这里（OpenAI / Anthropic 之外的必须走这个文件或环境变量）。记得把 .env 加进 .gitignore。",
          code: `DEEPSEEK_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...`,
        },
        {
          path: ".aiderignore（Git 仓库根目录）",
          desc: "告诉 Aider 别碰哪些文件，格式和 .gitignore 一样。生成产物、依赖目录、锁文件都建议排除，能显著减少噪音和 token 消耗。",
          code: `dist/
build/
node_modules/
*.lock`,
        },
      ],
      troubles: [
        {
          problem: "aider: command not found",
          fix: "先用 `python -m aider` 验证是不是只差 PATH；如果这样能跑，就把 `~/.local/bin` 加进 PATH 后重开终端。两条都不行说明安装失败，重跑安装脚本。",
        },
        {
          problem: "提示当前目录不是 Git 仓库，或自动提交不生效",
          fix: "在项目目录执行 `git init`，至少做一次 `git add . && git commit -m \"init\"`，再重新启动 aider。自动提交、/undo 全都依赖这个仓库。",
        },
        {
          problem: "报 401 / 额度不足 / 模型不存在",
          fix: "检查 Key 有没有多余空格、账户有没有余额，以及 `--model` 的名字和服务商是否匹配（比如 `--model deepseek` 却给了 OpenAI 的 Key）。也可以换 `/model` 里列出的已知模型名试一次。",
        },
        {
          problem: "pip 安装报依赖冲突，或 Python 版本不符合要求",
          fix: "不要往全局环境里硬装。用官方一行安装脚本（自带独立 Python 环境），或者用 pipx（支持 Python 3.9–3.12）。pipx 方式记得事后 `pipx upgrade aider-chat`。",
        },
        {
          problem: "Windows 上脚本被 PowerShell 执行策略拦住",
          fix: "官方命令里的 `-ExecutionPolicy ByPass` 就是为了绕开这个。如果公司策略不允许，改用 WSL 跑 bash 安装命令。",
        },
        {
          problem: "中文注释/文件出现乱码",
          fix: "在配置里显式指定编码：`aider --encoding utf-8`；Windows 上还建议把终端切到 UTF-8 代码页或直接用 Windows Terminal。",
        },
      ],
      cost: "Aider 本身**开源免费**，费用全部来自模型 API：按你选择的服务商（DeepSeek / Anthropic / OpenAI 等）按 token 计费，DeepSeek 这类便宜模型能把日常成本压得很低。没有官方订阅，也没有中间加价。省 token：用 `/add` 和 `/drop` 精确控制上下文、及时移出不再改的文件、把大任务拆成多个小需求、用 `--map-tokens` 调低 repo map 的用量、用 `--weak-model` 指定一个便宜模型去生成提交信息，以及复杂重构才切强模型、日常小改动用便宜模型。",
    },
    en: {
      difficulty: "Beginner (basic terminal and Git commands)",
      os: "macOS / Linux / Windows (PowerShell on Windows; WSL works too)",
      prereq: [
        {
          label: "A model API key (required)",
          detail:
            "Aider ships no model. You need at least one provider key: DeepSeek, Anthropic, OpenAI, and so on. DeepSeek is the cheapest way to validate the setup.",
        },
        {
          label: "A Git repository (required)",
          detail:
            "Auto-commit and undo rely entirely on Git. Run `git init` in the project directory first if it is not already a repo. Check the version with git --version (2.0+ is fine).",
        },
        {
          label: "Python (optional)",
          detail:
            "The official one-liner installs uv and a private Python 3.12 for you, so no system Python is needed. The pipx path requires Python 3.9–3.12; the aider-install path supports 3.8–3.13.",
        },
        {
          label: "A terminal",
          detail: "Terminal on macOS, PowerShell on Windows. Every command runs there.",
        },
        {
          label: "Network",
          detail:
            "Your chosen provider's API must be reachable. DeepSeek is usually fine from anywhere; Anthropic and OpenAI need working outbound access.",
        },
      ],
      steps: [
        {
          title: "Open a terminal and check the basics",
          blocks: [
            {
              kind: "text",
              text: "Confirm Git is available, and glance at your Python version (only strictly required for the pipx route).",
            },
            {
              kind: "code",
              lang: "bash",
              code: "git --version\npython3 --version",
              caption: "On Windows the command may be python rather than python3",
            },
            { kind: "output", text: "git version 2.39.3 (Apple Git-145)\nPython 3.12.4" },
            {
              kind: "note",
              text: "No Python at all is fine — the installer in the next step handles it.",
            },
          ],
        },
        {
          title: "One-line install (macOS / Linux)",
          blocks: [
            {
              kind: "text",
              text: "The script downloads uv and uses it to install aider into its own Python environment, leaving your system Python untouched.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl -LsSf https://aider.chat/install.sh | sh",
              caption: "Official one-liner (swap in wget -qO- if you have no curl)",
            },
            {
              kind: "output",
              text: "installing aider…\naider installed to ~/.local/bin/aider",
            },
            {
              kind: "warn",
              text: "Never run this with sudo. A `syntax error near unexpected token '<'` means you are in PowerShell — use the Windows command instead.",
            },
          ],
        },
        {
          title: "Install (Windows)",
          blocks: [
            {
              kind: "text",
              text: "In **PowerShell** run the line below — note the `-ExecutionPolicy ByPass`, which avoids being blocked by the policy.",
            },
            {
              kind: "code",
              lang: "powershell",
              code: "powershell -ExecutionPolicy ByPass -c \"irm https://aider.chat/install.ps1 | iex\"",
              caption: "Official Windows installer",
            },
            {
              kind: "note",
              text: "If you are in CMD, type `powershell` first. WSL users can simply use the bash one-liner above.",
            },
          ],
        },
        {
          title: "Alternative installs (pip / pipx)",
          blocks: [
            {
              kind: "text",
              text: "If you already manage Python environments, package managers work too. Pick one route — do not mix them.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "python -m pip install aider-install\naider-install",
              caption: "Route 1: aider-install (sets up an isolated environment)",
            },
            {
              kind: "code",
              lang: "bash",
              code: "python -m pip install pipx\npipx install aider-chat",
              caption: "Route 2: pipx (requires Python 3.9–3.12)",
            },
            {
              kind: "warn",
              text: "A plain global `pip install aider-chat` often conflicts with other packages, and the docs note that system package managers frequently install it with wrong dependencies. Prefer the script or pipx.",
            },
          ],
        },
        {
          title: "Only if needed: put aider on your PATH",
          blocks: [
            {
              kind: "text",
              text: "If the next step says `aider: command not found`, first try `python -m aider`. Once that works, add the install directory to PATH.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "echo 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc && source ~/.zshrc",
              caption: "macOS defaults to zsh; use ~/.bashrc for bash",
            },
            { kind: "output", text: "(no output — reopen the terminal and retry)" },
          ],
        },
        {
          title: "Verify the installation",
          blocks: [
            {
              kind: "code",
              lang: "bash",
              code: "aider --version",
              caption: "A version number means success",
            },
            { kind: "output", text: "aider 0.86.0" },
            {
              kind: "note",
              text: "Still `command not found`? Try `python -m aider --version`. If neither works the install failed — re-run the installer.",
            },
          ],
        },
        {
          title: "Prepare your API key",
          blocks: [
            {
              kind: "text",
              text: "The quickest route is passing `--api-key` at launch; long term you want it in `.env` or the config file so you stop retyping it.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "aider --model deepseek --api-key deepseek=<your-key>",
              caption: "One-off launch — replace <your-key> with the real value",
            },
            {
              kind: "list",
              items: [
                "**DeepSeek** — `--model deepseek`, cheapest, great for a first run",
                "**Anthropic** — `--model sonnet` with `--api-key anthropic=<key>`",
                "**OpenAI** — `--model o3-mini` with `--api-key openai=<key>`",
              ],
            },
            {
              kind: "note",
              text: "Only OpenAI and Anthropic keys can live directly in `.aider.conf.yml`; other providers' keys belong in a `.env` file (see the examples below).",
            },
          ],
        },
        {
          title: "First launch: run it inside a Git repo",
          blocks: [
            {
              kind: "text",
              text: "`cd` into the project first. It must be a Git repository, otherwise auto-commit and undo are unavailable.",
            },
            {
              kind: "code",
              lang: "bash",
              code: "cd ~/Desktop/my-project\ngit init          # only if it is not a repo yet\naider --model deepseek --api-key deepseek=<your-key>",
              caption: "The banner shows version, model, Git info and repo-map usage",
            },
            {
              kind: "shot",
              src: "/shots/aider/startup.svg",
              caption: "Startup banner: model, Git version, repo-map budget and the aider> prompt",
            },
            {
              kind: "note",
              text: "If it complains about a missing Git repository, run `git init` in that directory and start again.",
            },
          ],
        },
        {
          title: "Add files to the chat: /add and /drop",
          blocks: [
            {
              kind: "text",
              text: "Aider only edits files that are **in the chat**. Use `/add` to bring them in and `/drop` to remove them — this is the single biggest lever on cost.",
            },
            {
              kind: "code",
              lang: "text",
              code: "/add src/server.ts\n/add src/routes/*.ts\n/drop src/legacy.ts",
              caption: "Typed at the aider> prompt; wildcards work",
            },
            {
              kind: "list",
              items: [
                "You can also pass files at launch: `aider src/server.ts src/auth.ts`",
                "For files it may read but not edit: `aider --read CONVENTIONS.md`",
                "Run `/help` for the commands your version supports — they vary slightly between releases",
              ],
            },
            {
              kind: "note",
              text: "Shorter context is cheaper and more accurate. `/drop` files as soon as a task is finished.",
            },
          ],
        },
        {
          title: "Core workflow: describe a change, get an automatic commit",
          blocks: [
            {
              kind: "text",
              text: "Describe what you want in plain language. After each round of edits it **auto-commits** with a model-written message, so going back is trivial.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Add a /health endpoint to this service returning {\"ok\": true}, then run the tests",
              caption: "What + expected result + how to verify",
            },
            {
              kind: "shot",
              src: "/shots/aider/git-commit.svg",
              caption: "Every round lands as a commit — git log shows aider's messages",
            },
            {
              kind: "list",
              items: [
                "`/undo` — revert the last aider commit (the command you will use most)",
                "`git revert HEAD` — roll back yourself, outside aider",
                "`/diff` — inspect not-yet-committed changes",
                "`/run <cmd>` — run a command and bring its output back into the chat",
              ],
            },
            {
              kind: "warn",
              text: "Because it auto-commits, **start with a clean working tree** (`git status`). Uncommitted work gets swept into its commits and becomes hard to separate afterwards.",
            },
          ],
        },
        {
          title: "Command cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`aider --model deepseek --api-key deepseek=<key>` — start with a model and key",
                "`aider src/a.ts src/b.ts` — add files at launch",
                "`aider --read CONVENTIONS.md` — read-only context file",
                "`aider --message \"fix the login error\"` — run one task and exit",
                "`aider --yes-always` — auto-confirm every prompt (use with care)",
                "`/add` `/drop` — add / remove files from the chat",
                "`/undo` — revert the last commit",
                "`/diff` — show uncommitted changes",
                "`/run <cmd>` — execute a command and feed the output back",
                "`/tokens` — current context usage",
                "`/help` — list all available commands",
                "`aider --upgrade` — update to the latest version",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: ".aider.conf.yml",
          desc: "YAML config. Aider looks in your home directory, then the Git repo root, then the current directory — later files win. Only OpenAI and Anthropic keys may be stored here directly.",
          code: `model: deepseek
read:
  - CONVENTIONS.md
auto-commits: true
gitignore: true
show-diffs: true
pretty: true`,
        },
        {
          path: ".env (Git repo root)",
          desc: "Where keys live. Providers other than OpenAI / Anthropic must use this file (or environment variables). Add .env to .gitignore.",
          code: `DEEPSEEK_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...`,
        },
        {
          path: ".aiderignore (Git repo root)",
          desc: "Files Aider should leave alone, using .gitignore syntax. Excluding build output, dependencies and lock files cuts both noise and token spend.",
          code: `dist/
build/
node_modules/
*.lock`,
        },
      ],
      troubles: [
        {
          problem: "aider: command not found",
          fix: "Run `python -m aider` to check whether only the PATH is missing. If that works, add `~/.local/bin` to PATH and reopen the terminal. If neither works, the install failed — re-run the installer.",
        },
        {
          problem: "It says the directory is not a Git repo, or auto-commit does nothing",
          fix: "Run `git init` in the project and make at least one commit (`git add . && git commit -m \"init\"`), then restart aider. Auto-commit and /undo both depend on the repo.",
        },
        {
          problem: "401, no credit, or model not found",
          fix: "Check the key has no stray spaces, the account has credit, and the `--model` name matches the provider (a DeepSeek model with an OpenAI key will fail). Try a known model name from `/model`.",
        },
        {
          problem: "pip reports dependency conflicts or an unsupported Python",
          fix: "Do not force it into a global environment. Use the official one-liner (it creates its own environment) or pipx (Python 3.9–3.12). With pipx, upgrade later via `pipx upgrade aider-chat`.",
        },
        {
          problem: "Windows blocks the script under the PowerShell execution policy",
          fix: "The `-ExecutionPolicy ByPass` in the official command exists for exactly this. If group policy forbids it, run the bash installer inside WSL instead.",
        },
        {
          problem: "Mojibake in Chinese comments or files",
          fix: "Pin the encoding explicitly: `aider --encoding utf-8`. On Windows also switch the terminal to UTF-8 (or just use Windows Terminal).",
        },
      ],
      cost: "Aider is **free and open source**. All costs come from the model API, billed per token by whichever provider you choose (DeepSeek / Anthropic / OpenAI …) — cheap models like DeepSeek bring everyday costs down a lot. There is no official subscription and no markup. To save tokens: control context precisely with `/add` and `/drop`, remove files you are done with, split big tasks into smaller prompts, lower the repo-map budget with `--map-tokens`, point `--weak-model` at a cheap model for commit messages, and reserve the strongest model for real refactors.",
    },
  },
};
