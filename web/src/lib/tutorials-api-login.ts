import type { Step } from "./tutorial-types";

/** Shared “log in with an API key, optionally via CC Switch” starter steps. */
export function apiLoginSteps(opts: {
  appZh: string;
  appEn: string;
  settings: string;
  tokenVar: string;
  urlVar?: string;
  start: string;
  officialKeyZh: string;
  officialKeyEn: string;
  ccSwitch?: boolean;
}): { zh: Step[]; en: Step[] } {
  const {
    appZh,
    appEn,
    settings,
    tokenVar,
    urlVar,
    start,
    officialKeyZh,
    officialKeyEn,
    ccSwitch = true,
  } = opts;
  const exportBlock = urlVar
    ? `export ${urlVar}="https://你的API地址"\nexport ${tokenVar}="sk-你的密钥"\n${start}`
    : `export ${tokenVar}="sk-你的密钥"\n${start}`;
  const exportBlockEn = urlVar
    ? `export ${urlVar}="https://your-api-host"\nexport ${tokenVar}="sk-your-key"\n${start}`
    : `export ${tokenVar}="sk-your-key"\n${start}`;

  return {
    zh: [
      {
        title: "另一种登录：用 API Key（可搭配 CC Switch）",
        blocks: [
          {
            kind: "text",
            text: ccSwitch
              ? `${appZh} 不一定要用官方订阅登录。只要有一份 **API Key**（官方控制台，或兼容的中转），就可以按量跑。经常换供应商时，用桌面工具 **CC Switch** 点一下切换，比每次手改配置省事。`
              : `${appZh} 也可以不走官方账号，改用 **API Key** 按量登录。`,
          },
          ...(ccSwitch
            ? ([
                {
                  kind: "shot" as const,
                  src: "/shots/cc-switch/workspace.svg",
                  caption:
                    "CC Switch：左边选应用（Claude Code / Codex / Gemini / OpenCode），右边填供应商和 Key",
                },
              ] as const)
            : []),
          {
            kind: "list",
            items: [
              `**Key 从哪来**：${officialKeyZh}。第三方中转要认准你信任的站点，Key 当成密码，不要发给任何人、不要贴进聊天。`,
              ...(ccSwitch
                ? [
                    "**推荐路径（CC Switch）**：先看本站的 [CC Switch 教程](/tool/cc-switch)。装好后在左边选对应应用 → 添加供应商（名称、API 地址、Key）→ 设为当前 → **完全退出再打开** " +
                      appZh,
                  ]
                : []),
              "**手改路径**：把下面的环境变量写好，保存后新开一个终端再启动",
            ],
          },
          {
            kind: "code",
            lang: "bash",
            code: exportBlock,
            caption: `先在当前终端生效；要长期保存就写进 ${settings} 或 shell 配置`,
          },
          {
            kind: "note",
            text: `改完必须新开 ${appZh}，旧窗口读的还是上一套环境变量。CC Switch 点「应用」之后同样要退出重开。`,
          },
          {
            kind: "warn",
            text: "订阅登录和 API Key 不要混在同一个窗口里抢。选一种主方式：官方账号，或 Key +（可选）CC Switch。",
          },
        ],
      },
    ],
    en: [
      {
        title: "Another way in: API key (optional CC Switch)",
        blocks: [
          {
            kind: "text",
            text: ccSwitch
              ? `${appEn} can run on an **API key** instead of a subscription — official console or a compatible gateway. If you hop between providers, **CC Switch** applies a profile in one click.`
              : `${appEn} can also run on an **API key** instead of a vendor account.`,
          },
          ...(ccSwitch
            ? ([
                {
                  kind: "shot" as const,
                  src: "/shots/cc-switch/workspace.svg",
                  caption:
                    "CC Switch: pick the app on the left, paste provider + key on the right",
                },
              ] as const)
            : []),
          {
            kind: "list",
            items: [
              `**Where the key comes from**: ${officialKeyEn}. Treat gateway keys like passwords.`,
              ...(ccSwitch
                ? [
                    "**With CC Switch**: see the [CC Switch guide](/en/tool/cc-switch). Add a provider, set it current, then fully quit and reopen " +
                      appEn,
                  ]
                : []),
              "**By hand**: export the variables below, then start a **new** terminal",
            ],
          },
          {
            kind: "code",
            lang: "bash",
            code: exportBlockEn,
            caption: `Session-only. For a lasting setup, write them into ${settings} or your shell profile`,
          },
          {
            kind: "note",
            text: `Restart ${appEn} after switching. Old windows keep the previous env.`,
          },
          {
            kind: "warn",
            text: "Don’t mix a subscription login and an API key in the same session. Pick one primary path.",
          },
        ],
      },
    ],
  };
}
