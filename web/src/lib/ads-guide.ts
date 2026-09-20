export type AdGuideStep = {
  titleZh: string;
  titleEn: string;
  textZh: string;
  textEn: string;
  src: string;
  captionZh: string;
  captionEn: string;
};

export type AdGuideId =
  | "vultr"
  | "bandwagon"
  | "digitalocean"
  | "racknerd"
  | "nordvpn"
  | "surfshark";

export const adGuides: Record<AdGuideId, AdGuideStep[]> = {
  vultr: [
    {
      titleZh: "打开官网，点 Sign Up",
      titleEn: "Open the site and click Sign Up",
      textZh: "打开 vultr.com。首页右侧就是注册框：填 Email、Password，勾选条款后点 **Create free account**。也可以用 GitHub / Google。",
      textEn: "Open vultr.com. The homepage has a signup form on the right: email, password, then **Create free account**. GitHub/Google also work.",
      src: "/shots/ads/vultr-1.png",
      captionZh: "Vultr 首页右侧就是注册框（官网实拍）",
      captionEn: "Vultr homepage signup form (official site)",
    },
    {
      titleZh: "登录控制台",
      titleEn: "Log in to the console",
      textZh: "打开 console.vultr.com（或 my.vultr.com），用刚才的邮箱点 **Log in**。登录后进入 Instances 列表。",
      textEn: "Open console.vultr.com, then **Log in** with the same email. You land on the Instances list.",
      src: "/shots/ads/vultr-2.png",
      captionZh: "控制台登录页（官网实拍）",
      captionEn: "Console login (official site)",
    },
    {
      titleZh: "点 Deploy Server / Create Instance",
      titleEn: "Click Deploy Server / Create Instance",
      textZh: "列表是空的也正常。点蓝色 **Deploy Server +**，或右上角 **Create Instance +**。不要点下面 OpenClaw 广告那一行。",
      textEn: "An empty list is normal. Click blue **Deploy Server +** or **Create Instance +**. Ignore the OpenClaw promo.",
      src: "/shots/ads/vultr-3.png",
      captionZh: "登录后点 Deploy Server 开通机器（控制台实拍）",
      captionEn: "After login, click Deploy Server (console)",
    },
    {
      titleZh: "点 Shared CPU，选 $5 那档",
      titleEn: "Click Shared CPU, then the $5 plan",
      textZh: "新开通页默认是 **Dedicated CPU / VX1**，最便宜也大约四十美元，所以看不到 5 美元。点上面的 **Shared CPU**，左边再点 **Cloud Compute**。第一行 **vc2-1c-1gb** 就是 1 vCPU / 1GB / 25GB SSD / 1TB，**$5.00/mo**。机房选东京或新加坡。右侧 Automatic Backup 默认会多 $1，只要 5 美元就点 **Disable**。看清价格后点 **Configure**，下一步选系统再 Deploy。若提示该机房没货，换一个机房，或改选 **High Frequency** 的 1GB（约 $6/月）。",
      textEn: "Create Instance defaults to **Dedicated CPU / VX1** (about $40+/mo), so the $5 plan is hidden. Click **Shared CPU**, then **Cloud Compute**. The first row **vc2-1c-1gb** is 1 vCPU / 1GB / 25GB SSD / 1TB at **$5.00/mo**. Set Location to Tokyo or Singapore. Automatic Backup adds $1 — click **Disable** if you only want $5. Then **Configure**, pick an OS, and Deploy. If the plan is out of stock in that region, switch location or use **High Frequency** 1GB (~$6/mo).",
      src: "/shots/ads/vultr-4.png",
      captionZh: "Shared CPU → Cloud Compute → vc2-1c-1gb = $5/月（控制台实拍）",
      captionEn: "Shared CPU → Cloud Compute → vc2-1c-1gb = $5/mo (console)",
    },
  ],
  digitalocean: [
    {
      titleZh: "打开官网，点 Sign up",
      titleEn: "Open the site and click Sign up",
      textZh: "打开 digitalocean.com，右上角 **Sign up**。Droplet 就是一台云服务器。",
      textEn: "Open digitalocean.com and click **Sign up**. A Droplet is a cloud VPS.",
      src: "/shots/ads/do-1.png",
      captionZh: "官网右上角 Sign up（官网实拍）",
      captionEn: "Sign up is top-right (official site)",
    },
    {
      titleZh: "邮箱或 Google 注册",
      titleEn: "Sign up with email or Google",
      textZh: "用邮箱或 **Continue with Google**。去邮箱点验证。新用户常有试用额度，以官网为准。",
      textEn: "Use email or **Continue with Google**, then verify. New accounts often include trial credit.",
      src: "/shots/ads/do-2.png",
      captionZh: "邮箱或 Google 注册（官网实拍）",
      captionEn: "Email or Google sign-up (official site)",
    },
    {
      titleZh: "Create Droplet：选新加坡",
      titleEn: "Create a Droplet in Singapore",
      textZh: "控制台点 **Create → Droplets**。Region 选 **Singapore**。Plan 选 **Basic** 入门档。最后点 **Create Droplet**。",
      textEn: "Create → Droplets. Region **Singapore**, plan **Basic**, then **Create Droplet**.",
      src: "/shots/ads/do-3.png",
      captionZh: "Singapore + Basic，再 Create Droplet（官网实拍）",
      captionEn: "Singapore + Basic, then Create Droplet (official site)",
    },
    {
      titleZh: "复制 Droplet IP",
      titleEn: "Copy the Droplet IP",
      textZh: "列表里出现 **Active** 后点进去，复制 IP。root 密码发到邮箱。终端执行 `ssh root@IP`。",
      textEn: "When it is **Active**, open it and copy the IP. Root password arrives by email. `ssh root@IP`.",
      src: "/shots/ads/do-4.png",
      captionZh: "Active 后复制 IP（官网实拍）",
      captionEn: "Copy the IP when Active (official site)",
    },
  ],
  racknerd: [
    {
      titleZh: "打开年付特价页，选套餐",
      titleEn: "Open the yearly specials and pick a plan",
      textZh: "打开 racknerd.com 的 KVM VPS 特价页。入门常见是大约 **$11/年** 那档（价格以当时页面为准）。点 **Order**。",
      textEn: "Open RackNerd KVM VPS specials. Starter yearly plans are often around **$11/year** (confirm on the page). Click **Order**.",
      src: "/shots/ads/racknerd-1.png",
      captionZh: "年付特价里点 Order（官网实拍）",
      captionEn: "Click Order on a yearly special (official site)",
    },
    {
      titleZh: "选系统和主机名",
      titleEn: "Choose OS and hostname",
      textZh: "Hostname 随便填（如 `vps1`）。操作系统选 **Ubuntu 24.04**。点 **Continue**。",
      textEn: "Set any hostname (e.g. `vps1`). OS: **Ubuntu 24.04**. Click **Continue**.",
      src: "/shots/ads/racknerd-2.png",
      captionZh: "Ubuntu + 主机名后 Continue（官网实拍）",
      captionEn: "Ubuntu + hostname, then Continue (official site)",
    },
    {
      titleZh: "结账付款",
      titleEn: "Checkout and pay",
      textZh: "没有账号就现场注册（邮箱+密码）。付款可用 PayPal / 信用卡等，以结账页为准。点 **Complete Order**。",
      textEn: "Register with email if needed. Pay with PayPal or card as shown. Click **Complete Order**.",
      src: "/shots/ads/racknerd-3.png",
      captionZh: "注册并 Complete Order（官网实拍）",
      captionEn: "Register and Complete Order (official site)",
    },
    {
      titleZh: "在客户区查看 VPS",
      titleEn: "Find the VPS in the client area",
      textZh: "登录 my.racknerd.com → **Services**。点进刚买的机器，复制 IP 和密码（也在开通邮件里）。",
      textEn: "In my.racknerd.com → **Services**, open the new VPS and copy IP and password (also emailed).",
      src: "/shots/ads/racknerd-4.png",
      captionZh: "Services 里查看 IP（官网实拍）",
      captionEn: "IP is under Services (official site)",
    },
  ],
  bandwagon: [
    {
      titleZh: "打开套餐页，选 KVM",
      titleEn: "Open the plan page and pick KVM",
      textZh: "打开搬瓦工 VPS 页面。新手先看 **KVM 基础年付**（价格以官网为准）。点套餐上的 **Order**。",
      textEn: "Open BandwagonHost VPS plans. Beginners usually start with a **KVM yearly** plan. Click **Order**.",
      src: "/shots/ads/bwh-1.png",
      captionZh: "选 KVM 套餐点 Order（官网实拍）",
      captionEn: "Order a KVM plan (official site)",
    },
    {
      titleZh: "确认购物车并结账",
      titleEn: "Review the cart and check out",
      textZh: "核对年限和套餐后点 **Checkout**。机房可以之后在 KiwiVM 里换。",
      textEn: "Confirm term and plan, then **Checkout**. Location can be changed later in KiwiVM.",
      src: "/shots/ads/bwh-2.png",
      captionZh: "购物车确认后 Checkout（官网实拍）",
      captionEn: "Checkout after reviewing the cart (official site)",
    },
    {
      titleZh: "注册并付款",
      titleEn: "Register and pay",
      textZh: "用邮箱注册账号。结账页可选支付宝 / PayPal / 卡（以当时页面为准）。点 **Complete Order**。",
      textEn: "Register with email. Pay with Alipay / PayPal / card as shown. **Complete Order**.",
      src: "/shots/ads/bwh-3.png",
      captionZh: "填邮箱并付款（官网实拍）",
      captionEn: "Email + payment (official site)",
    },
    {
      titleZh: "打开 KiwiVM 复制 IP",
      titleEn: "Open KiwiVM and copy the IP",
      textZh: "客户区进入刚买的服务，点 **KiwiVM**。这里有 Main IP、SSH 密码、换机房。用 `ssh root@IP` 登录。",
      textEn: "Open the service → **KiwiVM** for Main IP, SSH password, and location change. `ssh root@IP`.",
      src: "/shots/ads/bwh-4.png",
      captionZh: "KiwiVM 面板复制 IP（官网实拍）",
      captionEn: "Copy IP in KiwiVM (official site)",
    },
  ],
  nordvpn: [
    {
      titleZh: "打开官网，点 Get NordVPN",
      titleEn: "Open the site and click Get NordVPN",
      textZh: "打开 nordvpn.com，点 **Get NordVPN**。只从官网下载 App。",
      textEn: "Open nordvpn.com and click **Get NordVPN**. Download the app only from the official site.",
      src: "/shots/ads/nord-1.png",
      captionZh: "官网 Get NordVPN（官网实拍）",
      captionEn: "Get NordVPN on the official site (official site)",
    },
    {
      titleZh: "选订阅时长",
      titleEn: "Choose a plan length",
      textZh: "进入价格页。**2 年**通常最便宜（以当时页面为准）。点 Continue。",
      textEn: "On pricing, **2-year** is often the best value (confirm on the page). Continue.",
      src: "/shots/ads/nord-2.png",
      captionZh: "选套餐后 Continue（官网实拍）",
      captionEn: "Pick a plan, then Continue (official site)",
    },
    {
      titleZh: "创建账号并付款",
      titleEn: "Create an account and pay",
      textZh: "填邮箱和密码。用境外信用卡或 PayPal 付款（国内卡经常失败）。付完账号立刻生效。",
      textEn: "Set email and password. Pay with an international card or PayPal. The account activates immediately.",
      src: "/shots/ads/nord-3.png",
      captionZh: "邮箱 + 付款（官网实拍）",
      captionEn: "Email + payment (official site)",
    },
    {
      titleZh: "安装官方 App 并连接",
      titleEn: "Install the official app and connect",
      textZh: "打开 nordvpn.com/download，按系统安装。用刚才的邮箱登录，点 **Quick Connect**。",
      textEn: "Download from nordvpn.com/download, sign in with the same email, then **Quick Connect**.",
      src: "/shots/ads/nord-4.png",
      captionZh: "装 App 后 Quick Connect（官网实拍）",
      captionEn: "Quick Connect in the official app (official site)",
    },
  ],
  surfshark: [
    {
      titleZh: "打开官网，点 Get Surfshark",
      titleEn: "Open the site and click Get Surfshark",
      textZh: "打开 surfshark.com，点 **Get Surfshark**。一个账号不限设备数。",
      textEn: "Open surfshark.com and click **Get Surfshark**. One account covers unlimited devices.",
      src: "/shots/ads/surf-1.png",
      captionZh: "官网 Get Surfshark（官网实拍）",
      captionEn: "Get Surfshark on the official site (official site)",
    },
    {
      titleZh: "选订阅时长",
      titleEn: "Choose a plan length",
      textZh: "价格页选 **2 年**通常更划算（以官网为准）。点 Get deal / Continue。",
      textEn: "**2-year** is often cheapest (confirm on the site). Get deal / Continue.",
      src: "/shots/ads/surf-2.png",
      captionZh: "选时长后继续（官网实拍）",
      captionEn: "Pick duration, then continue (official site)",
    },
    {
      titleZh: "注册并付款",
      titleEn: "Register and pay",
      textZh: "填邮箱密码，按页面用卡或 PayPal 付款。",
      textEn: "Create email/password and pay by card or PayPal.",
      src: "/shots/ads/surf-3.png",
      captionZh: "创建账号并 Subscribe（官网实拍）",
      captionEn: "Create account and Subscribe (official site)",
    },
    {
      titleZh: "安装 App，打开连接",
      titleEn: "Install the app and turn it on",
      textZh: "从官网下载 Windows / macOS / 手机客户端。同一邮箱登录，把开关打到 **ON**。",
      textEn: "Download from the official site, sign in, and switch **ON**.",
      src: "/shots/ads/surf-4.png",
      captionZh: "官方 App 打开 ON（官网实拍）",
      captionEn: "Turn ON in the official app (official site)",
    },
  ],
};
