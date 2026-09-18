import type { TutorialSet } from "./tutorial-types";

export const chatTutorials: TutorialSet = {
  chatgpt: {
    zh: {
      difficulty: "入门（零基础可上手，会打字就能用）",
      os: "网页 / iOS / Android / macOS / Windows 桌面客户端",
      prereq: [
        {
          label: "账号（必需：邮箱或手机号）",
          detail:
            "用邮箱注册最省事（Gmail、Outlook、QQ 邮箱都行），也可以用 Google、Apple 账号一键注册。一个邮箱/手机号只能绑一个账号；不要买「共享号」，多人共用同一个账号很容易触发风控甚至封号。",
        },
        {
          label: "网络环境（硬性要求）",
          detail:
            "ChatGPT 不对中国大陆开放，需要能访问 chatgpt.com 的网络环境，并且出口 IP 落在支持的国家或地区。注册和登录期间保持网络稳定，中途频繁换节点很容易触发验证甚至封号。",
        },
        {
          label: "付费（可先用免费版）",
          detail:
            "免费版就能聊天、传文件、联网搜索，只是模型和次数有限。要更强模型和更高额度再订阅 Plus（目前 $20/月，以官网为准），支付需要用境外信用卡或虚拟卡，国内银行卡一般不行。",
        },
        {
          label: "电脑端",
          detail:
            "用电脑浏览器打开 chatgpt.com 就能聊。想要全局快捷键再装 macOS / Windows 桌面端，和网页同一账号。本站不讲手机 App。",
        },
        {
          label: "地区与年龄限制",
          detail:
            "注册时可能需要手机号验证，而中国大陆 +86 手机号目前不被支持，收不到验证码属于正常现象。未满 13 岁（部分地区 18 岁）无法注册。",
        },
      ],
      steps: [
        {
          title: "打开官网，先认清域名",
          blocks: [
            {
              kind: "text",
              text: "官方入口只有两个：**chatgpt.com**（主域名）和 **chat.openai.com**（会自动跳到前者）。认准域名结尾的 `openai.com` / `chatgpt.com`，页面语言可以随时切到中文，但域名不会变。",
            },
            {
              kind: "warn",
              text: "在网上搜「ChatGPT」，会跳出一堆「ChatGPT 中文版 / 免翻版 / 镜像站」。这些站点不是官方，轻则收费转卖，重则记录你的聊天内容和账号密码。**只使用 chatgpt.com 与 chat.openai.com**。凡是让你先充值才能试用、域名又不是这两个的，直接关掉。",
            },
            {
              kind: "note",
              text: "打不开就先检查网络环境（见第 3 步）。如果页面一直转圈、报 `Access denied`、`429` 或「该地区不可用」，基本都是出口 IP 被判定的地区不支持，不是网站坏了。",
            },
          ],
        },
        {
          title: "注册账号：邮箱、Google、Apple 三选一",
          blocks: [
            {
              kind: "text",
              text: "进入官网后点右上角 **Sign up**（注册）。三条路走任意一条即可，推荐邮箱或 Google：",
            },
            {
              kind: "list",
              items: [
                "**邮箱注册**：填邮箱 → 设置密码 → 收 6 位验证码邮件 → 点邮件里的 Verify email 完成验证。邮件进垃圾箱很常见，搜发件人 `openai` 一定能找到。",
                "**Google / Apple**：点 `Continue with Google` 或 `Continue with Apple`，选一个账号授权即可，不用记新密码。",
                "**手机号**：只支持部分国家和地区的号码，中国大陆 +86 号码目前不支持，填了也收不到码。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/chatgpt/signup.svg",
              caption: "注册页：邮箱 / Google / Apple 三种方式任选一种即可（示意图）",
            },
            {
              kind: "note",
              text: "注册过程会要求填姓名和出生日期，如实填写即可（年龄不符会直接禁止使用）。填完就进入对话界面，不需要邮箱二次确认以外的任何操作。",
            },
          ],
        },
        {
          title: "登录，以及打不开时怎么办",
          blocks: [
            {
              kind: "text",
              text: "以后打开 chatgpt.com 会自动记住登录状态。如果是新设备，点 **Log in** 用注册时的方式登录。国内最常见的四种现象和处理办法：",
            },
            {
              kind: "list",
              items: [
                "**页面打不开、连接超时**：网络环境没生效。先确认能正常打开 google.com，再回来开 ChatGPT。",
                "**`Not available in your country` / `Access denied`**：出口 IP 被判定为不支持地区。换节点，清一次浏览器缓存，用无痕窗口重开。",
                "**登录后又被弹回登录页**：浏览器禁止了第三方 Cookie。在浏览器设置里搜 cookie，允许站点保存数据后重试。",
                "**一直转圈、报 `Oops! Something went wrong`**：换用最新版 Chrome 或 Edge，并临时关掉广告拦截、翻译类浏览器扩展。",
              ],
            },
            {
              kind: "note",
              text: "登录成功后电脑浏览器不需要安装就能对话。桌面端用同一账号、同一网络登录即可。",
            },
          ],
        },
        {
          title: "电脑桌面端（可选）：全局快捷键",
          blocks: [
            {
              kind: "list",
              items: [
                "打开 [chatgpt.com/download](https://chatgpt.com/download)，下载 macOS 或 Windows 安装包",
                "macOS：把图标拖进「应用程序」；Windows：双击安装",
                "用和网页相同的账号登录，对话记录会同步",
                "设置里打开全局快捷键（macOS 常见是 Option+Space），即可从任何窗口唤起",
              ],
            },
            {
              kind: "warn",
              text: "只装官网这个包。任何第三方「ChatGPT 客户端 / 加速器」若要你填 OpenAI 密码，一律当钓鱼。",
            },
          ],
        },
        {
          title: "界面导览：左边栏、模型切换、输入框在哪",
          blocks: [
            {
              kind: "text",
              text: "登录后页面是「左侧栏 + 中间对话区」的布局，功能位置如下：",
            },
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：`+ New chat` 开新对话，下面是 `Search chats`（搜索历史对话）、`Library`、`GPTs`、`Projects`。",
                "**左侧栏下半部分**：按时间排列的历史会话，点一条就能继续聊；鼠标悬停会出现 `···`，可重命名、置顶或删除。",
                "**顶部中间**：模型切换器（显示当前模型名）。点它能在不同模型之间切换，`Temporary` 开关也在这一行，打开后这次对话不进历史、不用于训练。",
                "**底部**：输入框。左边的 `+` 号用来加文件、开工具；右边是语音和发送按钮。",
                "**左下角头像**：点开是 Settings（设置）、订阅管理和退出登录——所有账号级设置都在这里。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/chatgpt/chat-ui.svg",
              caption: "网页版主界面：左侧是会话与 GPTs，顶部切模型，底部是输入框（示意图）",
            },
            {
              kind: "note",
              text: "界面随版本更新会变。找不到某个入口时，优先翻**左侧栏**和**左下角头像菜单**，绝大多数开关都在这两处。",
            },
          ],
        },
        {
          title: "核心用法：5 个可以直接复制的提示词",
          blocks: [
            {
              kind: "text",
              text: "提问公式：**角色 + 背景 + 任务 + 输出格式**。下面五个模板覆盖最常见的场景，把尖括号里的内容替换掉即可。",
            },
            {
              kind: "code",
              lang: "text",
              code: "【写作润色】把下面这段工作总结改成正式周报语气，控制在 300 字以内，用三点式列出，每点先写结果再写数据，只输出改写后的内容：\n\n<粘贴你的原文>",
              caption: "写作 / 润色：指定风格、字数、结构",
            },
            {
              kind: "code",
              lang: "text",
              code: "【读文件】这是我上传的《<文件名>》。请：1）用 5 条要点总结；2）列出所有涉及金额和时间的数字；3）指出文档里前后矛盾的地方。",
              caption: "读文档：先上传 PDF / Word / Excel，再发这句话",
            },
            {
              kind: "code",
              lang: "text",
              code: "【表格化】把下面的信息整理成 Markdown 表格，列名用中文，缺失的字段填「未提及」，不要补充你没看到的内容：\n\n<粘贴内容>",
              caption: "结构化输出：把一段乱文本变成表格",
            },
            {
              kind: "code",
              lang: "text",
              code: "【学概念】用一个生活中的类比解释 <概念>，然后给一个反例，最后出 3 道由易到难的练习题，先不要给答案。",
              caption: "学习 / 答疑：要类比、要反例、要练习",
            },
            {
              kind: "code",
              lang: "text",
              code: "【做调研】用联网搜索查 <主题> 在最近一年内的进展，只引用权威来源，每条结论后面附上原文链接，最后用一句话说清楚哪些结论存在争议。",
              caption: "联网调研：要求它给来源和争议点",
            },
          ],
        },
        {
          title: "进阶设置：自定义指令、记忆、项目",
          blocks: [
            {
              kind: "text",
              text: "点左下角（手机端是侧边栏）的**头像 → Settings**，几个最有价值的设置：",
            },
            {
              kind: "list",
              items: [
                "**Personalization → Custom Instructions**：写一次，之后所有对话都生效（免费用户上限 1500 字符，Plus 及以上 5000 字符）。",
                "**Personalization → Memory**：让 ChatGPT 记住你的偏好、身份、常用格式，可以逐条查看和删除。",
                "**Data Controls**：数据与训练相关开关，见第 9 步。",
                "**Projects（左侧栏）**：新建一个项目，把同一主题的文件和对话都放进去，适合长期任务（比如「求职」「装修」）。",
                "**语音**：手机 App 和桌面端都有语音模式，点麦克风图标即可，练口语、开车时提问最好用。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "【中文回答】除专有名词外一律用简体中文。\n【结构】先给一句话结论，再展开；步骤用有序列表，对比用表格。\n【严谨】不确定的地方明确标注「不确定」，不要编造数据、法规或文献来源。\n【长度】默认不超过 400 字，除非我说「展开讲」。\n【身份】我是做 <你的行业/岗位> 的，请用这个行业里通行的说法来解释。",
              caption: "自定义指令模板：Settings → Personalization → Custom Instructions",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**联网调研**：在 `+` 号里打开 Web search，或直接问「帮我查最新的…」，回答会给出来源链接，自己点开核对一遍。",
                "**上传文件做分析**：把 Excel 拖进输入框，然后说「找出异常值并说明可能原因」，比让它凭空算靠谱得多。",
                "**长文精读**：上传 PDF 后先要摘要，再按章节追问，比一次让它「全部总结」质量高得多。",
                "**PPT / 汇报大纲**：先让它出三级大纲，你改完再让它逐页填内容，避免一上来就生成一堆废话。",
                "**翻译流水线**：先直译，再说「按中文母语者习惯润色，保留专业术语」，两步比一步自然。",
                "**配合 GPTs**：在 GPTs 里找现成的翻译官、面试教练、代码审查员，比每次重新描述需求省事。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "我要做一份关于 <主题> 的 10 页汇报。先只给我三级大纲（每页标题 + 3 个要点），我确认后再逐页扩写成正文，正文每页不超过 180 字。",
              caption: "典型的两段式长任务：先大纲、后正文",
            },
          ],
        },
        {
          title: "数据与隐私：训练开关在哪关",
          blocks: [
            {
              kind: "text",
              text: "官方帮助中心给出的路径：网页版点**头像 → Settings → Data Controls**，把 **Improve the model for everyone** 关掉。关掉后对话仍会保存在历史里，但不再用于训练模型。",
            },
            {
              kind: "list",
              items: [
                "**关闭训练**：Settings → Data Controls → Improve the model for everyone（关）。手机端：侧边栏 → 头像 → Data Controls → 同一个开关。",
                "**临时对话**：输入框上方的 `Temporary`。不写入历史、不用于训练、不产生记忆，30 天后删除。",
                "**导出数据**：Settings → Data Controls → Export data，会发一封带下载链接的邮件。",
                "**删除对话**：左侧会话条目 `···` → Delete。整账号删除在 Data Controls 页面底部。",
                "**共享链接**：对话右上角的分享链接任何人都能看，发出去前确认里面没有敏感内容。",
              ],
            },
            {
              kind: "warn",
              text: "任何云端 AI 都不要直接粘贴身份证、银行卡、公司内部合同或客户名单。关闭训练开关只解决「是否用于训练」，不等于文件不会离开你的电脑——敏感资料先脱敏（把姓名、电话、账号替换成占位符）再上传。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` 发送，`Shift + Enter` 换行；粘贴长文本前先按 `Shift + Enter` 不会误发。",
                "回答不满意就直接说「重写一遍，更简洁 / 换成表格 / 用中文」，比重新开一轮快。",
                "长回答被网络打断时，回一句「继续」就能接上。",
                "让它在动手前先说方案：「先别改，用 8 行说清你打算怎么做」，确认后再让它扩写。",
                "把常用的自定义指令写进 Custom Instructions，胜过每轮对话重复交代背景。",
                "免费额度按周期自动恢复，用完等一会儿即可，不要频繁注册小号（同一网络下多账号会互相牵连）。",
                "在手机上用外区 App Store 账号装官方 App，桌面端和网页端记录完全同步。",
              ],
            },
            {
              kind: "note",
              text: "如果你的网络环境不稳定，做长任务前先切到更稳的节点；中途断网导致的长文丢失是免费版最常见的「数据损失」。",
            },
          ],
        },
      ],
      configs: [
        {
          path: "自定义指令（网页版 Settings → Personalization → Custom Instructions；手机端 Settings → Customize ChatGPT）",
          desc: "写一次，所有新对话都按这个来。免费用户上限 1500 字符，Plus 及以上 5000 字符。",
          code: `【中文回答】除专有名词外一律用简体中文。
【结构】先给一句话结论，再展开理由；步骤用有序列表，对比用表格。
【严谨】不确定的地方标注「不确定」，不要编造数据、法规或文献。
【长度】默认不超过 400 字，除非我说「展开讲」。
【身份】我是 <你的岗位/行业>，请用这个行业的通行说法解释。`,
        },
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "把最常用的几个存进备忘录，省掉每次重新组织语言。",
          code: `【写作】把下面这段文字改成 <目标风格>，控制在 <字数> 字以内，保持原意，只输出改写后的内容：
<粘贴原文>

【读文件】这是我上传的 <文件名>，请用 5 条要点总结，列出所有金额和时间数字，并指出前后矛盾处。

【表格化】把下面内容整理成 Markdown 表格，列名用中文，缺失字段填「未提及」：
<粘贴内容>

【调研】用联网搜索查 <主题> 的最新进展，只引用权威来源，每条结论附链接。`,
        },
        {
          path: "API 接入示例（platform.openai.com 生成 Key，可选）",
          desc: "想批量处理才需要自己写代码调用。注意：ChatGPT 订阅和 API 是两套计费，互不包含。",
          code: `curl https://api.openai.com/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $OPENAI_API_KEY" -d '{"model":"<你账号里可用的模型名>","messages":[{"role":"user","content":"用三点总结这段话"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "官网打不开、一直转圈",
          fix: "先确认网络环境能打开 google.com；然后换一个节点、清理浏览器缓存、用无痕窗口重开。企业网络和部分校园网的出口 IP 常被判定为不支持地区。",
        },
        {
          problem: "收不到验证码 / 验证邮件",
          fix: "先翻垃圾邮件箱，搜发件人 openai 再找一遍。手机号验证只支持部分国家和地区，中国大陆 +86 号码收不到属于正常现象，改用邮箱或 Google/Apple 账号注册即可。",
        },
        {
          problem: "注册或登录被拒：Not available in your country / Signup is currently unavailable",
          fix: "出口 IP 的地区问题。换到支持地区的节点，关掉浏览器定位权限和翻译插件，用无痕窗口重新打开官网注册。同一个邮箱短时间内不要反复提交。",
        },
        {
          problem: "提示额度用完（You've reached your limit / 稍后再试）",
          fix: "免费额度按周期自动恢复，等一会儿再试即可；急用就订阅 Plus。额度与恢复时间可以在 Settings → Subscription 里查看。",
        },
        {
          problem: "回答写到一半中断，或报 Something went wrong",
          fix: "多数是网络波动。回一句「继续」通常能接上；频繁中断就把任务拆小、缩短自定义指令、换更稳定的节点。",
        },
        {
          problem: "手机上装不上，或登录后马上被登出",
          fix: "国区 App Store 没有官方 App，需要外区 Apple ID；登录时手机也要在同一网络环境下，并允许 App 在后台使用网络。如果反复被登出，先退出所有设备再重新登录。",
        },
      ],
      cost:
        "免费版可以长期用，模型和次数有上限、按周期恢复；Plus 目前 $20/月，另有更贵的 Pro 档，价格与额度以官网为准。订阅在 `Settings → Subscription` 里可以随时取消，取消后到期前仍能用。支付需要境外信用卡或虚拟卡，国内银行卡一般不支持。额度超额时会提示「已达上限」，等重置或升级即可，不会自动扣费。",
    },
    en: {
      difficulty: "Beginner (if you can type, you can use it)",
      os: "Web / iOS / Android / macOS / Windows desktop apps",
      prereq: [
        {
          label: "Account (required: email or phone)",
          detail:
            "Email is the simplest route (Gmail, Outlook, QQ Mail all work); Google or Apple sign-in works too. One email or phone number maps to one account — never buy or share an account, as shared logins get flagged and banned.",
        },
        {
          label: "Network (mandatory)",
          detail:
            "ChatGPT is not available in mainland China. You need a connection that can reach chatgpt.com with an exit IP in a supported country. Keep the connection stable while signing up — hopping between nodes mid-signup often triggers extra verification or a ban.",
        },
        {
          label: "Payment (optional, free tier first)",
          detail:
            "The free tier chats, reads files and browses the web, with lower model limits. Upgrade to Plus (currently $20/mo, check the official site) for stronger models and higher caps. Payment requires an international credit card or virtual card.",
        },
        {
          label: "Desktop",
          detail:
            "Use chatgpt.com in a desktop browser. Optionally install the macOS/Windows app for a global shortcut. This guide does not cover the phone app.",
        },
        {
          label: "Region and age limits",
          detail:
            "Signup may ask for phone verification, and +86 (mainland China) numbers are not supported, so no SMS arrives. Users under 13 (18 in some regions) cannot register.",
        },
      ],
      steps: [
        {
          title: "Open the official site — check the domain first",
          blocks: [
            {
              kind: "text",
              text: "There are only two official entry points: **chatgpt.com** and **chat.openai.com** (which redirects to the first). Look for `openai.com` / `chatgpt.com` in the address bar. The interface language can be changed to Chinese, but the domain never changes.",
            },
            {
              kind: "warn",
              text: "Searching for ChatGPT surfaces dozens of \"ChatGPT 中文版 / mirrored / no-VPN\" clones. They are not official: some resell access, others log your chats and credentials. **Use only chatgpt.com and chat.openai.com.** If a site asks you to top up before you can try it and the domain isn't one of those two, close the tab.",
            },
            {
              kind: "note",
              text: "If the page won't load, check your network first (step 3). Endless spinners, `Access denied`, `429` or \"not available in your country\" almost always mean the exit IP is in an unsupported region — the site isn't down.",
            },
          ],
        },
        {
          title: "Sign up: email, Google or Apple",
          blocks: [
            {
              kind: "text",
              text: "Click **Sign up** in the top-right corner. Any one of three routes works; email or Google is recommended.",
            },
            {
              kind: "list",
              items: [
                "**Email**: enter your address, set a password, then grab the 6-digit code from the email and click Verify email. It often lands in spam — searching the sender `openai` will find it.",
                "**Google / Apple**: click `Continue with Google` or `Continue with Apple`, then authorise an account. No new password to remember.",
                "**Phone**: only some countries are supported. +86 (mainland China) numbers are not, so no code will ever arrive.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/chatgpt/signup.svg",
              caption: "The signup page: pick email, Google or Apple (illustration)",
            },
            {
              kind: "note",
              text: "Signup asks for your name and date of birth — fill them in honestly (an age mismatch disables the account). Once submitted you land straight in the chat UI; no further confirmation is needed.",
            },
          ],
        },
        {
          title: "Log in, and what to do when it won't load",
          blocks: [
            {
              kind: "text",
              text: "Your session is remembered on chatgpt.com. On a new device, click **Log in** and use whichever method you signed up with. The four problems people hit most:",
            },
            {
              kind: "list",
              items: [
                "**Page never loads / connection timeout**: your network isn't connected. Confirm google.com opens first, then retry ChatGPT.",
                "**`Not available in your country` / `Access denied`**: the exit IP is in an unsupported region. Switch nodes, clear the browser cache and reopen in a private window.",
                "**Bounced back to the login page**: third-party cookies are blocked. Allow site data in your browser settings and try again.",
                "**Endless spinner or `Oops! Something went wrong`**: use the latest Chrome or Edge and temporarily disable ad blockers and translation extensions.",
              ],
            },
            {
              kind: "note",
              text: "Once signed in, the web app is fully usable with no install. Use the mobile app on the same network, otherwise it will spin forever too.",
            },
          ],
        },
        {
          title: "Optional desktop app: global shortcut",
          blocks: [
            {
              kind: "list",
              items: [
                "Download macOS or Windows from [chatgpt.com/download](https://chatgpt.com/download)",
                "Sign in with the same account as the website — history syncs",
                "Enable the global shortcut (often Option+Space on Mac)",
              ],
            },
            {
              kind: "warn",
              text: "Only the official installer. Third-party “ChatGPT clients” that ask for your OpenAI password are phishing.",
            },
          ],
        },
        {
          title: "Tour the interface: sidebar, model switcher, composer",
          blocks: [
            {
              kind: "text",
              text: "After signing in you get a left sidebar plus a chat area. Here is where everything lives:",
            },
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: `+ New chat`, then `Search chats`, `Library`, `GPTs` and `Projects`.",
                "**Lower sidebar**: your conversations in reverse-chronological order. Click one to continue; hovering reveals `···` for rename, pin and delete.",
                "**Top centre**: the model switcher (it shows the current model). Click it to change models. The `Temporary` toggle sits on the same row — temporary chats are not saved to history and are not used for training.",
                "**Bottom**: the composer. The `+` button on the left adds files and opens tools; voice and send are on the right.",
                "**Bottom-left avatar**: Settings, billing and logout. Every account-level option lives behind this menu.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/chatgpt/chat-ui.svg",
              caption: "The web app: conversations and GPTs on the left, model picker on top, composer at the bottom (illustration)",
            },
            {
              kind: "note",
              text: "Menus move between releases. If you can't find something, look in the **left sidebar** and the **bottom-left avatar menu** first — almost everything lives there.",
            },
          ],
        },
        {
          title: "Core usage: five prompts you can copy",
          blocks: [
            {
              kind: "text",
              text: "The formula that works: **role + context + task + output format**. These five cover most everyday jobs — just fill in the angle brackets.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Rewrite the work summary below as a formal weekly report, under 300 words, as three bullet points, each starting with the result then the numbers. Output only the rewritten text:\n\n<paste your text>",
              caption: "Writing / polishing: style, length and structure specified",
            },
            {
              kind: "code",
              lang: "text",
              code: "This is the <filename> I uploaded. 1) Summarise it in 5 bullet points. 2) List every amount and date. 3) Point out anything that contradicts itself.",
              caption: "Document reading: upload the PDF/Word/Excel first, then send this",
            },
            {
              kind: "code",
              lang: "text",
              code: "Turn the information below into a Markdown table with English column headers. Write \"not mentioned\" for missing fields and never invent values:\n\n<paste content>",
              caption: "Structured output: messy text into a table",
            },
            {
              kind: "code",
              lang: "text",
              code: "Explain <concept> with an everyday analogy, then give a counter-example, then 3 practice questions from easy to hard. Don't give the answers yet.",
              caption: "Learning: analogy, counter-example, practice",
            },
            {
              kind: "code",
              lang: "text",
              code: "Use web search to find developments in <topic> over the past year. Cite authoritative sources only, link each conclusion, and finish by naming the points experts disagree on.",
              caption: "Web research: demand sources and open questions",
            },
          ],
        },
        {
          title: "Advanced settings: custom instructions, memory, projects",
          blocks: [
            {
              kind: "text",
              text: "Click your **avatar → Settings** (sidebar → avatar on mobile). The settings worth your time:",
            },
            {
              kind: "list",
              items: [
                "**Personalization → Custom Instructions**: written once, applied to every chat (1,500 characters on Free, 5,000 on Plus and above).",
                "**Personalization → Memory**: lets ChatGPT remember preferences and formats; review and delete individual memories any time.",
                "**Data Controls**: training and export switches — see step 9.",
                "**Projects (in the sidebar)**: group files and conversations for one long-running goal (a job hunt, a renovation).",
                "**Voice**: both the mobile and desktop apps have a voice mode behind the microphone icon — great for language practice or hands-free questions.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "[Language] Always answer in English unless the question is about Chinese text.\n[Structure] One-sentence conclusion first, then the reasoning; numbered lists for steps, tables for comparisons.\n[Rigour] Mark anything uncertain as \"uncertain\". Never invent data, regulations or citations.\n[Length] Default to under 250 words unless I say \"go deeper\".\n[Me] I work in <your field>; use the vocabulary people in that field actually use.",
              caption: "Custom-instructions template: Settings → Personalization → Custom Instructions",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Web research**: enable Web search from the `+` menu, or just ask \"look up the latest …\". Answers come with sources — open a couple and verify.",
                "**File analysis**: drag an Excel file into the composer and ask it to \"find the outliers and explain them\". Far more reliable than asking it to guess.",
                "**Long-document reading**: upload the PDF, ask for a summary first, then interrogate it chapter by chapter.",
                "**Deck and report outlines**: ask for a three-level outline, edit it yourself, then have it fill in each section — better than one giant generation.",
                "**Translation pipeline**: translate literally first, then ask it to \"make it read like native English while keeping the terminology\".",
                "**Use GPTs**: ready-made translators, interview coaches and reviewers save you from re-describing the task every time.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "I'm preparing a 10-slide deck about <topic>. First give me a three-level outline only (slide title + 3 bullets). After I approve, expand each slide into under 120 words of body text.",
              caption: "Two-stage long task: outline first, content second",
            },
          ],
        },
        {
          title: "Data and privacy: where the training switch is",
          blocks: [
            {
              kind: "text",
              text: "Per OpenAI's help centre: open **avatar → Settings → Data Controls** and turn off **Improve the model for everyone**. Your chats stay in your history, but they are no longer used to train models.",
            },
            {
              kind: "list",
              items: [
                "**Turn off training**: Settings → Data Controls → Improve the model for everyone (off). Mobile: sidebar → avatar → Data Controls → same switch.",
                "**Temporary chats**: the `Temporary` toggle above the composer. Not saved to history, not used for training, no memories, deleted after 30 days.",
                "**Export your data**: Settings → Data Controls → Export data — you get an email with a download link.",
                "**Delete chats**: hover a sidebar conversation, `···` → Delete. Account deletion sits at the bottom of the Data Controls page.",
                "**Shared links**: a shared conversation is readable by anyone with the link. Check for sensitive content before sending.",
              ],
            },
            {
              kind: "warn",
              text: "Never paste ID scans, bank cards, internal contracts or customer lists into any cloud AI. The training switch only controls training — it does not keep data on your machine. Redact names, phone numbers and account numbers before uploading.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` sends, `Shift + Enter` makes a new line — use it before pasting long text.",
                "Not happy with an answer? Just say \"rewrite it shorter / as a table / in Chinese\" instead of starting a new chat.",
                "If a long answer gets cut off, reply \"continue\" and it picks up where it stopped.",
                "Ask for the plan before the work: \"don't write anything yet — explain your approach in 8 lines\".",
                "Put your standing preferences in Custom Instructions instead of repeating context every chat.",
                "Free limits reset on a rolling schedule — wait it out rather than spinning up extra accounts, which can get linked and banned together.",
                "Install the official app with an overseas App Store account; history and files sync with the web app instantly.",
              ],
            },
            {
              kind: "note",
              text: "On a flaky connection, switch to a stable node before long tasks — losing a half-written report is the most common free-tier \"data loss\".",
            },
          ],
        },
      ],
      configs: [
        {
          path: "Custom instructions (web: Settings → Personalization → Custom Instructions; mobile: Settings → Customize ChatGPT)",
          desc: "Written once, applied to every new chat. 1,500 characters on Free, 5,000 on Plus and above.",
          code: `[Language] Answer in English unless the question is about Chinese text.
[Structure] Conclusion first, then reasoning; numbered lists for steps, tables for comparisons.
[Rigour] Mark uncertain statements as "uncertain". Never invent data, regulations or citations.
[Length] Under 250 words by default unless I ask for more depth.
[Me] I work in <your field>; use that field's vocabulary.`,
        },
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Keep your five most-used prompts in a note — you'll stop re-writing the framing every time.",
          code: `[Writing] Rewrite the text below in <target style>, under <n> words, keeping the meaning. Output only the rewrite:
<paste>

[File] This is the <filename> I uploaded: summarise in 5 bullets, list every amount and date, and flag contradictions.

[Table] Turn the following into a Markdown table. Use "not mentioned" for missing fields:
<paste>

[Research] Search the web for the latest on <topic>. Cite authoritative sources only and link every conclusion.`,
        },
        {
          path: "API example (optional — get a key at platform.openai.com)",
          desc: "Only needed for batch or scripted work. Note that a ChatGPT subscription and API usage are billed separately.",
          code: `curl https://api.openai.com/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $OPENAI_API_KEY" -d '{"model":"<a model available on your account>","messages":[{"role":"user","content":"Summarise this in three points"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "The site won't load, just spins",
          fix: "Check your connection can reach google.com, then switch node, clear the browser cache and retry in a private window. Corporate and campus networks are often geo-blocked.",
        },
        {
          problem: "No verification code or email arrives",
          fix: "Check spam and search for the sender `openai`. Phone verification only supports certain countries — +86 numbers won't receive anything. Sign up with email, Google or Apple instead.",
        },
        {
          problem: "\"Not available in your country\" / \"Signup is currently unavailable\"",
          fix: "A geo issue with your exit IP. Move to a supported region, revoke location permission for the site, disable translation extensions and retry in a private window. Don't hammer the form with the same email.",
        },
        {
          problem: "\"You've reached your limit\"",
          fix: "Free quotas reset on a rolling schedule — wait and retry, or subscribe to Plus. Check your limits and reset time under Settings → Subscription.",
        },
        {
          problem: "Answers stop halfway or return \"Something went wrong\"",
          fix: "Usually a network blip. Reply \"continue\" — it often resumes. If it keeps happening, shorten your custom instructions, split the task and use a more stable connection.",
        },
        {
          problem: "Can't install on mobile, or get logged out immediately",
          fix: "The official app isn't in the China App Store — you need an overseas Apple ID. Keep the phone on the same network and allow background network access. If you're repeatedly logged out, sign out of all devices and log in again.",
        },
      ],
      cost:
        "The free tier is usable long term, with model and message caps that reset on a rolling schedule. Plus is currently $20/mo and there's a pricier Pro tier — check the official site for current prices and limits. You can cancel any time under `Settings → Subscription`; you keep access until the period ends. Payment needs an international card or virtual card. Hitting a limit just shows a message — nothing is charged automatically.",
    },
  },

  claude: {
    zh: {
      difficulty: "入门（零基础可上手）",
      os: "网页 / iOS / Android / macOS / Windows 桌面客户端",
      prereq: [
        {
          label: "账号（必需：邮箱 + 手机号验证）",
          detail:
            "用邮箱注册（收一封登录链接或验证码），也可以用 Google 账号一键登录。注册后通常会要求手机号验证，需要能收到短信的、受支持地区的号码。",
        },
        {
          label: "网络环境（硬性要求）",
          detail:
            "claude.ai 不对中国大陆开放，需要能访问 claude.ai 的网络环境，出口 IP 要在支持的国家或地区。注册和登录期间别频繁换节点，否则容易触发验证。",
        },
        {
          label: "付费（可先用免费版）",
          detail:
            "免费版就能聊天、传文件、联网搜索，额度按 5 小时滚动重置；重度使用再升 Pro（目前 $20/月，以官网为准）。支付需要境外信用卡或虚拟卡。",
        },
        {
          label: "客户端（建议装官方 App）",
          detail:
            "网页能聊。语音、听写、快捷唤起在官方手机 / 桌面 App 里更顺，见下面「App 使用」。账号和网页完全互通。",
        },
        {
          label: "地区与年龄限制",
          detail:
            "Claude 只对部分国家和地区开放，注册时手机号验证最容易卡住中国大陆用户。未达最低年龄要求的账号会被限制访问。",
        },
      ],
      steps: [
        {
          title: "打开官网，认准 claude.ai",
          blocks: [
            {
              kind: "text",
              text: "官方地址就是 **claude.ai**（公司官网 anthropic.com 是介绍页，不能聊天）。打开后页面右上角是 **Sign in / Sign up**，左下角是登录后的账号入口。",
            },
            {
              kind: "shot",
              src: "/shots/claude/site.png",
              caption: "claude.ai 官网：右上角 Sign in / Sign up，页面语言可切换成中文",
            },
            {
              kind: "warn",
              text: "搜索引擎里排名靠前的「Claude 中文版」「Claude 免登录版」「Claude 镜像」都不是 Anthropic 官方站点。它们可能替你转卖额度，也可能记录你的对话和上传的文件——只认 claude.ai。",
            },
          ],
        },
        {
          title: "注册账号：邮箱链接、Google 与手机号验证",
          blocks: [
            {
              kind: "text",
              text: "点 **Sign up**，输入邮箱，Claude 会给你发一封**登录链接或验证码**（Magic link 方式，不需要设密码）。也可以直接点 `Continue with Google`。",
            },
            {
              kind: "list",
              items: [
                "邮箱链接注册：收邮件 → 点邮件里的链接 → 回到浏览器即完成登录。链接有时效，过期就重新发一封。",
                "Google 注册：选账号 → 授权 → 直接进入对话界面，不用记密码。",
                "邮件经常进垃圾箱，搜发件人 `anthropic` 或 `claude` 再找一遍。",
              ],
            },
            {
              kind: "note",
              text: "注册完会要求填姓名（或个人称呼）和年龄信息，按实际情况填写。地区字段如果被填成不支持的国家，之后每次登录都可能被拦。",
            },
            {
              kind: "text",
              text: "Claude 会要求验证手机号来防盗号和滥用，这一步是官方流程，跳过不了。用**支持地区的号码**（例如你自己的海外号码，或家人朋友在国外使用的号码）。",
            },
            {
              kind: "list",
              items: [
                "收不到短信时先等 60 秒再点重发，短时间内反复点会被限流。",
                "确认手机能接收国际短信（部分运营商默认关闭境外短信，需要找运营商开通）。",
                "同一个号码短时间内不要反复验证多个账号，容易被标记。",
              ],
            },
            {
              kind: "warn",
              text: "不要用网上来路不明的「接码平台」号码批量注册。这类号码会被大量账号共用，注册完很快就会被封，账号里积累的对话也一起没了。",
            },
          ],
        },
        {
          title: "登录，以及打不开时怎么办",
          blocks: [
            {
              kind: "text",
              text: "再次访问 claude.ai 会自动登录；在别的设备上点 **Sign in**，用邮箱链接或用 Google 登录。国内常见情况：",
            },
            {
              kind: "list",
              items: [
                "**页面打不开 / 一直转圈**：网络环境没生效，先确认能打开 google.com 再回来。",
                "**提示「Claude is not available in your region」**：出口 IP 地区不支持，换节点后清缓存再用无痕窗口登录。",
                "**登录后立刻被登出**：允许第三方 Cookie；如果开了隐私类扩展（重点关拦截脚本的），先临时关闭。",
                "**卡在人机验证**：换浏览器最新版，关掉翻译插件，别用「隐私浏览器」的激进拦截模式。",
              ],
            },
            {
              kind: "note",
              text: "在「设置 → 会话管理」里可以看到所有已登录设备，发现陌生设备就直接退出该会话，并改掉邮箱密码。",
            },
          ],
        },
        {
          title: "电脑桌面端（可选）",
          blocks: [
            {
              kind: "list",
              items: [
                "在 Claude 官网或帮助中心打开 **Install Claude Desktop**，下载 macOS / Windows 安装包",
                "用和网页相同的账号登录，会话和项目会同步",
                "适合把 Claude 当常驻助手；日常长文仍建议用浏览器窗口",
              ],
            },
          ],
        },
        {
          title: "界面导览：左侧栏、模型菜单、输入框",
          blocks: [
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：`+ New chat` 开新对话；下面是 `Chats`（所有对话）、`Projects`（项目）、`Artifacts`（你让它生成的文档/网页/代码）。",
                "**左侧栏中部**：`Recents` 最近会话列表，点开就能接着聊；可重命名、删除、分享。",
                "**左下角**：你的名字缩写，点开是 **Settings**——自定义指令、外观、订阅、隐私都在这里。",
                "**输入框左下角**：一个 `+` 按钮，点开是工具菜单（官方文档明确说明 **Web search** 就在这里开关）。",
                "**发送按钮旁边**：显示当前模型名（如 `Sonnet 5`），点它就能切换**模型 / effort（思考投入程度）/ thinking（思考过程）**。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/claude/chat-ui.svg",
              caption: "Claude 网页版：左侧会话与项目，输入框左下角 + 号是 Web search，模型菜单在发送按钮旁（示意图）",
            },
            {
              kind: "note",
              text: "Claude 的界面分「经典体验」和「新版体验」两套，新版里 Web search 不再是一个手动开关，Claude 判断需要联网时自己去搜。找不到开关属正常，直接在提问里写「搜索一下最新的…」即可。",
            },
          ],
        },
        {
          title: "核心用法：5 个可以直接复制的提示词",
          blocks: [
            {
              kind: "text",
              text: "Claude 的强项是长文本、写作和结构化分析。下面模板按场景给，尖括号里的内容换成你自己的。",
            },
            {
              kind: "code",
              lang: "text",
              code: "【读长文】我上传了一份 <文件类型，如 60 页 PDF>。请：1）先给 10 行以内的摘要；2）按章节列出一份带页码的目录；3）找出作者没有明确说、但数据暗示的结论。",
              caption: "长文档：先摘要、再结构、最后追问隐含结论",
            },
            {
              kind: "code",
              lang: "text",
              code: "【写作】用<风格，如：克制的商业分析>风格写一篇 800 字的<主题>，开头用一个具体场景切入，不要用「在当今时代」这类套话，结尾给三条可执行建议。",
              caption: "写作：给风格、结构、禁用词",
            },
            {
              kind: "code",
              lang: "text",
              code: "【改稿】下面这段读起来很啰嗦，请在不改变事实的前提下压缩 40%，去掉形容词和重复句，只输出改后版本：\n\n<粘贴原文>",
              caption: "改稿压缩：只给结果，不要解释",
            },
            {
              kind: "code",
              lang: "text",
              code: "【对比分析】把这三种方案（<方案 A / B / C>）做成一张对比表，列包括：成本、上手难度、可维护性、适用场景。表后用 3 句话说明什么情况下选哪个。",
              caption: "决策支持：先表格，后结论",
            },
            {
              kind: "code",
              lang: "text",
              code: "【做成品】帮我做一个单文件 HTML 页面，用来展示<内容>，样式简洁、适配手机。先给我文件结构和一个可运行的初版，再按我的意见改。",
              caption: "Artifacts：让它直接产出可预览的文件",
            },
          ],
        },
        {
          title: "进阶设置：自定义指令、项目、模型与思考模式",
          blocks: [
            {
              kind: "text",
              text: "所有账号级设置都在**左下角缩写 → Settings**；项目相关设置则在项目页面里。",
            },
            {
              kind: "list",
              items: [
                "**Instructions for Claude**（Settings 里）：账号级自定义指令，对所有对话生效。写你的身份、偏好、常用格式和绝对不要做的事。",
                "**Projects**：把一个主题的资料（文档、代码、参考链接）放进一个项目，之后该项目里的对话都会参考这些资料；还可以单独写项目说明。免费账号也能建项目（数量有限）。",
                "**模型 / effort / thinking**：点发送按钮旁的模型名切换。日常任务用默认；数学、代码、长文档分析再调到更高 effort 或打开 thinking，会更慢但更准。",
                "**联网搜索**：输入框左下角 `+` → `Web search`（新版体验里由 Claude 自行判断）。",
                "**上传文件**：把 PDF、Word、图片直接拖进输入框，或点回形针。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "【身份】我在 <行业> 做 <岗位>，日常处理 <文档类型>。\n【语言】默认中文；英文术语保留原文。\n【格式】结论先行，然后给依据；超过 3 步用有序列表。\n【风格】直接、少客套，不要用「希望对你有帮助」这类收尾。\n【禁止】不要编造引用和链接；不确定就说不确定。",
              caption: "Instructions for Claude 模板：左下角缩写 → Settings → Instructions for Claude",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**长文档工作流**：把 PDF/合同/论文拖进去 → 要摘要 → 逐条追问 → 让它输出一份可复制的要点清单。",
                "**写作流水线**：先让它出 3 个不同角度的开头 → 你挑一个 → 再扩写正文 → 最后让它按「啰嗦、重复、空话」三类自查。",
                "**项目资料库**：把团队规范、术语表放进 Projects，之后所有相关对话自动带上这些上下文，不用每次重贴。",
                "**Artifacts 做小工具**：一个单文件 HTML 计算器、图表页、卡片式文案排版，改起来比来回描述快得多。",
                "**联网查资料**：让它搜索后附上来源链接，自己点开核对；重要结论不要只看它的转述。",
                "**翻译 + 润色两步走**：先直译保证准确，再让它在不丢信息的前提下改成地道表达。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "请基于我上传的这份 <合同 / 论文 / 财报>：第一，用 10 行以内说清它讲了什么；第二，列出对我最重要的 5 个条款或结论，并各附一句理由；第三，指出里面表述模糊、可能对我不利的地方。",
              caption: "一份文件三层追问法：概览 → 重点 → 风险",
            },
          ],
        },
        {
          title: "数据与隐私设置",
          blocks: [
            {
              kind: "text",
              text: "Claude 的隐私相关开关都在 **Settings** 里，名字可能随版本变化，找不到就用页面搜索框搜 privacy / data 这类关键词。",
            },
            {
              kind: "list",
              items: [
                "**改动**：定期打开 Settings 检查与隐私、数据相关的开关，尤其是「用于改进服务/模型」之类的选项，按你的需要在 Settings 中关闭。",
                "**无痕对话（Incognito）**：适用于不想留在历史里的对话，可以在对话菜单里开启；官方帮助中心有专门的 Incognito chats 说明。",
                "**导出数据**：帮助中心提供 Export your Claude data，提交后会给你数据文件。",
                "**删除对话**：会话列表里选择对话，重命名或删除；删除后不可恢复。",
                "**会话与账号安全**：管理已登录设备的方法在账号设置里；长期不用就退出其他会话。",
              ],
            },
            {
              kind: "warn",
              text: "不要把身份证、银行卡、工资单、未公开的合同直接上传。即便关闭了参与改进服务的选项，数据依然会经过云端服务器——上传前把姓名、电话、账号、金额替换成占位符再问。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "回答太长时直接说「压到 300 字」或「只保留结论」，比重新提问省额度。",
                "上传超长 PDF 时，先问「这份文档一共几部分」，再针对某一部分追问，比一次全量总结更省额度也更准。",
                "免费额度按 5 小时滚动重置，联网搜索和读取长链接都会消耗额度，不用联网时记得关掉。",
                "把常用要求写进 Instructions for Claude，比每轮重复交代背景省事得多。",
                "复制一段文字后按快捷键打开新对话，直接粘贴即可继续处理，不用回到原会话。",
                "写到一半被截断时回一句「继续」；连续截断就把任务拆成两段。",
                "同一主题的资料统一放进一个 Project，长期项目会越用越顺手。",
              ],
            },
            {
              kind: "note",
              text: "免费账号的额度重置周期是 5 小时；如果你经常在下午被打断，把重活安排在刚重置之后的第一小时做，体感会好很多。",
            },
          ],
        },
      ],
      configs: [
        {
          path: "Instructions for Claude（左下角缩写 → Settings → Instructions for Claude）",
          desc: "账号级指令，所有对话都生效。写身份、语言、格式、风格和禁止项，比每轮重复交代高效得多。",
          code: `【身份】我在 <行业> 做 <岗位>，日常处理 <文档类型>。
【语言】默认中文，英文术语保留原文。
【格式】结论先行再给依据；超过 3 步用有序列表；对比用表格。
【风格】直接、少客套，不要写「希望对你有帮助」这类收尾。
【禁止】不要编造引用和链接；不确定就标注不确定。`,
        },
        {
          path: "项目说明（打开一个 Project → 添加项目指令）",
          desc: "只对这个项目里的对话生效。适合把一个长期项目（产品文档、论文、客户资料）的规则固定下来。",
          code: `项目背景：<一句话说明这个项目在做什么>
资料范围：只依据本项目中上传的文件回答，不要引用外部未经核实的内容。
术语约定：<列出你团队内部的黑话/缩写对照>
输出格式：每次回答先给「结论 / 依据 / 下一步」三段。`,
        },
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "长文阅读、改稿、决策对比三类任务覆盖日常大部分需求。",
          code: `【读长文】我上传了一份 <文档>。请先给 10 行以内摘要，再按章节列出带页码的结构，最后指出数据暗示但作者没说清的结论。

【改稿】下面这段很啰嗦，在不改变事实的前提下压缩 40%，去掉形容词和重复句，只输出改后版本：
<粘贴原文>

【对比】把 <方案 A / B / C> 做成对比表，列包括成本、上手难度、可维护性、适用场景，表后用 3 句话说明什么情况选哪个。`,
        },
      ],
      troubles: [
        {
          problem: "claude.ai 打不开或一直转圈",
          fix: "先确认网络环境能打开 google.com；换节点、清缓存后用无痕窗口重开。企业网络常被判为不支持地区。",
        },
        {
          problem: "手机号验证收不到短信，或提示号码不支持",
          fix: "Claude 只支持部分国家和地区的号码，中国大陆 +86 号码基本收不到。请使用支持地区的号码；同时确认运营商没有关闭国际短信，并等待 60 秒再点重发。不要用接码平台。",
        },
        {
          problem: "注册或登录被拒：Claude is not available in your region",
          fix: "出口 IP 的地区问题。换到支持地区的节点，关掉站点定位权限，用无痕窗口重新登录。",
        },
        {
          problem: "提示额度用完（You've reached your limit）",
          fix: "免费额度每 5 小时重置一次。联网搜索和读取长网页链接会额外消耗额度，不用时关掉 Web search，等重置后再继续。",
        },
        {
          problem: "回答写到一半停了，或长文被截断",
          fix: "回一句「继续」通常能接上；长任务拆成两段（先结构后细节）。也可能是触发了安全策略，换个说法重新提问。",
        },
        {
          problem: "App Store 搜不到 Claude / 装完登录不了",
          fix: "国区 App Store 没有上架，需要外区 Apple ID。装好后要在同一网络环境下登录，否则会卡在转圈。",
        },
      ],
      cost:
        "免费版可长期使用：额度按 **5 小时** 滚动重置（联网搜索、读取长链接都会计入额度）。Pro 目前 $20/月，另有更高档的 Max 与团队/企业方案，价格与额度以官网为准。订阅在 **Settings → Subscription** 里可以随时取消，取消后到期前仍可使用；额度不够时官方也提供购买额外用量包的选项。API（Console）与订阅是分别计费的，互不抵扣。",
    },
    en: {
      difficulty: "Beginner (no prior experience needed)",
      os: "Web / iOS / Android / macOS / Windows desktop apps",
      prereq: [
        {
          label: "Account (email + phone verification)",
          detail:
            "Sign up with an email address (you get a magic link or code) or use Google sign-in. Claude then usually asks you to verify a phone number, so you need a supported-region number that can receive SMS.",
        },
        {
          label: "Network (mandatory)",
          detail:
            "claude.ai is not available in mainland China. You need a connection that reaches claude.ai with an exit IP in a supported country. Avoid switching nodes mid-signup — it triggers extra verification.",
        },
        {
          label: "Payment (optional — start on Free)",
          detail:
            "Free covers chat, file uploads and web search, with limits that reset every 5 hours. Heavy users can move to Pro (currently $20/mo, check the official site). Payment needs an international or virtual card.",
        },
        {
          label: "Official apps (recommended)",
          detail:
            "The website works. Voice, dictation and a global shortcut are better in the official mobile and desktop apps — see “Using the app”. Same account everywhere.",
        },
        {
          label: "Region and age limits",
          detail:
            "Claude is available only in certain countries and regions; phone verification is where most mainland China users get stuck. Accounts below the minimum age get restricted.",
        },
      ],
      steps: [
        {
          title: "Open the site — make sure it's claude.ai",
          blocks: [
            {
              kind: "text",
              text: "The product lives at **claude.ai** (anthropic.com is the company site and can't chat). You'll see **Sign in / Sign up** in the top-right corner, and the account menu in the bottom-left once you're in.",
            },
            {
              kind: "shot",
              src: "/shots/claude/site.png",
              caption: "claude.ai: Sign in / Sign up top right, and the interface can be switched to Chinese",
            },
            {
              kind: "warn",
              text: "Anything called \"Claude 中文版\", \"Claude free mirror\" or \"Claude without login\" ranked in search results is not Anthropic. Those sites resell access and can log your conversations and uploaded files. Only claude.ai is official.",
            },
          ],
        },
        {
          title: "Sign up: email magic link, Google, and phone verification",
          blocks: [
            {
              kind: "text",
              text: "Click **Sign up**, enter your email, and Claude sends a **sign-in link or code** — there's no password to create. You can also hit `Continue with Google`.",
            },
            {
              kind: "list",
              items: [
                "Email route: open the email, click the link, and you're signed in in the browser. Links expire — just request a new one.",
                "Google route: pick an account, authorise, and you're in. No password to remember.",
                "The email often lands in spam — search for the sender `anthropic` or `claude`.",
              ],
            },
            {
              kind: "note",
              text: "You'll be asked for a name and age details. Fill them in accurately — picking an unsupported country can get you blocked at every future login.",
            },
            {
              kind: "text",
              text: "Claude requires phone verification for abuse prevention and there is no way around it. Use a **number from a supported region** — an overseas number you or a family member actually uses.",
            },
            {
              kind: "list",
              items: [
                "If no SMS arrives, wait 60 seconds before retrying — hammering the button gets you rate-limited.",
                "Make sure your carrier hasn't disabled international SMS (some disable it by default).",
                "Don't verify several accounts with the same number in a short window; it gets flagged.",
              ],
            },
            {
              kind: "warn",
              text: "Don't register with throwaway numbers from public SMS-receiving sites. Those numbers are shared by thousands of accounts and get banned quickly, taking your chat history with them.",
            },
          ],
        },
        {
          title: "Log in, and what to do when it won't load",
          blocks: [
            {
              kind: "text",
              text: "Returning to claude.ai keeps you signed in. On a new device click **Sign in** and use the email link or Google. The usual problems:",
            },
            {
              kind: "list",
              items: [
                "**Won't load / endless spinner**: the network isn't connected. Confirm google.com opens first.",
                "**\"Claude is not available in your region\"**: the exit IP is unsupported. Switch nodes, clear the cache, retry in a private window.",
                "**Immediately logged out after signing in**: allow third-party cookies, and temporarily disable aggressive script-blocking extensions.",
                "**Stuck on the human check**: use the latest browser build, disable translation extensions, and avoid the strictest privacy mode.",
              ],
            },
            {
              kind: "note",
              text: "You can review every signed-in device from the settings, sign out unknown sessions and change your email password if something looks wrong.",
            },
          ],
        },
        {
          title: "Optional desktop app",
          blocks: [
            {
              kind: "list",
              items: [
                "Download macOS / Windows from **Install Claude Desktop** on the site or help centre",
                "Sign in with the same account — chats and projects sync",
                "Use it as a always-on assistant; long reading is still easier in the browser",
              ],
            },
          ],
        },
        {
          title: "Tour the interface: sidebar, model menu, composer",
          blocks: [
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: `+ New chat`, then `Chats`, `Projects` and `Artifacts` (documents, pages and code Claude generated for you).",
                "**Middle of the sidebar**: `Recents`, your conversation list. Rename, delete or share from here.",
                "**Bottom-left**: your initials — click for **Settings** (instructions, appearance, subscription, privacy).",
                "**Bottom-left of the composer**: a `+` button that opens the tools menu. Anthropic's docs confirm **Web search** lives here.",
                "**Next to the send button**: the current model name (e.g. `Sonnet 5`). Click it to switch **model / effort level / thinking**.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/claude/chat-ui.svg",
              caption: "The Claude web app: chats and projects on the left, + for Web search, model menu by the send button (illustration)",
            },
            {
              kind: "note",
              text: "There are two Claude experiences: the classic one with the manual Web search toggle, and the newer one where Claude decides when to search. If you can't find the toggle, just write \"search the web for the latest …\" in your prompt.",
            },
          ],
        },
        {
          title: "Core usage: five prompts you can copy",
          blocks: [
            {
              kind: "text",
              text: "Claude shines at long documents, writing and structured analysis. Swap the angle brackets for your own content.",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Long doc] I've uploaded a <file type, e.g. 60-page PDF>. 1) Give me a summary in 10 lines or fewer. 2) List the structure by chapter with page numbers. 3) Point out conclusions the data implies but the author never states.",
              caption: "Long documents: summary, then structure, then inference",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Writing] Write an 800-word piece about <topic> in a <style, e.g. restrained business analysis> voice. Open with a concrete scene, avoid clichés like \"in today's fast-moving world\", and close with three actionable recommendations.",
              caption: "Writing: style, structure and banned phrases",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Tighten] The text below is wordy. Cut it by 40% without changing any facts, remove adjectives and repetition, and output only the edited version:\n\n<paste text>",
              caption: "Editing: output only, no commentary",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Compare] Turn these three options (<A / B / C>) into a comparison table with cost, learning curve, maintainability and best-fit scenario. Then use three sentences to say when you'd pick each.",
              caption: "Decision support: table first, verdict after",
            },
            {
              kind: "code",
              lang: "text",
              code: "[Build] Create a single-file HTML page that presents <content>, clean styling, mobile-friendly. Start with a runnable first version, then iterate on my feedback.",
              caption: "Artifacts: have it produce a previewable file",
            },
          ],
        },
        {
          title: "Advanced settings: instructions, projects, models and thinking",
          blocks: [
            {
              kind: "text",
              text: "Account-wide settings live behind **your initials (bottom-left) → Settings**; project-specific ones live inside the project page.",
            },
            {
              kind: "list",
              items: [
                "**Instructions for Claude** (in Settings): account-wide instructions applied to every chat. Put your role, language, formatting rules and hard nos here.",
                "**Projects**: collect documents, code and reference links for one topic; every chat inside the project sees them. You can also add project instructions. Free accounts can create projects too (a limited number).",
                "**Model / effort / thinking**: click the model name by the send button. Keep defaults for everyday work; raise effort or enable thinking for maths, code and long-document analysis — slower but more accurate.",
                "**Web search**: `+` at the bottom-left of the composer → `Web search` (in the newer experience Claude decides on its own).",
                "**File uploads**: drag PDFs, Word files or images straight into the composer, or use the paperclip.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "[Who] I work in <industry> as a <role>, dealing with <document types>.\n[Language] Answer in English by default; keep technical terms as-is.\n[Format] Conclusion first, then evidence; numbered list beyond three steps; tables for comparisons.\n[Style] Direct, no filler, no \"I hope this helps\".\n[Never] Don't invent citations or links. Say \"uncertain\" when you are.",
              caption: "Instructions for Claude: bottom-left initials → Settings → Instructions for Claude",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Long-document workflow**: drop in a PDF, contract or paper → ask for a summary → interrogate it point by point → have it output a copy-ready checklist.",
                "**Writing pipeline**: ask for three different openings → pick one → expand it → have it self-review for wordiness, repetition and empty phrases.",
                "**Project knowledge base**: put team conventions and glossaries in a Project so every related chat carries that context.",
                "**Artifacts as mini-tools**: a single-file HTML calculator, chart or card layout is much faster to iterate than describing it in words.",
                "**Web research**: ask for sources and open them; don't rely solely on its paraphrase of an important claim.",
                "**Two-pass translation**: literal first for accuracy, then natural phrasing without losing information.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "Using the <contract / paper / financial report> I uploaded: first explain what it says in 10 lines or fewer; second list the 5 clauses or findings that matter most to me, each with one sentence of reasoning; third flag anything vague or potentially unfavourable to me.",
              caption: "Three-layer document interrogration: overview → highlights → risks",
            },
          ],
        },
        {
          title: "Data and privacy settings",
          blocks: [
            {
              kind: "text",
              text: "Privacy switches live inside **Settings**; labels shift between releases, so search the page for privacy or data if you can't spot them.",
            },
            {
              kind: "list",
              items: [
                "**Review regularly**: open Settings and check the privacy / data options, especially anything about improving services or models, and turn it off if you prefer.",
                "**Incognito chats**: available for conversations you don't want kept in history — Anthropic documents this under \"Use incognito chats\".",
                "**Export your data**: the help centre article \"Export your Claude data\" gets you a copy of your data.",
                "**Delete conversations**: rename or delete any chat from the conversation list. Deletion is permanent.",
                "**Sessions and account security**: manage signed-in devices in account settings and sign out anything you don't recognise.",
              ],
            },
            {
              kind: "warn",
              text: "Never upload ID scans, bank details, payslips or unreleased contracts. Even with the improvement switch off, data still travels through cloud servers — replace names, phone numbers, account numbers and amounts with placeholders first.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "If a reply is too long, say \"cut it to 200 words\" or \"conclusions only\" — cheaper than re-prompting.",
                "For a huge PDF, first ask how many sections it has, then drill into one section at a time.",
                "Free limits reset every 5 hours, and web search plus fetching long links burn quota — turn search off when you don't need it.",
                "Put standing requirements in Instructions for Claude instead of repeating yourself.",
                "Copy a passage and start a new chat with it rather than scrolling back to the original conversation.",
                "If output gets truncated, reply \"continue\"; if it keeps happening, split the task in two.",
                "Keep one topic per Project — long-running work gets noticeably smoother.",
              ],
            },
            {
              kind: "note",
              text: "Free usage resets every 5 hours. If you're frequently interrupted mid-afternoon, schedule heavy work in the first hour after a reset.",
            },
          ],
        },
      ],
      configs: [
        {
          path: "Instructions for Claude (bottom-left initials → Settings → Instructions for Claude)",
          desc: "Account-wide instructions applied to every chat. Put your role, language, format and hard nos here.",
          code: `[Who] I work in <industry> as a <role>, dealing with <document types>.
[Language] English by default; keep technical terms as-is.
[Format] Conclusion first, then evidence; numbered lists beyond three steps; tables for comparisons.
[Style] Direct and terse. No "I hope this helps".
[Never] No invented citations or links. Mark uncertainty explicitly.`,
        },
        {
          path: "Project instructions (open a Project → add project instructions)",
          desc: "Applies only to chats inside that project — ideal for pinning down the rules of a long-running project.",
          code: `Context: <one sentence on what this project is>
Scope: answer only from the files in this project; don't import unverified external claims.
Glossary: <your team's acronyms and internal terms>
Output: every answer has three parts — conclusion / evidence / next step.`,
        },
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Long-document reading, editing and decision comparison cover most day-to-day work.",
          code: `[Long doc] I uploaded a <document>. First give me a summary in 10 lines or fewer, then list its structure by section with page numbers, then point out what the data implies but the author never says.

[Tighten] The text below is wordy. Cut it by 40% without changing facts, drop adjectives and repetition, and output only the result:
<paste>

[Compare] Build a comparison table for <A / B / C> with cost, learning curve, maintainability and best-fit scenario. Then say in three sentences when you'd choose each.`,
        },
      ],
      troubles: [
        {
          problem: "claude.ai won't load or spins forever",
          fix: "Confirm your connection reaches google.com, then switch nodes, clear the cache and retry in a private window. Corporate networks are often geo-blocked.",
        },
        {
          problem: "No SMS for phone verification, or \"number not supported\"",
          fix: "Only certain countries are supported — +86 (mainland China) numbers generally won't work. Use a supported-region number, make sure international SMS isn't disabled by your carrier, and wait 60 seconds before resending. Don't use SMS-receiving services.",
        },
        {
          problem: "\"Claude is not available in your region\"",
          fix: "A geo issue with your exit IP. Move to a supported region, revoke location permission for the site, and log in again from a private window.",
        },
        {
          problem: "\"You've reached your limit\"",
          fix: "Free usage resets every 5 hours. Web search and fetching long articles consume extra quota — turn Web search off when it isn't needed and wait for the reset.",
        },
        {
          problem: "Answers stop mid-sentence or long outputs get truncated",
          fix: "Reply \"continue\" — it usually resumes. Split long tasks into structure first, detail second. If it was a safety intervention, rephrase the request.",
        },
        {
          problem: "Claude isn't in the App Store / the app won't log in",
          fix: "It isn't listed in the China App Store — you need an overseas Apple ID. Once installed, log in on the same network or it will spin indefinitely.",
        },
      ],
      cost:
        "Free is usable long term: limits reset every **5 hours** (web search and fetching long links count against them). Pro is currently $20/mo, with a higher Max tier and Team/Enterprise plans — see the official site for prices and limits. You can cancel any time under **Settings → Subscription** and keep access until the period ends; extra usage bundles are available if you run out. The API (Console) is billed separately and isn't covered by a subscription.",
    },
  },

  deepseek: {
    zh: {
      difficulty: "入门（零基础可上手）",
      os: "网页 / iOS / Android",
      prereq: [
        {
          label: "账号（手机号或邮箱）",
          detail:
            "国内手机号（+86）可以直接注册，收短信验证码即可；也可以用邮箱或 Google 账号登录。一个手机号绑一个账号，注册后建议顺手设一个密码。",
        },
        {
          label: "网络环境（国内直连）",
          detail:
            "chat.deepseek.com 国内可直连，**不需要任何代理**。高峰期（工作日下午、突发热点时）可能出现排队或「服务器繁忙」，稍等重试即可。",
        },
        {
          label: "付费（网页端免费）",
          detail:
            "网页版和 App 目前免费使用；只有自己写程序调用 API 才需要付费，价格是行业最低档之一（以 platform.deepseek.com 定价页为准）。",
        },
        {
          label: "客户端（建议装官方 App）",
          detail:
            "网页能用。手机应用商店搜「DeepSeek」装官方 App，语音和拍题更方便，见下面「App 使用」。账号和网页互通。",
        },
        {
          label: "地区限制",
          detail:
            "服务主要面向中国大陆用户，国内访问最顺畅；海外访问速度可能较慢或需要稳定网络。没有地区封锁，也没有年龄以外的额外门槛。",
        },
      ],
      steps: [
        {
          title: "打开正确的网址：chat.deepseek.com",
          blocks: [
            {
              kind: "text",
              text: "聊天入口是 **chat.deepseek.com**。注意区分两个容易混淆的地址：**deepseek.com** 是公司介绍页（不能聊天），**platform.deepseek.com** 是开发者控制台（给写代码的人用，要充值才能调 API）。",
            },
            {
              kind: "shot",
              src: "/shots/deepseek/site.png",
              caption: "DeepSeek 官网：聊天入口是 chat.deepseek.com，platform 子域是开发者平台",
            },
            {
              kind: "warn",
              text: "应用商店和搜索里有很多名字带「DeepSeek」的第三方 App 和小程序，可能会转卖额度或收集你的对话。网页端只认 chat.deepseek.com，手机端认准开发者为 **杭州深度求索（DeepSeek）**。",
            },
          ],
        },
        {
          title: "注册登录：手机号验证码最快",
          blocks: [
            {
              kind: "text",
              text: "打开 chat.deepseek.com，点 **登录 / 注册**，三种方式任选：",
            },
            {
              kind: "list",
              items: [
                "**手机号 + 验证码**（推荐）：填国内手机号 → 收 6 位短信验证码 → 勾选同意用户协议 → 登录。不需要设密码，秒进。",
                "**邮箱注册**：填邮箱 → 收验证邮件 → 设置密码 → 登录。",
                "**Google 账号**：点一下授权即可（需要能访问 Google）。",
              ],
            },
            {
              kind: "note",
              text: "新账号注册完会直接进入对话界面，历史记录存在云端，换设备登录同一个账号就能看到之前的对话。",
            },
          ],
        },
        {
          title: "界面导览：左侧历史、输入框和两个开关",
          blocks: [
            {
              kind: "list",
              items: [
                "**左侧栏**：最上面是 `+ 新对话`，下面是按「今天 / 7 天内 / 30 天内」分组的**历史对话**，点一条就能继续；鼠标悬停可重命名或删除。",
                "**中间上方**：欢迎语和当前模型状态。",
                "**底部输入框**：左边回形针图标用来**上传文件**；输入框下方有两个开关——**深度思考** 和 **联网搜索**。",
                "**右下角**：发送按钮（也可以直接按 `Enter` 发送，`Shift + Enter` 换行）。",
                "**左下角头像/账号**：账号设置、退出登录等。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/deepseek/chat-ui.svg",
              caption: "DeepSeek 网页版：左侧是历史会话，输入框下方是「深度思考」「联网搜索」开关（示意图）",
            },
            {
              kind: "note",
              text: "两个开关默认是关闭的。开着的状态下回答会更慢、更耗资源，问完记得关掉，不然简单问题也会绕一大圈。",
            },
          ],
        },
        {
          title: "用法一：打开「深度思考」处理推理类问题",
          blocks: [
            {
              kind: "text",
              text: "「深度思考」会先输出一段推理过程，再给最终答案——数学、算法、逻辑推理、复杂排查都用它。点一下开关变成高亮即表示开启。",
            },
            {
              kind: "code",
              lang: "text",
              code: "一个水池有两个进水口和一个出水口，进水速度分别是 3 L/min 和 5 L/min，出水 4 L/min，水池容量 1200 L。请分步推理：多久能充满？如果出水口在第 30 分钟被关掉，结果变成多少？",
              caption: "需要严谨推理时，先开「深度思考」再提问",
            },
            {
              kind: "note",
              text: "推理过程比最终答案更值得看：如果答案不对，往往能从推理链里找到它哪一步理解错了，然后在追问里纠正它。",
            },
          ],
        },
        {
          title: "用法二：打开「联网搜索」查最新信息",
          blocks: [
            {
              kind: "text",
              text: "模型的知识有截止时间，问新闻、价格、政策、版本号这类会变的信息，一定要先打开**联网搜索**。回答里会给出引用来源，点开核对一下再采信。",
            },
            {
              kind: "code",
              lang: "text",
              code: "用联网搜索查一下 <某产品> 现在的最新版本号和主要更新内容，给出官网链接，并说明信息来源的日期。",
              caption: "联网类提问：明确要求给来源和日期",
            },
            {
              kind: "warn",
              text: "联网搜索抓到的网页可能包含过时或错误信息。涉及金额、法规、医疗等关键决策时，务必点开原始链接确认，别只看它的总结。",
            },
          ],
        },
        {
          title: "用法三：上传文件解读与代码排错",
          blocks: [
            {
              kind: "text",
              text: "点输入框左边的回形针（或直接把文件拖进对话框）即可上传，支持常见的文档、表格、PPT、图片和代码文本。上传后先问「你看到了什么」，确认它读对了再问具体问题。",
            },
            {
              kind: "code",
              lang: "text",
              code: "这是我上传的 <文件名>。请：1）用 5 条要点说明它讲了什么；2）把所有数字和日期整理成表格；3）指出里面前后不一致或明显缺失的部分。",
              caption: "上传文件后的通用三问：概览 → 数据 → 疑点",
            },
            {
              kind: "note",
              text: "特别长的文件建议拆开问（先问第一部分的结构，再逐块追问），比一次要求「总结全文」准确得多，也更省时间。",
            },
            {
              kind: "text",
              text: "排错时**一定要把报错原文、相关代码、你的环境一起给**，它会直接指出问题位置并给修改后的完整片段。",
            },
            {
              kind: "code",
              lang: "text",
              code: "环境：Python 3.11 + pandas 2.x。\n目标：按日期分组汇总销售额。\n报错：<粘贴完整报错堆栈>\n代码：\n<粘贴代码>\n\n请先说明报错原因，再给出修改后的完整代码，最后指出这段代码还有什么潜在问题。",
              caption: "排错模板：环境 + 目标 + 报错 + 代码 + 期望输出",
            },
          ],
        },
        {
          title: "进阶：App、语音输入与 API",
          blocks: [
            {
              kind: "list",
              items: [
                "**手机 App**：应用商店搜「DeepSeek」，用同一个手机号登录，历史会话同步；App 里支持语音输入和拍照提问。",
                "**语音输入**：手机上点麦克风按钮直接说话，问问题和记录想法都比打字快。",
                "**API**：要自己写程序调用，去 `platform.deepseek.com` 注册、创建 API Key、充值（按 token 计费）。接口兼容 OpenAI 格式，把 base_url 换成 `https://api.deepseek.com` 即可复用现有代码。",
                "**模型名**：对话用 `deepseek-chat`，推理用 `deepseek-reasoner`（以官方文档为准）。",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl https://api.deepseek.com/chat/completions -H \"Content-Type: application/json\" -H \"Authorization: Bearer $DEEPSEEK_API_KEY\" -d '{\"model\":\"deepseek-chat\",\"messages\":[{\"role\":\"user\",\"content\":\"用三点总结这段话\"}]}'",
              caption: "API 调用示例：先在 platform.deepseek.com 创建 Key 并充值",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**论文 / 报告精读**：上传 PDF → 关联网、开深度思考 → 问「作者的结论在数据上是否站得住」。",
                "**Excel 表格分析**：上传表格 → 问「找出异常值并解释可能原因」→ 让它输出公式或脚本。",
                "**实时资讯**：开联网搜索问「今天和 <行业> 相关的政策有什么更新」，要求给来源和日期。",
                "**翻译 + 润色**：先直译，再说「按中文母语习惯润色，保留专业术语」。",
                "**面试 / 考试准备**：让它出题（要求「先不要给答案」），你答完再让它批改并指出漏洞。",
                "**写作初稿**：让它先给三级大纲，你改完大纲再让它逐段扩写，成品明显更可控。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "我要写一份 800 字的 <主题> 说明，先只给我三级大纲（每部分标题 + 2 个要点），我改完再让你逐段扩写，每段不超过 150 字。",
              caption: "两段式交付：先大纲、后正文",
            },
          ],
        },
        {
          title: "数据与隐私",
          blocks: [
            {
              kind: "list",
              items: [
                "**对话保存**：所有对话默认保存在账号里，左侧栏可以删除单条对话；退出登录前也可以在设置里清理。",
                "**训练与数据使用**：具体条款以官网《隐私政策》为准（国内站点，说明是中文的），上传敏感资料前先读一遍。",
                "**账号安全**：手机号 + 验证码登录，注意不要在网吧等公共设备上保持登录；建议在设置里退出全部设备。",
                "**文件内容**：上传的文件会发送到服务器解析，合同、财务数据、身份证件这类内容不建议直接上传。",
              ],
            },
            {
              kind: "warn",
              text: "即便是国内服务，也不要把公司未公开的代码、客户名单、身份证照片直接丢进去。真要分析就先脱敏：把姓名换成「A 先生」、金额区间化、账号删掉后再上传。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` 发送、`Shift + Enter` 换行；粘贴长代码/长文本前用 `Shift + Enter`。",
                "两个开关按需开：日常问答都关掉，问数学/代码才开深度思考，问实时信息才开联网。",
                "回答不满意就说「重新组织一遍，用表格 / 更短 / 更具体」，不用重开对话。",
                "问代码相关的问题时把语言和版本写清楚（如 Python 3.11、Node 20），答案质量差别很大。",
                "高峰期遇到「服务器繁忙」就等几分钟再发；把长任务拆成几次会更稳。",
                "左侧历史对话支持搜索/重命名，把重要的会话重命名成「项目名-日期」，回头好找。",
                "同一账号在电脑和手机上都能用，手机上语音输入，电脑上处理长文，各取所长。",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "覆盖问答、代码排错、文档解读三类最常用场景，替换尖括号内容即可使用。",
          code: `【通用提问】背景：<你的场景>。任务：<要它做什么>。输出：<格式和长度要求>。不确定的地方请标注，不要编造。

【排错】环境：<语言与版本>。目标：<想实现什么>。报错：<完整堆栈>。代码：<相关代码>。请先解释报错原因，再给出完整修改版。

【读文件】这是我上传的 <文件名>。1）用 5 条要点总结；2）把所有数字和日期整理成表格；3）指出前后不一致或缺失的部分。`,
        },
        {
          path: "API 接入示例（platform.deepseek.com 创建 API Key 并充值）",
          desc: "接口兼容 OpenAI 格式，把 base_url 换成 https://api.deepseek.com 就能复用现有代码。按 token 计费。",
          code: `curl https://api.deepseek.com/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $DEEPSEEK_API_KEY" -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"用三点总结这段话"}]}'

# 推理模型换成： "model":"deepseek-reasoner"
# 具体模型名与计价以官方文档和定价页为准`,
        },
        {
          path: "系统提示词模板（API 场景的 system message）",
          desc: "写代码调用时，把这段放进 messages 的第一条 role=system，效果等同网页端的自定义指令。",
          code: `你是一名严谨的助理。回答规则：
1. 先给一句话结论，再展开依据。
2. 不确定的内容标注「不确定」，不要编造数据或引用。
3. 中文回答，专有名词保留英文原文。
4. 步骤用有序列表，对比用表格，输出不要超过 500 字。`,
        },
      ],
      troubles: [
        {
          problem: "高峰期提示「服务器繁忙，请稍后再试」",
          fix: "国内用户集中访问导致的排队，等几分钟重发即可。把长任务拆小、避开工作日下午的整点，会明显更顺。",
        },
        {
          problem: "收不到注册/登录验证码",
          fix: "先检查短信拦截和垃圾短信分类；确认号码没有欠费停机；等待 60 秒再点重发。仍收不到就改用邮箱注册。",
        },
        {
          problem: "上传文件后它说无法读取，或解析内容不完整",
          fix: "先确认文件格式是常见的 PDF/Word/Excel/PPT/txt/图片。扫描版 PDF（图片型）识别效果差，可以先转成文本或换更清晰的文件。超大文件建议拆分上传。",
        },
        {
          problem: "回答写到一半中断了",
          fix: "回一句「继续」通常能接上；也可能是网络波动，检查一下浏览器是不是开着广告拦截或下载任务占满了带宽。",
        },
        {
          problem: "换电脑登录后看不到历史对话",
          fix: "确认登录的是同一个账号（手机号/邮箱/Google 是三个不同入口）。如果确实登错，退出后用原方式重新登录。",
        },
        {
          problem: "API 调用返回 401 / 402",
          fix: "401 是 Key 不对（复制不完整或已删除），到控制台重新生成；402 是余额不足，需要在 platform.deepseek.com 充值。",
        },
      ],
      cost:
        "网页版与手机 App 目前**免费使用**，高峰期可能排队或限速，没有订阅制、也就不存在「取消订阅」。费用只发生在 API：在 platform.deepseek.com 按 token 计费，价格处于行业最低档之一，充值后余额用完服务会停止（不会自动扣款到欠费），具体单价以官方定价页为准。",
    },
    en: {
      difficulty: "Beginner (no prior experience needed)",
      os: "Web / iOS / Android",
      prereq: [
        {
          label: "Account (phone or email)",
          detail:
            "A mainland China (+86) number works directly with an SMS code, or sign in with email or Google. One phone number per account — setting a password after signing up is a good idea.",
        },
        {
          label: "Network (works directly in China)",
          detail:
            "chat.deepseek.com is reachable without any proxy. At peak times (weekday afternoons, breaking news) you may see a queue or \"servers are busy\" — just retry shortly.",
        },
        {
          label: "Payment (the web app is free)",
          detail:
            "The web app and mobile app are currently free. You only pay if you call the API from your own code — one of the cheapest rates anywhere (see the pricing page on platform.deepseek.com).",
        },
        {
          label: "Official app (recommended)",
          detail:
            "The website works. Search “DeepSeek” in your app store for voice and camera — see “Using the app”. Same account as the web.",
        },
        {
          label: "Region",
          detail:
            "Built primarily for users in China, where it is fastest. Access from overseas can be slower or need a stable connection. There is no geo-blocking beyond that.",
        },
      ],
      steps: [
        {
          title: "Open the right URL: chat.deepseek.com",
          blocks: [
            {
              kind: "text",
              text: "The chat UI is at **chat.deepseek.com**. Two lookalikes to avoid confusing: **deepseek.com** is the company site (no chat), and **platform.deepseek.com** is the developer console for API keys and billing.",
            },
            {
              kind: "shot",
              src: "/shots/deepseek/site.png",
              caption: "The DeepSeek site: chat lives at chat.deepseek.com, the platform subdomain is for developers",
            },
            {
              kind: "warn",
              text: "App stores and search results are full of third-party \"DeepSeek\" apps and mini-programs that may resell access or harvest your conversations. On the web, only chat.deepseek.com is official; on mobile, check the developer is **Hangzhou DeepSeek**.",
            },
          ],
        },
        {
          title: "Sign up: phone number and code is fastest",
          blocks: [
            {
              kind: "text",
              text: "Open chat.deepseek.com and click **Log in / Sign up**. Three routes:",
            },
            {
              kind: "list",
              items: [
                "**Phone + SMS code** (recommended): enter your number, receive a 6-digit code, accept the terms and you're in. No password needed.",
                "**Email**: enter your address, confirm via the email, set a password, log in.",
                "**Google**: one-click authorisation (needs Google to be reachable).",
              ],
            },
            {
              kind: "note",
              text: "A new account lands straight in the chat UI. History is stored in your account, so logging in elsewhere shows the same conversations.",
            },
          ],
        },
        {
          title: "Tour the interface: history, composer, two toggles",
          blocks: [
            {
              kind: "list",
              items: [
                "**Left sidebar**: `+ New chat` at the top, then **history** grouped by Today / Last 7 days / Last 30 days. Click any entry to continue; hover to rename or delete.",
                "**Centre top**: the welcome message and current model state.",
                "**Composer**: the paperclip on the left **uploads files**; below the text box sit two toggles — **DeepThink** and **Web search**.",
                "**Bottom right**: the send button. `Enter` sends and `Shift + Enter` makes a new line.",
                "**Account menu**: settings and sign-out.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/deepseek/chat-ui.svg",
              caption: "The DeepSeek web app: history on the left, DeepThink and Web search toggles under the composer (illustration)",
            },
            {
              kind: "note",
              text: "Both toggles start off. Leaving them on makes replies slower and heavier — turn them off again so simple questions don't take the long way round.",
            },
          ],
        },
        {
          title: "Use case 1: DeepThink for reasoning",
          blocks: [
            {
              kind: "text",
              text: "DeepThink prints its reasoning before the final answer — use it for maths, algorithms, logic and hard debugging. Click the toggle until it highlights.",
            },
            {
              kind: "code",
              lang: "text",
              code: "A tank has two inlets at 3 L/min and 5 L/min and one outlet at 4 L/min. Capacity is 1200 L. Reason step by step: how long to fill it? If the outlet is closed at minute 30, what's the new time?",
              caption: "Turn DeepThink on before asking anything that needs careful reasoning",
            },
            {
              kind: "note",
              text: "The reasoning trace is often more useful than the answer: when it gets something wrong, you can see exactly which step it misread and correct it in a follow-up.",
            },
          ],
        },
        {
          title: "Use case 2: Web search for current information",
          blocks: [
            {
              kind: "text",
              text: "The model's knowledge has a cutoff. For news, prices, policies or version numbers, turn **Web search** on first. Responses include cited sources — open them before trusting a claim.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Use web search to find the current version number and main changes in <product>. Give me the official link and state the date of each source.",
              caption: "Web queries: always ask for sources and dates",
            },
            {
              kind: "warn",
              text: "Search results can include stale or wrong pages. For money, legal, medical or any high-stakes decision, open the original link rather than relying on the summary.",
            },
          ],
        },
        {
          title: "Use case 3: upload documents or paste code",
          blocks: [
            {
              kind: "text",
              text: "Click the paperclip or drag a file into the chat. Common documents, spreadsheets, slides, images and text/code files are supported. Ask \"what do you see?\" first so you can confirm it parsed correctly before asking real questions.",
            },
            {
              kind: "code",
              lang: "text",
              code: "This is the <filename> I uploaded. 1) Summarise it in 5 bullets. 2) Turn every number and date into a table. 3) Flag internal inconsistencies or obvious gaps.",
              caption: "The standard three questions after an upload: overview, data, doubts",
            },
            {
              kind: "note",
              text: "For very long documents, work in sections — ask about the structure of part one, then drill in. It is both more accurate and faster than one giant \"summarise everything\".",
            },
            {
              kind: "text",
              text: "For debugging, **always include the full stack trace, the relevant code and your environment**. It will point at the failing line and give you the corrected snippet.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Environment: Python 3.11 + pandas 2.x.\nGoal: group sales by date and sum them.\nError: <paste the full traceback>\nCode:\n<paste code>\n\nExplain the cause first, then give the complete fixed version, then flag any other latent problems.",
              caption: "Debug template: environment + goal + error + code + expectation",
            },
          ],
        },
        {
          title: "Level up: the app, voice input and the API",
          blocks: [
            {
              kind: "list",
              items: [
                "**Mobile app**: search \"DeepSeek\" in your app store, log in with the same phone number and your history syncs. Voice input and photo questions are built in.",
                "**Voice input**: tap the microphone and just talk — faster than typing for questions and half-formed ideas.",
                "**API**: register at `platform.deepseek.com`, create a key and top up (billed per token). The endpoint is OpenAI-compatible: change base_url to `https://api.deepseek.com` and existing code works.",
                "**Model names**: `deepseek-chat` for conversation and `deepseek-reasoner` for reasoning (confirm against the official docs).",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl https://api.deepseek.com/chat/completions -H \"Content-Type: application/json\" -H \"Authorization: Bearer $DEEPSEEK_API_KEY\" -d '{\"model\":\"deepseek-chat\",\"messages\":[{\"role\":\"user\",\"content\":\"Summarise this in three points\"}]}'",
              caption: "API call: create the key and top up on platform.deepseek.com first",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Paper or report reading**: upload the PDF, Web search off, DeepThink on, then ask whether the conclusions hold up against the data.",
                "**Spreadsheet analysis**: upload the sheet, ask it to find outliers and explain possible causes, then have it write the formula or script.",
                "**Live information**: with Web search on, ask what changed in <industry> policy today — demand sources and dates.",
                "**Translation**: translate literally first, then \"polish it to read like native English while keeping the terminology\".",
                "**Interview or exam prep**: have it write questions (\"don't give answers yet\"), answer them yourself, then ask for grading and gaps.",
                "**First drafts**: get a three-level outline, edit it, then have it expand section by section.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "I need an 800-word explainer on <topic>. Give me a three-level outline only (section titles + 2 bullets each). After I edit it, expand each section to under 150 words.",
              caption: "Two-stage delivery: outline first, prose second",
            },
          ],
        },
        {
          title: "Data and privacy",
          blocks: [
            {
              kind: "list",
              items: [
                "**Chat storage**: conversations are saved to your account. Delete individual chats from the sidebar.",
                "**Training and data use**: read the privacy policy on the official site (it's in Chinese and written for Chinese users) before uploading anything sensitive.",
                "**Account security**: login is phone + code, so avoid staying signed in on public machines, and sign out of all devices when in doubt.",
                "**Uploaded files**: files are sent to the server to be parsed. Don't upload contracts, financial records or ID documents.",
              ],
            },
            {
              kind: "warn",
              text: "Even with a domestic service, don't paste unreleased company code, customer lists or ID photos. Redact first: replace names with placeholders, bucket the amounts and strip account numbers.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` sends, `Shift + Enter` makes a new line — useful before pasting long code.",
                "Toggle deliberately: DeepThink only for maths, code and reasoning; Web search only for time-sensitive questions.",
                "Unhappy with an answer? Say \"reorganise it as a table / shorter / more specific\" — no need to restart the chat.",
                "For code questions, always state the language and version (Python 3.11, Node 20) — the quality gap is large.",
                "If you hit \"servers are busy\", wait a few minutes and resend; splitting long tasks helps at peak times.",
                "Rename important conversations (\"project-2025-03\") so you can find them again.",
                "Phone for voice input on the go, desktop for long documents — same account, same history.",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Covers Q&A, debugging and document reading — the three most common jobs. Replace the angle brackets.",
          code: `[General] Context: <your situation>. Task: <what you want>. Output: <format and length>. Mark anything uncertain; don't invent facts.

[Debug] Environment: <language + version>. Goal: <what you're trying to do>. Error: <full stack trace>. Code: <snippet>. Explain the cause first, then give the complete fixed version.

[Read file] This is the <filename> I uploaded. 1) Summarise in 5 bullets. 2) Put every number and date in a table. 3) Flag inconsistencies or gaps.`,
        },
        {
          path: "API example (create a key and top up on platform.deepseek.com)",
          desc: "OpenAI-compatible: point base_url at https://api.deepseek.com and reuse existing code. Billed per token.",
          code: `curl https://api.deepseek.com/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $DEEPSEEK_API_KEY" -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"Summarise this in three points"}]}'

# For reasoning use: "model":"deepseek-reasoner"
# Confirm current model names and prices in the official docs`,
        },
        {
          path: "System prompt template (for API calls)",
          desc: "Put this in the first message with role=system — the API equivalent of custom instructions.",
          code: `You are a rigorous assistant. Rules:
1. Give a one-sentence conclusion, then the evidence.
2. Mark uncertain statements as "uncertain" — never invent data or citations.
3. Answer in English; keep technical terms unchanged.
4. Numbered lists for steps, tables for comparisons, under 500 words.`,
        },
      ],
      troubles: [
        {
          problem: "\"Servers are busy\" at peak times",
          fix: "It's a queue from high traffic in China. Wait a few minutes and resend. Splitting long tasks and avoiding weekday afternoons helps noticeably.",
        },
        {
          problem: "No signup or login code arrives",
          fix: "Check SMS filtering and the junk folder, confirm the number isn't suspended, and wait 60 seconds before resending. If it still fails, sign up with email instead.",
        },
        {
          problem: "An uploaded file can't be read, or is only partly parsed",
          fix: "Confirm it's a common format (PDF/Word/Excel/PPT/txt/image). Scanned image-only PDFs parse poorly — convert them to text first. Split very large files.",
        },
        {
          problem: "The answer stops halfway",
          fix: "Reply \"continue\" — it usually resumes. It can also be a network blip, so check for ad blockers or a big download saturating your connection.",
        },
        {
          problem: "No history after logging in on another computer",
          fix: "Make sure it's the same account — phone, email and Google are three separate sign-in routes. Sign out and log back in with the original method.",
        },
        {
          problem: "API returns 401 or 402",
          fix: "401 means the key is wrong (truncated or deleted) — regenerate it in the console. 402 means the balance is empty — top up on platform.deepseek.com.",
        },
      ],
      cost:
        "The web app and mobile app are currently **free**, with possible queues or throttling at peak times. There is no subscription, so there's nothing to cancel. Costs only apply to the API: billed per token on platform.deepseek.com at one of the lowest rates available, with the service stopping when the balance runs out (no surprise overage). See the official pricing page for exact rates.",
    },
  },
  doubao: {
    zh: {
      difficulty: "入门（零基础，适合当作第一个 AI 工具）",
      os: "网页 / iOS / Android / macOS / Windows（豆包电脑版）",
      prereq: [
        {
          label: "账号（手机号，或抖音账号）",
          detail:
            "国内手机号（+86）收短信验证码即可注册；也可以直接用抖音账号一键登录。一个手机号绑一个账号，登录后建议在设置里补上密码。",
        },
        {
          label: "网络环境（国内直连）",
          detail:
            "doubao.com 国内可直连，不需要任何代理。App 端和电脑端都一样，网络通畅即可使用。",
        },
        {
          label: "付费（基础免费）",
          detail:
            "对话、写作、语音通话、图像生成等基础能力免费；部分更高频或更高级的能力可能按需计费或处于内测，具体以官网和 App 内说明为准。",
        },
        {
          label: "客户端（App 体验最全）",
          detail:
            "网页版打开即用；手机 App 功能最全（语音通话、拍照提问、图像/视频生成），电脑版适合办公场景。账号互通。",
        },
        {
          label: "地区与年龄",
          detail:
            "面向中国大陆用户，海外访问可能受限或较慢。未满 18 岁的账号功能可能受限。",
        },
      ],
      steps: [
        {
          title: "打开官网，认准 doubao.com",
          blocks: [
            {
              kind: "text",
              text: "网页版入口就是 **doubao.com**（豆包是字节跳动旗下、由火山引擎提供模型服务的产品，官网上会看到火山引擎的痕迹，这是正常的）。打开后右上角是**登录/注册**。",
            },
            {
              kind: "shot",
              src: "/shots/doubao/site.png",
              caption: "豆包官网（火山引擎提供模型服务）：网页版入口就是 doubao.com",
            },
            {
              kind: "warn",
              text: "不要装名字里带「豆包 AI 助手」「豆包增强版」的第三方应用或浏览器插件。国内应用商店里请认准 App 名称「豆包」与开发者为字节跳动相关主体。",
            },
          ],
        },
        {
          title: "注册登录：手机号或抖音账号",
          blocks: [
            {
              kind: "list",
              items: [
                "**手机号**（推荐）：输入手机号 → 获取 6 位短信验证码 → 勾选协议 → 登录。",
                "**抖音账号**：点「抖音登录」，跳转到抖音授权页确认即可，不用再收验证码。",
                "**App 端**：同理，用手机号或抖音登录，网页端的历史对话会同步过来。",
              ],
            },
            {
              kind: "note",
              text: "登录后 Ctrl/Cmd+点击右上角头像，可以在设置里补一个密码，或者绑定第二登录方式，换手机时不至于进不去账号。",
            },
          ],
        },
        {
          title: "界面导览：左侧功能区 + 底部输入框",
          blocks: [
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：`+ 新对话`，下面是功能区：AI 搜索、图像生成、帮我写作、视频生成等，对应不同的任务模板。",
                "**左侧栏下半部分**：**历史对话**列表，点一条就能继续；支持重命名和删除。",
                "**中间**：对话区域，长回答会流式输出，可以随时点停止。",
                "**底部输入框**：左边回形针上传文件；输入框下方有 `深度思考`、`联网搜索` 等开关；右侧是麦克风（进入语音）和发送按钮。",
                "**左下角**：账号、设置、智能体管理等入口。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/doubao/chat-ui.svg",
              caption: "豆包网页版：左侧是功能区和历史对话，输入框下方是「深度思考」「联网搜索」开关（示意图）",
            },
            {
              kind: "note",
              text: "豆包的界面更新比较频繁，功能入口偶尔会挪位置或改名。找不到时优先看**左侧栏**和**输入框下方那一排按钮**。",
            },
          ],
        },
        {
          title: "用法一：日常问答与写作",
          blocks: [
            {
              kind: "text",
              text: "这是最常用的场景，把要求写清楚（对象、场景、语气、字数）就能直接可用。",
            },
            {
              kind: "code",
              lang: "text",
              code: "帮我把下面这段工作总结改写成周报，语气正式但不要空话，用「本周进展 / 下周计划 / 需要支持」三段，每段不超过 150 字：\n\n<粘贴你的总结>",
              caption: "写作：给结构、给字数上限、给原文",
            },
            {
              kind: "code",
              lang: "text",
              code: "我要给 <对象> 写一条 <场景，如：家长会通知>，要求：不超过 150 字，语气亲切，说清时间、地点、需要带什么，不要用官腔。",
              caption: "从零写：对象 + 场景 + 硬性要求",
            },
          ],
        },
        {
          title: "用法二：语音通话、图像与视频生成",
          blocks: [
            {
              kind: "text",
              text: "在手机 App（和电脑版）里点麦克风图标即可进入**语音通话**，直接说话、它直接说回来，可以做口语陪练、会议前对思路、走路时记录想法。",
            },
            {
              kind: "list",
              items: [
                "**第一次用**：系统会请求麦克风权限，一定要点「允许」，否则按键没反应。",
                "**练习口语**：进入语音通话后说「现在你是我的英语口语陪练，用日常话题和我对话，我语法说错了立刻纠正我」。",
                "**免手操作**：开车、做家务时让它读新闻摘要、帮你梳理今天要做的事。",
                "**隐私**：语音通话在公共场合建议戴耳机，避免不必要的录音场景。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "接下来我们做英语口语练习：你扮演伦敦的同事，我们用日常话题闲聊，每当我用错语法或选词不地道，先顺着对话回答，再单独一行指出我的错误并给更自然的说法。",
              caption: "语音通话用的提示词模板",
            },
            {
              kind: "text",
              text: "左侧栏的**图像生成 / 视频生成**是独立功能区。写提示词的套路是：**主体 + 动作/场景 + 风格 + 画幅**，越具体越稳。",
            },
            {
              kind: "code",
              lang: "text",
              code: "一只橘猫坐在窗边看雨，水彩插画风格，柔和光线，色调偏冷，竖版 3:4，画面干净没有文字。",
              caption: "图像提示词模板：主体 + 场景 + 风格 + 构图",
            },
            {
              kind: "list",
              items: [
                "生成结果不满意就点「重新生成」，或在原提示词后面追加「换一个角度 / 更写实 / 更简洁」。",
                "视频生成通常需要排队，且时长有限制，建议先用图像生成确定画面，再做视频。",
                "生成内容会经过内容审核，涉及真人肖像、商标、敏感题材可能被拒，换描述方式重试。",
              ],
            },
          ],
        },
        {
          title: "用法三：上传文件做长文解读与办公",
          blocks: [
            {
              kind: "text",
              text: "点输入框左边的回形针上传文件（文档、表格、图片均可），然后按「先概括、再提问」的顺序来，效果最稳。",
            },
            {
              kind: "code",
              lang: "text",
              code: "这是我上传的 <文件类型>。请：1）用 5 条要点概括；2）把所有时间节点和负责人整理成表格；3）指出哪些事项没有明确的截止时间。",
              caption: "办公场景：会议记录 / 项目文档的高频三问",
            },
            {
              kind: "note",
              text: "拍纸质文件时可以用 App 里「拍照提问」，直接对发票、说明书、公告拍照提问，比打字描述快很多。",
            },
          ],
        },
        {
          title: "进阶：智能体、深度思考、联网搜索与电脑版",
          blocks: [
            {
              kind: "list",
              items: [
                "**深度思考**：和 DeepSeek 类似，打开后先推理再回答，适合数学、逻辑、复杂决策，日常闲聊记得关掉。",
                "**联网搜索**：问实时信息（新闻、价格、政策）时打开，回答会给来源，重要结论自己点开核对。",
                "**智能体（AI 智能体广场）**：里面有现成的角色助手（学习、办公、娱乐），也可以自己创建：填名称、头像和「设定/提示词」，设定写得越具体，它越像你要的那个人。",
                "**电脑版 / 桌面端**：适合办公，可以常驻在侧边，随时唤出；和手机端账号、历史互通。",
                "**AI 搜索 / 帮我写作**：左侧栏的独立入口，本质是预设好提示词模板的对话，想快速出结果可以直接用。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "【智能体设定模板】\n角色：<例如：资深小学语文老师>\n服务对象：<例如：三年级学生家长>\n回答风格：亲切、不敷衍，先给结论再给例子\n硬性要求：不编造教材内容；不确定就说不确定\n固定输出：每次回答末尾给一条「今天可以让孩子做的一件事」",
              caption: "自定义智能体的「设定」怎么写",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**会议记录 → 纪要**：上传录音转写文本或手写笔记，让它输出「结论 / 待办 / 负责人 / 截止时间」四列表格。",
                "**做汇报**：先要三级大纲，你改完再让它逐页扩写，最后让它按「啰嗦、重复、空话」三类自查。",
                "**学习辅导**：拍照上传题目，让它「先只讲解题思路，不要直接给答案」，你做完再让它批改。",
                "**配图工作流**：用「帮我写作」写文案，再用「图像生成」按同主题出图，最后让豆包检查图文是否匹配。",
                "**长文档速读**：上传 PDF 后先问结构，再挑重点章节深挖，比一次问「总结全文」准得多。",
                "**语音 + 写作**：走路时用语音把想法说出来让它整理成大纲，回家再在电脑上扩写。",
              ],
            },
          ],
        },
        {
          title: "数据与隐私",
          blocks: [
            {
              kind: "list",
              items: [
                "**对话记录**：默认保存在账号里，左侧栏可删除单条对话；长期不用的会话建议定期清理。",
                "**权限管理**：手机 App 里检查麦克风、相册、通讯录权限，不用的权限关掉——语音通话只用麦克风，不需要通讯录。",
                "**数据使用说明**：与训练、数据使用相关的条款以官网《隐私政策》为准，上传敏感材料前建议先读一遍。",
                "**账号安全**：手机号 + 验证码登录，公共设备上用完记得退出登录；换手机号前先在设置里改绑。",
              ],
            },
            {
              kind: "warn",
              text: "不要上传身份证照片、银行卡、工资单、公司内部资料。拍照提问时也要注意背景里别带出工牌、电脑屏幕上的敏感信息。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` 发送、`Shift + Enter` 换行；粘贴长文前先换行。",
                "问实时信息记得开**联网搜索**，问数学/代码记得开**深度思考**，其余时候都关掉。",
                "手机上把常用功能（语音、拍照）放在好按的位置，通勤时用语音，办公时用电脑版。",
                "回答不满意就说「换一种说法，更口语 / 更正式 / 更短」，不用重开对话。",
                "把固定的要求（比如「我们公司的周报格式是…」）存成一段文字，每次贴上去，比重新解释快。",
                "对着 App 拍一张纸质文档再提问，是打工人最省时间的用法之一。",
                "重要结论让它给出来源或原文位置，AI 说的数字一定要自己核对一遍。",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "覆盖写作、办公、学习三类场景，把尖括号里的内容替换掉即可。",
          code: `【改写】把下面这段文字改写成 <语气> 的 <文体>，分成「现状 / 问题 / 下一步」三段，每段不超过 150 字，只输出改后内容：
<粘贴原文>

【办公】这是我上传的 <会议记录 / 项目文档>。请用 5 条要点概括，然后把待办事项整理成表格（事项 / 负责人 / 截止时间），最后指出没有明确截止时间的事项。

【学习】这是我上传的题目图片。先只讲思路和涉及的知识点，不要给答案；我给出答案后你再批改并指出我错在哪一步。`,
        },
        {
          path: "自定义智能体设定（左侧栏 → 智能体 → 创建）",
          desc: "创建智能体时填「名称 + 头像 + 设定」。设定就是它的系统提示词，写得越具体越像你要的角色。",
          code: `角色：<例如：资深小学语文老师>
服务对象：<例如：三年级学生家长>
语气：亲切、不说教，先给结论再给例子
禁止：不编造教材内容；不确定的内容明确说「不确定」
固定结尾：给一条「今天可以让孩子做的一件事」`,
        },
        {
          path: "API 接入示例（火山引擎方舟控制台，可选）",
          desc: "想在自己的程序里调用豆包模型，需要到火山引擎方舟控制台开通模型并创建 API Key，按 token 计费；具体模型名、接入地址与价格以控制台文档为准。",
          code: `# 火山方舟（Volcengine Ark）接口，通常是 OpenAI 兼容格式
curl https://ark.cn-beijing.volces.com/api/v3/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $ARK_API_KEY" -d '{"model":"<控制台里开通的模型 ID>","messages":[{"role":"user","content":"用三点总结这段话"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "网页打不开或一直加载",
          fix: "先刷新一次并换浏览器（Chrome/Edge 最新版）；检查是不是公司网络做了限制。手机端切换网络（Wi-Fi ↔ 蜂窝）通常立刻恢复。",
        },
        {
          problem: "收不到短信验证码",
          fix: "检查短信拦截、验证码分类和垃圾短信；确认手机号没有欠费；等 60 秒再点重发。多次失败可以改用抖音账号一键登录。",
        },
        {
          problem: "语音通话没声音 / 按了麦克风没反应",
          fix: "在系统设置里给豆包开启麦克风权限（手机：设置 → 应用 → 豆包 → 权限）。同时检查是否静音、是否连着没接通的蓝牙耳机。",
        },
        {
          problem: "图像或视频生成失败、排队很久",
          fix: "生成任务量大时会排队，换个时间段再试。提示词里别带真人肖像、商标和敏感题材，否则会被审核拦下；被拦时改描述重试。",
        },
        {
          problem: "上传文件后它总结得不完整",
          fix: "扫描版 PDF 和手机拍的照片识别效果较差，尽量上传原始文件；超长文件分段上传，先问结构再逐段追问。",
        },
        {
          problem: "换了手机登录后一切空白 / 提示异地登录",
          fix: "确认用同一个手机号或同一个抖音账号登录；异地登录提醒是正常的账号保护，按提示验证即可，不是被盗。",
        },
      ],
      cost:
        "网页版、App 和电脑版的**基础功能免费**（对话、写作、上传文件、语音通话、图像生成等）。部分更高级的能力或更高频率的生成可能按需计费或处于内测，以官网和 App 内说明为准；没有强制订阅，也就不存在“取消订阅”的问题。想自己写程序调用模型，需要到火山引擎方舟控制台开通并按 token 付费。",
    },
    en: {
      difficulty: "Beginner (a great first AI tool)",
      os: "Web / iOS / Android / macOS / Windows (Doubao desktop app)",
      prereq: [
        {
          label: "Account (phone number, or Douyin)",
          detail:
            "A mainland China (+86) number with an SMS code works, or sign in with a Douyin account in one tap. One phone number per account — adding a password in settings afterwards is worth doing.",
        },
        {
          label: "Network (direct in China)",
          detail:
            "doubao.com works without a proxy, on web, mobile and desktop.",
        },
        {
          label: "Payment (core features are free)",
          detail:
            "Chat, writing, voice calls and image generation are free. Some higher-frequency or advanced features may be metered or in beta — check the official site and the in-app notes.",
        },
        {
          label: "Client app (best on mobile)",
          detail:
            "The web app works immediately; the mobile app has the full set (voice calls, photo questions, image and video generation); the desktop app suits office work. Accounts sync.",
        },
        {
          label: "Region and age",
          detail:
            "Built for users in mainland China; overseas access may be limited or slow. Some features are restricted for accounts under 18.",
        },
      ],
      steps: [
        {
          title: "Open the official site: doubao.com",
          blocks: [
            {
              kind: "text",
              text: "The web app is at **doubao.com**. Doubao is a ByteDance product whose models are served through Volcengine (火山引擎), so you'll see Volcengine links on the site — that's expected. **Log in / Sign up** sits in the top-right corner.",
            },
            {
              kind: "shot",
              src: "/shots/doubao/site.png",
              caption: "The Doubao site: the web app lives at doubao.com, models are served by Volcengine",
            },
            {
              kind: "warn",
              text: "Don't install third-party \"Doubao AI assistant\" apps or browser extensions. In app stores, look for the app literally named 豆包 with ByteDance as the developer.",
            },
          ],
        },
        {
          title: "Sign up: phone number or Douyin",
          blocks: [
            {
              kind: "list",
              items: [
                "**Phone** (recommended): enter the number → request a 6-digit SMS code → accept the terms → you're in.",
                "**Douyin**: tap the Douyin login button, confirm on Douyin's authorisation page, no code needed.",
                "**Mobile app**: same routes, and your web conversations sync over.",
              ],
            },
            {
              kind: "note",
              text: "After signing in, open the avatar menu and set a password or bind a second login method so you don't get locked out when you change phones.",
            },
          ],
        },
        {
          title: "Tour the interface: sidebar and composer",
          blocks: [
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: `+ 新对话` (new chat), then the feature area — AI search, image generation, writing help, video generation — each with its own template.",
                "**Lower sidebar**: your conversation history. Click to continue, rename or delete.",
                "**Centre**: the conversation. Long answers stream in and you can stop them at any point.",
                "**Composer**: the paperclip uploads files; below the input sit toggles like `深度思考` (deep thinking) and `联网搜索` (web search); on the right are the microphone and send buttons.",
                "**Bottom-left**: account, settings and agent (bot) management.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/doubao/chat-ui.svg",
              caption: "The Doubao web app: features and history on the left, thinking and web-search toggles under the composer (illustration)",
            },
            {
              kind: "note",
              text: "The UI changes fairly often and entries get renamed. When something is missing, check the **left sidebar** and the **row of buttons under the composer** first.",
            },
          ],
        },
        {
          title: "Use case 1: everyday Q&A and writing",
          blocks: [
            {
              kind: "text",
              text: "The bread-and-butter use. State the audience, situation, tone and length and the output is usually usable as-is.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Turn the work summary below into a weekly report with three sections — progress / next week / blockers — under 150 words each, formal but no filler. Output only the report:\n\n<paste your notes>",
              caption: "Writing: give the structure, the word cap and the source text",
            },
            {
              kind: "code",
              lang: "text",
              code: "Write a <notice type> for <audience>: under 150 words, warm tone, state the time, place and what to bring, no bureaucratic phrasing.",
              caption: "Drafting from scratch: audience + scenario + hard requirements",
            },
          ],
        },
        {
          title: "Use case 2: voice calls, image and video generation",
          blocks: [
            {
              kind: "text",
              text: "Tap the microphone in the mobile (or desktop) app to start a **voice call** — you talk, it talks back. Excellent for speaking practice, talking through an idea before a meeting, or capturing thoughts while walking.",
            },
            {
              kind: "list",
              items: [
                "**First run**: the app asks for microphone permission. Grant it, otherwise the button does nothing.",
                "**Language practice**: in a voice call, say \"be my English conversation partner on everyday topics, and correct my grammar immediately\".",
                "**Hands-free**: have it read a news summary or talk through your day while you drive or cook.",
                "**Privacy**: use headphones in public, and avoid recording situations where others haven't consented.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "Let's practise English conversation: play a colleague in London. Chat about everyday topics. Whenever I use bad grammar or an unnatural word, answer me normally first, then on a separate line point out the mistake and give a more natural phrasing.",
              caption: "Prompt template for voice practice",
            },
            {
              kind: "text",
              text: "Image and video generation are separate features in the sidebar. The prompt pattern is **subject + action/scene + style + aspect ratio** — the more specific, the more predictable the result.",
            },
            {
              kind: "code",
              lang: "text",
              code: "An orange cat sitting by a window watching the rain, watercolour illustration, soft light, cool palette, portrait 3:4, clean composition with no text.",
              caption: "Image prompt template: subject + scene + style + framing",
            },
            {
              kind: "list",
              items: [
                "Not happy with a result? Hit regenerate, or append \"different angle / more photorealistic / simpler\".",
                "Video generation usually queues and has duration limits — lock the look with an image first.",
                "Outputs go through content moderation: real people's likenesses, trademarks and sensitive topics get rejected. Rephrase and retry.",
              ],
            },
          ],
        },
        {
          title: "Use case 3: upload files for long-document work",
          blocks: [
            {
              kind: "text",
              text: "Click the paperclip to upload a document, spreadsheet or image, then work in the order \"summarise first, ask second\" — it's noticeably more reliable.",
            },
            {
              kind: "code",
              lang: "text",
              code: "This is the <file type> I uploaded. 1) Summarise it in 5 bullets. 2) Put every deadline and owner into a table. 3) List the items that have no clear deadline.",
              caption: "Office work: the three questions that cover most documents",
            },
            {
              kind: "note",
              text: "For paper documents, use the app's photo question — photograph an invoice, manual or notice and ask about it directly. Much faster than typing a description.",
            },
          ],
        },
        {
          title: "Level up: agents, deep thinking, web search and desktop",
          blocks: [
            {
              kind: "list",
              items: [
                "**Deep thinking**: reasons before answering — use it for maths, logic and complex decisions; turn it off for casual chat.",
                "**Web search**: turn it on for anything time-sensitive (news, prices, policy). Answers carry sources — open the important ones.",
                "**Agents**: there's a gallery of ready-made assistants (study, office, entertainment), and you can build your own by filling in a name, avatar and persona/prompt. The more specific the persona, the better the result.",
                "**Desktop app**: good for office work — keep it a keystroke away. Same account and history as mobile.",
                "**AI search / writing help**: sidebar shortcuts that are really templated chats; handy when you want output fast.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "[Agent persona template]\nRole: <e.g. seasoned primary-school Chinese teacher>\nServes: <e.g. parents of Year 3 pupils>\nTone: warm, never preachy; conclusion before examples\nNever: invent textbook content; say \"uncertain\" when unsure\nAlways end with: one thing the child can do today",
              caption: "How to write the persona for a custom agent",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Meeting notes → minutes**: upload the transcript or your scribbles and get a four-column table (decision / action / owner / deadline).",
                "**Build a presentation**: outline first, edit it, expand slide by slide, then have it self-review for wordiness and filler.",
                "**Study help**: photograph the problem and ask for \"the approach only, no answer\" — then have it mark your attempt.",
                "**Image workflow**: draft the copy with the writing feature, generate a matching image, then have Doubao check that the two line up.",
                "**Long documents**: ask about the structure before drilling into specific sections — far more accurate than \"summarise everything\".",
                "**Voice to text**: talk through your idea on the move and have it produce an outline you expand at your desk.",
              ],
            },
          ],
        },
        {
          title: "Data and privacy",
          blocks: [
            {
              kind: "list",
              items: [
                "**Conversations**: stored in your account. Delete individual chats from the sidebar and clear old ones periodically.",
                "**Permissions**: review microphone, photo library and contacts permissions in the mobile app and revoke what you don't use — voice calls only need the microphone.",
                "**Data use**: the training and data clauses are in the official privacy policy. Read it before uploading anything sensitive.",
                "**Account security**: login is phone + code, so sign out on shared devices and update the bound number in settings before you change phones.",
              ],
            },
            {
              kind: "warn",
              text: "Don't upload ID photos, bank details, payslips or internal company documents — and when using the camera, keep badges and screens with sensitive content out of frame.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "`Enter` sends, `Shift + Enter` adds a line — use it before pasting long text.",
                "Web search for live information, deep thinking for maths and code, both off otherwise.",
                "Keep voice and camera on the home row of the mobile home screen — voice commuting, desktop for documents.",
                "Disliked an answer? Say \"say it again, more casual / more formal / shorter\" rather than restarting.",
                "Save your standing requirements (your company's report format) as a snippet and paste it instead of re-explaining.",
                "Photographing a paper document and asking about it is one of the biggest time savers at work.",
                "Always verify numbers yourself; ask for the source or the original location in the document.",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Covers writing, office work and study — replace the angle brackets.",
          code: `[Rewrite] Rewrite the text below as a <tone> <document type>, split into Situation / Problem / Next steps, under 150 words each. Output only the rewrite:
<paste>

[Office] This is the <meeting notes / project doc> I uploaded. Summarise in 5 bullets, then build a table of actions (item / owner / deadline) and flag anything without a deadline.

[Study] This is a photo of a problem set. Explain the approach and the concepts only — no answers. After I answer, mark it and tell me which step I got wrong.`,
        },
        {
          path: "Custom agent persona (sidebar → agents → create)",
          desc: "Creating an agent asks for a name, avatar and persona. The persona is effectively a system prompt — the more specific, the better it behaves.",
          code: `Role: <e.g. seasoned primary-school Chinese teacher>
Serves: <e.g. parents of Year 3 pupils>
Tone: warm, never preachy; conclusion before examples
Never: invent textbook content; say "uncertain" when unsure
Always end with: one thing the child can do today`,
        },
        {
          path: "API example (Volcengine Ark console, optional)",
          desc: "To call Doubao models from your own code, enable the model in the Volcengine Ark console and create an API key — billed per token. Confirm model IDs, endpoints and prices in the console docs.",
          code: `# Volcengine Ark endpoint, OpenAI-compatible format
curl https://ark.cn-beijing.volces.com/api/v3/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $ARK_API_KEY" -d '{"model":"<model ID enabled in your console>","messages":[{"role":"user","content":"Summarise this in three points"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "The site won't load or keeps loading",
          fix: "Refresh and try the latest Chrome/Edge; check whether a corporate network is blocking it. On mobile, switching between Wi-Fi and cellular usually fixes it instantly.",
        },
        {
          problem: "No SMS verification code",
          fix: "Check SMS filtering, the verification-code folder and spam; make sure the number isn't suspended, and wait 60 seconds before resending. If it keeps failing, use Douyin login instead.",
        },
        {
          problem: "Voice calls are silent, or the microphone does nothing",
          fix: "Grant microphone permission in system settings (mobile: Settings → Apps → Doubao → Permissions). Also check you aren't muted and aren't connected to a Bluetooth headset that isn't actually in use.",
        },
        {
          problem: "Image or video generation fails or queues forever",
          fix: "Queues build at busy times — try a different time slot. Prompts involving real people's likenesses, trademarks or sensitive topics get blocked by moderation; rephrase and retry.",
        },
        {
          problem: "An uploaded file gets an incomplete summary",
          fix: "Scanned PDFs and photos of documents parse poorly — upload the original file where possible. Split very long files and ask about the structure first.",
        },
        {
          problem: "Everything is empty after logging in on a new phone / \"login from a new location\"",
          fix: "Make sure you're on the same phone number or Douyin account. The new-location notice is normal account protection — complete the verification, it isn't a hack.",
        },
      ],
      cost:
        "The web, mobile and desktop apps are **free for core features** (chat, writing, file uploads, voice calls, image generation). Some advanced or high-frequency features may be metered or in beta — check the official site and in-app notes. There's no mandatory subscription, so there's nothing to cancel. Calling the models from your own code requires enabling them in the Volcengine Ark console and paying per token.",
    },
  },

  kimi: {
    zh: {
      difficulty: "入门（零基础可上手）",
      os: "网页 / iOS / Android / macOS / Windows（Kimi 桌面端）",
      prereq: [
        {
          label: "账号（手机号为主）",
          detail:
            "国内手机号（+86）收短信验证码即可注册登录；部分版本也支持邮箱或微信登录，按界面提示选择即可。一个手机号绑一个账号。",
        },
        {
          label: "网络环境（国内直连）",
          detail:
            "kimi.moonshot.cn（现也使用 kimi.com 域名）国内可直连，不需要代理。上传超大文件时对上传速度有要求，建议用稳定网络。",
        },
        {
          label: "付费（免费为主）",
          detail:
            "日常使用免费；高频使用或需要更快的响应、更高额度，可以开 Kimi 会员（按月订阅，价格以官网为准）。",
        },
        {
          label: "客户端（可选）",
          detail:
            "网页版打开即用；手机 App 在应用商店搜「Kimi」安装，支持语音输入；桌面端适合处理长文档，账号全部互通。",
        },
        {
          label: "地区与文件限制",
          detail:
            "面向中国大陆用户，国内访问最顺畅。单个文件的大小与页数有上限（以官方提示为准），超大文档建议拆分上传。",
        },
      ],
      steps: [
        {
          title: "打开官网：kimi.moonshot.cn",
          blocks: [
            {
              kind: "text",
              text: "入口是 **kimi.moonshot.cn**（月之暗面 Moonshot AI 出品，现在 **kimi.com** 也指向同一个产品）。打开后点右上角的**登录/注册**即可。",
            },
            {
              kind: "shot",
              src: "/shots/kimi/site.png",
              caption: "月之暗面官网：Kimi 的网页版入口是 kimi.moonshot.cn（也可用 kimi.com）",
            },
            {
              kind: "warn",
              text: "搜索「Kimi 长文」会看到不少第三方下载站和「Kimi 破解版」。手机端请只在官方应用商店搜「Kimi」并认准开发者为月之暗面相关主体；网页端只用上面两个域名。",
            },
          ],
        },
        {
          title: "注册登录：手机号 + 验证码",
          blocks: [
            {
              kind: "list",
              items: [
                "输入国内手机号 → 点获取验证码 → 填入 6 位短信码 → 勾选同意用户协议 → 登录。",
                "首次登录会创建账号，不需要单独注册流程，也不需要设密码。",
                "如果界面提供邮箱或微信登录入口，按提示选择即可，效果一样。",
              ],
            },
            {
              kind: "note",
              text: "登录后在账号设置里补一个密码或绑定备用登录方式，换手机时不容易被卡在门外。",
            },
          ],
        },
        {
          title: "界面导览：左侧会话、输入框与上传入口",
          blocks: [
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：`新建对话`；下面是历史会话列表，点一条就能继续；鼠标悬停可以重命名或删除。",
                "**中间**：对话区域，用户消息和 Kimi 的回答分栏显示，长回答流式输出。",
                "**底部输入框**：左侧是**上传文件**入口（也可以直接把文件拖进对话框）；右侧是发送按钮。",
                "**模型 / 功能入口**：不同版本会在输入框附近提供模型切换、联网搜索、深度研究等开关。具体名称以你看到的界面为准，位置通常就在输入框周边。",
                "**左下角头像**：账号设置、会员、退出登录。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/kimi/chat-ui.svg",
              caption: "Kimi 网页版：左侧是历史会话，把文件拖进对话框后直接提问即可（示意图）",
            },
            {
              kind: "note",
              text: "Kimi 的界面迭代很快，功能名字偶尔会调整。找不到某个开关时，先看**输入框下方那一排按钮**和**左下角头像菜单**。",
            },
          ],
        },
        {
          title: "用法一：上传长文档并提问（Kimi 的看家本领）",
          blocks: [
            {
              kind: "text",
              text: "把 PDF、Word、PPT、Excel、txt 直接拖进对话框（或点上传），上传完成后先确认它读到了文件，再提问。Kimi 以长上下文著称，几十页的文档可以整份丢进去。",
            },
            {
              kind: "code",
              lang: "text",
              code: "这是我上传的《<文件名>》。请：1）用 10 行以内的摘要说清它讲了什么；2）按章节列一份带页码的目录；3）把所有出现了数字、金额或时间点的句子原样摘出来，并标注页码。",
              caption: "长文档的一站式提问模板：摘要 + 结构 + 数据",
            },
            {
              kind: "warn",
              text: "回答里的页码和数字一定要抽查两处再采信。大模型的「引用」偶尔会记错位置，涉及合同条款、财务数字时以原文为准。",
            },
          ],
        },
        {
          title: "用法二：粘贴网页链接做速读",
          blocks: [
            {
              kind: "text",
              text: "把文章链接直接粘进输入框，让它提炼要点。适合读长新闻、政策原文、行业报告，比自己在浏览器里翻要快。",
            },
            {
              kind: "code",
              lang: "text",
              code: "请读一下这个链接：<粘贴网址>\n要求：1）用 5 条要点说清核心信息；2）指出文中哪些说法是作者观点、哪些是有数据支撑的事实；3）列出文中没解释清楚的专业术语并逐一解释。",
              caption: "网页速读：要要点、要事实与观点的区分",
            },
            {
              kind: "note",
              text: "有些网站会阻止抓取，导致读取失败。这时可以把正文复制粘贴进去，或者先截图再上传图片让它识别。",
            },
          ],
        },
        {
          title: "用法三：写作与办公",
          blocks: [
            {
              kind: "code",
              lang: "text",
              code: "帮我写一份周报，结构是「本周完成 / 遇到问题 / 下周计划 / 需要支持」，语气克制、多用动词少用形容词，每部分 3 条以内。素材如下：\n\n<把你的零散记录粘进来>",
              caption: "把零散记录变成结构化周报",
            },
            {
              kind: "code",
              lang: "text",
              code: "我要写一篇关于 <主题> 的论文，先只给我一份三级提纲（每部分标题 + 2 个论点）。我确认后，你再针对每个论点指出需要什么类型的论据和数据。",
              caption: "论文/长文：先提纲、后论据",
            },
            {
              kind: "code",
              lang: "text",
              code: "把下面这封中文邮件翻译成英文商务邮件，语气礼貌但不卑微，保留原来的三条诉求，结尾不要「期待您的回复」这类套话：\n\n<粘贴邮件>",
              caption: "邮件翻译：保留诉求、去掉中式客套",
            },
          ],
        },
        {
          title: "进阶：Kimi+ 智能体、深度研究、App 与 API 接入",
          blocks: [
            {
              kind: "text",
              text: "左侧栏里通常有 **Kimi+**（现成的角色与工具集）和**深度研究**类功能：前者是别人配好的助手（如论文精读、小红书文案、法律咨询模板），后者会主动联网检索多个来源，产出一份带引用的长报告。",
            },
            {
              kind: "list",
              items: [
                "**Kimi+ 怎么用**：点开挑一个，直接提问即可；相当于替你写好了一大段提示词。",
                "**深度研究怎么用**：给它一个明确的研究问题（范围越窄越好），它会自己去搜索多份资料再汇总。",
                "**注意**：重大决策（投资、法律、医疗）不要把它的结论当作最终依据，务必点开引用来源自己看。",
              ],
            },
            {
              kind: "list",
              items: [
                "**手机 App**：应用商店搜「Kimi」，同一个手机号登录，历史会话同步；支持语音输入。",
                "**桌面端**：官方提供 macOS 与 Windows 版本，适合处理长文档和长期挂着的会话。",
                "**文件上传技巧**：超大 PDF 建议先确认页数；上传失败时压缩一下图片型 PDF，或者只截取需要的章节。",
                "**API**：想自己写程序调用，去 `platform.moonshot.cn` 注册、创建 API Key、充值（按 token 计费），接口兼容 OpenAI 格式。",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl https://api.moonshot.cn/v1/chat/completions -H \"Content-Type: application/json\" -H \"Authorization: Bearer $MOONSHOT_API_KEY\" -d '{\"model\":\"<控制台里可用的模型名>\",\"messages\":[{\"role\":\"user\",\"content\":\"用三点总结这段话\"}]}'",
              caption: "API 调用示例：先在 platform.moonshot.cn 创建 Key 并充值",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**论文精读**：上传 PDF → 要结构 → 追问「方法论是否支撑结论」→ 让它输出一份可复制的笔记。",
                "**合同 / 协议检查**：上传后问「有哪些条款对我方不利 / 哪些日期与金额前后不一致」（务必核对原文）。",
                "**会议纪要**：粘贴转写文本，让它输出「结论 / 待办 / 负责人 / 截止时间」四列清单。",
                "**学习提问**：上传教材章节，让它「先出 5 道题不给答案」，你答完再让它批改。",
                "**资料整理**：把多份资料分别上传，让它做交叉对比，输出一张对比表。",
                "**写作流水线**：先出提纲 → 你修改 → 逐段扩写 → 让它自查「空话、重复、无依据」，最后人工润色。",
              ],
            },
          ],
        },
        {
          title: "数据与隐私",
          blocks: [
            {
              kind: "list",
              items: [
                "**对话记录**：默认保存在账号里，左侧栏可删除单条会话；长期不用建议定期清理。",
                "**上传的文件**：文件会发送到服务器解析，合同、财务表、证件照片这类内容不要直接上传。",
                "**数据使用条款**：与训练和数据使用相关的具体条款以官网《隐私政策》为准，上传敏感材料前先读一遍。",
                "**账号安全**：手机号 + 验证码登录，公共设备上用完记得退出；换号前先在设置里改绑手机号。",
              ],
            },
            {
              kind: "warn",
              text: "需要分析敏感文档时，先把内容脱敏：姓名替换成「甲/乙」，金额改成区间，删除账号和联系方式，再上传让它做结构化和分析。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "上传文件后先问一句「你看到了哪些部分」，确认解析正确再问正题，能省很多来回。",
                "问长文档时带上页码要求（「请标注第几页」），方便你回原文核对。",
                "答案太长就说「压到 300 字」或「只保留结论」，比重新提问快。",
                "同一份文档要反复问，就把第一次的问答留在同一个会话里，上下文不丢。",
                "高峰期响应慢是常见的，拆小任务、避开整点会顺很多。",
                "手机上用语音输入口述问题，比打字快；电脑上处理长文，各取所长。",
                "把常用的提问模板存进备忘录，复制粘贴比每次重新组织语言省时间。",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "长文档、网页速读、办公写作三类场景的固定句式，替换尖括号内容即可。",
          code: `【读长文档】这是我上传的《<文件名>》。1）用 10 行以内摘要；2）按章节列带页码的目录；3）把所有金额和时间点原样摘出并标注页码。

【读网页】请读这个链接：<网址>。用 5 条要点说清核心信息，并区分哪些是作者观点、哪些有数据支撑。

【写作】帮我写一份周报，结构为「本周完成 / 遇到问题 / 下周计划 / 需要支持」，每部分不超过 3 条，语气克制。素材：
<粘贴素材>`,
        },
        {
          path: "长文档提问清单（对着同一份文件反复用）",
          desc: "把这张清单放在手边，按顺序问，基本能把一份长文档吃透。",
          code: `1. 这份文档一共有几部分？各部分的标题是？
2. 用 10 行以内说清全文讲了什么。
3. 第 <X> 部分的核心结论是什么？它依据哪些数据？
4. 文中哪些结论是作者的推断，而不是数据直接支持的？
5. 把所有金额、日期、人名整理成表格。
6. 如果我是 <你的角色>，这份文档里对我最重要的 3 条是什么？`,
        },
        {
          path: "API 接入示例（platform.moonshot.cn 创建 Key 并充值）",
          desc: "接口兼容 OpenAI 格式，按 token 计费；具体模型名与价格以官方文档为准。",
          code: `curl https://api.moonshot.cn/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $MOONSHOT_API_KEY" -d '{"model":"<控制台里可用的模型名>","messages":[{"role":"user","content":"用三点总结这段话"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "收不到短信验证码",
          fix: "检查短信拦截和验证码分类，确认号码未欠费停机，等 60 秒再点重发。多次失败可以换个时间段，或用界面提供的其他登录方式。",
        },
        {
          problem: "文件上传失败或一直转圈",
          fix: "多是大文件或网络不稳。先压缩图片型 PDF、拆分超大文件，再重新上传；换成 Wi-Fi 或更稳定的网络通常就能过。",
        },
        {
          problem: "上传成功，但回答里找不到我要的内容",
          fix: "别问「总结一下」，改成带页码或章节的具体问题（「第 3 章提到的三个风险是什么」）。它一次能关注的内容有限，问题越具体越准。",
        },
        {
          problem: "高峰期响应很慢或提示稍后重试",
          fix: "高峰期排队是常态。等几分钟重试，把长任务拆成几次；急着要结果可以先问最关键的那一个问题。",
        },
        {
          problem: "回答写到一半中断",
          fix: "回一句「继续」通常能接上。如果频繁中断，把任务拆小，并在提问里限定输出长度（如「不超过 500 字」）。",
        },
        {
          problem: "网页端卡顿、历史会话加载不出来",
          fix: "清理浏览器缓存、换最新版 Chrome/Edge；关掉其它占带宽的程序。会话很多时定期删除旧对话，加载会快一些。",
        },
      ],
      cost:
        "日常使用免费（对话、上传文件、长文本阅读都不收费）。高频使用或需要更快响应、更高额度，可以开 **Kimi 会员**（按月订阅，价格与权益以官网为准），在账号/会员页面可以随时取消，取消后到期前仍可用。想自己写程序调用模型，需要到 platform.moonshot.cn 开通 API 并按 token 付费，与会员是两套计费。",
    },
    en: {
      difficulty: "Beginner (no prior experience needed)",
      os: "Web / iOS / Android / macOS / Windows (Kimi desktop app)",
      prereq: [
        {
          label: "Account (phone number mainly)",
          detail:
            "A mainland China (+86) number with an SMS code is the standard route; some versions also offer email or WeChat login. One phone number per account.",
        },
        {
          label: "Network (direct in China)",
          detail:
            "kimi.moonshot.cn (and kimi.com, which serves the same product) works without a proxy. Uploading very large files benefits from a stable connection.",
        },
        {
          label: "Payment (free for everyday use)",
          detail:
            "Everyday use is free. Heavy users who want faster responses and higher limits can subscribe to Kimi membership (monthly; see the official site for price and benefits).",
        },
        {
          label: "Client app (optional)",
          detail:
            "The web app works immediately; search \"Kimi\" in your app store for the mobile app, which adds voice input; the desktop app suits long documents. Everything syncs.",
        },
        {
          label: "Region and file limits",
          detail:
            "Built for users in mainland China, where it's fastest. Individual files have size and page-count limits (see the in-app notice) — split very large documents.",
        },
      ],
      steps: [
        {
          title: "Open the site: kimi.moonshot.cn",
          blocks: [
            {
              kind: "text",
              text: "Start at **kimi.moonshot.cn** (from Moonshot AI; **kimi.com** serves the same product). Click **Log in / Sign up** in the top-right corner.",
            },
            {
              kind: "shot",
              src: "/shots/kimi/site.png",
              caption: "Moonshot AI's site: the Kimi web app lives at kimi.moonshot.cn (kimi.com works too)",
            },
            {
              kind: "warn",
              text: "Searching for \"Kimi long document\" turns up third-party download sites and \"cracked\" builds. On mobile, install only from an official app store, searching the name Kimi; on the web, use only the two domains above.",
            },
          ],
        },
        {
          title: "Sign up: phone number and code",
          blocks: [
            {
              kind: "list",
              items: [
                "Enter your phone number → request a code → type the 6 digits → accept the terms → you're in.",
                "First login creates the account; there's no separate registration flow and no password to set.",
                "If the page offers email or WeChat login, those work just as well.",
              ],
            },
            {
              kind: "note",
              text: "Set a password or bind a backup login method in account settings so changing phones doesn't lock you out.",
            },
          ],
        },
        {
          title: "Tour the interface: sidebar, composer, uploads",
          blocks: [
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: `新建对话` (new chat), then your conversation history. Hover an entry to rename or delete it.",
                "**Centre**: the conversation, with your messages and Kimi's replies in separate columns; long answers stream in.",
                "**Composer**: the upload entry sits on the left (you can also drag files straight in); send is on the right.",
                "**Feature entries**: depending on the version, model switching, web search and deep research toggles sit around the composer. Names shift; the location doesn't.",
                "**Bottom-left avatar**: account settings, membership and sign-out.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/kimi/chat-ui.svg",
              caption: "The Kimi web app: history on the left, drag a document into the composer and ask (illustration)",
            },
            {
              kind: "note",
              text: "Kimi iterates quickly and labels change. If you can't find a toggle, check the **row of buttons under the composer** and the **bottom-left avatar menu** first.",
            },
          ],
        },
        {
          title: "Use case 1: upload a long document and interrogate it",
          blocks: [
            {
              kind: "text",
              text: "Drag a PDF, Word file, slide deck, spreadsheet or text file into the composer (or click upload). Confirm it actually read the file before asking questions. Kimi is built around a large context window, so whole documents fit.",
            },
            {
              kind: "code",
              lang: "text",
              code: "This is the <filename> I uploaded. 1) Summarise it in 10 lines or fewer. 2) List its structure by section with page numbers. 3) Quote every sentence containing a figure, amount or date, with the page number.",
              caption: "One-shot template for long documents: summary + structure + data",
            },
            {
              kind: "warn",
              text: "Spot-check two of the page numbers and figures before trusting them. Models occasionally misattribute citations — for contracts and financials, the original text wins.",
            },
          ],
        },
        {
          title: "Use case 2: paste a link for fast reading",
          blocks: [
            {
              kind: "text",
              text: "Paste an article URL into the composer and ask for the highlights. Great for long news pieces, policy documents and industry reports.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Read this link: <url>\n1) Give me the core information in 5 bullets. 2) Separate the author's opinions from claims backed by data. 3) List any jargon the article doesn't explain and define it.",
              caption: "Web reading: highlights, plus facts vs opinions",
            },
            {
              kind: "note",
              text: "Some sites block fetching, so the read can fail. Copy and paste the body text instead, or screenshot it and upload the image.",
            },
          ],
        },
        {
          title: "Use case 3: writing and office work",
          blocks: [
            {
              kind: "code",
              lang: "text",
              code: "Write a weekly report with four sections — done / blockers / next week / support needed. Keep the tone restrained, favour verbs over adjectives, max three bullets per section. Source material:\n\n<paste your scattered notes>",
              caption: "Turn scattered notes into a structured weekly report",
            },
            {
              kind: "code",
              lang: "text",
              code: "I'm writing a paper about <topic>. Start with a three-level outline only (section titles + 2 arguments each). Once I approve, tell me what kind of evidence and data each argument needs.",
              caption: "Papers and long pieces: outline first, evidence second",
            },
            {
              kind: "code",
              lang: "text",
              code: "Translate the Chinese email below into a business email in English. Polite without being obsequious, keep all three requests, and drop the \"looking forward to your reply\" filler:\n\n<paste email>",
              caption: "Email translation: keep the requests, drop the formalities",
            },
          ],
        },
        {
          title: "Level up: Kimi+ agents, deep research, mobile and the API",
          blocks: [
            {
              kind: "text",
              text: "The sidebar usually offers **Kimi+** (a library of pre-configured roles and tools — paper reading, social copy, legal templates) and a **deep research** mode that searches multiple sources and produces a longer, cited report.",
            },
            {
              kind: "list",
              items: [
                "**Kimi+**: pick one and ask your question — it's effectively a pre-written prompt.",
                "**Deep research**: give it a narrow, well-defined question; it gathers sources and synthesises them.",
                "**Caution**: for investment, legal or medical decisions, treat the output as a starting point and open the cited sources yourself.",
              ],
            },
            {
              kind: "list",
              items: [
                "**Mobile app**: search \"Kimi\" in your app store, log in with the same number and history syncs; voice input is supported.",
                "**Desktop app**: official macOS and Windows builds suit long documents and always-open sessions.",
                "**Upload tips**: check the page count of huge PDFs first; if an upload fails, compress image-heavy PDFs or upload only the chapters you need.",
                "**API**: register at `platform.moonshot.cn`, create a key and top up (per token). The API is OpenAI-compatible.",
              ],
            },
            {
              kind: "code",
              lang: "bash",
              code: "curl https://api.moonshot.cn/v1/chat/completions -H \"Content-Type: application/json\" -H \"Authorization: Bearer $MOONSHOT_API_KEY\" -d '{\"model\":\"<a model available in your console>\",\"messages\":[{\"role\":\"user\",\"content\":\"Summarise this in three points\"}]}'",
              caption: "API call: create the key and top up on platform.moonshot.cn first",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Paper reading**: upload the PDF → ask for the structure → challenge whether the method supports the conclusions → have it produce copy-ready notes.",
                "**Contract review**: upload it and ask which clauses work against you, and which dates or amounts contradict each other (verify against the original).",
                "**Meeting minutes**: paste the transcript and get a four-column list: decision / action / owner / deadline.",
                "**Study aid**: upload a textbook chapter and ask for five questions with no answers, then have it mark your attempt.",
                "**Cross-referencing**: upload several sources at once and ask for a comparison table.",
                "**Writing pipeline**: outline → you edit → section-by-section expansion → self-check for filler, repetition and unsupported claims → final human polish.",
              ],
            },
          ],
        },
        {
          title: "Data and privacy",
          blocks: [
            {
              kind: "list",
              items: [
                "**Conversations**: stored in your account. Delete individual chats from the sidebar and clear old ones periodically.",
                "**Uploaded files**: files are sent to servers for parsing. Don't upload contracts, financial statements or ID photos.",
                "**Data use**: the specifics on training and data usage are in the official privacy policy — read it before uploading anything sensitive.",
                "**Account security**: login is phone + code, so sign out on shared machines and rebind your number in settings before switching phones.",
              ],
            },
            {
              kind: "warn",
              text: "For sensitive documents, redact first: replace names with Party A/Party B, bucket the amounts, strip account numbers and contact details, then upload for structuring and analysis.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "After an upload, ask \"which parts did you see?\" to confirm the parse before asking the real question — it saves a lot of back-and-forth.",
                "Ask for page numbers (\"cite the page\") so you can verify against the original.",
                "Too long? Say \"cut it to 200 words\" or \"conclusions only\" instead of re-prompting.",
                "If you'll keep querying one document, stay in the same conversation so the context survives.",
                "Slow responses at peak times are normal — split the work and avoid the top of the hour.",
                "Dictate questions on your phone, handle long documents on your desktop.",
                "Keep your favourite prompt templates in a note; pasting beats re-writing the framing.",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Fixed phrasing for long documents, web reading and office writing. Replace the angle brackets.",
          code: `[Long doc] This is the <filename> I uploaded. 1) Summarise in 10 lines or fewer. 2) List the structure by section with page numbers. 3) Quote every amount and date with its page number.

[Web] Read this link: <url>. Give me the core information in 5 bullets and separate the author's opinions from data-backed facts.

[Writing] Write a weekly report with sections done / blockers / next week / support needed, max 3 bullets each, restrained tone. Source:
<paste>`,
        },
        {
          path: "Long-document question checklist (reuse on the same file)",
          desc: "Work through this list in order and you'll have squeezed a long document dry.",
          code: `1. How many parts does this document have, and what are their titles?
2. Summarise the whole thing in 10 lines or fewer.
3. What is the core conclusion of part <X>, and which data supports it?
4. Which conclusions are the author's inference rather than data-backed?
5. Put every amount, date and name into a table.
6. As a <your role>, what are the three things in here that matter most to me?`,
        },
        {
          path: "API example (create a key and top up on platform.moonshot.cn)",
          desc: "OpenAI-compatible and billed per token; confirm model names and prices in the official docs.",
          code: `curl https://api.moonshot.cn/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $MOONSHOT_API_KEY" -d '{"model":"<a model available in your console>","messages":[{"role":"user","content":"Summarise this in three points"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "No SMS code arrives",
          fix: "Check SMS filtering and the verification folder, confirm the number isn't suspended, and wait 60 seconds before resending. If it keeps failing, try another time or use an alternative login method if offered.",
        },
        {
          problem: "A file upload fails or spins forever",
          fix: "Usually a large file or unstable connection. Compress image-heavy PDFs, split huge files and retry; switching to Wi-Fi generally fixes it.",
        },
        {
          problem: "The upload worked but the answer misses what I need",
          fix: "Stop asking \"summarise it\" and ask something specific with a page or section (\"what are the three risks in chapter 3?\"). The narrower the question, the sharper the answer.",
        },
        {
          problem: "Very slow responses at peak times, or \"try again later\"",
          fix: "Queuing at peak times is normal. Retry in a few minutes and split long tasks; if you're in a hurry, ask only the single most important question.",
        },
        {
          problem: "The answer stops halfway",
          fix: "Reply \"continue\" — it usually resumes. If it keeps happening, split the task and cap the output length (\"under 500 words\").",
        },
        {
          problem: "The web app lags or history won't load",
          fix: "Clear the browser cache and use the latest Chrome/Edge; close other bandwidth-hungry apps. Deleting old conversations speeds up loading.",
        },
      ],
      cost:
        "Everyday use is free (chat, file uploads and long-document reading). Heavy users who want faster responses and higher limits can subscribe to **Kimi membership** (monthly; price and benefits on the official site) — cancel any time from the account/membership page and keep access until the period ends. Calling the models from your own code requires an API account at platform.moonshot.cn, billed per token and separate from membership.",
    },
  },
  grok: {
    zh: {
      difficulty: "入门（零基础可上手）",
      os: "网页 / iOS / Android",
      prereq: [
        {
          label: "账号（X 账号 / Google / Apple / 邮箱）",
          detail:
            "最简单是 Continue with Google 或 Continue with Apple；也可以直接用 X（原 Twitter）账号登录，或用邮箱注册。注意：X 账号本身也需要能访问外网的网络环境才能注册。",
        },
        {
          label: "网络环境（硬性要求）",
          detail:
            "grok.com 不对中国大陆开放，需要能访问 grok.com 的网络环境，出口 IP 要在支持的国家或地区。注册后尽量保持节点稳定，频繁切换容易触发安全验证。",
        },
        {
          label: "付费（可先用免费版）",
          detail:
            "免费版可以对话和用基础联网搜索，但有额度和频率限制，限制规则官方会调整；需要更高额度、更强模型和深度检索时再订阅 SuperGrok（价格以官网为准，需境外支付方式）。",
        },
        {
          label: "客户端（可选）",
          detail:
            "网页版打开即用。手机端可在 App Store / Google Play 搜 `Grok` 安装官方 App（开发者 xAI），账号和网页端互通。",
        },
        {
          label: "地区与年龄限制",
          detail:
            "Grok 只在部分国家和地区开放，注册时的手机号/地区字段很容易卡住中国大陆用户；+86 手机号不被支持。未达最低年龄要求的账号无法使用。",
        },
      ],
      steps: [
        {
          title: "打开官网，认清 grok.com",
          blocks: [
            {
              kind: "text",
              text: "聊天入口是 **grok.com**。xAI 的公司官网是 **x.ai**（介绍页，不能聊天），X 平台上的 Grok 入口是 X 应用里的 Grok 标签页——三者不要混。",
            },
            {
              kind: "warn",
              text: "搜索「Grok 中文版」「Grok 免登录」会出现一批第三方站点，它们不是 xAI 官方，可能转卖额度或记录你的对话与 X 账号信息。**只使用 grok.com（以及 X 应用内的 Grok 入口）**，域名对不上一律关掉。",
            },
            {
              kind: "note",
              text: "打不开、一直转圈或提示地区不可用时，先按第 3 步检查网络环境，多数情况不是网站故障。",
            },
          ],
        },
        {
          title: "注册账号：Google / Apple / X / 邮箱",
          blocks: [
            {
              kind: "text",
              text: "进入 grok.com 后点 **Sign up**（或 Sign in），选一种方式登录即可。",
            },
            {
              kind: "shot",
              src: "/shots/grok/signup.svg",
              caption: "Grok 注册页：Google / Apple / X 一键登录，也可以用邮箱注册（示意，按钮文案以实际界面为准）",
            },
            {
              kind: "list",
              items: [
                "**Continue with Google / Apple**：授权即完成，推荐新手，不用记新密码。",
                "**Continue with X**：用 X 账号登录，好处是之后在 X 平台也能直接用 Grok。",
                "**邮箱注册**：填邮箱 → 收验证码/验证邮件 → 完成验证。邮件常进垃圾箱，搜发件人 `x.ai` 或 `grok` 再找一遍。",
              ],
            },
            {
              kind: "warn",
              text: "如果你打算走「先注册 X 账号」这条路：X 的注册同样需要支持地区的手机号，中国大陆 +86 号码收不到验证码，而且新注册的 X 账号本身容易被风控。用 Google/Apple 登录 grok.com 通常更省事。",
            },
          ],
        },
        {
          title: "登录，以及打不开时怎么办",
          blocks: [
            {
              kind: "list",
              items: [
                "**页面打不开 / 一直转圈**：网络环境没生效。先确认能打开 google.com，再回来开 grok.com。",
                "**提示地区不可用 / 拒绝访问**：出口 IP 被判定的地区不支持。换节点，清缓存，用无痕窗口重试。",
                "**登录后立刻被登出、反复跳登录页**：允许第三方 Cookie；临时关闭脚本拦截类扩展。",
                "**卡在人机验证**：用最新版 Chrome/Edge，关掉翻译插件，别用最激进的隐私模式。",
                "**用 X 账号登录后要求验证**：X 会要求验证邮箱或手机号，按提示完成即可；这一步卡住时先回 X 网页版把账号状态处理干净。",
              ],
            },
            {
              kind: "note",
              text: "登录成功后网页版无需安装任何东西。手机 App 也要在同一网络环境下使用，否则会一直转圈。",
            },
          ],
        },
        {
          title: "装客户端：iOS / Android",
          blocks: [
            {
              kind: "list",
              items: [
                "**iOS**：App Store 搜 `Grok`，开发者为 **xAI**。国区商店搜不到，需要外区（美区等）Apple ID。",
                "**Android**：Google Play 搜 `Grok`；国内应用商店没有官方版本，名字里带「中文版」的一律不要装。",
                "**登录**：用与网页端相同的方式登录（Google/Apple/X/邮箱），对话记录会同步。",
                "**也可从 X 进入**：X 应用里有 Grok 入口，好处是不用另外装 App，但功能以 X 内的版本为准。",
              ],
            },
            {
              kind: "warn",
              text: "任何要求输入 X 账号密码或 Google 密码的第三方「Grok 客户端」都是钓鱼，直接卸载。",
            },
          ],
        },
        {
          title: "界面导览：左侧栏、模型、输入框和两个按钮",
          blocks: [
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：`+ New chat`（新对话），下面是功能入口，例如 `Imagine`（图像生成）、`Tasks`、`Projects` 以及历史会话列表。不同版本入口略有差异。",
                "**左侧栏下半部分**：按时间排列的历史对话，悬停可重命名或删除。",
                "**中间顶部**：模型选择器（显示当前模型名，点开可切换不同档位的模型）。",
                "**底部输入框**：左下角是附件/上传按钮；输入框附近有两个常用开关——**Think**（先推理再回答）和 **DeepSearch**（联网深度检索），名字和位置以你看到的界面为准。",
                "**左下角**：账号、订阅（SuperGrok）与设置入口。",
              ],
            },
            {
              kind: "shot",
              src: "/shots/grok/chat-ui.svg",
              caption: "grok.com 主界面：左侧是功能与历史会话，输入框旁是 Think 与 DeepSearch（示意图）",
            },
            {
              kind: "note",
              text: "免费版的额度和可用功能经常调整（模型档位、每日次数都会变）。如果你想用的功能提示需要订阅，就说明当前档位不含它，这是正常现象。",
            },
          ],
        },
        {
          title: "核心用法一：实时信息与 Think 推理模式",
          blocks: [
            {
              kind: "text",
              text: "Grok 的差异化能力是接入 X 平台的实时动态，追热点、看舆情、找最新讨论最快。提问时把时间范围和关注点写清楚。",
            },
            {
              kind: "code",
              lang: "text",
              code: "请用搜索查一下最近 24 小时科技圈最受关注的三件事，每件事写：发生了什么、主要争议点是什么、信息来自哪些来源（附链接）。",
              caption: "实时热点：限定时间范围 + 要求给来源",
            },
            {
              kind: "code",
              lang: "text",
              code: "帮我看一下 <话题> 在社交平台上的舆论走向：支持方的主要观点是什么，反对方的主要观点是什么，双方各自引用了哪些事实。最后说明哪些说法目前还没有定论。",
              caption: "舆情分析：要求区分双方论据与未定论部分",
            },
            {
              kind: "warn",
              text: "实时信息里夹杂的观点和谣言很多。涉及金额、健康、法律的内容，务必点开原始来源核对，不要只看它的总结。",
            },
            {
              kind: "text",
              text: "打开 **Think** 后它会先输出推理过程再给结论，适合数学、逻辑、代码、方案权衡。日常闲聊记得关掉，否则更慢。",
            },
            {
              kind: "code",
              lang: "text",
              code: "我在 <场景> 下面临两个选择：A 是 <描述>，B 是 <描述>。请先分步推理两种方案的收益、成本、风险和不可逆程度，再用一张表格对比，最后给出你的建议和适用前提。",
              caption: "决策类问题：要求先推理、再对比表、最后给前提",
            },
            {
              kind: "code",
              lang: "text",
              code: "这段代码在 <环境/语言版本> 下报错，请先分析可能的原因（按可能性排序），再给出修复后的完整代码，并说明为什么原代码有问题：\n\n<粘贴报错和代码>",
              caption: "代码排错：给环境、报错原文和代码",
            },
          ],
        },
        {
          title: "核心用法二：图像生成与读图",
          blocks: [
            {
              kind: "text",
              text: "左侧栏的 **Imagine** 用于图像生成；反向也可以把图片上传让它描述、改写提示词或分析截图内容。",
            },
            {
              kind: "code",
              lang: "text",
              code: "生成一张图片：<主体>，<场景/动作>，<风格，如：极简扁平插画>，<光线与色调>，<画幅比例>，画面干净、不要文字。",
              caption: "图像提示词模板：主体 + 场景 + 风格 + 色调 + 画幅",
            },
            {
              kind: "list",
              items: [
                "上传一张截图问「这个界面里哪些元素需要改，为什么」——比文字描述省事。",
                "生成结果不满意就点重新生成，或在提示词后追加「更写实 / 更简洁 / 换个角度」。",
                "涉及真人肖像、商标、敏感题材的生成请求可能被拒绝，这是内容策略，不是账号问题。",
              ],
            },
          ],
        },
        {
          title: "进阶：订阅、额度与账号设置",
          blocks: [
            {
              kind: "list",
              items: [
                "**免费额度**：免费版可用但有次数/频率限制，具体规则官方经常调整，以 grok.com 页面提示为准。额度用完时会提示稍后再试或升级。",
                "**SuperGrok**：订阅后解锁更高额度、更强模型和深度检索等能力；X 平台的 Premium+ 订阅也包含 Grok 的更高使用额度（以 X 官方说明为准）。",
                "**管理订阅**：在账号设置里可以进入订阅/账单页面查看当前计划、账期与取消入口。",
                "**模型切换**：顶部模型选择器可切换档位；复杂任务用更高档模型，日常问答用默认即可。",
                "**语言**：直接用中文提问即可，也可以在自定义指令里要求「始终用中文回答」。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "【偏好】始终用简体中文回答，专有名词保留英文原文。\n【格式】结论先行，然后给依据；对比用表格，步骤用有序列表。\n【严谨】不确定就说「不确定」，不要编造数据或来源；联网查到的信息请附链接。",
              caption: "常用指令模板：直接粘进对话，或写进账号的偏好设置里",
            },
          ],
        },
        {
          title: "数据与隐私设置",
          blocks: [
            {
              kind: "list",
              items: [
                "**对话记录**：历史会话保存在账号里，默认可以在左侧栏删除单条对话；不用长期留存的会话建议定期清理。",
                "**数据使用**：与训练、数据使用相关的条款以 xAI 的隐私政策和账号设置里的开关为准，注册时注意默认选项。",
                "**账号安全**：用 Google/Apple/X 登录时，账号安全取决于对应平台；建议开启两步验证。",
                "**共享与公开**：分享对话链接前确认里面没有个人信息、公司资料或密钥。",
              ],
            },
            {
              kind: "warn",
              text: "不要把身份证、银行卡、公司内部资料、API Key 粘进对话框。用第三方登录意味着你的身份信息同时关联到 X/Google 等平台，注册时留意授权范围。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "问实时信息时把时间范围写死（「最近 24 小时」「本周」），答案质量差别很大。",
                "要对比就直接说「用表格」，要结论就直接说「先给一句话结论」。",
                "Think 只在复杂问题上开；开着的状态下简单问题也会变慢。",
                "回答不满意就说「换个角度重新分析」或「只保留结论」，不用重开对话。",
                "把常用要求（中文回答、要附来源）写在一条消息里，第一次就发给它。",
                "遇到额度限制就等重置，不要频繁注册新号——同一设备和网络下的多账号容易被关联风控。",
                "重要结论一定要点开原始链接核对，尤其是社交平台上的转述。",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "常用提示词模板（新建对话直接粘贴）",
          desc: "实时调研、推理决策、图像生成三类高频场景的固定句式。",
          code: `【实时调研】请用搜索查最近 24 小时关于 <主题> 的三条重要消息，每条写：发生了什么、争议点、来源链接。

【决策】我在 <场景> 下要在 A（<描述>）和 B（<描述>）之间选一个。请先分步推理收益/成本/风险，再用表格对比，最后给建议和适用前提。

【图像】生成：<主体>，<场景>，<风格>，<色调>，<画幅>，画面干净无文字。`,
        },
        {
          path: "对话偏好设置（直接发第一条消息，或用账号设置里的自定义选项）",
          desc: "固定住语言、格式和严谨度，省得每次重复交代。",
          code: `始终用简体中文回答，专有名词保留英文原文。
结论先行再给依据；对比用表格，步骤用有序列表。
不确定的内容标注「不确定」，不要编造数据和来源；联网查到的信息附链接。
回答默认不超过 500 字，除非我说「展开讲」。`,
        },
        {
          path: "API 接入示例（xAI API，可选）",
          desc: "要用自己的程序调用 Grok，需要在 xAI 开发者平台创建 API Key 并充值，接口兼容 OpenAI 格式；模型名与价格以官方文档为准。",
          code: `curl https://api.x.ai/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $XAI_API_KEY" -d '{"model":"<控制台里可用的模型名>","messages":[{"role":"user","content":"用三点总结这段话"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "grok.com 打不开或一直转圈",
          fix: "先确认网络环境能打开 google.com；然后换节点、清缓存、用无痕窗口重开。企业网络和校园网的出口 IP 常被判为不支持地区。",
        },
        {
          problem: "注册时手机号不支持，或收不到验证短信",
          fix: "Grok 和 X 都不支持中国大陆 +86 号码。优先用 Continue with Google / Apple 登录 grok.com，绕开手机号验证。",
        },
        {
          problem: "提示当前地区不可用 / 拒绝访问",
          fix: "出口 IP 的地区问题。换到支持地区的节点，关掉站点定位权限，清 Cookie 后重新登录。",
        },
        {
          problem: "免费额度用完，提示稍后再试或需要升级",
          fix: "免费版有频率和次数限制，等额度重置后再用，或订阅 SuperGrok 解锁更高额度。规则经常调整，以页面提示为准。",
        },
        {
          problem: "新注册的 X 账号很快被限制 / 无法登录",
          fix: "新号加上不稳定的 IP 很容易被 X 风控。先在 X 网页版完成邮箱/手机验证、完善资料并正常使用几天，再回来用 Grok；或直接改用 Google/Apple 登录 Grok。",
        },
        {
          problem: "图像生成或用图功能提示不可用",
          fix: "图像能力有时只对订阅用户或部分地区的账号开放。确认订阅状态，或先用带图分析这类基础能力；被内容策略拒绝时改换描述重试。",
        },
      ],
      cost:
        "免费版可以长期使用，但有次数和频率限制，且规则官方会随时调整，具体以 grok.com 页面提示为准。需要更高额度、更强模型和深度检索时订阅 **SuperGrok**（价格以 xAI 官网为准，通常需要境外支付方式；X 的 Premium+ 订阅也提供更高的 Grok 额度，以 X 官方说明为准）。订阅可在账号设置的订阅/账单页里管理并取消，取消后到期前仍可用。",
    },
    en: {
      difficulty: "Beginner (no prior experience needed)",
      os: "Web / iOS / Android",
      prereq: [
        {
          label: "Account (X, Google, Apple or email)",
          detail:
            "Easiest is Continue with Google or Continue with Apple. You can also sign in with an X (formerly Twitter) account or register with an email address. Note that creating an X account itself requires a supported-region phone number and a network that can reach X.",
        },
        {
          label: "Network (mandatory)",
          detail:
            "grok.com is not available in mainland China. You need a connection that reaches grok.com with an exit IP in a supported country. Keep the node stable afterwards — constant switching triggers security checks.",
        },
        {
          label: "Payment (optional — start on Free)",
          detail:
            "The free tier chats and does basic web search, with usage and rate limits that xAI adjusts over time. Subscribe to SuperGrok for higher limits, stronger models and deep search (check the official site; an international payment method is required).",
        },
        {
          label: "Client app (optional)",
          detail:
            "The web app works immediately. For mobile, search `Grok` in the App Store / Google Play — developer **xAI** — and the account syncs with the web.",
        },
        {
          label: "Region and age limits",
          detail:
            "Grok is only available in certain countries; phone and region fields routinely block mainland China users, and +86 numbers are not supported. Accounts below the minimum age are restricted.",
        },
      ],
      steps: [
        {
          title: "Open the site — make sure it's grok.com",
          blocks: [
            {
              kind: "text",
              text: "The chat product lives at **grok.com**. xAI's corporate site is **x.ai** (no chat there), and X's own Grok lives in a tab inside the X app. Don't mix them up.",
            },
            {
              kind: "warn",
              text: "Searching for \"Grok 中文版\" or \"Grok no login\" surfaces third-party sites that aren't xAI. They resell access and can log your conversations and X credentials. **Use grok.com (and the Grok tab inside X) only** — if the domain doesn't match, close it.",
            },
            {
              kind: "note",
              text: "If it won't load, spins forever or says your region is unsupported, check the network first (step 3) — it's rarely the site being down.",
            },
          ],
        },
        {
          title: "Sign up: Google, Apple, X or email",
          blocks: [
            {
              kind: "text",
              text: "On grok.com click **Sign up** (or Sign in) and pick a method.",
            },
            {
              kind: "shot",
              src: "/shots/grok/signup.svg",
              caption: "The Grok signup page: Google / Apple / X one-tap login, or email registration (illustration; wording may differ)",
            },
            {
              kind: "list",
              items: [
                "**Continue with Google / Apple**: authorise and you're in. Easiest option, no new password.",
                "**Continue with X**: sign in with your X account — useful because Grok is also available inside X afterwards.",
                "**Email**: enter your address, receive a code or verification email. It often lands in spam — search the sender `x.ai` or `grok`.",
              ],
            },
            {
              kind: "warn",
              text: "If your plan is to create an X account first: X also requires a supported-region phone number, +86 numbers won't receive a code, and brand-new X accounts get flagged easily. Signing into grok.com with Google or Apple is usually far less painful.",
            },
          ],
        },
        {
          title: "Log in, and what to do when it won't load",
          blocks: [
            {
              kind: "list",
              items: [
                "**Won't load / endless spinner**: the network isn't connected. Confirm google.com opens first.",
                "**Region unsupported / access denied**: the exit IP is unsupported. Switch nodes, clear the cache and retry in a private window.",
                "**Logged out immediately, bouncing back to login**: allow third-party cookies and temporarily disable script-blocking extensions.",
                "**Stuck on the human check**: latest Chrome/Edge, no translation extensions, avoid the strictest privacy mode.",
                "**X sign-in asks for verification**: complete the email or phone check on X's site first, then come back.",
              ],
            },
            {
              kind: "note",
              text: "Once signed in, the web app needs no install. Use the mobile app on the same network or it will spin forever.",
            },
          ],
        },
        {
          title: "Install the app: iOS / Android",
          blocks: [
            {
              kind: "list",
              items: [
                "**iOS**: search `Grok` in the App Store — developer **xAI**. Not in the China store; you need an overseas Apple ID.",
                "**Android**: search `Grok` on Google Play. There is no official build in Chinese app stores; avoid anything labelled \"中文版\".",
                "**Login**: use the same method as on the web and your conversations sync.",
                "**Or stay in X**: the Grok tab inside X means no extra install, though the feature set follows X's version.",
              ],
            },
            {
              kind: "warn",
              text: "Any third-party \"Grok client\" that asks for your X or Google password is phishing. Uninstall it.",
            },
          ],
        },
        {
          title: "Tour the interface: sidebar, model, composer, two toggles",
          blocks: [
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: `+ New chat`, then feature entries such as `Imagine` (image generation), `Tasks` and `Projects`, plus your conversation history. Exact entries vary by version.",
                "**Lower sidebar**: conversations in reverse-chronological order; hover to rename or delete.",
                "**Top centre**: the model picker — click it to switch between model tiers.",
                "**Composer**: the attach/upload button on the left; near the input sit two toggles — **Think** (reason before answering) and **DeepSearch** (web-grounded research). Names and placement follow your version.",
                "**Bottom-left**: account, subscription (SuperGrok) and settings.",
              ],
            },
            {
              kind: "shot",
              src: "/shots/grok/chat-ui.svg",
              caption: "grok.com: features and history on the left, Think and DeepSearch by the composer (illustration)",
            },
            {
              kind: "note",
              text: "Free-tier limits and available features change often (model tiers, daily counts). If a feature says it needs a subscription, that's simply your tier — not a bug.",
            },
          ],
        },
        {
          title: "Use case 1: real-time information and Think reasoning",
          blocks: [
            {
              kind: "text",
              text: "Grok's differentiator is live X data, which makes it fast for breaking news, sentiment and current debate. Always state the time window and what you care about.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Search the last 24 hours for the three most-discussed stories in tech. For each: what happened, what the main point of contention is, and which sources reported it (with links).",
              caption: "Breaking news: fix the time window and demand sources",
            },
            {
              kind: "code",
              lang: "text",
              code: "Look at how <topic> is being discussed on social platforms: what the supporters argue, what the critics argue, and which facts each side cites. Finish by naming what is still unresolved.",
              caption: "Sentiment analysis: separate both sides' evidence from open questions",
            },
            {
              kind: "warn",
              text: "Real-time feeds are full of opinion and rumour. For money, health or legal matters, open the original source — don't rely on the summary.",
            },
            {
              kind: "text",
              text: "With **Think** on, Grok reasons before answering — use it for maths, logic, code and trade-offs. Turn it off for casual chat, or it just gets slower.",
            },
            {
              kind: "code",
              lang: "text",
              code: "In <situation> I have two options: A is <describe>, B is <describe>. Reason step by step about upside, cost, risk and reversibility for each, then compare them in a table, then give your recommendation and the conditions under which it holds.",
              caption: "Decision support: reasoning, then table, then preconditions",
            },
            {
              kind: "code",
              lang: "text",
              code: "This code fails on <environment/language version>. List the likely causes in order of probability, then give the complete fixed version, then explain what was wrong with the original:\n\n<paste error and code>",
              caption: "Debugging: environment, error text and code",
            },
          ],
        },
        {
          title: "Use case 2: image generation and image reading",
          blocks: [
            {
              kind: "text",
              text: "**Imagine** in the sidebar generates images; the reverse works too — upload an image and ask it to describe it, refine the prompt or analyse a screenshot.",
            },
            {
              kind: "code",
              lang: "text",
              code: "Generate an image: <subject>, <scene/action>, <style, e.g. minimal flat illustration>, <light and palette>, <aspect ratio>, clean composition with no text.",
              caption: "Image prompt template: subject + scene + style + palette + ratio",
            },
            {
              kind: "list",
              items: [
                "Upload a screenshot and ask \"which elements of this UI should change, and why\" — much faster than describing it.",
                "Not happy? Regenerate, or append \"more photorealistic / simpler / different angle\".",
                "Requests involving real people's likenesses, trademarks or sensitive topics can be refused — that's content policy, not your account.",
              ],
            },
          ],
        },
        {
          title: "Level up: subscription, limits and account settings",
          blocks: [
            {
              kind: "list",
              items: [
                "**Free limits**: the free tier works but is capped by frequency and volume; the rules change, so trust the notice on grok.com.",
                "**SuperGrok**: unlocks higher limits, stronger models and deep search. X's Premium+ subscription also includes higher Grok usage (per X's documentation).",
                "**Managing the subscription**: account settings link to the subscription/billing page for your current plan, renewal date and cancellation.",
                "**Model switching**: the picker at the top switches tiers — use a higher tier for hard tasks, the default for everyday questions.",
                "**Language**: just ask in English; if you want a fixed language, state it in your standing instructions.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "[Language] Always answer in English; keep technical terms as-is.\n[Format] Conclusion first, then evidence; tables for comparisons, numbered lists for steps.\n[Rigour] Say \"uncertain\" when you are. Never invent data or sources — link what you searched.",
              caption: "Standing instruction template: paste it as your first message",
            },
          ],
        },
        {
          title: "Data and privacy settings",
          blocks: [
            {
              kind: "list",
              items: [
                "**Conversations**: history lives in your account; delete individual chats from the sidebar and clear old ones periodically.",
                "**Data use**: training and data clauses follow xAI's privacy policy and the switches in account settings — check the defaults when you sign up.",
                "**Account security**: with Google/Apple/X sign-in, security depends on that platform — enable two-factor authentication there.",
                "**Sharing**: before sharing a conversation link, check it for personal details, company material or keys.",
              ],
            },
            {
              kind: "warn",
              text: "Never paste ID scans, bank details, internal documents or API keys into the chat. Signing in with a third party also links your identity to X or Google — review the authorisation scopes.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "For live information, pin down the window (\"last 24 hours\", \"this week\") — the quality difference is large.",
                "Want a comparison? Ask for a table. Want the verdict? Ask for a one-sentence conclusion.",
                "Use Think only for hard problems; it slows down easy ones.",
                "Unhappy with an answer? Say \"re-analyse from another angle\" or \"conclusions only\" instead of starting over.",
                "Send your standing requirements (language, sources) as the first message.",
                "When you hit a limit, wait for the reset. Don't churn new accounts — multi-accounting on one device and IP gets flagged together.",
                "Verify important claims against the original link, especially when it paraphrases social posts.",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "Prompt templates (paste into a new chat)",
          desc: "Fixed phrasing for live research, decision reasoning and image generation.",
          code: `[Live research] Search the last 24 hours for three important stories about <topic>. For each: what happened, the point of contention, and a source link.

[Decision] I must choose between A (<describe>) and B (<describe>) in <situation>. Reason about upside/cost/risk first, then compare in a table, then recommend and state the conditions.

[Image] Generate: <subject>, <scene>, <style>, <palette>, <aspect ratio>, clean composition with no text.`,
        },
        {
          path: "Standing instructions (send as your first message)",
          desc: "Pin down language, format and rigour so you stop repeating yourself.",
          code: `Always answer in English; keep technical terms as-is.
Conclusion first, then evidence; tables for comparisons, numbered lists for steps.
Mark uncertain statements as "uncertain"; never invent data or sources — link what you searched.
Keep answers under 300 words unless I ask for depth.`,
        },
        {
          path: "API example (xAI API, optional)",
          desc: "Calling Grok from your own code requires an API key and credits from xAI's developer platform; the endpoint is OpenAI-compatible — confirm model names and prices in the official docs.",
          code: `curl https://api.x.ai/v1/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer $XAI_API_KEY" -d '{"model":"<a model available in your console>","messages":[{"role":"user","content":"Summarise this in three points"}]}'`,
        },
      ],
      troubles: [
        {
          problem: "grok.com won't load or spins forever",
          fix: "Confirm your connection reaches google.com, then switch nodes, clear the cache and retry in a private window. Corporate and campus networks are often geo-blocked.",
        },
        {
          problem: "Phone number not supported at signup, or no SMS arrives",
          fix: "Neither Grok nor X supports +86 (mainland China) numbers. Sign into grok.com with Continue with Google or Apple and skip phone verification entirely.",
        },
        {
          problem: "\"Not available in your region\" / access denied",
          fix: "A geo issue with your exit IP. Move to a supported region, revoke location permission for the site, clear cookies and sign in again.",
        },
        {
          problem: "Free limits used up — \"try again later\" or upgrade prompts",
          fix: "The free tier has frequency and volume caps. Wait for the reset or subscribe to SuperGrok. The rules change often — trust the on-page notice.",
        },
        {
          problem: "A newly created X account gets restricted",
          fix: "New accounts plus unstable IPs get flagged fast. Verify email/phone on X, complete the profile and use it normally for a few days, or simply sign into Grok with Google/Apple instead.",
        },
        {
          problem: "Image generation is unavailable",
          fix: "Image features are sometimes limited to subscribers or certain regions. Check your subscription status, or stick to image analysis, which is more widely available. Refusals from content policy need a rephrased prompt.",
        },
      ],
      cost:
        "The free tier is usable long term but capped by frequency and volume, and the rules change — check the notice on grok.com. Subscribe to **SuperGrok** for higher limits, stronger models and deep search (price on xAI's site; an international payment method is usually required; X's Premium+ also grants higher Grok limits per X's documentation). You can view and cancel the subscription from the account's subscription/billing page and keep access until the period ends.",
    },
  },

  "notion-ai": {
    zh: {
      difficulty: "入门（会用 Notion 基础操作更好）",
      os: "网页 / macOS / Windows / iOS / Android",
      prereq: [
        {
          label: "账号（邮箱即可）",
          detail:
            "用邮箱注册，或者直接用 Google / Apple 账号一键登录。个人版免费，注册不需要手机号（部分场景登录时会要求邮箱验证码）。",
        },
        {
          label: "网络环境（国内外都能用）",
          detail:
            "notion.so / notion.com 在国内可以打开，但**速度可能偏慢**，尤其工作区页面多的时候。不需要特殊网络环境，网络不畅时换个时段或换成桌面端会好一些。",
        },
        {
          label: "付费（AI 是付费能力）",
          detail:
            "Notion 记事本身免费；**Notion AI 需要单独购买 AI 附加包，或使用含 AI 的套餐**，常见价格是每成员每月 $10 上下（以官网为准）。免费账号通常有少量 AI 试用额度。",
        },
        {
          label: "客户端（可选）",
          detail:
            "网页版打开即用；桌面端和手机 App 体验更顺，其中**AI 会议纪要类功能需要桌面端**才能录制。账号和数据完全同步。",
        },
        {
          label: "地区与团队设置",
          detail:
            "国内国外都能访问，没有地区封锁。如果你在团队工作区里，AI 功能可能被管理员在 **Settings → Notion AI** 中关闭，个人设置里会看不到入口。",
        },
      ],
      steps: [
        {
          title: "打开官网，认准 notion.so / notion.com",
          blocks: [
            {
              kind: "text",
              text: "官方地址是 **notion.so**（现在会跳转到 **notion.com**）。打开后点右上角 **Get Notion free** 或 **Log in**。",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/site.png",
              caption: "Notion 官网：注册入口在右上角，Notion AI 是工作区内的付费能力",
            },
            {
              kind: "warn",
              text: "网上有「Notion 汉化客户端」「Notion 破解版」「Notion 加速器」这类第三方程序，需要你输入 Notion 账号密码——一律不要用。Notion 官方客户端只从官网下载。",
            },
          ],
        },
        {
          title: "注册登录：邮箱 + 验证码",
          blocks: [
            {
              kind: "list",
              items: [
                "**邮箱注册**：填邮箱 → 收 6 位验证码邮件 → 填入验证码即完成注册（不需要设密码，登录也靠验证码或 Google/Apple）。",
                "**Google / Apple**：点对应按钮授权即可，登录更快。",
                "**首次进入**：会问你用途（个人 / 团队）和是否邀请同事，随便选，之后可以在设置里改。",
                "**邮件收不到**：先看垃圾邮件，搜发件人 `notion` 再找一遍。",
              ],
            },
            {
              kind: "note",
              text: "Notion 是「页面 + 块」的结构：一个页面里可以嵌套子页面、数据库、待办清单。AI 的能力也长在这些块上，所以先新建一个页面再唤出 AI。",
            },
          ],
        },
        {
          title: "界面导览：把 AI 唤出来（空格菜单与 Ask AI）",
          blocks: [
            {
              kind: "text",
              text: "在任意页面里，新建一个空行（输入 `/` 或直接按**空格**）会弹出块菜单，里面能找到 AI 相关的选项；页面底部还有一个 **Ask AI** 输入框，用来就当前页面提问。",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/ask-ai.svg",
              caption: "在页面里选中文字会弹出 AI 菜单（Ask AI / Improve writing / Summarize…），页面底部是 Ask AI 输入框（示意图）",
            },
            {
              kind: "list",
              items: [
                "**选中一段文字**：会出现浮动菜单，包含 Ask AI、Improve writing、Summarize、Translate 等选项（菜单项随版本略有差异）。",
                "**空行菜单**：输入 `/` 或按空格，可以插入 AI 块、AI 会议纪要等。",
                "**底部 Ask AI**：直接在当前页面提问，例如「这一页有哪些待办还没完成」。",
              ],
            },
            {
              kind: "warn",
              text: "如果 AI 相关菜单是灰色或提示需要升级，说明当前工作区/账号没有可用额度或未订阅 AI。个人账号可以在设置里查看当前计划并升级。",
            },
            {
              kind: "list",
              items: [
                "**左侧栏顶部**：工作区名称（可切换工作区）、`Search`（全局搜索，也是找历史页面的最快方式）、`Home`（首页/收件箱）、`Inbox`（通知）。",
                "**左侧栏分区**：`Private`（你自己的页面）和团队共享区，点 `+` 可以新建页面或数据库。",
                "**左侧栏底部**：`Templates`（模板库）、`Settings`（设置，Notion AI 的开关就在这里）、回收站。",
                "**页面区**：标题在上，正文是块；输入 `/` 插入任何类型的内容（待办、表格、数据库、AI 块）。",
                "**右上角**：`Share`（分享）、`···`（更多操作），以及评论。",
              ],
            },
            {
              kind: "note",
              text: "界面英文术语很统一：Settings 在左下角、Share 在右上角。找不到功能就先搜一下左侧栏底部的 `Templates` 和 `Settings`。",
            },
          ],
        },
        {
          title: "用法一：选中文字，用 AI 写和改",
          blocks: [
            {
              kind: "text",
              text: "这是 Notion AI 最常用的形态：把光标放在文字里、选中一段内容，弹出菜单里选 AI 功能，结果会**直接替换原文或插入在下面**，不用复制到别的工具里再来回粘贴。",
            },
            {
              kind: "list",
              items: [
                "**Improve writing**：把口语化、啰嗦的文字改成正式表达。",
                "**Summarize**：把长会议记录、长文档压成要点。",
                "**Translate**：选中中文点一下就能出英文（或反过来）。",
                "**Continue writing**：接着你写的最后一句继续往下写。",
                "**Ask AI**：菜单里的自由问答入口，可以直接写要求，例如「改成给客户的版本，语气客气一点」。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "把这段会议记录整理成三部分：结论、待办（含负责人和截止时间）、遗留问题。语气客观，不要写成流水账。\n\n<粘贴会议记录>",
              caption: "选中文字后点 Ask AI，粘贴这类指令",
            },
          ],
        },
        {
          title: "用法二：Ask AI 就整个页面提问",
          blocks: [
            {
              kind: "text",
              text: "页面底部的 **Ask AI** 输入框里可以直接提问，它会结合当前页面的内容回答；如果你把多个资料页放进同一个工作区并连接（AI connectors），提问范围还能覆盖更多内容。",
            },
            {
              kind: "code",
              lang: "text",
              code: "根据这一页的内容，列出所有还没完成的待办，按截止时间排序，并标出没有负责人或没有截止时间的事项。",
              caption: "Ask AI 实用提问：把页面当数据库查",
            },
            {
              kind: "code",
              lang: "text",
              code: "把这一页的内容整理成一张表格，列包括：事项、负责人、截止时间、当前状态、风险点。缺信息的填「待确认」。",
              caption: "让 AI 把散落的文字变成结构化表格",
            },
            {
              kind: "note",
              text: "AI 生成的结果会作为普通块插入页面，可以像编辑其他内容一样修改、拖动、删除——不满意就删掉重来。",
            },
          ],
        },
        {
          title: "用法三：AI 会议纪要与模板化写作",
          blocks: [
            {
              kind: "list",
              items: [
                "**AI 会议纪要（AI Meeting Notes）**：在页面里插入会议纪要块后开始录制，它会自动转写并生成摘要；官方说明其**转写支持中文**（说话人标注目前主要是英文），且**需要桌面端**（不支持离线使用）。",
                "**使用前先征得同意**：录会议前告知参会人，这是基本的隐私礼貌，官方文档也建议这么做。",
                "**模板化写作**：把常用结构（周报、复盘、PRD）做成模板页，每次新建后让 AI 按结构填充，比每次重新组织快得多。",
                "**图片生成/编辑**：Notion AI 也提供图片生成与编辑能力，直接在页面里插入即可。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "【周报模板提示词】请按这个结构生成周报草稿：\n1. 本周完成（3 条，带结果和数据）\n2. 遇到的问题与处理方式\n3. 下周计划（3 条，带预期产出）\n4. 需要支持的事项\n素材：<粘贴你的零散记录>",
              caption: "把这类提示词存进模板，每周直接复用",
            },
          ],
        },
        {
          title: "进阶：Notion AI 设置、连接器与 Agent",
          blocks: [
            {
              kind: "list",
              items: [
                "**Settings → Notion AI**：AI 相关设置都在这里，包括工作区级的可用性开关（管理员可以整体关闭，例如关掉会议纪要录制）。",
                "**AI 连接器（AI connectors）**：可以在 **Settings → Notion AI → AI connectors** 里接入日历、云盘等外部数据源，让 AI 的回答能引用这些内容（官方文档以日历为例说明接入路径）。",
                "**Skills / Agent**：Notion 提供了技能（Skills）与 Agent 相关能力，Agent 可以执行更长的多步任务；入门阶段用 Ask AI 就够，熟悉后再看这些。",
                "**Notion MCP**：如果你用 Claude、Cursor 等工具，可以让它们通过 Notion 的 MCP 服务读取工作区内容（配置方式见官方 MCP 文档）。",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: `【AI 连接器接入清单】
1. 打开 Settings → Notion AI → AI connectors
2. 选择要接入的服务（日历、云盘等）
3. 点 Connect，在跳转页面完成授权
4. 回到 Notion，在对话里确认它能引用该服务的数据
5. 不需要时在同一页面断开连接`,
              caption: "连接器的操作顺序（入口以当前界面为准）",
            },
          ],
        },
        {
          title: "常见玩法组合",
          blocks: [
            {
              kind: "list",
              items: [
                "**会议 → 纪要 → 待办**：录完会议让 AI 出摘要，再让它把待办整理成表格，最后把表格拖进项目页。",
                "**长文档精读**：把文档内容粘进页面，选中后 Summarize，然后逐段 Ask AI 追问。",
                "**知识库沉淀**：读书笔记、行业资料放同一数据库，用 Ask AI 做跨页面的问答式检索。",
                "**双语内容**：中文写完选中 Translate 出英文版，人工再顺一遍用词。",
                "**周报流水线**：平时把工作记录随手写进一个「流水账」页面，周五让 AI 按模板整理成周报。",
                "**AI 生成配图**：写完整篇文档再让 AI 生成封面图，页面观感立刻不一样。",
              ],
            },
          ],
        },
        {
          title: "数据与隐私",
          blocks: [
            {
              kind: "list",
              items: [
                "**数据归属与训练**：Notion 官方说明 AI 功能不会用你的工作区内容训练模型（具体条款以官网帮助中心与隐私政策为准）。企业/团队空间另有管理员控制项。",
                "**分享与权限**：页面右上角 `Share` 决定谁能看。AI 生成的内容会继承页面权限，把页面公开前先确认里面没有敏感信息。",
                "**会议纪要的音频**：官方说明录音音频存在录制者本地设备上，只有录制者可下载；不录制时 Notion 不会监听麦克风。",
                "**不用 AI 会议通知**：可以在 `Settings → Notifications` 里关掉桌面端的会议检测通知。",
              ],
            },
            {
              kind: "warn",
              text: "不要把客户名单、工资表、合同扫描件直接粘进页面再让 AI 处理，尤其是把页面共享给团队之后。需要 AI 分析时先匿名化：去掉姓名、联系方式、金额明细。",
            },
          ],
        },
        {
          title: "效率技巧速查",
          blocks: [
            {
              kind: "list",
              items: [
                "`/` 是万能入口：插入 AI 块、表格、待办、看板都在这个菜单里。",
                "选中文字直接呼出 AI 菜单，改完就替换，不需要来回复制粘贴。",
                "让 AI 输出的内容尽量结构化（要求给表格或清单），后续才能直接当数据用。",
                "把常用提示词写进模板页，每周复用，比每次重新描述省事。",
                "国内访问慢的时候，用桌面端或换网络时段，编辑体验会明显变好——Notion 是编辑即保存，不用手动保存。",
                "AI 结果先当草稿：数字、人名、结论一定回原文核对一遍再发出去。",
                "团队协作时把 AI 用在「初稿、整理、翻译」上，最后的判断留给人。",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "AI 写作提示词（页面里选中文字 → AI 菜单 → Ask AI）",
          desc: "选中文字后直接粘贴这类指令，结果会插入或替换在原文位置。",
          code: `把这段文字改成正式的书面中文，去掉口语和重复，保留全部事实，不要添加新的信息。

把这部分内容压缩到 200 字以内，先给结论，再给两条依据。

把下面的内容整理成表格，列：事项、负责人、截止时间、状态、风险点。缺信息的填「待确认」。`,
        },
        {
          path: "周报 / 会议纪要模板（放进 Templates 复用）",
          desc: "把结构固定下来，每周新建页面后让 AI 按结构填充。",
          code: `# 周报（<日期范围>）
## 1. 本周完成（3 条，带结果与数据）
## 2. 遇到的问题与处理方式
## 3. 下周计划（3 条，带预期产出）
## 4. 需要支持的事项

--- 提示词 ---
请按上面的结构，用下面的素材生成周报草稿，语气客观，不要写成流水账：
<粘贴素材>`,
        },
        {
          path: "AI 连接器配置（Settings → Notion AI → AI connectors）",
          desc: "接入日历、云盘等外部数据源，让 AI 的回答能引用这些内容；不需要时在同一页面断开。",
          code: `1. 打开 Settings → Notion AI → AI connectors
2. 选择要接入的服务（例如日历）
3. 点 Connect，在跳转页面完成授权
4. 回到 Notion 的对话里确认可以引用该服务的数据
5. 不需要时在同一页面断开连接`,
        },
      ],
      troubles: [
        {
          problem: "找不到 AI 菜单，或提示需要升级",
          fix: "Notion AI 是付费能力：先到 Settings 里查看当前计划，确认是否包含 AI 或已单独购买 AI 附加包；如果你在团队工作区，AI 可能被管理员在 Settings → Notion AI 里关闭了，需要找管理员开启。",
        },
        {
          problem: "AI 试用额度用完，回答不再出现",
          fix: "免费/低价计划给的 AI 额度有限。等额度重置，或在 Settings 里升级到含 AI 的计划。查看当前用量也在设置页里。",
        },
        {
          problem: "中文内容处理效果一般（术语、语气）",
          fix: "在指令里把要求写具体：「用书面中文」「保留 XX 术语原文」「不要改数据」。让它先给结构再填内容，比一句话概括效果好得多。",
        },
        {
          problem: "国内打开页面很慢、编辑卡顿",
          fix: "Notion 服务器在境外，国内访问速度不稳定。换用桌面端、避开网络高峰、减少同一页面的巨型数据库（拆成分页或视图）都能明显改善。",
        },
        {
          problem: "会议纪要录不到声音 / 收不到会议提醒",
          fix: "先确认你用的是桌面端（该功能目前需要桌面端且不能离线使用），并在系统设置里给 Notion 麦克风权限。提醒开关在 Settings → Notifications 里。",
        },
        {
          problem: "AI 生成的内容有事实错误",
          fix: "把它当草稿：要求它标注不确定的地方、附上页面内的依据段落，然后人工核对数字和结论再对外发送。",
        },
      ],
      cost:
        "Notion 个人记事**免费**。**Notion AI 属于付费能力**：可以单独购买 AI 附加包，也可以使用含 AI 的更高档套餐，官方常见价格是每成员每月 $10 上下（以官网为准），免费与低价计划通常只提供少量 AI 试用额度。订阅与降级都在工作区的 **Settings → Plans / Billing** 里操作，降级或取消后，当前计费周期结束前仍可继续使用，之后 AI 功能会停用（笔记内容不受影响，依然可以访问）。具体价格、额度与退款政策以官网为准。",
    },
    en: {
      difficulty: "Beginner (basic Notion familiarity helps)",
      os: "Web / macOS / Windows / iOS / Android",
      prereq: [
        {
          label: "Account (email is enough)",
          detail:
            "Register with an email address or sign in with Google / Apple. The personal plan is free and signup doesn't need a phone number (some flows email you a code).",
        },
        {
          label: "Network (works inside and outside China)",
          detail:
            "notion.so / notion.com open from China, but can be **slow**, especially in busy workspaces. No special network is required — switching time of day or using the desktop app helps.",
        },
        {
          label: "Payment (AI is a paid capability)",
          detail:
            "Notes are free; **Notion AI is an add-on or part of a higher plan**, commonly around $10 per member per month (check the official site). Free and cheaper plans usually include a small AI trial allowance.",
        },
        {
          label: "Client app (optional)",
          detail:
            "The web app works immediately; the desktop and mobile apps feel smoother, and **meeting-notes recording requires the desktop app**. Everything stays in sync.",
        },
        {
          label: "Region and workspace settings",
          detail:
            "Available worldwide, no geo-blocking. In a team workspace, an admin can disable AI features under **Settings → Notion AI**, in which case you won't see the entries.",
        },
      ],
      steps: [
        {
          title: "Open the site — notion.so / notion.com",
          blocks: [
            {
              kind: "text",
              text: "The official address is **notion.so**, which now redirects to **notion.com**. Click **Get Notion free** or **Log in** in the top-right corner.",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/site.png",
              caption: "The Notion site: signup is top right, and Notion AI is a paid capability inside your workspace",
            },
            {
              kind: "warn",
              text: "Ignore \"Notion Chinese client\", \"cracked Notion\" and \"Notion accelerator\" downloads — they ask for your Notion credentials. The official client only comes from the official site.",
            },
          ],
        },
        {
          title: "Sign up: email and a code",
          blocks: [
            {
              kind: "list",
              items: [
                "**Email**: enter your address → receive a 6-digit code → enter it and you're registered (no password — future logins use a code or Google/Apple).",
                "**Google / Apple**: one click and you're in.",
                "**First run**: Notion asks whether you're using it personally or with a team and whether to invite colleagues. Pick anything; you can change it later.",
                "**No email?**: check spam and search the sender `notion`.",
              ],
            },
            {
              kind: "note",
              text: "Notion is pages made of blocks: pages nest inside pages, and databases, to-dos and lists are all blocks. AI attaches to those blocks, so create a page first and then summon the AI.",
            },
          ],
        },
        {
          title: "Tour the interface: summon the AI with the space menu and Ask AI",
          blocks: [
            {
              kind: "text",
              text: "On any page, start a new line and type `/` (or just press **space**) to open the block menu — AI entries live there. Every page also has an **Ask AI** prompt at the bottom for questions about that page.",
            },
            {
              kind: "shot",
              src: "/shots/notion-ai/ask-ai.svg",
              caption: "Selecting text reveals the AI menu (Ask AI / Improve writing / Summarize…); Ask AI also sits at the bottom of the page (illustration)",
            },
            {
              kind: "list",
              items: [
                "**Select text**: a floating menu appears with Ask AI, Improve writing, Summarize and Translate (entries vary slightly by version).",
                "**Empty line**: type `/` or press space to insert an AI block or a meeting-notes block.",
                "**Bottom Ask AI**: ask about the current page, e.g. \"which to-dos here are still open?\".",
              ],
            },
            {
              kind: "warn",
              text: "If the AI entries are greyed out or ask you to upgrade, your workspace or plan has no AI access or allowance left. Check your plan in settings and upgrade if you want it — everything else in Notion keeps working without AI.",
            },
            {
              kind: "list",
              items: [
                "**Top of the sidebar**: workspace name (switch workspaces here), `Search` (global search — the fastest way back to an old page), `Home`, `Inbox`.",
                "**Sidebar sections**: `Private` for your own pages, plus team sections. The `+` creates a new page or database.",
                "**Bottom of the sidebar**: `Templates`, `Settings` (this is where the Notion AI controls live) and trash.",
                "**Page area**: the title sits on top and the body is blocks; type `/` to insert anything (to-do, table, database, AI block).",
                "**Top right**: `Share`, the `···` menu, and comments.",
              ],
            },
            {
              kind: "note",
              text: "Labels are consistent: Settings bottom-left, Share top-right. If you can't find something, check the bottom of the sidebar.",
            },
          ],
        },
        {
          title: "Use case 1: select text and let AI write or edit",
          blocks: [
            {
              kind: "text",
              text: "This is how Notion AI is used most: put your cursor in the text, select a passage, pick an AI action, and the result is **inserted or replaces the selection in place** — no copying out to another tool.",
            },
            {
              kind: "list",
              items: [
                "**Improve writing**: turns casual or wordy prose into something polished.",
                "**Summarize**: compresses long meeting notes and documents into the key points.",
                "**Translate**: select English and get Chinese, or the other way round.",
                "**Continue writing**: picks up from your last sentence.",
                "**Ask AI**: the free-form entry where you type your own instruction, e.g. \"make this a client-facing version with a warmer tone\".",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "Turn these meeting notes into three sections: decisions, action items (with owner and due date), and open questions. Keep the tone neutral, don't write it as a narrative.\n\n<paste notes>",
              caption: "Select the text, then use Ask AI with an instruction like this",
            },
          ],
        },
        {
          title: "Use case 2: Ask AI about the whole page",
          blocks: [
            {
              kind: "text",
              text: "The **Ask AI** box at the bottom of a page answers with that page's content as context. Connect more sources (AI connectors) in settings and the scope grows.",
            },
            {
              kind: "code",
              lang: "text",
              code: "From this page, list every open action item sorted by due date, and flag the ones with no owner or no deadline.",
              caption: "Ask AI as a query engine over your page",
            },
            {
              kind: "code",
              lang: "text",
              code: "Turn this page into a table with columns: item, owner, due date, status, risk. Write \"TBC\" for anything missing.",
              caption: "Have AI turn loose text into a structured table",
            },
            {
              kind: "note",
              text: "AI output is inserted as normal blocks — edit, drag or delete them like anything else. Don't like it? Delete and ask again.",
            },
          ],
        },
        {
          title: "Use case 3: AI meeting notes and templated writing",
          blocks: [
            {
              kind: "list",
              items: [
                "**AI Meeting Notes**: insert a meeting-notes block and start recording; it transcribes and summarises automatically. Per Notion's docs, transcription supports Chinese (speaker labelling is English-only for now) and it **requires the desktop app** and doesn't work offline.",
                "**Get consent first**: tell participants before recording — Notion's own guidance says the same.",
                "**Templated writing**: save your recurring structures (weekly report, retro, PRD) as templates and let AI fill them in, instead of drafting the shape each time.",
                "**Image generation and editing**: Notion AI can also create and edit images directly on a page.",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: "[Weekly report prompt] Draft a weekly report in this structure:\n1. Shipped this week (3 items, with results and numbers)\n2. Problems and how they were handled\n3. Next week's plan (3 items, with expected output)\n4. Support needed\nSource material: <paste your scattered notes>",
              caption: "Save this in a template and reuse it every week",
            },
          ],
        },
        {
          title: "Level up: Notion AI settings, connectors and agents",
          blocks: [
            {
              kind: "list",
              items: [
                "**Settings → Notion AI**: everything AI-related — including the workspace availability switch an admin can use to turn features (like meeting-notes recording) off.",
                "**AI connectors**: connect calendars and other outside data under **Settings → Notion AI → AI connectors** so answers can draw on them (Notion documents the calendar flow).",
                "**Skills and Agent**: Notion offers skills plus agent capabilities for longer multi-step tasks. For a beginner, Ask AI is enough — explore these once you're comfortable.",
                "**Notion MCP**: tools like Claude and Cursor can read your workspace through Notion's MCP server (see the official MCP docs for setup).",
              ],
            },
            {
              kind: "code",
              lang: "text",
              code: `[AI connector checklist]
1. Open Settings → Notion AI → AI connectors
2. Pick the service to connect (calendar, drive, …)
3. Click Connect and finish authorising on the page that opens
4. Back in Notion, confirm it can reference that service in a chat
5. Disconnect from the same page when you no longer need it`,
              caption: "The connector flow (entry points follow your current UI)",
            },
          ],
        },
        {
          title: "Common combinations",
          blocks: [
            {
              kind: "list",
              items: [
                "**Meeting → minutes → actions**: record, get the summary, have AI turn the actions into a table, then drag that table into the project page.",
                "**Long-document reading**: paste the content into a page, select and Summarize, then interrogate section by section with Ask AI.",
                "**Knowledge base**: keep reading notes and industry research in one database and use Ask AI for cross-page questions.",
                "**Bilingual content**: write in English, then select and Translate; do a final human pass on the wording.",
                "**Weekly report pipeline**: dump work notes into a scratch page all week, then have AI restructure it into your template on Friday.",
                "**Cover images**: once the document is done, generate a cover image so the page looks finished.",
              ],
            },
          ],
        },
        {
          title: "Data and privacy",
          blocks: [
            {
              kind: "list",
              items: [
                "**Ownership and training**: Notion states that AI features don't train on your workspace content (see the help centre and privacy policy for the exact terms). Team and Enterprise workspaces have extra admin controls.",
                "**Sharing**: `Share` in the top-right decides who can see a page. AI output inherits the page's permissions — check for sensitive content before making a page public.",
                "**Meeting audio**: per Notion's docs, recordings are stored locally on the recorder's device and only the recorder can download them. Notion doesn't listen unless you're recording.",
                "**Turning off meeting detection**: disable desktop meeting-detection notifications under `Settings → Notifications`.",
              ],
            },
            {
              kind: "warn",
              text: "Don't paste customer lists, salary tables or scanned contracts into a page and hand it to AI, especially in a shared workspace. Anonymise first: strip names, contact details and exact amounts.",
            },
          ],
        },
        {
          title: "Speed tips",
          blocks: [
            {
              kind: "list",
              items: [
                "`/` is the universal menu: AI blocks, tables, to-dos and boards all live there.",
                "Select text to summon the AI menu — it edits in place, no copy-paste round trip.",
                "Ask for structured output (a table or checklist) so you can reuse it as data afterwards.",
                "Put your favourite prompts in a template page and reuse them weekly.",
                "If Notion is slow from your location, use the desktop app or work off-peak — edits save automatically, so nothing to worry about.",
                "Treat AI output as a draft: verify numbers, names and conclusions against the source before sending.",
                "In team settings, use AI for first drafts, tidying and translation — keep the final judgement human.",
              ],
            },
          ],
        },
      ],
      configs: [
        {
          path: "AI writing prompts (select text on a page → AI menu → Ask AI)",
          desc: "Paste an instruction like these; the result is inserted or replaces the selection.",
          code: `Rewrite this passage as formal written English. Remove filler and repetition, keep every fact, add nothing new.

Compress this to under 150 words: conclusion first, then two supporting points.

Turn the following into a table with columns: item, owner, due date, status, risk. Write "TBC" for anything missing.`,
        },
        {
          path: "Weekly report / meeting-notes template (save under Templates)",
          desc: "Fix the structure once, then let AI fill it in each week.",
          code: `# Weekly report (<date range>)
## 1. Shipped this week (3 items with results and numbers)
## 2. Problems and how they were handled
## 3. Next week's plan (3 items with expected output)
## 4. Support needed

--- prompt ---
Using the structure above and the material below, draft the report. Neutral tone, not a narrative:
<paste source>`,
        },
        {
          path: "AI connector setup (Settings → Notion AI → AI connectors)",
          desc: "Connect calendars and other data sources so AI answers can reference them; disconnect from the same page when done.",
          code: `1. Open Settings → Notion AI → AI connectors
2. Choose the service to connect (for example a calendar)
3. Click Connect and authorise on the page that opens
4. Back in a Notion chat, confirm it can reference that data
5. Disconnect from the same page when you no longer need it`,
        },
      ],
      troubles: [
        {
          problem: "No AI menu, or a prompt to upgrade",
          fix: "Notion AI is paid: check your plan in Settings and confirm it includes AI or that you've bought the AI add-on. In a team workspace an admin may have disabled AI under Settings → Notion AI — ask them to enable it.",
        },
        {
          problem: "The AI trial allowance ran out and AI responses stopped",
          fix: "Free and cheaper plans include only a small AI allowance. Wait for the reset, or upgrade to a plan that includes AI from the Settings page, where usage is also shown.",
        },
        {
          problem: "Chinese text handling feels mediocre (terminology, tone)",
          fix: "Be explicit: \"use formal written Chinese\", \"keep the term XX in English\", \"don't change any numbers\". Ask for structure first and content second — much better than a one-line request.",
        },
        {
          problem: "Slow page loads and laggy editing",
          fix: "Notion's servers are outside China, so speed varies. Use the desktop app, work off-peak, and split huge databases into views or sub-pages.",
        },
        {
          problem: "Meeting notes capture no audio, or there are no meeting prompts",
          fix: "Confirm you're on the desktop app (recording needs it and doesn't work offline) and grant microphone permission in system settings. Notification toggles live under Settings → Notifications.",
        },
        {
          problem: "AI output contains factual errors",
          fix: "Treat it as a draft: ask it to flag uncertainty and quote the source paragraph from the page, then verify numbers and conclusions yourself before sending anything out.",
        },
      ],
      cost:
        "Notion itself is **free** for personal notes. **Notion AI is a paid capability**: either the AI add-on or a higher plan that includes AI, commonly around $10 per member per month (check the official site). Free and cheaper plans usually include only a small AI trial allowance. Manage upgrades and downgrades under the workspace's **Settings → Plans / Billing**: after you cancel or downgrade you keep access until the current billing period ends, after which the AI features stop while your notes remain fully accessible. Check the official site for current prices, allowances and refund policy.",
    },
  },
};
