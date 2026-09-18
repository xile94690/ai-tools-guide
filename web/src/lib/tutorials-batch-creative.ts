import type { TutorialSet } from "./tutorial-types";

export const creativeTutorials: TutorialSet = {
  midjourney: {
    zh: {
      difficulty: "入门（不需要美术基础）",
      os: "网页（midjourney.com）+ Discord（桌面 / 网页 / 手机 App）",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "用 Google 账号或 Discord 账号在 midjourney.com 登录即可，注册不需要手机号。登录后可以再绑定 Discord，网页版和 Discord 共用同一个订阅。",
        },
        {
          label: "付费要求（必需）",
          detail:
            "Midjourney **没有免费版**，不订阅无法生成任何图片。最低档 Basic $10/月起，必须先订阅才能画第一张图。",
        },
        {
          label: "网络环境",
          detail:
            "midjourney.com 和 Discord 国内都无法直连，需要自备可访问外网的网络环境，否则注册、支付、生成都会失败。",
        },
        {
          label: "浏览器",
          detail:
            "用较新版本的 Chrome / Edge / Safari 访问网页版，它是功能最全的入口。习惯聊天室的也可以用 Discord。",
        },
        {
          label: "支付方式",
          detail:
            "订阅需要一张支持境外扣款的信用卡（Visa / Mastercard 等）。国内普通储蓄卡可能被拒，建议提前确认卡片可用。",
        },
      ],
      steps: [
        {
          title: "打开官网：以网页版为主，Discord 为辅",
          blocks: [
            {
              kind: "text",
              text: "Midjourney 现在**主推网页版**。浏览器打开 [midjourney.com](https://www.midjourney.com)，点右上角 **Log In**。生成页面是 `midjourney.com/imagine`（Create 页面）。",
            },
            {
              kind: "text",
              text: "Discord 里同样能用，先加入官方服务器再进入任意 `#newbies` 频道，输入 `/imagine` 指令。两种方式共用同一个账号和订阅额度。",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/workspace.svg",
              caption: "网页版 Create 页面：顶部 Imagine 提示词栏，中间作品网格，左侧导航",
            },
            {
              kind: "list",
              items: [
                "**网页版**：`midjourney.com` → 登录 → Create 页面，界面直观，新手首选",
                "**Discord 版**：`discord.gg/midjourney` → 进 `#newbies` 频道 → 输入 `/imagine`",
                "账号互通：同一个订阅在网页和 Discord 都能用",
              ],
            },
            {
              kind: "warn",
              text: "认准 `midjourney.com` 和官方 Discord。第三方「镜像站」「代充」「低价共享号」既违反服务条款，账号也可能被封，**不要买**。",
            },
          ],
        },
        {
          title: "注册与登录",
          blocks: [
            {
              kind: "text",
              text: "点 Log In 后有两种方式：**Google 账号** 或 **Discord 账号**，都不需要手机号。",
            },
            {
              kind: "list",
              items: [
                "**用 Google 登录**：填邮箱和密码即可，最快",
                "**用 Discord 登录**：先在浏览器登录 Discord，再回到 Midjourney 页面点授权",
                "两边建议统一用一个入口，避免不小心买了两份订阅",
              ],
            },
            {
              kind: "note",
              text: "登录本身是免费的。只有订阅之后才能真正开始生成。",
            },
            {
              kind: "warn",
              text: "国内直连打不开 midjourney.com。登录页一直转圈或报错通常是网络问题，先确认网络环境，第 3 步支付失败也多半是同一个原因。",
            },
          ],
        },
        {
          title: "订阅付费（没有免费版，必须先订阅）",
          blocks: [
            {
              kind: "text",
              text: "登录后进入 `Manage Subscription`（账号页）选择档位。**所有档位都是按月或按年自动续费的订阅**，年付一次性付清全年、相当于打八折。",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/pricing.svg",
              caption: "四档订阅：Basic / Standard / Pro / Mega，价格以官网账号页为准",
            },
            {
              kind: "list",
              items: [
                "**Basic $10/月**：3.3 小时 Fast GPU 时间，适合先试水",
                "**Standard $30/月**：15 小时 Fast + Relax 模式无限出图，最推荐",
                "**Pro $60/月**：30 小时 Fast + Stealth 隐私模式",
                "**Mega $120/月**：60 小时 Fast，重度用户",
              ],
            },
            {
              kind: "text",
              text: "支付用信用卡（Visa / Mastercard 等）扣款。**取消**：在 `Manage Subscription` 页面点 `Cancel Plan`，取消后当前计费周期内仍能继续用，到期才真正停止。",
            },
            {
              kind: "warn",
              text: "没订阅时在 Imagine 栏输入提示词不会有任何反应、也不出图。看到订阅提示，就说明还没付费成功。",
            },
          ],
        },
        {
          title: "界面导览：Create 页面三大块",
          blocks: [
            {
              kind: "text",
              text: "网页版的核心就是 Create 页面，从上到下分三块：",
            },
            {
              kind: "list",
              items: [
                "**Imagine 栏（顶部）**：输入提示词的地方，右侧有 Imagine 发送按钮和齿轮设置图标",
                "**Creation Feed（中间）**：实时显示生成中的图，也是往期作品列表；鼠标悬停会出现点赞、变体、转视频等快捷按钮",
                "**左侧导航**：Create（生成）、Organize（整理）、Personalize（个性化）、Search、Tasks",
                "**Organize 页面**：集中管理所有作品，可排序、筛选、建文件夹、批量下载",
              ],
            },
            {
              kind: "text",
              text: "点开任意一张图会全屏放大，上方工具栏能复制提示词、Job ID、seed 和图片链接。",
            },
            {
              kind: "note",
              text: "Discord 里输入 `/settings` 也能调默认参数，效果和网页版的齿轮图标一致。",
            },
          ],
        },
        {
          title: "第一次生成：写一个完整提示词并看懂它",
          blocks: [
            {
              kind: "text",
              text: "在 Imagine 栏粘贴下面这行，回车。它会一次生成 **4 张图**。",
            },
            {
              kind: "code",
              lang: "text",
              code: "a lone lighthouse on a cliff at dusk, weathered stone, dramatic clouds, cinematic composition, soft golden rim light, painterly concept art --ar 3:2 --stylize 200",
              caption: "完整可复制的提示词",
            },
            {
              kind: "text",
              text: "逐段拆解它为什么这么写：",
            },
            {
              kind: "list",
              items: [
                "**a lone lighthouse on a cliff at dusk** —— 主体 + 场景 + 时间，越靠前权重越高",
                "**weathered stone** —— 材质细节，让画面更真实",
                "**dramatic clouds** —— 氛围元素，画面不空",
                "**cinematic composition** —— 构图风格（电影感构图）",
                "**soft golden rim light** —— 光影，柔和的暖色轮廓光，决定明暗质感",
                "**painterly concept art** —— 画风，厚涂概念设定图",
                "**--ar 3:2** —— 画幅比例，横构图适合风景",
                "**--stylize 200** —— 艺术化强度，太低接近原图、太高会太「AI 味」",
              ],
            },
            {
              kind: "output",
              text: "十几秒后 Creation Feed 里先出现 4 张模糊预览，再逐步变清晰到 100% 完成。",
            },
            {
              kind: "note",
              text: "提示词用英文效果最稳。中文偶尔能用但不稳定，建议用英文，或用翻译工具先转一手。",
            },
          ],
        },
        {
          title: "参数与进阶技巧",
          blocks: [
            {
              kind: "text",
              text: "参数写在提示词末尾，格式是 `--参数名 值`。**破折号前要留一个空格，参数里不要加逗号句号**。",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/params.svg",
              caption: "齿轮图标打开设置面板；右侧是常用参数一览",
            },
            {
              kind: "list",
              items: [
                "`--ar 16:9` 画幅比例；`--stylize 0-1000`（简写 `--s`）艺术化强度",
                "`--style raw` 更写实、更听话，少一点默认美化",
                "`--chaos 0-100`（简写 `--c`）数值越大，4 张图差异越大",
                "`--no text, watermark` 明确排除文字和水印",
                "`--seed 12345` 固定随机种子，微调提示词时保持构图稳定",
                "`--tile` 生成无缝贴图；`--q 2` 提升细节（耗时更久）",
                "`--v 7` 切换模型版本；`--niji` 是偏二次元 / 东方审美的模型",
              ],
            },
            {
              kind: "text",
              text: "**垫图（用图当参考）**：点 Imagine 栏的图片图标上传，单张最大 10MB。把图拖到提示词不同位置作用不同：",
            },
            {
              kind: "list",
              items: [
                "当 **Image Prompt（图片提示词）**：影响内容、构图、配色",
                "当 **Style Reference（`--sref`）**：只学风格，不学内容",
                "当 **Omni Reference（`--oref`）**：参考人物长相或物体形态",
                "当**首帧**：直接图生视频（`--video`）",
              ],
            },
            {
              kind: "note",
              text: "想省 Fast 时间，Standard 及以上可在结尾加 `--relax` 走排队不限量的 Relax 模式。",
            },
          ],
        },
        {
          title: "编辑与二次处理：放大、变体、局部重绘",
          blocks: [
            {
              kind: "text",
              text: "生成满意后，在 Creation Feed 悬停图片，或点开全屏，用这些功能继续改：",
            },
            {
              kind: "list",
              items: [
                "**U1-U4**（Discord）/ 网页里的 Upscale：单张放大、加强细节",
                "**V1-V4**：基于某一张生成 4 张变体，分 Subtle（微调）和 Strong（大改）",
                "**Vary Region**：框选局部（换衣服颜色、去掉杂物）后重绘",
                "**Editor**：在网页里涂抹、外扩、改文字",
                "**Animate / `--video`**：把静态图变成几秒的短视频",
              ],
            },
            {
              kind: "text",
              text: "网页版**下载的图片本身没有平台水印**，可直接使用。要抠图、加字幕、配乐，就把图导出后丢进剪映、Photoshop 或 Canva 继续加工。",
            },
            {
              kind: "warn",
              text: "放大和变体都会消耗 Fast GPU 时间。Basic 档只有 3.3 小时，反复抽卡会很快见底。",
            },
          ],
        },
        {
          title: "作品管理与下载",
          blocks: [
            {
              kind: "text",
              text: "所有作品都在 **Organize 页面**，可按时间、评分、收藏筛选，也能建文件夹归类。",
            },
            {
              kind: "list",
              items: [
                "分辨率：基础约 1024px；`--hd` 可出 2048px 高清图，Standard 及以上还支持 HD 视频",
                "格式：默认下载 PNG",
                "想复现：在全屏图的 More Options 里复制 **Job ID / seed / 提示词**，同 seed 能还原构图",
                "删除的图会进回收站，仍可在 Organize 页面找回",
              ],
            },
            {
              kind: "note",
              text: "换电脑、换浏览器都不影响，作品和订阅都绑定在账号上；Discord 里生成的图也会同步到网页版。",
            },
          ],
        },
        {
          title: "商用与版权说明",
          blocks: [
            {
              kind: "text",
              text: "**只要订阅过，你就拥有所生成图片 / 视频的使用权**，可用于广告、商品图、视频素材等商业项目。",
            },
            {
              kind: "list",
              items: [
                "Basic / Standard / Pro / Mega 都含通用商业条款",
                "年营收超过 **100 万美元**的公司，必须使用 Pro 或 Mega 档",
                "**Stealth（隐私）模式**只有 Pro / Mega 有：作品不出现在公开画廊，适合客户保密项目",
                "Basic / Standard 的作品默认公开可见",
              ],
            },
            {
              kind: "warn",
              text: "具体授权条款以官网 Terms of Service 为准；涉及品牌、真人肖像、商标的素材请自行确认授权，平台不替你承担侵权风险。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Ctrl/Cmd + Enter`：出图后保留提示词，方便马上再改再跑",
                "提示词记成公式：**主体 + 场景 + 材质 + 光影 + 画风 + 参数**",
                "想快速试方向用 `--draft`，成本减半、速度更快",
                "拿别人的图当风格：上传后加 `--sref <图片链接>`",
                "做同一系列：先固定 seed，再只改主体词",
                "善用 `--relax`（Standard 以上）省 Fast 时间",
                "Discord 里 `/imagine` 可开 Remix 模式，边看别人的图边改参数",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "提示词公式（复制即用）",
          desc: "把每一项替换成你的内容，按顺序拼起来，末尾接参数。",
          code: `[主体] + [场景/环境] + [材质/细节] + [光影] + [画风/镜头] + [参数]

示例：
a lone lighthouse on a cliff at dusk, weathered stone, dramatic clouds,
cinematic composition, soft golden rim light, painterly concept art
--ar 3:2 --stylize 200`,
        },
        {
          path: "Midjourney 常用参数速查",
          desc: "参数写在提示词末尾，破折号前留一个空格。",
          code: `--ar 16:9          画幅比例（横 / 竖 / 方）
--stylize 100      艺术化强度 0-1000（简写 --s）
--style raw        更写实、更贴合提示词
--chaos 20         4 张图差异度 0-100（简写 --c）
--no text          排除元素
--seed 12345       固定种子，便于复现
--sref <url>       风格参考图
--oref <url>       人物 / 物体形态参考
--v 7              模型版本
--q 2              细节质量（更慢更细）
--tile             无缝贴图
--relax / --fast   排队不限量 / 快速模式
--hd               2048px 高清图`,
        },
        {
          path: "订阅档位对比（按月）",
          desc: "价格与权益以官方账号页为准，年付可省约 20%。",
          code: `Basic     $10/月   3.3h Fast GPU · SD 视频 · 无 Relax
Standard  $30/月   15h Fast GPU · Relax 无限出图 · SD/HD 视频
Pro       $60/月   30h Fast GPU · Relax 无限 · Stealth 隐私
Mega      $120/月  60h Fast GPU · 全部高级功能

额外 Fast 时间约 $4/小时
取消：Manage Subscription 页面 → Cancel Plan`,
        },
      ],
      troubles: [
        {
          problem: "国内打不开 midjourney.com 或 Discord",
          fix: "这两个域名国内都无法直连，属于网络问题，不是账号问题。先切换到可访问外网的网络环境，再重新打开；第 2、3 步的登录和支付也要在同样网络下进行。",
        },
        {
          problem: "订阅时信用卡被拒、扣款失败",
          fix: "换一张支持境外扣款的 Visa / Mastercard 信用卡再试；确认卡内额度充足、已开通境外支付，账单地址填写完整。连续失败可隔一天再试，避免触发风控。",
        },
        {
          problem: "生成一直卡在排队 / Fast 时间用光了",
          fix: "要么是同一时间的任务数达到上限（队列满），要么是 Fast GPU 时间耗尽。等到队列空出来，或在提示词末尾加 `--relax` 走不限量的 Relax 模式（Basic 档不支持 Relax）。",
        },
        {
          problem: "提示词被拒绝：报错或被判违规",
          fix: "常见于真人姓名、名人肖像、知名 IP 角色、暴力或敏感内容。改成泛指描述（如「一个微笑的女孩」而不是具体人名），去掉品牌名和版权角色，再重新提交。",
        },
        {
          problem: "Discord 里 /imagine 指令没反应或找不到命令",
          fix: "确认你是**在 Midjourney 官方服务器里**、并且已经通过 `/subscribe` 订阅。若命令列表为空，在频道输入框打 `/` 看有没有 imagine；没有就重新授权一次 Discord 登录，或直接在网页版出图。",
        },
        {
          problem: "画面崩坏：手指多、五官歪、结构错乱",
          fix: "精简提示词、别一次塞太多元素；加上 `--style raw` 更写实，把 `--stylize` 调低到 100 左右；人物类加 `--no hands` 规避；实在不行就出图后用 Vary Region 局部重绘问题区域。",
        },
      ],
      cost: "Midjourney **没有免费版**，必须先订阅：Basic $10/月、Standard $30/月、Pro $60/月、Mega $120/月（年付约省 20%）。订阅内附 Fast GPU 时间（Basic 3.3 小时到 Mega 60 小时不等），用完后 Standard 及以上可切 Relax 不限量模式；额外 Fast 时间约 $4/小时。取消在 Manage Subscription 页面点 Cancel Plan，到期前仍可继续使用。**具体价格和额度以官网为准。**",
    },
    en: {
      difficulty: "Beginner (no art background needed)",
      os: "Web (midjourney.com) + Discord (desktop / web / mobile app)",
      prereq: [
        {
          label: "An account (required)",
          detail:
            "Sign in at midjourney.com with a Google or Discord account — no phone number needed. You can link Discord later; the web app and Discord share one subscription.",
        },
        {
          label: "A paid plan (required)",
          detail:
            "Midjourney has **no free tier** — you cannot generate anything without subscribing. The cheapest plan, Basic, starts at $10/month.",
        },
        {
          label: "Network",
          detail:
            "midjourney.com and Discord are not directly reachable from mainland China. Have a working connection to them ready, or signup, payment and generation will all fail.",
        },
        {
          label: "A browser",
          detail:
            "A recent Chrome / Edge / Safari gives you the full-featured web app, which is the best starting point. Discord suits people who prefer a chat-style workspace.",
        },
        {
          label: "A payment card",
          detail:
            "Subscriptions require a card that accepts international charges (Visa / Mastercard). Some domestic debit cards are declined, so check yours in advance.",
        },
      ],
      steps: [
        {
          title: "Open the right entry point: web first, Discord as backup",
          blocks: [
            {
              kind: "text",
              text: "Midjourney now **leads with its web app**. Open [midjourney.com](https://www.midjourney.com) in a browser and click **Log In** in the top right. The generate page is `midjourney.com/imagine` (the Create page).",
            },
            {
              kind: "text",
              text: "You can also work inside Discord: join the official server, open any `#newbies` channel, and type the `/imagine` command. Both share the same account and quota.",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/workspace.svg",
              caption: "The web Create page: Imagine bar on top, creation grid in the middle, nav on the left",
            },
            {
              kind: "list",
              items: [
                "**Web** — `midjourney.com` → log in → Create page; the clearest interface for beginners",
                "**Discord** — `discord.gg/midjourney` → a `#newbies` channel → type `/imagine`",
                "Your subscription works in both places at once",
              ],
            },
            {
              kind: "warn",
              text: "Stick to `midjourney.com` and the official Discord. Third-party \"mirror sites\", \"top-up resellers\" and cheap shared accounts break the Terms of Service and can get your account banned — **do not buy them**.",
            },
          ],
        },
        {
          title: "Sign up and log in",
          blocks: [
            {
              kind: "text",
              text: "Clicking Log In gives you two options: **a Google account** or **a Discord account**. Neither requires a phone number.",
            },
            {
              kind: "list",
              items: [
                "**Sign in with Google** — email and password, the fastest route",
                "**Sign in with Discord** — log into Discord in the browser, then approve the authorization",
                "Pick one entry point and stay consistent so you don't accidentally buy two subscriptions",
              ],
            },
            { kind: "note", text: "Logging in itself is free. You only get to generate after subscribing." },
            {
              kind: "warn",
              text: "midjourney.com is not directly reachable from mainland China. A spinning login page or an error is usually a network issue; fix that first, since the same cause breaks payment in step 3.",
            },
          ],
        },
        {
          title: "Subscribe (there is no free tier)",
          blocks: [
            {
              kind: "text",
              text: "After logging in, open `Manage Subscription` on your account page and pick a plan. **Every plan is a subscription that renews monthly or yearly**; annual billing pays the full year upfront for roughly 20% off.",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/pricing.svg",
              caption: "Four tiers: Basic / Standard / Pro / Mega — see the account page for current prices",
            },
            {
              kind: "list",
              items: [
                "**Basic $10/mo** — 3.3 hr of Fast GPU time, good for trying it out",
                "**Standard $30/mo** — 15 hr Fast plus unlimited images in Relax mode; the best value",
                "**Pro $60/mo** — 30 hr Fast plus Stealth (private) mode",
                "**Mega $120/mo** — 60 hr Fast, for heavy users",
              ],
            },
            {
              kind: "text",
              text: "Payment is charged to a credit card (Visa / Mastercard). To **cancel**, click `Cancel Plan` on the `Manage Subscription` page — you keep access until the end of the current billing cycle.",
            },
            {
              kind: "warn",
              text: "Without an active subscription, typing into the Imagine bar does nothing and no images appear. If you see a subscribe prompt, payment hasn't gone through yet.",
            },
          ],
        },
        {
          title: "Tour the UI: three parts of the Create page",
          blocks: [
            {
              kind: "text",
              text: "Everything centres on the Create page, split into three areas:",
            },
            {
              kind: "list",
              items: [
                "**Imagine bar (top)** — where you type prompts; the Imagine send button and a settings gear sit on its right",
                "**Creation feed (middle)** — live generations and your history; hovering an image reveals like, variation and video shortcuts",
                "**Left nav** — Create, Organize, Personalize, Search, Tasks",
                "**Organize page** — all your work in one place: sort, filter, group into folders, batch download",
              ],
            },
            {
              kind: "text",
              text: "Clicking any image opens it fullscreen with a toolbar to copy the prompt, Job ID, seed and image URL.",
            },
            {
              kind: "note",
              text: "In Discord, `/settings` adjusts the same defaults as the gear icon on the web.",
            },
          ],
        },
        {
          title: "Your first image: a full prompt, explained",
          blocks: [
            { kind: "text", text: "Paste this into the Imagine bar and press enter. It generates **four images** at once." },
            {
              kind: "code",
              lang: "text",
              code: "a lone lighthouse on a cliff at dusk, weathered stone, dramatic clouds, cinematic composition, soft golden rim light, painterly concept art --ar 3:2 --stylize 200",
              caption: "A complete prompt you can copy",
            },
            { kind: "text", text: "Here is why each part is there:" },
            {
              kind: "list",
              items: [
                "**a lone lighthouse on a cliff at dusk** — subject + setting + time; earlier words carry more weight",
                "**weathered stone** — material detail, makes it look real",
                "**dramatic clouds** — atmosphere so the frame isn't empty",
                "**cinematic composition** — the framing style (film-like)",
                "**soft golden rim light** — lighting; warm rim light sets the mood",
                "**painterly concept art** — the art style (thick-painted concept art)",
                "**--ar 3:2** — aspect ratio; a wide frame suits landscapes",
                "**--stylize 200** — artistic strength; too low looks literal, too high looks generic AI",
              ],
            },
            {
              kind: "output",
              text: "Within ~10-20 seconds four blurry previews appear in the creation feed, then sharpen to 100%.",
            },
            {
              kind: "note",
              text: "English prompts are the most reliable. Chinese occasionally works but is inconsistent — translate first if unsure.",
            },
          ],
        },
        {
          title: "Parameters and advanced tricks",
          blocks: [
            {
              kind: "text",
              text: "Parameters go at the end of the prompt as `--name value`. **Keep one space before the dashes and no commas or periods inside a parameter.**",
            },
            {
              kind: "shot",
              src: "/shots/midjourney/params.svg",
              caption: "The settings panel behind the gear icon, plus the common parameters",
            },
            {
              kind: "list",
              items: [
                "`--ar 16:9` aspect ratio; `--stylize 0-1000` (or `--s`) artistic strength",
                "`--style raw` — more literal, fewer default beautifications",
                "`--chaos 0-100` (or `--c`) — higher means the four images differ more",
                "`--no text, watermark` — exclude elements you don't want",
                "`--seed 12345` — fix the randomness so you can tweak a prompt without losing the composition",
                "`--tile` — seamless tiling; `--q 2` — more detail (slower)",
                "`--v 7` — switch model version; `--niji` — an anime / Eastern-aesthetics model",
              ],
            },
            {
              kind: "text",
              text: "**Reference images**: click the image icon in the Imagine bar (max 10MB per image). Where you drop it changes what it does:",
            },
            {
              kind: "list",
              items: [
                "As an **Image Prompt** — influences content, composition, colour",
                "As a **Style Reference (`--sref`)** — copies the look, not the content",
                "As an **Omni Reference (`--oref`)** — references a person's likeness or an object's form",
                "As a **first frame** — turns it into a video (`--video`)",
              ],
            },
            {
              kind: "note",
              text: "To save Fast time, Standard and above can add `--relax` to use unlimited (queued) Relax mode.",
            },
          ],
        },
        {
          title: "Edit and refine: upscale, variations, inpainting",
          blocks: [
            {
              kind: "text",
              text: "Once a result looks good, hover it in the feed or open it fullscreen and keep working with:",
            },
            {
              kind: "list",
              items: [
                "**U1-U4** (Discord) / Upscale (web) — enlarge a single image and add detail",
                "**V1-V4** — four variations of one image, in Subtle or Strong flavours",
                "**Vary Region** — select part of the image (change a colour, remove clutter) and repaint it",
                "**Editor** — paint, outpaint and edit text in the browser",
                "**Animate / `--video`** — turn a still into a short clip",
              ],
            },
            {
              kind: "text",
              text: "Images you **download from the web app carry no platform watermark** and are ready to use. For cutouts, captions or music, export and finish in CapCut, Photoshop or Canva.",
            },
            {
              kind: "warn",
              text: "Upscales and variations spend Fast GPU time. Basic has only 3.3 hours, so repeated re-rolls run out fast.",
            },
          ],
        },
        {
          title: "Managing and downloading your work",
          blocks: [
            {
              kind: "text",
              text: "Everything lives on the **Organize page**, filterable by date, rating and favourites, and groupable into folders.",
            },
            {
              kind: "list",
              items: [
                "Resolution: roughly 1024px by default; `--hd` produces 2048px, and Standard and above also support HD video",
                "Format: PNG by default",
                "To reproduce a look, copy the **Job ID / seed / prompt** from More Options on the fullscreen image; the same seed restores the composition",
                "Deleted images go to the trash and can still be recovered from the Organize page",
              ],
            },
            {
              kind: "note",
              text: "Switching computers or browsers changes nothing — work and subscription are tied to your account, and Discord generations sync to the web app too.",
            },
          ],
        },
        {
          title: "Commercial use and copyright",
          blocks: [
            {
              kind: "text",
              text: "**Once you have subscribed at any point, you own the right to use the images / videos you made**, including in commercial projects such as ads, product shots and video assets.",
            },
            {
              kind: "list",
              items: [
                "Basic / Standard / Pro / Mega all include the general commercial terms",
                "Companies earning **over $1,000,000 USD** per year must use Pro or Mega",
                "**Stealth (private) mode** is Pro / Mega only — your work stays out of the public gallery, useful for client work under NDA",
                "Basic / Standard work is public by default",
              ],
            },
            {
              kind: "warn",
              text: "The exact terms live in the official Terms of Service. For anything involving brands, real people's likeness or trademarks, confirm the rights yourself — the platform does not absorb that risk for you.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "`Ctrl/Cmd + Enter` — keep the prompt in the bar after generating, for quick tweaks",
                "Remember the formula: **subject + setting + material + lighting + style + parameters**",
                "Use `--draft` to test directions fast at half the cost",
                "Borrow a style: upload an image and add `--sref <image-url>`",
                "For a consistent series: fix the seed, then change only the subject words",
                "Use `--relax` (Standard+) to save Fast time",
                "In Discord, `/imagine` supports Remix mode to tweak parameters while viewing others' work",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Prompt formula (copy and use)",
          desc: "Replace each slot with your own content, join them in order, then append parameters.",
          code: `[subject] + [setting] + [material/detail] + [lighting] + [style/lens] + [parameters]

Example:
a lone lighthouse on a cliff at dusk, weathered stone, dramatic clouds,
cinematic composition, soft golden rim light, painterly concept art
--ar 3:2 --stylize 200`,
        },
        {
          path: "Midjourney parameter cheat sheet",
          desc: "Parameters go at the end of the prompt, with a space before the dashes.",
          code: `--ar 16:9          aspect ratio (wide / tall / square)
--stylize 100      artistic strength 0-1000 (alias --s)
--style raw        more literal, fewer beautifications
--chaos 20         how much the 4 images differ, 0-100 (alias --c)
--no text          exclude elements
--seed 12345       fix the seed for reproducibility
--sref <url>       style reference image
--oref <url>       person / object form reference
--v 7              model version
--q 2              detail quality (slower, finer)
--tile             seamless tiling
--relax / --fast   unlimited queued / fast mode
--hd               2048px high-res images`,
        },
        {
          path: "Plan comparison (monthly)",
          desc: "Prices and benefits are set by the official account page; annual billing saves about 20%.",
          code: `Basic     $10/mo   3.3h Fast GPU · SD video · no Relax
Standard  $30/mo   15h Fast GPU · unlimited Relax images · SD/HD video
Pro       $60/mo   30h Fast GPU · unlimited Relax · Stealth mode
Mega      $120/mo  60h Fast GPU · all premium features

Extra Fast time is about $4/hour
Cancel: Manage Subscription page -> Cancel Plan`,
        },
      ],
      troubles: [
        {
          problem: "midjourney.com or Discord won't load from mainland China",
          fix: "Neither domain is directly reachable there — it's a network issue, not an account one. Switch to a connection with access, then reopen; steps 2 and 3 (login and payment) need the same connection.",
        },
        {
          problem: "The card is declined or payment fails",
          fix: "Try a different Visa / Mastercard that accepts international charges, make sure it has headroom and international payments enabled, and fill in a complete billing address. On repeated failures, wait a day to avoid triggering fraud checks.",
        },
        {
          problem: "Generations stuck in the queue / Fast time used up",
          fix: "Either you've hit the concurrent-job limit (queue full) or your Fast GPU hours are exhausted. Wait for the queue to clear, or add `--relax` to the prompt for unlimited Relax mode (Basic doesn't include Relax).",
        },
        {
          problem: "The prompt is rejected or flagged",
          fix: "Usually caused by real names, celebrity likenesses, copyrighted characters, violence or sensitive terms. Rewrite it generically (e.g. \"a smiling girl\" instead of a specific person), drop brand names and copyrighted characters, and resubmit.",
        },
        {
          problem: "/imagine does nothing in Discord, or the command is missing",
          fix: "Confirm you are **inside the official Midjourney server** and have subscribed via `/subscribe`. If the command list is empty, type `/` in the box to check for imagine; if it's absent, re-authorize your Discord login or just generate in the web app.",
        },
        {
          problem: "Broken output: extra fingers, warped faces, garbled structure",
          fix: "Trim the prompt — too many elements at once causes chaos. Add `--style raw`, lower `--stylize` to around 100, exclude problem areas with `--no hands`, and repaint the affected region with Vary Region if needed.",
        },
      ],
      cost: "Midjourney has **no free tier** — you must subscribe: Basic $10/mo, Standard $30/mo, Pro $60/mo, Mega $120/mo (annual saves about 20%). Each plan bundles Fast GPU time (3.3 hours on Basic up to 60 on Mega); once used, Standard and above can switch to unlimited Relax mode, and extra Fast time costs about $4/hour. Cancel via `Cancel Plan` on the Manage Subscription page and you keep access until the cycle ends. **Check the official site for current prices and quotas.**",
    },
  },

  jimeng: {
    zh: {
      difficulty: "入门（不需要美术基础）",
      os: "网页（jimeng.jianying.com）+ iOS / Android App（应用商店搜「即梦」）",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "用**抖音账号**扫码登录，或用**手机号 + 验证码**注册登录，国内手机号即可。即梦是字节跳动旗下的产品，和抖音、剪映同一套账号体系。",
        },
        {
          label: "网络环境",
          detail: "国内可直连，无需外网。用家里或手机流量都能正常访问官网和 App。",
        },
        {
          label: "付费要求",
          detail:
            "免费也能用：新用户有赠送额度，每日登录还能领取积分。但免费额度有限、导出可能带水印，要更高清、更长时长和商业授权就开会员。",
        },
        {
          label: "设备",
          detail:
            "电脑用 Chrome / Edge 浏览器访问网页版，手机装 App 也行。同一账号多端同步，网页版和 App 用同一个账号登录即可。",
        },
        {
          label: "素材（做图生视频时）",
          detail:
            "图生视频需要先准备一张**首帧图片**，可以直接用即梦生成的图，也可以上传本地照片。",
        },
      ],
      steps: [
        {
          title: "打开官网或下载 App",
          blocks: [
            {
              kind: "text",
              text: "浏览器打开 [jimeng.jianying.com](https://jimeng.jianying.com) 就是网页版；手机在应用商店搜「**即梦**」下载 App。两端功能基本一致，数据实时同步。",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/site.png",
              caption: "即梦 AI 官网：一站式 AI 图片 / 视频创作平台",
            },
            {
              kind: "note",
              text: "认准网址 `jimeng.jianying.com`（或 App 里的官方应用）。市面上有很多名字相近的「镜像站」，功能和账号都不通用，不要在上面填账号密码。",
            },
          ],
        },
        {
          title: "注册与登录",
          blocks: [
            {
              kind: "text",
              text: "点右上角登录，两种方式：**抖音 App 扫码**，或**手机号 + 验证码**。",
            },
            {
              kind: "list",
              items: [
                "**抖音扫码**：手机打开抖音 → 扫一扫 → 确认授权，最快",
                "**手机号登录**：输入国内手机号 → 收验证码 → 登录",
                "首次登录可能需要绑定手机号，按提示做即可",
              ],
            },
            {
              kind: "note",
              text: "新用户通常有注册赠送额度，之后每天登录还能在活动页领取积分，够日常练手。",
            },
          ],
        },
        {
          title: "会员与积分：在哪升级、怎么计费",
          blocks: [
            {
              kind: "text",
              text: "即梦采用「**免费额度 + 会员订阅**」。头像菜单或首页右上角进会员页，能看到各档会员的价格和每月积分。",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/workspace.svg",
              caption: "左侧是功能入口，输入中文提示词即可生成；右下角显示剩余积分",
            },
            {
              kind: "list",
              items: [
                "**免费**：每日登录领积分，够生成基础图片 / 短时长视频",
                "**会员（多档）**：每月更多积分、去水印、更长视频时长、更高清导出、优先算力",
                "扣款方式：支付宝 / 微信支付，国内直接扫码即可",
              ],
            },
            {
              kind: "text",
              text: "**取消 / 续费**：在会员页面管理自动续费，可随时关闭，关闭后当期权益到期才失效。",
            },
            {
              kind: "warn",
              text: "不同档位的积分额度、去水印和商用授权范围不一样，具体价格与权益**以官网会员页为准**，别只看第三方的宣传数字。",
            },
          ],
        },
        {
          title: "界面导览",
          blocks: [
            {
              kind: "text",
              text: "左侧是功能区，主区是创作面板，大致分这几块：",
            },
            {
              kind: "list",
              items: [
                "**图片生成**：文本绘图，输入中文提示词出图",
                "**视频生成**：文生视频 / 图生视频",
                "**智能画布**：局部重绘、扩图、消除等编辑工具",
                "**数字人**：用照片 + 文案生成口播视频",
                "**我的作品**：所有历史作品，可下载、删除、重新编辑",
              ],
            },
            {
              kind: "text",
              text: "创作者面板上方是提示词输入框，下面是**模型、比例、精细度**等设置，点「**立即生成**」开始出图。",
            },
          ],
        },
        {
          title: "第一次生成：用中文提示词出图",
          blocks: [
            {
              kind: "text",
              text: "在图片生成面板的输入框里粘贴下面这句，点「立即生成」。",
            },
            {
              kind: "code",
              lang: "text",
              code: "一只戴草帽的橘猫坐在木窗台上，午后阳光斜照，暖色调，胶片颗粒质感，治愈系插画，画面干净",
              caption: "完整可复制的中文提示词",
            },
            {
              kind: "text",
              text: "逐段拆解它为什么这么写：",
            },
            {
              kind: "list",
              items: [
                "**一只戴草帽的橘猫** —— 主体，要具体（什么动物、有什么特征）",
                "**坐在木窗台上** —— 场景和动作，交代「在哪、在干嘛」",
                "**午后阳光斜照** —— 光影，决定画面的氛围和明暗",
                "**暖色调** —— 色调倾向",
                "**胶片颗粒质感** —— 材质 / 出片风格",
                "**治愈系插画** —— 画风，一句话锁定整体观感",
                "**画面干净** —— 负向约束，避免元素堆太满",
              ],
            },
            {
              kind: "output",
              text: "几秒到十几秒后出 4 张候选图，点开可放大、下载或继续编辑。",
            },
            {
              kind: "note",
              text: "即梦对**中文提示词**支持很好，直接用中文描述即可，不需要先翻译成英文。",
            },
          ],
        },
        {
          title: "进阶：图生视频、中文运镜与画布编辑",
          blocks: [
            {
              kind: "text",
              text: "对生成结果满意后，最常用的进阶玩法是**把图变成视频**：进「视频生成」，选「图生视频」，上传或从结果里选一张图当首帧。",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/video.svg",
              caption: "图生视频面板：上传首帧图 + 写运镜和动作 + 选时长 / 比例 + 生成视频",
            },
            {
              kind: "list",
              items: [
                "**首帧图**：决定视频开场画面，一般用自己刚生成的图",
                "**运镜 / 动作描述**：用中文写，如「镜头缓慢推近，头发被风轻轻吹动」",
                "**时长 / 比例**：免费档时长更短，会员可出更长片段",
                "**智能画布**：局部重绘、扩图、消除多余物体",
                "**对口型 / 数字人**：让人物开口说话，适合口播类视频",
              ],
            },
            {
              kind: "note",
              text: "视频提示词重点是写「**怎么动**」——镜头怎么移动、主体做什么动作、光线怎么变化，而不是重复描述画面里已有的东西。",
            },
          ],
        },
        {
          title: "编辑与二次处理：去水印、接剪映",
          blocks: [
            {
              kind: "text",
              text: "即梦和剪映（CapCut 国内版）是同一家公司，**和剪映联动非常顺**。",
            },
            {
              kind: "list",
              items: [
                "图片可在画布里扩图、局部重绘、消除后再导出",
                "免费导出可能带水印，**会员可导出无水印**版本",
                "把生成的视频 / 图片下载后，直接导入**剪映**加字幕、配乐、转场",
                "App 和网页版的素材库同步，可跨端继续编辑",
              ],
            },
            {
              kind: "warn",
              text: "去水印属于会员权益，别用第三方「去水印工具」处理并对外发布，既可能侵权也影响观感，开会员导出无水印版最省事。",
            },
          ],
        },
        {
          title: "作品管理与下载",
          blocks: [
            {
              kind: "text",
              text: "所有生成记录都在左侧「**我的作品**」里，按时间排列，可筛选图片 / 视频。",
            },
            {
              kind: "list",
              items: [
                "分辨率：会员档支持更高清导出（具体规格以官网为准）",
                "格式：图片常见 PNG / JPG，视频常见 MP4",
                "可单个或批量下载，也能直接「再次编辑」复用原参数",
                "删除的作品通常有回收站缓冲，误删可及时找回",
              ],
            },
            {
              kind: "note",
              text: "多端同步：手机 App 生成的作品，用同一账号在网页版也能看到并下载。",
            },
          ],
        },
        {
          title: "商用与版权说明",
          blocks: [
            {
              kind: "text",
              text: "生成的图片 / 视频可以自用。用于**商业用途**（带货、广告、账号变现等）时，建议使用含商用授权的会员档位。",
            },
            {
              kind: "list",
              items: [
                "免费额度产出的内容，商用授权范围有限",
                "会员档位通常包含更明确的商用授权，具体范围见会员页说明",
                "涉及真人肖像、品牌商标、明星形象的素材，需自行确认授权",
              ],
            },
            {
              kind: "warn",
              text: "商用授权范围、是否可商用、是否需要额外署名，**以即梦官网的会员说明和用户协议为准**，涉及正式商业项目前请再核对一次。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "中文提示词公式：**主体 + 动作 / 场景 + 光影 + 色调 + 风格 + 约束**",
                "每天登录领积分，长期创作先攒够免费额度再决定开不开会员",
                "先出图，满意的图直接「生成视频」，比纯文生视频更可控",
                "用「智能画布」做局部修改，避免整张重抽浪费积分",
                "做系列内容时复制上一条提示词，只改主体词",
                "视频提示词多写运镜和动作，少重复画面描述",
                "导出前确认是会员无水印版，再拿去做二次剪辑",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "即梦中文提示词模板（图片）",
          desc: "按顺序替换内容即可，即梦对中文支持很好，不需要翻译成英文。",
          code: `[主体] + [动作/场景] + [光影] + [色调] + [风格] + [约束]

示例：
一只戴草帽的橘猫坐在木窗台上，午后阳光斜照，暖色调，
胶片颗粒质感，治愈系插画，画面干净`,
        },
        {
          path: "即梦视频（图生视频）提示词模板",
          desc: "重点是描述「怎么动」，而不是重复画面里已经有的东西。",
          code: `[首帧图] + 镜头运动 + 主体动作 + 光线/氛围变化

示例：
首帧：女孩站在窗边
运镜：镜头缓慢推近，轻微的呼吸感
动作：女孩的头发被风轻轻吹动
氛围：光线由冷转暖`,
        },
        {
          path: "会员档位与积分（速览）",
          desc: "各档价格、积分与权益以官网会员页为准；下面只是帮助你理解结构。",
          code: `免费档    每日登录领积分 · 基础图片/短视频 · 导出可能带水印
会员（多档）每月更多积分 · 去水印 · 更长视频 · 更高清导出 · 优先算力

扣款：支付宝 / 微信支付
取消：会员页关闭自动续费，当期权益到期失效`,
        },
      ],
      troubles: [
        {
          problem: "提示「积分不足」无法生成",
          fix: "免费积分按天领取、用完当天不再补。等次日登录领取，或开通会员获取每月积分；也可以在生成前把「时长 / 精细度」调低，减少单次消耗。",
        },
        {
          problem: "生成排队很久 / 一直转圈",
          fix: "高峰期（晚上）算力紧张会排队。可以错峰使用，或用会员的优先算力通道。网络异常也会导致卡住，换网络或刷新页面重试。",
        },
        {
          problem: "提示词被拒：涉及敏感内容",
          fix: "真人姓名、名人形象、知名 IP 角色、暴力或擦边内容会被拦截。改成泛指描述、去掉品牌和版权角色，再重新提交。",
        },
        {
          problem: "导出的图 / 视频有水印",
          fix: "免费档导出默认可带水印。开通会员后导出无水印版本；不要用第三方去水印工具对外发布，以免侵权。",
        },
        {
          problem: "画面崩坏：手指多、五官歪",
          fix: "精简提示词、减少同时出现的元素；在「智能画布」里对问题区域做局部重绘；人物类可加「画面干净、五官清晰」等约束词。",
        },
        {
          problem: "登录不了 / 扫码没反应",
          fix: "确认抖音或手机号能正常登录；扫码失败就改用手机号验证码登录。App 端清缓存重进，网页端换 Chrome / Edge 浏览器再试。",
        },
      ],
      cost: "即梦采用「**免费额度 + 会员订阅**」模式：免费档每天登录可领积分，够基础图片和短视频；会员分多档，包含每月更多积分、去水印、更长视频时长、更高清导出和优先算力，用支付宝 / 微信支付扣款，可随时关闭自动续费。各档价格、积分额度和商用授权范围**以即梦官网会员页为准**。",
    },
    en: {
      difficulty: "Beginner (no art background needed)",
      os: "Web (jimeng.jianying.com) + iOS / Android app (search \"即梦\" in your app store)",
      prereq: [
        {
          label: "An account (required)",
          detail:
            "Sign in by scanning with your **Douyin account**, or register with a **phone number + verification code** (a mainland China number works). Jimeng is a ByteDance product, sharing the account system with Douyin and CapCut (Jianying).",
        },
        {
          label: "Network",
          detail: "Works directly inside mainland China — no VPN needed, on home broadband or mobile data alike.",
        },
        {
          label: "Paid tier",
          detail:
            "Free usage is available: new users get bonus credits and daily logins grant more. But free quotas are limited and exports may be watermarked — a membership unlocks HD, longer clips and commercial licensing.",
        },
        {
          label: "A device",
          detail:
            "Use Chrome / Edge for the web app, or install the mobile app. One account syncs across devices, so the web app and app see the same work.",
        },
        {
          label: "An input image (for image-to-video)",
          detail:
            "Image-to-video needs a **first-frame image** — use one Jimeng generated, or upload a photo from your device.",
        },
      ],
      steps: [
        {
          title: "Open the site or install the app",
          blocks: [
            {
              kind: "text",
              text: "Open [jimeng.jianying.com](https://jimeng.jianying.com) in a browser for the web app, or search \"**即梦**\" in your phone's app store. The two have essentially the same features and sync in real time.",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/site.png",
              caption: "The Jimeng AI site: an all-in-one image and video creation platform",
            },
            {
              kind: "note",
              text: "Stick to `jimeng.jianying.com` (or the official app). Many similarly named \"mirror\" sites exist; they share neither features nor accounts, so never enter your credentials there.",
            },
          ],
        },
        {
          title: "Sign up and log in",
          blocks: [
            {
              kind: "text",
              text: "Click Log in in the top right. Two options: **scan with the Douyin app**, or **phone number + verification code**.",
            },
            {
              kind: "list",
              items: [
                "**Douyin scan** — open Douyin, tap Scan, confirm the authorization; the fastest route",
                "**Phone number** — enter your number, receive the code, log in",
                "The first login may ask you to bind a phone number; just follow the prompt",
              ],
            },
            {
              kind: "note",
              text: "New users usually get signup credits, and there are daily login rewards — enough for casual practice.",
            },
          ],
        },
        {
          title: "Membership and credits: where to upgrade, how billing works",
          blocks: [
            {
              kind: "text",
              text: "Jimeng uses a **free quota + membership** model. Open the member page from the avatar menu or the top-right button to see each tier's price and monthly credits.",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/workspace.svg",
              caption: "Feature entries on the left, type a Chinese prompt to generate; credits shown bottom-left",
            },
            {
              kind: "list",
              items: [
                "**Free** — daily login credits, enough for basic images and short videos",
                "**Membership (several tiers)** — more monthly credits, watermark removal, longer videos, HD export, priority compute",
                "Payment: Alipay / WeChat Pay, scanned directly from within China",
              ],
            },
            {
              kind: "text",
              text: "To **cancel or renew**, manage auto-renewal on the member page; you can turn it off anytime and keep the current period's benefits until they expire.",
            },
            {
              kind: "warn",
              text: "Credits, watermark removal and commercial licences differ by tier. **Check the official member page for prices and benefits** rather than third-party marketing numbers.",
            },
          ],
        },
        {
          title: "Tour the UI",
          blocks: [
            {
              kind: "text",
              text: "Features sit on the left; the main area is the creation panel, roughly:",
            },
            {
              kind: "list",
              items: [
                "**Image generation** — text-to-image from a Chinese prompt",
                "**Video generation** — text-to-video / image-to-video",
                "**Smart canvas** — inpainting, outpainting, object removal and more",
                "**Digital human** — turn a photo plus a script into a talking-head video",
                "**My work** — all history, downloadable, deletable, re-editable",
              ],
            },
            {
              kind: "text",
              text: "At the top of the panel is the prompt box; below it are settings for **model, aspect ratio and detail**, and the **Generate** button starts the run.",
            },
          ],
        },
        {
          title: "Your first image: a Chinese prompt",
          blocks: [
            { kind: "text", text: "Paste this into the image-generation prompt box and click Generate." },
            {
              kind: "code",
              lang: "text",
              code: "一只戴草帽的橘猫坐在木窗台上，午后阳光斜照，暖色调，胶片颗粒质感，治愈系插画，画面干净",
              caption: "A complete prompt you can copy",
            },
            { kind: "text", text: "Why each part is there:" },
            {
              kind: "list",
              items: [
                "**一只戴草帽的橘猫 (an orange cat in a straw hat)** — the subject; be specific",
                "**坐在木窗台上 (sitting on a wooden windowsill)** — setting and action; where and doing what",
                "**午后阳光斜照 (afternoon sunlight at an angle)** — lighting; sets the mood",
                "**暖色调 (warm tones)** — colour direction",
                "**胶片颗粒质感 (film grain texture)** — material / look",
                "**治愈系插画 (healing-style illustration)** — art style, locks the overall feel",
                "**画面干净 (clean frame)** — a negative constraint to avoid clutter",
              ],
            },
            {
              kind: "output",
              text: "Within seconds to a dozen, four candidates appear; open one to enlarge, download or keep editing.",
            },
            {
              kind: "note",
              text: "Jimeng handles **Chinese prompts** well — describe in Chinese directly, no translation needed.",
            },
          ],
        },
        {
          title: "Advanced: image-to-video, motion prompts and the canvas",
          blocks: [
            {
              kind: "text",
              text: "Once a result looks good, the most common next move is **turning it into a video**: open Video generation, choose Image-to-video, and upload or pick an image as the first frame.",
            },
            {
              kind: "shot",
              src: "/shots/jimeng/video.svg",
              caption: "Image-to-video: upload a first frame, describe the motion, pick duration / ratio, generate",
            },
            {
              kind: "list",
              items: [
                "**First frame** — sets the opening shot; usually one you just generated",
                "**Motion description** — write in Chinese, e.g. \"镜头缓慢推近，头发被风轻轻吹动\"",
                "**Duration / ratio** — free tier is shorter; membership allows longer clips",
                "**Smart canvas** — inpaint, outpaint and remove unwanted objects",
                "**Lip sync / digital human** — make a character speak, great for talking-head content",
              ],
            },
            {
              kind: "note",
              text: "A video prompt should describe **how things move** — camera movement, subject action, lighting changes — not repeat what is already visible in the frame.",
            },
          ],
        },
        {
          title: "Edit and finish: watermark rules, CapCut workflow",
          blocks: [
            {
              kind: "text",
              text: "Jimeng and Jianying (the China version of CapCut) come from the same company, so **the handoff to editing is very smooth**.",
            },
            {
              kind: "list",
              items: [
                "Refine images on the canvas — outpaint, inpaint, remove — then export",
                "Free exports may be watermarked; **membership exports without a watermark**",
                "Download the clips / images and import them straight into **CapCut** for captions, music and transitions",
                "App and web share an asset library, so you can keep editing across devices",
              ],
            },
            {
              kind: "warn",
              text: "Watermark removal is a membership benefit. Don't run third-party \"de-watermark\" tools and then publish — it risks infringement and looks worse. Export the clean version with a membership instead.",
            },
          ],
        },
        {
          title: "Managing and downloading your work",
          blocks: [
            {
              kind: "text",
              text: "Every generation lives under **My work** on the left, ordered by time and filterable by image / video.",
            },
            {
              kind: "list",
              items: [
                "Resolution: membership supports higher-resolution export (see the site for exact specs)",
                "Formats: images are usually PNG / JPG, videos MP4",
                "Download individually or in bulk, or \"edit again\" to reuse the original settings",
                "Deleted items typically sit in a recycle bin briefly, so a mistake can be undone",
              ],
            },
            {
              kind: "note",
              text: "Cross-device sync: work generated on the phone app is visible and downloadable in the web app on the same account.",
            },
          ],
        },
        {
          title: "Commercial use and licensing",
          blocks: [
            {
              kind: "text",
              text: "Generated images / videos are fine for personal use. For **commercial use** (sales, ads, monetised accounts) you should use a membership tier that includes a commercial licence.",
            },
            {
              kind: "list",
              items: [
                "Content made within the free quota has limited commercial rights",
                "Membership tiers generally carry clearer commercial licensing — see the member page for scope",
                "Anything involving real people's likeness, brand trademarks or celebrity images needs rights you must verify yourself",
              ],
            },
            {
              kind: "warn",
              text: "The **scope of commercial licensing and attribution requirements are governed by Jimeng's member terms and user agreement** — re-check before a formal commercial project.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "Chinese formula: **subject + action/scene + lighting + tones + style + constraints**",
                "Claim the daily login credits; build up free quota before deciding on a membership",
                "Generate an image first, then turn the good one into a video — more controllable than pure text-to-video",
                "Use the Smart canvas for local fixes instead of re-rolling the whole image (saves credits)",
                "For a series, copy the previous prompt and change only the subject",
                "Video prompts: emphasise camera movement and action, not scene description",
                "Confirm you're exporting the membership (watermark-free) version before editing",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Jimeng Chinese prompt template (images)",
          desc: "Replace each slot in order; Jimeng handles Chinese well, so no translation needed.",
          code: `[subject] + [action/scene] + [lighting] + [tones] + [style] + [constraints]

Example:
一只戴草帽的橘猫坐在木窗台上，午后阳光斜照，暖色调，
胶片颗粒质感，治愈系插画，画面干净`,
        },
        {
          path: "Jimeng video (image-to-video) prompt template",
          desc: "Focus on describing motion, not what is already in the frame.",
          code: `[first frame] + camera movement + subject action + light/atmosphere change

Example:
First frame: a girl standing by a window
Camera: slow push-in, a faint breathing feel
Action: the girl's hair drifts in the breeze
Atmosphere: the light shifts from cool to warm`,
        },
        {
          path: "Membership tiers and credits (overview)",
          desc: "Exact prices, credits and benefits are on the official member page; this only explains the structure.",
          code: `Free        daily login credits · basic images/short videos · exports may be watermarked
Membership  more monthly credits · no watermark · longer videos · HD export · priority compute

Payment: Alipay / WeChat Pay
Cancel: turn off auto-renewal on the member page; benefits last until the period ends`,
        },
      ],
      troubles: [
        {
          problem: "It says \"insufficient credits\" and won't generate",
          fix: "Free credits are granted daily and don't refill the same day. Wait for tomorrow's login grant, or buy a membership for monthly credits. You can also lower duration / detail settings to cut the cost per run.",
        },
        {
          problem: "Long queue / endless spinner",
          fix: "Peak hours (evenings) strain compute and create queues. Off-peak is faster, and memberships include a priority channel. A flaky network can also stall it — switch networks or refresh the page.",
        },
        {
          problem: "The prompt is rejected as sensitive",
          fix: "Real names, celebrity likenesses, famous copyrighted characters and violent or suggestive content get blocked. Rewrite generically, drop brand names and copyrighted characters, and resubmit.",
        },
        {
          problem: "Exports carry a watermark",
          fix: "Free-tier exports can be watermarked by default. A membership exports a clean version. Avoid publishing output processed by third-party de-watermark tools — it risks infringement.",
        },
        {
          problem: "Broken output: extra fingers, warped faces",
          fix: "Trim the prompt — too many elements at once. Use the Smart canvas to repaint just the problem area, and for people add constraints like \"clean frame, clear facial features\".",
        },
        {
          problem: "Can't log in / scanning does nothing",
          fix: "Confirm your Douyin or phone account itself works; if scanning fails, switch to phone-number + code. Clear the app cache and reopen, or use Chrome / Edge on the web.",
        },
      ],
      cost: "Jimeng uses a **free quota + membership** model: the free tier grants daily login credits, enough for basic images and short videos; memberships come in several tiers with more monthly credits, watermark removal, longer clips, HD export and priority compute, billed via Alipay / WeChat Pay and cancellable anytime. Exact prices, credit amounts and commercial-licence scope are **subject to the official member page**.",
    },
  },

  runway: {
    zh: {
      difficulty: "入门（不需要剪辑基础）",
      os: "网页（app.runwayml.com）+ iOS App",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "用邮箱、Google 或 Apple 账号注册登录即可，不需要手机号。注册流程很轻，打开 app.runwayml.com 就能开始。",
        },
        {
          label: "网络环境",
          detail:
            "app.runwayml.com 国内无法直连，需要自备可访问外网的网络环境，否则注册和生成都会失败。",
        },
        {
          label: "付费要求",
          detail:
            "免费注册送 **125 个一次性积分**用于试玩；要持续出片就要订阅，Standard 约 $12/月起（年付）。积分按生成消耗。",
        },
        {
          label: "素材",
          detail:
            "Gen-4 / Gen-4.5 的**图生视频以图片为必填输入**，先准备好一张首帧图（自己拍的、或先用图片模型生成的都行）。",
        },
        {
          label: "支付方式",
          detail: "订阅需要支持境外扣款的信用卡（Visa / Mastercard 等），和 Midjourney 类似。",
        },
      ],
      steps: [
        {
          title: "打开官网",
          blocks: [
            {
              kind: "text",
              text: "浏览器打开 [runwayml.com](https://runwayml.com)，点右上角 **Sign up / Log in**；生成入口在 **app.runwayml.com**。",
            },
            {
              kind: "shot",
              src: "/shots/runway/site.png",
              caption: "Runway 官网：AI 视频 / 图片生成与编辑平台",
            },
            {
              kind: "note",
              text: "认准 `runwayml.com` 和 `app.runwayml.com`。第三方「镜像站」可能拿你产出的视频做二次分发，不要在上面登录。",
            },
          ],
        },
        {
          title: "注册与登录",
          blocks: [
            {
              kind: "text",
              text: "支持**邮箱注册**，或用 **Google / Apple 账号**一键登录。",
            },
            {
              kind: "list",
              items: [
                "点 Sign up 填邮箱和密码，或用 Google / Apple 直接授权",
                "不需要手机号；有些地区可能要求验证邮箱",
                "登录后进入 Dashboard（工作台），这就是创作起点",
              ],
            },
            {
              kind: "warn",
              text: "国内直连打不开，先确认网络环境。注册页转圈、验证邮件收不到，多半是网络问题。",
            },
          ],
        },
        {
          title: "订阅付费：免费积分用完后怎么续",
          blocks: [
            {
              kind: "text",
              text: "免费注册送 **125 个一次性积分**，用光即止、不按月补。要持续创作就订阅，在账号设置里选档位。",
            },
            {
              kind: "list",
              items: [
                "**Free** —— 125 一次性积分，试玩用",
                "**Standard 约 $12/月起**（年付）—— 每月 625 积分，无水印，可用全部视频/图片模型",
                "**Pro / Max** —— 每月更多积分、更多并行任务、品牌套件、声音克隆等",
                "**扣款**：信用卡（Visa / Mastercard 等）；**取消**：在账号页管理订阅即可停掉自动续费",
              ],
            },
            {
              kind: "text",
              text: "积分消耗按模型和时长算，例如同一模型 5 秒和 10 秒消耗不同，**具体单价以官网定价页为准**。",
            },
            {
              kind: "warn",
              text: "免费积分是一次性的，不是每月刷新。想省着用，先在便宜的 Turbo 模型上快速试，满意再切高级模型出片。",
            },
          ],
        },
        {
          title: "界面导览",
          blocks: [
            {
              kind: "text",
              text: "工作台左侧是工具栏，中间是预览区，右侧是生成面板，大致结构：",
            },
            {
              kind: "shot",
              src: "/shots/runway/generate.svg",
              caption: "Gen-4 图生视频面板：上传首帧图 + 写运镜提示词 + 调时长 / 分辨率 + Generate",
            },
            {
              kind: "list",
              items: [
                "**Dashboard**：工作台首页，可从这里进入生成",
                "**Tool 模式**：左侧选 Tool → 顶部 Video 选项卡 → 底部模型下拉选模型",
                "**生成面板**：模型、提示词、时长、分辨率、固定种子等设置都在这",
                "**Assets（资产）**：生成的视频默认存在 Sessions 文件夹下",
              ],
            },
          ],
        },
        {
          title: "第一次生成：图生视频，写对一段提示词",
          blocks: [
            {
              kind: "text",
              text: "进 Tool → Video，模型下拉选 **Gen-4 Turbo**（便宜、快），上传一张首帧图，再填入下面的提示词。",
            },
            {
              kind: "code",
              lang: "text",
              code: "Slow dolly push-in; the leaves rustle gently in the breeze; warm golden-hour light, soft haze; subtle dust particles drifting",
              caption: "完整可复制的视频提示词",
            },
            {
              kind: "text",
              text: "逐段拆解它为什么这么写：",
            },
            {
              kind: "list",
              items: [
                "**Slow dolly push-in** —— 运镜：机器缓慢推近（模型认专业摄影词汇最准）",
                "**the leaves rustle gently in the breeze** —— 主体动作：树叶被风吹动，画面「动起来」",
                "**warm golden-hour light, soft haze** —— 光影氛围：暖色、柔雾，统一观感",
                "**subtle dust particles drifting** —— 细节，增加空气感和真实度",
              ],
            },
            {
              kind: "text",
              text: "关键原则：**提示词几乎只描述「怎么动」，不要重复描述画面里已经有的东西**——因为首帧图已经交代了主体、构图、颜色和风格。",
            },
            {
              kind: "output",
              text: "点 Generate 后生成排队，完成后视频出现在会话里，也会存进 Assets。",
            },
            {
              kind: "note",
              text: "提示词建议用英文。长度上限约 1000 字符，够写清楚运镜和动作。",
            },
          ],
        },
        {
          title: "参数与运镜进阶",
          blocks: [
            {
              kind: "text",
              text: "同一个面板里能调的参数：",
            },
            {
              kind: "list",
              items: [
                "**模型**：Gen-4 / Gen-4 Turbo / Gen-4.5，Turbo 便宜快、Gen-4.5 质量高",
                "**时长**：常见 5 秒 / 10 秒；动作复杂就选 10 秒，别让模型赶时间",
                "**分辨率 / 比例**：16:9 横屏、9:16 竖屏、1:1 方形等，选和首帧图一致的比例避免裁切",
                "**固定种子（Fixed seed）**：开启后填上次的 seed，能得到运动方式更接近的结果",
              ],
            },
            {
              kind: "shot",
              src: "/shots/runway/controls.svg",
              caption: "各模型每 5 秒的积分消耗，以及可直接抄的运镜提示词",
            },
            {
              kind: "text",
              text: "**运镜词汇直接抄**：`slow dolly push-in`（缓推）、`pan left`（左摇）、`tilt up`（上仰）、`handheld tracking shot`（手持跟拍）、`orbit around the subject`（环绕）、`crane up, wide reveal`（升降拉远）、`static camera`（固定机位）。",
            },
            {
              kind: "note",
              text: "模型对「专业摄影术语」的跟随度，远高于「电影感 / 高级感」这类抽象形容词。",
            },
          ],
        },
        {
          title: "编辑与二次处理：Retime、Expand、4K",
          blocks: [
            {
              kind: "text",
              text: "生成完成后，视频下方有继续处理的入口：",
            },
            {
              kind: "list",
              items: [
                "**Retime**：裁剪、变速、加手持抖动、倒放——**不消耗积分**",
                "**Expand**：在 Edit Studio 里把视频扩成新的画幅比例",
                "**Upscale to 4K**：把分辨率提升到 4K",
                "**Use Current Frame**：把当前帧当成新的输入图，接着生成下一段",
                "**Act-Two**：用视频驱动角色做表演",
              ],
            },
            {
              kind: "text",
              text: "**无水印**：Standard 及以上导出的视频不带水印。把片段下载后导入**剪映 / Premiere**加字幕、配乐、拼接成完整成片。",
            },
            {
              kind: "warn",
              text: "Upscale、Expand 等操作会消耗积分；Retime（裁剪变速）不消耗。先做不花钱的剪辑，抠图 / 加字去剪映做最省。",
            },
          ],
        },
        {
          title: "作品管理与下载",
          blocks: [
            {
              kind: "text",
              text: "所有生成结果都在 **Assets** 里，默认保存在 **Sessions** 文件夹下，按会话归类。",
            },
            {
              kind: "list",
              items: [
                "格式：视频常见 MP4；分辨率按生成时选的比例和档位而定",
                "可下载、收藏（favorite）或继续处理",
                "会话（Session）把一次连续创作的素材归在一起，方便找",
                "Pro / Max 支持 HDR、ProRes、图片序列等更高规格导出",
              ],
            },
          ],
        },
        {
          title: "商用与版权说明",
          blocks: [
            {
              kind: "text",
              text: "付费档位导出的内容可**商用**，且**无水印**；具体授权范围以 Runway 的服务条款为准。",
            },
            {
              kind: "list",
              items: [
                "Free 档导出可能带水印，且商用授权有限",
                "Standard 及以上：**无水印**、可用于商业项目",
                "涉及真人肖像、品牌商标的素材，仍需自行确认授权",
              ],
            },
            {
              kind: "warn",
              text: "商用条款以官网 Terms of Service 为准。正式商用前，尤其是广告和品牌项目，建议再核对一次当前条款。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "先用便宜的 **Turbo** 试方向，满意再切 Gen-4.5 出片，省积分",
                "**先出图，再图生视频**：用图片模型定好画面，比纯文生视频可控得多",
                "提示词只写运镜和动作，别重复画面已有的内容",
                "固定 seed 做连续镜头：同一 seed 让多段视频运动风格统一",
                "用 **Use Current Frame** 接着上一帧往后生成，做出连贯长镜头",
                "竖屏内容选 9:16；选和首帧图一致的比例，避免裁切",
                "Retime 裁剪变速不花积分，先把节奏剪好再决定要不要 Upscale",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "图生视频提示词公式（复制即用）",
          desc: "只描述「怎么动」，用专业摄影词汇，别重复首帧图已经有的内容。",
          code: `[运镜] + [主体动作] + [光影/氛围] + [细节]

示例：
Slow dolly push-in; the leaves rustle gently in the breeze;
warm golden-hour light, soft haze; subtle dust particles drifting`,
        },
        {
          path: "运镜提示词速查（直接抄）",
          desc: "模型对专业摄影术语的跟随度更高。",
          code: `slow dolly push-in          缓慢推近
pan left / pan right        左摇 / 右摇
tilt up / tilt down         上仰 / 下俯
handheld tracking shot      手持跟拍
orbit around the subject    环绕主体
crane up, wide reveal       升降拉远
zoom out slowly             缓慢拉远
static camera               固定机位，仅细微变化`,
        },
        {
          path: "订阅档位与积分（速览）",
          desc: "价格、积分与每模型的消耗以官网定价页为准。",
          code: `Free        125 一次性积分 · 试玩
Standard    约 $12/月起（年付）· 每月 625 积分 · 无水印 · 全部模型
Pro / Max   更多积分 · 更多并行 · 品牌套件 · 声音克隆 · 4K 升级

消耗按模型和时长计算（5s / 10s 不同）
取消：账号页管理订阅，关闭自动续费`,
        },
      ],
      troubles: [
        {
          problem: "国内打不开 app.runwayml.com",
          fix: "该域名国内无法直连，属于网络问题。切换到可访问外网的网络环境后再打开，注册、登录、生成都要在同一网络下。",
        },
        {
          problem: "订阅扣款失败 / 卡片被拒",
          fix: "换一张支持境外支付的 Visa / Mastercard，确认已开通境外支付、额度充足，账单地址填完整。连续失败可隔天再试，避免风控。",
        },
        {
          problem: "积分用完了 / 生成到一半停住",
          fix: "免费积分是一次性的，用光需订阅或用会员档的每月积分。若只是排队，等一会儿即可；生成中途失败一般不扣费，可在会话里重试。",
        },
        {
          problem: "提示词被拒或生成失败",
          fix: "常见于真人姓名、名人肖像、暴力或敏感内容，以及试图生成版权角色。改成泛指描述、去掉人名和品牌，重新提交。",
        },
        {
          problem: "视频画面崩坏：物体扭曲、运动不连贯",
          fix: "降低动作复杂度（一次只让一件事动起来），时长选 10 秒给足时间，或换质量更高的 Gen-4.5 模型；必要时在提示词里加 `static camera` 减少大幅运动。",
        },
        {
          problem: "生成很慢 / 一直排队",
          fix: "高峰期（欧美白天）算力紧张。可错峰使用，或先用便宜的 Turbo 模型快速迭代，满意后再用高级模型精修。",
        },
      ],
      cost: "免费注册送 **125 个一次性积分**用于试玩；订阅 Standard 约 **$12/月起**（年付，含每月 625 积分、无水印、全部模型），Pro / Max 提供更多每月积分和功能。积分按模型和时长消耗（例如 5 秒和 10 秒单价不同），超出可购买补充积分或升级档位；在账号页可随时取消自动续费。**具体价格、积分额度和每模型消耗以 Runway 官网定价页为准。**",
    },
    en: {
      difficulty: "Beginner (no editing background needed)",
      os: "Web (app.runwayml.com) + iOS app",
      prereq: [
        {
          label: "An account (required)",
          detail:
            "Sign up with an email, Google or Apple account — no phone number required. Registration is light: open app.runwayml.com and you're in.",
        },
        {
          label: "Network",
          detail:
            "app.runwayml.com is not directly reachable from mainland China — use a connection that can access it, or signup and generation will fail.",
        },
        {
          label: "A paid plan",
          detail:
            "A free account gets **125 one-time credits** to try things out; to keep producing you subscribe, with Standard from about $12/mo (annual). Credits are spent per generation.",
        },
        {
          label: "Source material",
          detail:
            "Gen-4 / Gen-4.5 image-to-video **requires an image input**, so prepare a first-frame image — one you shot, or one you generated with an image model first.",
        },
        {
          label: "A payment card",
          detail: "Subscriptions need a card that accepts international charges (Visa / Mastercard), like Midjourney.",
        },
      ],
      steps: [
        {
          title: "Open the site",
          blocks: [
            {
              kind: "text",
              text: "Open [runwayml.com](https://runwayml.com) in a browser and click **Sign up / Log in** in the top right; generation happens in **app.runwayml.com**.",
            },
            {
              kind: "shot",
              src: "/shots/runway/site.png",
              caption: "The Runway site: AI video and image generation and editing",
            },
            {
              kind: "note",
              text: "Stick to `runwayml.com` and `app.runwayml.com`. Third-party \"mirror\" sites may redistribute your output — never log in on them.",
            },
          ],
        },
        {
          title: "Sign up and log in",
          blocks: [
            { kind: "text", text: "Register with an **email**, or one-click with **Google / Apple**." },
            {
              kind: "list",
              items: [
                "Click Sign up and enter an email and password, or authorize via Google / Apple",
                "No phone number needed; some regions may ask you to verify your email",
                "You land on the Dashboard, which is your starting point",
              ],
            },
            {
              kind: "warn",
              text: "It won't load directly from mainland China — fix the network first. A spinning signup page or missing verification email is usually a network issue.",
            },
          ],
        },
        {
          title: "Subscribe: what happens after the free credits run out",
          blocks: [
            {
              kind: "text",
              text: "A free account gets **125 one-time credits** — once spent, they don't refill monthly. To keep creating you subscribe, choosing a plan in account settings.",
            },
            {
              kind: "list",
              items: [
                "**Free** — 125 one-time credits, for trying it out",
                "**Standard from about $12/mo** (annual) — 625 credits/month, no watermarks, all video / image models",
                "**Pro / Max** — more monthly credits, more parallel jobs, brand kits, voice cloning and more",
                "**Billing** — credit card (Visa / Mastercard); **cancel** by managing the subscription on your account page",
              ],
            },
            {
              kind: "text",
              text: "Credits are spent by model and duration — a 5-second and a 10-second run cost differently. **The current per-model rates are on the official pricing page.**",
            },
            {
              kind: "warn",
              text: "Free credits are one-time, not monthly. To make them last, test in the cheaper Turbo model first, then switch to a higher-quality model for the final take.",
            },
          ],
        },
        {
          title: "Tour the UI",
          blocks: [
            { kind: "text", text: "On the workbench, tools sit on the left, a preview in the centre, and the generation panel on the right:" },
            {
              kind: "shot",
              src: "/shots/runway/generate.svg",
              caption: "The Gen-4 image-to-video panel: upload a first frame, write a motion prompt, set duration / resolution, Generate",
            },
            {
              kind: "list",
              items: [
                "**Dashboard** — the home screen you can start generation from",
                "**Tool mode** — pick Tool on the left, the Video tab up top, and a model from the dropdown at the bottom",
                "**Generation panel** — model, prompt, duration, resolution and fixed seed live here",
                "**Assets** — finished videos land under the Sessions folder by default",
              ],
            },
          ],
        },
        {
          title: "Your first video: image-to-video with the right prompt",
          blocks: [
            {
              kind: "text",
              text: "Open Tool → Video, choose **Gen-4 Turbo** (cheap and fast) in the model dropdown, upload a first-frame image, and paste this prompt.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Slow dolly push-in; the leaves rustle gently in the breeze; warm golden-hour light, soft haze; subtle dust particles drifting",
              caption: "A complete video prompt you can copy",
            },
            { kind: "text", text: "Why each part is there:" },
            {
              kind: "list",
              items: [
                "**Slow dolly push-in** — camera move: a slow push toward the subject (models follow cinematography terms best)",
                "**the leaves rustle gently in the breeze** — subject motion: the leaves move, so the shot comes alive",
                "**warm golden-hour light, soft haze** — lighting and atmosphere, unifying the look",
                "**subtle dust particles drifting** — detail that adds air and realism",
              ],
            },
            {
              kind: "text",
              text: "The key rule: **describe almost only how things move, and don't repeat what's already in the image** — the first frame already carries the subject, composition, colour and style.",
            },
            {
              kind: "output",
              text: "After clicking Generate the job queues; the finished video appears in the session and is saved to Assets.",
            },
            {
              kind: "note",
              text: "Write prompts in English. The limit is around 1000 characters, plenty for the motion description.",
            },
          ],
        },
        {
          title: "Parameters and camera-move tricks",
          blocks: [
            { kind: "text", text: "Adjustable settings on the same panel:" },
            {
              kind: "list",
              items: [
                "**Model** — Gen-4 / Gen-4 Turbo / Gen-4.5; Turbo is cheap and fast, Gen-4.5 is highest quality",
                "**Duration** — commonly 5s / 10s; pick 10s for complex action so the model isn't rushed",
                "**Resolution / ratio** — 16:9 landscape, 9:16 portrait, 1:1 square; match your input image to avoid cropping",
                "**Fixed seed** — enable and paste a previous seed to get more similar motion",
              ],
            },
            {
              kind: "shot",
              src: "/shots/runway/controls.svg",
              caption: "Credit cost per 5 seconds for each model, plus camera prompts you can copy",
            },
            {
              kind: "text",
              text: "**Camera vocabulary to copy**: `slow dolly push-in`, `pan left`, `tilt up`, `handheld tracking shot`, `orbit around the subject`, `crane up, wide reveal`, `static camera`.",
            },
            {
              kind: "note",
              text: "The model follows professional cinematography terms far more reliably than vague adjectives like \"cinematic\" or \"premium\".",
            },
          ],
        },
        {
          title: "Edit and refine: Retime, Expand, 4K",
          blocks: [
            { kind: "text", text: "After a generation finishes, the controls beneath the clip offer more:" },
            {
              kind: "list",
              items: [
                "**Retime** — trim, change speed, add handheld shake, reverse; **costs no credits**",
                "**Expand** — open Edit Studio to expand the video into a new aspect ratio",
                "**Upscale to 4K** — raise the resolution to 4K",
                "**Use Current Frame** — load the current frame as the next input image",
                "**Act-Two** — drive a character's performance with a video",
              ],
            },
            {
              kind: "text",
              text: "**Watermarks**: Standard and above export without watermarks. Download clips and finish in **CapCut / Premiere** for captions, music and assembly.",
            },
            {
              kind: "warn",
              text: "Upscale and Expand spend credits; Retime (trim / speed) does not. Do the free editing first, and leave cutouts / captions to your editor to save credits.",
            },
          ],
        },
        {
          title: "Managing and downloading your work",
          blocks: [
            { kind: "text", text: "Everything lives in **Assets**, saved under the **Sessions** folder grouped by session." },
            {
              kind: "list",
              items: [
                "Formats: typically MP4; resolution follows the ratio and tier chosen at generation",
                "Download, favourite, or keep working with a clip",
                "A Session groups the assets from one continuous creative run, easy to find later",
                "Pro / Max support higher-grade export such as HDR, ProRes and image sequences",
              ],
            },
          ],
        },
        {
          title: "Commercial use and copyright",
          blocks: [
            {
              kind: "text",
              text: "Output from a paid tier can be used **commercially** and exports **without a watermark**; the exact licence is governed by Runway's Terms of Service.",
            },
            {
              kind: "list",
              items: [
                "Free-tier exports may be watermarked, with limited commercial rights",
                "Standard and above: **no watermark**, usable in commercial projects",
                "Material involving real people's likeness or brand trademarks still needs rights you must verify yourself",
              ],
            },
            {
              kind: "warn",
              text: "Commercial terms live in the official Terms of Service. Before a formal commercial project — especially ads or branded work — re-check the current terms.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "Test directions in the cheap **Turbo** model, then finish in Gen-4.5 to save credits",
                "**Image first, then video**: lock the look with an image model, far more controllable than text-to-video",
                "Prompt only the motion — don't re-describe the scene",
                "Fix the seed for a series: the same seed keeps the motion style consistent across shots",
                "Use **Use Current Frame** to continue from the last frame and build long, continuous shots",
                "Pick 9:16 for vertical content; match your input image's ratio to avoid cropping",
                "Retime trims and speed changes cost nothing — nail the pacing before deciding on an Upscale",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Image-to-video prompt formula (copy and use)",
          desc: "Describe only the motion, use cinematography terms, and don't repeat the first frame.",
          code: `[camera move] + [subject motion] + [lighting/atmosphere] + [detail]

Example:
Slow dolly push-in; the leaves rustle gently in the breeze;
warm golden-hour light, soft haze; subtle dust particles drifting`,
        },
        {
          path: "Camera prompt cheat sheet (copy-paste)",
          desc: "Models follow professional cinematography terms most reliably.",
          code: `slow dolly push-in          slow push toward the subject
pan left / pan right        rotate left / right
tilt up / tilt down         pitch up / down
handheld tracking shot      hand-held follow
orbit around the subject    circle the subject
crane up, wide reveal       rise and reveal wide
zoom out slowly             slow zoom out
static camera               locked off, only subtle motion`,
        },
        {
          path: "Plans and credits (overview)",
          desc: "Prices, credits and per-model costs are on the official pricing page.",
          code: `Free        125 one-time credits · try it out
Standard    from ~$12/mo (annual) · 625 credits/mo · no watermark · all models
Pro / Max   more credits · more parallel jobs · brand kit · voice clone · 4K upscale

Spend is per model and duration (5s vs 10s differ)
Cancel: manage the subscription on your account page`,
        },
      ],
      troubles: [
        {
          problem: "app.runwayml.com won't load from mainland China",
          fix: "The domain isn't directly reachable there — a network issue. Switch to a connection with access, and keep signup, login and generation on the same connection.",
        },
        {
          problem: "Payment fails / the card is declined",
          fix: "Use a Visa / Mastercard that accepts international charges, make sure international payments are enabled and there's headroom, and fill in a complete billing address. On repeated failures, wait a day to avoid fraud checks.",
        },
        {
          problem: "Out of credits / a generation stalls midway",
          fix: "Free credits are one-time — once spent you need a subscription or a plan's monthly credits. If it's just queued, wait a bit; failed mid-generation jobs usually aren't charged and can be retried in the session.",
        },
        {
          problem: "The prompt is rejected or generation fails",
          fix: "Often real names, celebrity likenesses, violent or sensitive content, or attempts at copyrighted characters. Rewrite generically, drop names and brands, and resubmit.",
        },
        {
          problem: "Broken video: warped objects, choppy motion",
          fix: "Reduce motion complexity (move one thing at a time), choose the 10-second duration to give the model room, or switch to the higher-quality Gen-4.5 model; add `static camera` in the prompt to calm large movements.",
        },
        {
          problem: "Very slow / long queue",
          fix: "Peak hours (US / Europe daytime) strain compute. Work off-peak, or iterate quickly in the cheaper Turbo model and finish with a premium model.",
        },
      ],
      cost: "A free account gets **125 one-time credits** to explore; Standard starts at about **$12/mo** (annual, 625 credits/month, no watermark, all models), with Pro / Max offering more monthly credits and features. Credits are spent per model and duration (a 5s run differs from a 10s run); top up credits or upgrade to go further, and cancel auto-renewal anytime on the account page. **Current prices, credit amounts and per-model costs are on Runway's official pricing page.**",
    },
  },

  suno: {
    zh: {
      difficulty: "入门（不需要乐理基础）",
      os: "网页（suno.com）+ iOS / Android App",
      prereq: [
        {
          label: "账号（必需）",
          detail:
            "用邮箱、Google、Apple 或 Microsoft 账号注册登录均可，不需要手机号。注册免费，立即可用。",
        },
        {
          label: "网络环境",
          detail:
            "suno.com 国内无法直连，需要自备可访问外网的网络环境，否则登录和生成都会失败。",
        },
        {
          label: "付费要求",
          detail:
            "免费版每天送 **50 积分**，但**产出不能商用**；要商用或下载高清文件需订阅 Pro（约 $10/月起）。",
        },
        {
          label: "设备",
          detail: "电脑用浏览器访问 suno.com，手机装 App 也行；同一账号多端同步。",
        },
        {
          label: "素材（可选）",
          detail: "想用自己的声音或上传音频，需要准备一段干净的人声录音（该功能需订阅）。",
        },
      ],
      steps: [
        {
          title: "打开官网",
          blocks: [
            {
              kind: "text",
              text: "浏览器打开 [suno.com](https://suno.com)，点右上角 **Log in**。创作页面是 `suno.com/create`。",
            },
            {
              kind: "shot",
              src: "/shots/suno/site.png",
              caption: "Suno 官网：打字就能生成整首歌的 AI 音乐平台",
            },
            {
              kind: "note",
              text: "认准 `suno.com`。第三方「Suno 镜像站」可能盗用你的账号或作品，不要在上面登录。",
            },
          ],
        },
        {
          title: "注册与登录",
          blocks: [
            { kind: "text", text: "支持**邮箱注册**，或 **Google / Apple / Microsoft** 一键登录。" },
            {
              kind: "list",
              items: [
                "点 Log in → 选一种方式授权，不需要手机号",
                "登录后默认是免费版（Basic），可直接开始生成",
                "左侧是创作与探索入口：Create（创作）、Explore（探索）",
              ],
            },
            {
              kind: "warn",
              text: "国内直连打不开 suno.com，登录转圈或播放没声音都可能是网络问题，先确认网络环境。",
            },
          ],
        },
        {
          title: "订阅付费：免费版能干什么，为什么要升级",
          blocks: [
            {
              kind: "text",
              text: "免费版够体验，但**有商用和功能的硬限制**。要正式做内容就订阅。",
            },
            {
              kind: "shot",
              src: "/shots/suno/plans.svg",
              caption: "三档方案：Free / Pro / Premier，价格与权益以官网为准",
            },
            {
              kind: "list",
              items: [
                "**Free**：每天 50 积分，**不能商用**，只能下载较基础文件，用的是入门模型",
                "**Pro 约 $10/月**：每月 2500 积分，**可商用**，可用高级模型、Suno Studio、加购积分，单次可同时生成 10 首",
                "**Premier 约 $30/月**：每月 10000 积分，功能更全、优先队列",
                "**扣款**：信用卡；**取消**：账号页管理订阅，可随时取消",
              ],
            },
            {
              kind: "note",
              text: "订阅内积分**月底清零不累计**；付费加购的积分不清零，但需要保持订阅才能使用。",
            },
            {
              kind: "warn",
              text: "**免费版做出的歌不能商用，且升级也不能追溯授权**——想商用的歌必须一开始就用 Pro 及以上的订阅来生成。",
            },
          ],
        },
        {
          title: "界面导览",
          blocks: [
            {
              kind: "text",
              text: "创作页 `suno.com/create` 的核心是两种模式切换，以及三个输入区。",
            },
            {
              kind: "shot",
              src: "/shots/suno/create.svg",
              caption: "Create 页面：Simple / Custom 切换，Custom 模式下有歌词、风格、标题三栏",
            },
            {
              kind: "list",
              items: [
                "**Simple 模式**：只写一句描述，Suno 自动写词和编曲，适合快速出歌",
                "**Custom 模式**：自己填**歌词 + 风格 + 标题**，可控性最高",
                "**Create 按钮**：点一下同时产出**两个版本（two takes）**，挑更好的继续",
                "**Library（作品库）**：所有生成的歌都在这，可继续编辑、下载",
              ],
            },
          ],
        },
        {
          title: "第一次生成：从一句描述到一首完整的歌",
          blocks: [
            {
              kind: "text",
              text: "先用最简单的 **Simple 模式**：在描述框里粘贴下面这句，点 Create。",
            },
            {
              kind: "code",
              lang: "text",
              code: "lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm, calm midnight study vibe, soft female vocal",
              caption: "完整可复制的风格描述（Simple 模式）",
            },
            { kind: "text", text: "逐段拆解它为什么这么写：" },
            {
              kind: "list",
              items: [
                "**lo-fi chillhop** —— 流派，先定大方向",
                "**mellow piano** —— 主奏乐器",
                "**vinyl crackle** —— 质感 / 音色细节（黑胶底噪）",
                "**80 bpm** —— 速度，慢节奏更适合学习场景",
                "**calm midnight study vibe** —— 情绪和场景",
                "**soft female vocal** —— 人声类型（想要纯音乐就勾 Instrumental）",
              ],
            },
            {
              kind: "output",
              text: "几秒到一两分钟后，会出现两首歌，各带封面和可播放的音频。",
            },
            {
              kind: "note",
              text: "风格描述用**英文关键词**效果最稳，逗号隔开即可；中文可以，但英文关键词更准。",
            },
          ],
        },
        {
          title: "Custom 模式：自己写歌词、控风格",
          blocks: [
            {
              kind: "text",
              text: "想做一首有明确结构和歌词的歌，切到 **Custom 模式**。它把输入拆成三栏：**歌词 / 风格 / 标题**。",
            },
            {
              kind: "list",
              items: [
                "**Lyrics（歌词）**：写歌词，并用结构标签分区",
                "**Style of Music（风格）**：关键词描述曲风、乐器、情绪、速度",
                "**Title（标题）**：给歌起个名字",
                "**Instrumental 开关**：打开就做纯音乐，不用歌词",
              ],
            },
            {
              kind: "text",
              text: "歌词里用**结构标签**告诉 Suno 每段是什么，常用的有：",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Intro]\n[Verse]\n[Pre-Chorus]\n[Chorus]\n[Bridge]\n[Outro]",
              caption: "把标签放在每段歌词前面",
            },
            {
              kind: "text",
              text: "一个完整的 Custom 示例：",
            },
            {
              kind: "code",
              lang: "text",
              code: "Title: Midnight Study\nStyle: lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm\nLyrics:\n[Verse]\nNeon glow on the desk at midnight\nCoffee going cold, but the words still flow\n[Chorus]\nWe keep the fire low, let it burn slow\n...",
              caption: "标题 / 风格 / 歌词三段式模板",
            },
            {
              kind: "note",
              text: "想逼真又自然，风格关键词控制在 3-6 个；堆太多词反而会互相打架。",
            },
          ],
        },
        {
          title: "编辑与二次处理：延伸、翻唱、分轨",
          blocks: [
            {
              kind: "text",
              text: "生成后，每首歌都有继续加工的入口：",
            },
            {
              kind: "list",
              items: [
                "**Extend**：在歌曲基础上往后延长，做更长的版本",
                "**Cover**：用同一首歌的歌词换一种风格重做",
                "**Remix / 调整速度**：改节奏、改段落",
                "**Replace / Add Section**：用高级编辑替换或新增某一段",
                "**Extract Stems**：把人声和各乐器分成独立音轨，拿去 DAW 继续混",
                "**Upload Audio**：上传自己的音频做二次创作（需订阅）",
                "**Voices / Persona**：克隆或复用自己的声音（需订阅）",
              ],
            },
            {
              kind: "text",
              text: "**二次剪辑**：把下载的音频导入**剪映 / Audacity**做淡入淡出、拼接，或导出成视频配图，成本最低。",
            },
            {
              kind: "warn",
              text: "分轨、上传、声音克隆等属于付费功能；免费版能用的编辑很有限。",
            },
          ],
        },
        {
          title: "作品管理与下载",
          blocks: [
            {
              kind: "text",
              text: "所有生成的歌都在 **Library（作品库）**，按时间排列，可播放、继续编辑或下载。",
            },
            {
              kind: "list",
              items: [
                "格式：可下载音频文件，付费档支持更高规格下载",
                "歌曲可设为公开或私密，公开的会出现在 Explore 里",
                "每首歌保留完整提示词和参数，方便复用",
                "时长：单首常见几分钟，付费档支持更长的上传 / 生成",
              ],
            },
            {
              kind: "note",
              text: "换设备不影响，作品绑定在账号上；App 端和网页版数据同步。",
            },
          ],
        },
        {
          title: "商用与版权说明（很重要）",
          blocks: [
            {
              kind: "text",
              text: "Suno 的版权规则和「永久免费」是两回事，务必分清：",
            },
            {
              kind: "list",
              items: [
                "**免费版（Basic）做出的歌，Suno 是所有者**，你只能**非商业**使用",
                "**Pro / Premier 订阅期间做出的歌，归你所有**，可用于商业",
                "免费版做的歌，**之后升级也不能追溯授权**——要商用就从一开始用付费档生成",
                "纯 AI 生成的音乐在美国等地**可能无法获得版权登记**；你亲自写的歌词通常可以单独登记",
              ],
            },
            {
              kind: "warn",
              text: "商用前请阅读 Suno 的服务条款，并确认你的发行 / 平台是否接受 AI 生成内容；涉及真人声音克隆时，需取得本人同意。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "风格描述公式：**流派 + 主奏乐器 + 质感 + 速度(bpm) + 情绪 + 人声**",
                "一次生成给两个 take，先试听再决定延伸哪一个",
                "想要纯音乐就打开 Instrumental，省去写歌词",
                "用结构标签（[Verse] / [Chorus]）控制歌曲段落",
                "风格关键词别堆太多，3-6 个最稳",
                "要循环 / 短视频配乐，多生成几个短 take 挑最顺的",
                "免费版先试方向，确认要商用再升级 Pro",
                "下载后在剪映 / DAW 里做最终母带和排版",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Suno Custom 三段式模板（歌词 / 风格 / 标题）",
          desc: "切到 Custom 模式，三栏分别填下面内容。",
          code: `Title: Midnight Study
Style: lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm, calm, soft female vocal
Lyrics:
[Verse]
Neon glow on the desk at midnight
Coffee going cold, but the words still flow
[Chorus]
We keep the fire low, let it burn slow
...
[Outro]`,
        },
        {
          path: "风格描述公式（复制即用）",
          desc: "用英文关键词，逗号隔开。Simple 模式直接写，Custom 模式填进 Styles 栏。",
          code: `[流派] + [主奏乐器] + [质感] + [速度 bpm] + [情绪] + [人声]

示例：
lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm,
calm midnight study vibe, soft female vocal`,
        },
        {
          path: "结构标签速查（写进歌词里）",
          desc: "放在每段歌词前面，告诉 Suno 这段是什么。",
          code: `[Intro]       前奏
[Verse]       主歌
[Pre-Chorus]  预副歌
[Chorus]      副歌
[Bridge]      桥段
[Outro]       尾奏

纯音乐：打开 Instrumental，不用写歌词`,
        },
      ],
      troubles: [
        {
          problem: "国内打不开 suno.com",
          fix: "该域名国内无法直连，属于网络问题。切换到可访问外网的网络环境后再打开，登录和生成都要在同一网络下。",
        },
        {
          problem: "订阅扣款失败 / 卡片被拒",
          fix: "换一张支持境外支付的 Visa / Mastercard，确认已开通境外支付、额度充足，账单地址完整。连续失败可隔天再试。",
        },
        {
          problem: "额度用完 / 生成排队",
          fix: "免费版每天 50 积分，用完次日刷新。付费版每月积分月底清零，可购买加购积分（需保持订阅）。高峰期会排队，可稍后再生成。",
        },
        {
          problem: "提示词或歌词被拒绝",
          fix: "真人姓名、名人形象、敏感词和版权歌词会被拦。改成原创歌词、去掉人名和品牌，再重新提交。",
        },
        {
          problem: "生成的歌听着不对 / 风格跑偏",
          fix: "先把风格关键词精简到 3-6 个、互相不冲突；歌词用结构标签分区；多生成几个 take 挑最顺的，再对它做 Extend 或 Cover。",
        },
        {
          problem: "下载的文件不能用 / 想商用但没有授权",
          fix: "免费版产出的歌不能商用且升级不追溯授权。商用必须在 Pro / Premier 订阅期间重新生成；下载后核对文件规格是否符合平台要求。",
        },
      ],
      cost: "**Free**：每天 50 积分，仅限**非商业**使用。**Pro 约 $10/月**：每月 2500 积分，**可商用**，可用高级模型、Suno Studio 和加购积分。**Premier 约 $30/月**：每月 10000 积分、功能更全。订阅内积分月底清零、不累计；加购积分不过期但需保持订阅。可随时取消自动续费。**具体价格、积分和权益以 Suno 官网定价页为准。**",
    },
    en: {
      difficulty: "Beginner (no music theory needed)",
      os: "Web (suno.com) + iOS / Android app",
      prereq: [
        {
          label: "An account (required)",
          detail:
            "Register with an email, Google, Apple or Microsoft account — no phone number needed. Registration is free and usable immediately.",
        },
        {
          label: "Network",
          detail:
            "suno.com is not directly reachable from mainland China — you need a connection that can access it, or login and generation will fail.",
        },
        {
          label: "A paid plan",
          detail:
            "The free tier grants **50 credits per day**, but its output **cannot be used commercially**; commercial use or higher-quality downloads require Pro (from about $10/mo).",
        },
        {
          label: "A device",
          detail: "Use a browser at suno.com on desktop, or install the app; one account syncs across devices.",
        },
        {
          label: "Source audio (optional)",
          detail: "To use your own voice or upload audio, have a clean vocal recording ready — that feature needs a subscription.",
        },
      ],
      steps: [
        {
          title: "Open the site",
          blocks: [
            {
              kind: "text",
              text: "Open [suno.com](https://suno.com) in a browser and click **Log in** in the top right. The creation page is `suno.com/create`.",
            },
            {
              kind: "shot",
              src: "/shots/suno/site.png",
              caption: "The Suno site: type a line and get a full song",
            },
            {
              kind: "note",
              text: "Stick to `suno.com`. Third-party \"Suno mirrors\" may steal your account or output — never log in on them.",
            },
          ],
        },
        {
          title: "Sign up and log in",
          blocks: [
            { kind: "text", text: "Register with an **email**, or one-click with **Google / Apple / Microsoft**." },
            {
              kind: "list",
              items: [
                "Click Log in, authorize with one method; no phone number needed",
                "You start on the free (Basic) tier and can generate right away",
                "The left menu holds Create and Explore",
              ],
            },
            {
              kind: "warn",
              text: "suno.com won't load directly from mainland China; a spinning login or silent playback is often a network issue — fix that first.",
            },
          ],
        },
        {
          title: "Subscribing: what the free tier gives, and why to upgrade",
          blocks: [
            { kind: "text", text: "The free tier is fine for trying things, but it has **hard limits on commercial use and features**. Subscribe to produce real content." },
            {
              kind: "shot",
              src: "/shots/suno/plans.svg",
              caption: "Three tiers — Free / Pro / Premier; prices and benefits are on the official site",
            },
            {
              kind: "list",
              items: [
                "**Free** — 50 credits/day, **no commercial use**, more basic downloads, entry-level model",
                "**Pro about $10/mo** — 2,500 credits/month, **commercial rights**, advanced models, Suno Studio, add-on credits, up to 10 concurrent songs",
                "**Premier about $30/mo** — 10,000 credits/month, more features and a priority queue",
                "**Billing** — credit card; **cancel** anytime by managing the subscription on your account page",
              ],
            },
            {
              kind: "note",
              text: "Subscription credits **expire at month's end and don't roll over**; purchased top-up credits don't expire but require an active subscription to use.",
            },
            {
              kind: "warn",
              text: "**Songs made on the free tier cannot be used commercially, and upgrading later does not retroactively license them** — anything you want to monetise must be generated while on Pro or above.",
            },
          ],
        },
        {
          title: "Tour the UI",
          blocks: [
            { kind: "text", text: "The Create page `suno.com/create` is built around a mode switch and three input areas." },
            {
              kind: "shot",
              src: "/shots/suno/create.svg",
              caption: "The Create page: Simple / Custom toggle, with Lyrics, Style and Title in Custom mode",
            },
            {
              kind: "list",
              items: [
                "**Simple mode** — write one description; Suno writes the lyrics and composition, good for quick songs",
                "**Custom mode** — fill in **lyrics + style + title** yourself, the most control",
                "**Create button** — generates **two takes** at once; keep the better one",
                "**Library** — every song lives here, ready to edit or download",
              ],
            },
          ],
        },
        {
          title: "Your first song: from one line to a full track",
          blocks: [
            { kind: "text", text: "Start in the simplest **Simple mode**: paste this into the description box and hit Create." },
            {
              kind: "code",
              lang: "text",
              code: "lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm, calm midnight study vibe, soft female vocal",
              caption: "A complete style description (Simple mode)",
            },
            { kind: "text", text: "Why each part is there:" },
            {
              kind: "list",
              items: [
                "**lo-fi chillhop** — the genre, setting the overall direction",
                "**mellow piano** — the lead instrument",
                "**vinyl crackle** — texture / timbre detail (vinyl noise)",
                "**80 bpm** — tempo; a slow tempo suits a study vibe",
                "**calm midnight study vibe** — mood and scene",
                "**soft female vocal** — the vocal type (toggle Instrumental for an instrumental)",
              ],
            },
            {
              kind: "output",
              text: "Within seconds to a minute or two, two songs appear, each with cover art and playable audio.",
            },
            {
              kind: "note",
              text: "English keywords work most reliably, separated by commas. Chinese works, but English keywords are more precise.",
            },
          ],
        },
        {
          title: "Custom mode: write your own lyrics and steer the style",
          blocks: [
            { kind: "text", text: "For a song with a defined structure and lyrics, switch to **Custom mode**. It splits input into three fields: **Lyrics / Style / Title**." },
            {
              kind: "list",
              items: [
                "**Lyrics** — write the words, dividing sections with structure tags",
                "**Style of Music** — keywords for genre, instruments, mood and tempo",
                "**Title** — name the song",
                "**Instrumental toggle** — create an instrumental with no lyrics",
              ],
            },
            { kind: "text", text: "Use **structure tags** in the lyrics to tell Suno what each section is; common ones:" },
            {
              kind: "code",
              lang: "text",
              code: "[Intro]\n[Verse]\n[Pre-Chorus]\n[Chorus]\n[Bridge]\n[Outro]",
              caption: "Put a tag before each section",
            },
            { kind: "text", text: "A complete Custom example:" },
            {
              kind: "code",
              lang: "text",
              code: "Title: Midnight Study\nStyle: lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm\nLyrics:\n[Verse]\nNeon glow on the desk at midnight\nCoffee going cold, but the words still flow\n[Chorus]\nWe keep the fire low, let it burn slow\n...",
              caption: "The title / style / lyrics three-part template",
            },
            {
              kind: "note",
              text: "Keep style keywords to 3-6 for a natural result; stacking too many makes them fight each other.",
            },
          ],
        },
        {
          title: "Editing and refinement: extend, cover, stems",
          blocks: [
            { kind: "text", text: "After generating, every song offers further processing:" },
            {
              kind: "list",
              items: [
                "**Extend** — continue the song to make a longer version",
                "**Cover** — redo the same lyrics in a different style",
                "**Remix / adjust speed** — change the tempo or arrangement",
                "**Replace / Add Section** — advanced editing to swap or insert a section",
                "**Extract Stems** — split vocals and instruments into separate tracks for a DAW",
                "**Upload Audio** — upload your own audio for re-creation (subscription required)",
                "**Voices / Persona** — clone or reuse your own voice (subscription required)",
              ],
            },
            {
              kind: "text",
              text: "**Finishing touches**: import the download into **CapCut / Audacity** for fades and assembly, or export it as a video with visuals — the cheapest path.",
            },
            {
              kind: "warn",
              text: "Stems, uploads and voice cloning are paid features; the free tier's editing is very limited.",
            },
          ],
        },
        {
          title: "Managing and downloading your work",
          blocks: [
            { kind: "text", text: "All songs live in the **Library**, listed by time and ready to play, edit or download." },
            {
              kind: "list",
              items: [
                "Formats: audio files are downloadable; paid tiers allow higher-quality downloads",
                "Songs can be public or private; public ones appear in Explore",
                "Each song keeps its full prompt and settings for reuse",
                "Length: tracks are commonly a few minutes; paid tiers allow longer uploads / generations",
              ],
            },
            {
              kind: "note",
              text: "Switching devices changes nothing — songs are tied to your account and sync between the app and web.",
            },
          ],
        },
        {
          title: "Commercial use and copyright (important)",
          blocks: [
            { kind: "text", text: "Suno's copyright rules are not the same as \"free forever\" — be clear on the distinction:" },
            {
              kind: "list",
              items: [
                "**Songs made on the free (Basic) plan are owned by Suno**; you may use them for **non-commercial purposes only**",
                "**Songs made while subscribed to Pro or Premier are owned by you** and can be used commercially",
                "Free-tier songs **cannot be retroactively licensed by upgrading** — generate on a paid tier from the start if you want to monetise",
                "Purely AI-generated music **may not qualify for copyright registration** in the US and elsewhere; lyrics you wrote yourself can usually be registered on their own",
              ],
            },
            {
              kind: "warn",
              text: "Before commercial use, read Suno's Terms of Service and check whether your distributor / platform accepts AI-generated content; cloning a real person's voice requires their consent.",
            },
          ],
        },
        {
          title: "Cheat sheet",
          blocks: [
            {
              kind: "list",
              items: [
                "Style formula: **genre + lead instrument + texture + bpm + mood + vocals**",
                "Each run gives two takes — audition both before deciding which to extend",
                "Want an instrumental? Toggle it on and skip the lyrics",
                "Steer song sections with structure tags ([Verse] / [Chorus])",
                "Keep style keywords to 3-6; too many conflict",
                "For loops or short-video beds, generate several short takes and pick the smoothest",
                "Test on the free tier, then upgrade to Pro once you'll monetise",
                "Finish and master in CapCut / a DAW after downloading",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Suno Custom three-part template (lyrics / style / title)",
          desc: "Switch to Custom mode and fill the three fields as below.",
          code: `Title: Midnight Study
Style: lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm, calm, soft female vocal
Lyrics:
[Verse]
Neon glow on the desk at midnight
Coffee going cold, but the words still flow
[Chorus]
We keep the fire low, let it burn slow
...
[Outro]`,
        },
        {
          path: "Style description formula (copy and use)",
          desc: "English keywords, comma-separated. Write it in Simple mode, or in the Styles field in Custom mode.",
          code: `[genre] + [lead instrument] + [texture] + [bpm] + [mood] + [vocals]

Example:
lo-fi chillhop, mellow piano, vinyl crackle, 80 bpm,
calm midnight study vibe, soft female vocal`,
        },
        {
          path: "Structure tags cheat sheet (in the lyrics)",
          desc: "Place a tag before each section to tell Suno what it is.",
          code: `[Intro]       intro
[Verse]       verse
[Pre-Chorus]  pre-chorus
[Chorus]      chorus
[Bridge]      bridge
[Outro]       outro

Instrumental: toggle Instrumental and skip lyrics`,
        },
      ],
      troubles: [
        {
          problem: "suno.com won't load from mainland China",
          fix: "The domain isn't directly reachable there — a network issue. Switch to a connection with access, and keep login and generation on the same connection.",
        },
        {
          problem: "Payment fails / the card is declined",
          fix: "Use a Visa / Mastercard that accepts international charges, make sure international payments are enabled and there's headroom, and fill in a complete billing address. On repeated failures, wait a day.",
        },
        {
          problem: "Out of credits / generations queued",
          fix: "The free tier grants 50 credits daily, refreshed the next day. Paid credits reset monthly and don't roll over; you can buy top-up credits (requires an active subscription). Peak times queue — try again later.",
        },
        {
          problem: "The prompt or lyrics are rejected",
          fix: "Real names, celebrity likenesses, sensitive terms and copyrighted lyrics get flagged. Write original lyrics, drop names and brands, and resubmit.",
        },
        {
          problem: "The song sounds off / the style drifts",
          fix: "Trim style keywords to 3-6 non-conflicting ones, divide lyrics with structure tags, generate several takes and keep the best, then Extend or Cover it.",
        },
        {
          problem: "The download is unusable / you want to monetise but lack rights",
          fix: "Free-tier songs can't be used commercially and upgrading doesn't license them retroactively. To monetise, regenerate while subscribed to Pro / Premier; after downloading, check the file meets your platform's requirements.",
        },
      ],
      cost: "**Free**: 50 credits/day, **non-commercial** only. **Pro about $10/mo**: 2,500 credits/month, **commercial rights**, advanced models, Suno Studio and add-on credits. **Premier about $30/mo**: 10,000 credits/month and more features. Subscription credits reset monthly and don't roll over; top-up credits don't expire but need an active subscription. Auto-renewal can be cancelled anytime. **Current prices, credits and benefits are on Suno's official pricing page.**",
    },
  },
};
